import React, { useState } from 'react';
import { useTravel } from '../../context/TravelContext';
import { HOTELS_DATA } from '../../data/hotelsData';
import { RESTAURANTS_DATA } from '../../data/restaurantsData';
import { REFRESHMENTS_DATA } from '../../data/refreshmentsData';
import { formatPrice } from '../../utils/formatters';
import {
  Hotel,
  UtensilsCrossed,
  Coffee,
  Check,
  ShoppingBag,
  ShieldCheck,
  Layers,
} from 'lucide-react';

export const CustomPackageBuilder: React.FC = () => {
  const { currency, addToCart, setIsCartOpen } = useTravel();

  const destinations = [
    'Bali',
    'Switzerland',
    'Amalfi Coast',
    'Kyoto',
    'Dubai',
    'Santorini',
    'Paris',
    'Iceland',
    'India',
    'Maldives',
    'Cappadocia',
    'Serengeti',
    'Cape Town',
    'New York',
    'Peru',
    'New Zealand',
  ];
  const [selectedDest, setSelectedDest] = useState('Bali');
  const [travelers, setTravelers] = useState(2);
  const [nights, setNights] = useState(4);
  const [startDate, setStartDate] = useState('2026-11-25');

  const isDestMatch = (dest: string, country: string, target: string) => {
    const t = target.toLowerCase();
    return dest.toLowerCase().includes(t) || country.toLowerCase().includes(t);
  };

  const availableHotels = HOTELS_DATA.filter((h) =>
    isDestMatch(h.destination, h.country, selectedDest)
  );
  const availableRestaurants = RESTAURANTS_DATA.filter((r) =>
    isDestMatch(r.destination, r.country, selectedDest)
  );
  const availableRefreshments = REFRESHMENTS_DATA.filter((rf) =>
    isDestMatch(rf.destination, rf.country, selectedDest)
  );

  const [selectedHotelId, setSelectedHotelId] = useState<string>(
    availableHotels[0]?.id || HOTELS_DATA[0].id
  );
  const [selectedRestaurantId, setSelectedRestaurantId] = useState<string | null>(
    availableRestaurants[0]?.id || null
  );
  const [selectedRefreshmentIds, setSelectedRefreshmentIds] = useState<string[]>([
    availableRefreshments[0]?.id || REFRESHMENTS_DATA[0].id,
  ]);

  const handleDestinationSelect = (dest: string) => {
    setSelectedDest(dest);
    const matchingHotels = HOTELS_DATA.filter((h) => isDestMatch(h.destination, h.country, dest));
    if (matchingHotels.length > 0) {
      setSelectedHotelId(matchingHotels[0].id);
    }
    const matchingRestaurants = RESTAURANTS_DATA.filter((r) => isDestMatch(r.destination, r.country, dest));
    if (matchingRestaurants.length > 0) {
      setSelectedRestaurantId(matchingRestaurants[0].id);
    } else {
      setSelectedRestaurantId(null);
    }
    const matchingRefreshments = REFRESHMENTS_DATA.filter((rf) => isDestMatch(rf.destination, rf.country, dest));
    if (matchingRefreshments.length > 0) {
      setSelectedRefreshmentIds([matchingRefreshments[0].id]);
    }
  };

  const [selectedAddons, setSelectedAddons] = useState<string[]>(['addon-guide']);

  const activityAddons = [
    {
      id: 'addon-guide',
      title: 'Private English-Speaking Destination Guide',
      priceUSD: 180,
      description: 'Dedicated personal companion for your itinerary',
    },
    {
      id: 'addon-photo',
      title: 'Vacation Photography Session (50 HD Photos)',
      priceUSD: 240,
      description: 'Professional photographer at iconic locations',
    },
    {
      id: 'addon-transfer',
      title: 'Executive Airport Transfers (Arrival & Departure)',
      priceUSD: 160,
      description: 'Private chauffeur meet & greet service',
    },
  ];

  const chosenHotel =
    HOTELS_DATA.find((h) => h.id === selectedHotelId) || HOTELS_DATA[0];
  const chosenRestaurant = RESTAURANTS_DATA.find((r) => r.id === selectedRestaurantId);
  const chosenRefreshments = REFRESHMENTS_DATA.filter((r) =>
    selectedRefreshmentIds.includes(r.id)
  );

  const hotelTotalUSD = (chosenHotel ? chosenHotel.pricePerNightUSD : 0) * nights;
  const restaurantTotalUSD = chosenRestaurant
    ? chosenRestaurant.avgCostPerPersonUSD * travelers
    : 0;
  const refreshmentsTotalUSD = chosenRefreshments.reduce(
    (acc, curr) => acc + curr.priceUSD * (curr.isPack ? 1 : travelers),
    0
  );
  const addonsTotalUSD = activityAddons
    .filter((a) => selectedAddons.includes(a.id))
    .reduce((acc, curr) => acc + curr.priceUSD, 0);

  const subtotalUSD = hotelTotalUSD + restaurantTotalUSD + refreshmentsTotalUSD + addonsTotalUSD;
  const bundleDiscountUSD = Math.round(subtotalUSD * 0.15);
  const finalPriceUSD = subtotalUSD - bundleDiscountUSD;

  const toggleRefreshment = (id: string) => {
    setSelectedRefreshmentIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleBookCustomBundle = () => {
    addToCart({
      cartItemId: `bundle-${Date.now()}`,
      itemType: 'custom_bundle',
      referenceId: `custom-${selectedDest.toLowerCase()}`,
      title: `Custom ${selectedDest} Journey (${nights} Nights)`,
      destination: selectedDest,
      image: chosenHotel ? chosenHotel.featuredImage : 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      unitPriceUSD: finalPriceUSD,
      quantity: 1,
      selectedDate: startDate,
      guestsCount: travelers,
      specialRequests: `Stay: ${chosenHotel?.name} | Dining: ${chosenRestaurant?.name || 'None'} | Refreshments: ${chosenRefreshments.map((r) => r.name).join(', ')}`,
      bundleDetails: {
        hotelName: chosenHotel?.name,
        restaurantName: chosenRestaurant?.name,
        refreshmentsName: chosenRefreshments.map((r) => r.name),
      },
    });
    setIsCartOpen(true);
  };

  return (
    <section id="builder" className="container mx-auto px-4 lg:px-8 py-8 sm:py-12 border-t border-slate-200">
      {/* Heading */}
      <div className="text-left md:text-center max-w-2xl mx-auto mb-6 sm:mb-10">
        <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
          Custom Configurator
        </span>
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
          Build Your Custom Package
        </h2>
        <p className="text-slate-500 text-xs sm:text-sm mt-1">
          Combine hotel stays, dining reservations, refreshments, and excursions. Automatic <strong>15% bundle savings</strong> applied.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 items-start">
        {/* Left 2 Columns: Configurator Controls */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          {/* Step 1: Destination & Logistics */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2.5 sm:mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-slate-900 text-white text-[11px] font-semibold flex items-center justify-center">
                1
              </span>
              Destination & Dates
            </h3>

            {/* Destination Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-1.5 mb-3">
              {destinations.map((dest) => (
                <button
                  key={dest}
                  onClick={() => handleDestinationSelect(dest)}
                  className={`py-1.5 px-2 rounded-lg text-xs font-medium border transition-colors truncate ${
                    selectedDest === dest
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                  title={dest}
                >
                  {dest}
                </button>
              ))}
            </div>

            {/* Logistics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-200">
              <div>
                <label className="block text-[10px] font-semibold uppercase text-slate-500 mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-800 outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-semibold uppercase text-slate-500 mb-1">
                  Nights
                </label>
                <select
                  value={nights}
                  onChange={(e) => setNights(Number(e.target.value))}
                  className="w-full bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-800 outline-none cursor-pointer"
                >
                  {[2, 3, 4, 5, 7, 10, 14].map((n) => (
                    <option key={n} value={n}>
                      {n} Nights
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-semibold uppercase text-slate-500 mb-1">
                  Travelers
                </label>
                <select
                  value={travelers}
                  onChange={(e) => setTravelers(Number(e.target.value))}
                  className="w-full bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-800 outline-none cursor-pointer"
                >
                  {[1, 2, 3, 4, 6].map((n) => (
                    <option key={n} value={n}>
                      {n} Guest{n > 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Step 2: Choose Accommodation */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2.5 sm:mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-slate-900 text-white text-[11px] font-semibold flex items-center justify-center">
                2
              </span>
              Select Accommodation ({nights} Nights)
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {(availableHotels.length > 0 ? availableHotels : HOTELS_DATA.slice(0, 2)).map(
                (hotel) => {
                  const isSelected = selectedHotelId === hotel.id;
                  return (
                    <div
                      key={hotel.id}
                      onClick={() => setSelectedHotelId(hotel.id)}
                      className={`p-3 rounded-xl border cursor-pointer transition-colors flex gap-2.5 sm:gap-3 ${
                        isSelected
                          ? 'border-slate-900 bg-slate-50'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <img
                        src={hotel.featuredImage}
                        alt={hotel.name}
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg object-cover shrink-0"
                      />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] uppercase font-semibold text-slate-500">
                              {hotel.propertyType}
                            </span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-slate-900" />}
                          </div>
                          <h4 className="font-semibold text-xs text-slate-900 line-clamp-1">
                            {hotel.name}
                          </h4>
                        </div>
                        <div className="font-bold text-xs text-slate-900">
                          {formatPrice(hotel.pricePerNightUSD, currency)} / night
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          {/* Step 3: Add Dining Experience */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2.5 sm:mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-slate-900 text-white text-[11px] font-semibold flex items-center justify-center">
                3
              </span>
              Dining Reservation (Optional)
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {(availableRestaurants.length > 0 ? availableRestaurants : RESTAURANTS_DATA.slice(0, 2)).map(
                (rest) => {
                  const isSelected = selectedRestaurantId === rest.id;
                  return (
                    <div
                      key={rest.id}
                      onClick={() =>
                        setSelectedRestaurantId(isSelected ? null : rest.id)
                      }
                      className={`p-3 rounded-xl border cursor-pointer transition-colors flex gap-2.5 sm:gap-3 ${
                        isSelected
                          ? 'border-slate-900 bg-slate-50'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <img
                        src={rest.featuredImage}
                        alt={rest.name}
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg object-cover shrink-0"
                      />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] uppercase font-semibold text-slate-500">
                              {rest.ambience}
                            </span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-slate-900" />}
                          </div>
                          <h4 className="font-semibold text-xs text-slate-900 line-clamp-1">
                            {rest.name}
                          </h4>
                        </div>
                        <div className="font-bold text-xs text-slate-900">
                          {formatPrice(rest.avgCostPerPersonUSD, currency)} / guest
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          {/* Step 4: Refreshments */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2.5 sm:mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-slate-900 text-white text-[11px] font-semibold flex items-center justify-center">
                4
              </span>
              Refreshment Hampers & Pit Stops
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              {(availableRefreshments.length > 0 ? availableRefreshments : REFRESHMENTS_DATA.slice(0, 4)).map((refr) => {
                const isSelected = selectedRefreshmentIds.includes(refr.id);
                return (
                  <div
                    key={refr.id}
                    onClick={() => toggleRefreshment(refr.id)}
                    className={`p-2.5 rounded-xl border cursor-pointer transition-colors flex items-center justify-between gap-2.5 ${
                      isSelected
                        ? 'border-slate-900 bg-slate-50'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <img
                        src={refr.featuredImage}
                        alt={refr.name}
                        className="w-10 h-10 rounded-lg object-cover shrink-0"
                      />
                      <div className="truncate">
                        <h5 className="font-semibold text-xs text-slate-900 truncate">
                          {refr.name}
                        </h5>
                        <span className="text-[10px] text-slate-500">{refr.type}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-bold text-xs text-slate-900">
                        {formatPrice(refr.priceUSD, currency)}
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

          {/* Step 5: Guided Excursions */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2.5 sm:mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-slate-900 text-white text-[11px] font-semibold flex items-center justify-center">
                5
              </span>
              Trip Add-ons
            </h3>

            <div className="space-y-2">
              {activityAddons.map((addon) => {
                const isSelected = selectedAddons.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-2.5 sm:p-3 rounded-xl border cursor-pointer transition-colors flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'border-slate-900 bg-slate-50'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div>
                      <h5 className="font-semibold text-xs text-slate-900">
                        {addon.title}
                      </h5>
                      <p className="text-[11px] text-slate-500">{addon.description}</p>
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

        {/* Right Column: Summary & Checkout Card */}
        <div className="lg:sticky lg:top-24 bg-slate-900 text-white p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-4 sm:space-y-5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block">
                Custom Bundle
              </span>
              <h4 className="text-base sm:text-lg font-bold">{selectedDest} Journey</h4>
            </div>
            <span className="bg-slate-800 text-slate-300 text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded">
              {nights}N • {travelers} Guests
            </span>
          </div>

          {/* Breakdown Items */}
          <div className="space-y-2 text-xs">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-medium text-slate-200 flex items-center gap-1.5">
                  <Hotel className="w-3.5 h-3.5 text-slate-400" />
                  {chosenHotel?.name || 'Hotel Stay'}
                </span>
                <span className="text-[10px] text-slate-400">
                  {nights} Nights
                </span>
              </div>
              <span className="font-semibold text-slate-200">
                {formatPrice(hotelTotalUSD, currency)}
              </span>
            </div>

            {chosenRestaurant && (
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-medium text-slate-200 flex items-center gap-1.5">
                    <UtensilsCrossed className="w-3.5 h-3.5 text-slate-400" />
                    {chosenRestaurant.name}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    Dinner for {travelers}
                  </span>
                </div>
                <span className="font-semibold text-slate-200">
                  {formatPrice(restaurantTotalUSD, currency)}
                </span>
              </div>
            )}

            {chosenRefreshments.length > 0 && (
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-medium text-slate-200 flex items-center gap-1.5">
                    <Coffee className="w-3.5 h-3.5 text-slate-400" />
                    Refreshments ({chosenRefreshments.length})
                  </span>
                </div>
                <span className="font-semibold text-slate-200">
                  {formatPrice(refreshmentsTotalUSD, currency)}
                </span>
              </div>
            )}

            {addonsTotalUSD > 0 && (
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-medium text-slate-200 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-slate-400" />
                    Add-ons ({selectedAddons.length})
                  </span>
                </div>
                <span className="font-semibold text-slate-200">
                  {formatPrice(addonsTotalUSD, currency)}
                </span>
              </div>
            )}
          </div>

          {/* Pricing Totals */}
          <div className="pt-3 border-t border-slate-800 space-y-1.5 text-xs">
            <div className="flex justify-between text-slate-400">
              <span>Standard Subtotal:</span>
              <span>{formatPrice(subtotalUSD, currency)}</span>
            </div>
            <div className="flex justify-between text-slate-300 font-medium">
              <span>Bundle Savings (15%):</span>
              <span>-{formatPrice(bundleDiscountUSD, currency)}</span>
            </div>
            <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-slate-800">
              <span>Total Bundle:</span>
              <span className="text-lg sm:text-xl font-bold text-white">
                {formatPrice(finalPriceUSD, currency)}
              </span>
            </div>
          </div>

          {/* Booking CTA Button */}
          <button
            onClick={handleBookCustomBundle}
            className="w-full bg-white hover:bg-slate-100 text-slate-900 font-semibold text-xs sm:text-sm py-3 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Book Custom Bundle</span>
          </button>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
            <span>Best price guarantee • Free cancellation</span>
          </div>
        </div>
      </div>
    </section>
  );
};
