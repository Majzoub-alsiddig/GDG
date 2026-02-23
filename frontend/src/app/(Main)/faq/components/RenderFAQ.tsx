"use client";
import React, { useState } from "react";
import "./style.css";

interface FAQItem {
  question: string;
  answer: string;
}

type faqDataProps = { faqData: FAQItem[] };

const RenderFAQ: React.FC<faqDataProps> = ({ faqData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-900">
        Frequently Asked Questions
      </h1>
      <div className="space-y-6">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md bg-white overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <span className="text-base sm:text-lg">{item.question}</span>
              <span className="text-xl font-bold text-blue-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            <div
              className={`transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden px-5`}
            >
              <p className="py-3 text-gray-600 text-sm sm:text-base">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RenderFAQ;
