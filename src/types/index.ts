export type Currency = 'USD' | 'EUR' | 'GBP' | 'INR' | 'AED';

export interface CurrencyRate {
  symbol: string;
  rate: number; // multiplier relative to USD
}

export type CategoryType = 'all' | 'tours' | 'hotels' | 'restaurants' | 'refreshments' | 'builder';

export interface TourPackage {
  id: string;
  title: string;
  tagline: string;
  destination: string;
  country: string;
  region: 'India' | 'Europe' | 'Asia' | 'Americas' | 'Africa' | 'Middle East' | 'Oceania';
  durationDays: number;
  durationNights: number;
  groupSize: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  priceUSD: number;
  originalPriceUSD?: number;
  rating: number;
  reviewsCount: number;
  featuredImage: string;
  galleryImages: string[];
  badges: string[]; // e.g. "Best Seller", "Early Bird", "Luxury"
  theme: 'Adventure' | 'Cultural' | 'Honeymoon' | 'Luxury' | 'Beach' | 'Wildlife' | 'Family';
  overview: string;
  inclusions: string[];
  exclusions: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    meals: string;
    stay: string;
  }[];
  startDates: string[];
}

export interface Hotel {
  id: string;
  name: string;
  destination: string;
  country: string;
  starRating: number;
  rating: number;
  reviewsCount: number;
  pricePerNightUSD: number;
  originalPriceUSD?: number;
  featuredImage: string;
  galleryImages: string[];
  propertyType: 'Luxury Resort' | 'Boutique Hotel' | 'Private Villa' | 'Mountain Chalet' | 'Heritage Palace';
  amenities: string[];
  roomTypes: {
    name: string;
    description: string;
    capacity: number;
    priceMultiplier: number;
    bedType: string;
  }[];
  address: string;
  cancellationPolicy: string;
  breakfastIncluded: boolean;
  highlight: string;
}

export interface Restaurant {
  id: string;
  name: string;
  destination: string;
  country: string;
  cuisine: string[];
  priceBracket: '$' | '$$' | '$$$' | '$$$$';
  rating: number;
  reviewsCount: number;
  featuredImage: string;
  galleryImages: string[];
  ambience:
    | 'Rooftop Lounge'
    | 'Oceanfront Sunset'
    | 'Michelin Fine Dining'
    | 'Historic Bistro'
    | 'Garden Terrace'
    | 'Riverside Cafe'
    | 'Mountain Cafe'
    | 'Beach Shack'
    | 'Heritage Tea Salon'
    | 'Desert Lounge'
    | 'Courtyard Dining';
  signatureDishes: string[];
  openingHours: string;
  address: string;
  dietaryOptions: string[]; // e.g. "Vegetarian Friendly", "Halal", "Vegan", "Gluten-Free"
  avgCostPerPersonUSD: number;
  dressCode: string;
  reservationSlots: string[];
}

export interface Refreshment {
  id: string;
  name: string;
  type: 'Artisan Cafe' | 'Scenic Highway Pit Stop' | 'Smoothie & Juice Bar' | 'Sunset Drinks Lounge' | 'Heritage Tea House' | 'Curated Travel Pack';
  destination: string;
  country: string;
  rating: number;
  reviewsCount: number;
  featuredImage: string;
  galleryImages?: string[];
  description: string;
  tags: string[];
  signatureItems?: string[];
  openingHours?: string;
  address?: string;
  atmosphere?: string;
  travelerTip?: string;
  priceBracket?: '$' | '$$' | '$$$';
  googleMapsUrl?: string;
  // optional compatibility
  priceUSD?: number;
  itemsIncluded?: string[];
  caloriesOrPerk?: string;
  isPack?: boolean;
}

export interface CartItem {
  cartItemId: string;
  itemType: 'tour' | 'hotel' | 'restaurant' | 'refreshment' | 'custom_bundle';
  referenceId: string;
  title: string;
  destination: string;
  image: string;
  unitPriceUSD: number;
  quantity: number;
  selectedDate?: string;
  endDate?: string;
  guestsCount?: number;
  roomType?: string;
  timeSlot?: string;
  specialRequests?: string;
  bundleDetails?: {
    tourName?: string;
    hotelName?: string;
    restaurantName?: string;
    refreshmentsName?: string[];
  };
}

export interface BookingConfirmation {
  bookingId: string;
  createdAt: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: CartItem[];
  subtotalUSD: number;
  discountUSD: number;
  taxUSD: number;
  totalUSD: number;
  paymentMethod: string;
  paymentStatus: 'Confirmed' | 'Pending' | 'Paid';
  voucherCodeUsed?: string;
}

export interface UserReview {
  id: string;
  userName: string;
  userAvatar: string;
  userLocation: string;
  rating: number;
  date: string;
  itemTitle: string;
  category: 'Tour' | 'Hotel' | 'Dining' | 'Overall Service';
  comment: string;
  verified: boolean;
}

