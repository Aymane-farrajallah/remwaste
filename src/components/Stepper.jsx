import React from 'react';

const ProgressSteps = ({ currentStep = 3 }) => {
  const steps = [
    { id: 1, title: 'Postcode', completed: true },
    { id: 2, title: 'Waste Type', completed: true },
    { id: 3, title: 'Select Skip', completed: false, current: true },
    { id: 4, title: 'Permit Check', completed: false },
    { id: 5, title: 'Choose Date', completed: false },
    { id: 6, title: 'Payment', completed: false }
  ];

  const current = steps.find((step) => step.current);

  const getStepStyle = (step) => {
    return step.completed || step.current
      ? 'bg-blue-500 text-white border-blue-500'
      : 'bg-gray-300 text-gray-600 border-gray-300';
  };

  const getTextStyle = (step) => {
    return step.completed || step.current ? 'text-blue-600 font-medium' : 'text-gray-400';
  };

  const getConnectorColor = (stepIndex) => {
    return stepIndex < currentStep - 1 ? 'bg-blue-500' : 'bg-gray-300';
  };

  return (
    <div className="p-4 bg-gray-50">
      {/* Mobile View */}
      <div className="flex md:hidden items-center justify-center w-full px-4">
        {/* Left connector */}
        <div className={`flex-grow h-0.5 ${getConnectorColor(currentStep - 2)}`}></div>

        {/* Current step */}
        <div className="flex flex-col items-center mx-2">
          <div
            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-semibold ${getStepStyle(current)}`}
          >
            {current.id}
          </div>
          <span className={`text-xs mt-2 text-center ${getTextStyle(current)}`}>
            {current.title}
          </span>
        </div>

        {/* Right connector */}
        <div className={`flex-grow h-0.5 ${getConnectorColor(currentStep - 1)}`}></div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-center">
        <div className="flex items-center space-x-4">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center min-w-[60px]">
                <div
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-semibold ${getStepStyle(step)}`}
                >
                  {step.completed ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    step.id
                  )}
                </div>
                <span className={`text-xs mt-2 text-center truncate w-20 ${getTextStyle(step)}`}>
                  {step.title}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className={`h-0.5 w-8 md:w-12 ${step.completed ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressSteps;
