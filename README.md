# 🌍 AuraVoyage — Complete Tours, Travel, Hotel Booking, Dining & Refreshments Platform

> **AuraVoyage** ek comprehensive, modern aur luxury Tours & Travel web application hai. Isme multi-day tour packages, 5-star hotel & resort booking, guaranteed restaurant table reservations, travel refreshment hampers, highway pit-stops aur interactive custom trip builder shamil hain.

---

## 📌 Project Overview (Project Ka Parichay)

AuraVoyage ko travelers ke har stage ke travel needs ko dhyan me rakh kar design kiya gaya hai:
1. **Pehle se plan kiye gaye luxury tour packages** dekhna aur book karna.
2. **Hotels, luxury resorts aur private villas** me rooms book karna (nights aur room category ke according live pricing ke sath).
3. **Michelin aur rooftop restaurants** me table reserve karna (time slot, party size aur seating preference ke sath).
4. **En-route travel refreshments** (gourmet snack packs aur highway pit-stop vouchers) order karna.
5. **Apna custom package banana** (Hotel + Dining + Refreshments + Guide/Photoshoots) jisme 15% instant bundle discount milta hai.
6. **Multi-currency switcher** (USD, EUR, GBP, INR, AED).
7. **Trip bag (Cart), Wishlist (Saved Favorites), Promo Codes (`VOYAGE10`, `WANDER20`), Confetti animation, Printable Digital Vouchers aur "My Bookings" system**.

---

## 🚀 Live Demo & Running Instructions

### 1. Requirements
* **Node.js**: v18+ ya v20+ ya v24+
* **npm**: v9+ ya v11+

### 2. Run Locally
```bash
# Repository directory me jayein
cd d:\Tours&travel

# Dependencies install karein (agar pehle nahi kiye)
npm install

# Development server start karein
npm run dev
```

Server live ho jayega:
👉 **Local**: `http://localhost:5173/`

### 3. Production Build
```bash
npm run build
```

> **Windows Path Note**: Folder path me agar `&` (`d:\Tours&travel`) ho to `package.json` scripts me direct node commands (`node ./node_modules/vite/bin/vite.js`) configure kiye gaye hain taaki Windows batch script error na aaye.

---

## 🌟 Key Features & Modules (Sari Details)

### 1. 🌴 Curated Multi-Day Tour Packages (Tour Packages)
* **Global Destinations**:
  * *Bali Island Serenity & Sacred Waterfalls* (7D/6N)
  * *Swiss Alps Glacier Express & Alpine Lakes* (8D/7N)
  * *Amalfi Coast & Capri Private Yacht Odyssey* (6D/5N)
  * *Kyoto Zen, Mount Fuji & Tokyo Lights* (9D/8N)
  * *Dubai & Arabian Dunes Ultra-Luxury Escape* (5D/4N)
  * *Serengeti Big Five Safari & Zanzibar Turquoise Sands* (10D/9N)
* **Day-by-Day Master Itinerary**: Har din ka schedule, lunch/dinner information aur hotel stay.
* **Inclusions & Exclusions**: Clear list of what is included (private SUV, spa sessions, entry passes, rail passes) aur exclusions.
* **Filter & Sort**: Theme ke basis pe (Cultural, Adventure, Honeymoon, Luxury, Wildlife), Region ke basis pe (Europe, Asia, Middle East, Africa) aur Price/Rating ke basis pe sorting.
* **Instant Departure Dates & Travelers Counter**: Live total price calculation.

---

### 2. 🏨 Hotel, Luxury Resort & Villa Booking (Hotels)
* **Curated 5-Star Accommodations**:
  * *Four Seasons Resort Bali at Sayan* (Ubud, Bali)
  * *The Chedi Andermatt* (Switzerland)
  * *Le Sirenuse Positano* (Amalfi Coast, Italy)
  * *Atlantis The Royal* (Palm Jumeirah, Dubai)
  * *Hoshinoya Kyoto* (Kyoto, Japan)
  * *Grace Hotel, Auberge Resorts Collection* (Santorini, Greece)
