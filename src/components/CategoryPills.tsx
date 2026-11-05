import React from 'react';
import { useTravel } from '../context/TravelContext';
import { CategoryType } from '../types';
import {
  Compass,
  Palmtree,
  Hotel,
  UtensilsCrossed,
  Coffee,
  Layers,
} from 'lucide-react';

export const CategoryPills: React.FC = () => {
  const { activeCategory, setActiveCategory } = useTravel();

  const categories: {
    id: CategoryType;
    label: string;
    description: string;
    icon: React.ElementType;
  }[] = [
      {
        id: 'all',
        label: 'All Highlights',
        description: 'Complete collection',
        icon: Compass,
      },
      {
        id: 'tours',
        label: 'Tour Packages',
        description: 'Multi-day trips',
        icon: Palmtree,
      },
      {
        id: 'hotels',
        label: 'Hotels & Resorts',
        description: '1★ to 5★ stays',
        icon: Hotel,
      },
      {
        id: 'restaurants',
        label: 'Fine Dining',
        description: 'Reserved tables',
        icon: UtensilsCrossed,
      },
      {
        id: 'refreshments',
        label: 'Cafes & Pit-Stops',
        description: 'Traveler directory',
        icon: Coffee,
      },
      {
        id: 'builder',
        label: 'Custom Builder',
        description: 'Bespoke bundles',
        icon: Layers,
      },
    ];

  return (
    <section id="catalog-section" className="container mx-auto px-4 lg:px-8 pt-6 sm:pt-8 pb-3 sm:pb-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-5 gap-1.5 sm:gap-2 border-b border-slate-200/80 pb-3 sm:pb-4">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            Explore Categories
          </h2>
        </div>
        <p className="text-[11px] sm:text-xs text-slate-500">
          Filter expeditions, accommodations, dining, or road trip refreshments.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isSelected = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                const elem = document.getElementById(cat.id === 'all' ? 'catalog-section' : cat.id);
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`flex flex-col items-start text-left p-2.5 sm:p-3.5 rounded-xl border transition-colors ${isSelected
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50/80'
                }`}
            >
              <div
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center mb-2 sm:mb-2.5 ${isSelected ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-700'
                  }`}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>

              <span className="font-semibold text-xs leading-snug line-clamp-1">{cat.label}</span>
              <span
                className={`text-[9px] sm:text-[10px] mt-0.5 line-clamp-1 ${isSelected ? 'text-slate-300' : 'text-slate-400'
                  }`}
              >
                {cat.description}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};
