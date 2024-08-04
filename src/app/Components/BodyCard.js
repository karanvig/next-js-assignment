import Image from "next/image";

export default function BodyCard({ heading, text, image }) {
    return (
        <div className="bg-white flex flex-col items-center gap-4 rounded-lg border p-4 w-full max-w-xs">
            <div className="relative w-24 h-16"> 
                <Image
                    src={image}
                    alt={heading}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                />
            </div>
            <div className="text-center">
                <h2 className="text-xl font-semibold mb-2">{heading}</h2>
                <p className="text-gray-600">{text}</p>
            </div>
        </div>
    );
}