* **Room Tiers & Multipliers**:
  * Deluxe Suites, One-Bedroom Pool Villas, Royal Penthouse Suites.
* **Dynamic Stay Calculator**:
  * Check-in aur Check-out dates select karne par automatic nights calculate hoti hain.
  * Formula: `Nights × Room Price × Guests` live display hota hai.
* **Included Amenities**: Complimentary breakfast tags, free cancellation up to 48-72 hours, private plunge pools, spas.

---

### 3. 🍽️ Restaurants & Fine Dining (Dining Reservations)
* **Handpicked Gastronomy Destinations**:
  * *Il San Pietro Cliffside Terrace* (Positano, Italy)
  * *Locavore NXT Ubud* (Bali, Indonesia)
  * *The Japanese Restaurant at Chedi Andermatt* (Switzerland)
  * *Pierchic Over-Water Dining* (Dubai, UAE)
  * *Kikunoi Roan 2-Star Kaiseki* (Kyoto, Japan)
  * *Ambrosia Sunset Restaurant & Caldera Wine Bar* (Santorini, Greece)
* **Interactive Table Reserve Modal**:
  * Date aur Time slot selector (`12:30 PM`, `1:30 PM`, `7:00 PM`, `8:15 PM`, `9:30 PM`).
  * Party size (Guests: 1 to 10 guests).
  * Seating Atmosphere Preference: *Terrace / Sunset View, Candlelit Romantic Corner, Main Dining Hall, Private VIP Booth*.
  * Dietary and special request notes (Anniversary, Birthday, Vegan, Nut Allergy).
  * Live average cost estimate based on guest count.

---

### 4. ☕ Travel Refreshments, Cafes & Highway Pit Stops (Refreshments)
* **A. Curated Travel Snack Packs & Hampers** (Direct hotel concierge ya chauffeur delivery):
  * **Alpine Trekker Gourmet Snack Box**: Swiss Grand Cru chocolates, air-dried Bündnerfleisch beef, aged Gruyère cheese, electrolyte spritzers.
  * **Mediterranean Sunset Picnic Hamper**: Wicker basket with chilled Prosecco DOCG, buffalo mozzarella, olives, lemon delizia pastries.
  * **Tropical Bali Vitality Cooler Bag**: Chilled young drinking coconuts, tropical fruit skewers, cold-pressed turmeric Jamu tonics.
  * **Kyoto Ceremonial Matcha & Wagashi Box**: Seasonal handmade bean-paste confections, cold-whisked Uji matcha, cedar keepsake box.
* **B. Scenic Highway Pit Stops & Cafes**:
  * *Lake Como Bellagio Waterfront Espresso Bar*
  * *Swiss Gotthard Pass Panorama Bakery & Dairy* (2,106m altitude)
  * *Arabian Dunes Royal Karak Chai & Dates Lounge*
  * *Santorini Cliffside Pomegranate & Frozen Yogurt Bar*
* Quantity counter (+ / -) ke sath instant trip bag me add karne ki facility.

---

### 5. 🎒 "Build Your Own Custom Travel Package" (Configurator)
Users apna complete customized tour bundle khud design kar sakte hain:
* **Step 1**: Destination choose karein (*Bali, Switzerland, Amalfi Coast, Kyoto, Dubai, Santorini*).
* **Step 2**: Hotel choose karein aur kitne nights rukna hai set karein.
* **Step 3**: Optional dinner tasting experience add karein.
* **Step 4**: Refreshment hampers aur pit-stop vouchers select karein.
* **Step 5**: Private excursion add-ons choose karein (*Dedicated Guide, 50-Photo Drone Shoot, Luxury Mercedes Transfers*).
* **Live Calculation**:
  * Standard items subtotal calculate hota hai.
  * **15% Instant Bundle Discount** automatically apply hota hai.
  * "Book Custom Bundle" single-click me pura bundle trip bag me transfer karta hai.

