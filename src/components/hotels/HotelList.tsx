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
  const [selectedStarRating, setSelectedStarRating] = useState<number | 'All'>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'priceAsc' | 'priceDesc' | 'rating'>('featured');
  const [activeHotelModal, setActiveHotelModal] = useState<Hotel | null>(null);

  const propertyTypes = [
    'All',
    'Luxury Resort',
    'Boutique Hotel',
    'Mountain Chalet',
    'Heritage Palace',
    'Budget Guest House',
    'Backpacker Hostel',
  ];

  const filteredHotels = useMemo(() => {
    return HOTELS_DATA.filter((hotel) => {
      if (selectedStarRating !== 'All' && hotel.starRating !== selectedStarRating) {
        return false;
      }
      if (selectedType !== 'All' && hotel.propertyType !== selectedType) {
        return false;
      }
      if (
        selectedDestinationFilter &&
        selectedDestinationFilter !== 'All' &&
        selectedDestinationFilter !== 'All Destinations'
      ) {
        const filterStr = selectedDestinationFilter.toLowerCase().trim();
        const tokens = filterStr.split(/[\s,]+/).filter((t) => t.length > 2);
        const matches =
          hotel.destination.toLowerCase().includes(filterStr) ||
          hotel.country.toLowerCase().includes(filterStr) ||
          tokens.some(
            (token) =>
              hotel.destination.toLowerCase().includes(token) ||
              hotel.country.toLowerCase().includes(token)
          );
        if (!matches) {
          return false;
        }
      }
      if (searchQuery.trim()) {
        const tokens = searchQuery.toLowerCase().trim().split(/[\s,]+/).filter((t) => t.length > 1);
        const searchableText = `${hotel.name} ${hotel.destination} ${hotel.country} ${hotel.propertyType} ${hotel.highlight}`.toLowerCase();
        const matches = tokens.some((t) => searchableText.includes(t));
        if (!matches) {
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
  }, [selectedStarRating, selectedType, selectedDestinationFilter, searchQuery, sortBy]);

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
    <section id="hotels" className="container mx-auto px-4 lg:px-8 py-8 sm:py-10 border-t border-slate-200 scroll-mt-24 sm:scroll-mt-28">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 gap-3">
        <div>
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
            Stays & Resorts
          </span>
          <h2 className="text-xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Hotels, Resorts & Stays (1★ to 5★)
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5 max-w-xl">
            From 1★ backpacker hostels & 2★ budget guest houses to 3★ cozy chalets, 4★ boutique stays & 5★ luxury palaces.
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
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      {/* Filter Matrix: Star Rating & Property Types */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 mb-6 bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-200">
        {/* Star Rating Filter */}
        <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
          <span className="text-xs text-slate-500 mr-1 font-semibold">Tier:</span>
          {[
            { label: 'All Stays', value: 'All' },
            { label: '5★ Luxury', value: 5 },
            { label: '4★ Premium', value: 4 },
            { label: '3★ Cozy', value: 3 },
            { label: '2★ Standard', value: 2 },
            { label: '1★ Backpacker & Inn', value: 1 },
          ].map((star) => (
            <button
              key={star.label}
              onClick={() => setSelectedStarRating(star.value as any)}
              className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                selectedStarRating === star.value
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {star.label}
            </button>
          ))}
        </div>

        {/* Property Type Filter */}
        <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
          <span className="text-xs text-slate-500 mr-1 font-semibold">Type:</span>
          {propertyTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                selectedType === type
                  ? 'bg-slate-800 text-white'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Hotels Grid */}
      {filteredHotels.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredHotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              hotel={hotel}
              onOpenBooking={(selected) => setActiveHotelModal(selected)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 bg-white rounded-xl border border-slate-200 p-5 max-w-md mx-auto">
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
