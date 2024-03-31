'use client'

import { mont, nunito, poppinsBold } from "@/libs/config/fonts"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faAngleUp, faArrowUpRightFromSquare, faBars, faEye, faKey, faSignIn, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"

const loggedIn = false;

export default function MainLayoutPage({children}) {

    const [showSidebar, setShowSidebar] = useState(false)
    const [showLogin, setShowLogin] = useState(false)
    

    return (
        <div className="w-full bg-white">
            {showSidebar === true && <SidebarPage setShowSidebar={setShowSidebar}/>}
            {showLogin === true && <LoginPage setShowLogin={setShowLogin} />}
            <nav className="flex justify-between items-center w-full px-5 md:px-20 py-2">
                <div className="flex items-center gap-5">
                    <img className="w-7 h-7 md:w-10 md:h-10 object-cover" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/logo-hima-AmwbkVJ8jHTvMmxHI9mSGvhcir0ErP.png" alt="" />
                    <h1 className={`${mont.className} md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-blue-800 font-bold`}>
                        HIMATIF
                    </h1>
                </div>
                <div className="flex items-center gap-5">
                    <div className="md:flex items-center gap-3 hidden">
                        <a href="/kepengurusan" className={"relative pr-5 px-3 py-2 rounded-lg text-xs md:text-sm text-zinc-800 hover:bg-black/5 " + mont.className}>
                            Kepengurusan
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="absolute top-0 right-0 w-2 h-2 text-inherit p-2 " />
                        </a>
                        <a href="" className={"relative pr-5 px-3 py-2 rounded-lg text-xs md:text-sm text-zinc-800 hover:bg-black/5 " + mont.className}>
                            Events
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="absolute top-0 right-0 w-2 h-2 text-inherit p-2 " />
                        </a>
                        <a href="" className={"relative pr-5 px-3 py-2 rounded-lg text-xs md:text-sm text-zinc-800 hover:bg-black/5 " + mont.className}>
                            Program
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="absolute top-0 right-0 w-2 h-2 text-inherit p-2 " />
                        </a>
                    </div>
                    <button type="button" className="w-8 h-8 flex md:hidden items-center justify-center rounded-lg border border-zinc-200 hover:border-zinc-800 text-zinc-400 hover:text-zinc-800 transition-all duration-300 hover:bg-zinc-900/5">
                        <FontAwesomeIcon icon={faBars} className="w-3 h-3 text-inherit" />
                    </button>
                    {loggedIn === false ? (
                        <button type="button" onClick={() => setShowLogin(true)} className={"px-3 py-1.5 rounded-lg bg-zinc-700 hover:bg-zinc-800 flex items-center justify-center gap-2 text-white text-xs " + mont.className}>
                            <FontAwesomeIcon icon={faSignIn} className="w-3 h-3 text-inherit" />
                            Masuk
                        </button>
                    ) : (
                        <a href="#" className="">
                            <img className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover object-top hover:scale-95 transition-all duration-300 hover:shadow-lg" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/2024/kepengurusan/foto_profil/ziyad_1" alt="" />
                        </a>
                    )}
                </div>
            </nav>
            <div className="mt-10">
                {children}
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
            </div>
        </div>
    )
}

function SidebarPage({setShowSidebar}) {
    return
}