---

### 6. 💱 Multi-Currency Real-Time Switcher
Top navigation bar me currency selector diya gaya hai:
* **USD ($)** — US Dollar (Base currency)
* **EUR (€)** — Euro (Rate: 0.92)
* **GBP (£)** — British Pound (Rate: 0.79)
* **INR (₹)** — Indian Rupee (Rate: 86.5 with Indian number formatting `₹1,25,000`)
* **AED (AED)** — UAE Dirham (Rate: 3.67)
* Selected currency `localStorage` me save rehti hai aur pure website ke sabhi prices ko instantly update karti hai.

---

### 7. 🛍️ Slide-Out Trip Bag (Cart) & Wishlist Drawers
* **Trip Bag**:
  * Har category ke items (tours, hotels, dining, refreshments, bundles) ek jagah list hote hain.
  * Metadata preview: selected dates, nights, guests count, room types, time slots.
  * Quantity steppers (+ / -) aur item delete karne ka option.
  * Subtotal aur breakdown summary.
* **Wishlist**:
  * Cards par heart icon click karke favorite save kar sakte hain.
  * Wishlist drawer se direct "Move to Bag" kar sakte hain.

---

### 8. 💳 Checkout, Promo Codes & Digital Travel Vouchers
* **Form Details**: Primary traveler ka Full Name, Email, Phone number, aur Country.
* **Active Promo Codes**:
  * `VOYAGE10` — 10% Flat Discount on total bill.
  * `WANDER20` — 20% Flat Discount on total bill.
* **Payment Methods**:
  * Credit / Debit Card (Visa, Mastercard, Amex)
  * Digital Wallet (Apple Pay / Google Pay)
  * Pay Upon Arrival (Hotel Concierge Desk)
* **Booking Confirmation**:
  * Confetti celebration animation (`canvas-confetti`).
  * Unique Booking Reference ID generate hota hai (e.g., `#AV-749214`).
  * Itemized digital voucher generate hota hai jisko print/PDF save karne ka button hai.
  * Confirmed bookings `localStorage` me "My Bookings" me permanently save ho jati hain.

---

### 9. 🎫 "My Bookings" Portal
* Navbar me ticket icon se access kiya ja sakta hai.
* Past aur current confirmed reservations ki complete list with status (*Confirmed & Paid*).
* Har booking ko expand karke voucher items, payment method, traveler name aur printable slip dekh sakte hain.

---

### 10. ⭐ Verified Reviews & Review Submission
* 4.97 / 5 star rating trust bar.
* Real traveler testimonials with avatars, locations, and ratings.
* **"Write a Review" Modal**: Koi bhi traveler apna name, city, category, rating (1-5 stars), aur review comment submit kar sakta hai jo instantly live display hota hai.

---

## 📂 Project Architecture & Folder Structure

