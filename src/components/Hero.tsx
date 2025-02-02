export function Hero() {
  return (
    <section id="top" className="relative bg-gray-900 text-white pt-24 pb-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-90" />
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80"
          alt="Modern POS system in use"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Next-Generation POS Solutions
          </h1>
          <p className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Transform your retail business with our cutting-edge point-of-sale systems. Seamlessly integrate hardware and software for a superior customer experience.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105"
            >
              Explore Solutions
            </a>
            <a
              href="#contact"
              className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105 border border-gray-700"
            >
              Contact Sales
            </a>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-blue-400">24/7 Support</h3>
              <p className="mt-2 text-gray-300">Round-the-clock technical assistance for your business needs</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-blue-400">Cloud Integration</h3>
              <p className="mt-2 text-gray-300">Seamless sync across all your devices and locations</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-blue-400">Secure Payments</h3>
              <p className="mt-2 text-gray-300">Enterprise-grade security for all transactions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}