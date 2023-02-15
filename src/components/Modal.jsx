import axios from "axios";
import React from "react";
import swal from "sweetalert";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);

  const[npm, setNpm] = React.useState('')

  const inquiry = async(e) =>{
    e.preventDefault()
    try{
        const response = await axios.get(`http://localhost:5000/registrants/${npm}`)
        console.log(response.data.data.isQualified)
        if(response.data.data.isQualified){
        swal({
            title:'Lulus',
            text: "Selamat " + response.data.data.name + " anda dinyatakan lulus untuk lebih lanjutnya anda akan diundang kedalam grup, Terima kasih!",
            icon: 'success',
            button: "Tutup!"
        })
    }else{
        swal({
            title:'Tidak Lulus',
            text: "Mohon Maaf " + response.data.data.name + " untuk saat ini anda belum bisa bergabung dengan Laboratorium Psikologi namun jangan berkecil hati, anda masih bisa mengikuti oprec lagi disemester depan. Terima kasih!",
            icon: 'error',
            button: "Tutup!"
        })
    }
    }catch(e){
        swal({
            title:'Error',
            text: e.response.data.message,
            icon: 'warning',
            button: "Tutup!"
        })
    }
}

  return (
    <>
      <button className="group relative inline-block text-base font-medium text-c4 focus:outline-none focus:ring"
        type="button"
        onClick={() => setShowModal(true)}>
            <span className="absolute inset-0 border-2 border-current"></span>
            <span className="block border-2 border-current bg-transparent px-12 py-3 transition-transform group-hover:translate-x-2 group-hover:translate-y-2">
              Cek Kelulusan
            </span>
        </button>

      {showModal ? (
        <>
          <div
            className="p-5 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-96 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between pl-4 pt-4 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold">
                    Masukkan NPM Anda
                  </h3>
                  <button
                    className="pb-4 pr-4 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                      ×
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">

                <form onSubmit={inquiry}>   
                    <div className="relative">
                        <input type="search" onChange={(e) => setNpm(e.target.value)} id="default-search" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500" placeholder="Search Mockups, Logos..." required/>
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-pink-700 hover:bg-pink-800 font-medium rounded-lg text-sm px-4 py-2 dark:bg-pink-600 dark:hover:bg-pink-700">Search</button>
                    </div>
                </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}