import Image from "next/image";

export default function OfficeSection({ officespaces }) {
    return (
        <div style={{ backgroundColor: 'rgba(245, 245, 245, 1)' }} className="py-12 px-6">
            <h1 className="text-black text-2xl font-medium text-center mb-8">
                Flexible workspace designed around your needs
            </h1>

            <div className="bg-white flex justify-between px-10 py-4 rounded-2xl mb-8">
                <button
                    className="py-2 px-4 text-white rounded-2xl transition-colors duration-300 hover:bg-green-700"
                    style={{ backgroundColor: 'rgba(76, 175, 80, 1)' }}
                >
                    Office Space
                </button>
                <button
                    className="py-2 px-4 rounded-md transition-colors duration-300 hover:bg-gray-200"
                >
                    Coworking
                </button>
                <button
                    className="py-2 px-4 rounded-md transition-colors duration-300 hover:bg-gray-200"
                >
                    Virtual Offices
                </button>
                <button
                    className="py-2 px-4 rounded-md transition-colors duration-300 hover:bg-gray-200"
                >
                    Meeting Rooms
                </button>
            </div>

            <div className="p-5 mb-5 pl-12">
                <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="flex flex-wrap gap-6 justify-center">
                {officespaces.map((officespace, index) => (
                    <div
                        key={index}
                        className="bg-white flex flex-col rounded-lg border p-2 w-full md:w-64 h-[500px] shadow-lg"
                        style={{ maxWidth: '300px' }} // Optional: Limits the max width of the card
                    >
                        <div className="relative w-full h-3/4 mb-4 overflow-hidden">
                            <Image
                                src={officespace.image}
                                alt={officespace.heading}
                                layout="fill"
                                objectFit="cover"  // Ensures the image covers the container
                                className="rounded-t-lg"
                            />
                        </div>
                        <div className="text-center">
                            <h2 className="mb-2">{officespace.heading}</h2>
                            <p className="text-gray-600 mb-2">{officespace.text}</p>
                            <p>{officespace.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
