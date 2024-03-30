'use client'

import { nunito, poppinsBold, poppinsLight, poppinsMedium, quicksand } from "@/libs/config/fonts";
import { getAllUser } from "@/libs/database/models/userModel";
import { faArrowUpRightFromSquare, faBars, faSignIn, faSignOut, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const loggedIn = false;

export default function Home() {

  const [userData, setUserData] = useState({})
  const [navbarActive, setNavbarActive] = useState(false)
  

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
    <div className="w-full">
      <div className="relative w-full h-screen overflow-hidden">
        <img className="-z-10 w-full h-full object-cover object-top" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/foto-studio-hima-20232024" alt="" />
        <div className="absolute top-0 left-0 w-full h-full z-20 bg-zinc-800/70">
          <div className="w-80 h-80 rounded-full bg-blue-600 scale-150 blur-[300px]"></div>
          <div className="float-end w-80 h-80 rounded-full bg-white scale-150 blur-[300px] "></div>
        </div>
        <nav className="absolute top-0 left-0 w-full py-3 z-30 flex justify-between items-center md:px-20 px-5">
          <div className="flex items-center gap-2 md:gap-5">
            <img className="w-8 h-8 md:w-10 md:h-10 object-cover" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/logo-hima-AmwbkVJ8jHTvMmxHI9mSGvhcir0ErP.png" alt="" />
            <h1 className={`${nunito.className} font-extrabold text-lg md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500/80`}>
              HIMAIF
            </h1>
          </div>
          <div className="flex items-center gap-3 md:gap-10">
            <div className={`hidden md:flex items-center gap-5 ${nunito.className} text-white font-extralight text-sm`}>
              <a href="" className="text-zinc-200 tracking-wide px-3 py-2 rounded-lg hover:bg-zinc-200/10 hover:text-white transition duration-300 relative pr-5">
                Kepengurusan
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="absolute top-2 -right-1 w-2 h-2 text-inherit pr-3" />
              </a>
              <a href="" className="text-zinc-200 tracking-wide px-3 py-2 rounded-lg hover:bg-zinc-200/10 hover:text-white transition duration-300 relative pr-5">
                Program Kerja
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="absolute top-2 -right-1 w-2 h-2 text-inherit pr-3" />
              </a>
              <a href="" className="text-zinc-200 tracking-wide px-3 py-2 rounded-lg hover:bg-zinc-200/10 hover:text-white transition duration-300 relative pr-5">
                Events
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="absolute top-2 -right-1 w-2 h-2 text-inherit pr-3" />
              </a>
            </div>
            <button type="button" onClick={() => setNavbarActive(true)} className="md:hidden flex items-center justify-center p-2 rounded-lg bg-zinc-200/10 hover:bg-zinc-200/20 text-zinc-200 hover:text-white transition duration-300">
              <FontAwesomeIcon icon={faBars} className="w-5 h-5 text-inherit" />
            </button>
            {loggedIn === false ? (
              <button type="button" className="px-3 py-2 rounded-lg bg-zinc-200/10 text-white flex items-center justify-center gap-2 text-sm font-extralight hover:px-4 hover:bg-zinc-200/20 transition-all duration-300">
                <FontAwesomeIcon icon={faSignIn} className="text-inherit w-3 h-3" />
                Masuk
              </button>
            ) : (
              <button type="button"  className="group" title="Profil">
                <img className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover object-center group-hover:scale-105 transition-all duration-300" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/2024/kepengurusan/foto_profil/ziyad_1" alt="" />
              </button>
            )}
          </div>
        </nav>
        <NavbarMobile navbarActive={navbarActive} setNavbarActive={setNavbarActive} />
        <div className="absolute top-0 left-0 w-full h-full z-20 md:px-20 px-5 flex md:flex-row flex-col md:justify-between justify-center items-center gap-10 md:gap-0">

          <article className="md:w-2/3 w-full">
            <p className={`${nunito.className} font-extralight text-xs text-center md:text-start text-zinc-300`}>an Official Web of</p>
            <h1 className={`${poppinsBold.className} text-5xl text-center md:text-7xl md:text-start text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400`}>
              HIMA Informatika
            </h1>
            <div className="flex items-center gap-5">
              <hr className=" flex-grow md:hidden opacity-50" />
              <h2 className={`${nunito.className} text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-500 tracking-tighter`}>
                STMIK Bandung
              </h2>
              <hr className=" flex-grow opacity-50" />
            </div>
            <p className={`${quicksand.className} mt-5 italic text-xs md:text-sm`}>
            &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores deleniti nostrum adipisci assumenda atque, praesentium aliquid. Commodi doloribus corrupti sint consectetur architecto corporis mollitia quam, cumque vitae minima aliquam explicabo.&quot;, <b>HIMA IF, 2020</b>
            </p>
          </article>

          <div className="flex gap-5 justify-center items-center md:gap-10 md:flex-col md:items-end">
            <div className="p-3 md:p-5 rounded-xl md:rounded-2xl border border-white/20 bg-gradient-to-t md:bg-gradient-to-l hover:from-white/10 from-white/0 to-white/0 backdrop-blur flex-shrink-0 transition-all duration-300">
              <h1 className={`${nunito.className} font-bold text-md md:text-xl tracking-tighter md:tracking-wide`}>
                2024 / 2025
              </h1>
              <p className={`${quicksand.className} text-xs md:text-sm font-extralight md:tracking-wider text-zinc-300`}>
                Tahun Kepengurusan
              </p>
            </div>
            <div className="p-3 md:p-5 rounded-xl md:rounded-2xl border border-white/20 bg-gradient-to-t md:bg-gradient-to-l hover:from-white/10 from-white/0 to-white/0 backdrop-blur flex-shrink-0">
              <h1 className={`${nunito.className} font-bold text-md md:text-xl tracking-tighter md:tracking-wide`}>
                20
              </h1>
              <p className={`${quicksand.className} text-xs md:text-sm font-extralight md:tracking-wider text-zinc-300`}>
                Panitia
              </p>
            </div>
            <div className="p-3 md:p-5 rounded-xl md:rounded-2xl border border-white/20 bg-gradient-to-t md:bg-gradient-to-l hover:from-white/10 from-white/0 to-white/0 backdrop-blur flex-shrink-0">
              <h1 className={`${nunito.className} font-bold text-md md:text-xl tracking-tighter md:tracking-wide`}>
                3
              </h1>
              <p className={`${quicksand.className} text-xs md:text-sm font-extralight md:tracking-wider text-zinc-300`}>
                Kegiatan
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full h-screen bg-zinc-700"></div>
    </div>
  );
}

