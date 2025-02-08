'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Eye, MapPin, ArrowRight, Home, Wallet, Maximize } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import React from 'react';
import { FilterOptions } from './property-filter';

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
  type: string;
  status: 'For Sale' | 'Pending' | 'Sold';
  featured: boolean;
}

const DUMMY_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Modern Beachfront Villa',
    location: 'Miami Beach, FL',
    price: {
      eth: 1250,
      usd: 2500000
    },
    imageUrl: '/images/properties/property-1.jpg',
    specs: {
      bedrooms: 5,
      bathrooms: 4,
      area: 4200,
    },
    type: 'Villa',
    status: 'For Sale',
    featured: true,
  },
  {
    id: '2',
    title: 'Luxury Downtown Penthouse',
    location: 'New York, NY',
    price: {
      eth: 2400,
      usd: 4800000
    },
    imageUrl: '/images/properties/property-2.jpg',
    specs: {
      bedrooms: 4,
      bathrooms: 3,
      area: 3800,
    },
    type: 'Penthouse',
    status: 'For Sale',
    featured: true,
  },
  {
    id: '3',
    title: 'Mountain View Estate',
    location: 'Aspen, CO',
    price: {
      eth: 1600,
      usd: 3200000
    },
    imageUrl: '/images/properties/property-3.jpg',
    specs: {
      bedrooms: 6,
      bathrooms: 5,
      area: 5500,
    },
    type: 'Estate',
    status: 'For Sale',
    featured: true,
  },
  {
    id: '4',
    title: 'Contemporary City Apartment',
    location: 'Los Angeles, CA',
    price: {
      eth: 800,
      usd: 1600000
    },
    imageUrl: '/images/properties/property-4.jpg',
    specs: {
      bedrooms: 3,
      bathrooms: 2,
      area: 2200,
    },
    type: 'Apartment',
    status: 'Pending',
    featured: false,
  },
  {
    id: '5',
    title: 'Seaside Modern Villa',
    location: 'Malibu, CA',
    price: {
      eth: 3200,
      usd: 6400000
    },
    imageUrl: '/images/properties/property-5.jpg',
    specs: {
      bedrooms: 7,
      bathrooms: 6,
      area: 6800,
    },
    type: 'Villa',
    status: 'For Sale',
    featured: false,
  },
  {
    id: '6',
    title: 'Urban Loft Space',
    location: 'Chicago, IL',
    price: {
      eth: 600,
      usd: 1200000
    },
    imageUrl: '/images/properties/property-6.jpg',
    specs: {
      bedrooms: 2,
      bathrooms: 2,
      area: 1800,
    },
    type: 'Loft',
    status: 'For Sale',
    featured: false,
  },
];

