import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What types of businesses do you serve?',
    answer: 'We serve a wide range of retail businesses, from small boutiques to large enterprise chains. Our solutions are scalable and can be customized to meet the specific needs of your business.',
  },
  {
    question: 'How secure are your POS systems?',
    answer: 'Our POS systems implement industry-leading security measures, including end-to-end encryption, secure payment processing, and regular security updates to protect your business and customer data.',
  },
  {
    question: 'Do you offer technical support?',
    answer: '24/7 technical support is available for all our clients. Our expert team is always ready to help you with any issues or questions you may have.',
  },
  {
    question: 'Can I integrate your POS system with my existing software?',
    answer: 'Yes, our POS systems are designed to integrate seamlessly with many popular business management tools and software solutions. We can help you determine the best integration strategy for your needs.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
          <p className="mt-4 text-xl text-gray-300">
            Find answers to common questions about our POS solutions.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-200"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left text-white hover:bg-gray-700 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}