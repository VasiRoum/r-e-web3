import Image from 'next/image';
import Link from 'next/link';
import { Button } from './button';
import { Eye, MapPin, ArrowRight, Home, Wallet, Maximize } from 'lucide-react';

interface Property {
  id: string;
  title: string;
  location: string;
  price: {
    eth: number;
    usd: number;
  };
  imageUrl: string;
  specs: {
    bedrooms: number;
    bathrooms: number;
    area: number;
  };
}

const FEATURED_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Modern Beachfront Villa',
    location: 'Miami Beach, FL',
    price: {
      eth: 1250,
      usd: 2500000
    },
    imageUrl: '/property-1.jpg',
    specs: {
      bedrooms: 5,
      bathrooms: 4,
      area: 4200,
    },
  },
  {
    id: '2',
    title: 'Luxury Penthouse',
    location: 'New York, NY',
    price: {
      eth: 2400,
      usd: 4800000
    },
    imageUrl: '/property-2.jpg',
    specs: {
      bedrooms: 4,
      bathrooms: 3,
      area: 3800,
    },
  },
  {
    id: '3',
    title: 'Mountain View Estate',
    location: 'Aspen, CO',
    price: {
      eth: 1600,
      usd: 3200000
    },
    imageUrl: '/property-3.jpg',
    specs: {
      bedrooms: 6,
      bathrooms: 5,
      area: 5500,
    },
  },
];

function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {/* Image Container */}
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={property.imageUrl}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Price Tag */}
        <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
          <Wallet className="h-4 w-4 text-primary" />
          <span className="font-bold">{property.price.eth} ETH</span>
        </div>
        <div className="absolute top-16 right-4 bg-background/60 backdrop-blur-sm px-4 py-1 rounded-full text-sm">
          <span className="text-muted-foreground">${property.price.usd.toLocaleString()}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {property.title}
        </h3>
        
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{property.location}</span>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-4 py-4 border-y border-border">
          <div className="flex items-center gap-2">
            <Home className="h-4 w-4 text-primary" />
            <span className="text-sm">{property.specs.bedrooms} beds</span>
          </div>
          <div className="flex items-center gap-2">
            <Home className="h-4 w-4 text-primary" />
            <span className="text-sm">{property.specs.bathrooms} baths</span>
          </div>
          <div className="flex items-center gap-2">
            <Maximize className="h-4 w-4 text-primary" />
            <span className="text-sm">{property.specs.area} sqft</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex flex-col gap-2">
          <Button variant="outline" className="w-full group/button">
            <span className="flex items-center justify-center gap-2">
              <Eye className="h-4 w-4" />
              View Details
              <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
            </span>
          </Button>
          <Button className="w-full bg-primary hover:bg-primary/90">
            <span className="flex items-center justify-center gap-2">
              <Wallet className="h-4 w-4" />
              Purchase with ETH
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export function FeaturedProperties() {
  return (
    <section className="py-24 bg-muted">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div className="max-w-2xl">
            <div className="w-20 h-1 bg-primary mb-8" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Properties</h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Explore our handpicked selection of premium properties, each offering unique features and immersive virtual tours. All transactions are secured through Ethereum smart contracts.
            </p>
          </div>
          <Button variant="outline" asChild className="group w-full md:w-auto">
            <Link href="/properties" className="flex items-center justify-center gap-2">
              View All Properties
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {FEATURED_PROPERTIES.map((property) => (
            <Link key={property.id} href={`/property/${property.id}`} className="block">
              <PropertyCard property={property} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 