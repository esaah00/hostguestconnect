export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  description: string;
  image: string;
}

export interface Host {
  id: string;
  name: string;
  location: string;
  image: string;
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Cozy Beachfront Cottage',
    location: 'Malibu, CA',
    price: 150,
    rating: 4.8,
    reviews: 120,
    description: 'A charming cottage by the beach, perfect for a relaxing getaway.',
    image: 'https://images.unsplash.com/photo-1499796556594-36a3a13e9e2c?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '2',
    title: 'Modern Downtown Loft',
    location: 'New York, NY',
    price: 200,
    rating: 4.9,
    reviews: 85,
    description: 'Stylish loft in the heart of the city with stunning skyline views.',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '3',
    title: 'Rustic Mountain Cabin',
    location: 'Aspen, CO',
    price: 180,
    rating: 4.7,
    reviews: 95,
    description: 'A cozy cabin surrounded by nature, ideal for outdoor enthusiasts.',
    image: 'https://images.unsplash.com/photo-1518732714860-b0d3d1f58f53?auto=format&fit=crop&w=800&q=60',
  },
];

export const hosts: Host[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    location: 'Malibu, CA',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=60',
  },
  {
    id: '2',
    name: 'Michael Chen',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=60',
  },
  {
    id: '3',
    name: 'Emma Davis',
    location: 'Aspen, CO',
    image: 'https://images.unsplash.com/photo-1517841903204-472c214e3d27?auto=format&fit=crop&w=300&q=60',
  },
];