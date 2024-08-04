import Image from 'next/image';
import cities from '../data/cities.json';
import CityCard from './CityCard';

export default function Background() {
    return (
        <div className="relative" style={{ height: '80vh' }}>
            {/* Background Image */}
            <div className="absolute inset-0 h-full">
                <Image
                    src="/images/background.png"
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <div className="container mx-auto p-4 text-center">
                    <p className="text-lg text-white mt-4">From a single desk to a whole building. The choice is yours.</p>
                    <h1 className="text-4xl font-bold text-white mt-2">Discover the Ultimate Workspace Solution</h1>

                    <div className="flex flex-col items-center mt-6 px-4">
                        <div className="bg-slate-100 rounded-lg p-4 shadow-lg w-full max-w-md flex flex-wrap items-center">
                            <input
                                type="text"
                                className="border border-gray-300 p-2 rounded-md flex-grow min-w-0"
                                placeholder="Search City"
                            />
                            <button className="bg-[#2962FF] text-white px-4 py-2 rounded-3xl hover:bg-blue-700 ml-2 whitespace-nowrap">
                                Search
                            </button>
                        </div>
                    </div>




                    <div className="mt-8 w-full px-4">
                        <div className="mb-4">
                            <p className="text-white">Trending Cities</p>
                        </div>
                        <div className="flex gap-6 justify-center overflow-x-auto">
                            {cities.map((city, index) => (
                                <CityCard key={index} name={city.name} image={city.image} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
