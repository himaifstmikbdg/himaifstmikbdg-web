'use client'

import MainLayoutPage from "@/components/mainLayout"
import { mont, nunito } from "@/libs/config/fonts"
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare, faBars, faSignIn } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Toaster } from "react-hot-toast"

export default function KepengurusanPage() {
    return (
        <MainLayoutPage>
            <Toaster />

            <div className="text-zinc-800 px-5 md:px-20 w-full">
                <div className="flex flex-col md:flex-row gap-5 w-full">
                    <h1 className={`${mont.className} text-7xl font-medium tracking-tighter w-full md:w-1/3 flex-shrink-0 text-center md:text-start text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-zinc-800`}>
                        Vision
                    </h1>
                    <div className="w-full md:w-2/3 flex-shrink-0">
                        <p className={`${mont.className} text-center md:text-start md:text-2xl`}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam magni tenetur expedita, nemo libero dolor quis alias explicabo illo, magnam veritatis perspiciatis animi deleniti repudiandae consectetur consequuntur quia, molestias itaque.
                        </p>
                    </div>
                </div>
            </div>
            <hr className="my-10 md:my-5 opacity-0" />
            <div className="text-zinc-800 px-5 md:px-20 w-full">
                <div className="flex flex-col md:flex-row gap-5 w-full">
                    <h1 className={`${mont.className} text-7xl font-medium tracking-tighter w-full md:w-1/3 flex-shrink-0 text-center md:text-start text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-zinc-800`}>
                        Mission
                    </h1>
                    <div className="w-full md:w-2/3 flex-shrink-0">
                        <p className={`${mont.className} text-center md:text-start md:text-2xl`}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam magni tenetur expedita, nemo libero dolor quis alias explicabo illo, magnam veritatis perspiciatis animi deleniti repudiandae consectetur consequuntur quia, molestias itaque.
                        </p>
                        <br />
                        <p className={`${mont.className} text-center md:text-start md:text-2xl`}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam magni tenetur expedita, nemo libero dolor quis alias explicabo illo, magnam veritatis perspiciatis animi deleniti repudiandae consectetur consequuntur quia, molestias itaque.
                        </p>
                    </div>
                </div>
            </div>

            <hr className="my-10 md:my-5 opacity-0" />

            <div className="bg-zinc-100 text-zinc-800 px-5 md:px-20 w-full md:py-10 py-5">
                <h1 className={`${mont.className} text-center md:text-start text-4xl md:text-7xl tracking-tighter font-medium`}>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-zinc-800">Leaders</span> and their <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-700 to-zinc-800">Subordinates</span>
                </h1>
                <hr className="my-2 opacity-0" />
                <h2 className={`${mont.className} text-center md:text-start md:text-2xl tracking-tighter text-zinc-500`}>
                    Leadership in 2024 / 2025
                </h2>
                <hr className="my-5 opacity-0" />
                <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                    <img className="rounded-full w-80 h-80 object-cover object-center" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/2024/kepengurusan/foto_profil/ziyad_1" alt="" />
                    <article>
                        <h2 className={`${mont.className} text-center md:text-start md:text-xl`}>
                            President
                        </h2>
                        <hr className="my-1 opacity-0" />
                        <h1 className={`${mont.className} font-medium text-3xl md:text-5xl text-center md:text-start`}>
                            Izwa
                        </h1>
                    </article>
                </div>
                <hr className="my-10 md:my-20 opacity-0" />
                <div className="flex w-full">
                    <div className="w-1/2">
                        <img className="rounded-full w-24 h-24 md:w-80 md:h-80 object-cover object-center mx-auto" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/2024/kepengurusan/foto_profil/ziyad_1" alt="" />
                        <br />
                        <h2 className={`${mont.className} text-center md:text-lg text-xs`}>
                            Vice President
                        </h2>
                        <hr className="my-1 opacity-0" />
                        <h1 className={`${mont.className} font-medium text-xl md:text-3xl text-center `}>
                            Ziyad Jahizh Kartiwa
                        </h1>
                    </div>
                    <div className="w-1/2">
                        <img className="rounded-full w-24 h-24 md:w-80 md:h-80 object-cover object-center mx-auto" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/2024/kepengurusan/foto_profil/ziyad_1" alt="" />
                        <br />
                        <h2 className={`${mont.className} text-center md:text-lg text-xs`}>
                            Vice President
                        </h2>
                        <hr className="my-1 opacity-0" />
                        <h1 className={`${mont.className} font-medium text-xl md:text-3xl text-center `}>
                            Fachrur Rozi
                        </h1>
                    </div>
                </div>
                <hr className="my-5 md:my-10 " />
                <div className="flex w-full">
                    <div className="w-1/3">
                        <img className="rounded-full w-16 h-16 md:w-80 md:h-80 object-cover object-center mx-auto" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/2024/kepengurusan/foto_profil/ziyad_1" alt="" />
                        <br />
                        <h2 className={`${mont.className} text-center md:text-lg text-xs`}>
                            Secretary
                        </h2>
                        <hr className="my-1 opacity-0" />
                        <h1 className={`${mont.className} font-medium text-sm md:text-3xl text-center `}>
                            Ziyad Jahizh Kartiwa
                        </h1>
                    </div>
                    <div className="w-1/3">
                        <img className="rounded-full w-16 h-16 md:w-80 md:h-80 object-cover object-center mx-auto" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/2024/kepengurusan/foto_profil/ziyad_1" alt="" />
                        <br />
                        <h2 className={`${mont.className} text-center md:text-lg text-xs`}>
                            Secretary
                        </h2>
                        <hr className="my-1 opacity-0" />
                        <h1 className={`${mont.className} font-medium text-sm md:text-3xl text-center `}>
                            Ziyad Jahizh Kartiwa
                        </h1>
                    </div>
                    <div className="w-1/3">
                        <img className="rounded-full w-16 h-16 md:w-80 md:h-80 object-cover object-center mx-auto" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/2024/kepengurusan/foto_profil/ziyad_1" alt="" />
                        <br />
                        <h2 className={`${mont.className} text-center md:text-lg text-xs`}>
                            Secretary
                        </h2>
                        <hr className="my-1 opacity-0" />
                        <h1 className={`${mont.className} font-medium text-sm md:text-3xl text-center `}>
                            Ziyad Jahizh Kartiwa
                        </h1>
                    </div>
                </div>
                <hr className="my-5 md:my-10 " />
                <div className="flex w-full">
                    <div className="w-1/3">
                        <img className="rounded-full w-16 h-16 md:w-80 md:h-80 object-cover object-center mx-auto" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/2024/kepengurusan/foto_profil/ziyad_1" alt="" />
                        <br />
                        <h2 className={`${mont.className} text-center md:text-lg text-xs`}>
                            Treasury / Bendahara
                        </h2>
                        <hr className="my-1 opacity-0" />
                        <h1 className={`${mont.className} font-medium text-sm md:text-3xl text-center `}>
                            Ziyad Jahizh Kartiwa
                        </h1>
                    </div>
                    <div className="w-1/3">
                        <img className="rounded-full w-16 h-16 md:w-80 md:h-80 object-cover object-center mx-auto" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/2024/kepengurusan/foto_profil/ziyad_1" alt="" />
                        <br />
                        <h2 className={`${mont.className} text-center md:text-lg text-xs`}>
                            Treasury / Bendahara
                        </h2>
                        <hr className="my-1 opacity-0" />
                        <h1 className={`${mont.className} font-medium text-sm md:text-3xl text-center `}>
                            Ziyad Jahizh Kartiwa
                        </h1>
                    </div>
                    <div className="w-1/3">
                        <img className="rounded-full w-16 h-16 md:w-80 md:h-80 object-cover object-center mx-auto" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/2024/kepengurusan/foto_profil/ziyad_1" alt="" />
                        <br />
                        <h2 className={`${mont.className} text-center md:text-lg text-xs`}>
                            Treasury / Bendahara
                        </h2>
                        <hr className="my-1 opacity-0" />
                        <h1 className={`${mont.className} font-medium text-sm md:text-3xl text-center `}>
                            Ziyad Jahizh Kartiwa
                        </h1>
                    </div>
                </div>
            </div>

            <div className={"bg-white w-full text-zinc-800 px-5 md:px-20 py-5 md:py-10"}>
                <h1 className={"font-medium tracking-tighter text-2xl md:text-6xl text-center md:text-start " + mont.className}>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-zinc-800">Department of</span> Research <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-700 to-zinc-800">and Technology</span>
                </h1>
                <hr className="my-1 opacity-0" />
                <p className={`${mont.className} font-medium text-zinc-400 text-center md:text-start md:text-2xl text-sm`}>
                    Divisi Riset dan Teknologi
                </p>
                <hr className="my-3 md:my-6 opacity-0" />
                <div className="flex w-full md:flex-row flex-col gap-5">
                    <div className="w-full md:w-1/3 flex-shrink-0">
                        <img className="rounded-full w-16 h-16 md:w-80 md:h-80 object-cover object-center mx-auto" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/2024/kepengurusan/foto_profil/ziyad_1" alt="" />
                        <br />
                        <h2 className={`${mont.className} text-center md:text-lg text-xs`}>
                            Head Department
                        </h2>
                        <hr className="my-1 opacity-0" />
                        <h1 className={`${mont.className} font-medium text-sm md:text-3xl text-center `}>
                            Ziyad Jahizh Kartiwa
                        </h1>
                    </div>
                    <div className="w-full md:w-2/3 flex-shrink-0 flex items-center gap-5 relative overflow-auto snap-x scrollbar">
                        <div className="flex-shrink-0">
                            <img className="rounded-full w-16 h-16 md:w-80 md:h-80 object-cover object-center mx-auto" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/2024/kepengurusan/foto_profil/ziyad_1" alt="" />
                            <br />
                            <h2 className={`${mont.className} text-center md:text-lg text-xs`}>
                                Department Members
                            </h2>
                            <hr className="my-1 opacity-0" />
                            <h1 className={`${mont.className} font-medium text-sm md:text-3xl text-center `}>
                                Ziyad Jahizh Kartiwa
                            </h1>
                        </div>
                        <div className="flex-shrink-0">
                            <img className="rounded-full w-16 h-16 md:w-80 md:h-80 object-cover object-center mx-auto" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/2024/kepengurusan/foto_profil/ziyad_1" alt="" />
                            <br />
                            <h2 className={`${mont.className} text-center md:text-lg text-xs`}>
                                Department Members
                            </h2>
                            <hr className="my-1 opacity-0" />
                            <h1 className={`${mont.className} font-medium text-sm md:text-3xl text-center `}>
                                Ziyad Jahizh Kartiwa
                            </h1>
                        </div>
                        <div className="flex-shrink-0">
                            <img className="rounded-full w-16 h-16 md:w-80 md:h-80 object-cover object-center mx-auto" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/2024/kepengurusan/foto_profil/ziyad_1" alt="" />
                            <br />
                            <h2 className={`${mont.className} text-center md:text-lg text-xs`}>
                                Department Members
                            </h2>
                            <hr className="my-1 opacity-0" />
                            <h1 className={`${mont.className} font-medium text-sm md:text-3xl text-center `}>
                                Ziyad Jahizh Kartiwa
                            </h1>
                        </div>
                        <div className="flex-shrink-0">
                            <img className="rounded-full w-16 h-16 md:w-80 md:h-80 object-cover object-center mx-auto" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/2024/kepengurusan/foto_profil/ziyad_1" alt="" />
                            <br />
                            <h2 className={`${mont.className} text-center md:text-lg text-xs`}>
                                Department Members
                            </h2>
                            <hr className="my-1 opacity-0" />
                            <h1 className={`${mont.className} font-medium text-sm md:text-3xl text-center `}>
                                Ziyad Jahizh Kartiwa
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"bg-zinc-100 w-full text-zinc-800 px-5 md:px-20 py-5 md:py-10"}>
                <h1 className={"font-medium tracking-tighter text-2xl md:text-6xl text-center md:text-start " + mont.className}>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-zinc-800">Department of</span> Public <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-700 to-zinc-800">Relations</span>
                </h1>
                <hr className="my-1 opacity-0" />
                <p className={`${mont.className} font-medium text-zinc-400 text-center md:text-start md:text-2xl text-sm`}>
                    Divisi Hubungan Masyarakat
                </p>
                <hr className="my-3 md:my-6 opacity-0" />
                <div className="flex w-full md:flex-row flex-col gap-5">
                    <div className="w-full md:w-1/3 flex-shrink-0">
                        <img className="rounded-full w-16 h-16 md:w-80 md:h-80 object-cover object-center mx-auto" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/2024/kepengurusan/foto_profil/ziyad_1" alt="" />
                        <br />
                        <h2 className={`${mont.className} text-center md:text-lg text-xs`}>
                            Head Department
                        </h2>
                        <hr className="my-1 opacity-0" />
                        <h1 className={`${mont.className} font-medium text-sm md:text-3xl text-center `}>
                            Ziyad Jahizh Kartiwa
                        </h1>
                    </div>
                    <div className="w-full md:w-2/3 flex-shrink-0 flex items-center gap-5 relative overflow-auto snap-x scrollbar">
                        <div className="flex-shrink-0">
                            <img className="rounded-full w-16 h-16 md:w-80 md:h-80 object-cover object-center mx-auto" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/2024/kepengurusan/foto_profil/ziyad_1" alt="" />
                            <br />
                            <h2 className={`${mont.className} text-center md:text-lg text-xs`}>
                                Department Members
                            </h2>
                            <hr className="my-1 opacity-0" />
                            <h1 className={`${mont.className} font-medium text-sm md:text-3xl text-center `}>
                                Ziyad Jahizh Kartiwa
                            </h1>
                        </div>
                        <div className="flex-shrink-0">
                            <img className="rounded-full w-16 h-16 md:w-80 md:h-80 object-cover object-center mx-auto" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/2024/kepengurusan/foto_profil/ziyad_1" alt="" />
                            <br />
                            <h2 className={`${mont.className} text-center md:text-lg text-xs`}>
                                Department Members
                            </h2>
                            <hr className="my-1 opacity-0" />
                            <h1 className={`${mont.className} font-medium text-sm md:text-3xl text-center `}>
                                Ziyad Jahizh Kartiwa
                            </h1>
                        </div>
                        <div className="flex-shrink-0">
                            <img className="rounded-full w-16 h-16 md:w-80 md:h-80 object-cover object-center mx-auto" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/2024/kepengurusan/foto_profil/ziyad_1" alt="" />
                            <br />
                            <h2 className={`${mont.className} text-center md:text-lg text-xs`}>
                                Department Members
                            </h2>
                            <hr className="my-1 opacity-0" />
                            <h1 className={`${mont.className} font-medium text-sm md:text-3xl text-center `}>
                                Ziyad Jahizh Kartiwa
                            </h1>
                        </div>
                        <div className="flex-shrink-0">
                            <img className="rounded-full w-16 h-16 md:w-80 md:h-80 object-cover object-center mx-auto" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/2024/kepengurusan/foto_profil/ziyad_1" alt="" />
                            <br />
                            <h2 className={`${mont.className} text-center md:text-lg text-xs`}>
                                Department Members
                            </h2>
                            <hr className="my-1 opacity-0" />
                            <h1 className={`${mont.className} font-medium text-sm md:text-3xl text-center `}>
                                Ziyad Jahizh Kartiwa
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"bg-white w-full text-zinc-800 px-5 md:px-20 py-5 md:py-10"}>
                <h1 className={"font-medium tracking-tighter text-2xl md:text-6xl text-center md:text-start " + mont.className}>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-zinc-800">Department </span> of <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-700 to-zinc-800">Marketing</span>
                </h1>
                <hr className="my-1 opacity-0" />
                <p className={`${mont.className} font-medium text-zinc-400 text-center md:text-start md:text-2xl text-sm`}>
                    Divisi Marketing
                </p>
                <hr className="my-3 md:my-6 opacity-0" />
                <div className="flex w-full md:flex-row flex-col gap-5">
                    <div className="w-full md:w-1/3 flex-shrink-0">
                        <img className="rounded-full w-16 h-16 md:w-80 md:h-80 object-cover object-center mx-auto" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/2024/kepengurusan/foto_profil/ziyad_1" alt="" />
                        <br />
                        <h2 className={`${mont.className} text-center md:text-lg text-xs`}>
                            Head Department
                        </h2>
                        <hr className="my-1 opacity-0" />
                        <h1 className={`${mont.className} font-medium text-sm md:text-3xl text-center `}>
                            Ziyad Jahizh Kartiwa
                        </h1>
                    </div>
                    <div className="w-full md:w-2/3 flex-shrink-0 flex items-center gap-5 relative overflow-auto snap-x scrollbar">
                        <div className="flex-shrink-0">
                            <img className="rounded-full w-16 h-16 md:w-80 md:h-80 object-cover object-center mx-auto" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/2024/kepengurusan/foto_profil/ziyad_1" alt="" />
                            <br />
                            <h2 className={`${mont.className} text-center md:text-lg text-xs`}>
                                Department Members
                            </h2>
                            <hr className="my-1 opacity-0" />
                            <h1 className={`${mont.className} font-medium text-sm md:text-3xl text-center `}>
                                Ziyad Jahizh Kartiwa
                            </h1>
                        </div>
                        <div className="flex-shrink-0">
                            <img className="rounded-full w-16 h-16 md:w-80 md:h-80 object-cover object-center mx-auto" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/2024/kepengurusan/foto_profil/ziyad_1" alt="" />
                            <br />
                            <h2 className={`${mont.className} text-center md:text-lg text-xs`}>
                                Department Members
                            </h2>
                            <hr className="my-1 opacity-0" />
                            <h1 className={`${mont.className} font-medium text-sm md:text-3xl text-center `}>
                                Ziyad Jahizh Kartiwa
                            </h1>
                        </div>
                        <div className="flex-shrink-0">
                            <img className="rounded-full w-16 h-16 md:w-80 md:h-80 object-cover object-center mx-auto" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/2024/kepengurusan/foto_profil/ziyad_1" alt="" />
                            <br />
                            <h2 className={`${mont.className} text-center md:text-lg text-xs`}>
                                Department Members
                            </h2>
                            <hr className="my-1 opacity-0" />
                            <h1 className={`${mont.className} font-medium text-sm md:text-3xl text-center `}>
                                Ziyad Jahizh Kartiwa
                            </h1>
                        </div>
                        <div className="flex-shrink-0">
                            <img className="rounded-full w-16 h-16 md:w-80 md:h-80 object-cover object-center mx-auto" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/2024/kepengurusan/foto_profil/ziyad_1" alt="" />
                            <br />
                            <h2 className={`${mont.className} text-center md:text-lg text-xs`}>
                                Department Members
                            </h2>
                            <hr className="my-1 opacity-0" />
                            <h1 className={`${mont.className} font-medium text-sm md:text-3xl text-center `}>
                                Ziyad Jahizh Kartiwa
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"bg-zinc-100 w-full text-zinc-800 px-5 md:px-20 py-5 md:py-10"}>
                <h1 className={"font-medium tracking-tighter text-2xl md:text-6xl text-center md:text-start " + mont.className}>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-zinc-800">Department </span> of <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-700 to-zinc-800">Educations</span>
                </h1>
                <hr className="my-1 opacity-0" />
                <p className={`${mont.className} font-medium text-zinc-400 text-center md:text-start md:text-2xl text-sm`}>
                    Divisi Pendidikan
                </p>
                <hr className="my-3 md:my-6 opacity-0" />
                <div className="flex w-full md:flex-row flex-col gap-5">
                    <div className="w-full md:w-1/3 flex-shrink-0">
                        <img className="rounded-full w-16 h-16 md:w-80 md:h-80 object-cover object-center mx-auto" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/2024/kepengurusan/foto_profil/ziyad_1" alt="" />
                        <br />
                        <h2 className={`${mont.className} text-center md:text-lg text-xs`}>
                            Head Department
                        </h2>
                        <hr className="my-1 opacity-0" />
                        <h1 className={`${mont.className} font-medium text-sm md:text-3xl text-center `}>
                            Ziyad Jahizh Kartiwa
                        </h1>
                    </div>
                    <div className="w-full md:w-2/3 flex-shrink-0 flex items-center gap-5 relative overflow-auto snap-x scrollbar">
                        <div className="flex-shrink-0">
                            <img className="rounded-full w-16 h-16 md:w-80 md:h-80 object-cover object-center mx-auto" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/2024/kepengurusan/foto_profil/ziyad_1" alt="" />
                            <br />
                            <h2 className={`${mont.className} text-center md:text-lg text-xs`}>
                                Department Members
                            </h2>
                            <hr className="my-1 opacity-0" />
                            <h1 className={`${mont.className} font-medium text-sm md:text-3xl text-center `}>
                                Ziyad Jahizh Kartiwa
                            </h1>
                        </div>
                        <div className="flex-shrink-0">
                            <img className="rounded-full w-16 h-16 md:w-80 md:h-80 object-cover object-center mx-auto" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/2024/kepengurusan/foto_profil/ziyad_1" alt="" />
                            <br />
                            <h2 className={`${mont.className} text-center md:text-lg text-xs`}>
                                Department Members
                            </h2>
                            <hr className="my-1 opacity-0" />
                            <h1 className={`${mont.className} font-medium text-sm md:text-3xl text-center `}>
                                Ziyad Jahizh Kartiwa
                            </h1>
                        </div>
                        <div className="flex-shrink-0">
                            <img className="rounded-full w-16 h-16 md:w-80 md:h-80 object-cover object-center mx-auto" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/2024/kepengurusan/foto_profil/ziyad_1" alt="" />
                            <br />
                            <h2 className={`${mont.className} text-center md:text-lg text-xs`}>
                                Department Members
                            </h2>
                            <hr className="my-1 opacity-0" />
                            <h1 className={`${mont.className} font-medium text-sm md:text-3xl text-center `}>
                                Ziyad Jahizh Kartiwa
                            </h1>
                        </div>
                        <div className="flex-shrink-0">
                            <img className="rounded-full w-16 h-16 md:w-80 md:h-80 object-cover object-center mx-auto" src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/2024/kepengurusan/foto_profil/ziyad_1" alt="" />
                            <br />
                            <h2 className={`${mont.className} text-center md:text-lg text-xs`}>
                                Department Members
                            </h2>
                            <hr className="my-1 opacity-0" />
                            <h1 className={`${mont.className} font-medium text-sm md:text-3xl text-center `}>
                                Ziyad Jahizh Kartiwa
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

        </MainLayoutPage>
    )
}