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
* **Worldwide Global Destinations Across 6 Continents**:
  * **Europe**:
    * *Paris Romance & French Riviera Glamour* (8D/7N) - France
    * *Swiss Alps Glacier Express & Alpine Lakes* (8D/7N) - Switzerland
    * *Amalfi Coast & Capri Private Yacht Odyssey* (6D/5N) - Italy
    * *Santorini & Cycladic Islands Sunset Sailing* (7D/6N) - Greece
    * *Iceland Northern Lights, Volcanic Lagoons & Glaciers* (6D/5N) - Iceland
  * **Asia**:
    * *Bali Island Serenity & Sacred Waterfalls* (7D/6N) - Indonesia
    * *Kyoto Zen Gardens, Mount Fuji & Tokyo Lights* (9D/8N) - Japan
    * *Royal Rajasthan Fortresses, Palaces & Taj Mahal* (8D/7N) - India
    * *Maldives Private Island Overwater Sanctuary* (6D/5N) - Maldives
  * **Middle East**:
    * *Dubai & Arabian Dunes Ultra-Luxury Escape* (5D/4N) - UAE
    * *Cappadocia Hot Air Balloons & Istanbul Grand Bazaars* (7D/6N) - Turkey
  * **Africa**:
    * *Serengeti Big Five Safari & Zanzibar Sands* (10D/9N) - Tanzania
    * *Cape Town, Table Mountain & Garden Route Drive* (8D/7N) - South Africa
  * **Americas**:
    * *New York Skyline to Grand Canyon Natural Wonders* (9D/8N) - United States
    * *Machu Picchu Incan Trail & Sacred Valley Heritage* (7D/6N) - Peru
  * **Oceania**:
    * *New Zealand Southern Alps & Milford Sound Fjords* (10D/9N) - New Zealand
* **Day-by-Day Master Itinerary**: Har din ka schedule, lunch/dinner information aur hotel stay.
* **Inclusions & Exclusions**: Clear list of what is included (private SUV, spa sessions, entry passes, rail passes) aur exclusions.
* **Filter & Sort**: Theme ke basis pe (Cultural, Adventure, Honeymoon, Luxury, Wildlife), Region ke basis pe (Europe, Asia, Middle East, Africa, Americas, Oceania) aur Price/Rating ke basis pe sorting.
* **Instant Departure Dates & Travelers Counter**: Live total price calculation.

---

### 2. 🏨 Hotel, Luxury Resort & Villa Booking (Hotels)
* **16 Curated 5-Star Accommodations Across the World**:
  * *Hôtel Plaza Athénée* (Avenue Montaigne, Paris, France)
  * *The Retreat at Blue Lagoon* (Grindavík, Iceland)
  * *The Oberoi Udaivilas* (Lake Pichola, Udaipur, India)
  * *Soneva Fushi Overwater Reserve* (Baa Atoll, Maldives)
  * *Four Seasons Resort Bali at Sayan* (Ubud, Bali, Indonesia)
  * *The Chedi Andermatt* (Andermatt, Switzerland)
  * *Le Sirenuse Positano* (Amalfi Coast, Italy)
  * *Atlantis The Royal* (Palm Jumeirah, Dubai, UAE)
  * *Hoshinoya Kyoto* (Kyoto, Japan)
  * *Grace Hotel, Auberge Resorts Collection* (Santorini, Greece)
  * *Museum Hotel Cappadocia* (Uchisar, Cappadocia, Turkey)
  * *Four Seasons Safari Lodge Serengeti* (Serengeti, Tanzania)
  * *The Silo Hotel* (V&A Waterfront, Cape Town, South Africa)
  * *The Plaza Hotel* (Fifth Avenue, New York, USA)
  * *Belmond Sanctuary Lodge* (Machu Picchu Citadel, Peru)
  * *Blanket Bay Luxury Lodge* (Lake Wakatipu, Queenstown, New Zealand)
* **Room Tiers & Multipliers**:
  * Deluxe Suites, One-Bedroom Pool Villas, Royal Penthouse Suites.
* **Dynamic Stay Calculator**:
  * Check-in aur Check-out dates select karne par automatic nights calculate hoti hain.
  * Formula: `Nights × Room Price × Guests` live display hota hai.
