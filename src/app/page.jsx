'use client'

import MainLayoutPage from "@/components/mainLayout";
import { edu, gothExtraBold, mont, nunito, poppinsBold, poppinsLight, poppinsMedium, quicksand } from "@/libs/config/fonts";
import { getAllUser } from "@/libs/database/models/userModel";
import { faAngleRight, faArrowUpRightFromSquare, faBars, faBuildingColumns, faCity, faEnvelope, faSignIn, faSignOut, faXmark } from "@fortawesome/free-solid-svg-icons";
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
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-zinc-800 to-blue-800">Let&rsquo;s Get</span> to Know us More<span className="text-blue-600">!</span>
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
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-zinc-800 to-blue-800">Meet</span> our current <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-blue-800">Leader!</span>
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

      <div className="px-5 md:px-20 md:py-20 py-10 text-zinc-800">
        <h1 className={`${mont.className} text-4xl md:text-6xl font-medium tracking-tighter`}>
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-zinc-800 to-blue-800">Get</span> to know our current <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-blue-800">Activities.</span>
        </h1>
        <hr className="my-5 opacity-0" />
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-1/2 flex-grow-0 flex-shrink-0 relative overflow-auto scrollbar flex gap-5 snap-x">
            <div className="w-full flex-shrink-0 snap-start">
              <img className="rounded-2xl w-full h-[300px] object-cover object-top" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/foto-studio-hima-20232024" alt="" />
              <hr className="my-2 opacity-0" />
              <h1 className={`${mont.className} text-zinc-600  tracking-tighter text-sm md:text-lg`}>Tema Acara</h1>
              <h2 className={`${mont.className} text-zinc-800 my-3 md:text-2xl tracking-tighter text-lg`}>
                Foto Studio Angkatan 2020/2021
              </h2>
            </div>
            <div className="w-full flex-shrink-0 snap-start">
              <img className="rounded-2xl w-full h-[300px] object-cover object-top" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/foto-studio-hima-20232024" alt="" />
              <hr className="my-2 opacity-0" />
              <h1 className={`${mont.className} text-zinc-600  tracking-tighter text-sm md:text-lg`}>Tema Acara</h1>
              <h2 className={`${mont.className} text-zinc-800 my-3 md:text-2xl tracking-tighter text-lg`}>
                Foto Studio Angkatan 2020/2021
              </h2>
            </div>
            <div className="w-full flex-shrink-0 snap-start">
              <img className="rounded-2xl w-full h-[300px] object-cover object-top" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/foto-studio-hima-20232024" alt="" />
              <hr className="my-2 opacity-0" />
              <h1 className={`${mont.className} text-zinc-600  tracking-tighter text-sm md:text-lg`}>Tema Acara</h1>
              <h2 className={`${mont.className} text-zinc-800 my-3 md:text-2xl tracking-tighter text-lg`}>
                Foto Studio Angkatan 2020/2021
              </h2>
            </div>
            <div className="w-full flex-shrink-0 snap-start">
              <img className="rounded-2xl w-full h-[300px] object-cover object-top" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/foto-studio-hima-20232024" alt="" />
              <hr className="my-2 opacity-0" />
              <h1 className={`${mont.className} text-zinc-600  tracking-tighter text-sm md:text-lg`}>Tema Acara</h1>
              <h2 className={`${mont.className} text-zinc-800 my-3 md:text-2xl tracking-tighter text-lg`}>
                Foto Studio Angkatan 2020/2021
              </h2>
            </div>
            
          </div>
          <div className="w-full md:w-1/2 flex-grow-0 flex-shrink-0 md:pl-10 border md:border-0 rounded-2xl p-5">
            <h1 className={`${mont.className} text-xs md:text-md text-zinc-500`}>
              Subjudul Section
            </h1>
            <h2 className={`${mont.className} text-zinc-800 text-lg my-3 font-medium`}>
              Judul Section yang panjang bisa di pasang di sini
            </h2>
            <p className={`${mont.className} tracking-tighter text-sm`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse alias iure ab? Labore inventore vitae dolorum impedit dolorem maiores incidunt consectetur quasi laudantium consequuntur assumenda nam similique, officiis dolore cum.
            </p>
            <hr className="my-3 opacity-0" />
            <a href="" className={`${mont.className} px-6 py-3 rounded-full border border-zinc-800 flex items-center gap-5 w-fit hover:bg-zinc-800 hover:text-white transition-all duration-300`}>
              Lihat lebih lanjut
              <FontAwesomeIcon icon={faAngleRight} className="text-inherit w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-zinc-100 px-5 md:px-20 md:py-20 py-10 text-zinc-800">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
          <article className="w-full md:w-1/2 flex-shrink-0">
            <h1 className={`${mont.className} font-medium tracking-tighter text-4xl md:text-7xl`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-zinc-800 to-blue-800">Let us Know</span> if You have <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-red-800">Something for Us!</span>
            </h1>
            <hr className="my-5 opacity-0" />
            <p className={`${mont.className} md:text-lg text-sm`}>
              Don't hesitate to share the knowledge and insight you have with us, lets become better individuals.
              <br /> <br />
              Your feedback is very valuable for us. <b>^_^</b>
            </p>
          </article>
          <div className="w-full md:w-1/2 flex-shrink-0">
            <form className="p-5 rounded-2xl bg-white border space-y-5">
              <div className="relative">
                <div className="absolute top-0 left-0 w-10 h-10 flex items-center justify-center">
                  <FontAwesomeIcon icon={faCity} className="w-4 h-4 text-zinc-600" />
                </div>
                <input type="text" className={`${mont.className} h-10 rounded-xl border outline-none w-full pl-10 `} placeholder="Kota atau Domisili" />
              </div>
              <div className="relative">
                <div className="absolute top-0 left-0 w-10 h-10 flex items-center justify-center">
                  <FontAwesomeIcon icon={faBuildingColumns} className="w-4 h-4 text-zinc-600" />
                </div>
                <input type="text" className={`${mont.className} h-10 rounded-xl border outline-none w-full pl-10 `} placeholder="Instansi atau Universitas" />
              </div>
              <div className="relative">
                <div className="absolute top-0 left-0 w-10 h-10 flex items-center justify-center">
                  <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-zinc-600" />
                </div>
                <input type="text" className={`${mont.className} h-10 rounded-xl border outline-none w-full pl-10 `} placeholder="Email anda" />
              </div>
              <textarea name="" id="" cols="30" rows="10" className="w-full rounded-xl border outline-none p-5 h-16 min-h-16 max-h-60" placeholder="Ceritakan di sini"></textarea>
              <button type="submit" className={`${mont.className} rounded-full px-6 py-3 flex items-center justify-center bg-blue-500 text-white gap-5 hover:bg-blue-600 focus:bg-blue-700`}>
                Kirim
                <FontAwesomeIcon icon={faAngleRight} className="w-4 h-4 text-inherit" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="w-full hidden md:flex justify-between items-center px-5 md:px-20 py-5 bg-white">
        <div className="flex items-center gap-10">
          <h1 className={`${mont.className} md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-blue-800 font-bold`}>
            HIMATIF
          </h1>
          <a href="" className={`${mont.className} font-medium text-zinc-400 tracking-tighter text-sm hover:text-zinc-600`}>
            STMIK Bandung
          </a>
          <a href="" className={`${mont.className} font-medium text-zinc-400 tracking-tighter text-sm hover:text-zinc-600`}>
            HIMA SI
          </a>
          <a href="" className={`${mont.className} font-medium text-zinc-400 tracking-tighter text-sm hover:text-zinc-600`}>
            Instagram
          </a>
          <a href="" className={`${mont.className} font-medium text-zinc-400 tracking-tighter text-sm hover:text-zinc-600`}>
            Tiktok
          </a>
        </div>
        <p className={`${mont.className} text-sm text-zinc-400 font-medium tracking-tighter`}>
          HIMA Teknik Informatika, STMIK Bandung - 2024, All Rights Reserved
        </p>
      </div>

      <div className="w-full flex md:hidden bg-white gap-5 px-5 py-5">
        <div className="w-1/2">
          <h1 className={`${mont.className} md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-blue-800 font-bold`}>
            HIMATIF
          </h1>
          <p className={`${mont.className} text-xs text-zinc-400  tracking-tighter`}>
            HIMA Teknik Informatika, STMIK Bandung - 2024, All Rights Reserved
          </p>
        </div>
        <div className="w-1/2 flex flex-col gap-2">
          <a href="" className={`${mont.className} font-medium text-zinc-400 tracking-tighter text-sm hover:text-zinc-600`}>
            STMIK Bandung
          </a>
          <a href="" className={`${mont.className} font-medium text-zinc-400 tracking-tighter text-sm hover:text-zinc-600`}>
            HIMA SI
          </a>
          <a href="" className={`${mont.className} font-medium text-zinc-400 tracking-tighter text-sm hover:text-zinc-600`}>
            Instagram
          </a>
          <a href="" className={`${mont.className} font-medium text-zinc-400 tracking-tighter text-sm hover:text-zinc-600`}>
            Tiktok
          </a>
        </div>
      </div>
    </MainLayoutPage>
  );
}

