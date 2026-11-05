import React, { createContext, useContext, useState, useEffect } from 'react';
import { Currency, CategoryType, CartItem, BookingConfirmation, UserReview } from '../types';
import { INITIAL_REVIEWS } from '../data/testimonialsData';

interface ToastItem {
  id: string;
  message: string;
  type: 'success' | 'info' | 'warning';
}

interface TravelContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  activeCategory: CategoryType;
  setActiveCategory: (cat: CategoryType) => void;
  navigateToCategory: (cat: CategoryType) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedDestinationFilter: string;
  setSelectedDestinationFilter: (dest: string) => void;
  selectedDurationFilter: string;
  setSelectedDurationFilter: (duration: string) => void;
  selectedMonthFilter: string;
  setSelectedMonthFilter: (month: string) => void;
  wishlist: string[];
  toggleWishlist: (id: string, title?: string) => void;
  isInWishlist: (id: string) => boolean;
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (cartItemId: string) => void;
  updateCartQuantity: (cartItemId: string, delta: number) => void;
  clearCart: () => void;
  bookings: BookingConfirmation[];
  addBooking: (booking: BookingConfirmation) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  isMyBookingsOpen: boolean;
  setIsMyBookingsOpen: (open: boolean) => void;
  reviews: UserReview[];
  addReview: (review: Omit<UserReview, 'id' | 'date'>) => void;
  toasts: ToastItem[];
  addToast: (message: string, type?: 'success' | 'info' | 'warning') => void;
  removeToast: (id: string) => void;
  cartTotalCount: number;
}

const TravelContext = createContext<TravelContextType | undefined>(undefined);

