import React, { useState } from 'react';
import { useTravel } from '../context/TravelContext';
import { Currency, CategoryType } from '../types';
import { CURRENCY_RATES } from '../utils/formatters';
import {
  Compass,
  Heart,
  ShoppingBag,
  TicketCheck,
  Menu,
  X,
  PhoneCall,
  ChevronDown,
  Globe,
  Palmtree,
  Hotel,
  UtensilsCrossed,
  Coffee,
  Layers,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    currency,
    setCurrency,
    activeCategory,
    setActiveCategory,
    wishlist,
    cartTotalCount,
    bookings,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsMyBookingsOpen,
  } = useTravel();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);

  const handleNavClick = (category: CategoryType) => {
    setActiveCategory(category);
    setIsMobileMenuOpen(false);

    const sectionElement = document.getElementById(category === 'all' ? 'hero' : category);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems: { label: string; category: CategoryType; icon: React.ElementType }[] = [
    { label: 'Tours', category: 'tours', icon: Palmtree },
    { label: 'Hotels', category: 'hotels', icon: Hotel },
    { label: 'Dining', category: 'restaurants', icon: UtensilsCrossed },
    { label: 'Refreshments', category: 'refreshments', icon: Coffee },
    { label: 'Custom Trip', category: 'builder', icon: Layers },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-colors">
      {/* Top Utility Announcement Bar */}
      <div className="bg-slate-950 text-slate-300 text-[11px] px-3 sm:px-4 py-1.5 border-b border-slate-900">
        <div className="container mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 truncate">
            <span className="text-slate-400 font-mono tracking-wider uppercase text-[9px] bg-slate-900 px-1.5 py-0.2 rounded border border-slate-800 shrink-0">
              Promo
            </span>
            <span className="truncate text-slate-300 text-[11px]">
              <span className="hidden sm:inline">Use code <strong className="text-white font-medium">VOYAGE10</strong> for 10% savings on curated stays and packages.</span>
              <span className="sm:hidden">Code <strong className="text-white">VOYAGE10</strong> for 10% off</span>
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 text-slate-400 shrink-0">
            <div className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer text-[11px]">
              <PhoneCall className="w-3 h-3 text-slate-400" />
              <span>+1 (800) 792-VOYAGE</span>
            </div>

            {/* Currency Selector */}
            <div className="relative">
              <button
                onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
                className="flex items-center gap-1 text-slate-200 hover:text-white bg-slate-900 px-2 py-0.5 rounded text-[11px] font-medium border border-slate-800 transition-colors"
                aria-label="Select Currency"
              >
                <Globe className="w-3 h-3 text-slate-400" />
                <span>{currency}</span>
                <ChevronDown className="w-2.5 h-2.5 text-slate-400" />
              </button>

              {isCurrencyDropdownOpen && (
                <div className="absolute right-0 mt-1.5 w-32 bg-white border border-slate-200 rounded-lg shadow-lg py-1 z-50 text-slate-800">
                  {(Object.keys(CURRENCY_RATES) as Currency[]).map((curr) => (
                    <button
                      key={curr}
                      onClick={() => {
                        setCurrency(curr);
                        setIsCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-slate-50 transition-colors ${
                        currency === curr ? 'font-semibold text-slate-900 bg-slate-50' : 'text-slate-600'
                      }`}
                    >
                      <span>{curr}</span>
                      <span className="text-slate-400 font-mono text-[11px]">{CURRENCY_RATES[curr].symbol}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="container mx-auto px-3 sm:px-4 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <div
          onClick={() => handleNavClick('all')}
          className="flex items-center gap-2 cursor-pointer group select-none py-1"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-slate-900 flex items-center justify-center text-white transition-colors group-hover:bg-slate-800 shrink-0">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">
              Aura<span className="text-slate-600 font-normal">Voyage</span>
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeCategory === item.category;
            return (
              <button
                key={item.category}
                onClick={() => handleNavClick(item.category)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-3.5 h-3.5 opacity-70" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Action Buttons: Wishlist, Bookings, Cart, Mobile Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Wishlist Button */}
          <button
            onClick={() => setIsWishlistOpen(true)}
            className="relative p-2 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-600 transition-colors"
            aria-label="Wishlist"
            title="Saved Wishlist"
          >
            <Heart className="w-4 h-4" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-slate-900 text-white text-[9px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Bookings Button */}
          <button
            onClick={() => setIsMyBookingsOpen(true)}
            className="relative p-2 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-600 transition-colors"
            aria-label="My Bookings"
            title="My Booked Reservations"
          >
            <TicketCheck className="w-4 h-4" />
            {bookings.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-slate-900 text-white text-[9px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                {bookings.length}
              </span>
            )}
          </button>

          {/* Trip Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-1.5 sm:gap-2 bg-slate-900 hover:bg-slate-800 text-white px-2.5 sm:px-3.5 py-2 rounded-lg font-medium text-xs transition-colors"
            aria-label="Trip Bag"
          >
            <ShoppingBag className="w-4 h-4 text-slate-300 shrink-0" />
            <span className="hidden sm:inline">Trip Bag</span>
            {cartTotalCount > 0 && (
              <span className="bg-white/20 text-white px-1.5 py-0.2 rounded text-[10px] font-bold">
                {cartTotalCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-3 space-y-1 shadow-lg animate-in slide-in-from-top-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeCategory === item.category;
            return (
              <button
                key={item.category}
                onClick={() => handleNavClick(item.category)}
                className={`flex items-center gap-2.5 w-full px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                  isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 px-1 mt-2">
            <span>24/7 Helpline:</span>
            <a href="tel:+18007928692" className="text-slate-900 font-semibold">+1 (800) 792-VOYAGE</a>
          </div>
        </div>
      )}
    </header>
  );
};
