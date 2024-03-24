'use client'

import { poppinsBold, poppinsLight, quicksand } from "@/libs/config/fonts";
import { getAllUser } from "@/libs/database/models/userModel";
import { faBars } from "@fortawesome/free-solid-svg-icons";
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
      <nav className="fixed top-0 left-0 w-full backdrop-blur bg-zinc-950/10 border-b border-b-zinc-800 md:px-20 px-2 py-3 flex items-center justify-between">
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
      </nav>
    </div>
  );
}
