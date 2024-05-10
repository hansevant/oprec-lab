import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    const registrants = [
        {
            role: "Programmer",
            name: "Hans Tatipata",
            npm: 12119740,
            clas: "4KA02",
            major: "Sistem Informasi",
            region: "Depok",
            email: "kerjaanhans@gmail.com",
            number: "082298944933",
            passportPhoto: "12119740_foto.png",
            file: "12119740_berkas.pdf",
            isQualified: true,
        },
        {
            role: "Asisten",
            name: "Johnny English",
            npm: 12119742,
            clas: "3PA22",
            major: "Psikologi",
            region: "Depok",
            email: "swag@gmail.cosm",
            number: "08958349122",
            passportPhoto: "12119742_foto.jpg",
            file: "12119742_berkas.pdf",
            isQualified: false,
        },
        {
            role: "Asisten",
            name: "Romeo Lupin",
            npm: 51120928,
            clas: "4IA29",
            major: "Informatika",
            region: "Karawaci",
            email: "swag@gmail.cosm",
            number: "08762621770",
            passportPhoto: "51120928_foto.jpg",
            file: "51120928_berkas.pdf",
            isQualified: false,
      
        },
        {
            role: "Asisten",
            name: "Connie Springer",
            npm: 12420829,
            clas: "3PA21",
            major: "Psikologi",
            region: "Kalimalang",
            email: "231@sda",
            number: "0888271992",
            passportPhoto: "12420829_foto.jpg",
            file: "12420829_berkas.pdf",
            isQualified: false,
        }
    ]

    for (let registrant of registrants){
        await prisma.registrant.create({
            data: registrant
        })
    }
}

main().catch(e => {
    console.log(e);
    process.exit(1)
}).finally(()=> {
    prisma.$disconnect()
})