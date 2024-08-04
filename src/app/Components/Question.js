// components/FaqAccordion.js
"use client";

const Question = ({questions}) => {

    return (
        <div className="max-w-8xl mx-auto my-8 p-6 bg-white rounded-lg">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-semibold text-blue-700">Questions in Mind</h2>
                <p className="text-lg text-gray-600">Read our FAQ</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questions.map((question, index) => (
                    <div key={index} className="border rounded-lg bg-blue-100">
                        <div className="w-full text-left py-4 px-6 flex justify-between items-center">
                            <span className="text-lg font-medium">{question.question}</span>
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Question;
