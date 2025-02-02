import { Monitor, ShoppingBag, Smartphone, Wrench, CreditCard, BarChart, Cloud, Shield } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'Mobile POS Solutions',
    description: 'Improve customer experience with mobile POS, reducing abandonment rates and providing deeper customer service.',
    features: ['Contactless Payments', 'Inventory Management', 'Customer Profiles']
  },
  {
    icon: ShoppingBag,
    title: 'In-Store Experience',
    description: 'Blur the line between shopping and purchasing experiences, facilitating customer engagement and driving loyalty.',
    features: ['Digital Receipts', 'Loyalty Programs', 'Gift Cards']
  },
  {
    icon: Monitor,
    title: 'Integrated Systems',
    description: 'Adopt a single hardware and software solution with the same user interface, functionality, and features across all devices.',
    features: ['Cross-Platform Support', 'Real-time Sync', 'Multi-Location']
  },
  {
    icon: Wrench,
    title: 'Modern Technology',
    description: 'Choose a POS system to fit your business needs, hardened to withstand the day-to-day rigors of in-store environments.',
    features: ['Custom Hardware', 'Regular Updates', 'Technical Support']
  },
  {
    icon: CreditCard,
    title: 'Payment Processing',
    description: 'Secure and efficient payment processing with support for multiple payment methods and currencies.',
    features: ['Multiple Currencies', 'Split Payments', 'Digital Wallets']
  },
  {
    icon: BarChart,
    title: 'Analytics & Reporting',
    description: 'Gain valuable insights into your business with comprehensive analytics and reporting tools.',
    features: ['Sales Reports', 'Inventory Tracking', 'Customer Insights']
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Access your data and manage your business from anywhere with our cloud-based solutions.',
    features: ['Remote Access', 'Automatic Backups', 'Scalable Storage']
  },
  {
    icon: Shield,
    title: 'Security Features',
    description: 'Protect your business and customer data with enterprise-grade security features.',
    features: ['Encryption', 'Fraud Prevention', 'Compliance']
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Our Services</h2>
          <p className="mt-4 text-xl text-gray-300">
            We offer a comprehensive range of integrated retail POS solutions designed to meet the diverse needs of modern businesses.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-all transform hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-white">{service.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <span className="mr-2 text-blue-400">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}