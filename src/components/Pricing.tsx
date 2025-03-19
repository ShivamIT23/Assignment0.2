import React from 'react';

function Pricing() {
  const plans = [
    {
      id: 1,
      name: 'Basic',
      price: '$29',
      period: 'per month',
      features: [
        '1 Project',
        '5 GB Storage',
        'Basic Support',
        'Email Integration'
      ],
      isPopular: false
    },
    {
      id: 2,
      name: 'Pro',
      price: '$59',
      period: 'per month',
      features: [
        '5 Projects',
        '20 GB Storage',
        'Priority Support',
        'Email Integration',
        'Advanced Analytics'
      ],
      isPopular: true
    },
    {
      id: 3,
      name: 'Enterprise',
      price: '$99',
      period: 'per month',
      features: [
        'Unlimited Projects',
        '100 GB Storage',
        '24/7 Support',
        'Email Integration',
        'Advanced Analytics',
        'Custom Features'
      ],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Pricing Plans</h2>
      <div className="max-w-7xl mx-auto px-5 flex flex-wrap justify-center gap-8">
        {plans.map(plan => (
          <div 
            key={plan.id} 
            className={`bg-white rounded-xl p-10 shadow-md flex-1 min-w-[280px] max-w-sm relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${plan.isPopular ? 'border-2 border-blue-500 scale-105' : ''}`}
          >
            {plan.isPopular && (
              <div className="absolute -top-4 right-5 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
            )}
            <h3 className="text-2xl font-bold text-center mb-5">{plan.name}</h3>
            <div className="text-center mb-8">
              <span className="text-5xl font-bold text-gray-800">{plan.price}</span>
              <span className="text-gray-500 ml-2">{plan.period}</span>
            </div>
            <ul className="mb-8 space-y-3">
              {plan.features.map((feature, index) => (
                <li key={index} className="pl-8 py-2 border-b border-gray-100 relative">
                  <span className="absolute left-0 text-blue-500">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md py-3 font-semibold transition-colors duration-300">
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
