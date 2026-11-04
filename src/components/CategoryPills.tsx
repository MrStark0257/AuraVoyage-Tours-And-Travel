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
      description: 'Multi-day expeditions',
      icon: Palmtree,
    },
    {
      id: 'hotels',
      label: 'Hotels & Resorts',
      description: '5-star suites & villas',
      icon: Hotel,
    },
    {
      id: 'restaurants',
      label: 'Fine Dining',
      description: 'Reserved culinary tables',
      icon: UtensilsCrossed,
    },
    {
      id: 'refreshments',
      label: 'Refreshments',
      description: 'Travel packs & pit stops',
      icon: Coffee,
    },
    {
      id: 'builder',
      label: 'Custom Builder',
      description: 'Bespoke custom bundles',
      icon: Layers,
    },
  ];

  return (
    <section id="catalog-section" className="container mx-auto px-4 lg:px-8 pt-8 pb-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5 gap-2 border-b border-slate-200/80 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            Explore Categories
          </h2>
        </div>
        <p className="text-xs text-slate-500">
          Select a category to filter expeditions, accommodations, dining, or refreshments.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
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
              className={`flex flex-col items-start text-left p-3.5 rounded-xl border transition-colors ${
                isSelected
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50/80'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2.5 ${
                  isSelected ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-700'
                }`}
              >
                <Icon className="w-4 h-4" />
              </div>

              <span className="font-semibold text-xs leading-snug">{cat.label}</span>
              <span
                className={`text-[10px] mt-0.5 ${
                  isSelected ? 'text-slate-300' : 'text-slate-400'
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
