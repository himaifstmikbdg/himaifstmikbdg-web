'use client'

import MainLayoutPage from "@/components/mainLayout"
import { mont,edu, nunito } from "@/libs/config/fonts"
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare, faBars, faSignIn } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Toaster } from "react-hot-toast"

export default function EventsPage() {
    return (
        <MainLayoutPage>
            <div className="flex justify-center  h-screen">
                <div className="container bg-slate-100 w-full flex items-center justify-between gap-10">
                    <article className="text-zinc-800">
                        <p className={`${mont.className} font-medium text-zinc-600 text-center md:text-start`}>to Get know more</p>
                        <h1 className={`${mont.className} font-extrabold text-transparent bg-clip-text bg-gradient-to-b text-center md:text-left md:bg-gradient-to-r from-zinc-800 to-blue-800 tracking-tighter text-5xl`}>
                            Let's Explore Our Events
                        </h1>
                        <div className="flex items-center gap-5">
                            <hr className="flex-grow md:hidden " />
                            {/* <p className={`${mont.className} font-bold text-zinc-600 text-xs`}>
                            HIMA INFORMATIKA
                            </p> */}
                            <hr className="flex-grow " />
                        </div>
                        <hr className="my-3 opacity-0" />
                        <hr className="my-3 opacity-0" />
                    </article>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">        
                        <div class="grid gap-4">
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
                            </div>
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
                            </div>
                        </div>
                        <div class="grid gap-4">
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
                            </div>
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
                            </div>
                        </div>
                        <div class="grid gap-4">
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
                            </div>
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </MainLayoutPage>
    )
}