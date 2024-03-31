'use client'

import MainLayoutPage from "@/components/mainLayout";
import { edu, gothExtraBold, mont, nunito, poppinsBold, poppinsLight, poppinsMedium, quicksand } from "@/libs/config/fonts";
import { getAllUser } from "@/libs/database/models/userModel";
import { faArrowUpRightFromSquare, faBars, faSignIn, faSignOut, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

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
    <MainLayoutPage>
      <Toaster />
      <div className="w-full h-screen flex items-center justify-center gap-10">
        <article className="text-zinc-800 w-full md:w-1/2">
          <p className={`${mont.className} font-medium text-zinc-600 text-center md:text-start`}>an Official Page of</p>
          <h1 className={`${mont.className} font-extrabold text-transparent bg-clip-text bg-gradient-to-b text-center md:text-left md:bg-gradient-to-r from-zinc-800 to-blue-800 tracking-tighter text-5xl`}>
            HIMA TEKNIK INFORMATIKA
          </h1>
          <div className="flex items-center gap-5">
            <hr className="flex-grow md:hidden " />
            <p className={`${mont.className} font-bold text-zinc-600 text-xs`}>
              STMIK Bandung
            </p>
            <hr className="flex-grow " />
          </div>
          <hr className="my-3 opacity-0" />
          <p className={`${edu.className} tracking-tighter md:text-2xl text-center md:text-left text-zinc-500`}>
            &quot; Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad distinctio ipsum exercitationem pariatur, aut fugiat! Maxime aut molestias officiis doloremque aspernatur provident? Alias quasi neque deleniti recusandae saepe quidem nisi. &quot;
          </p>
          <hr className="my-3 opacity-0" />
          <div className="flex items-center justify-center md:justify-start">
            <a href="#about" className={`${mont.className} rounded-full border-2 px-3 py-2 border-zinc-800 font-medium hover:bg-zinc-800 hover:text-white hover:scale-95 transition-all duration-300`}>
              About us
            </a>
          </div>
        </article>
        <img className="hidden md:block" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/public/about_us" alt="" />
      </div>

      <div id="about" className="w-full bg-zinc-100 px-5 md:px-20 md:py-20 py-10 text-zinc-800">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full flex-shrink-0 md:w-1/2">
            <h1 className={`${mont.className} font-medium tracking-tight text-3xl md:text-start text-center md:text-8xl`}>
              Let&rsquo;s Get to Know us More<span className="text-blue-600">!</span>
            </h1>
          </div>
          <div className="w-full flex-shrink-0 md:w-1/2">
            <img className="w-full rounded-2xl md:h-[400px] object-cover object-center" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/foto-studio-hima-20232024" alt="" />
            <p className={`${edu.className}  text-zinc-400 text-center`}>
              Foto Studio Hima bersama Angkatan 2020 dan 2021
            </p>
            <hr className="my-3 opacity-0" />
            <p className={`${mont.className} text-justify  tracking-tighter indent-10`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, nisi deserunt neque ea amet ad porro totam eius similique aut voluptatum nobis corrupti soluta ducimus, qui aliquam recusandae est magni?
            </p>
            <br />
            <p className={`${mont.className} text-justify  tracking-tighter indent-10`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, nisi deserunt neque ea amet ad porro totam eius similique aut voluptatum nobis corrupti soluta ducimus, qui aliquam recusandae est magni?
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white px-5 md:px-20 md:py-20 py-10 text-zinc-800">
        <div className="flex flex-col md:flex-row justify-center md:items-center gap-5">
          <div className="w-full flex-shrink-0 md:w-1/2">
            <div className="flex flex-col items-center gap-5">
              <h1 className={`${mont.className} md:hidden block text-center text-2xl font-medium`}>
                Meet our current leader!
              </h1>
              <img className="w-80 md:w-[400px] h-80 md:h-[400px] object-cover object-center rounded-full" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/2024/kepengurusan/foto_profil/ziyad_1" alt="" />
              
            </div>
          </div>
          <div className="w-full flex-shrink-0 md:w-1/2">
            <h1 className={`${mont.className} hidden md:block tracking-tight text-7xl font-medium`}>
              Meet our current leader!
            </h1>
            <hr className="my-5 opacity-0" />
            <div className="flex md:flex-row flex-col items-center  justify-center md:justify-start gap-2 md:gap-5">
              <h1 className={`${mont.className} text-center md:text-start text-3xl`}>
                Ziyad Jahizh Kartiwa
              </h1>
              <p className={`${mont.className} px-2 py-1 rounded-full bg-zinc-400 text-white tracking-tighter text-sm`}>
                2021
              </p>
            </div>
            <hr className="my-5 opacity-0" />
            <p className={`${mont.className} text-center md:text-start`}>Ingin kenal lebih jauh?</p>
            <div className="flex justify-center md:justify-start items-center">
              <a href="#" className={`${mont.className} font-medium px-6 py-3 rounded-full border mt-2 border-zinc-800 hover:bg-zinc-800 hover:text-white hover:scale-95 transition-all duration-300`}>
                Lihat Profil
              </a>
            </div>
          </div>
        </div>
      </div>
    </MainLayoutPage>
  );
}

