// src/app/Components/VirtualOffice.js
import Image from 'next/image';

export default function VirtualOffice() {
  return (
    <div className="p-8 flex flex-col md:flex-row items-center justify-center">
      {/* Left Side: Image */}
      <div className="flex-shrink-0 md:w-1/2 mb-8 md:mb-0 -mr-44">
        <Image 
          src="/images/virtualoffice.png" 
          alt="Virtual Office" 
          width={300} 
          height={200} 
          quality={100}
          className="object-cover"
        />
      </div>

      {/* Right Side: Text */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4" style={{ color: 'rgba(28, 70, 112, 1)' }}>
          Welcome to Your Virtual Office
        </h1>
        <p className="text-lg text-gray-700">
          Here, you can find all the resources and tools you need to manage your virtual workspace efficiently. Explore our features and get started with your virtual office setup.
        </p>
      </div>
    </div>
  );
}
