import React, { useState } from 'react';
import { TourPackage } from '../../types';
import { useTravel } from '../../context/TravelContext';
import { formatPrice } from '../../utils/formatters';
import {
  X,
  Star,
  MapPin,
  Clock,
  Users,
  ShieldCheck,
  Check,
  Ban,
  ChevronDown,
  ChevronUp,
  Heart,
  ShoppingBag,
} from 'lucide-react';

interface TourDetailModalProps {
  tour: TourPackage | null;
  onClose: () => void;
  onBookNow: (tour: TourPackage, date: string, travelers: number) => void;
}

export const TourDetailModal: React.FC<TourDetailModalProps> = ({
  tour,
  onClose,
  onBookNow,
}) => {
  const { currency, isInWishlist, toggleWishlist } = useTravel();

  if (!tour) return null;

  const [selectedDate, setSelectedDate] = useState(tour.startDates[0] || '2026-11-20');
  const [travelersCount, setTravelersCount] = useState(2);
  const [expandedDay, setExpandedDay] = useState<number | null>(1);

  const totalPriceUSD = tour.priceUSD * travelersCount;
  const isFavorited = isInWishlist(tour.id);

  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col border border-slate-200">
        {/* Modal Header */}
        <div className="relative h-44 sm:h-64 w-full shrink-0 overflow-hidden bg-slate-900">
          <img
            src={tour.featuredImage}
            alt={tour.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

          {/* Close & Action Buttons */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-1.5 sm:gap-2 z-10">
            <button
              onClick={() => toggleWishlist(tour.id, tour.title)}
              className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                isFavorited
                  ? 'bg-rose-500 text-white'
                  : 'bg-black/40 text-white hover:bg-white hover:text-slate-900'
              }`}
              aria-label="Wishlist"
            >
              <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-black/40 hover:bg-black text-white backdrop-blur-sm transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Title & Location in Header */}
          <div className="absolute bottom-3 sm:bottom-4 left-4 right-4 sm:left-6 sm:right-6 text-white">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1.5 text-xs">
              <span className="bg-white/20 backdrop-blur-sm text-white text-[9px] sm:text-[10px] font-medium px-2 py-0.5 rounded uppercase">
                {tour.theme}
              </span>
              <div className="flex items-center gap-1 font-semibold text-amber-300 text-[11px] sm:text-xs">
                <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                <span>{tour.rating.toFixed(2)}</span>
                <span className="text-white/70 font-normal">({tour.reviewsCount})</span>
              </div>
              <div className="flex items-center gap-1 text-white/80 text-[11px] sm:text-xs">
                <MapPin className="w-3 h-3 text-slate-300" />
                <span>
                  {tour.destination}, {tour.country}
                </span>
              </div>
            </div>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold tracking-tight leading-snug">
              {tour.title}
            </h2>
            <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 line-clamp-1 font-normal hidden sm:block">
              {tour.tagline}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4 sm:space-y-6">
          {/* Overview Section */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
              Overview
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{tour.overview}</p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 bg-slate-50 p-2.5 sm:p-3.5 rounded-xl border border-slate-200">
            <div>
              <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                Duration
              </span>
              <span className="text-xs font-semibold text-slate-800 flex items-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                {tour.durationDays}D / {tour.durationNights}N
              </span>
            </div>
            <div>
              <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                Group Size
              </span>
              <span className="text-xs font-semibold text-slate-800 flex items-center gap-1 mt-0.5">
                <Users className="w-3.5 h-3.5 text-slate-500" />
                {tour.groupSize}
              </span>
            </div>
            <div>
              <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                Pace
              </span>
              <span className="text-xs font-semibold text-slate-800 mt-0.5 block">
                {tour.difficulty}
              </span>
            </div>
            <div>
              <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                Guarantee
              </span>
              <span className="text-xs font-semibold text-slate-800 flex items-center gap-1 mt-0.5">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-600" />
                Verified Rate
              </span>
            </div>
          </div>

          {/* Day-by-Day Detailed Itinerary */}
          <div>
            <div className="flex items-center justify-between mb-2.5 sm:mb-3">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900">Daily Itinerary</h3>
              <span className="text-xs text-slate-500">
                {tour.itinerary.length} Days Planned
              </span>
            </div>

            <div className="space-y-2">
              {tour.itinerary.map((dayPlan) => {
                const isExpanded = expandedDay === dayPlan.day;
                return (
                  <div
                    key={dayPlan.day}
                    className="border border-slate-200 rounded-xl overflow-hidden bg-white"
                  >
                    <button
                      onClick={() => toggleDay(dayPlan.day)}
                      className="w-full p-2.5 sm:p-3.5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-slate-900 text-white font-semibold text-[10px] sm:text-[11px] flex items-center justify-center shrink-0">
                          {dayPlan.day}
                        </span>
                        <div>
                          <h4 className="text-xs font-semibold text-slate-900 line-clamp-1">
                            {dayPlan.title}
                          </h4>
                          <span className="text-[10px] sm:text-[11px] text-slate-500">
                            Lodging: {dayPlan.stay}
                          </span>
                        </div>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="p-3 sm:p-3.5 bg-slate-50/50 border-t border-slate-100 text-xs text-slate-600 space-y-2">
                        <p className="leading-relaxed">{dayPlan.description}</p>
                        <div className="flex flex-wrap gap-3 pt-1 text-[10px] sm:text-[11px] text-slate-500">
                          <span>Meals: <strong className="text-slate-700">{dayPlan.meals}</strong></span>
                          <span>Stay: <strong className="text-slate-700">{dayPlan.stay}</strong></span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Inclusions & Exclusions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-slate-50 border border-slate-200 p-3 sm:p-4 rounded-xl">
              <h4 className="text-xs font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-slate-700" />
                Package Inclusions
              </h4>
              <ul className="space-y-1 sm:space-y-1.5">
                {tour.inclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-600">
                    <Check className="w-3.5 h-3.5 text-slate-700 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-3 sm:p-4 rounded-xl">
              <h4 className="text-xs font-bold text-slate-700 mb-2 flex items-center gap-1.5">
                <Ban className="w-4 h-4 text-slate-400" />
                Exclusions
              </h4>
              <ul className="space-y-1 sm:space-y-1.5">
                {tour.exclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Booking Footer */}
        <div className="p-3 sm:p-4 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex flex-wrap items-center justify-between sm:justify-start gap-2 w-full sm:w-auto">
            <div className="bg-slate-50 px-2 py-1 rounded-lg border border-slate-200 flex-1 sm:flex-initial">
              <label className="block text-[9px] text-slate-500 font-semibold uppercase">
                Departure
              </label>
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="bg-transparent text-xs font-semibold text-slate-800 outline-none cursor-pointer w-full"
              >
                {tour.startDates.map((date) => (
                  <option key={date} value={date}>
                    {date}
                  </option>
                ))}
              </select>
            </div>

            <div className="bg-slate-50 px-2 py-1 rounded-lg border border-slate-200 flex-1 sm:flex-initial">
              <label className="block text-[9px] text-slate-500 font-semibold uppercase">
                Travelers
              </label>
              <select
                value={travelersCount}
                onChange={(e) => setTravelersCount(Number(e.target.value))}
                className="bg-transparent text-xs font-semibold text-slate-800 outline-none cursor-pointer w-full"
              >
                {[1, 2, 3, 4, 5, 6, 8].map((n) => (
                  <option key={n} value={n}>
                    {n} Traveler{n > 1 ? 's' : ''}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-100">
            <div className="text-left sm:text-right">
              <span className="block text-[9px] uppercase text-slate-400 font-medium">
                Total for {travelersCount} Guests
              </span>
              <span className="text-base sm:text-xl font-bold text-slate-900">
                {formatPrice(totalPriceUSD, currency)}
              </span>
            </div>

            <button
              onClick={() => onBookNow(tour, selectedDate, travelersCount)}
              className="bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs px-4 sm:px-5 py-2.5 rounded-lg transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Book Package</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
