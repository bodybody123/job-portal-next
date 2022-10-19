import Image from "next/image";

const Avatar = ({src, loading = false}) => {
    return (
        <div className="w-9 h-9 rounded-full">
            {loading ? <div className="bg-slate-200 animate-pulse w-full h-full rounded-full"></div> :
            <Image src={src} alt="avatar" width={36} height={36}/>
            }
        </div>
    )
}

export default Avatar;