import { PrismaClient } from "@prisma/client";
import path from "path";
import fs from 'fs';

const prisma = new PrismaClient();

const index = async (req,res) => {
    const registrants = await prisma.registrant.findMany();
    return res.json({data : registrants});
}

const show = async (req,res) => { 

    const npm = req.params.npm;
    if(isNaN(npm)){
        return res.status(400).json({
            status: 'error',
            message: 'Mohon Masukan NPM yang benar'
        })
    }

    const registrant = await prisma.registrant.findUnique({
        where: {
          npm : parseInt(npm)
        },
    })

    if(!registrant) { 
        return res.status(404).json({
            status: 'error',
            message: 'Maaf NPM tidak ditemukan'
        })
    }

    return res.json({
        status: 'success',
        message: `Show Route id: ${npm}`,
        data: registrant
    });
    
}

const store = async (req, res) => {

    const {
        role,
        npm,
        name,
        clas,
        major,
        email,
        number,
        region
    } = req.body;

    // cek npmnya string atau integer (karna harus integer)
    if(isNaN(req.body.npm)){
        return res.status(400).json({
            status: 'error',
            message: 'NPM yang dimasukkan harus angka',
        });
    }

    if(!role || !npm || !name || !clas || !major || !email || !number || !region){
        return res.status(400).json({
            status: 'error',
            message: 'Semua Kolom tolong di isi'
        })
    }

    if(req.files === null) {
        return res.status(400).json({
            message: "Tidak ada file yang diinput"
        })
    };

    const file = req.files.file;
    const passportPhoto = req.files.passportPhoto;

    if(!file || !passportPhoto) return res.status(400).json({message: "Tolong unggah file anda"});

    const fileSize = file.data.length;
    const passportPhotoSize = passportPhoto.data.length;
    const extFile = path.extname(file.name);
    const extPassportPhoto = path.extname(passportPhoto.name);
    const fileName = npm + '_berkas' + extFile;
    const passportPhotoName = npm + '_foto' + extPassportPhoto;
    const allowedTypeFile = ['.pdf'];
    const allowedTypePassportPhoto = ['.png','.jpg','.jpeg'];

    if(!allowedTypeFile.includes(extFile.toLowerCase())) return res.status(422).json({message: "File harus pdf"});
    if(!allowedTypePassportPhoto.includes(extPassportPhoto.toLowerCase())) return res.status(422).json({message: "Foto anda harus berformat yang sesuai"});
    if(fileSize > 10000000) return res.status(422).json({message: "Gambar harus dibawah 10 MB"});
    if(passportPhotoSize > 2000000) return res.status(422).json({message: "Gambar harus dibawah 2 MB"});

    const npmParsed = parseInt(req.body.npm);
    const isNpmExist = await prisma.registrant.findUnique({
        where: { npm: npmParsed }
    });

    if(isNpmExist){
        return res.status(402).json({
            status: 'error',
            message: 'Anda sudah terdaftar jika dilihat dari NPM',
            data: null
        });
    }

    file.mv(`./public/images/${fileName}`, (err)=>{
        if(err) return res.status(500).json({message: err.message});
    })

    passportPhoto.mv(`./public/images/${passportPhotoName}`, (err)=>{
        if(err) return res.status(500).json({message: err.message});
    })

    const registrant = await prisma.registrant.create({
        data: {
            role,
            npm : npmParsed,
            name,
            clas,
            major,
            email,
            number,
            passportPhoto : passportPhotoName,
            file : fileName,
            region
        }
    })


    return res.status(200).json({
        status: 'success',
        message: 'Berhasil Mendaftar',
        data: registrant
    });

}

const patchPass = async (req, res) =>{
    const npm = Number(req.params.npm)

    const isNpmExist = await prisma.registrant.findUnique({
        where: { npm : parseInt(npm)}
    });

    if(!isNpmExist){
        return res.status(404).json({
            status: 'error',
            message: 'registrant not found'
        });
    }

    await prisma.registrant.update({
        where: {
          npm
        },
        data: {
          isQualified: true,
        },
      })

      return res.json({
        status: 'success',
        message: `Registrant has been qualified with npm: ${npm}`,
    });
}

const patchFail = async (req, res) =>{
    const npm = Number(req.params.npm)

    const isNpmExist = await prisma.registrant.findUnique({
        where: { npm : parseInt(npm)}
    });

    if(!isNpmExist){
        return res.status(404).json({
            status: 'error',
            message: 'registrant not found'
        });
    }

    await prisma.registrant.update({
        where: {
          npm
        },
        data: {
          isQualified: false,
        },
      })

      return res.json({
        status: 'success',
        message: `Registrant has been unqualified with npm: ${npm}`,
    });
}

const destroy = async (req, res) =>{
    const npm = req.params.npm;

    const isNpmExist = await prisma.registrant.findUnique({
        where: { npm : parseInt(npm)}
    });

    if(!isNpmExist){
        return res.status(404).json({
            status: 'error',
            message: 'registrant not found'
        });
    }

    const filepath = `./public/images/${isNpmExist.file}`;
    const photopath = `./public/images/${isNpmExist.passportPhoto}`;

    fs.unlinkSync(filepath)
    fs.unlinkSync(photopath)

    await prisma.registrant.delete({
        where: { npm : Number(npm) },
    })

    return res.json({
        status: 'success',
        message: `Delete Route with npm: ${npm}`
    });
    
}

    const showChart = async(req,res) => {
        const params = req.params.tipe;

        if(params == 'role'){
            const asist = await prisma.registrant.findMany({where:{role : 'Asisten'},})
            const prog = await prisma.registrant.findMany({where:{role : 'Programmer'},})
            return res.json({
                status: 'success',
                data: [ 
                    asist.length,
                    prog.length,
                ]
            });
        }

        if(params == 'region'){
            const d = await prisma.registrant.findMany({where:{region : 'Depok'},})
            const j = await prisma.registrant.findMany({where:{region : 'Kalimalang'},})
            const k = await prisma.registrant.findMany({where:{region : 'Karawaci'},})
            const c = await prisma.registrant.findMany({where:{region : 'Cengkareng'},})
            const a = await prisma.registrant.findMany({where:{region : 'Salemba'},})
            return res.json({
                status: 'success',
                data :[
                    d.length,
                    j.length,
                    k.length,
                    c.length,
                    a.length,
                ]
            });
        }

        if(params == 'batch'){
            const four = await prisma.registrant.findMany({where:{clas : { startsWith : '4'}},})
            const three = await prisma.registrant.findMany({where:{clas : { startsWith : '3'}},})
            const two = await prisma.registrant.findMany({where:{clas : { startsWith : '2'}},})
            return res.json({
                status: 'success',
                data :[
                    four.length,
                    three.length,
                    two.length,
                ]
            });
        }

        return res.json({
            message : 'nothin'
        });
    }

export {index, show, store, patchFail, patchPass, showChart, destroy}