// src/app/Components/CityCard.js

import Image from 'next/image';

export default function CityCard({ name, image }) {
    return (
        <div className="w-20 flex-shrink-0"> 
            {/* Image Container */}
            <div className="relative w-full h-16 flex justify-center items-center  bg-white rounded-t-lg">
                <Image
                    src={image}
                    alt={name}
                    layout="fixed"
                    width={50}
                    height={30}
                />
            </div>
            
            {/* Text Container */}
            <div className="p-2 text-center rounded-b-lg shadow-md">
                <h2 className="text-sm font-bold text-white">{name}</h2>
            </div>
        </div>
    );
}
