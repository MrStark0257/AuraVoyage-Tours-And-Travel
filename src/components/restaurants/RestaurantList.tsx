import React, { useState, useMemo } from 'react';
import { Restaurant } from '../../types';
import { RESTAURANTS_DATA } from '../../data/restaurantsData';
import { RestaurantCard } from './RestaurantCard';
import { TableReserveModal } from './TableReserveModal';
import { useTravel } from '../../context/TravelContext';
import { SlidersHorizontal } from 'lucide-react';

export const RestaurantList: React.FC = () => {
  const { searchQuery, selectedDestinationFilter, addToCart, setIsCartOpen } = useTravel();

  const [selectedAmbience, setSelectedAmbience] = useState('All');
  const [sortBy, setSortBy] = useState<'featured' | 'rating' | 'priceAsc' | 'priceDesc'>('featured');
  const [activeRestaurantModal, setActiveRestaurantModal] = useState<Restaurant | null>(null);

  const ambiences = [
    'All',
    'Rooftop Lounge',
    'Oceanfront Sunset',
    'Michelin Fine Dining',
    'Historic Bistro',
    'Garden Terrace',
  ];

  const filteredRestaurants = useMemo(() => {
    return RESTAURANTS_DATA.filter((rest) => {
      if (selectedAmbience !== 'All' && rest.ambience !== selectedAmbience) {
        return false;
      }
      if (
        selectedDestinationFilter &&
        selectedDestinationFilter !== 'All' &&
        selectedDestinationFilter !== 'All Destinations' &&
        !rest.destination.toLowerCase().includes(selectedDestinationFilter.toLowerCase()) &&
        !rest.country.toLowerCase().includes(selectedDestinationFilter.toLowerCase())
      ) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = rest.name.toLowerCase().includes(q);
        const matchesDest = rest.destination.toLowerCase().includes(q);
        const matchesCuisine = rest.cuisine.some((c) => c.toLowerCase().includes(q));
        if (!matchesName && !matchesDest && !matchesCuisine) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'priceAsc') return a.avgCostPerPersonUSD - b.avgCostPerPersonUSD;
      if (sortBy === 'priceDesc') return b.avgCostPerPersonUSD - a.avgCostPerPersonUSD;
      return 0;
    });
  }, [selectedAmbience, selectedDestinationFilter, searchQuery, sortBy]);

  const handleConfirmReservation = (
    restaurant: Restaurant,
    date: string,
    timeSlot: string,
    guests: number,
    seatingPreference: string,
    notes: string,
    estimatedCostUSD: number
  ) => {
    addToCart({
      cartItemId: `rest-${restaurant.id}-${Date.now()}`,
      itemType: 'restaurant',
      referenceId: restaurant.id,
      title: `${restaurant.name} (Table for ${guests})`,
      destination: restaurant.destination,
      image: restaurant.featuredImage,
      unitPriceUSD: estimatedCostUSD,
      quantity: 1,
      selectedDate: date,
      timeSlot: timeSlot,
      guestsCount: guests,
      specialRequests: `${seatingPreference}${notes ? ` • Note: ${notes}` : ''}`,
    });
    setActiveRestaurantModal(null);
    setIsCartOpen(true);
  };

  return (
    <section id="restaurants" className="container mx-auto px-4 lg:px-8 py-8 sm:py-10 border-t border-slate-200">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 gap-3">
        <div>
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
            Gastronomy
          </span>
          <h2 className="text-xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Curated Restaurants & Dining
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5 max-w-xl">
            Reserved clifftop terraces, Michelin tasting menus, and authentic local bistros.
          </p>
        </div>

        {/* Sort Controls */}
        <div className="flex items-center gap-2 bg-white px-2.5 sm:px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-700 self-start sm:self-auto">
          <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-500">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-transparent text-slate-900 font-medium outline-none cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="rating">Top Rated</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Ambience Filter Chips */}
      <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 mb-6 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
        <span className="text-xs text-slate-500 mr-1 font-medium">Ambience:</span>
        {ambiences.map((ambience) => (
          <button
            key={ambience}
            onClick={() => setSelectedAmbience(ambience)}
            className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
              selectedAmbience === ambience
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            {ambience}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filteredRestaurants.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              onOpenReserve={(selected) => setActiveRestaurantModal(selected)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 bg-white rounded-xl border border-slate-200 p-5 max-w-md mx-auto">
          <h3 className="text-sm font-semibold text-slate-800 mb-1">No restaurants found</h3>
          <p className="text-xs text-slate-500 mb-3">
            Try adjusting your search criteria or ambience filter.
          </p>
          <button
            onClick={() => setSelectedAmbience('All')}
            className="px-3.5 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-lg hover:bg-slate-800 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Table Reservation Modal */}
      <TableReserveModal
        restaurant={activeRestaurantModal}
        onClose={() => setActiveRestaurantModal(null)}
        onConfirmReservation={handleConfirmReservation}
      />
    </section>
  );
};
