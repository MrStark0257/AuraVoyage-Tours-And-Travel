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
  Plus,
  Minus,
  Edit3,
  Star,
  Coffee,
  Navigation,
} from 'lucide-react';

interface DestinationChoice {
  id: string;
  name: string;
  city: string;
  country: string;
  region: 'India' | 'Europe' | 'Asia' | 'Americas, Africa & Oceania' | '1-Month Expeditions';
  isOneMonth?: boolean;
}

const EXTENDED_DESTINATIONS: DestinationChoice[] = [
  // --- India: Mountains & North ---
  {
    id: 'manali',
    name: 'Kullu Manali & Solang Valley',
    city: 'Manali',
    country: 'India',
    region: 'India',
  },
  {
    id: 'shimla',
    name: 'Shimla & Kufri Pine Ridges',
    city: 'Shimla',
    country: 'India',
    region: 'India',
  },
  {
    id: 'dharamshala',
    name: 'Dharamshala & McLeodganj',
    city: 'Dharamshala',
    country: 'India',
    region: 'India',
  },
  {
    id: 'kashmir',
    name: 'Kashmir Valley & Gulmarg Snow',
    city: 'Gulmarg & Srinagar',
    country: 'India',
    region: 'India',
  },
  {
    id: 'pahalgam',
    name: 'Pahalgam Lidder Valley',
    city: 'Pahalgam',
    country: 'India',
    region: 'India',
  },
  {
    id: 'ladakh',
    name: 'Leh Ladakh & Pangong Tso',
    city: 'Leh, Ladakh',
    country: 'India',
    region: 'India',
  },
  {
    id: 'rishikesh',
    name: 'Rishikesh Yoga & River Rapids',
    city: 'Rishikesh',
    country: 'India',
    region: 'India',
  },
  {
    id: 'mussoorie',
    name: 'Mussoorie Queen of Hills',
    city: 'Mussoorie',
    country: 'India',
    region: 'India',
  },

  // --- India: South, Coastal & Heritage ---
  {
    id: 'kerala-backwaters',
    name: 'Kerala Backwaters & Alleppey',
    city: 'Kumarakom & Alleppey',
    country: 'India',
    region: 'India',
  },
  {
    id: 'munnar',
    name: 'Munnar Tea Gardens & Waterfalls',
    city: 'Munnar',
    country: 'India',
    region: 'India',
  },
  {
    id: 'goa-north',
    name: 'North Goa (Calangute, Anjuna, Baga)',
    city: 'Calangute, Goa',
    country: 'India',
    region: 'India',
  },
  {
    id: 'goa-south',
    name: 'South Goa (Benaulim & Palolem)',
    city: 'Benaulim, Goa',
    country: 'India',
    region: 'India',
  },
  {
    id: 'udaipur',
    name: 'Udaipur City of Lakes',
    city: 'Udaipur, Rajasthan',
    country: 'India',
    region: 'India',
  },
  {
    id: 'jaipur',
    name: 'Jaipur Pink City & Amber Fort',
    city: 'Jaipur, Rajasthan',
    country: 'India',
    region: 'India',
  },
  {
    id: 'jaisalmer',
    name: 'Jaisalmer Golden Fort & Thar Desert',
    city: 'Jaisalmer, Rajasthan',
    country: 'India',
    region: 'India',
  },
  {
    id: 'agra',
    name: 'Agra & Taj Mahal Heritage',
    city: 'Agra, Uttar Pradesh',
    country: 'India',
    region: 'India',
  },
  {
    id: 'andaman',
    name: 'Andaman Islands & Havelock Beach',
    city: 'Havelock, Andaman',
    country: 'India',
    region: 'India',
  },
  {
    id: 'ooty',
    name: 'Ooty & Nilgiri Mountain Railway',
    city: 'Ooty, Tamil Nadu',
    country: 'India',
    region: 'India',
  },
  {
    id: 'spiti',
    name: 'Spiti Valley & Chandratal Lake',
    city: 'Kaza, Spiti Valley',
    country: 'India',
    region: 'India',
  },
  {
    id: 'kasol',
    name: 'Kasol, Tosh & Parvati Valley',
    city: 'Kasol, Himachal Pradesh',
    country: 'India',
    region: 'India',
  },
  {
    id: 'nainital',
    name: 'Nainital & Kumaon Lake District',
    city: 'Nainital, Uttarakhand',
    country: 'India',
    region: 'India',
  },
  {
    id: 'corbett',
    name: 'Jim Corbett National Park & Tigers',
    city: 'Ramnagar, Uttarakhand',
    country: 'India',
    region: 'India',
  },
  {
    id: 'varanasi',
    name: 'Varanasi Ancient Ghats & Ganga Dawn',
    city: 'Varanasi, Uttar Pradesh',
    country: 'India',
    region: 'India',
  },
  {
    id: 'darjeeling',
    name: 'Darjeeling & Kanchenjunga Sunrise',
    city: 'Darjeeling, West Bengal',
    country: 'India',
    region: 'India',
  },
  {
    id: 'gangtok',
    name: 'Gangtok & Tsomgo Lake',
    city: 'Gangtok, Sikkim',
    country: 'India',
    region: 'India',
  },
  {
    id: 'shillong',
    name: 'Shillong & Cherrapunji Root Bridges',
    city: 'Shillong, Meghalaya',
    country: 'India',
    region: 'India',
  },
  {
    id: 'coorg',
    name: 'Coorg Coffee Estates & Mist',
    city: 'Madikeri, Coorg',
    country: 'India',
    region: 'India',
  },
  {
    id: 'wayanad',
    name: 'Wayanad Rainforests & Treehouses',
    city: 'Wayanad, Kerala',
    country: 'India',
    region: 'India',
  },
  {
    id: 'gokarna',
    name: 'Gokarna Om Beach & Cliff Trek',
    city: 'Gokarna, Karnataka',
    country: 'India',
    region: 'India',
  },
  {
    id: 'kodaikanal',
    name: 'Kodaikanal Princess of Hill Stations',
    city: 'Kodaikanal, Tamil Nadu',
    country: 'India',
    region: 'India',
  },
  {
    id: 'jodhpur',
    name: 'Jodhpur Blue City & Mehrangarh Fort',
    city: 'Jodhpur, Rajasthan',
    country: 'India',
    region: 'India',
  },
  {
    id: 'ranthambore',
    name: 'Ranthambore Royal Bengal Tiger Safari',
    city: 'Sawai Madhopur, Rajasthan',
    country: 'India',
    region: 'India',
  },

  // --- Europe & Mediterranean ---
  {
    id: 'swiss-alps',
    name: 'Swiss Alps & Interlaken',
    city: 'Interlaken',
    country: 'Switzerland',
    region: 'Europe',
  },
  {
    id: 'zermatt',
    name: 'Zermatt & Matterhorn Glacier',
    city: 'Zermatt',
    country: 'Switzerland',
    region: 'Europe',
  },
  {
    id: 'paris',
    name: 'Paris Romance & Eiffel Tower',
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
    name: 'Venice Canals & Gondolas',
    city: 'Venice',
    country: 'Italy',
    region: 'Europe',
  },
  {
    id: 'rome',
    name: 'Rome Colosseum & Historic Center',
    city: 'Rome',
    country: 'Italy',
    region: 'Europe',
  },
  {
    id: 'santorini',
    name: 'Santorini Sunset Caldera',
    city: 'Santorini',
    country: 'Greece',
    region: 'Europe',
  },
  {
    id: 'iceland',
    name: 'Reykjavík & Blue Lagoon Hot Springs',
    city: 'Grindavík',
    country: 'Iceland',
    region: 'Europe',
  },
  {
    id: 'london',
    name: 'London & British Royalty',
    city: 'London',
    country: 'United Kingdom',
    region: 'Europe',
  },
  {
    id: 'barcelona',
    name: 'Barcelona Sagrada Familia & Beach',
    city: 'Barcelona',
    country: 'Spain',
    region: 'Europe',
  },
  {
    id: 'florence',
    name: 'Florence & Tuscan Renaissance',
    city: 'Florence',
    country: 'Italy',
    region: 'Europe',
  },
  {
    id: 'edinburgh',
    name: 'Edinburgh Royal Mile & Highlands',
    city: 'Edinburgh',
    country: 'United Kingdom',
    region: 'Europe',
  },
  {
    id: 'amsterdam',
    name: 'Amsterdam Canals & Museums',
    city: 'Amsterdam',
    country: 'Netherlands',
    region: 'Europe',
  },
  {
    id: 'prague',
    name: 'Prague Charles Bridge & Castle',
    city: 'Prague',
    country: 'Czech Republic',
    region: 'Europe',
  },

  // --- Asia & Middle East ---
  {
    id: 'tokyo',
    name: 'Tokyo Ginza & Shibuya Skyline',
    city: 'Tokyo',
    country: 'Japan',
    region: 'Asia',
  },
  {
    id: 'kyoto',
    name: 'Kyoto Arashiyama & Golden Pavilion',
    city: 'Kyoto',
    country: 'Japan',
    region: 'Asia',
  },
  {
    id: 'phuket',
    name: 'Phuket & Andaman Turquoise Waters',
    city: 'Phuket',
    country: 'Thailand',
    region: 'Asia',
  },
  {
    id: 'bangkok',
    name: 'Bangkok Grand Palaces & Temples',
    city: 'Bangkok',
    country: 'Thailand',
    region: 'Asia',
  },
  {
    id: 'bali',
    name: 'Bali (Ubud & Seminyak)',
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
    id: 'abu-dhabi',
    name: 'Abu Dhabi Grand Mosque & Louvre',
    city: 'Abu Dhabi',
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
    id: 'singapore',
    name: 'Singapore Marina Bay & Gardens',
    city: 'Singapore',
    country: 'Singapore',
    region: 'Asia',
  },
  {
    id: 'cappadocia',
    name: 'Cappadocia Hot Air Balloons & Caves',
    city: 'Cappadocia',
    country: 'Turkey',
    region: 'Asia',
  },
  {
    id: 'hanoi',
    name: 'Hanoi & Ha Long Bay Emerald Waters',
    city: 'Hanoi',
    country: 'Vietnam',
    region: 'Asia',
  },
  {
    id: 'seoul',
    name: 'Seoul Gyeongbokgung & Myeongdong',
    city: 'Seoul',
    country: 'South Korea',
    region: 'Asia',
  },
  {
    id: 'doha',
    name: 'Doha Museum of Islamic Art & Souq',
    city: 'Doha',
    country: 'Qatar',
    region: 'Asia',
  },

  // --- Americas, Africa & Oceania ---
  {
    id: 'cairo',
    name: 'Cairo Pyramids & Giza Sphinx',
    city: 'Cairo',
    country: 'Egypt',
    region: 'Americas, Africa & Oceania',
  },
  {
    id: 'sydney',
    name: 'Sydney Opera House & Harbour',
    city: 'Sydney',
    country: 'Australia',
    region: 'Americas, Africa & Oceania',
  },
  {
    id: 'morocco',
    name: 'Marrakech Medina & Atlas Mountains',
    city: 'Marrakech',
    country: 'Morocco',
    region: 'Americas, Africa & Oceania',
  },
  {
    id: 'rio',
    name: 'Rio de Janeiro Christ Redeemer & Copacabana',
    city: 'Rio de Janeiro',
    country: 'Brazil',
    region: 'Americas, Africa & Oceania',
  },
  {
    id: 'new-york',
    name: 'New York City & Central Park',
    city: 'New York',
    country: 'United States',
    region: 'Americas, Africa & Oceania',
  },
  {
    id: 'california',
    name: 'Los Angeles & California Pacific',
    city: 'Los Angeles',
    country: 'United States',
    region: 'Americas, Africa & Oceania',
  },
  {
    id: 'serengeti',
    name: 'Serengeti Big 5 Wildlife Safari',
    city: 'Serengeti',
    country: 'Tanzania',
    region: 'Americas, Africa & Oceania',
  },
  {
    id: 'cape-town',
    name: 'Cape Town & Table Mountain Drive',
    city: 'Cape Town',
    country: 'South Africa',
    region: 'Americas, Africa & Oceania',
  },
  {
    id: 'machu-picchu',
    name: 'Machu Picchu & Cusco Sacred Valley',
    city: 'Cusco',
    country: 'Peru',
    region: 'Americas, Africa & Oceania',
  },
  {
    id: 'queenstown',
    name: 'Queenstown Southern Alps',
    city: 'Queenstown',
    country: 'New Zealand',
    region: 'Americas, Africa & Oceania',
  },

  // --- 1-Month Grand Expeditions ---
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
  const { currency, activeCategory, addToCart, setIsCartOpen } = useTravel();

  // Destination Mode: catalog vs custom free-text route
  const [isCustomRouteMode, setIsCustomRouteMode] = useState<boolean>(false);
  const [customRouteText, setCustomRouteText] = useState<string>('');

  const [selectedRegion, setSelectedRegion] = useState<string>('India');
  const [selectedDestId, setSelectedDestId] = useState<string>('manali');

  // Days, Nights & Dates
  const [daysCount, setDaysCount] = useState<number>(6);
  const nightsCount = Math.max(1, daysCount - 1);
  const [startDate, setStartDate] = useState<string>('2026-11-20');
  const [travelers, setTravelers] = useState<number>(2);

  // Hotel Tier: 1-Star to 5-Star
  const [selectedStarTier, setSelectedStarTier] = useState<1 | 2 | 3 | 4 | 5>(3);

  // Meal Plan Preference
  const [selectedMealPlan, setSelectedMealPlan] = useState<'half_board' | 'all_inclusive' | 'breakfast' | 'none'>('half_board');

  // Transport Preference
  const [selectedTransport, setSelectedTransport] = useState<'cab_ac' | 'self_drive' | 'transfers_only'>('cab_ac');

  // Specific restaurant / cafe add-on
  const [selectedRestaurantId, setSelectedRestaurantId] = useState<string | null>(null);

  // Excursion & activity add-ons
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['addon-guide', 'addon-transfer']);

  // Currently selected destination
  const currentDest = useMemo(() => {
    return EXTENDED_DESTINATIONS.find((d) => d.id === selectedDestId) || EXTENDED_DESTINATIONS[0];
  }, [selectedDestId]);

  const activeDestinationTitle = isCustomRouteMode && customRouteText.trim()
    ? customRouteText.trim()
    : currentDest.name;

  const activeDestinationCountry = isCustomRouteMode ? 'Custom Route' : currentDest.country;

  // Calculate return date
  const returnDate = useMemo(() => {
    try {
      const d = new Date(startDate);
      d.setDate(d.getDate() + daysCount);
      return d.toISOString().split('T')[0];
    } catch {
      return '';
    }
  }, [startDate, daysCount]);

  // Matching Hotels based on Destination AND Star Tier
  const matchingHotelsForDest = useMemo(() => {
    const destCity = (currentDest.city || '').toLowerCase();
    const destCountry = (currentDest.country || '').toLowerCase();

    let list = HOTELS_DATA.filter((h) => {
      const hDest = h.destination.toLowerCase();
      const hCountry = h.country.toLowerCase();
      const matchesLocation =
        hDest.includes(destCity) ||
        destCity.split(',').some((p) => p.trim() && hDest.includes(p.trim())) ||
        hCountry === destCountry ||
        destCountry.includes(hCountry);
      return matchesLocation;
    });

    if (list.length === 0) {
      list = HOTELS_DATA;
    }

    // Filter by selected star tier
    const tierMatches = list.filter((h) => h.starRating === selectedStarTier);
    return tierMatches.length > 0 ? tierMatches : list;
  }, [currentDest, selectedStarTier]);

  const [selectedHotelId, setSelectedHotelId] = useState<string>(
    matchingHotelsForDest[0]?.id || 'hotel-26'
  );

  // Update selected hotel when tier or destination changes
  const chosenHotel = useMemo(() => {
    const matched = matchingHotelsForDest.find((h) => h.id === selectedHotelId);
    return matched || matchingHotelsForDest[0] || HOTELS_DATA[0];
  }, [matchingHotelsForDest, selectedHotelId]);

  // Matching Restaurants & Mountain Cafes
  const matchingRestaurantsForDest = useMemo(() => {
    const destCity = (currentDest.city || '').toLowerCase();
    const destName = (currentDest.name || '').toLowerCase();
    const destCountry = (currentDest.country || '').toLowerCase();

    // Priority 1: Match specific city or landmark tokens
    const cityTokens = `${destCity} ${destName}`
      .toLowerCase()
      .split(/[\s,]+/)
      .filter((t) => t.length > 3 && !['road', 'street', 'near', 'hotel', 'resort', 'park'].includes(t));

    const directMatches = RESTAURANTS_DATA.filter((r) => {
      const rDest = `${r.destination} ${r.name}`.toLowerCase();
      return cityTokens.some((token) => rDest.includes(token));
    });

    if (directMatches.length > 0) {
      return directMatches;
    }

    // Priority 2: Match country
    const countryMatches = RESTAURANTS_DATA.filter((r) => {
      return (
        r.country.toLowerCase().includes(destCountry) ||
        destCountry.includes(r.country.toLowerCase())
      );
    });

    return countryMatches.length > 0 ? countryMatches : RESTAURANTS_DATA.slice(0, 4);
  }, [currentDest]);

  const chosenRestaurant = useMemo(() => {
    return RESTAURANTS_DATA.find((r) => r.id === selectedRestaurantId);
  }, [selectedRestaurantId]);

  const handleDestinationSelect = (destId: string) => {
    setSelectedDestId(destId);
    setIsCustomRouteMode(false);
    const dest = EXTENDED_DESTINATIONS.find((d) => d.id === destId);
    if (dest?.isOneMonth) {
      setDaysCount(dest.id === 'month-india' ? 30 : 28);
    }
  };

  // Activity Add-ons
  const activityAddons = [
    {
      id: 'addon-guide',
      title: 'Dedicated Local Private Guide & Host',
      priceUSD: 140,
      icon: Compass,
      description: 'Expert local guide for personalized daily sightseeing, folklore, and hidden spots',
    },
    {
      id: 'addon-transfer',
      title: 'Airport / Railway Station VIP Meet & Greet',
      priceUSD: 85,
      icon: Car,
      description: 'Chauffeured arrival & departure transfers in sanitized AC vehicle',
    },
    {
      id: 'addon-photo',
      title: 'Vacation Photography Session (50 Edited HD Photos)',
      priceUSD: 160,
      icon: Camera,
      description: '2-hour private holiday photo session at top scenic viewpoints & heritage terraces',
    },
    {
      id: 'addon-scenic',
      title: 'Signature Scenic Experience (Rafting / Shikara / Snow Ride)',
      priceUSD: 75,
      icon: Sparkles,
      description: 'Reserved local signature adventure or scenic boat ride pass',
    },
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Dynamic Pricing Calculation
  // 1. Hotel Stay:
  const baseHotelPricePerNight = chosenHotel
    ? chosenHotel.pricePerNightUSD
    : selectedStarTier === 1 ? 16
    : selectedStarTier === 2 ? 26
    : selectedStarTier === 3 ? 48
    : selectedStarTier === 4 ? 115
    : 320;
  const totalHotelUSD = baseHotelPricePerNight * nightsCount;

  // 2. Meal Plan:
  // half_board: $25/guest/day, all_inclusive: $45/guest/day, breakfast: $10/guest/day, none: 0
  const mealRatePerDayUSD =
    selectedMealPlan === 'all_inclusive' ? 45 :
    selectedMealPlan === 'half_board' ? 25 :
    selectedMealPlan === 'breakfast' ? 10 : 0;
  const totalMealUSD = mealRatePerDayUSD * travelers * daysCount;

  // 3. Transport:
  // cab_ac: $40/day, self_drive: $20/day, transfers_only: $60 flat
  const totalTransportUSD =
    selectedTransport === 'cab_ac' ? 40 * daysCount :
    selectedTransport === 'self_drive' ? 20 * daysCount : 60;

  // 4. Restaurant reservation (if specific one picked):
  const totalSpecificRestUSD = chosenRestaurant
    ? chosenRestaurant.avgCostPerPersonUSD * travelers
    : 0;

  // 5. Excursion Add-ons:
  const totalAddonsUSD = activityAddons
    .filter((a) => selectedAddons.includes(a.id))
    .reduce((acc, curr) => acc + curr.priceUSD, 0);

  const subtotalUSD = totalHotelUSD + totalMealUSD + totalTransportUSD + totalSpecificRestUSD + totalAddonsUSD;
  const bundleDiscountUSD = Math.round(subtotalUSD * 0.15); // 15% custom bundle savings
  const finalPriceUSD = Math.max(50, subtotalUSD - bundleDiscountUSD);

  const handleBookCustomPackage = () => {
    const mealLabel =
      selectedMealPlan === 'all_inclusive' ? 'All Meals (Breakfast, Lunch & Dinner)' :
      selectedMealPlan === 'half_board' ? 'Breakfast & Dinner Included' :
      selectedMealPlan === 'breakfast' ? 'Breakfast Only' : 'Independent Dining';

    const transportLabel =
      selectedTransport === 'cab_ac' ? 'Private Dedicated AC Cab with Chauffeur' :
      selectedTransport === 'self_drive' ? 'Self-Drive Vehicle Assist' : 'Airport Station Transfers';

    addToCart({
      cartItemId: `custom-pkg-${Date.now()}`,
      itemType: 'custom_bundle',
      referenceId: `custom-${currentDest.id}-${daysCount}d`,
      title: `Custom ${activeDestinationTitle} (${daysCount} Days / ${nightsCount} Nights)`,
      destination: `${activeDestinationTitle}, ${activeDestinationCountry}`,
      image: chosenHotel ? chosenHotel.featuredImage : 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      unitPriceUSD: finalPriceUSD,
      quantity: 1,
      selectedDate: startDate,
      endDate: returnDate,
      guestsCount: travelers,
      specialRequests: `Stay: ${chosenHotel.name} (${selectedStarTier}★, ${nightsCount}N) | Meals: ${mealLabel} | Transport: ${transportLabel} | Addons: ${selectedAddons.length > 0 ? selectedAddons.join(', ') : 'None'}`,
      bundleDetails: {
        hotelName: chosenHotel.name,
        restaurantName: chosenRestaurant ? chosenRestaurant.name : mealLabel,
      },
    });
    setIsCartOpen(true);
  };

  const regionTabs = ['India', 'Europe', 'Asia', 'Americas, Africa & Oceania', '1-Month Expeditions'];

  const filteredDestinations = useMemo(() => {
    return EXTENDED_DESTINATIONS.filter((d) => d.region === selectedRegion);
  }, [selectedRegion]);

  return (
    <section id="builder" className="container mx-auto px-4 lg:px-8 py-8 sm:py-12 border-t border-slate-200 scroll-mt-28">
      {/* Heading */}
      <div className="text-left md:text-center max-w-3xl mx-auto mb-6 sm:mb-10">
        <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-1">
          Custom Package Studio
        </span>
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
          Create Your Own Tour Package
        </h2>
        <p className="text-slate-500 text-xs sm:text-sm mt-1 max-w-2xl mx-auto">
          Freedom to design your entire trip: pick any destination or custom route, exact days, 3★/4★/5★ hotel tier, meal plan, private cab, and activities with automatic <strong>15% bundle savings</strong>.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 items-start">
        {/* Left 2 Columns: Configurator Controls */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">

          {/* STEP 1: DESTINATION & PLACE SELECTION (UNLIMITED) */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 border-b border-slate-100 pb-2.5 gap-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-slate-900 text-white text-[11px] font-semibold flex items-center justify-center">
                  1
                </span>
                Choose Destination or Enter Custom Route
              </h3>

              {/* Toggle Custom Route Mode */}
              <button
                type="button"
                onClick={() => setIsCustomRouteMode(!isCustomRouteMode)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  isCustomRouteMode
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>{isCustomRouteMode ? 'Choose from Catalog' : '✏️ Type Custom Route'}</span>
              </button>
            </div>

            {/* Custom Free-Text Destination Input */}
            {isCustomRouteMode ? (
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 mb-3 space-y-2">
                <label className="block text-[11px] font-semibold text-slate-700">
                  Enter Your Custom Cities, Circuit or State:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={customRouteText}
                    onChange={(e) => setCustomRouteText(e.target.value)}
                    placeholder="e.g. Manali - Kasol - Jibhi - Tirthan Valley (or Paris - Lucerne - Milan)"
                    className="flex-1 bg-white px-3 py-2 rounded-lg border border-slate-200 text-xs font-medium text-slate-900 outline-none focus:border-slate-800"
                  />
                </div>
                <p className="text-[10px] text-slate-500">
                  Tip: You can customize any circuit across India or Worldwide with personal stays, cab, and dining.
                </p>
              </div>
            ) : (
              <div>
                {/* Region Tabs */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3 no-scrollbar border-b border-slate-100">
                  {regionTabs.map((region) => (
                    <button
                      key={region}
                      type="button"
                      onClick={() => {
                        setSelectedRegion(region);
                        const firstInRegion = EXTENDED_DESTINATIONS.find((d) => d.region === region);
                        if (firstInRegion) {
                          handleDestinationSelect(firstInRegion.id);
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

                {/* Destination Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-56 overflow-y-auto pr-1">
                  {filteredDestinations.map((dest) => {
                    const isSelected = selectedDestId === dest.id && !isCustomRouteMode;
                    return (
                      <button
                        key={dest.id}
                        type="button"
                        onClick={() => handleDestinationSelect(dest.id)}
                        className={`p-2 rounded-xl text-left border transition-all cursor-pointer ${
                          isSelected
                            ? 'border-slate-900 bg-slate-50 ring-1 ring-slate-900'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div className="font-semibold text-xs text-slate-900 line-clamp-1">
                          {dest.name}
                        </div>
                        <div className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5 truncate">
                          <MapPin className="w-2.5 h-2.5 text-slate-400 shrink-0" />
                          <span className="truncate">{dest.city}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* STEP 2: DURATION, DATES & TRAVELERS */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 border-b border-slate-100 pb-2 flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-slate-900 text-white text-[11px] font-semibold flex items-center justify-center">
                2
              </span>
              Trip Duration (Days & Nights) & Travelers
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
              {/* Stepper for Days */}
              <div>
                <label className="block text-[10px] font-semibold uppercase text-slate-500 mb-1 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-400" />
                  Trip Duration
                </label>
                <div className="flex items-center gap-1.5 bg-white p-1 rounded-lg border border-slate-200">
                  <button
                    type="button"
                    onClick={() => setDaysCount((prev) => Math.max(2, prev - 1))}
                    className="w-7 h-7 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center font-bold text-sm cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <div className="flex-1 text-center">
                    <span className="font-bold text-xs text-slate-900">{daysCount} Days</span>
                    <span className="block text-[9px] text-slate-400 font-medium">{nightsCount} Nights</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setDaysCount((prev) => Math.min(60, prev + 1))}
                    className="w-7 h-7 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center font-bold text-sm cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
                {/* Fast Day Presets */}
                <div className="flex items-center gap-1 mt-1.5 flex-wrap">
                  {[3, 5, 7, 10, 14, 30].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDaysCount(d)}
                      className={`text-[9px] px-1.5 py-0.5 rounded font-semibold cursor-pointer ${
                        daysCount === d
                          ? 'bg-slate-900 text-white'
                          : 'bg-slate-200/80 hover:bg-slate-300 text-slate-700'
                      }`}
                    >
                      {d}D
                    </button>
                  ))}
                </div>
              </div>

              {/* Start Date */}
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
                <span className="block text-[10px] text-slate-500 mt-1.5">
                  End Date: <strong className="text-slate-800">{returnDate}</strong>
                </span>
              </div>

              {/* Travelers */}
              <div>
                <label className="block text-[10px] font-semibold uppercase text-slate-500 mb-1">
                  Travelers / Guests
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
                  <option value={6}>6+ Guests (Private Group)</option>
                </select>
                <span className="block text-[10px] text-slate-400 mt-1.5">
                  Private tailored rooming
                </span>
              </div>
            </div>
          </div>

          {/* STEP 3: HOTEL CATEGORY (3★, 4★, 5★) */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-slate-900 text-white text-[11px] font-semibold flex items-center justify-center">
                  3
                </span>
                Choose Accommodation Star Tier ({nightsCount} Nights)
              </h3>
              <span className="text-[11px] font-semibold text-slate-600">
                Selected: {selectedStarTier}-Star Stays
              </span>
            </div>

            {/* Star Tier Selector Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-2.5 mb-4">
              {[
                {
                  tier: 1,
                  label: '1★ Backpacker & Inn',
                  tag: 'Backpacker',
                  desc: 'Clean hostels, village homestays & dorms.',
                  badgeColor: 'text-amber-500',
                },
                {
                  tier: 2,
                  label: '2★ Standard Lodge',
                  tag: 'Budget Value',
                  desc: 'Private rooms, attached bath & tourist lodges.',
                  badgeColor: 'text-amber-500',
                },
                {
                  tier: 3,
                  label: '3★ Cozy & Comfort',
                  tag: 'Smart Economy',
                  desc: 'Boutique stays, chalets & havelis with breakfast.',
                  badgeColor: 'text-amber-500',
                },
                {
                  tier: 4,
                  label: '4★ Premium Resort',
                  tag: 'Most Popular',
                  desc: 'Scenic resorts with pool, spa & lavish breakfast.',
                  badgeColor: 'text-amber-500',
                },
                {
                  tier: 5,
                  label: '5★ Luxury Palace',
                  tag: 'Ultra Luxury',
                  desc: 'Palaces, overwater villas & butler service.',
                  badgeColor: 'text-amber-500',
                },
              ].map((item) => {
                const isSelected = selectedStarTier === item.tier;
                return (
                  <div
                    key={item.tier}
                    onClick={() => {
                      setSelectedStarTier(item.tier as any);
                      const matching = matchingHotelsForDest.find((h) => h.starRating === item.tier);
                      if (matching) setSelectedHotelId(matching.id);
                    }}
                    className={`p-2.5 sm:p-3 rounded-xl border cursor-pointer transition-all flex flex-col justify-between last:col-span-2 sm:last:col-span-1 ${
                      isSelected
                        ? 'border-slate-900 bg-slate-50 ring-2 ring-slate-900 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-amber-500 font-bold text-xs">
                          {'★'.repeat(item.tier)}
                        </span>
                        <span className="text-[8px] font-semibold uppercase tracking-wider bg-slate-200/80 px-1 py-0.5 rounded text-slate-700">
                          {item.tag}
                        </span>
                      </div>
                      <h4 className="font-bold text-[11px] sm:text-xs text-slate-900 leading-tight">{item.label}</h4>
                      <p className="text-[10px] text-slate-500 mt-1 leading-snug">{item.desc}</p>
                    </div>

                    <div className="mt-2 pt-2 border-t border-slate-200/60 flex items-center justify-between">
                      <span className="text-[10px] font-medium text-slate-600">
                        {isSelected ? '✓ Selected' : 'Choose Tier'}
                      </span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-slate-900" />}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Matching Hotels in that Star Tier */}
            <div className="space-y-2">
              <label className="block text-[10px] font-semibold uppercase text-slate-500">
                Recommended Stays in {activeDestinationTitle} ({selectedStarTier}-Star):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {matchingHotelsForDest.map((hotel) => {
                  const isSelected = selectedHotelId === hotel.id;
                  return (
                    <div
                      key={hotel.id}
                      onClick={() => setSelectedHotelId(hotel.id)}
                      className={`p-2.5 rounded-xl border cursor-pointer transition-all flex gap-2.5 ${
                        isSelected
                          ? 'border-slate-900 bg-slate-50 ring-1 ring-slate-900'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <img
                        src={hotel.featuredImage}
                        alt={hotel.name}
                        className="w-14 h-14 rounded-lg object-cover shrink-0"
                      />
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] uppercase font-bold text-slate-500">
                              {'★'.repeat(hotel.starRating)} {hotel.propertyType}
                            </span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-slate-900" />}
                          </div>
                          <h5 className="font-semibold text-xs text-slate-900 truncate">
                            {hotel.name}
                          </h5>
                          <p className="text-[10px] text-slate-500 truncate">{hotel.destination}</p>
                        </div>
                        <div className="text-[11px] font-bold text-slate-900 mt-1">
                          {formatPrice(hotel.pricePerNightUSD, currency)} <span className="text-[9px] font-normal text-slate-500">/ night</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* STEP 4: MEAL PLAN & CAFE RESERVATIONS */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 border-b border-slate-100 pb-2 flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-slate-900 text-white text-[11px] font-semibold flex items-center justify-center">
                4
              </span>
              Food Plan & Mountain Cafes
            </h3>

            {/* Meal Plan Options */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
              {[
                {
                  id: 'half_board',
                  label: 'Breakfast & Dinner',
                  tag: 'Most Popular',
                  desc: 'Daily morning buffet + hot evening dinner at stay',
                },
                {
                  id: 'all_inclusive',
                  label: 'All Meals (B + L + D)',
                  tag: 'Full Comfort',
                  desc: 'All 3 daily meals included with local cuisines',
                },
                {
                  id: 'breakfast',
                  label: 'Breakfast Only',
                  tag: 'Flexible Day',
                  desc: 'Complimentary morning breakfast; explore cafes freely',
                },
                {
                  id: 'none',
                  label: 'Self-Dining',
                  tag: 'Independent',
                  desc: 'Explore street food, cafes & dhabas on your own',
                },
              ].map((plan) => {
                const isSelected = selectedMealPlan === plan.id;
                return (
                  <div
                    key={plan.id}
                    onClick={() => setSelectedMealPlan(plan.id as any)}
                    className={`p-2.5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'border-slate-900 bg-slate-50 ring-1 ring-slate-900'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div>
                      <span className="text-[9px] font-bold uppercase text-slate-500 block mb-0.5">
                        {plan.tag}
                      </span>
                      <h4 className="font-semibold text-xs text-slate-900">{plan.label}</h4>
                      <p className="text-[10px] text-slate-500 mt-1 leading-snug">{plan.desc}</p>
                    </div>
                    <div className="mt-2 text-right">
                      {isSelected ? (
                        <span className="text-[10px] font-bold text-slate-900">✓ Chosen</span>
                      ) : (
                        <span className="text-[10px] text-slate-400">Select</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Optional Specific Restaurant / Cafe Booking */}
            <div>
              <label className="block text-[10px] font-semibold uppercase text-slate-500 mb-1.5 flex items-center gap-1">
                <Coffee className="w-3.5 h-3.5 text-slate-400" />
                Add Reserved Table at Top Local Cafe / Restaurant:
              </label>
              <div className="space-y-2">
                <div
                  onClick={() => setSelectedRestaurantId(null)}
                  className={`p-2 rounded-lg border text-xs cursor-pointer flex items-center justify-between ${
                    selectedRestaurantId === null
                      ? 'border-slate-900 bg-slate-50 font-semibold text-slate-900'
                      : 'border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <span>No Special Table Reservation (Standard Dining Only)</span>
                  {selectedRestaurantId === null && <Check className="w-3.5 h-3.5 text-slate-900" />}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {matchingRestaurantsForDest.slice(0, 4).map((rest) => {
                    const isSelected = selectedRestaurantId === rest.id;
                    return (
                      <div
                        key={rest.id}
                        onClick={() => setSelectedRestaurantId(rest.id)}
                        className={`p-2 rounded-lg border cursor-pointer flex items-center justify-between gap-2 ${
                          isSelected
                            ? 'border-slate-900 bg-slate-50'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div className="truncate">
                          <h5 className="font-semibold text-xs text-slate-900 truncate">{rest.name}</h5>
                          <span className="text-[10px] text-slate-500">{rest.ambience} • {formatPrice(rest.avgCostPerPersonUSD, currency)}/guest</span>
                        </div>
                        {isSelected && <Check className="w-3.5 h-3.5 text-slate-900 shrink-0" />}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* STEP 5: TRANSPORTATION & SIGHTSEEING CAB */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 border-b border-slate-100 pb-2 flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-slate-900 text-white text-[11px] font-semibold flex items-center justify-center">
                5
              </span>
              Transportation & Local Sightseeing Cab
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-4">
              {[
                {
                  id: 'cab_ac',
                  label: 'Dedicated Private AC Cab / SUV',
                  tag: 'Most Recommended',
                  desc: 'Dedicated chauffeur for all daily excursions, scenic viewpoints, and transfers.',
                },
                {
                  id: 'self_drive',
                  label: 'Self-Drive Vehicle Assist',
                  tag: 'Independent',
                  desc: 'Hassle-free sanitized SUV/Sedan delivery at airport/station with full insurance.',
                },
                {
                  id: 'transfers_only',
                  label: 'Station / Airport Transfers Only',
                  tag: 'Economy',
                  desc: 'Pick and drop transfers only; explore local towns on foot or local cabs.',
                },
              ].map((trans) => {
                const isSelected = selectedTransport === trans.id;
                return (
                  <div
                    key={trans.id}
                    onClick={() => setSelectedTransport(trans.id as any)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'border-slate-900 bg-slate-50 ring-1 ring-slate-900'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div>
                      <span className="text-[9px] font-bold uppercase text-slate-500 block mb-0.5">
                        {trans.tag}
                      </span>
                      <h4 className="font-semibold text-xs text-slate-900">{trans.label}</h4>
                      <p className="text-[10px] text-slate-500 mt-1 leading-snug">{trans.desc}</p>
                    </div>
                    <div className="mt-2.5 pt-2 border-t border-slate-200/60 flex items-center justify-between">
                      <span className="text-[10px] font-medium text-slate-600">
                        {isSelected ? '✓ Chosen' : 'Select'}
                      </span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-slate-900" />}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Excursions & VIP Activities */}
            <div className="space-y-2">
              <label className="block text-[10px] font-semibold uppercase text-slate-500">
                Add Signature Experiences & Guides:
              </label>
              {activityAddons.map((addon) => {
                const isSelected = selectedAddons.includes(addon.id);
                const Icon = addon.icon;
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-2.5 sm:p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'border-slate-900 bg-slate-50 ring-1 ring-slate-900'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${isSelected ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'}`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-xs text-slate-900">{addon.title}</h5>
                        <p className="text-[10px] text-slate-500">{addon.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-bold text-xs text-slate-900">
                        +{formatPrice(addon.priceUSD, currency)}
                      </span>
                      <div className={`w-4 h-4 rounded flex items-center justify-center ${isSelected ? 'bg-slate-900 text-white' : 'border border-slate-300'}`}>
                        {isSelected && <Check className="w-3 h-3" />}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Live Package Bill & Confirmation Card */}
        <div className="lg:sticky lg:top-24 bg-slate-900 text-white p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-4 shadow-xl">
          <div className="border-b border-slate-800 pb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block mb-0.5">
              Custom Package Summary
            </span>
            <h4 className="text-base sm:text-lg font-bold leading-tight truncate">
              {activeDestinationTitle}
            </h4>
            <div className="flex items-center gap-2 mt-1.5 text-[11px] text-slate-300">
              <span className="bg-slate-800 px-2 py-0.5 rounded font-mono">
                {daysCount} Days / {nightsCount} Nights
              </span>
              <span>•</span>
              <span>{travelers} Guest{travelers > 1 ? 's' : ''}</span>
            </div>
            <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
              <Calendar className="w-3 h-3 text-slate-500" />
              <span>{startDate} to {returnDate}</span>
            </div>
          </div>

          {/* Itemized Breakdown */}
          <div className="space-y-2.5 text-xs">
            {/* Stay Item */}
            <div className="flex justify-between items-start gap-2">
              <div className="min-w-0">
                <span className="font-medium text-slate-200 flex items-center gap-1.5 truncate">
                  <Hotel className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{chosenHotel.name}</span>
                </span>
                <span className="text-[10px] text-slate-400 block ml-5">
                  {'★'.repeat(selectedStarTier)} {selectedStarTier}-Star • {nightsCount} Nights
                </span>
              </div>
              <span className="font-semibold text-slate-200 shrink-0">
                {formatPrice(totalHotelUSD, currency)}
              </span>
            </div>

            {/* Meal Plan Item */}
            {totalMealUSD > 0 && (
              <div className="flex justify-between items-start gap-2">
                <div className="min-w-0">
                  <span className="font-medium text-slate-200 flex items-center gap-1.5 truncate">
                    <UtensilsCrossed className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Food Plan ({selectedMealPlan.replace('_', ' ').toUpperCase()})</span>
                  </span>
                  <span className="text-[10px] text-slate-400 block ml-5">
                    {daysCount} Days for {travelers} Guests
                  </span>
                </div>
                <span className="font-semibold text-slate-200 shrink-0">
                  {formatPrice(totalMealUSD, currency)}
                </span>
              </div>
            )}

            {/* Transport Item */}
            <div className="flex justify-between items-start gap-2">
              <div className="min-w-0">
                <span className="font-medium text-slate-200 flex items-center gap-1.5 truncate">
                  <Car className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">
                    {selectedTransport === 'cab_ac' ? 'Private AC Cab + Sightseeing' :
                     selectedTransport === 'self_drive' ? 'Self-Drive Vehicle' : 'Transfers Only'}
                  </span>
                </span>
                <span className="text-[10px] text-slate-400 block ml-5">
                  {daysCount} Days coverage
                </span>
              </div>
              <span className="font-semibold text-slate-200 shrink-0">
                {formatPrice(totalTransportUSD, currency)}
              </span>
            </div>

            {/* Reserved Restaurant (if picked) */}
            {chosenRestaurant && (
              <div className="flex justify-between items-start gap-2">
                <div className="min-w-0">
                  <span className="font-medium text-slate-200 flex items-center gap-1.5 truncate">
                    <Coffee className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{chosenRestaurant.name}</span>
                  </span>
                  <span className="text-[10px] text-slate-400 block ml-5">
                    Reserved table for {travelers}
                  </span>
                </div>
                <span className="font-semibold text-slate-200 shrink-0">
                  {formatPrice(totalSpecificRestUSD, currency)}
                </span>
              </div>
            )}

            {/* Excursions */}
            {totalAddonsUSD > 0 && (
              <div className="flex justify-between items-start gap-2">
                <div className="min-w-0">
                  <span className="font-medium text-slate-200 flex items-center gap-1.5 truncate">
                    <Sparkles className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Experiences ({selectedAddons.length})</span>
                  </span>
                </div>
                <span className="font-semibold text-slate-200 shrink-0">
                  {formatPrice(totalAddonsUSD, currency)}
                </span>
              </div>
            )}
          </div>

          {/* Pricing Math */}
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
                <span>Custom Package Total:</span>
                <span className="block text-[10px] font-normal text-slate-400">All taxes & permits included</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold text-white">
                {formatPrice(finalPriceUSD, currency)}
              </span>
            </div>
          </div>

          {/* Booking CTA Button */}
          <button
            onClick={handleBookCustomPackage}
            className="w-full bg-white hover:bg-slate-100 text-slate-900 font-semibold text-xs sm:text-sm py-3 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Book Custom Package ({formatPrice(finalPriceUSD, currency)})</span>
          </button>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
            <span>Best price guarantee • Free cancellation up to 48h</span>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Quick Tally Bar (< lg only when activeCategory === 'builder') */}
      {activeCategory === 'builder' && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-3 z-30 shadow-2xl flex items-center justify-between gap-3 animate-in slide-in-from-bottom-2">
          <div className="min-w-0">
            <span className="text-[10px] uppercase font-bold text-slate-400 block truncate">
              {daysCount}D/{nightsCount}N • {activeDestinationTitle}
            </span>
            <span className="text-base font-bold text-white leading-tight">
              {formatPrice(finalPriceUSD, currency)}
            </span>
          </div>
          <button
            onClick={handleBookCustomPackage}
            className="bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs px-4 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 shrink-0 shadow-sm cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Book ({formatPrice(finalPriceUSD, currency)})</span>
          </button>
        </div>
      )}
    </section>
  );
};
