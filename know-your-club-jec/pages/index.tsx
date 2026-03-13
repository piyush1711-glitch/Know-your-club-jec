import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Know Your Club – JEC</h1>
      <p className="text-lg mb-8">Discover clubs, select your interests, and get personalized recommendations!</p>
      <div className="flex space-x-4">
        <Link href="/clubs">
          <a className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">View Clubs</a>
        </Link>
        <Link href="/interests">
          <a className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Select Interests</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;