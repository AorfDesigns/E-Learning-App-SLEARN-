import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="w-full text-left px-4 py-2 text-gray-900 dark:text-white focus:outline-none"
        onClick={toggleOpen}
      >
        <div className="flex justify-between items-center">
          <span>{question}</span>
          <svg
            className={`w-6 h-6 transform transition-transform ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="px-4 py-2 text-gray-700 dark:text-gray-300">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: "How do I enroll in a course?",
      answer: "To enroll in a course, simply navigate to the course page and click on the 'Enroll Now' button. Follow the instructions to complete your enrollment."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit cards, debit cards, and PayPal. Detailed information can be found on the payment page."
    },
    {
      question: "Can I access the courses offline?",
      answer: "Yes, our mobile app allows you to download course materials and access them offline. Simply download the app from your respective app store."
    },
    {
      question: "How do I get a certificate of completion?",
      answer: "Upon successfully completing a course, you will receive a certificate of completion which you can download and share on your professional networks."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center flex-col justify-center p-6">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-8 text-left">Frequently Asked Questions</h2>
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
