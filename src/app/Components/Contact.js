import Image from "next/image";

export default function Contact() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4 flex justify-center items-center">
                <div className="flex flex-col md:flex-row flex-wrap items-center justify-between w-full">
                    {/* Logo */}
                    <div className="flex-shrink-0 mb-4 md:mb-0 text-center md:text-left">
                        <Image src="/images/whiterocket.png" width={100} height={100} alt="Logo" className="h-12 mx-auto md:mx-0" />
                        <div className="flex justify-center md:justify-start space-x-4 mt-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <Image src="/images/facebook.png" width={20} height={20} alt="Facebook" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <Image src="/images/instagram.png" width={20} height={20} alt="Instagram" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Image src="/images/linkedin.png" width={20} height={20} alt="LinkedIn" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <Image src="/images/twitter.png" width={20} height={20} alt="Twitter" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex-grow flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
                        {/* Services */}
                        <div className="w-full md:w-auto">
                            <h3 className="text-lg font-semibold mb-2">Services</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:underline font-light">Virtual Office</a></li>
                                <li><a href="#" className="hover:underline font-light">GST Registration</a></li>
                                <li><a href="#" className="hover:underline font-light">Coworking Spaces</a></li>
                                <li><a href="#" className="hover:underline font-light">Business Registration</a></li>
                                <li><a href="#" className="hover:underline font-light">Mailing Address</a></li>
                                <li><a href="#" className="hover:underline font-light">Dedicated Task</a></li>
                            </ul>
                        </div>

                        {/* Other Pages */}
                        <div className="w-full md:w-auto">
                            <h3 className="text-lg font-semibold mb-2">Other Pages</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:underline font-light">About Us</a></li>
                                <li><a href="#" className="hover:underline font-light">Contact</a></li>
                                <li><a href="#" className="hover:underline font-light">Blog</a></li>
                                <li><a href="#" className="hover:underline font-light">FAQs</a></li>
                                <li><a href="#" className="hover:underline font-light">Careers</a></li>
                                <li><a href="#" className="hover:underline font-light">Privacy Policy</a></li>
                            </ul>
                        </div>

                        {/* Other Links */}
                        <div className="w-full md:w-auto">
                            <h3 className="text-lg font-semibold mb-2">Other Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:underline font-light">Terms of Service</a></li>
                                <li><a href="#" className="hover:underline font-light">Affiliate Program</a></li>
                                <li><a href="#" className="hover:underline font-light">Support</a></li>
                                <li><a href="#" className="hover:underline font-light">Site Map</a></li>
                                <li><a href="#" className="hover:underline font-light">Press</a></li>
                                <li><a href="#" className="hover:underline font-light">Partners</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Email Subscription Form */}
                    <div className="flex-shrink-0 mt-4 md:mt-0 text-center md:text-left">
                        <form className="flex flex-col md:flex-row items-center">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-2 mb-2 md:mb-0 md:mr-2 rounded-lg border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
}
