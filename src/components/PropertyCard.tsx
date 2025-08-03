import { Link } from 'react-router-dom';
import type { Property } from '../data/properties';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src={property.image} alt={property.title} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{property.title}</h2>
        <p className="text-gray-600">{property.location}</p>
        <p className="text-gray-800 font-bold">${property.price} / night</p>
        <p className="text-gray-600">Rating: {property.rating} ({property.reviews} reviews)</p>
        <Link
          to={`/property/${property.id}`}
          className="mt-2 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;