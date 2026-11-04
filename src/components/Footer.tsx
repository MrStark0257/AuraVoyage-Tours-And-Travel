import React, { useState } from 'react';
import { useTravel } from '../context/TravelContext';
import {
  Compass,
  Mail,
  Send,
  PhoneCall,
  ShieldCheck,
  Award,
  Share2,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { setActiveCategory, addToast } = useTravel();
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      addToast(`Thank you. Travel dispatch sent to ${newsletterEmail}`, 'info');
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-12 pb-10 border-t border-slate-900">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Top Newsletter Bar - Minimalist Dark */}
        <div className="bg-slate-900 p-6 sm:p-7 rounded-2xl border border-slate-800 mb-12 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="max-w-md">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-1">
              <Mail className="w-3 h-3" />
              Voyager Dispatch
            </span>
            <h3 className="text-xl font-bold text-white">
              Curated Itineraries & Private Offers
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Seasonal guides, unlisted villa availability, and priority culinary reservations.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex gap-2 w-full md:w-auto min-w-[300px]">
            <input
              type="email"
              required
              placeholder="Your email address"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="flex-1 bg-slate-950 text-white placeholder-slate-500 px-3.5 py-2.5 rounded-lg border border-slate-800 text-xs outline-none focus:border-slate-600"
            />
            <button
              type="submit"
              className="bg-white hover:bg-slate-100 text-slate-900 font-medium text-xs px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1.5 shrink-0"
            >
              <span>Join</span>
              <Send className="w-3 h-3" />
            </button>
          </form>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-white">
                <Compass className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold text-white">
                Aura<span className="text-slate-400 font-normal">Voyage</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Curating exceptional journeys. Multi-day tour packages, luxury hotels, reserved dining, and travel refreshments.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-slate-400">
              <Share2 className="w-3.5 h-3.5" />
              <span>@AuraVoyageGlobal</span>
            </div>
          </div>

          {/* Column 2: Experiences */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-semibold uppercase tracking-wider text-white">
              Experiences
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button
                  onClick={() => {
                    setActiveCategory('tours');
                    document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Tour Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveCategory('hotels');
                    document.getElementById('hotels')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Hotels & Resorts
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveCategory('restaurants');
                    document.getElementById('restaurants')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Fine Dining Tables
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveCategory('refreshments');
                    document.getElementById('refreshments')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Refreshment Hampers
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveCategory('builder');
                    document.getElementById('builder')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Custom Configurator
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Top Destinations */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-semibold uppercase tracking-wider text-white">
              Destinations
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>Bali, Indonesia</li>
              <li>Swiss Alps, Switzerland</li>
              <li>Amalfi Coast, Italy</li>
              <li>Kyoto, Japan</li>
              <li>Dubai, UAE</li>
              <li>Serengeti, Tanzania</li>
            </ul>
          </div>

          {/* Column 4: Trust & Support */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-semibold uppercase tracking-wider text-white">
              Concierge
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <PhoneCall className="w-3.5 h-3.5 text-slate-400" />
                <span>+1 (800) 792-VOYAGE</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                <span>Verified Reservations</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Award className="w-3.5 h-3.5 text-slate-400" />
                <span>Award-Winning Service</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} AuraVoyage Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <a href="#" className="hover:text-slate-400">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400">Terms</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400">Insurance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
