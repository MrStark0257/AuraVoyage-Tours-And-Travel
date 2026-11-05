import React, { useState, useMemo } from 'react';
import { useTravel } from '../../context/TravelContext';
import { HOTELS_DATA } from '../../data/hotelsData';
import { RESTAURANTS_DATA } from '../../data/restaurantsData';
import { formatPrice } from '../../utils/formatters';
import {
  Hotel,
  UtensilsCrossed,
  Check,
  ShoppingBag,
  ShieldCheck,
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  Camera,
  Car,
  Compass,
} from 'lucide-react';

interface DestinationChoice {
  id: string;
  name: string;
  city: string;
  country: string;
  region: 'India' | 'Europe' | 'Asia' | 'Americas & Africa' | '1-Month Expeditions';
  isOneMonth?: boolean;
}

const DESTINATION_CATALOG: DestinationChoice[] = [
  // India
  {
    id: 'manali',
    name: 'Kullu Manali & Solang Valley',
    city: 'Kullu Manali',
    country: 'India',
    region: 'India',
  },
  {
    id: 'kerala',
    name: 'Kerala Backwaters & Munnar',
    city: 'Kumarakom & Alleppey',
    country: 'India',
    region: 'India',
  },
  {
    id: 'goa',
    name: 'Goa Coastal & Heritage',
    city: 'Benaulim, Goa',
    country: 'India',
    region: 'India',
  },
  {
    id: 'kashmir',
    name: 'Kashmir Valley & Gulmarg',
    city: 'Gulmarg & Srinagar',
    country: 'India',
    region: 'India',
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan Forts & Lake Pichola',
    city: 'Udaipur, Rajasthan',
    country: 'India',
    region: 'India',
  },

  // Europe
  {
    id: 'swiss-alps',
    name: 'Swiss Alps & Interlaken',
    city: 'Interlaken',
    country: 'Switzerland',
    region: 'Europe',
  },
  {
    id: 'andermatt',
    name: 'Andermatt Alpine Valley',
    city: 'Andermatt',
    country: 'Switzerland',
    region: 'Europe',
  },
  {
    id: 'paris',
    name: 'Paris & Avenue Montaigne',
    city: 'Paris',
    country: 'France',
    region: 'Europe',
  },
  {
    id: 'amalfi',
    name: 'Amalfi Coast & Positano',
    city: 'Positano',
    country: 'Italy',
    region: 'Europe',
  },
  {
    id: 'venice',
    name: 'Venice & Venetian Lagoon',
    city: 'Venice',
    country: 'Italy',
    region: 'Europe',
  },
  {
    id: 'santorini',
    name: 'Santorini Caldera',
    city: 'Santorini',
    country: 'Greece',
    region: 'Europe',
  },
  {
    id: 'iceland',
    name: 'Reykjavík & Blue Lagoon',
    city: 'Grindavík',
    country: 'Iceland',
    region: 'Europe',
  },

  // Asia & Middle East
  {
    id: 'kyoto',
    name: 'Kyoto Arashiyama & Bamboo Groves',
    city: 'Kyoto',
    country: 'Japan',
    region: 'Asia',
  },
  {
    id: 'tokyo',
    name: 'Tokyo Ginza & Skyline',
    city: 'Tokyo',
    country: 'Japan',
    region: 'Asia',
  },
  {
    id: 'phuket',
    name: 'Phuket & Andaman Sea',
    city: 'Phuket',
    country: 'Thailand',
    region: 'Asia',
  },
  {
    id: 'bali',
    name: 'Ubud & Sacred Valley Sanctuary',
    city: 'Ubud, Bali',
    country: 'Indonesia',
    region: 'Asia',
  },
  {
    id: 'dubai',
    name: 'Dubai Palm Jumeirah & Dunes',
    city: 'Dubai',
    country: 'United Arab Emirates',
    region: 'Asia',
  },
  {
    id: 'maldives',
    name: 'Maldives Overwater Sanctuary',
    city: 'Baa Atoll',
    country: 'Maldives',
    region: 'Asia',
  },
  {
    id: 'cappadocia',
    name: 'Cappadocia Hot Air & Caves',
    city: 'Cappadocia',
    country: 'Turkey',
    region: 'Asia',
  },

  // Americas & Africa & Oceania
  {
    id: 'new-york',
    name: 'New York City & Central Park',
    city: 'New York',
    country: 'United States',
    region: 'Americas & Africa',
  },
  {
    id: 'serengeti',
    name: 'Serengeti Wildlife Safari',
    city: 'Serengeti',
    country: 'Tanzania',
    region: 'Americas & Africa',
  },
  {
    id: 'cape-town',
    name: 'Cape Town & Atlantic Seaboard',
    city: 'Cape Town',
    country: 'South Africa',
    region: 'Americas & Africa',
  },
  {
    id: 'machu-picchu',
    name: 'Machu Picchu & Sacred Valley',
    city: 'Cusco',
    country: 'Peru',
    region: 'Americas & Africa',
  },
  {
    id: 'queenstown',
    name: 'Queenstown Southern Alps',
    city: 'Queenstown',
    country: 'New Zealand',
    region: 'Americas & Africa',
  },

  // 1-Month Grand Expeditions
  {
    id: 'month-india',
    name: 'Incredible India 30-Day Grand Tour',
    city: 'Manali, Kashmir, Rajasthan, Kerala, Goa',
    country: 'India',
    region: '1-Month Expeditions',
    isOneMonth: true,
  },
  {
    id: 'month-europe',
    name: 'Grand European 28-Day Splendor',
    city: 'Swiss Alps, Paris, Venice, Amalfi',
    country: 'Switzerland',
    region: '1-Month Expeditions',
    isOneMonth: true,
  },
];

