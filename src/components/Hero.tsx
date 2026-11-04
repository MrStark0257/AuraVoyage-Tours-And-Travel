import React, { useState } from 'react';
import { useTravel } from '../context/TravelContext';
import { CategoryType } from '../types';
import {
  Search,
  MapPin,
  Calendar,
  Users,
  Compass,
  Palmtree,
  Hotel,
  UtensilsCrossed,
  Coffee,
  ShieldCheck,
  Star,
  CheckCircle2,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const {
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    selectedDestinationFilter,
    setSelectedDestinationFilter,
  } = useTravel();

  const [localSearch, setLocalSearch] = useState(searchQuery);
  const [guestCount, setGuestCount] = useState('2 Guests');
  const [travelMonth, setTravelMonth] = useState('Anytime');

  const destinationOptions = [
    'All Destinations',
    'Bali',
    'Switzerland',
    'Amalfi Coast',
    'Kyoto',
    'Dubai',
    'Santorini',
    'Zanzibar',
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(localSearch);
    const targetElement = document.getElementById(
      activeCategory === 'all' ? 'catalog-section' : activeCategory
    );
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tabs: { label: string; category: CategoryType; icon: React.ElementType }[] = [
    { label: 'All', category: 'all', icon: Compass },
    { label: 'Tours', category: 'tours', icon: Palmtree },
    { label: 'Hotels', category: 'hotels', icon: Hotel },
    { label: 'Dining', category: 'restaurants', icon: UtensilsCrossed },
    { label: 'Refreshments', category: 'refreshments', icon: Coffee },
  ];

  return (
    <section id="hero" className="relative w-full overflow-hidden">
      {/* Background Hero Banner */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85"
          alt="Coastal destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/65" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28 flex flex-col items-center text-center">
        {/* Minimalist Subhead Tag */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 text-white/90 px-3.5 py-1 rounded-full text-xs font-medium tracking-wide mb-6">
          <span>Curated Travel • Verified Stays • Reserved Dining</span>
        </div>

        {/* Hero Title - Clean & Editorial */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.15] max-w-4xl mb-4">
          Travel Beyond the Ordinary
        </h1>

        {/* Hero Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-slate-200/90 max-w-2xl leading-relaxed mb-8 font-normal">
          Bespoke multi-day tour packages, 5-star hotel bookings, Michelin table reservations, and artisan travel refreshments.
        </p>

        {/* Unified Search & Booking Bar - Clean Minimalist Card */}
        <div className="w-full max-w-4xl bg-white rounded-2xl p-4 shadow-xl border border-slate-200">
          {/* Category Tabs Switcher - Minimalist Segmented Control */}
          <div className="flex items-center gap-1 overflow-x-auto pb-3 mb-3 border-b border-slate-100">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeCategory === tab.category;
              return (
                <button
                  key={tab.category}
                  onClick={() => setActiveCategory(tab.category)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                    isSelected
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 opacity-80" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Inputs Form */}
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-2.5 text-left">
            {/* Input 1: Destination */}
            <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-0.5 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-400" />
                Destination
              </label>
              <select
                value={selectedDestinationFilter}
                onChange={(e) => {
                  setSelectedDestinationFilter(e.target.value);
                  setLocalSearch(e.target.value === 'All Destinations' ? '' : e.target.value);
                  setSearchQuery(e.target.value === 'All Destinations' ? '' : e.target.value);
                }}
                className="w-full bg-transparent text-xs font-semibold text-slate-900 outline-none cursor-pointer"
              >
                {destinationOptions.map((dest) => (
                  <option key={dest} value={dest} className="text-slate-900">
                    {dest}
                  </option>
                ))}
              </select>
            </div>

            {/* Input 2: Dates */}
            <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-0.5 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-slate-400" />
                Travel Dates
              </label>
              <select
                value={travelMonth}
                onChange={(e) => setTravelMonth(e.target.value)}
                className="w-full bg-transparent text-xs font-semibold text-slate-900 outline-none cursor-pointer"
              >
                <option value="Anytime">Flexible / Anytime</option>
                <option value="Nov - Dec 2026">Nov – Dec 2026</option>
                <option value="Jan - Feb 2027">Jan – Feb 2027</option>
                <option value="Spring 2027">Spring 2027</option>
                <option value="Summer 2027">Summer 2027</option>
              </select>
            </div>

            {/* Input 3: Guests */}
            <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-0.5 flex items-center gap-1">
                <Users className="w-3 h-3 text-slate-400" />
                Travelers
              </label>
              <select
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                className="w-full bg-transparent text-xs font-semibold text-slate-900 outline-none cursor-pointer"
              >
                <option value="1 Solo Traveler">1 Solo Traveler</option>
                <option value="2 Guests (Couple / Pair)">2 Guests</option>
                <option value="3-4 Guests (Family)">3–4 Guests</option>
                <option value="5+ Group Travelers">5+ Guests</option>
              </select>
            </div>

            {/* Minimalist Action Button - Clean Solid Slate */}
            <div className="flex items-center">
              <button
                type="submit"
                className="w-full h-full min-h-[44px] bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Search Experiences</span>
              </button>
            </div>
          </form>

          {/* Quick Keywords */}
          <div className="mt-2.5 pt-2 text-[11px] text-slate-500 flex flex-wrap items-center justify-center gap-1.5">
            <span className="text-slate-400">Featured:</span>
            {['Bali', 'Swiss Alps', 'Positano', 'Kyoto', 'Dubai Dunes', 'Santorini'].map(
              (keyword) => (
                <button
                  key={keyword}
                  type="button"
                  onClick={() => {
                    setSearchQuery(keyword);
                    setLocalSearch(keyword);
                  }}
                  className="px-2 py-0.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors text-[11px]"
                >
                  {keyword}
                </button>
              )
            )}
          </div>
        </div>

        {/* Minimalist Trust Features Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-10 w-full max-w-3xl text-left border-t border-white/10 pt-6">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-slate-300 shrink-0" />
            <div>
              <h4 className="text-white font-medium text-xs">Verified Stays</h4>
              <p className="text-slate-400 text-[11px]">Inspected luxury properties</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <UtensilsCrossed className="w-4 h-4 text-slate-300 shrink-0" />
            <div>
              <h4 className="text-white font-medium text-xs">Guaranteed Dining</h4>
              <p className="text-slate-400 text-[11px]">Confirmed table bookings</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Coffee className="w-4 h-4 text-slate-300 shrink-0" />
            <div>
              <h4 className="text-white font-medium text-xs">Travel Refreshments</h4>
              <p className="text-slate-400 text-[11px]">Curated picnic hampers</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Star className="w-4 h-4 text-slate-300 shrink-0" />
            <div>
              <h4 className="text-white font-medium text-xs">4.97 / 5 Rating</h4>
              <p className="text-slate-400 text-[11px]">18,400+ guests served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
