import { useState } from 'react';
import Navbar from './components/Navbar';
import PropertyCard from './components/PropertyCard';
import HostProfile from './components/HostProfile';
import { properties, hosts } from './data/properties';
import { Link } from 'react-router-dom';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProperties = properties.filter((property) =>
    property.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar  />
      <header
        className="bg-cover bg-center h-[500px] flex items-center justify-center text-white"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80)' }}
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Connect with hosts for a perfect stay</h1>
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search for accommodation"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-3 px-4 pr-12 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600">
              Search
            </button>
          </div>
          <p className="mt-4 text-lg">Book your dream stay with ease and confidence</p>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 px-4">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Trending Houses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.slice(0, 3).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Listings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Connect with Hosts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hosts.map((host) => (
              <HostProfile key={host.id} host={host} />
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2025 HostguestConnect. All rights reserved.</p>
          <div className="mt-2">
            <Link to="/login" className="text-gray-300 hover:text-white mx-2">Log In</Link>
            <Link to="/signup" className="text-gray-300 hover:text-white mx-2">Sign Up</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;