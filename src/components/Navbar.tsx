import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <nav className="bg-white shadow fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-gray-900">HostguestConnect</Link>
        <div className="flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-gray-900">Explore Listings</Link>
          <Link to="/signup" className="text-gray-600 hover:text-gray-900">Sign Up</Link>
          <Link to="/login" className="text-gray-600 hover:text-gray-900">Log In</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;