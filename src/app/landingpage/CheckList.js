// src/app/Components/CheckList.js
import Image from 'next/image';

export default function CheckList() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 space-y-8 md:space-y-0">
      {/* Left Side: Text */}
      <div className="max-w-lg text-center md:text-left mb-32">
        <h1 className="text-3xl font-bold mb-4" style={{ color: 'rgba(28, 70, 112, 1)' }}>
          FREE DOWNLOAD:
        </h1>
        <p className="text-lg mb-4" style={{ color: 'rgba(28, 70, 112, 1)' }}>
          The Ultimate Checklist For Virtual Office 2024
        </p>
        <span className="text-gray-600" style={{ color: 'rgba(28, 70, 112, 1)' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
        </span>
        <div className="mt-6">
          <button className="bg-yellow-400 text-white py-2 px-4 rounded hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50">
            Send me the checklist
          </button>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="flex-shrink-0">
        <Image src="/images/building.png" alt="Checklist Illustration" width={250} height={100} className="object-cover rounded-md" />
      </div>
    </div>
  );
}
