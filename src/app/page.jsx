'use client'

import MainLayoutPage from "@/components/mainLayout";
import { nunito, poppinsBold, poppinsLight, poppinsMedium, quicksand } from "@/libs/config/fonts";
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
      <div className="w-full h-screen flex items-center justify-center gap-5">
        <img src="https://qzjbh7uie25fdc9m.public.blob.vercel-storage.com/public/about_us" alt="" />
      </div>
    </MainLayoutPage>
  );
}

