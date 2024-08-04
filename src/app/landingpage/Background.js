// src/app/Components/Background.js
import Image from 'next/image';

export default function Background() {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/backgroundtable.png')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Wrapper */}
      <div className="relative flex flex-col md:flex-row h-full items-center justify-between px-8">
        {/* Left Side: Logo and Text */}
        <div className="text-white max-w-lg text-center md:text-left flex flex-col items-center md:items-start">
          {/* Logo on top */}
          <div className="mb-12 md:mb-32">
            <Image src="/images/whiterocket.png" alt="Logo" width={150} height={150} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold">
            Work From Anywhere, Grow Everywhere.
          </h1>
          <p className="mt-2 text-lg">
            Get Your Instant Virtual Office
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white p-10 rounded shadow-lg max-w-md w-full mt-18 md:mt-12">
          <h2 className="text-2xl font-bold mb-4">Get in touch with us</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
            </div>
            <div className="mb-6">
              <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
