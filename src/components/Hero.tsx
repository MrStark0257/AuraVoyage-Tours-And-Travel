import React, { useState } from 'react';
import { useTravel } from '../context/TravelContext';
import { CategoryType } from '../types';
import {
  Search,
  MapPin,
  Calendar,
  Clock,
  Compass,
  Palmtree,
  Hotel,
  UtensilsCrossed,
  Coffee,
  ShieldCheck,
  Star,
  Sparkles,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const {
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    selectedDestinationFilter,
    setSelectedDestinationFilter,
    selectedDurationFilter,
    setSelectedDurationFilter,
    selectedMonthFilter,
    setSelectedMonthFilter,
  } = useTravel();

  const [localSearch, setLocalSearch] = useState(searchQuery);

  const destinationGroups = [
    {
      group: 'India — Mountains & North',
      items: [
        'Kullu Manali & Solang Valley, Himachal Pradesh',
        'Shimla & Kufri Pines, Himachal Pradesh',
        'Dharamshala & McLeodganj, Himachal Pradesh',
        'Spiti Valley & Chandratal Lake, Himachal Pradesh',
        'Kasol & Parvati Valley, Himachal Pradesh',
        'Kashmir Paradise, Gulmarg & Pahalgam',
        'Leh Ladakh & Pangong Tso Odyssey',
        'Rishikesh & Haridwar Ganga Aarti, Uttarakhand',
        'Nainital & Kumaon Lake District, Uttarakhand',
        'Jim Corbett Tiger Reserve, Uttarakhand',
      ],
    },
    {
      group: 'India — South, West, East & Heritage',
      items: [
        'Kerala Backwaters, Munnar & Alleppey',
        'Goa Coastal Beaches & Portuguese Heritage',
        'Rajasthan Forts, Udaipur & Jaipur Palaces',
        'Jaisalmer Thar Desert Dunes & Jodhpur Blue City',
        'Varanasi Ancient Ghats & Sacred Ganga',
        'Darjeeling Himalayan Sunrise & Gangtok Monasteries',
        'Shillong & Cherrapunji Living Root Bridges',
        'Coorg Coffee Estates & Wayanad Rainforests',
        'Gokarna Om Beach & Kodaikanal Hills',
        'Andaman & Nicobar Islands Tropical Atolls',
        'Ooty & Nilgiri Hills, Tamil Nadu',
        'Agra Taj Mahal & Golden Triangle',
      ],
    },
    {
      group: 'Europe & Mediterranean',
      items: [
        'Swiss Alps, Interlaken & Jungfrau, Switzerland',
        'Zermatt & Matterhorn, Switzerland',
        'Paris & French Riviera, France',
        'Rome & Colosseum, Italy',
        'Florence & Tuscan Hills, Italy',
        'Venice & Venetian Canals, Italy',
        'Amalfi Coast & Positano, Italy',
        'Santorini & Cycladic Caldera, Greece',
        'Reykjavík & Blue Lagoon, Iceland',
        'London, Stonehenge & Scottish Highlands, UK',
        'Edinburgh Castle & Royal Mile, Scotland',
        'Barcelona Sagrada Familia & Madrid, Spain',
        'Amsterdam Canals & Windmills, Netherlands',
        'Prague Charles Bridge & Historic Castle, Czechia',
      ],
    },
    {
      group: 'Asia & Middle East',
      items: [
        'Tokyo & Mount Fuji, Japan',
        'Kyoto Arashiyama & Osaka, Japan',
        'Phuket & Andaman Islands, Thailand',
        'Bangkok Grand Palaces, Thailand',
        'Ubud & Bali Tropical Sanctuary, Indonesia',
        'Dubai Palm Jumeirah & Desert Dunes, UAE',
        'Abu Dhabi & Sheikh Zayed Grand Mosque, UAE',
        'Maldives Private Island Atolls',
        'Singapore Marina Bay & Sentosa Island',
        'Cappadocia Hot Air Balloons & Istanbul, Turkey',
        'Hanoi & Ha Long Bay Emerald Waters, Vietnam',
        'Seoul Gangnam & Historic Palaces, South Korea',
      ],
    },
    {
      group: 'Africa, Americas & Oceania',
      items: [
        'Serengeti National Park Big 5 Safari, Tanzania',
        'Cape Town & Garden Route, South Africa',
        'Cairo & Pyramids of Giza, Egypt',
        'Marrakech Medina & Sahara Dunes, Morocco',
        'New York City & Manhattan, USA',
        'California & Los Angeles Pacific Coast, USA',
        'Machu Picchu & Cusco Incan Trail, Peru',
        'Rio de Janeiro & Copacabana, Brazil',
        'Queenstown & Milford Sound, New Zealand',
        'Sydney Harbour & Great Barrier Reef, Australia',
      ],
    },
    {
      group: '1-Month Grand Expeditions',
      items: [
        'Incredible India 30-Day Grand Odyssey',
        'Grand European 28-Day Splendor',
        'Pan-Asian 30-Day Silk & Island Journey',
      ],
    },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(localSearch.trim());
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
    { label: 'Cafes & Spots', category: 'refreshments', icon: Coffee },
  ];

  return (
    <section id="hero" className="relative w-full overflow-hidden">
      {/* Background Banner */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury travel destinations worldwide"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-24 md:pb-28 flex flex-col items-center text-center">
        {/* Minimalist Subhead Tag */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/15 text-white/90 px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium tracking-wide mb-4 sm:mb-6">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>India & Worldwide Curated Expeditions • 1★ to 5★ Stays & Scenic Cafes</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.2] max-w-4xl mb-3 sm:mb-4">
          Travel Beyond the Ordinary
        </h1>

        {/* Hero Subtitle */}
        <p className="text-xs sm:text-base md:text-lg text-slate-200/90 max-w-2xl leading-relaxed mb-6 sm:mb-8 font-normal">
          From the pine peaks of Kullu Manali & Kerala backwaters to the Swiss Alps and Parisian palaces. Filter by destination, trip duration, or month.
        </p>

        {/* Unified Search & Booking Bar */}
        <div className="w-full max-w-4xl bg-white rounded-2xl p-3 sm:p-4 shadow-xl border border-slate-200">
          {/* Category Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-2.5 mb-2.5 sm:pb-3 sm:mb-3 border-b border-slate-100 no-scrollbar">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeCategory === tab.category;
              return (
                <button
                  key={tab.category}
                  onClick={() => setActiveCategory(tab.category)}
                  className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-medium whitespace-nowrap transition-colors shrink-0 ${isSelected
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
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-2.5 text-left">
            {/* Input 1: Destination / Search Query */}
            <div className="p-2 sm:p-2.5 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-0.5 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-400" />
                Destination / Search
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type city, hotel, country..."
                  value={localSearch}
                  onChange={(e) => {
                    setLocalSearch(e.target.value);
                    setSearchQuery(e.target.value);
                  }}
                  className="w-full bg-transparent text-xs font-semibold text-slate-900 outline-none placeholder-slate-400 pr-5"
                />
                {localSearch && (
                  <button
                    type="button"
                    onClick={() => {
                      setLocalSearch('');
                      setSearchQuery('');
                      setSelectedDestinationFilter('All');
                    }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs px-1"
                  >
                    ×
                  </button>
                )}
              </div>
              {/* Optional Quick select dropdown */}
              <select
                aria-label="Select Destination"
                value={selectedDestinationFilter}
                onChange={(e) => {
                  setSelectedDestinationFilter(e.target.value);
                  const val = e.target.value === 'All' ? '' : e.target.value;
                  setLocalSearch(val);
                  setSearchQuery(val);
                }}
                className="mt-1 w-full bg-transparent text-[11px] text-slate-500 font-medium outline-none cursor-pointer border-t border-slate-200/60 pt-1"
              >
                <option value="All">Or choose from list (Worldwide)</option>
                {destinationGroups.map((grp) => (
                  <optgroup key={grp.group} label={grp.group}>
                    {grp.items.map((dest) => (
                      <option key={dest} value={dest}>
                        {dest}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            {/* Input 2: Days & Trip Duration */}
            <div className="p-2 sm:p-2.5 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-0.5 flex items-center gap-1">
                <Clock className="w-3 h-3 text-slate-400" />
                Trip Duration (Days)
              </label>
              <select
                value={selectedDurationFilter}
                onChange={(e) => setSelectedDurationFilter(e.target.value)}
                className="w-full bg-transparent text-xs font-semibold text-slate-900 outline-none cursor-pointer mt-0.5"
              >
                <option value="All">All Trip Durations</option>
                <option value="month">1 Full Month (25–30 Days Grand)</option>
                <option value="two_weeks">2 Weeks (9–14 Days)</option>
                <option value="week">1 Week Classic (5–8 Days)</option>
                <option value="short">Short Escape (3–4 Days)</option>
              </select>
              <span className="block text-[10px] text-slate-400 mt-1">
                {selectedDurationFilter === 'month' ? 'Grand Multi-City Odyssey' : 'Flexible day lengths'}
              </span>
            </div>

            {/* Input 3: Month & Dates */}
            <div className="p-2 sm:p-2.5 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-0.5 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-slate-400" />
                Departure Month
              </label>
              <select
                value={selectedMonthFilter}
                onChange={(e) => setSelectedMonthFilter(e.target.value)}
                className="w-full bg-transparent text-xs font-semibold text-slate-900 outline-none cursor-pointer mt-0.5"
              >
                <option value="Anytime">Anytime / Year-Round</option>
                <option value="Nov">November 2026</option>
                <option value="Dec">December 2026</option>
                <option value="Jan">January 2027</option>
                <option value="Feb">February 2027</option>
                <option value="Spring">Spring (Mar – May 2027)</option>
                <option value="Summer">Summer (Jun – Aug 2027)</option>
                <option value="Autumn">Autumn (Sep – Nov 2027)</option>
              </select>
              <span className="block text-[10px] text-slate-400 mt-1">
                Select your travel window
              </span>
            </div>

            {/* Action Button */}
            <div className="flex items-center sm:col-span-2 md:col-span-1">
              <button
                type="submit"
                className="w-full h-full min-h-[46px] bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Search Journeys</span>
              </button>
            </div>
          </form>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mt-8 sm:mt-10 w-full max-w-3xl text-left border-t border-white/10 pt-5 sm:pt-6">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <ShieldCheck className="w-4 h-4 text-slate-300 shrink-0" />
            <div>
              <h4 className="text-white font-medium text-[11px] sm:text-xs">Verified Stays</h4>
              <p className="text-slate-400 text-[10px]">Inspected 1★ to 5★ stays</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-2.5">
            <UtensilsCrossed className="w-4 h-4 text-slate-300 shrink-0" />
            <div>
              <h4 className="text-white font-medium text-[11px] sm:text-xs">Guaranteed Dining</h4>
              <p className="text-slate-400 text-[10px]">Confirmed culinary tables</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-2.5">
            <Clock className="w-4 h-4 text-slate-300 shrink-0" />
            <div>
              <h4 className="text-white font-medium text-[11px] sm:text-xs">1-Month & Custom</h4>
              <p className="text-slate-400 text-[10px]">Tailored trip durations</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-2.5">
            <Star className="w-4 h-4 text-slate-300 shrink-0" />
            <div>
              <h4 className="text-white font-medium text-[11px] sm:text-xs">4.97 / 5 Rating</h4>
              <p className="text-slate-400 text-[10px]">18,400+ happy voyagers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