export const TravelProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrencyState] = useState<Currency>(() => {
    return (localStorage.getItem('auravoyage_currency') as Currency) || 'USD';
  });

  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [pendingScrollTarget, setPendingScrollTarget] = useState<{ id: string; timestamp: number } | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDestinationFilter, setSelectedDestinationFilter] = useState('All');
  const [selectedDurationFilter, setSelectedDurationFilter] = useState('All');
  const [selectedMonthFilter, setSelectedMonthFilter] = useState('Anytime');

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('auravoyage_wishlist');
      return saved ? JSON.parse(saved) : ['tour-1', 'hotel-3'];
    } catch {
      return ['tour-1', 'hotel-3'];
    }
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('auravoyage_cart');
      if (!saved) return [];
      const parsed: CartItem[] = JSON.parse(saved);
      // Automatically purge any legacy refreshment items from cart/billing
      return parsed.filter((item) => item.itemType !== 'refreshment');
    } catch {
      return [];
    }
  });

  const [bookings, setBookings] = useState<BookingConfirmation[]>(() => {
    try {
      const saved = localStorage.getItem('auravoyage_bookings');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [reviews, setReviews] = useState<UserReview[]>(() => {
    try {
      const saved = localStorage.getItem('auravoyage_reviews');
      return saved ? JSON.parse(saved) : INITIAL_REVIEWS;
    } catch {
      return INITIAL_REVIEWS;
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isMyBookingsOpen, setIsMyBookingsOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  useEffect(() => {
    localStorage.setItem('auravoyage_currency', currency);
  }, [currency]);

  useEffect(() => {
    localStorage.setItem('auravoyage_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('auravoyage_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('auravoyage_bookings', JSON.stringify(bookings));
  }, [bookings]);

  useEffect(() => {
    localStorage.setItem('auravoyage_reviews', JSON.stringify(reviews));
  }, [reviews]);

  const addToast = (message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    addToast(`Currency switched to ${c}`, 'info');
  };

  const toggleWishlist = (id: string, title?: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(id);
      if (exists) {
        addToast(`Removed from saved favorites`, 'info');
        return prev.filter((item) => item !== id);
      } else {
        addToast(`Added ${title || 'item'} to saved favorites!`, 'success');
        return [...prev, id];
      }
    });
  };

  const isInWishlist = (id: string) => wishlist.includes(id);

  const addToCart = (newItem: CartItem) => {
    // Refreshments are strictly guide/showcase items and excluded from billing
    if (newItem.itemType === 'refreshment') {
      addToast(`Refreshments are part of the destination guide and not billed directly.`, 'info');
      return;
    }

    setCart((prev) => {
      // Check if identical item already in cart
      const existingIndex = prev.findIndex(
        (item) =>
          item.referenceId === newItem.referenceId &&
          item.itemType === newItem.itemType &&
          item.selectedDate === newItem.selectedDate &&
          item.roomType === newItem.roomType
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += newItem.quantity;
        return updated;
      }
      return [...prev, newItem];
    });
    addToast(`Added "${newItem.title}" to your trip booking bag!`, 'success');
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
    addToast('Item removed from trip bag', 'info');
  };

  const updateCartQuantity = (cartItemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.cartItemId === cartItemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const addBooking = (newBooking: BookingConfirmation) => {
    setBookings((prev) => [newBooking, ...prev]);
    clearCart();
    addToast(`Booking #${newBooking.bookingId} confirmed successfully!`, 'success');
  };

  const addReview = (reviewData: Omit<UserReview, 'id' | 'date'>) => {
    const newRev: UserReview = {
      ...reviewData,
      id: 'rev-' + Date.now(),
      date: 'Just now',
    };
    setReviews((prev) => [newRev, ...prev]);
    addToast('Thank you! Your verified traveler review has been posted.', 'success');
  };

  const cartTotalCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navigateToCategory = (cat: CategoryType) => {
    setActiveCategory(cat);
    setPendingScrollTarget({ id: cat, timestamp: Date.now() });
  };

  useEffect(() => {
    if (!pendingScrollTarget) return;

    const { id: targetId } = pendingScrollTarget;

    if (targetId === 'all') {
      window.scrollTo({ top: 0, behavior: 'instant' });
      if (window.location.hash) {
        window.history.pushState(null, '', window.location.pathname);
      }
      return;
    }

    // Double requestAnimationFrame guarantees that React 19 batch commits (including mobile drawer unmounting)
    // and browser layout reflows have 100% completed before performing scroll
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          // Primary: Native C++ scrollIntoView respecting CSS scroll-mt-28
          targetElement.scrollIntoView({ block: 'start' });

          // Secondary Fallback: Verify arrival & force absolute offsetTop if browser cancelled or reverted scroll
          const header = document.querySelector('header');
          const hHeight = header ? header.getBoundingClientRect().height : 95;
          const expectedTop = Math.max(0, targetElement.offsetTop - hHeight - 14);
          const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

          if (Math.abs(currentScroll - expectedTop) > 150) {
            window.scrollTo({ top: expectedTop, behavior: 'instant' });
            document.documentElement.scrollTop = expectedTop;
            document.body.scrollTop = expectedTop;
          }

          if (window.location.hash !== `#${targetId}`) {
            window.history.pushState(null, '', `#${targetId}`);
          }
        } else {
          const catalogElem = document.getElementById('catalog-section');
          if (catalogElem) {
            catalogElem.scrollIntoView({ block: 'start' });
          }
        }
      });
    });
  }, [pendingScrollTarget]);

  return (
    <TravelContext.Provider
      value={{
        currency,
        setCurrency,
        activeCategory,
        setActiveCategory,
        navigateToCategory,
        searchQuery,
        setSearchQuery,
        selectedDestinationFilter,
        setSelectedDestinationFilter,
        selectedDurationFilter,
        setSelectedDurationFilter,
        selectedMonthFilter,
        setSelectedMonthFilter,
        wishlist,
        toggleWishlist,
        isInWishlist,
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        bookings,
        addBooking,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isMyBookingsOpen,
        setIsMyBookingsOpen,
        reviews,
        addReview,
        toasts,
        addToast,
        removeToast,
        cartTotalCount,
      }}
    >
      {children}
    </TravelContext.Provider>
  );
};

export const useTravel = () => {
  const context = useContext(TravelContext);
  if (!context) {
    throw new Error('useTravel must be used within a TravelProvider');
  }
  return context;
};

