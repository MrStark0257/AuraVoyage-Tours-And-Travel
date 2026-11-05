import React, { useState } from 'react';
import { Refreshment } from '../../types';
import { useTravel } from '../../context/TravelContext';
import { CafeDetailModal } from './CafeDetailModal';
import {
  Heart,
  Star,
  MapPin,
  Clock,
  Coffee,
  ArrowRight,
  Compass,
} from 'lucide-react';

interface RefreshmentCardProps {
  item: Refreshment;
}

export const RefreshmentCard: React.FC<RefreshmentCardProps> = ({ item }) => {
  const { isInWishlist, toggleWishlist } = useTravel();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isFavorited = isInWishlist(item.id);

  return (
    <>
      <div className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden hover:border-slate-300 transition-colors flex flex-col justify-between">
        <div>
          {/* Image Container */}
          <div
            onClick={() => setIsModalOpen(true)}
            className="relative aspect-[16/10] overflow-hidden bg-slate-100 cursor-pointer"
          >
            <img
              src={item.featuredImage}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-black/10" />

            {/* Type Badge */}
            <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1.5">
              <span className="bg-slate-900/85 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-0.5 rounded">
                {item.type}
              </span>
            </div>

            {/* Wishlist Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleWishlist(item.id, item.name);
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

            {/* Destination */}
            <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1 text-white text-xs font-medium bg-slate-900/75 backdrop-blur-sm px-2.5 py-0.5 rounded">
              <MapPin className="w-3 h-3 text-slate-300" />
              <span>{item.destination}</span>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-4 sm:p-5">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <div className="flex items-center gap-1 font-semibold text-slate-700">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{item.rating.toFixed(2)}</span>
                <span className="text-slate-400 font-normal">({item.reviewsCount})</span>
              </div>

              {item.openingHours && (
                <div className="flex items-center gap-1 text-[11px] text-slate-500">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <span className="truncate max-w-[130px]">{item.openingHours}</span>
                </div>
              )}
            </div>

            <h3
              onClick={() => setIsModalOpen(true)}
              className="text-base font-bold text-slate-900 group-hover:text-slate-700 transition-colors line-clamp-1 mb-1.5 cursor-pointer"
            >
              {item.name}
            </h3>

            <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-3">
              {item.description}
            </p>

            {/* Atmosphere / Vibe Tag */}
            {item.atmosphere && (
              <div className="flex items-center gap-1.5 text-[11px] text-slate-600 bg-slate-50 border border-slate-200/80 rounded-lg px-2.5 py-1.5 mb-2.5">
                <Compass className="w-3 h-3 text-slate-400 shrink-0" />
                <span className="truncate">{item.atmosphere}</span>
              </div>
            )}

            {/* Signature Specialties Preview */}
            {item.signatureItems && item.signatureItems.length > 0 && (
              <div className="text-[11px] text-slate-600 space-y-1 mb-2">
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                  Signature Treats:
                </span>
                <div className="flex items-start gap-1.5 text-slate-700">
                  <Coffee className="w-3 h-3 text-slate-400 shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{item.signatureItems[0]}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Informational Action Footer - NO PRICE & NO BOOKING */}
        <div className="p-4 sm:p-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <div className="text-[11px] text-slate-400">
            <span className="font-medium text-slate-600 block">Travel Guide</span>
            <span>Cafe Directory</span>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>View Details</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Full Cafe Details Modal */}
      <CafeDetailModal
        item={item}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
