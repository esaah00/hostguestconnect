import Navbar from './Navbar';
import { properties } from '../data/properties';
import { Link, useParams } from 'react-router-dom';

const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return <div className="text-center py-10">Property not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar  />
      <div className="max-w-7xl mx-auto py-6 px-4">
        <Link to="/" className="text-blue-600 hover:underline">&larr; Back to listings</Link>
        <div className="bg-white rounded-lg shadow-md p-6 mt-4">
          <img src={property.image} alt={property.title} className="h-96 w-full object-cover rounded-lg mb-4" />
          <h1 className="text-3xl font-bold text-gray-900">{property.title}</h1>
          <p className="text-gray-600">{property.location}</p>
          <p className="text-gray-800 font-bold">${property.price} / night</p>
          <p className="text-gray-600">Rating: {property.rating} ({property.reviews} reviews)</p>
          <p className="text-gray-600 mt-4">{property.description}</p>
          <Link
            to={`/property/${property.id}`}
            className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;