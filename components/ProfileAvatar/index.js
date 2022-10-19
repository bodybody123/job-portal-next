import style from './style.module.css';
import Hexagon from './hexagon.svg';
import Image from 'next/image';
import { useState } from 'react';

const ProfileAvatar = ({src, username}) => {
    return (
        <div className='relative rounded-full w-12 p-[2px] h-12 ring-2 ring-[#5C7CEA] flex justify-center items-center'>
            {src ? 
            <Image src={src} alt={`${username} profile picture`} className="rounded-full" width={64} height={64} /> :
            username}
            <div className='absolute -top-2 -right-2 bg-red-500 rounded-full w-5 h-5 text-xs text-center ring-[#5C7CEA] text-white flex justify-center items-center'>1</div>
        </div>
    )
}

export default ProfileAvatar;