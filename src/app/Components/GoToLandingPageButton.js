// src/app/Components/GoToLandingPageButton.js
import Link from 'next/link';

const GoToLandingPageButton = () => {
  return (
    <Link href="/landingpage" className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition">
      Go to Landing Page
    </Link>
  );
};

export default GoToLandingPageButton;