* **Included Amenities**: Complimentary breakfast tags, free cancellation up to 48-72 hours, private plunge pools, spas.

---

### 3. 🍽️ Restaurants & Fine Dining (Dining Reservations)
* **16 Handpicked Gastronomy Destinations Worldwide**:
  * *Le Jules Verne Eiffel Tower* (Paris, France) - Michelin Fine Dining
  * *Moss Restaurant Blue Lagoon* (Grindavík, Iceland) - Michelin Fine Dining
  * *Sheesh Mahal Lake Pichola* (Udaipur, India) - Royal Indian Terrace
  * *Ithaa Undersea Restaurant* (Rangali Island, Maldives) - Ocean Floor Dining
  * *Il San Pietro Cliffside Terrace* (Positano, Italy)
  * *Locavore NXT Ubud* (Bali, Indonesia)
  * *The Japanese Restaurant at Chedi Andermatt* (Switzerland)
  * *Pierchic Over-Water Dining* (Dubai, UAE)
  * *Kikunoi Roan 2-Star Kaiseki* (Kyoto, Japan)
  * *Ambrosia Sunset Restaurant & Caldera Wine Bar* (Santorini, Greece)
  * *Seki Restaurant & Cave Cellar* (Cappadocia, Turkey)
  * *Serengeti Boma Bush Barbecue* (Serengeti, Tanzania)
  * *FYN Restaurant Cape Town* (Cape Town, South Africa)
  * *Le Bernardin by Eric Ripert* (Midtown Manhattan, New York, USA)
  * *Mil Centro & Sacred Valley Gastronomy* (Cusco, Peru)
  * *Rātā Queenstown* (Queenstown, New Zealand)
* **Interactive Table Reserve Modal**:
  * Date aur Time slot selector (`12:00 PM`, `1:30 PM`, `7:00 PM`, `8:15 PM`, `9:30 PM`).
  * Party size (Guests: 1 to 10 guests).
  * Seating Atmosphere Preference: *Terrace / Sunset View, Candlelit Romantic Corner, Main Dining Hall, Private VIP Booth*.
  * Dietary and special request notes (Anniversary, Birthday, Vegan, Nut Allergy).
  * Live average cost estimate based on guest count.

---

### 4. ☕ Worldwide Cafes & Scenic Pit-Stops Guide (Informational Travel Directory)
* **Purely Informational & Discovery Directory**: Yeh section kisi bhi commercial booking ya bill ka hissa nahi hai. Iska uddeshya travelers ko worldwide har destination par maujood iconic local cafes, bakeries aur scenic pit stops ki poori jankari provide karna hai taaki koi bhi user search karke dekh sake ki kis jagah par konsa cafe hai aur waha kya special milta hai.
* **16 Curated Global Cafe & Pit-Stop Locations**:
  * *Café de Flore & Saint-Germain* (Paris, France) — Historic sidewalk terrace, hot chocolate & fresh croissants
  * *Zermatt Matterhorn Glacier Alpine Bakery & Cafe* (Zermatt, Switzerland) — Matterhorn mountain views & hot Swiss chocolate
  * *Positano Clifftop Lemon Sorbet & Espresso Bar* (Amalfi Coast, Italy) — Clifftop sea terrace & giant lemon granita
  * *Kyoto Ippodo Matcha & Heritage Tea Salon* (Kyoto, Japan) — 300-year-old ceremonial Uji matcha & Wagashi flowers
  * *Ubud Jungle Organic Cafe & Cold Brew Lab* (Bali, Indonesia) — Ayung river rainforest treehouse & Jamu tonics
  * *Jaipur Wind Palace Rooftop Masala Chai Cafe* (Jaipur, India) — Direct eye-level view of Hawa Mahal & kulhad chai
  * *Arabian Dunes Royal Karak Chai & Dates Lounge* (Dubai, UAE) — Desert sunset majlis & saffron Karak tea
  * *Santorini Cliffside Pomegranate & Greek Yogurt Bar* (Santorini, Greece) — 300m caldera clifftop vista & Greek yogurt
  * *Reykjavík Sandholt Artisan Bakery & Geothermal Coffee Bar* (Iceland) — Volcanic rye bread & cinnamon buns
  * *Cappadocia Sunrise Balloon Panorama Cafe & Baklava Lounge* (Turkey) — Fairy chimney terrace & sand coffee
  * *Serengeti Kopje Morning Arabica Coffee & Bush Outpost* (Tanzania) — Savannah rock outpost & Kilimanjaro roast
  * *Cape Point Cliffs Fynbos Tea & Ocean Cold Brew Bar* (South Africa) — Chapman's Peak ocean cliffs
  * *Central Park Loeb Boathouse Cafe & Espresso Bar* (New York, USA) — Central park lake rowboat views & bagels
  * *Sacred Valley Organic Cacao & Quinoa Artisan Cafe* (Cusco, Peru) — Pure Incan Chuncho cacao & altitude herbal teas
  * *Lake Wakatipu Artisan Bakery & Manuka Honey Station* (Queenstown, New Zealand) — Fiordland venison pies & flat whites
  * *Lake Como Bellagio Waterfront Espresso Bar* (Lake Como, Italy) — Lakeside promenade terrace under wisteria