function PropertyCard({ property }: { property: Property }) {
  const [imageError, setImageError] = React.useState(false);

  return (
    <div className="group relative overflow-hidden rounded-xl border bg-card transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:border-primary/50 scroll-scale-in">
      {/* Image Container */}
      <div className="aspect-[4/3] relative overflow-hidden bg-muted">
        <div className="absolute inset-0 image-skeleton animate-pulse" />
        <Image
          src={imageError ? '/placeholder-property.jpg' : property.imageUrl}
          alt={property.title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          loading="lazy"
          onError={() => setImageError(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-80" />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4 transform transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1">
          <div className={cn(
            "px-3 py-1 rounded-full text-sm font-medium transition-all duration-500",
            property.status === 'For Sale' && "bg-green-500/20 text-green-500 backdrop-blur-sm group-hover:bg-green-500/30",
            property.status === 'Pending' && "bg-yellow-500/20 text-yellow-500 backdrop-blur-sm group-hover:bg-yellow-500/30",
            property.status === 'Sold' && "bg-red-500/20 text-red-500 backdrop-blur-sm group-hover:bg-red-500/30"
          )}>
            {property.status}
          </div>
        </div>
        
        {/* Price Tags */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 transform transition-all duration-500 group-hover:translate-y-1">
          <div className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-500 hover:bg-background/90 hover:scale-105">
            <Wallet className="h-4 w-4 text-primary transition-transform duration-500 group-hover:scale-110" />
            <span className="font-bold">{property.price.eth} ETH</span>
          </div>
          <div className="bg-background/60 backdrop-blur-sm px-4 py-1 rounded-full text-sm transition-all duration-500 hover:bg-background/70 hover:scale-105">
            <span className="text-muted-foreground">${property.price.usd.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 transform transition-all duration-500">
        <h3 className="text-xl font-bold mb-2 transition-colors duration-500 group-hover:text-primary">
          {property.title}
        </h3>
        
        <div className="flex items-center gap-2 text-muted-foreground mb-4 transition-transform duration-500 hover:translate-x-1">
          <MapPin className="h-4 w-4 transition-transform duration-500 group-hover:scale-110" />
          <span className="text-sm">{property.location}</span>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-4 py-4 border-y border-border transition-all duration-500 group-hover:border-primary/20">
          <div className="flex items-center gap-2 transition-transform duration-500 hover:translate-y-[-2px]">
            <Home className="h-4 w-4 text-primary transition-transform duration-500 group-hover:scale-110" />
            <span className="text-sm">{property.specs.bedrooms} beds</span>
          </div>
          <div className="flex items-center gap-2 transition-transform duration-500 hover:translate-y-[-2px]">
            <Home className="h-4 w-4 text-primary transition-transform duration-500 group-hover:scale-110" />
            <span className="text-sm">{property.specs.bathrooms} baths</span>
          </div>
          <div className="flex items-center gap-2 transition-transform duration-500 hover:translate-y-[-2px]">
            <Maximize className="h-4 w-4 text-primary transition-transform duration-500 group-hover:scale-110" />
            <span className="text-sm">{property.specs.area} sqft</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex flex-col gap-2 transform transition-all duration-500">
          <Button 
            variant="outline" 
            className="w-full transition-all duration-500 hover:scale-[1.02] hover:bg-primary/5 hover:border-primary/50"
          >
            <span className="flex items-center justify-center gap-2">
              <Eye className="h-4 w-4 transition-transform duration-500 group-hover:scale-110" />
              View Details
              <ArrowRight className="h-4 w-4 transition-all duration-500 group-hover:translate-x-1" />
            </span>
          </Button>
          <Button 
            className="w-full bg-primary hover:bg-primary/90 transition-all duration-500 hover:scale-[1.02]"
          >
            <span className="flex items-center justify-center gap-2">
              <Wallet className="h-4 w-4 transition-transform duration-500 group-hover:scale-110" />
              Purchase with ETH
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}

interface PropertyListingsProps {
  activeFilters: FilterOptions;
}

export function PropertyListings({ activeFilters }: PropertyListingsProps) {
  useScrollAnimation();
  const [filteredProperties, setFilteredProperties] = React.useState(DUMMY_PROPERTIES);

  // Update filtered properties when filters change
  React.useEffect(() => {
    let filtered = [...DUMMY_PROPERTIES];

    // Apply search filter
    if (activeFilters.search) {
      const searchTerm = activeFilters.search.toLowerCase();
      filtered = filtered.filter(
        property =>
          property.title.toLowerCase().includes(searchTerm) ||
          property.location.toLowerCase().includes(searchTerm) ||
          property.type.toLowerCase().includes(searchTerm)
      );
    }

    // Apply price range filter
    if (activeFilters.priceRange !== 'any') {
      filtered = filtered.filter(property => {
        const price = property.price.eth;
        switch (activeFilters.priceRange) {
          case '0-500':
            return price < 500;
          case '500-1000':
            return price >= 500 && price < 1000;
          case '1000-2000':
            return price >= 1000 && price < 2000;
          case '2000+':
            return price >= 2000;
          default:
            return true;
        }
      });
    }

    // Apply property type filter
    if (activeFilters.propertyType !== 'all') {
      filtered = filtered.filter(
        property => property.type.toLowerCase() === activeFilters.propertyType
      );
    }

    // Apply sorting
    switch (activeFilters.sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price.eth - b.price.eth);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price.eth - a.price.eth);
        break;
      case 'newest':
        filtered.reverse();
        break;
      case 'popular':
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    setFilteredProperties(filtered);
  }, [activeFilters]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 p-6">
      {filteredProperties.length === 0 ? (
        <div className="col-span-full text-center py-12">
          <p className="text-lg text-muted-foreground">No properties found matching your criteria.</p>
        </div>
      ) : (
        filteredProperties.map((property, index) => (
          <Link 
            key={property.id} 
            href={`/property/${property.id}`} 
            className="block opacity-0 animate-fadeIn"
            style={{
              animationDelay: `${index * 150}ms`,
              animationFillMode: 'forwards'
            }}
          >
            <PropertyCard property={property} />
          </Link>
        ))
      )}
    </div>
  );
} 