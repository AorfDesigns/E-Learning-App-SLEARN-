import React from 'react';

const SubscriptionPlanCard = ({ planName, price, features }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        {planName}
      </h2>
      <p className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        ${price}
      </p>
      <ul className="text-gray-700 dark:text-gray-300 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="mb-2 flex items-center">
            <svg
              className="w-6 h-6 text-green-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full bg-orange-400 text-gray-800 font-bold py-4 px-4 rounded-full hover:bg-transparent border-[2px] border-orange-400">
        Choose Plan
      </button>
    </div>
  );
};

const SubscriptionPlans = () => {
  const plans = [
    {
      planName: "Basic",
      price: 19,
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      planName: "Standard",
      price: 49,
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    },
    {
      planName: "Premium",
      price: 99,
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center flex-col justify-center p-6">
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-8 text-left">Subscription Plans</h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <SubscriptionPlanCard
            key={index}
            planName={plan.planName}
            price={plan.price}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlans;