```
d:\Tours&travel/
├── index.html                   # HTML Entry point with Google Fonts (Plus Jakarta Sans)
├── package.json                 # Project dependencies & scripts
├── vite.config.ts               # Vite configuration with Tailwind CSS v4 & @ alias
├── tsconfig.json                # TypeScript project references
├── tsconfig.app.json            # TypeScript compiler configuration with path aliases
├── src/
│   ├── main.tsx                 # React DOM mount point
│   ├── App.tsx                  # Main application composition & routing logic
│   ├── index.css                # Tailwind CSS v4 setup & custom glassmorphism utilities
│   ├── types/
│   │   └── index.ts             # TypeScript interfaces for Tours, Hotels, Dining, Cart, etc.
│   ├── utils/
│   │   └── formatters.ts        # Currency converter, date formatting, discount helpers
│   ├── data/
│   │   ├── toursData.ts         # Multi-day tour packages data
│   │   ├── hotelsData.ts        # Luxury hotels, resorts & villas data
│   │   ├── restaurantsData.ts   # Gourmet restaurants & table booking data
│   │   ├── refreshmentsData.ts  # Curated snack hampers & highway pit-stops data
│   │   └── testimonialsData.ts  # Traveler reviews data
│   ├── context/
│   │   └── TravelContext.tsx    # Central state management (Cart, Wishlist, Currency, Bookings)
│   └── components/
│       ├── Navbar.tsx           # Sticky glass header with nav links, currency, wishlist, cart
│       ├── Hero.tsx             # Cinematic hero banner with multi-tab search bar
│       ├── CategoryPills.tsx    # Category switch buttons (Tours, Hotels, Dining, etc.)
│       ├── Footer.tsx           # Luxury footer with newsletter & concierge info
│       ├── common/
│       │   └── Toast.tsx        # Toast notifications for add to cart, wishlist, promos
│       ├── tours/
│       │   ├── TourCard.tsx     # Tour package presentation card
│       │   ├── TourList.tsx     # Filterable tour grid with search & sort
│       │   └── TourDetailModal.tsx # Full day-by-day itinerary & inclusions view
│       ├── hotels/
│       │   ├── HotelCard.tsx    # Hotel showcase card
│       │   ├── HotelList.tsx    # Filterable hotel listings
│       │   └── HotelBookingModal.tsx # Room tier & check-in/out night calculator
│       ├── restaurants/
│       │   ├── RestaurantCard.tsx   # Dining card with chef specialties & dietary tags
│       │   ├── RestaurantList.tsx   # Restaurant directory with ambience filters
│       │   └── TableReserveModal.tsx # Table reservation form with time slots & seating
│       ├── refreshments/
│       │   ├── RefreshmentCard.tsx  # Snack hamper & pit-stop cards
│       │   └── RefreshmentList.tsx  # Refreshment collections
│       ├── custom-package/
│       │   └── CustomPackageBuilder.tsx # 5-step interactive custom trip bundle configurator
│       ├── cart/
│       │   ├── CartDrawer.tsx       # Slide-out trip booking bag
│       │   ├── WishlistDrawer.tsx   # Slide-out saved favorites
│       │   └── CheckoutModal.tsx    # Checkout, promo codes, confetti & voucher issuance
│       ├── bookings/
│       │   └── MyBookingsModal.tsx  # Digital vouchers & printable receipts
│       └── reviews/
│           ├── TestimonialsSection.tsx # Review cards showcase
│           └── AddReviewModal.tsx      # User review submission modal
```

---

## 🛠️ Tech Stack Used

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Modern UI component rendering |
| **TypeScript** | Type-safe code, strict interface contracts |
| **Vite 8** | High-performance dev server and optimized production bundler |
| **Tailwind CSS v4** | Utility-first responsive styling and glassmorphism |
| **Lucide React** | Clean, modern vector icons |
| **Canvas Confetti** | Celebration visual effects upon booking confirmation |
| **LocalStorage API** | Offline persistence for cart, wishlist, currency, and bookings |

---

## 📝 Changelog & Update Log (Har Update Ka Record)

Har baar jab bhi project me koi naya feature ya modification hoga, wo is section me chronologically add hoga:

