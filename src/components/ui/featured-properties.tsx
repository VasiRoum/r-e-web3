'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from './button';
import { Eye, MapPin, ArrowRight, Home, Wallet, Maximize } from 'lucide-react';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';
import { PropertyBackground } from '@/components/properties/property-background';
import React from 'react';

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
  const [imageError, setImageError] = React.useState(false);

  return (
    <div className="group relative overflow-hidden rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:scale-[1.02] scroll-scale-in">
      {/* Image Container */}
      <div className="aspect-[4/3] relative overflow-hidden">
        <div className="absolute inset-0 image-skeleton" />
        <Image
          src={property.imageUrl}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          onError={() => setImageError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Price Tags */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <div className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 hover-lift">
            <Wallet className="h-4 w-4 text-primary" />
            <span className="font-bold">{property.price.eth} ETH</span>
          </div>
          <div className="bg-background/60 backdrop-blur-sm px-4 py-1 rounded-full text-sm hover-lift">
            <span className="text-muted-foreground">${property.price.usd.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {property.title}
        </h3>
        
        <div className="flex items-center gap-2 text-muted-foreground mb-4 hover-lift">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{property.location}</span>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-4 py-4 border-y border-border">
          <div className="flex items-center gap-2 hover-lift">
            <Home className="h-4 w-4 text-primary" />
            <span className="text-sm">{property.specs.bedrooms} beds</span>
          </div>
          <div className="flex items-center gap-2 hover-lift">
            <Home className="h-4 w-4 text-primary" />
            <span className="text-sm">{property.specs.bathrooms} baths</span>
          </div>
          <div className="flex items-center gap-2 hover-lift">
            <Maximize className="h-4 w-4 text-primary" />
            <span className="text-sm">{property.specs.area} sqft</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex flex-col gap-2">
          <Button variant="outline" className="w-full button-hover-effect">
            <span className="flex items-center justify-center gap-2">
              <Eye className="h-4 w-4" />
              View Details
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
          <Button className="w-full bg-primary hover:bg-primary/90 button-hover-effect">
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
  useScrollAnimation();

  return (
    <section className="relative">
      {/* Three.js Background */}
      <div className="fixed inset-0 -z-10">
        <PropertyBackground />
      </div>

      <div className="relative z-10 py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12 scroll-fade-in">
            <div className="max-w-2xl">
              <div className="w-20 h-1 bg-primary mb-8 scroll-slide-left" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Featured Properties</h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                Explore our handpicked selection of premium properties, each offering unique features and immersive virtual tours. All transactions are secured through Ethereum smart contracts.
              </p>
            </div>
            <Button variant="outline" asChild className="group w-full md:w-auto button-hover-effect scroll-slide-right bg-background/80 hover:bg-background/90 backdrop-blur-sm">
              <Link href="/properties" className="flex items-center justify-center gap-2">
                View All Properties
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 stagger-children">
            {FEATURED_PROPERTIES.map((property) => (
              <Link 
                key={property.id} 
                href={`/property/${property.id}`} 
                className="block"
              >
                <div className="bg-background/80 backdrop-blur-sm rounded-xl transition-all duration-500 hover:bg-background/90">
                  <PropertyCard property={property} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient fade to background */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
} 