* **Rich Cafe Details Modal (`CafeDetailModal`)**:
  * Exact Street Address & Landmark
  * Opening Hours & Best Time to Visit
  * Atmosphere & Seating highlights (Clifftop, Lakeside, Sidewalk, Rooftop)
  * Must-order signature specialties & drinks
  * Insider Traveler Tips
  * Direct 1-tap "Get Directions" on Google Maps
  * **Zero Commercial Booking/Billing**: Bilkul free travel guide directory.

---

### 5. 🎒 "Build Your Own Custom Travel Package" (4-Step Bespoke Configurator)
Users apna complete customized tour bundle khud design kar sakte hain:
* **Step 1**: Worldwide Destination & Dates choose karein (*Bali, Switzerland, Amalfi Coast, Kyoto, Dubai, Santorini, Paris, Iceland, India, Maldives, Cappadocia, Serengeti, Cape Town, New York, Peru, New Zealand*).
* **Step 2**: Luxury Hotel / Resort choose karein aur kitne nights rukna hai set karein.
* **Step 3**: Optional Michelin / Fine dining reservation add karein.
* **Step 4**: Private excursion add-ons choose karein (*Dedicated Personal Guide, 50-Photo Drone Session, Luxury Mercedes Airport Transfers*).
* **Live Calculation**:
  * Hotel + Dining (optional) + Excursions ka subtotal calculate hota hai.
  * **15% Instant Bundle Discount** automatically deduct hota hai.
  * Refreshments/Cafes ko bill aur custom bundle se puri tarah alag rakha gaya hai taaki user ka bill bilkul transparent aur confirmed booking services tak hi rahe.

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

### [v1.4.0] - Refreshments Converted to Pure Informational Cafe Directory (Removed from Cart & Bill)
* **Date**: November 2026
* **Changes & Key Highlights**:
  * **Removed from Cart & Bill**: User feedback ke anusaar Refreshments ko commercial cart, checkout bill aur booking engine se poori tarah hata diya gaya hai.
  * **Custom Package Builder Streamlined**:
    * Custom Trip Builder me se Refreshment selector step aur subtotal calculation ko completely remove kar diya gaya.
    * Builder ab ek clean 4-step configurator ban chuka hai: *1. Destination & Logistics → 2. Luxury Accommodation → 3. Fine Dining (Optional) → 4. Private Excursions & Add-ons*.
    * Bill breakdown aur 15% bundle discount me ab sirf confirmed accommodations, dining aur excursions shamil hain.
  * **Purely Informational Worldwide Cafe Directory**:
    * Refreshments section ko ek high-end "Worldwide Cafes & Scenic Pit-Stops Guide" me transform kiya gaya hai.
    * Visitors ke liye har destination par konsa famous cafe, alpine bakery, tea lounge ya road-trip stop hai uski complete details accessible hain.
  * **New `CafeDetailModal` Component**:
    * Har cafe card par "View Details" button jo ek dedicated travel guide modal open karta hai.
    * Modal me exact street address, opening hours, seating atmosphere, must-order signature specialties, aur traveler insider tips shamil hain.
    * 1-click **"Get Directions"** button diya gaya hai jo seedha Google Maps par cafe location open karta hai.
  * **Wishlist Integration Protected**: Saved favorites me cafes ko bookmark kiya ja sakta hai ("Cafe Guide • Explore Spot"), lekin unhe kabhi bhi cart ya bill me add nahi kiya ja sakta.
  * **Cart Sanitization**: LocalStorage me purane session ke kisi bhi refreshment item ko load hone par automatically sanitize kiya jata hai.