### [v1.2.0] - Comprehensive Mobile, Tablet & Desktop Responsive Polish
* **Date**: November 2026
* **Changes & Key Highlights**:
  * **Zero Horizontal Scroll & CSS Reset**: Unused legacy template styles removed from `App.css`. Root body configured with smooth touch scrolling and guaranteed zero horizontal overflow (`overflow-x: hidden`).
  * **Mobile Navigation Optimization (320px – 768px)**:
    * Top utility bar text truncated cleanly with a compact mobile promo variant (`sm:hidden`).
    * Navigation icons (Wishlist, Bookings, Cart) scaled for touch targets without crowding logo or mobile hamburger trigger.
    * Slide-out mobile menu enhanced with direct links to all travel categories and a 24/7 concierge phone hotline.
  * **Responsive Search & Hero Matrix**:
    * Search bar inputs now stack cleanly in a 1-column layout on mobile, 2-column layout on small tablets, and 4-column layout on desktops (`grid-cols-1 sm:grid-cols-2 md:grid-cols-4`).
    * Hero typography scaled down responsively (`text-2xl sm:text-4xl md:text-5xl lg:text-6xl`) for perfect readability on all iPhone, Android, and iPad screens.
  * **Adaptive Card Grids**:
    * Tour packages, hotels, restaurants, and refreshments updated to responsive grid containers: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3/4`.
    * Filter pill containers refactored to wrap naturally on smaller viewports without breaking layouts.
  * **Mobile-Optimized Modals**:
    * Day-by-day tour itineraries, hotel booking calculators, table reservations, and digital voucher slips optimized with compact responsive image headers (`h-44 sm:h-64`) and touch-friendly sticky bottom action bars.
  * **Footer & Newsletter**: Full-width fluid responsive input stacking on mobile with balanced footer link columns.

### [v1.1.0] - Minimalist & Human-Crafted UI Overhaul (Buttons & Aesthetic Refinement)
* **Date**: November 2026
* **Changes & Key Highlights**:
  * **Removed AI-Style Aesthetic Flaws**: Loud multi-color gradients (`from-sky-600 via-indigo-600 to-teal-400`), flashy glowing drop shadows (`shadow-sky-600/30`), over-saturated badges, rainbow text fills, and bouncing micro-animations ko replace kiya gaya.
  * **Minimalist Editorial Buttons**:
    * **Primary CTAs**: Clean, decisive matte black/slate-900 buttons (`bg-slate-900 text-white hover:bg-slate-800 rounded-lg/xl font-medium`) with subtle 1px border definition.
    * **Secondary/Ghost Actions**: Clean crisp borders (`border border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50`), zero cheesy drop shadows.
    * **Quantity Steppers & Controls**: Compact, understated neutral controls in place of bulky rounded bubbles.
  * **Refined Navigation & Hero**:
    * Clean monochromatic logo and typography inspired by high-end editorial travel publications (Aman Resorts, Condé Nast Traveler).
    * Segmented category controls with solid active states instead of glowing colored pills.
  * **Modals & Drawers Overhaul**:
    * Tour details, hotel room calculators, table reservations, checkout, and voucher modals updated with clean neutral palettes and human-crafted visual rhythm.
    * CSS bundle size reduced from ~62.3 kB to ~39.7 kB due to removal of bloated glow/gradient utilities.

### [v1.0.0] - Initial Release (Complete Tours & Travel Platform)
* **Date**: November 2026
* **Added**:
  * Complete project structure initialized with Vite, React 19, TypeScript, and Tailwind CSS v4.
  * Comprehensive datasets for 6 world-class Tour Packages with detailed day-by-day master itineraries.
  * 6 Luxury Hotels & Resorts with room tiers, amenities, and dynamic check-in/check-out night calculator.
  * 6 Gourmet & Michelin Dining spots with table reservation modal, time slots, and seating ambience options.
  * Curated Travel Snack Hampers & Highway Pit Stop vouchers with quantity steppers.
  * Custom Travel Package Builder with real-time tally and 15% automatic bundle discount.
  * Real-time Multi-Currency selector (USD, EUR, GBP, INR, AED).
  * Slide-out Trip Booking Bag and Wishlist Drawers.
  * Promo Code engine (`VOYAGE10` and `WANDER20`) with confetti animations and voucher generation.
  * "My Bookings" modal with print-friendly voucher slips.
  * Verified traveler reviews section and interactive "Write a Review" form.
  * Floating toast notification system.
  * Full responsive design for Mobile, Tablet, and Desktop screens.

---

*Project maintained by Google DeepMind Antigravity Assistant.*
