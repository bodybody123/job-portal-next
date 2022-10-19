import { Archive, ArrowLeft, Clock, CloseCircle, HambergerMenu, Location, Money, Spotify } from "iconsax-react";
import Head from "next/head";
import { useEffect, useState } from "react";
import Avatar from "../components/Avatar";
import CardJob from "../components/JobCard";
import MobileHeader from "../components/MobileHeader";
import ProfileAvatar from "../components/ProfileAvatar";

const data =[
  {
    profile: '/img/company/spotify.png', 
    positionLocation: 'Offsite, Silicon Valley',
    position: 'Full Time', 
    salaryRange: '3K-4K', 
    description: 'We are looking for senior user interface designer with minimum 5 years experience in the field', 
    title: 'Senior UI Designer', 
    ownernName: 'Spotify AB', 
    ownerLocation: 'Silicon Valley, california', 
    heroImg: null, 
    heroVideo: '/videos/interview.mp4',
  }
]

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [])

  return (
    <>
    <MobileHeader profileImage={'/img/image.jfif'} username='HM'/>
    <div className='px-4'>
      <h6 className="font-bold text-2xl">Latest job</h6>
      {data.map((item, key) => <CardJob key={key} {...item} loading={loading}/>)}
    </div>
    </>
  )
}
