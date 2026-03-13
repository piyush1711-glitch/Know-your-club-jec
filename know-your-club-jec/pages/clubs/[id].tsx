import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getClubById } from '../../lib/firebase';
import ClubCard from '../../components/ClubCard';

const ClubDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [club, setClub] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchClub = async () => {
        const clubData = await getClubById(id);
        setClub(clubData);
        setLoading(false);
      };
      fetchClub();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!club) {
    return <div>Club not found</div>;
  }

  return (
    <div className="p-4">
      <ClubCard 
        name={club.name} 
        description={club.description} 
        image={club.image} 
      />
    </div>
  );
};

export default ClubDetail;