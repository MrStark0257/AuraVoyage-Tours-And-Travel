import React, { useState, useMemo } from 'react';
import { TourPackage } from '../../types';
import { TOURS_DATA } from '../../data/toursData';
import { TourCard } from './TourCard';
import { TourDetailModal } from './TourDetailModal';
import { useTravel } from '../../context/TravelContext';
import { SlidersHorizontal } from 'lucide-react';

export const TourList: React.FC = () => {
  const { searchQuery, selectedDestinationFilter, addToCart, setIsCartOpen } = useTravel();

  const [selectedTheme, setSelectedTheme] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [sortBy, setSortBy] = useState<'featured' | 'priceAsc' | 'priceDesc' | 'rating'>('featured');
  const [activeTourModal, setActiveTourModal] = useState<TourPackage | null>(null);

  const themes = ['All', 'Cultural', 'Adventure', 'Honeymoon', 'Luxury', 'Wildlife'];
  const regions = ['All', 'Europe', 'Asia', 'Middle East', 'Africa'];

  const filteredTours = useMemo(() => {
    return TOURS_DATA.filter((tour) => {
      if (selectedTheme !== 'All' && tour.theme !== selectedTheme) {
        return false;
      }
      if (selectedRegion !== 'All' && tour.region !== selectedRegion) {
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
          tour.destination.toLowerCase().includes(filterStr) ||
          tour.country.toLowerCase().includes(filterStr) ||
          tokens.some(
            (token) =>
              tour.destination.toLowerCase().includes(token) ||
              tour.country.toLowerCase().includes(token)
          );
        if (!matches) {
          return false;
        }
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = tour.title.toLowerCase().includes(q);
        const matchesDest = tour.destination.toLowerCase().includes(q);
        const matchesCountry = tour.country.toLowerCase().includes(q);
        const matchesTheme = tour.theme.toLowerCase().includes(q);
        if (!matchesTitle && !matchesDest && !matchesCountry && !matchesTheme) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'priceAsc') return a.priceUSD - b.priceUSD;
      if (sortBy === 'priceDesc') return b.priceUSD - a.priceUSD;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [selectedTheme, selectedRegion, selectedDestinationFilter, searchQuery, sortBy]);

  const handleBookNow = (tour: TourPackage, date: string, travelers: number) => {
    addToCart({
      cartItemId: `tour-${tour.id}-${Date.now()}`,
      itemType: 'tour',
      referenceId: tour.id,
      title: tour.title,
      destination: tour.destination,
      image: tour.featuredImage,
      unitPriceUSD: tour.priceUSD,
      quantity: travelers,
      selectedDate: date,
      guestsCount: travelers,
    });
    setActiveTourModal(null);
    setIsCartOpen(true);
  };

  return (
    <section id="tours" className="container mx-auto px-4 lg:px-8 py-8 sm:py-10 border-t border-slate-200">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 gap-3">
        <div>
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
            Itineraries
          </span>
          <h2 className="text-xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Curated Tour Packages
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5 max-w-xl">
            Multi-day journeys with luxury accommodations, private transportation, and expert guides.
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

      {/* Filter Chips Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 mb-6 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
        {/* Theme Pills */}
        <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
          <span className="text-xs text-slate-500 mr-1 font-medium">Style:</span>
          {themes.map((theme) => (
            <button
              key={theme}
              onClick={() => setSelectedTheme(theme)}
              className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                selectedTheme === theme
                  ? 'bg-slate-900 text-white'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {theme}
            </button>
          ))}
        </div>

        {/* Region Selector */}
        <div className="flex items-center gap-1.5 sm:gap-2 self-start sm:self-auto">
          <span className="text-xs text-slate-500 font-medium">Region:</span>
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="bg-white text-xs font-medium text-slate-800 px-2.5 py-1 rounded-lg border border-slate-200 outline-none cursor-pointer"
          >
            {regions.map((region) => (
              <option key={region} value={region}>
                {region === 'All' ? 'All Continents' : region}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Tours Grid */}
      {filteredTours.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredTours.map((tour) => (
            <TourCard
              key={tour.id}
              tour={tour}
              onOpenDetails={(selected) => setActiveTourModal(selected)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 bg-white rounded-xl border border-slate-200 p-5 max-w-md mx-auto">
          <h3 className="text-sm font-semibold text-slate-800 mb-1">No tour packages match your filters</h3>
          <p className="text-xs text-slate-500 mb-3">
            Try adjusting your search criteria or resetting filters.
          </p>
          <button
            onClick={() => {
              setSelectedTheme('All');
              setSelectedRegion('All');
            }}
            className="px-3.5 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-lg hover:bg-slate-800 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Tour Detail Modal */}
      <TourDetailModal
        tour={activeTourModal}
        onClose={() => setActiveTourModal(null)}
        onBookNow={handleBookNow}
      />
    </section>
  );
};
