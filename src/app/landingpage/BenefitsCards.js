// src/app/Components/BenefitsCards.js
import Image from 'next/image';

const BenefitsCards = ({ benefits }) => {
  return (
    <div className="p-8">
      <div className="flex flex-wrap justify-center items-center gap-4">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center max-w-sm w-full border border-gray-200"
          >
            {benefit.image && (
              <div className="mb-4">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  width={50}
                  height={50}
                  className="object-cover" // Rounded image
                />
              </div>
            )}
            <h3 className="text-lg font-semibold mb-2 text-center">{benefit.heading}</h3>
            <p className="text-center text-sm">{benefit.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsCards;
