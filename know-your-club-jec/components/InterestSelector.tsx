import React, { useState } from 'react';

const interestsList = [
  'Sports',
  'Music',
  'Art',
  'Technology',
  'Travel',
  'Food',
  'Fitness',
  'Education',
];

const InterestSelector = ({ onSelect }) => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const handleInterestToggle = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((item) => item !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = () => {
    onSelect(selectedInterests);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Select Your Interests</h2>
      <div className="grid grid-cols-2 gap-4">
        {interestsList.map((interest) => (
          <button
            key={interest}
            className={`p-2 border rounded-lg ${
              selectedInterests.includes(interest)
                ? 'bg-blue-500 text-white'
                : 'bg-white text-black'
            }`}
            onClick={() => handleInterestToggle(interest)}
          >
            {interest}
          </button>
        ))}
      </div>
      <button
        className="mt-4 p-2 bg-green-500 text-white rounded"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default InterestSelector;