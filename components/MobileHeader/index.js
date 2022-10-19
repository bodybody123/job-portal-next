import { ArrowLeft, HambergerMenu } from "iconsax-react"
import { useState } from "react";
import ProfileAvatar from "../ProfileAvatar"

const MobileHeader = ({profileImage, username}) => {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <header className="flex justify-between items-center px-6 py-12">
            <div className="cursor-pointer" onClick={() => setIsOpened(!isOpened)}>{!isOpened ? <HambergerMenu /> : <span><ArrowLeft /></span>} </div>
            <ProfileAvatar src={profileImage} username={username}/>
        </header>
    )
}

export default MobileHeader;