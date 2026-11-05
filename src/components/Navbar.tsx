import React, { useState, useRef, useEffect } from 'react';
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
    navigateToCategory,
    wishlist,
    cartTotalCount,
    bookings,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsMyBookingsOpen,
  } = useTravel();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
  const currencyMenuRef = useRef<HTMLDivElement>(null);

  // Close currency dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (currencyMenuRef.current && !currencyMenuRef.current.contains(event.target as Node)) {
        setIsCurrencyDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (category: CategoryType) => {
    setIsMobileMenuOpen(false);
    navigateToCategory(category);
  };

  const navItems: { label: string; category: CategoryType; icon: React.ElementType }[] = [
    { label: 'Tours', category: 'tours', icon: Palmtree },
    { label: 'Hotels', category: 'hotels', icon: Hotel },
    { label: 'Dining', category: 'restaurants', icon: UtensilsCrossed },
    { label: 'Cafes', category: 'refreshments', icon: Coffee },
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

            <div className="hidden sm:flex items-center gap-1 text-[11px] text-slate-300 font-mono">
              <span>Display Currency:</span>
              <span className="text-white font-semibold">{CURRENCY_RATES[currency].symbol} {currency}</span>
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
              <a
                key={item.category}
                href={`#${item.category}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.category);
                }}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${isActive
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
              >
                <Icon className="w-3.5 h-3.5 opacity-70" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* Action Buttons: Currency Selector, Wishlist, Bookings, Cart, Mobile Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Main Navbar Currency Switcher */}
          <div className="relative" ref={currencyMenuRef}>
            <button
              onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
              className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-xs transition-colors"
              aria-label="Currency Selector"
              title="Change Display Currency"
            >
              <Globe className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span className="font-mono text-slate-900">{CURRENCY_RATES[currency].symbol}</span>
              <span className="text-[11px] sm:text-xs font-bold">{currency}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {isCurrencyDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white border border-slate-200 rounded-xl shadow-xl py-1 z-50 text-slate-800 animate-in fade-in slide-in-from-top-1">
                <div className="px-3 py-1 text-[10px] uppercase font-bold tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                  Currency Setting
                </div>
                {(Object.keys(CURRENCY_RATES) as Currency[]).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => {
                      setCurrency(curr);
                      setIsCurrencyDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-slate-50 transition-colors ${currency === curr ? 'font-bold text-slate-900 bg-slate-100' : 'text-slate-600'
                      }`}
                  >
                    <span>{curr}</span>
                    <span className="text-slate-500 font-mono text-xs">{CURRENCY_RATES[curr].symbol}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

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

      {/* Mobile Drawer (Floating Overlay that never shifts document flow) */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop blur overlay */}
          <div
            className="fixed inset-0 top-16 sm:top-18 bg-slate-950/40 backdrop-blur-xs z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Menu Container */}
          <div className="absolute top-full left-0 right-0 z-50 lg:hidden bg-white border-b border-slate-200 px-4 py-3 space-y-2 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto animate-in slide-in-from-top-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeCategory === item.category;
              return (
                <a
                  key={item.category}
                  href={`#${item.category}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.category);
                  }}
                  className={`flex items-center gap-2.5 w-full px-3 py-2.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </a>
              );
            })}

            {/* Quick Drawer Shortcuts */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 mt-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsWishlistOpen(true);
                }}
                className="flex items-center justify-center gap-1.5 p-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <Heart className="w-3.5 h-3.5 text-rose-500" />
                <span>Wishlist ({wishlist.length})</span>
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsMyBookingsOpen(true);
                }}
                className="flex items-center justify-center gap-1.5 p-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <TicketCheck className="w-3.5 h-3.5 text-slate-800" />
                <span>Bookings ({bookings.length})</span>
              </button>
            </div>

            {/* Mobile Currency Bar */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 px-1 mt-2">
              <span className="font-semibold flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                Currency:
              </span>
              <div className="flex items-center gap-1">
                {(Object.keys(CURRENCY_RATES) as Currency[]).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr)}
                    className={`px-2 py-1 rounded text-xs font-semibold transition-colors ${currency === curr
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                  >
                    {CURRENCY_RATES[curr].symbol} {curr}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 px-1 mt-2">
              <span>24/7 Helpline:</span>
              <a href="tel:+18007928692" className="text-slate-900 font-semibold">+1 (800) 792-VOYAGE</a>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
