import { ArrowLeft, CloseCircle, HambergerMenu } from "iconsax-react";
import Head from "next/head";
import { useState } from "react";
import MobileHeader from "../components/MobileHeader";
import ProfileAvatar from "../components/ProfileAvatar";

export default function Home() {

  return (
    <>
    <MobileHeader profileImage={'/img/image.jfif'} username='HM'/>
    <div className='px-4'>
      <h6 className="font-bold text-2xl">Latest job</h6>
    </div>
    </>
  )
}
