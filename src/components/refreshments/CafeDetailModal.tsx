import React from 'react';
import { Refreshment } from '../../types';
import {
  X,
  MapPin,
  Clock,
  Star,
  Coffee,
  Sparkles,
  ExternalLink,
  Compass,
  CheckCircle2,
  Info,
  Heart,
} from 'lucide-react';
import { useTravel } from '../../context/TravelContext';

interface CafeDetailModalProps {
  item: Refreshment | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CafeDetailModal: React.FC<CafeDetailModalProps> = ({
  item,
  isOpen,
  onClose,
}) => {
  const { isInWishlist, toggleWishlist } = useTravel();

  if (!isOpen || !item) return null;

  const isFavorited = isInWishlist(item.id);
  const mapsQuery = encodeURIComponent(`${item.name} ${item.address || item.destination}`);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 my-auto max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Header Image */}
        <div className="relative h-44 sm:h-64 w-full shrink-0 bg-slate-900 overflow-hidden">
          <img
            src={item.featuredImage}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-black/30" />

          {/* Close & Wishlist Controls */}
          <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
            <button
              onClick={() => toggleWishlist(item.id, item.name)}
              className={`p-2 rounded-full backdrop-blur-md transition-colors cursor-pointer ${
                isFavorited
                  ? 'bg-rose-500 text-white'
                  : 'bg-black/40 text-white hover:bg-white hover:text-slate-900'
              }`}
              title={isFavorited ? 'Remove from Saved' : 'Save to Favorites'}
            >
              <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-black/40 text-white hover:bg-white hover:text-slate-900 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Badges on Hero */}
          <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1.5">
            <span className="bg-slate-900/90 text-white text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded backdrop-blur-sm">
              {item.type}
            </span>
            <span className="bg-white/20 text-white text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded backdrop-blur-sm">
              Travel Directory Guide
            </span>
          </div>

          {/* Title on Hero */}
          <div className="absolute bottom-3 left-4 right-4 z-10 text-white">
            <div className="flex items-center gap-1.5 text-xs text-slate-200 mb-1">
              <MapPin className="w-3.5 h-3.5 text-slate-300" />
              <span>{item.destination}, {item.country}</span>
            </div>
            <h2 className="text-lg sm:text-2xl font-bold tracking-tight text-white line-clamp-2">
              {item.name}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-4 overflow-y-auto flex-1">
          {/* Quick Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-semibold text-slate-400 block">Rating</span>
                <span className="font-bold text-slate-900">{item.rating.toFixed(2)} ({item.reviewsCount} reviews)</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
                <Clock className="w-3.5 h-3.5 text-slate-600" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-semibold text-slate-400 block">Hours</span>
                <span className="font-semibold text-slate-900 truncate block">{item.openingHours || 'Open Daily'}</span>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
                <Compass className="w-3.5 h-3.5 text-slate-600" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-semibold text-slate-400 block">Atmosphere</span>
                <span className="font-semibold text-slate-900 truncate block">{item.atmosphere || item.type}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-slate-500" />
              About This Spot
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Signature Specialties to Try */}
          {item.signatureItems && item.signatureItems.length > 0 && (
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-1.5">
                <Coffee className="w-3.5 h-3.5 text-slate-700" />
                Must-Order Specialties & Drinks
              </h4>
              <ul className="space-y-1.5">
                {item.signatureItems.map((spec, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-900 shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Address & Traveler Tip */}
          <div className="space-y-2.5">
            {item.address && (
              <div className="text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100 flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-800 block text-[11px] uppercase tracking-wider">Address & Location:</span>
                  <span>{item.address}</span>
                </div>
              </div>
            )}

            {item.travelerTip && (
              <div className="text-xs text-slate-700 bg-amber-50/70 border border-amber-200/80 p-3 rounded-lg flex items-start gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-amber-900 block text-[11px] uppercase tracking-wider">Traveler Insider Tip:</span>
                  <span>{item.travelerTip}</span>
                </div>
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer (Directions & Close - NO BOOKING OR BILLING) */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-2.5 shrink-0">
          <div className="text-[11px] text-slate-500 text-center sm:text-left">
            <span>Free travel directory guide • Drop in anytime during opening hours</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Get Directions</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 border border-slate-200 hover:border-slate-300 text-slate-700 rounded-lg text-xs font-medium transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
