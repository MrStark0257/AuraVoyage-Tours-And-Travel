import React, { useState, useMemo } from 'react';
import { REFRESHMENTS_DATA } from '../../data/refreshmentsData';
import { RefreshmentCard } from './RefreshmentCard';
import { useTravel } from '../../context/TravelContext';
import { SlidersHorizontal, Coffee, Compass } from 'lucide-react';

export const RefreshmentList: React.FC = () => {
  const { searchQuery, selectedDestinationFilter } = useTravel();
  const [filterType, setFilterType] = useState<'all' | 'artisan' | 'scenic' | 'heritage'>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'rating' | 'reviews'>('featured');

  const filteredItems = useMemo(() => {
    return REFRESHMENTS_DATA.filter((item) => {
      if (filterType === 'artisan' && item.type !== 'Artisan Cafe') return false;
      if (
        filterType === 'scenic' &&
        item.type !== 'Scenic Highway Pit Stop' &&
        item.type !== 'Smoothie & Juice Bar'
      )
        return false;
      if (
        filterType === 'heritage' &&
        item.type !== 'Heritage Tea House' &&
        item.type !== 'Sunset Drinks Lounge'
      )
        return false;

      if (
        selectedDestinationFilter &&
        selectedDestinationFilter !== 'All' &&
        selectedDestinationFilter !== 'All Destinations'
      ) {
        const filterStr = selectedDestinationFilter.toLowerCase().trim();
        const tokens = filterStr.split(/[\s,]+/).filter((t) => t.length > 2);
        const matches =
          item.destination.toLowerCase().includes(filterStr) ||
          item.country.toLowerCase().includes(filterStr) ||
          tokens.some(
            (token) =>
              item.destination.toLowerCase().includes(token) ||
              item.country.toLowerCase().includes(token)
          );
        if (!matches) {
          return false;
        }
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDest = item.destination.toLowerCase().includes(q);
        const matchesCountry = item.country.toLowerCase().includes(q);
        const matchesType = item.type.toLowerCase().includes(q);
        const matchesTags = item.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesName && !matchesDest && !matchesCountry && !matchesType && !matchesTags) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'reviews') return b.reviewsCount - a.reviewsCount;
      return 0;
    });
  }, [filterType, selectedDestinationFilter, searchQuery, sortBy]);

  return (
    <section id="refreshments" className="container mx-auto px-4 lg:px-8 py-8 sm:py-10 border-t border-slate-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 gap-3">
        <div>
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-500 block flex items-center gap-1.5 mb-1">
            <Coffee className="w-3.5 h-3.5 text-slate-700" />
            Travel Guide • Cafe & Pit-Stop Directory
          </span>
          <h2 className="text-xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Worldwide Cafes & Scenic Pit-Stops
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5 max-w-2xl leading-relaxed">
            Search what cafes, alpine bakeries, and scenic road-trip pit stops exist at each worldwide destination. Free traveler directory with specialty drinks, addresses, and opening hours.
          </p>
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2 bg-white px-2.5 sm:px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-700 self-start sm:self-auto">
          <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-500">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-transparent text-slate-900 font-medium outline-none cursor-pointer"
          >
            <option value="featured">Featured Spots</option>
            <option value="rating">Top Rated</option>
            <option value="reviews">Most Reviewed</option>
          </select>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 mb-6 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
        <button
          onClick={() => setFilterType('all')}
          className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
            filterType === 'all'
              ? 'bg-slate-900 text-white'
              : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
          }`}
        >
          All Spots ({REFRESHMENTS_DATA.length})
        </button>

        <button
          onClick={() => setFilterType('artisan')}
          className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
            filterType === 'artisan'
              ? 'bg-slate-900 text-white'
              : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
          }`}
        >
          Artisan Cafes & Bakeries
        </button>

        <button
          onClick={() => setFilterType('scenic')}
          className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
            filterType === 'scenic'
              ? 'bg-slate-900 text-white'
              : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
          }`}
        >
          Scenic Road & Clifftop Stops
        </button>

        <button
          onClick={() => setFilterType('heritage')}
          className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
            filterType === 'heritage'
              ? 'bg-slate-900 text-white'
              : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
          }`}
        >
          Heritage Tea Houses & Lounges
        </button>
      </div>

      {/* Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredItems.map((item) => (
            <RefreshmentCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 bg-white rounded-xl border border-slate-200 p-5 max-w-md mx-auto">
          <Compass className="w-8 h-8 text-slate-400 mx-auto mb-2 opacity-60" />
          <h3 className="text-sm font-semibold text-slate-800 mb-1">No cafes match this filter</h3>
          <p className="text-xs text-slate-500 mb-3">
            Try resetting your destination search or explore all worldwide cafe spots.
          </p>
          <button
            onClick={() => setFilterType('all')}
            className="px-3.5 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Show All Cafes ({REFRESHMENTS_DATA.length})
          </button>
        </div>
      )}
    </section>
  );
};
