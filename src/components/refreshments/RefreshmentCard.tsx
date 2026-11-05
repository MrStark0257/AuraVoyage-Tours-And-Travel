import React, { useState } from 'react';
import { Refreshment } from '../../types';
import { useTravel } from '../../context/TravelContext';
import { CafeDetailModal } from './CafeDetailModal';
import {
  Heart,
  Star,
  MapPin,
  CheckCircle2,
  Compass,
  Clock,
  ArrowRight,
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
      <div
        onClick={() => setIsModalOpen(true)}
        className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden hover:border-slate-300 transition-colors flex flex-col justify-between cursor-pointer"
      >
        <div>
          {/* Image Container */}
          <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
            <img
              src={item.featuredImage}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/10" />

            {/* Minimalist Type Badge */}
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
              className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-colors z-10 cursor-pointer ${
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
            </div>

            <h3 className="text-base font-bold text-slate-900 group-hover:text-slate-700 transition-colors line-clamp-1 mb-1">
              {item.name}
            </h3>

            <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-3">
              {item.description}
            </p>

            {/* Signature Items or Inclusions Box */}
            {(item.signatureItems || item.itemsIncluded) && (
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-2.5 mb-2.5 text-xs">
                <span className="block font-semibold text-slate-800 text-[10px] uppercase tracking-wider mb-1">
                  {item.signatureItems ? 'Must-Try Specialties:' : 'Hamper Inclusions:'}
                </span>
                <ul className="space-y-1">
                  {(item.signatureItems || item.itemsIncluded)!.slice(0, 2).map((subItem, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                      <CheckCircle2 className="w-3 h-3 text-slate-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{subItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Traveler Tip */}
            {item.travelerTip && (
              <p className="text-[11px] text-slate-600 bg-amber-50/60 border border-amber-200/50 p-2 rounded-lg leading-relaxed line-clamp-2">
                <strong className="text-amber-800 font-semibold">Tip:</strong> {item.travelerTip}
              </p>
            )}

            {item.caloriesOrPerk && !item.travelerTip && (
              <p className="text-[11px] text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                {item.caloriesOrPerk}
              </p>
            )}
          </div>
        </div>

        {/* Informational Guide Footer */}
        <div className="p-3.5 sm:p-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="truncate mr-2">
            <span className="block text-[9px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
              <Clock className="w-2.5 h-2.5" />
              {item.openingHours ? 'Hours' : 'Guide Note'}
            </span>
            <span className="text-xs font-semibold text-slate-800 truncate block">
              {item.openingHours || item.atmosphere || 'En-Route Discovery'}
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-medium shrink-0 group-hover:bg-slate-900 group-hover:text-white transition-colors">
            <Compass className="w-3 h-3 text-slate-500 group-hover:text-white" />
            <span>Guide Info</span>
            <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-white" />
          </div>
        </div>
      </div>

      <CafeDetailModal
        item={item}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