export const CustomPackageBuilder: React.FC = () => {
  const { currency, addToCart, setIsCartOpen } = useTravel();

  const [selectedRegion, setSelectedRegion] = useState<string>('India');
  const [selectedDestId, setSelectedDestId] = useState<string>('manali');
  const [travelers, setTravelers] = useState<number>(2);
  const [nights, setNights] = useState<number>(5);
  const [startDate, setStartDate] = useState<string>('2026-11-20');

  // Currently chosen destination object
  const currentDest = useMemo(() => {
    return DESTINATION_CATALOG.find((d) => d.id === selectedDestId) || DESTINATION_CATALOG[0];
  }, [selectedDestId]);

  // Calculate return date
  const returnDate = useMemo(() => {
    try {
      const d = new Date(startDate);
      d.setDate(d.getDate() + nights);
      return d.toISOString().split('T')[0];
    } catch {
      return '';
    }
  }, [startDate, nights]);

  // Filter hotels strictly matching destination and country
  const availableHotels = useMemo(() => {
    const destName = currentDest.name.toLowerCase();
    const destCity = currentDest.city.toLowerCase();
    const destCountry = currentDest.country.toLowerCase();

    // First attempt: match city/destination specifically
    const specificMatches = HOTELS_DATA.filter((h) => {
      const hDest = h.destination.toLowerCase();
      const hName = h.name.toLowerCase();
      return (
        hDest.includes(destCity) ||
        destCity.split(',').some((part) => part.trim() && hDest.includes(part.trim())) ||
        destName.includes(hDest) ||
        hName.includes(destCity)
      );
    });

    if (specificMatches.length > 0) return specificMatches;

    // Second attempt: match country
    const countryMatches = HOTELS_DATA.filter((h) => {
      return (
        h.country.toLowerCase() === destCountry ||
        h.country.toLowerCase().includes(destCountry) ||
        destCountry.includes(h.country.toLowerCase())
      );
    });

    if (countryMatches.length > 0) return countryMatches;

    // Fallback: only if completely unmapped, return top hotels
    return HOTELS_DATA.slice(0, 3);
  }, [currentDest]);

  // Filter restaurants strictly matching destination and country
  const availableRestaurants = useMemo(() => {
    const destName = currentDest.name.toLowerCase();
    const destCity = currentDest.city.toLowerCase();
    const destCountry = currentDest.country.toLowerCase();

    const specificMatches = RESTAURANTS_DATA.filter((r) => {
      const rDest = r.destination.toLowerCase();
      return (
        rDest.includes(destCity) ||
        destCity.split(',').some((part) => part.trim() && rDest.includes(part.trim())) ||
        destName.includes(rDest)
      );
    });

    if (specificMatches.length > 0) return specificMatches;

    const countryMatches = RESTAURANTS_DATA.filter((r) => {
      return (
        r.country.toLowerCase() === destCountry ||
        r.country.toLowerCase().includes(destCountry) ||
        destCountry.includes(r.country.toLowerCase())
      );
    });

    return countryMatches;
  }, [currentDest]);

  const [selectedHotelId, setSelectedHotelId] = useState<string>(availableHotels[0]?.id || 'hotel-17');
  const [selectedRestaurantId, setSelectedRestaurantId] = useState<string | null>(
    availableRestaurants[0]?.id || null
  );
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['addon-guide', 'addon-transfer']);

  // Update selection when destination changes
  const handleDestinationChange = (destId: string) => {
    setSelectedDestId(destId);
    const dest = DESTINATION_CATALOG.find((d) => d.id === destId);
    if (dest?.isOneMonth) {
      setNights(dest.id === 'month-india' ? 30 : 28);
    }

    // Auto-select first matching hotel and restaurant
    const destCity = (dest?.city || '').toLowerCase();
    const destCountry = (dest?.country || '').toLowerCase();

    const hotelMatch = HOTELS_DATA.find((h) => {
      const hDest = h.destination.toLowerCase();
      return (
        hDest.includes(destCity) ||
        h.country.toLowerCase() === destCountry ||
        destCity.split(',').some((p) => p.trim() && hDest.includes(p.trim()))
      );
    });
    if (hotelMatch) {
      setSelectedHotelId(hotelMatch.id);
    }

    const restMatch = RESTAURANTS_DATA.find((r) => {
      const rDest = r.destination.toLowerCase();
      return (
        rDest.includes(destCity) ||
        r.country.toLowerCase() === destCountry ||
        destCity.split(',').some((p) => p.trim() && rDest.includes(p.trim()))
      );
    });
    setSelectedRestaurantId(restMatch ? restMatch.id : null);
  };

  const activityAddons = [
    {
      id: 'addon-guide',
      title: 'Dedicated Local Private Guide & Host',
      priceUSD: 160,
      icon: Compass,
      description: 'Expert multilingual companion for customized daily excursions & heritage lore',
    },
    {
      id: 'addon-transfer',
      title: 'VIP Chauffeur & Airport Concierge',
      priceUSD: 120,
      icon: Car,
      description: 'Luxury climate-controlled vehicle with meet & greet at arrival terminal',
    },
    {
      id: 'addon-photo',
      title: 'Professional Holiday Photography (50 Edited HD Photos)',
      priceUSD: 190,
      icon: Camera,
      description: '2-hour private photoshoot at iconic landmarks & viewpoint terraces',
    },
    {
      id: 'addon-scenic',
      title: 'Signature Scenic Excursion (Shikara / Gondola / Viewpoint)',
      priceUSD: 95,
      icon: Sparkles,
      description: 'Private sunset ride or reserved alpine cable-car panorama pass',
    },
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const chosenHotel = useMemo(() => {
    return (
      HOTELS_DATA.find((h) => h.id === selectedHotelId) ||
      availableHotels[0] ||
      HOTELS_DATA[0]
    );
  }, [selectedHotelId, availableHotels]);

  const chosenRestaurant = useMemo(() => {
    return RESTAURANTS_DATA.find((r) => r.id === selectedRestaurantId);
  }, [selectedRestaurantId]);

  // Billing Calculations (WITHOUT refreshments)
  const hotelTotalUSD = (chosenHotel ? chosenHotel.pricePerNightUSD : 0) * nights;
  const restaurantTotalUSD = chosenRestaurant
    ? chosenRestaurant.avgCostPerPersonUSD * travelers
    : 0;
  const addonsTotalUSD = activityAddons
    .filter((a) => selectedAddons.includes(a.id))
    .reduce((acc, curr) => acc + curr.priceUSD, 0);

  const subtotalUSD = hotelTotalUSD + restaurantTotalUSD + addonsTotalUSD;
  const bundleDiscountUSD = Math.round(subtotalUSD * 0.15); // 15% custom bundle savings
  const finalPriceUSD = subtotalUSD - bundleDiscountUSD;

  const handleBookCustomBundle = () => {
    addToCart({
      cartItemId: `bundle-${Date.now()}`,
      itemType: 'custom_bundle',
      referenceId: `custom-${currentDest.id}`,
      title: `Custom ${currentDest.name} (${nights} Nights)`,
      destination: `${currentDest.name}, ${currentDest.country}`,
      image: chosenHotel ? chosenHotel.featuredImage : 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      unitPriceUSD: finalPriceUSD,
      quantity: 1,
      selectedDate: startDate,
      guestsCount: travelers,
      specialRequests: `Hotel: ${chosenHotel?.name} (${nights} Nights) | Dining: ${chosenRestaurant ? chosenRestaurant.name : 'Independent Dining'} | Addons: ${activityAddons.filter((a) => selectedAddons.includes(a.id)).map((a) => a.title).join(', ') || 'None'}`,
      bundleDetails: {
        hotelName: chosenHotel?.name,
        restaurantName: chosenRestaurant?.name,
      },
    });
    setIsCartOpen(true);
  };

  const regionTabs = ['India', 'Europe', 'Asia', 'Americas & Africa', '1-Month Expeditions'];

  const filteredDestinations = useMemo(() => {
    return DESTINATION_CATALOG.filter((d) => d.region === selectedRegion);
  }, [selectedRegion]);

  return (
    <section id="builder" className="container mx-auto px-4 lg:px-8 py-8 sm:py-12 border-t border-slate-200">
      {/* Heading */}
      <div className="text-left md:text-center max-w-3xl mx-auto mb-6 sm:mb-10">
        <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-1">
          Bespoke Trip Configurator
        </span>
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
          Build Your Custom Journey
        </h2>
        <p className="text-slate-500 text-xs sm:text-sm mt-1 max-w-xl mx-auto">
          Select domestic Indian spots (Manali, Kerala, Kashmir, Goa, Rajasthan) or worldwide hubs. Pick your duration, 5-star hotel, reserved dining, and excursions. Automatic <strong>15% bundle savings</strong> applied.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 items-start">
        {/* Left 2 Columns: Configurator Controls */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          {/* Step 1: Destination, Duration & Logistics */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-slate-900 text-white text-[11px] font-semibold flex items-center justify-center">
                  1
                </span>
                Destination & Duration Selection
              </h3>
              <span className="text-[11px] font-medium text-slate-500">
                Current: <strong className="text-slate-900">{currentDest.name}</strong>
              </span>
            </div>

            {/* Region Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3 no-scrollbar border-b border-slate-100">
              {regionTabs.map((region) => (
                <button
                  key={region}
                  type="button"
                  onClick={() => {
                    setSelectedRegion(region);
                    const firstInRegion = DESTINATION_CATALOG.find((d) => d.region === region);
                    if (firstInRegion) {
                      handleDestinationChange(firstInRegion.id);
                    }
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    selectedRegion === region
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {region === '1-Month Expeditions' ? '★ 1-Month Grand Tours' : region}
                </button>
              ))}
            </div>

            {/* Destination Selection Cards/Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-4">
              {filteredDestinations.map((dest) => {
                const isSelected = selectedDestId === dest.id;
                return (
                  <button
                    key={dest.id}
                    type="button"
                    onClick={() => handleDestinationChange(dest.id)}
                    className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-slate-900 bg-slate-50 ring-1 ring-slate-900'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-1">
                      <div className="font-semibold text-xs text-slate-900 leading-snug line-clamp-1">
                        {dest.name}
                      </div>
                      {isSelected && <Check className="w-3.5 h-3.5 text-slate-900 shrink-0 mt-0.5" />}
                    </div>
                    <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-1 truncate">
                      <MapPin className="w-2.5 h-2.5 text-slate-400 shrink-0" />
                      <span className="truncate">{dest.city}, {dest.country}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Logistics Grid: Start Date, Nights/Days, Travelers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-200">
              <div>
                <label className="block text-[10px] font-semibold uppercase text-slate-500 mb-1 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  Departure Date
                </label>
                <input
                  type="date"
                  value={startDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-800 outline-none"
                />
                <span className="block text-[10px] text-slate-400 mt-1">
                  Return: {returnDate || 'Calculated'}
                </span>
              </div>

              <div>
                <label className="block text-[10px] font-semibold uppercase text-slate-500 mb-1 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-400" />
                  Trip Duration (Days)
                </label>
                <select
                  value={nights}
                  onChange={(e) => setNights(Number(e.target.value))}
                  className="w-full bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-800 outline-none cursor-pointer"
                >
                  <option value={3}>3 Nights / 4 Days (Short Escape)</option>
                  <option value={5}>5 Nights / 6 Days (Essential)</option>
                  <option value={7}>7 Nights / 8 Days (1 Week Classic)</option>
                  <option value={10}>10 Nights / 11 Days (Deep Explorer)</option>
                  <option value={14}>14 Nights / 15 Days (2 Weeks Grand)</option>
                  <option value={21}>21 Nights / 22 Days (3 Weeks Voyage)</option>
                  <option value={28}>28 Nights / 29 Days (1-Month Grand Europe)</option>
                  <option value={30}>30 Nights / 31 Days (1-Month Grand India)</option>
                </select>
                <span className="block text-[10px] text-slate-400 mt-1">
                  {nights >= 28 ? '★ 1 Full Month Odyssey' : `${nights} Nights & ${nights + 1} Days`}
                </span>
              </div>

              <div>
                <label className="block text-[10px] font-semibold uppercase text-slate-500 mb-1 flex items-center gap-1">
                  <span>Travelers</span>
                </label>
                <select
                  value={travelers}
                  onChange={(e) => setTravelers(Number(e.target.value))}
                  className="w-full bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-800 outline-none cursor-pointer"
                >
                  <option value={1}>1 Solo Voyager</option>
                  <option value={2}>2 Guests (Couple / Pair)</option>
                  <option value={3}>3 Guests (Family)</option>
                  <option value={4}>4 Guests (Family Suite)</option>
                  <option value={6}>6 Guests (Private Group)</option>
                </select>
                <span className="block text-[10px] text-slate-400 mt-1">
                  Private tailored rooming
                </span>
              </div>
            </div>
          </div>

          {/* Step 2: Accommodation Selection (Matching Country & City) */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-slate-900 text-white text-[11px] font-semibold flex items-center justify-center">
                  2
                </span>
                Verified 5-Star Accommodation ({nights} Nights in {currentDest.country})
              </h3>
              <span className="text-[11px] text-slate-500">
                {availableHotels.length} luxury propert{availableHotels.length === 1 ? 'y' : 'ies'} in {currentDest.country}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {availableHotels.map((hotel) => {
                const isSelected = selectedHotelId === hotel.id;
                return (
                  <div
                    key={hotel.id}
                    onClick={() => setSelectedHotelId(hotel.id)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all flex gap-3 ${
                      isSelected
                        ? 'border-slate-900 bg-slate-50 ring-1 ring-slate-900'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <img
                      src={hotel.featuredImage}
                      alt={hotel.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover shrink-0"
                    />
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-[10px] uppercase font-semibold text-slate-500 truncate">
                            {hotel.propertyType} • {hotel.destination}
                          </span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-slate-900 shrink-0" />}
                        </div>
                        <h4 className="font-semibold text-xs text-slate-900 line-clamp-1 mt-0.5">
                          {hotel.name}
                        </h4>
                        <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          ★ {hotel.rating} ({hotel.reviewsCount} reviews) • {hotel.highlight}
                        </p>
                      </div>

                      <div className="font-bold text-xs text-slate-900 mt-2 flex items-baseline justify-between">
                        <span>{formatPrice(hotel.pricePerNightUSD, currency)} <span className="text-[10px] font-normal text-slate-500">/ night</span></span>
                        <span className="text-[10px] text-slate-500 font-normal">
                          Total: {formatPrice(hotel.pricePerNightUSD * nights, currency)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 3: Reserved Fine Dining (Matching Selected Destination/Country) */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-slate-900 text-white text-[11px] font-semibold flex items-center justify-center">
                  3
                </span>
                Reserved Table at Renowned Culinary Restaurant
              </h3>
              <span className="text-[11px] text-slate-500">Optional inclusion</span>
            </div>

            <div className="space-y-2.5">
              {/* Option to skip dining */}
              <div
                onClick={() => setSelectedRestaurantId(null)}
                className={`p-2.5 rounded-xl border cursor-pointer transition-colors flex items-center justify-between ${
                  selectedRestaurantId === null
                    ? 'border-slate-900 bg-slate-50 ring-1 ring-slate-900'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div>
                  <h4 className="font-semibold text-xs text-slate-900">
                    No Table Pre-Booking (Explore Dining Independently)
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    You can decide meals on-site or request concierge reservations later.
                  </p>
                </div>
                {selectedRestaurantId === null && <Check className="w-3.5 h-3.5 text-slate-900" />}
              </div>

              {/* Available destination restaurants */}
              {availableRestaurants.map((rest) => {
                const isSelected = selectedRestaurantId === rest.id;
                return (
                  <div
                    key={rest.id}
                    onClick={() => setSelectedRestaurantId(rest.id)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all flex gap-3 ${
                      isSelected
                        ? 'border-slate-900 bg-slate-50 ring-1 ring-slate-900'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <img
                      src={rest.featuredImage}
                      alt={rest.name}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg object-cover shrink-0"
                    />
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] uppercase font-semibold text-slate-500">
                            {rest.ambience} • {rest.destination}
                          </span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-slate-900" />}
                        </div>
                        <h4 className="font-semibold text-xs text-slate-900 line-clamp-1">
                          {rest.name}
                        </h4>
                        <p className="text-[11px] text-slate-500 line-clamp-1">
                          {rest.cuisine.join(' • ')}
                        </p>
                      </div>

                      <div className="font-bold text-xs text-slate-900 mt-1 flex items-center justify-between">
                        <span>{formatPrice(rest.avgCostPerPersonUSD, currency)} <span className="text-[10px] font-normal text-slate-500">/ guest</span></span>
                        <span className="text-[10px] text-slate-500 font-normal">
                          For {travelers}: {formatPrice(rest.avgCostPerPersonUSD * travelers, currency)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 4: Trip Add-ons (Guided tours, private transfers, photography) */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-slate-900 text-white text-[11px] font-semibold flex items-center justify-center">
                  4
                </span>
                Bespoke Experiences & VIP Add-ons
              </h3>
              <span className="text-[11px] text-slate-500">{selectedAddons.length} selected</span>
            </div>

            <div className="space-y-2">
              {activityAddons.map((addon) => {
                const isSelected = selectedAddons.includes(addon.id);
                const Icon = addon.icon;
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'border-slate-900 bg-slate-50 ring-1 ring-slate-900'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isSelected ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-xs text-slate-900">
                          {addon.title}
                        </h4>
                        <p className="text-[11px] text-slate-500">{addon.description}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 shrink-0">
                      <span className="font-bold text-xs text-slate-900">
                        +{formatPrice(addon.priceUSD, currency)}
                      </span>
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center ${
                          isSelected ? 'bg-slate-900 text-white' : 'border border-slate-300'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3" />}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Live Summary & Price Calculation Card */}
        <div className="lg:sticky lg:top-24 bg-slate-900 text-white p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-4 shadow-xl">
          <div className="border-b border-slate-800 pb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block mb-0.5">
              Custom Package Summary
            </span>
            <h4 className="text-base sm:text-lg font-bold leading-tight">
              {currentDest.name}
            </h4>
            <div className="flex items-center gap-2 mt-1.5 text-[11px] text-slate-300">
              <span className="bg-slate-800 px-2 py-0.5 rounded font-mono">
                {nights} Nights / {nights + 1} Days
              </span>
              <span>•</span>
              <span>{travelers} Guest{travelers > 1 ? 's' : ''}</span>
            </div>
            <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
              <Calendar className="w-3 h-3 text-slate-500" />
              <span>{startDate} to {returnDate}</span>
            </div>
          </div>

          {/* Breakdown Items */}
          <div className="space-y-2.5 text-xs">
            {/* Hotel Item */}
            <div className="flex justify-between items-start gap-2">
              <div className="min-w-0">
                <span className="font-medium text-slate-200 flex items-center gap-1.5 truncate">
                  <Hotel className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{chosenHotel?.name || 'Hotel Stay'}</span>
                </span>
                <span className="text-[10px] text-slate-400 block ml-5">
                  {nights} Nights × {formatPrice(chosenHotel?.pricePerNightUSD || 0, currency)}
                </span>
              </div>
              <span className="font-semibold text-slate-200 shrink-0">
                {formatPrice(hotelTotalUSD, currency)}
              </span>
            </div>

            {/* Dining Item */}
            {chosenRestaurant && (
              <div className="flex justify-between items-start gap-2">
                <div className="min-w-0">
                  <span className="font-medium text-slate-200 flex items-center gap-1.5 truncate">
                    <UtensilsCrossed className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{chosenRestaurant.name}</span>
                  </span>
                  <span className="text-[10px] text-slate-400 block ml-5">
                    Reserved table for {travelers} guests
                  </span>
                </div>
                <span className="font-semibold text-slate-200 shrink-0">
                  {formatPrice(restaurantTotalUSD, currency)}
                </span>
              </div>
            )}

            {/* Add-ons Item */}
            {addonsTotalUSD > 0 && (
              <div className="flex justify-between items-start gap-2">
                <div className="min-w-0">
                  <span className="font-medium text-slate-200 flex items-center gap-1.5 truncate">
                    <Sparkles className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Experiences & VIP Add-ons ({selectedAddons.length})</span>
                  </span>
                </div>
                <span className="font-semibold text-slate-200 shrink-0">
                  {formatPrice(addonsTotalUSD, currency)}
                </span>
              </div>
            )}
          </div>

          {/* Pricing Totals */}
          <div className="pt-3 border-t border-slate-800 space-y-1.5 text-xs">
            <div className="flex justify-between text-slate-400">
              <span>Standard Combined Rate:</span>
              <span>{formatPrice(subtotalUSD, currency)}</span>
            </div>
            <div className="flex justify-between text-emerald-400 font-medium">
              <span>Custom Bundle Savings (15%):</span>
              <span>-{formatPrice(bundleDiscountUSD, currency)}</span>
            </div>
            <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-slate-800 items-baseline">
              <div>
                <span>Total Package Price:</span>
                <span className="block text-[10px] font-normal text-slate-400">Taxes & fees included</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold text-white">
                {formatPrice(finalPriceUSD, currency)}
              </span>
            </div>
          </div>

          {/* Booking CTA Button */}
          <button
            onClick={handleBookCustomBundle}
            className="w-full bg-white hover:bg-slate-100 text-slate-900 font-semibold text-xs sm:text-sm py-3 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Book Custom Bundle ({formatPrice(finalPriceUSD, currency)})</span>
          </button>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
            <span>Verified Stays • Price Match Guarantee • Concierge Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};
