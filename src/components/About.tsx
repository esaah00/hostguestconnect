import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-16">
      <Navbar  />
      <div className="max-w-7xl mx-auto py-6 px-4">
        <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
        <p className="mt-4 text-gray-600">
          Welcome to HostguestConnect! Discover unique stays and connect with hosts for unforgettable experiences.
        </p>
        <Link to="/" className="mt-4 inline-block text-blue-600 hover:underline">
          &larr; Back to listings
        </Link>
      </div>
    </div>
  );
};

export default About;