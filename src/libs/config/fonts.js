import { Nunito_Sans, Poppins, Quicksand, Roboto } from "next/font/google";

export const nunito = Nunito_Sans({subsets: ['latin']})
export const quicksand = Quicksand({subsets: ['latin']})
export const poppinsLight = Poppins({subsets: ['latin'], weight: ['300']})
export const poppinsMedium = Poppins({subsets: ['latin'], weight: ['500']})
export const poppinsBold = Poppins({subsets: ['latin'], weight: ['700']})
export const poppinsExtraBold = Poppins({subsets: ['latin'], weight: ['900']})
export const roboto = Roboto({subsets: ['latin'], weight: ['400']})
