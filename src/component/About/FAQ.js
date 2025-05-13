

'use client';

import FAQItem from '@/component/FAQ';

const FAQSection = ({ faqs, activeFaq, toggleFaq }) => {
    return (
        <section className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600">
                    Everything you need to know about Asset Central Report
                </p>
            </div>
            
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={activeFaq === index}
                        onClick={() => toggleFaq(index)}
                    />
                ))}
            </div>
            
            <div className="mt-12 text-center">
                <p className="text-lg text-gray-600 mb-6 sm:mb-1">
                    Still have questions?
                </p>
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 sm:mb-1">
                    Contact Our Support Team
                </button>
            </div>
        </section>
    );
};

export default FAQSection;