import React, { useState } from 'react';
import { useTravel } from '../../context/TravelContext';
import { X, Star, MessageSquare } from 'lucide-react';

interface AddReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddReviewModal: React.FC<AddReviewModalProps> = ({ isOpen, onClose }) => {
  const { addReview } = useTravel();

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(5);
  const [category, setCategory] = useState<'Tour' | 'Hotel' | 'Dining' | 'Overall Service'>('Tour');
  const [itemTitle, setItemTitle] = useState('');
  const [comment, setComment] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment) return;

    addReview({
      userName: name,
      userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      userLocation: location || 'Global Traveler',
      rating,
      itemTitle: itemTitle || 'AuraVoyage Travel Experience',
      category,
      comment,
      verified: true,
    });

    setName('');
    setLocation('');
    setItemTitle('');
    setComment('');
    setRating(5);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col border border-slate-200">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center">
              <MessageSquare className="w-3.5 h-3.5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">Write a Traveler Review</h3>
              <span className="text-[10px] text-slate-500">
                Share your journey feedback
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 sm:p-5 space-y-3.5 overflow-y-auto flex-1">
          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Your Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Liam Sterling"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 text-xs outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Your City / Country</label>
              <input
                type="text"
                placeholder="e.g. London, UK"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 text-xs outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs outline-none cursor-pointer"
              >
                <option value="Tour">Tour Package</option>
                <option value="Hotel">Hotel Stay</option>
                <option value="Dining">Restaurant / Dining</option>
                <option value="Overall Service">Overall Concierge</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Experience Name</label>
              <input
                type="text"
                placeholder="e.g. Swiss Alps Glacier Express"
                value={itemTitle}
                onChange={(e) => setItemTitle(e.target.value)}
                className="w-full bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 text-xs outline-none"
              />
            </div>
          </div>

          {/* Star Rating */}
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Rating</label>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="p-1 focus:outline-none"
                >
                  <Star
                    className={`w-5 h-5 ${
                      star <= rating
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-slate-200'
                    }`}
                  />
                </button>
              ))}
              <span className="text-xs text-slate-600 ml-1.5">
                {rating} of 5 Stars
              </span>
            </div>
          </div>

          {/* Comment */}
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Your Review *</label>
            <textarea
              required
              rows={3}
              placeholder="Tell others what you appreciated about your voyage..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-xs text-slate-800 outline-none"
            />
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded-lg transition-colors"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
