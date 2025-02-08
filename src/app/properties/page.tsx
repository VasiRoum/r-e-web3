'use client';

import { PropertyListings } from '@/components/properties/property-listings';
import { PropertyFilter, FilterOptions } from '@/components/properties/property-filter';
import { useState, useCallback } from 'react';

export default function PropertiesPage() {
  const [activeFilters, setActiveFilters] = useState<FilterOptions>({
    search: '',
    priceRange: 'any',
    propertyType: 'all',
    sortBy: 'default',
  });

  const handleFilterChange = useCallback((filters: FilterOptions) => {
    setActiveFilters(filters);
  }, []);

  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col gap-8">
        {/* Page Title */}
        <div className="space-y-4 max-w-[800px]">
          <h1 className="text-4xl font-bold tracking-tight scroll-fade-in">
            Discover Properties
          </h1>
          <p className="text-lg text-muted-foreground max-w-[700px] scroll-fade-in">
            Explore our curated selection of premium properties, each offering unique features and immersive virtual tours.
          </p>
        </div>

        {/* Filters Section */}
        <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl border border-border/50">
          <PropertyFilter onFilterChange={handleFilterChange} />
        </div>

        {/* Property Listings Grid */}
        <div className="relative">
          <div className="absolute inset-0 bg-background/50 backdrop-blur-sm -z-10 rounded-xl" />
          <PropertyListings activeFilters={activeFilters} />
        </div>
      </div>
    </div>
  );
} 