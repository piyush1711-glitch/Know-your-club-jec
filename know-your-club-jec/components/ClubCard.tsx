import React from 'react';
import { useRouter } from 'next/router';

interface ClubCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
}

const ClubCard: React.FC<ClubCardProps> = ({ id, name, description, image }: ClubCardProps) => {
  const router = useRouter();

  const handleClick = (): void => {
    router.push(`/clubs/${id}`);
  };

  return (
    <div 
      className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e: React.KeyboardEvent) => e.key === 'Enter' && handleClick()}
    >
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default ClubCard;