### [v1.3.0] - Worldwide Global Destinations Expansion (All Continents Included)
* **Date**: November 2026
* **Changes & Key Highlights**:
  * **Worldwide Continents Coverage**: Platform ko 6 specific destinations se expand karke pura global ecosystem banaya gaya hai jisme Europe, Asia, Middle East, Africa, Americas aur Oceania sabhi shamil hain.
  * **16 Curated Multi-Day Tour Packages**:
    * Naye world-renowned tour itineraries add kiye gaye: *Paris & French Riviera (France)*, *Iceland Northern Lights & Glaciers (Iceland)*, *Royal Rajasthan Fortresses & Taj Mahal (India)*, *Maldives Private Island Sanctuary (Maldives)*, *Cappadocia Hot Air Balloons & Istanbul Bazaars (Turkey)*, *Serengeti Big Five Safari (Tanzania)*, *Cape Town & Garden Route (South Africa)*, *New York Skyline to Grand Canyon (USA)*, *Machu Picchu Incan Trail (Peru)*, aur *New Zealand Southern Alps & Milford Sound (Oceania)*.
  * **16 World-Class Luxury Hotels & Resorts**:
    * Har region ka top 5-star heritage/resort property integrate kiya gaya, including *Hôtel Plaza Athénée Paris*, *The Retreat at Blue Lagoon Iceland*, *The Oberoi Udaivilas Udaipur*, *Soneva Fushi Maldives*, *Museum Hotel Cappadocia*, *Four Seasons Serengeti Lodge*, *The Silo Hotel Cape Town*, *The Plaza Hotel New York*, *Belmond Sanctuary Lodge Machu Picchu*, aur *Blanket Bay Lodge New Zealand*.
  * **16 Michelin & Iconic Restaurants**:
    * Handpicked fine dining tables: *Le Jules Verne Eiffel Tower*, *Moss Restaurant Blue Lagoon*, *Sheesh Mahal Lake Pichola*, *Ithaa Undersea Restaurant Maldives*, *Seki Cave Cellar Cappadocia*, *FYN Cape Town*, *Le Bernardin by Eric Ripert NYC*, *Mil Centro Sacred Valley Peru*, aur *Rātā Queenstown*.
  * **17 Curated Travel Refreshment Hampers & Highway Pit-Stops**:
    * Global picnic packs aur scenic road trip stops add kiye gaye: *Parisian Macaron & Champagne Hamper*, *Arctic Geothermal Berry Hydration Kit*, *Royal Rajasthani Saffron & Chai Box*, *Manhattan Bagel & Cold Brew Kit*, *Cappadocia Balloon Vista Cafe*, *Serengeti Kopje Morning Espresso*, *Cape Point Ocean Cliffs Cold Brew*, *Sacred Valley High-Altitude Cacao Bar*, aur *Lake Wakatipu Artisan Bakery*.
  * **Hero Unified Search & Substring Token Matching**:
    * Hero destination dropdown me 17 worldwide options integrate kiye gaye.
    * Filtering engine (`TourList`, `HotelList`, `RestaurantList`, `RefreshmentList`) ko multi-token smart substring matching ke sath enhance kiya gaya, jisse "Paris, France" ya "Rajasthan, India" choose karne par destination aur country dono seamlessly filter hote hain.
  * **Interactive Custom Package Builder Sync**:
    * 16 worldwide destination pills add kiye gaye jo 1 click par accommodation, dining table aur refreshment packs ko dynamically switch aur bundle discount me include karte hain.
  * **Footer Worldwide Directory**:
    * Footer me click karne yogya 12+ international destination quick-links jisse user 1 tap me directly filtered tours section par navigate kar sakta hai.

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
