import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert';

function Form() {

    const navigate = useNavigate();

    const [name, setName] = useState("")
    const [role, setRole] = useState("Asisten")
    const [npm, setNpm] = useState("")
    const [clas, setClas] = useState("")
    const [major, setMajor] = useState("")
    const [region, setRegion] = useState("Depok")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [passportPhoto, setPassportPhoto] = useState("")
    const [file, setFile] = useState("")

    const postData = async(e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("name", name)
        formData.append("role", role)
        formData.append("npm", npm)
        formData.append("clas", clas)
        formData.append("major", major)
        formData.append("region", region)
        formData.append("email", email)
        formData.append("number", number)
        formData.append("passportPhoto", passportPhoto)
        formData.append("file", file)
        try {
            const response = await axios.post('http://localhost:4000/registrants', formData,{
                headers:{
                    "Content-Type": "multipart/form-data"
                }
            });
            swal({
                title:'Berhasil',
                text: response.data.message,
                icon: 'success',
                button: "Close!"
            })
            navigate("/");
        } catch (error) {
            swal({
                title:'Gagal!',
                text: error.response.data.message,
                icon: 'error',
                button: "Close!"
            })
            // console.log(error.response.data);
        }
    }

  return (
    <form onSubmit={postData} className="mt-8 grid grid-cols-6 gap-6">

        <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Nama" className="label-form">Nama</label>
            <input autoFocus type="text" value={name} onChange={(e) => setName(e.target.value)} id="Nama" className="input-form" />
        </div>

        <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Role" className="label-form">Mendaftar Sebagai</label>
            <select id="Role" value={role} onChange={(e)=> setRole(e.target.value)} className="input-form">
                <option value="Asisten">Asisten</option>
                <option value="Programmer">Programmer</option>
            </select>
        </div>

        <div className="col-span-6 sm:col-span-3">
            <label htmlFor="NPM" className="label-form">NPM</label>
            <input type="text" value={npm} onChange={(e) => setNpm(e.target.value)}id="NPM" className="input-form" />
        </div>

        <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Kelas" className="label-form">Kelas</label>
            <input type="text" value={clas} onChange={(e) => setClas(e.target.value)}id="Kelas" className="input-form" />
        </div>

        <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Jurusan" className="label-form">Jurusan</label>
            <input type="text" value={major} onChange={(e) => setMajor(e.target.value)}id="Jurusan" className="input-form" />
        </div>

        <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Region" className="label-form">Region</label>
            <select id="Region" value={region} onChange={(e)=> setRegion(e.target.value)} className="input-form">
                <option value="Depok">Depok</option>
                <option value="Kalimalang">Kalimalang</option>
                <option value="Karawaci">Karawaci</option>
                <option value="Cengkareng">Cengkareng</option>
                <option value="Salemba">Salemba</option>
            </select>
        </div>

        <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Email" className="label-form">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}id="Email" className="input-form" />
        </div>

        <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Number" className="label-form">Nomor WhatsApp</label>
            <input type="tel" value={number} onChange={(e) => setNumber(e.target.value)}id="Number" className="input-form" />
        </div>

        <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Photo" className="label-form">Pas Foto 4x6</label>
            <input type="file" onChange={(e) => setPassportPhoto(e.target.files[0])} id="Photo" className="input-file-form" />
            <div className="mt-1 text-sm text-gray-500 dark:text-gray-300">Upload foto terbaru dan ukuran paling besar 2mb</div>
        </div>

        <div className="col-span-6 sm:col-span-3">
            <label htmlFor="File" className="label-form">Berkas</label>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} id="File" className="input-file-form" />
            <div className="mt-1 text-sm text-gray-500 dark:text-gray-300">Unggah berkas dengan ukuran paling besar 10mb</div>
        </div>

        <div className="col-span-6">
            <label htmlFor="MarketingAccept" className="flex gap-4">
            <input required
                type="checkbox"
                id="MarketingAccept"
                className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-offset-gray-900"
            />

            <span className="text-sm text-gray-700 dark:text-gray-200">
                Saya Menyatakan Bahwa Data yang saya kirim adalah benar, dan saya akan bertanggung jawab apabila data tersebut palsu
            </span>
            </label>
        </div>

        <div className="col-span-6 sm:col-span-3 sm:flex sm:items-center sm:gap-4">
            <button
            className="inline-block shrink-0 rounded-md border border-pink-600 bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-pink-600 focus:outline-none focus:ring active:text-pink-500 dark:hover:bg-pink-700 dark:hover:text-white"
            >
            Submit
            </button>
        </div>
        
    </form>
  )
}

export default Form