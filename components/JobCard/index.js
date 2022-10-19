import { Archive, Clock, Location, Money } from "iconsax-react"
import { useState } from "react";
import Avatar from "../Avatar"

const CardJob = ({loading = false, profile, positionLocation, position, salaryRange, description, title, ownernName, ownerLocation, heroImg, heroVideo}) => {
    const [saved, setSaved] = useState(false);

    return (
        <div className="shadow-2xl p-4">

        <div className="flex justify-between mb-4">
          <div className="flex items-center gap-2 w-full">
            <Avatar src={profile} loading={loading}/>
            <div className="flex flex-col items-center w-full">
              {loading ? <div className="bg-slate-200 animate-pulse w-full h-4 mb-2"></div> : <div className="font-semibold text-xl">{ownernName}</div>}
              {loading ? <div className="bg-slate-200 animate-pulse w-full h-4"></div> : <div className="text-sm text-gray-400">{ownerLocation}</div>}
            </div>
          </div>
          <div className="cursor-pointer p-4" onClick={() => setSaved(!saved)}>
              <Archive variant={saved && "Bold"}/>
          </div>
        </div>

        <div className="rounded-[20px] overflow-hidden mb-4 max-h-[250px]">
          {loading ? <div className="bg-slate-200 animate-pulse h-[250px]"></div> :
          <video autoPlay loop >
          <source src={heroVideo} type="video/mp4"/>
          </video>
          }
        </div>

        <div className="mb-4">
        {loading ? <div className="bg-slate-200 animate-pulse w-full h-full"></div> : <h6 className="font-bold text-xl mb-2">{title}</h6>}
        {loading ? <div className="bg-slate-200 animate-pulse w-full h-full"></div> : <p className="text-gray-700">{description}</p>}
        </div>

        <div className="flex justify-between">
          <div className="flex items-center gap-1 font-semibold text-sm">
            <span className="w-[30px] h-[30px] bg-[rgba(159,128,252,0.24)] rounded-full p-[2px] flex justify-center items-center">
              <Location color="#9F80FC" variant="Bold"/>
            </span>
            {loading ? <div className="bg-slate-200 animate-pulse w-[100px] h-4"></div> : positionLocation}
          </div>

          <div className="flex items-center gap-1 font-semibold text-sm">
            <span className="w-[30px] h-[30px] bg-[#fa7f7f29] rounded-full p-[2px] flex justify-center items-center">
              <Clock color="#FA7F80" variant="Bold"/>
            </span>
            {loading ? <div className="bg-slate-200 animate-pulse w-[100px] h-4"></div> : position}
          </div>

          <div className="flex items-center gap-1 font-semibold text-sm">
            <span className="w-[30px] h-[30px] bg-[#30C33F29] rounded-full p-[2px] flex justify-center items-center">
              <Money color="#30C33F" variant="Bold"/>
            </span>
            {loading ? <div className="bg-slate-200 animate-pulse w-[100px] h-4"></div> : salaryRange}
          </div>

        </div>
     
      </div>
    )
}

export default CardJob;
