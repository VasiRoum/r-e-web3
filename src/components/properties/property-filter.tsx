'use client';

import * as React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useCallback } from 'react';

export interface FilterOptions {
  search: string;
  priceRange: string;
  propertyType: string;
  sortBy: string;
}

interface PropertyFilterProps {
  onFilterChange: (filters: FilterOptions) => void;
}

const PRICE_RANGES = [
  { label: 'Any Price', value: 'any' },
  { label: 'Under 500 ETH', value: '0-500' },
  { label: '500 - 1000 ETH', value: '500-1000' },
  { label: '1000 - 2000 ETH', value: '1000-2000' },
  { label: 'Over 2000 ETH', value: '2000+' },
];

const PROPERTY_TYPES = [
  { label: 'All Types', value: 'all' },
  { label: 'Houses', value: 'house' },
  { label: 'Apartments', value: 'apartment' },
  { label: 'Villas', value: 'villa' },
  { label: 'Penthouses', value: 'penthouse' },
  { label: 'Lofts', value: 'loft' },
];

const SORT_OPTIONS = [
  { label: 'Default', value: 'default' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest First', value: 'newest' },
  { label: 'Most Popular', value: 'popular' },
];

export function PropertyFilter({ onFilterChange }: PropertyFilterProps) {
  const [filters, setFilters] = React.useState<FilterOptions>({
    search: '',
    priceRange: 'any',
    propertyType: 'all',
    sortBy: 'default',
  });

  const handleFilterChange = useCallback((key: keyof FilterOptions, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  }, [filters, onFilterChange]);

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between scroll-fade-in">
      {/* Search Bar */}
      <div className="relative w-full sm:w-[400px]">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-muted-foreground" />
        </div>
        <input
          type="search"
          placeholder="Search by location, property type..."
          className="w-full h-10 rounded-md border border-input bg-background/60 pl-10 pr-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 backdrop-blur-sm"
          value={filters.search}
          onChange={(e) => handleFilterChange('search', e.target.value)}
        />
      </div>

      {/* Filters */}
      <div className="flex gap-2 w-full sm:w-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2 w-full sm:w-auto">
              <SlidersHorizontal className="h-4 w-4" />
              Price Range
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {PRICE_RANGES.map((range) => (
              <DropdownMenuItem
                key={range.value}
                onClick={() => handleFilterChange('priceRange', range.value)}
                className={filters.priceRange === range.value ? 'bg-accent' : ''}
              >
                {range.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2 w-full sm:w-auto">
              <SlidersHorizontal className="h-4 w-4" />
              Property Type
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {PROPERTY_TYPES.map((type) => (
              <DropdownMenuItem
                key={type.value}
                onClick={() => handleFilterChange('propertyType', type.value)}
                className={filters.propertyType === type.value ? 'bg-accent' : ''}
              >
                {type.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2 w-full sm:w-auto">
              <SlidersHorizontal className="h-4 w-4" />
              Sort By
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {SORT_OPTIONS.map((option) => (
              <DropdownMenuItem
                key={option.value}
                onClick={() => handleFilterChange('sortBy', option.value)}
                className={filters.sortBy === option.value ? 'bg-accent' : ''}
              >
                {option.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
} 