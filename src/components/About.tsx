import { Award, Shield, Users, Zap, Globe, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our team brings decades of combined experience in retail technology solutions.',
  },
  {
    icon: Shield,
    title: 'Secure Solutions',
    description: 'Enterprise-grade security built into every system we deploy.',
  },
  {
    icon: Award,
    title: 'Industry Leader',
    description: 'Recognized excellence in POS solutions and customer service.',
  },
  {
    icon: Zap,
    title: 'Fast Integration',
    description: 'Quick deployment and seamless integration with your existing systems.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Supporting businesses across multiple countries and regions.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer Success',
    description: 'Dedicated support team ensuring your long-term success.',
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">About Neural Nexus</h2>
          <p className="mt-4 text-xl text-gray-300">
            Pioneering the future of retail technology with innovative POS solutions.
          </p>
        </div>

        <div className="mt-12 text-gray-300 max-w-3xl mx-auto">
          <p className="mb-6">
            At Neural Nexus, we're passionate about transforming retail operations through cutting-edge POS technology. 
            Our solutions are designed to meet the evolving needs of modern businesses, combining powerful functionality 
            with intuitive user experiences.
          </p>
          <p className="mb-6">
            We understand that every business is unique, which is why we offer customizable solutions that can be 
            tailored to your specific requirements. Our commitment to innovation and excellence drives us to 
            continuously improve and evolve our offerings.
          </p>
          <p>
            With a focus on security, reliability, and user experience, we help businesses of all sizes streamline 
            their operations and provide exceptional service to their customers. Our comprehensive suite of tools 
            and dedicated support team ensure you have everything needed for success.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center p-6 bg-gray-900 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-white">{feature.title}</h3>
              <p className="mt-2 text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gray-900 rounded-lg border border-gray-700 p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400">500+</div>
              <p className="mt-2 text-gray-300">Active Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400">15+</div>
              <p className="mt-2 text-gray-300">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400">24/7</div>
              <p className="mt-2 text-gray-300">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}