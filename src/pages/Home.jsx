import React from 'react'
import hero from '../assets/hero.svg'
import p1 from '../assets/1.png'
import p2 from '../assets/2.png'
import Announce from '../components/Announce'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'

function Home() {

  return (
    <div className='h-full bg-c1 '>
     
        <Announce/>
      
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt="Party"
              src={hero}
              className="absolute inset-0 h-full w-full"
            />
          </div>

          <div className="lg:py-16">
            <h2 className="text-3xl font-bold text-c5 sm:text-4xl">Open Recruitment Asisten dan Programmer Laboratorium Psikologi Universitas Gunadarma</h2>

            <p className="mt-4 text-c55">
            Pada Akhir Semester Ganjil ini Laboratorium Mencari Asisten dan Programmer untuk bergabung dengan kami. Kalian tertarik ? silahkan mendaftar dengan syarat dan ketentuan yang ada, Good Luck! 🌞
            </p>
        <div className="link-group mt-4 gap-4 flex">
          <Link className="group relative inline-block text-base font-medium text-white focus:outline-none focus:ring" to="/register">
            <span
              className="absolute inset-0 border-2 border-c4"
            ></span>
            <span
              className="block border-2 border-c4 bg-c4 px-12 py-3 transition-transform active:border-red-500 group-hover:translate-x-2 group-hover:translate-y-2"
            >
              Daftar Sekarang
            </span>
          </Link>

          {/* <Link class="group relative inline-block text-base font-medium text-c4 focus:outline-none focus:ring"
            to="/download">
            <span class="absolute inset-0 border-2 border-current"></span>
            <span
              class="block border-2 border-current bg-transparent px-12 py-3 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"
            >
              Cek Kelulusan
            </span>
          </Link> */}
        < Modal/>
        </div>
          </div>
        </div>
        <div className="my-16 text-center">
          <h2 className='text-3xl text-c5 font-bold sm:text-4xl'>Syarat dan Ketentuan</h2>
        </div>

        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-2 mx-auto">
          <div className="w-full rounded">
              <img src={p1}
                  alt="imagess"/>
          </div>
          <div className="w-full rounded">
              <img src={p2}
                  alt="imagess"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home