function LoginPage({setShowLogin}) {
    const [showPass, setShowPass] = useState(false)

    const submitLogin = (e) => {
        e.preventDefault()

        toast.success('Berhasil Login');
    }
    return (
        <div className="fixed top-0 left-0 w-full h-screen backdrop-blur-xl z-[1000] flex items-center justify-center bg-zinc-900/50">
            <Toaster />
            <div className="rounded-2xl p-5 md:p-10 bg-white  md:w-1/3 w-full">
                <div className="flex items-center gap-3">
                    <img className="w-3 h-3 md:w-6 md:h-6 object-cover" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/logo-hima-AmwbkVJ8jHTvMmxHI9mSGvhcir0ErP.png" alt="" />
                    <h1 className={`${mont.className} text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-blue-900 font-extrabold text-xs`}>
                        HIMATIF
                    </h1>
                </div>
                <hr className="my-3 opacity-0" />
                <h1 className={`${nunito.className} text-zinc-800 font-extrabold md:text-3xl text-2xl`}>
                    Silahkan Masuk<span className="text-blue-600">.</span>
                </h1>
                <p className={`${mont.className} text-zinc-500 text-xs`}>
                    Selamat Datang, Gunakan Akun Anda agar bisa masuk ke Dashboard <span className="text-zinc-800 font-medium">HIMA IF</span>
                </p>
                <hr className="my-3 opacity-0" />
                <form onSubmit={submitLogin} className="space-y-3">
                    <div className="relative">
                        <input required type="text" className="peer border pl-10 py-2 rounded-lg w-full text-zinc-800 text-xs md:text-md outline-none bg-zinc-100" placeholder="Email atau No Induk Mahasiswa" />
                        <div className="absolute top-0 left-0 w-10 h-full flex items-center justify-center">
                            <FontAwesomeIcon icon={faUser} className="w-4 h-4 text-zinc-800" />
                        </div>
                    </div>
                    <div className="relative">
                        <input required type={showPass ? 'text' : 'password'} className="peer border pl-10 py-2 rounded-lg w-full text-zinc-800 text-xs md:text-md outline-none bg-zinc-100" placeholder="Password" />
                        <div className="absolute top-0 left-0 w-10 h-full flex items-center justify-center">
                            <FontAwesomeIcon icon={faKey} className="w-4 h-4 text-zinc-800" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="loggedIn" />
                            <label htmlFor="loggedIn" className={`${mont.className} text-xs text-zinc-700`}>
                                Remember Me
                            </label>
                        </div>
                        <button type="button" onClick={() => setShowPass(state => !state)} className={`${mont.className} flex text-xs items-center justify-center gap-2 ${showPass ? 'text-blue-800' : 'text-zinc-800'} font-medium `}>
                            {showPass ? 'Hide' : 'Show'} Password
                            <FontAwesomeIcon icon={faEye} className="w-4 h-4 text-inherit" />
                        </button>
                    </div>
                    <hr className="my-2 opacity-0" />
                    <div className="grid grid-cols-2 gap-5">
                        <button type="submit" className={`${mont.className} rounded-lg py-3 bg-zinc-700 hover:bg-zinc-900 text-white font-medium flex items-center justify-center gap-2 text-sm md:text-xs`}>
                            <FontAwesomeIcon icon={faSignIn} className="w-4 h-4 text-inherit" />
                            Masuk
                        </button>
                        <button onClick={() => setShowLogin(false)} type="button" className={`${mont.className} rounded-lg py-3 hover:bg-zinc-900/10 text-zinc-800 font-medium text-xs md:text-sm flex items-center justify-center gap-2`}>
                            <FontAwesomeIcon icon={faXmark} className="w-4 h-4 text-inherit" />
                            Batal
                        </button>
                    </div>
                    <div className="flex items-center gap-5">
                        <hr className=" flex-grow" />
                        <p className={`${mont.className} text-xs md:text-sm text-zinc-600`}>
                            ||
                        </p>
                        <hr className=" flex-grow" />
                    </div>
                    <div className="flex items-center justify-between">
                        <a href="#" className={`${mont.className} text-xs md:text-sm text-zinc-800 hover:text-blue-800`}>
                            Lupa Password?
                        </a>
                        <a href="#" className={`${mont.className} text-xs md:text-sm text-zinc-800 hover:text-blue-800`}>
                            Buat Akun Baru
                        </a>
                    </div>
                    <hr className="my-3 opacity-0" />
                    <div className="flex justify-center w-full">
                        <p className={`${mont.className} text-xs text-zinc-500`}>
                            HIMA Informatika 2024 - All Rights Reserved
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}