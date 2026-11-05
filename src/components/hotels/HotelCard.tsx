import React, { useState } from 'react';
import { Hotel } from '../../types';
import { useTravel } from '../../context/TravelContext';
import { formatPrice, calculateDiscount } from '../../utils/formatters';
import {
  Heart,
  Star,
  MapPin,
  Coffee,
  ArrowRight,
  ShieldCheck,
  Building,
} from 'lucide-react';

interface HotelCardProps {
  hotel: Hotel;
  onOpenBooking: (hotel: Hotel) => void;
}

export const HotelCard: React.FC<HotelCardProps> = ({ hotel, onOpenBooking }) => {
  const { currency, isInWishlist, toggleWishlist } = useTravel();
  const [imageIndex, setImageIndex] = useState(0);

  const isFavorited = isInWishlist(hotel.id);
  const discount = hotel.originalPriceUSD
    ? calculateDiscount(hotel.originalPriceUSD, hotel.pricePerNightUSD)
    : 0;

  return (
    <div
      onClick={() => onOpenBooking(hotel)}
      className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden hover:border-slate-300 transition-colors flex flex-col cursor-pointer"
    >
      {/* Top Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={hotel.galleryImages[imageIndex] || hotel.featuredImage}
          alt={hotel.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/10" />

        {/* Minimalist Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="bg-slate-900/90 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded flex items-center gap-1">
            <span className="text-amber-400">{'★'.repeat(hotel.starRating)}</span>
            <span>{hotel.starRating}-Star</span>
          </span>
          {discount > 0 && (
            <span className="bg-white text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
              {discount}% off
            </span>
          )}
        </div>

        {/* Favorite Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(hotel.id, hotel.name);
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

        {/* Property Type Badge */}
        <div className="absolute bottom-3 left-3 z-10 text-white text-[10px] font-medium bg-slate-900/80 backdrop-blur-sm px-2 py-0.5 rounded flex items-center gap-1">
          <span>{hotel.propertyType}</span>
        </div>

        {/* Destination Location */}
        <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1 text-white text-xs font-medium bg-slate-900/75 backdrop-blur-sm px-2.5 py-0.5 rounded">
          <MapPin className="w-3 h-3 text-slate-300" />
          <span>{hotel.destination}</span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating */}
          <div className="flex items-center justify-between text-xs mb-1.5">
            <div className="flex items-center gap-1 font-semibold text-slate-700">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{hotel.rating.toFixed(2)}</span>
              <span className="text-slate-400 font-normal">({hotel.reviewsCount})</span>
            </div>
            {hotel.breakfastIncluded && (
              <span className="text-slate-600 text-[11px] font-medium flex items-center gap-1">
                Breakfast incl.
              </span>
            )}
          </div>

          {/* Hotel Name */}
          <h3 className="text-base font-bold text-slate-900 group-hover:text-slate-700 transition-colors line-clamp-1 mb-1">
            {hotel.name}
          </h3>

          {/* Hotel Highlight */}
          <p className="text-xs text-slate-500 line-clamp-1 mb-3">
            {hotel.highlight}
          </p>

          {/* Amenities Badges */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {hotel.amenities.slice(0, 3).map((amenity, idx) => (
              <span
                key={idx}
                className="bg-slate-100 text-slate-600 text-[10px] font-medium px-2 py-0.5 rounded"
              >
                {amenity}
              </span>
            ))}
            {hotel.amenities.length > 3 && (
              <span className="text-slate-400 text-[10px] self-center">
                +{hotel.amenities.length - 3} more
              </span>
            )}
          </div>

          {/* Cancellation */}
          <div className="flex items-center gap-1 text-[11px] text-slate-500 mb-3">
            <ShieldCheck className="w-3 h-3 text-slate-400" />
            <span>{hotel.cancellationPolicy}</span>
          </div>
        </div>

        {/* Pricing and Action Footer */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <div className="min-w-0">
            <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-medium">
              From
            </span>
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <span className="text-base sm:text-lg font-bold text-slate-900">
                {formatPrice(hotel.pricePerNightUSD, currency)}
              </span>
              {hotel.originalPriceUSD && (
                <span className="text-[11px] text-slate-400 line-through">
                  {formatPrice(hotel.originalPriceUSD, currency)}
                </span>
              )}
              <span className="text-[10px] text-slate-400">/ night</span>
            </div>
          </div>

          <button
            onClick={() => onOpenBooking(hotel)}
            className="px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs transition-colors flex items-center gap-1 shrink-0 cursor-pointer"
          >
            <span>Book Room</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
