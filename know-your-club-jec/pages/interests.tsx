import { useState } from 'react';
import InterestSelector from '../components/InterestSelector';
import RecommendationList from '../components/RecommendationList';
import { fetchRecommendations } from '../lib/firebase';

const InterestsPage = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  const handleInterestChange = (interests) => {
    setSelectedInterests(interests);
    fetchRecommendations(interests).then(setRecommendations);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Select Your Interests</h1>
      <InterestSelector onChange={handleInterestChange} />
      {recommendations.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Recommended Clubs</h2>
          <RecommendationList recommendations={recommendations} />
        </div>
      )}
    </div>
  );
};

export default InterestsPage;