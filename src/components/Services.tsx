
function Services() {
  const services = [
    {
      id: 1,
      icon: '💻',
      title: 'Web Development',
      description: 'Custom websites tailored to your specific business needs.'
    },
    {
      id: 2,
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications.'
    },
    {
      id: 3,
      icon: '🚀',
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and visibility.'
    },
    {
      id: 4,
      icon: '🔍',
      title: 'UX Research',
      description: 'User-centered design based on solid research.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Services</h2>
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map(service => (
          <div key={service.id} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
            <div className="text-5xl mb-6">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;