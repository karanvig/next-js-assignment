import Image from "next/image";

export default function ClientTestimonial() {
    return (
        <div className="bg-gray-200 py-12 px-6">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
                <div className="md:w-1/2 text-center md:text-left md:pl-8">
                    <h2 className="text-2xl font-semibold mb-4">What Our Clients Say</h2>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <p>Client Name, Company</p>
                </div>
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <Image
                        src="/images/testimonial.png" 
                        alt="Client Testimonial"
                        layout="responsive"
                        width={500}
                        height={300}
                        className="rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}
