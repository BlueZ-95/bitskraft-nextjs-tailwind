import Image from 'next/image';

function Header() {
    return (
        <header className="flex flex-col sm:flex-row container mx-auto my-5 justify-between items-center h-auto">
            {/* Logo */}
            <div>
                <Image src="/bitsKraftLogo.svg" width={150} height={50} layout="fixed" />
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row justify-evenly items-center w-1/3">
                <a className="cursor-pointer" href="#">Our Work</a>
                <a className="cursor-pointer" href="#">Services</a>
                <a className="cursor-pointer" href="#">About</a>
                <a className="cursor-pointer" href="#">Showcase</a>
                <span className="hidden">
                    <Image src="/Hamburger.svg" width={30} height={30} layout="fixed" />
                </span>
            </div>
        </header>
    )
}

export default Header
