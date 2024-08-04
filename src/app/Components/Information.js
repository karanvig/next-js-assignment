import Image from "next/image";

export default function Information() {
    return (
        <div className="bg-white py-12 px-6">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <Image
                        src="/images/information.png" // Replace with your image path
                        alt="Information"
                        layout="responsive"
                        width={500}
                        height={300}
                        className="rounded-lg"
                    />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left md:pl-8">
                    <h2 className="text-2xl font-semibold mb-4">Information Title</h2>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                    </p>
                </div>
            </div>
        </div>
    );
}
