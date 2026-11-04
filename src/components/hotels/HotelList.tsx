import React, { useState, useMemo } from 'react';
import { Hotel } from '../../types';
import { HOTELS_DATA } from '../../data/hotelsData';
import { HotelCard } from './HotelCard';
import { HotelBookingModal } from './HotelBookingModal';
import { useTravel } from '../../context/TravelContext';
import { SlidersHorizontal } from 'lucide-react';

export const HotelList: React.FC = () => {
  const { searchQuery, selectedDestinationFilter, addToCart, setIsCartOpen } = useTravel();

  const [selectedType, setSelectedType] = useState('All');
  const [sortBy, setSortBy] = useState<'featured' | 'priceAsc' | 'priceDesc' | 'rating'>('featured');
  const [activeHotelModal, setActiveHotelModal] = useState<Hotel | null>(null);

  const propertyTypes = [
    'All',
    'Luxury Resort',
    'Boutique Hotel',
    'Mountain Chalet',
    'Heritage Palace',
  ];

  const filteredHotels = useMemo(() => {
    return HOTELS_DATA.filter((hotel) => {
      if (selectedType !== 'All' && hotel.propertyType !== selectedType) {
        return false;
      }
      if (
        selectedDestinationFilter &&
        selectedDestinationFilter !== 'All' &&
        selectedDestinationFilter !== 'All Destinations' &&
        !hotel.destination.toLowerCase().includes(selectedDestinationFilter.toLowerCase()) &&
        !hotel.country.toLowerCase().includes(selectedDestinationFilter.toLowerCase())
      ) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = hotel.name.toLowerCase().includes(q);
        const matchesDest = hotel.destination.toLowerCase().includes(q);
        const matchesCountry = hotel.country.toLowerCase().includes(q);
        const matchesType = hotel.propertyType.toLowerCase().includes(q);
        if (!matchesName && !matchesDest && !matchesCountry && !matchesType) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'priceAsc') return a.pricePerNightUSD - b.pricePerNightUSD;
      if (sortBy === 'priceDesc') return b.pricePerNightUSD - a.pricePerNightUSD;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [selectedType, selectedDestinationFilter, searchQuery, sortBy]);

  const handleConfirmBooking = (
    hotel: Hotel,
    roomType: string,
    checkIn: string,
    checkOut: string,
    nights: number,
    guests: number,
    unitPriceUSD: number
  ) => {
    addToCart({
      cartItemId: `hotel-${hotel.id}-${Date.now()}`,
      itemType: 'hotel',
      referenceId: hotel.id,
      title: `${hotel.name} (${roomType})`,
      destination: hotel.destination,
      image: hotel.featuredImage,
      unitPriceUSD: unitPriceUSD,
      quantity: nights,
      selectedDate: checkIn,
      endDate: checkOut,
      guestsCount: guests,
      roomType: roomType,
    });
    setActiveHotelModal(null);
    setIsCartOpen(true);
  };

  return (
    <section id="hotels" className="container mx-auto px-4 lg:px-8 py-10 border-t border-slate-200">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
            Stays & Resorts
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Hotels, Resorts & Villas
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5 max-w-xl">
            Inspected 5-star properties, cliffside suites, and private villas with instant confirmation.
          </p>
        </div>

        {/* Sort Controls */}
        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-700">
          <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-500">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-transparent text-slate-900 font-medium outline-none cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      {/* Property Type Filter Chips */}
      <div className="flex flex-wrap items-center gap-1.5 mb-6 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
        <span className="text-xs text-slate-500 mr-1.5 font-medium">Type:</span>
        {propertyTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
              selectedType === type
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Hotels Grid */}
      {filteredHotels.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredHotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              hotel={hotel}
              onOpenBooking={(selected) => setActiveHotelModal(selected)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl border border-slate-200 p-6 max-w-md mx-auto">
          <h3 className="text-sm font-semibold text-slate-800 mb-1">No hotels match your filters</h3>
          <p className="text-xs text-slate-500 mb-3">
            Try adjusting your search criteria or resetting filters.
          </p>
          <button
            onClick={() => setSelectedType('All')}
            className="px-3.5 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-lg hover:bg-slate-800 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Hotel Booking Modal */}
      <HotelBookingModal
        hotel={activeHotelModal}
        onClose={() => setActiveHotelModal(null)}
        onConfirmBooking={handleConfirmBooking}
      />
    </section>
  );
};
