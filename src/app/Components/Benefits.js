import Image from "next/image";

export default function Benefits() {
    return (
        <div className="bg-gray-200 py-12 px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row items-center">
                {/* Left Side - Text */}
                <div className="w-full lg:w-1/2 lg:pr-8 text-center lg:text-left mb-6 lg:mb-0">
                    <h1 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">Discover Our Benefits</h1>
                    <p className="text-base lg:text-lg text-gray-700">
                        Explore the key benefits that our service offers. From exclusive features to top-notch support, we ensure a seamless experience that enhances your productivity and satisfaction. Learn more about how our solutions can make a difference for you!
                    </p>
                </div>
                {/* Right Side - Image */}
                <div className="flex-shrink-0 w-full lg:w-1/2 mb-6 lg:mb-0">
                    <Image
                        src="/images/Benefits -logo.png" 
                        alt="Benefits Image"
                        width={600} 
                        height={400} 
                        className="object-cover w-full h-full rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
}
