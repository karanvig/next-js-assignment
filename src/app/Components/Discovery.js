import Image from "next/image";

export default function Discovery() {
    return (
        <div className="flex flex-col lg:flex-row items-center p-6 lg:p-12 bg-white mt-16">
            {/* Left Side - Image */}
            <div className="flex-shrink-0 w-full lg:w-1/2 mb-6 lg:mb-0">
                <Image
                    src="/images/group.png" 
                    alt="Sample Image"
                    width={600} 
                    height={400} 
                    className="object-cover w-full h-auto rounded-lg shadow-lg"
                />
            </div>
            {/* Right Side - Text */}
            <div className="w-full lg:w-1/2 lg:pl-8 text-center lg:text-left">
                <h1 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">Welcome to Discovery</h1>
                <p className="text-base lg:text-lg text-gray-700">
                    Discover a world of opportunities and experiences with our unique offerings. From exclusive deals to personalized recommendations, we provide the tools and resources you need to explore and enjoy. Dive in and start your journey with us today!
                </p>
            </div>
        </div>
    );
}
