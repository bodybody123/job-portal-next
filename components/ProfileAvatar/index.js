import style from './style.module.css';
import Hexagon from './hexagon.svg';
import Image from 'next/image';
import { useState } from 'react';

const ProfileAvatar = ({src, username}) => {
    return (
        <div className='relative rounded-full w-9 p-[2px] h-9 ring flex justify-center items-center'>
            {src ? 
            <Image src={src} alt={`${username} profile picture`} className="rounded-full" layout="fill"/> :
            username}
            <div className='absolute -top-2 -right-2 bg-red-500 rounded-full w-4 h-4 text-xs text-center ring-[#5C7CEA] text-white'>1</div>
        </div>
    )
}

export default ProfileAvatar;