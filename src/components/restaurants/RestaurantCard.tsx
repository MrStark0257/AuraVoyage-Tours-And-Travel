import React from 'react';
import { Restaurant } from '../../types';
import { useTravel } from '../../context/TravelContext';
import { formatPrice } from '../../utils/formatters';
import {
  Heart,
  Star,
  MapPin,
  Clock,
  ChevronRight,
} from 'lucide-react';

interface RestaurantCardProps {
  restaurant: Restaurant;
  onOpenReserve: (restaurant: Restaurant) => void;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant,
  onOpenReserve,
}) => {
  const { currency, isInWishlist, toggleWishlist } = useTravel();
  const isFavorited = isInWishlist(restaurant.id);

  return (
    <div
      onClick={() => onOpenReserve(restaurant)}
      className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden hover:border-slate-300 transition-colors flex flex-col cursor-pointer"
    >
      {/* Top Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={restaurant.featuredImage}
          alt={restaurant.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/10" />

        {/* Minimalist Ambience & Price Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="bg-slate-900/85 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-0.5 rounded">
            {restaurant.ambience}
          </span>
          <span className="bg-white text-slate-900 text-[10px] font-bold px-1.5 py-0.5 rounded">
            {restaurant.priceBracket}
          </span>
        </div>

        {/* Favorite Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(restaurant.id, restaurant.name);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-colors z-10 ${
            isFavorited
              ? 'bg-rose-500 text-white'
              : 'bg-black/30 text-white hover:bg-white hover:text-slate-900'
          }`}
          aria-label="Save to Wishlist"
        >
          <Heart className={`w-3.5 h-3.5 ${isFavorited ? 'fill-current' : ''}`} />
        </button>

        {/* Destination Location */}
        <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1 text-white text-xs font-medium bg-slate-900/75 backdrop-blur-sm px-2.5 py-0.5 rounded">
          <MapPin className="w-3 h-3 text-slate-300" />
          <span>{restaurant.destination}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating */}
          <div className="flex items-center justify-between text-xs mb-1.5">
            <div className="flex items-center gap-1 font-semibold text-slate-700">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{restaurant.rating.toFixed(2)}</span>
              <span className="text-slate-400 font-normal">
                ({restaurant.reviewsCount})
              </span>
            </div>
            <span className="text-slate-500 text-[11px]">
              Avg {formatPrice(restaurant.avgCostPerPersonUSD, currency)} / guest
            </span>
          </div>

          {/* Restaurant Name */}
          <h3 className="text-base font-bold text-slate-900 group-hover:text-slate-700 transition-colors line-clamp-1 mb-1">
            {restaurant.name}
          </h3>

          {/* Cuisines */}
          <p className="text-xs text-slate-600 font-medium mb-3">
            {restaurant.cuisine.slice(0, 2).join(' • ')}
          </p>

          {/* Signature Dish Highlights */}
          <div className="mb-3 space-y-1">
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Specialties
            </span>
            {restaurant.signatureDishes.slice(0, 2).map((dish, i) => (
              <div key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                <span className="text-slate-400 shrink-0">•</span>
                <span className="line-clamp-1">{dish}</span>
              </div>
            ))}
          </div>

          {/* Dietary Badges */}
          <div className="flex flex-wrap gap-1 mb-3">
            {restaurant.dietaryOptions.slice(0, 2).map((opt, i) => (
              <span
                key={i}
                className="bg-slate-100 text-slate-600 text-[10px] font-medium px-2 py-0.5 rounded"
              >
                {opt}
              </span>
            ))}
          </div>
        </div>

        {/* Footer with Reservation Button */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1 text-[11px] text-slate-500 min-w-0">
            <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="line-clamp-1">{restaurant.openingHours.split(',')[0]}</span>
          </div>

          <button
            onClick={() => onOpenReserve(restaurant)}
            className="px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs transition-colors flex items-center gap-1 shrink-0 cursor-pointer"
          >
            <span>Reserve</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
