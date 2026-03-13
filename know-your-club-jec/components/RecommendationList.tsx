import React from 'react';
import ClubCard from './ClubCard';

interface RecommendationListProps {
  recommendations: {
    id: string;
    name: string;
    description: string;
    image: string;
  }[];
}

const RecommendationList: React.FC<RecommendationListProps> = ({ recommendations }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {recommendations.map((club) => (
        <ClubCard key={club.id} {...club} />
      ))}
    </div>
  );
};

export default RecommendationList;