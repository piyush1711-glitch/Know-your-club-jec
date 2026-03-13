import { useEffect, useState } from 'react';
import ClubCard from '../components/ClubCard';
import { fetchClubs } from '../lib/firebase';

const ClubsPage = () => {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getClubs = async () => {
      const clubsData = await fetchClubs();
      setClubs(clubsData);
      setLoading(false);
    };

    getClubs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Clubs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {clubs.map((club) => (
          <ClubCard key={club.id} club={club} />
        ))}
      </div>
    </div>
  );
};

export default ClubsPage;