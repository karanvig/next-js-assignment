import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="bg-white p-2 lg:p-4">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <Image src="/images/Rocket.png" alt="Logo" width={100} height={30} className="ml-4" />
                </div>

                {/* Navigation Links for larger screens */}
                <div className="hidden lg:flex flex-grow justify-center items-center space-x-4">
                    <span className="text-gray-800 hover:bg-gray-200 px-4 py-2 rounded cursor-pointer flex items-center">
                        Workspace & Services
                        <Image src="/arrow.svg" alt="Down Arrow" width={16} height={16} className="ml-2" />
                    </span>
                    <span className="text-gray-800 hover:bg-gray-200 px-4 py-2 rounded cursor-pointer">
                        Get Started
                    </span>
                    <span className="text-gray-800 hover:bg-gray-200 px-4 py-2 rounded cursor-pointer flex items-center">
                        More
                        <Image src="/arrow.svg" alt="Down Arrow" width={16} height={16} className="ml-2" />
                    </span>
                    <span className="text-gray-800 hover:bg-gray-200 px-4 py-2 rounded cursor-pointer">
                        Help
                    </span>
                </div>

                {/* Icons and Button */}
                <div className="flex items-center space-x-2 lg:space-x-4">
                    <Image src="/person.svg" alt="Person Icon" width={20} height={20} className="text-black" />
                    <div className="w-px h-4 bg-gray-300 mx-1 lg:mx-2"></div>
                    <Image src="/call.svg" alt="Phone Icon" width={20} height={20} className="text-black" />
                    <div className="hidden lg:flex items-center">
                        <button className="bg-[#2962FF] text-white px-4 py-2 rounded-3xl hover:bg-blue-700 ml-2">
                            Enquire Now
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center">
                    <button className="text-gray-800 hover:bg-gray-200 p-2 rounded">
                        <Image src="/menu.svg" alt="Menu" width={24} height={24} />
                    </button>
                </div>
            </div>
        </nav>
    );
}
