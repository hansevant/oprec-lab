import React from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

const Data = () => {
    const [data, setData] = React.useState()
    const [image, setImage] = React.useState()

    const luluskan = async() =>{
        const r = await axios.patch(`http://localhost:4000/registrants/luluskan/${npm}`)
        setData(true)
        console.log(r.data)
    }
    const gagalkan = async() =>{
        const r = await axios.patch(`http://localhost:4000/registrants/gagalkan/${npm}`)
        setData(false)
        console.log(r.data)
    }
    const hapus = () =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(async(result) => {
            
            if (result.isConfirmed) {
                await axios.delete(`http://localhost:4000/registrants/${npm}`)
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
        navigate("/table");
            }
          })
    }


    const [user, setUser] = React.useState([]);
    const navigate = useNavigate();
    const {npm} = useParams();

    React.useEffect(()=>{
        getUserByNpm();
    },[]);

    const getUserByNpm = async () => {
        const response = await axios.get(`http://localhost:4000/registrants/${npm}`)
        setUser(response.data.data)
        setImage(response.data.data.passportPhoto)
        setData(response.data.data.isQualified)
        console.log(response.data)
    }

  return (
    
<div className=" bg-[#071e34] flex font-medium items-center justify-center h-screen">

<div className="w-80 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
    <div className="flex items-center justify-between">
        <span className="text-gray-400 text-base">{user.role}</span>
        <button onClick={() => navigate(-1)} className="text-emerald-400">
            Kembali
        </button>
    </div>
    <div className="mt-6 w-fit mx-auto">
        <img src={`http://localhost:4000/images/${image}`} className="w-28 " alt="wajah pendaftar" />
    </div>

    <div className="mt-8 mb-2 ">
        <h2 className="text-white font-bold text-2xl tracking-wide">{user.name} </h2>
    </div>
    <p className="text-gray-400 font-semibold">NPM : {user.npm}</p>
    <p className="text-gray-400 font-semibold">Kelas : {user.clas}</p>
    <p className="text-gray-400 font-semibold">Jurusan : {user.major}</p>
    <p className="text-gray-400 font-semibold">Region : {user.region}</p>
    <p className="text-gray-400 font-semibold">{user.email}</p>
    <p className="text-gray-400 font-semibold">{user.number}</p>
    <p className="text-white font-semibold my-2.5" >
        Status : {data ? (<span className="text-emerald-400">Lulus</span>) 
        : (<span className="text-red-500">Tidak Lulus</span>)}
    </p>

    
    <a className='text-sky-400' href={`http://localhost:4000/images/${user.file}`} >Lihat Berkas</a>
    <br/>
    <button className='inline-block bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 disabled:hover:scale-100 disabled:bg-indigo-900' disabled={data ? true : false} onClick={luluskan} >Luluskan</button>
    <button className='inline-block bg-pink-600 px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-pink-500 disabled:hover:scale-100 disabled:bg-pink-900' disabled={data ? false : true} onClick={gagalkan}>Gugurkan</button>
    <button className='inline-block bg-gray-600 px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-gray-500 disabled:hover:scale-100' onClick={hapus} >Hapus</button>
</div>


</div>
  )
}

export default Data