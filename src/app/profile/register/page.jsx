'use client'

import { mont } from "@/libs/config/fonts"
import { faAngleRight, faEnvelope, faHouse, faKey, faUser, faUserCog } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Toaster } from "react-hot-toast"

export default function ProfileRegisterPage() {
    return (
        <div className="w-full h-screen bg-white flex justify-center items-center flex-col md:flex-row gap-10 text-zinc-800">
            <Toaster />
            <div className="w-1/2 hidden md:flex flex-col items-center gap-5">
                <img className="w-60 h-60" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/logo-hima-AmwbkVJ8jHTvMmxHI9mSGvhcir0ErP.png" alt="" />
                <article>
                    <h1 className={`${mont.className} text-4xl font-bold text-center`}>
                        Himpunan Mahasiswa
                    </h1>
                    <h2 className={`${mont.className} text-2xl font-medium text-center`}>
                        Teknik Informatika
                    </h2>
                    <br />
                    <p className={`${mont.className}  text-zinc-500 text-center`}>
                        STMIK Bandung
                    </p>
                </article>
            </div>
            <div className="w-full md:w-1/2 flex-shrink-0 p-5 md:p-20 h-full">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 md:hidden">
                        <img className="w-8 h-8 object-cover" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/logo-hima-AmwbkVJ8jHTvMmxHI9mSGvhcir0ErP.png" alt="" />
                        <h1 className={`${mont.className} font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-blue-800`}>
                            HIMATIF
                        </h1>
                    </div>
                    <a href="/" className={`${mont.className} px-3 py-2 rounded-full border text-zinc-800 border-zinc-800 flex items-center justify-center w-fit gap-2 hover:bg-zinc-800 hover:text-white text-sm md:flex-row-reverse transition-all duration-300`}>
                        <FontAwesomeIcon icon={faHouse} className="w-4 h-4 text-inherit" />
                        Beranda
                    </a>
                </div>
                <hr className="my-3 md:my-5 opacity-0" />
                <h1 className={`${mont.className} font-bold text-3xl md:text-5xl`}>
                    Buat Akun Baru<span className="text-blue-700">.</span>
                </h1>
                <br />
                <form action="" className="space-y-3">
                    <div className="relative">
                        <input required type="text" className={`${mont.className} peer border pl-10 py-2 rounded-lg w-full text-zinc-800 text-xs md:text-lg outline-none bg-zinc-100`} placeholder="Nama Panjang" />
                        <div className="absolute top-0 left-0 w-10 h-full flex items-center justify-center">
                            <FontAwesomeIcon icon={faUser} className="w-4 h-4 text-zinc-800" />
                        </div>
                    </div>
                    <div className="relative">
                        <input required type="text" className={`${mont.className} peer border pl-10 py-2 rounded-lg w-full text-zinc-800 text-xs md:text-lg outline-none bg-zinc-100`} placeholder="No Induk Mahasiswa" />
                        <div className="absolute top-0 left-0 w-10 h-full flex items-center justify-center">
                            <FontAwesomeIcon icon={faUserCog} className="w-4 h-4 text-zinc-800" />
                        </div>
                    </div>
                    <div className="relative">
                        <input required type="text" className={`${mont.className} peer border pl-10 py-2 rounded-lg w-full text-zinc-800 text-xs md:text-lg outline-none bg-zinc-100`} placeholder="Email" />
                        <div className="absolute top-0 left-0 w-10 h-full flex items-center justify-center">
                            <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-zinc-800" />
                        </div>
                    </div>
                    <div className="relative">
                        <input required type="text" className={`${mont.className} peer border pl-10 py-2 rounded-lg w-full text-zinc-800 text-xs md:text-lg outline-none bg-zinc-100`} placeholder="Password" />
                        <div className="absolute top-0 left-0 w-10 h-full flex items-center justify-center">
                            <FontAwesomeIcon icon={faKey} className="w-4 h-4 text-zinc-800" />
                        </div>
                    </div>
                    <button type="submit" className={`${mont.className} px-3 py-2 rounded-full border text-zinc-800 border-zinc-800 flex items-center justify-center w-fit gap-2 hover:bg-zinc-800 hover:text-white text-sm md:flex-row-reverse transition-all duration-300`}>
                        <FontAwesomeIcon icon={faAngleRight} className="w-4 h-4 text-inherit" />
                        Buat Akun
                    </button>
                </form>
            </div>
        </div>
    )
}