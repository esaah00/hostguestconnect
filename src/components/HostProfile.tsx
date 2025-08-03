import type { Host } from '../data/properties';

interface HostProfileProps {
  host: Host;
}

const HostProfile: React.FC<HostProfileProps> = ({ host }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
      <img src={host.image} alt={host.name} className="h-32 w-32 mx-auto mt-4 rounded-full object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{host.name}</h3>
        <p className="text-gray-600">{host.location}</p>
      </div>
    </div>
  );
};

export default HostProfile;