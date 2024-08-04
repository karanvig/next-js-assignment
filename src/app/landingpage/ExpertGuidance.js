// src/app/Components/ExpertGuidance.js
import Image from 'next/image';

export default function ExpertGuidance() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-28 p-8 rounded-lg shadow-md">
      <div className="max-w-lg mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-4" style={{ color: 'rgba(28, 70, 112, 1)' }}>
          Expert Guidance
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Our team of experts is here to provide you with personalized guidance and support. Whether you need help with setup, troubleshooting, or optimizing your virtual office, our experienced professionals are just a call away.
        </p>
        <button className="bg-yellow-500 text-black py-2 px-6 rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">
          Get Expert Help
        </button>
      </div>
      
      <div className="flex-shrink-0">
        <Image src="/images/smilingperson.png" alt="Expert Guidance" width={400} height={300} className="object-cover rounded-md" />
      </div>
    </div>
  );
}
