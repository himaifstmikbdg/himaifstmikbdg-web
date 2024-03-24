'use client'

import { poppinsBold, poppinsLight, poppinsMedium, quicksand } from "@/libs/config/fonts";
import { getAllUser } from "@/libs/database/models/userModel";
import { faBars, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function Home() {

  const [userData, setUserData] = useState({})

  const getUser = async () => {
    const response = await getAllUser();
    if(response.success) {
      setUserData(state => (response.data))
    }
  }

  useEffect(() => {
    getUser
  }, [])
  return (
    <div className="w-full h-screen bg-zinc-950">

      <nav className="fixed z-50 top-0 left-0 w-full backdrop-blur bg-zinc-950/90 border-b border-b-zinc-800 md:px-20 px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-5">
          <img className="w-8 md:w-10 h-8 md:h-10" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/logo-hima-AmwbkVJ8jHTvMmxHI9mSGvhcir0ErP.png" alt="" />
          <span className="text-zinc-700 md:text-2xl">/</span>
          <button className="w-8 h-8 border border-white/30 rounded md:hidden flex items-center justify-center hover:border-white/50 hover:bg-white/10 transition-all duration-300">
            <FontAwesomeIcon icon={faBars} className="w-4 h-4 text-inherit" />
          </button>
          <h1 className={`${poppinsBold.className} text-3xl hidden md:block`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-t from-zinc-300 to-white">
              HIMA
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-t from-blue-500 to-white">
              IF
            </span>
          </h1>
          <div className="hidden md:flex items-center px-5 gap-10 text-sm ">
            <a href="" className={`${poppinsLight.className} text-zinc-500 hover:text-zinc-300 transition-all duration-300`}>
              Program Kerja
            </a>
            <a href="" className={`${poppinsLight.className} text-zinc-500 hover:text-zinc-300 transition-all duration-300`}>
              Kepengurusan
            </a>
            <a href="" className={`${poppinsLight.className} text-zinc-500 hover:text-zinc-300 transition-all duration-300`}>
              Artikel
            </a>
            <a href="" className={`${poppinsLight.className} text-zinc-500 hover:text-zinc-300 transition-all duration-300`}>
              Events
            </a>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <p className={`${quicksand.className} text-zinc-500 hidden md:block`}>
            Selamat Datang, <span className="text-transparent bg-clip-text bg-gradient-to-t from-zinc-300 to-white font-bold">Ziyad Jahizh K</span>
          </p>
          <button type="button" className="hover:scale-110 transition-all duration-300" title="Profile">
            <img className="w-8 h-8 rounded-full object-cover" src="https://www.benarnews.org/indonesian/opini/opini-prabowo-ke-as-10152020224352.html/201015_ID_Prabowo_1000.jpg/@@images/image/social_media" alt="" />
          </button>
          <button type="button" className="w-8 h-8 bg-zinc-200/10 hover:bg-zinc-200 text-zinc-200 rounded flex items-center justify-center hover:text-zinc-800 transition-all duration-300">
            <FontAwesomeIcon icon={faSignOut} className="w-4 h-4 text-inherit" />
          </button>
        </div>
      </nav>

      <div className="w-full h-screen relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center z-10 ">
          <img className="w-full h-full object-cover" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/foto-studio-hima-20232024" alt="" />
        </div>
        <div className="absolute top-0 left-0 w-full h-screen px-10 bg-gradient-to-t from-zinc-950 to-zinc-950/10 z-20 text-white">
          <div className="w-full h-full flex items-center justify-center ">
            <div className="flex flex-col items-center gap-1">
              <p className={`${quicksand.className} text-zinc-400`}>an Official Website of</p>
              <h1 className={`${poppinsBold.className} text-transparent bg-clip-text bg-gradient-to-t from-zinc-400 to-white text-3xl md:text-6xl text-center`}>
                HIMA Informatika
              </h1>
              <h2 className={`${poppinsMedium.className} text-transparent bg-clip-text bg-gradient-to-t from-zinc-400 to-white text-xl md:text-3xl text-center tracking-tighter`}>
                STMIK Bandung
              </h2>
              
            </div>
          </div>
        </div>
        

      </div>
      <div className="w-full h-screen relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center px-10 py-40 md:px-40 md:py-10">
          <div className="w-full h-full border border-zinc-600 border-dashed"></div>
        </div>
      </div>
    </div>
  );
}
