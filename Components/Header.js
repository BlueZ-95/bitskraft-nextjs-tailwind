import Image from 'next/image';
import { useState } from 'react';

function Header() {

    const [IsMenuVisible, SetMenuVisible] = useState(false);
    
    const toggleMenu = () => {
        SetMenuVisible(IsMenuVisible ? false : true);
    }

    return (
        <header className=" container mx-auto my-5">
            {/* Desktop screen header */}
            <div className="hidden sm:flex flex-row justify-between items-center h-auto">
                {/* Logo */}
                <Image src="/bitsKraftLogo.svg" width={150} height={50} layout="fixed" />

                {/* Links */}
                <div className="flex flex-col sm:flex-row justify-evenly items-center w-auto">
                    <a className="cursor-pointer mx-4" href="#">Our Work</a>
                    <a className="cursor-pointer mx-4" href="#">Services</a>
                    <a className="cursor-pointer mx-4" href="#">About</a>
                    <a className="cursor-pointer mx-4" href="#">Showcase</a>
                </div>
            </div>

            {/* Mobile screen header */}
            <div className="sm:hidden flex flex-col justify-between items-center h-auto">
                {/* Logo */}
                <div className="flex justify-between w-full">
                    <span className="mx-5">
                        <Image src="/bitsKraftLogo.svg" width={150} height={50} layout="fixed" />
                    </span>
                    <span className="mx-5" onClick={toggleMenu}>
                        <Image src="/Hamburger.svg" width={30} height={50} layout="fixed" />
                    </span>
                </div>

                {/* Links */}
                <div className={`${IsMenuVisible ? 'flex' : 'hidden'} flex-col justify-between items-center my-3 text-xl`}>
                    <a className="cursor-pointer mx-4" href="#">Our Work</a>
                    <a className="cursor-pointer mx-4" href="#">Services</a>
                    <a className="cursor-pointer mx-4" href="#">About</a>
                    <a className="cursor-pointer mx-4" href="#">Showcase</a>
                </div>
            </div>
        </header>
    )
}

export default Header
