import Image from "next/image";

export default function Companies() {
    return (
        <div className="bg-white py-12 px-6">
            <div className="w-full">
                <Image
                    src="/images/list.png" 
                    alt="Partner Companies"
                    layout="responsive"
                    width={1920}
                    height={1080}
                    className="rounded-lg"
                />
            </div>
        </div>
    );
}
