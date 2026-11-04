import React, { useState } from 'react';
import { useTravel } from '../../context/TravelContext';
import { AddReviewModal } from './AddReviewModal';
import { Star, ShieldCheck, MessageSquarePlus } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { reviews } = useTravel();
  const [isAddReviewOpen, setIsAddReviewOpen] = useState(false);

  return (
    <section className="bg-slate-950 text-white py-14 border-t border-slate-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
              Testimonials
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Verified Voyager Reviews
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-0.5 max-w-xl">
              Authentic feedback from travelers who booked our tour packages, hotels, and dining.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="bg-slate-900 px-3.5 py-1.5 rounded-lg border border-slate-800 flex items-center gap-2.5">
              <span className="text-sm font-bold text-white">4.97</span>
              <div className="flex items-center gap-0.5 text-amber-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span className="text-[11px] text-slate-400">18,400+ Reviews</span>
            </div>

            <button
              onClick={() => setIsAddReviewOpen(true)}
              className="px-3.5 py-2 rounded-lg bg-white hover:bg-slate-100 text-slate-900 text-xs font-medium transition-colors flex items-center gap-1.5"
            >
              <MessageSquarePlus className="w-3.5 h-3.5" />
              <span>Write a Review</span>
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-900/60 rounded-xl p-4 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-medium text-slate-400 bg-slate-800 px-1.5 py-0.2 rounded">
                    {rev.category}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  "{rev.comment}"
                </p>

                <div className="text-[11px] text-slate-400 mb-3">
                  {rev.itemTitle}
                </div>
              </div>

              {/* User info */}
              <div className="pt-3 border-t border-slate-800 flex items-center gap-2.5">
                <img
                  src={rev.userAvatar}
                  alt={rev.userName}
                  className="w-8 h-8 rounded-full object-cover border border-slate-700"
                />
                <div>
                  <h5 className="font-semibold text-xs text-white flex items-center gap-1">
                    {rev.userName}
                    {rev.verified && (
                      <span title="Verified Traveler">
                        <ShieldCheck className="w-3 h-3 text-slate-400" />
                      </span>
                    )}
                  </h5>
                  <span className="text-[10px] text-slate-500">{rev.userLocation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AddReviewModal
        isOpen={isAddReviewOpen}
        onClose={() => setIsAddReviewOpen(false)}
      />
    </section>
  );
};