function NavbarMobile({navbarActive, setNavbarActive}) {
  return navbarActive === true && (
    <div className="fixed top-0 right-0 w-full h-screen backdrop-blur-md bg-zinc-800/10 z-50 flex flex-col items-center md:hidden py-5">
      <div className="w-full flex justify-center">
        <button type="button" onClick={() => setNavbarActive(false)} className="flex items-center justify-center px-3 py-2 gap-5 rounded bg-white/10 text-xs">
          <FontAwesomeIcon icon={faXmark} className="text-white w-4 h-4" />
          Close
        </button>
      </div>
      <div className="my-5 w-full">
        <a href="#" className={`${quicksand.className} flex items-center justify-center gap-2 text-sm font-extralight w-full hover:bg-white/10 py-5 transition-all duration-300`}>
          Kepengurusan
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-2 h-2 text-inherit " />
        </a>
        <a href="#" className={`${quicksand.className} flex items-center justify-center gap-2 text-sm font-extralight w-full hover:bg-white/10 py-5 transition-all duration-300`}>
          Program Kerja
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-2 h-2 text-inherit " />
        </a>
        <a href="#" className={`${quicksand.className} flex items-center justify-center gap-2 text-sm font-extralight w-full hover:bg-white/10 py-5 transition-all duration-300`}>
          Events
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-2 h-2 text-inherit " />
        </a>
      </div>
    </div>
  )
}
