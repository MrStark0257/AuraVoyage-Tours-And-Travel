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
* **Worldwide Global Destinations Across 6 Continents & India**:
  * **India (Domestic & Cultural)**:
    * *Kullu Manali & Solang Valley Snow & Pines* (6D/5N) - Himachal Pradesh, India
    * *Kerala Backwaters, Munnar Tea Hills & Alleppey Houseboat* (7D/6N) - Kerala, India
    * *Goa Luxury Coastal & Portuguese Heritage Escape* (5D/4N) - Goa, India
    * *Kashmir Paradise & Ladakh High Passes Odyssey* (8D/7N) - Kashmir & Ladakh, India
    * *Royal Rajasthan Fortresses, Palaces & Taj Mahal* (8D/7N) - Rajasthan, India
  * **1-Month Grand Expeditions**:
    * *Incredible India 30-Day Grand Odyssey: Himalayas to Backwaters* (30D/29N) - All-India Grand Tour
    * *Grand European 28-Day Splendor: 1-Month Pan-European Grand Tour* (28D/27N) - Switzerland, France, Italy
  * **Europe**:
    * *Paris Romance & French Riviera Glamour* (8D/7N) - France
    * *Swiss Alps Glacier Express & Alpine Lakes* (8D/7N) - Switzerland
    * *Amalfi Coast & Capri Private Yacht Odyssey* (6D/5N) - Italy
    * *Santorini & Cycladic Islands Sunset Sailing* (7D/6N) - Greece
    * *Iceland Northern Lights, Volcanic Lagoons & Glaciers* (6D/5N) - Iceland
  * **Asia & Middle East**:
    * *Thailand Tropical Islands & Bangkok Grand Palaces* (7D/6N) - Thailand
    * *Bali Island Serenity & Sacred Waterfalls* (7D/6N) - Indonesia
    * *Kyoto Zen Gardens, Mount Fuji & Tokyo Lights* (9D/8N) - Japan
    * *Maldives Private Island Overwater Sanctuary* (6D/5N) - Maldives
    * *Dubai & Arabian Dunes Ultra-Luxury Escape* (5D/4N) - UAE
    * *Cappadocia Hot Air Balloons & Istanbul Grand Bazaars* (7D/6N) - Turkey
  * **Africa, Americas & Oceania**:
    * *Serengeti Big Five Safari & Zanzibar Sands* (10D/9N) - Tanzania
    * *Cape Town, Table Mountain & Garden Route Drive* (8D/7N) - South Africa
    * *New York Skyline to Grand Canyon Natural Wonders* (9D/8N) - United States
    * *Machu Picchu Incan Trail & Sacred Valley Heritage* (7D/6N) - Peru
    * *New Zealand Southern Alps & Milford Sound Fjords* (10D/9N) - New Zealand
* **Day-by-Day Master Itinerary**: Har din ka schedule, lunch/dinner information aur hotel stay.
* **Inclusions & Exclusions**: Clear list of what is included (private SUV, spa sessions, entry passes, rail passes) aur exclusions.
* **Filter & Sort**: Duration filter (1-Month, 2-Weeks, 1-Week, Short Escape), Departure month filter, Theme (Cultural, Adventure, Honeymoon, Luxury, Wildlife), Region (India, Europe, Asia, Americas, Africa, Oceania) aur Price/Rating sorting.
* **Instant Departure Dates & Travelers Counter**: Live total price calculation.

---

### 2. 🏨 Hotel, Luxury Resort & Villa Booking (Hotels)
* **24 Curated 5-Star Accommodations Across India & The World**:
  * *The Himalayan Luxury Resort & Castle* (Old Manali, Himachal Pradesh, India)
  * *Kumarakom Lake Resort & Luxury Houseboats* (Kumarakom & Alleppey, Kerala, India)
  * *Taj Exotica Resort & Spa Goa* (Benaulim, South Goa, India)
  * *The Khyber Himalayan Resort & Spa* (Gulmarg & Srinagar, Kashmir, India)
  * *The Oberoi Udaivilas* (Lake Pichola, Udaipur, India)
  * *Victoria-Jungfrau Grand Hotel & Spa* (Interlaken, Swiss Alps, Switzerland)
  * *The Chedi Andermatt* (Andermatt, Switzerland)
  * *Hôtel Plaza Athénée* (Avenue Montaigne, Paris, France)
  * *Hotel Danieli, Luxury Collection* (Venice, Italy)
  * *Le Sirenuse Positano* (Amalfi Coast, Italy)
  * *Aman Tokyo* (Otemachi, Tokyo, Japan)
  * *Hoshinoya Kyoto* (Kyoto, Japan)
  * *Amanpuri Beach Sanctuary* (Pansea Beach, Phuket, Thailand)
  * *Atlantis The Royal* (Palm Jumeirah, Dubai, UAE)
  * *The Retreat at Blue Lagoon* (Grindavík, Iceland)
  * *Grace Hotel, Auberge Resorts Collection* (Santorini, Greece)
  * *Soneva Fushi Overwater Reserve* (Baa Atoll, Maldives)
  * *Museum Hotel Cappadocia* (Uchisar, Cappadocia, Turkey)
  * *Four Seasons Safari Lodge Serengeti* (Serengeti, Tanzania)
  * *The Silo Hotel* (V&A Waterfront, Cape Town, South Africa)
  * *The Plaza Hotel* (Fifth Avenue, New York, USA)
  * *Belmond Sanctuary Lodge* (Machu Picchu Citadel, Peru)
  * *Blanket Bay Luxury Lodge* (Lake Wakatipu, Queenstown, New Zealand)
  * *Four Seasons Resort Bali at Sayan* (Ubud, Bali, Indonesia)
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

### 4. ☕ Travel Refreshments, Cafes & Highway Pit Stops (Discovery Guide)
* **Informational Showcase & En-Route Travel Guide** (Zero billing / No cart charges):
  * Website par refreshments section ko ek curated informational guide ki tarah rakha gaya hai taaki travelers apni journey ke dauran top global artisan cafes, traditional tea houses, aur scenic highway pit-stops ko explore kar sakein.
  * **Artisan Cafes & Bakeries**: *Café de Flore (Paris)*, *Sandholt Artisan Bakery (Reykjavík)*, *Positano Clifftop Lemon Sorbet Bar (Italy)*, *Lake Wakatipu Artisan Bakery (New Zealand)*.
  * **Heritage Tea Houses & Lounges**: *Kyoto Ippodo Matcha Salon (Japan)*, *Jaipur Wind Palace Rooftop Masala Chai (India)*, *Arabian Dunes Royal Karak Chai & Dates Lounge (Dubai)*, *Cappadocia Balloon Panorama Cafe (Turkey)*.
  * **Scenic Road-Trip & Vitality Stops**: *Zermatt Matterhorn Glacier Bakery (Switzerland)*, *Ubud Jungle Organic Cold Brew Lab (Bali)*, *Santorini Cliffside Pomegranate Bar (Greece)*, *Serengeti Kopje Morning Espresso (Tanzania)*.
* Har card me must-try specialties, opening hours, atmosphere, aur local traveler tips shamil hain.

---

### 5. 🎒 "Build Your Own Custom Travel Package" (Configurator)
Users apna complete customized tour bundle khud design kar sakte hain (Hotel + Dining + Excursion Add-ons):
* **Step 1**: Destination choose karein (*Bali, Switzerland, Amalfi Coast, Kyoto, Dubai, Santorini, Paris, Iceland, India, Maldives, Cappadocia, Serengeti, Cape Town, New York, Peru, New Zealand*).
* **Step 2**: Hotel choose karein aur kitne nights rukna hai set karein.
* **Step 3**: Optional dinner tasting reservation experience add karein.
* **Step 4**: Private excursion & concierge add-ons choose karein (*Dedicated Guide, 50-Photo Drone Shoot, Luxury Mercedes Transfers*).
* **Live Calculation**:
  * Hotel + Dining + Addons ka subtotal calculate hota hai (Refreshments bill me se removed hai).
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

### [v1.5.1] - Minimalist Hero Cleanup (Removed Featured Keyword Pills)
* **Date**: November 2026
* **Changes & Key Highlights**:
  * **Removed Redundant Featured Pills**: Hero unified search bar ke neeche se `Featured: Kullu Manali | Kerala | Kashmir | ...` quick pills row ko completely remove kiya gaya hai.
  * **Clean & Decluttered Hero Interface**: Search form ab ultra-minimalist aur sleek look provide karta hai, jisme traveler directly search input, duration filter, ya departure month select karke search kar sakta hai.

### [v1.5.0] - Comprehensive Indian & Worldwide Destinations, 1-Month Tours, Duration Filters & Navbar Currency Switcher
* **Date**: November 2026
* **Changes & Key Highlights**:
  * **Comprehensive Domestic Indian Destinations (Kullu Manali, Kerala, Goa, Kashmir, Rajasthan)**:
    * User request ke anusar domestic Indian travel spots ko fully integrate kiya gaya:
      * *Kullu Manali & Solang Valley Snow & Pines* (Himachal Pradesh, India - 6D/5N): Solang snowmobiling, Rohtang Pass, Old Manali cedar trails, private pine chalet stay.
      * *Kerala Backwaters, Munnar Tea Hills & Alleppey Houseboat* (Kerala, India - 7D/6N): Air-conditioned luxury Kettuvallam private cruise, spice plantation tour, tea valleys.
      * *Goa Luxury Coastal & Portuguese Heritage Escape* (Goa, India - 5D/4N): Luxury beach villa, Old Goa Latin Quarter heritage walk, private sunset catamaran cruise.
      * *Kashmir Paradise & Ladakh High Passes Odyssey* (Kashmir & Ladakh, India - 8D/7N): Private Dal Lake Shikara, Gulmarg Kongdoori gondola pass, Sonamarg glacier drive.
      * *Royal Rajasthan Fortresses, Palaces & Taj Mahal* (Rajasthan, India - 8D/7N): Udaipur Lake Pichola private boat, Jaipur Amber Fort royal tour, Jodhpur blue city.
  * **Authentic 5-Star Hotels for Every Destination**:
    * Har destination ke liye authentic local 5-star properties add kiye gaye:
      * Manali: *The Himalayan Luxury Resort & Castle* (Old Manali, Himachal Pradesh)
      * Kerala: *Kumarakom Lake Resort & Luxury Houseboats* (Kumarakom & Alleppey, Kerala)
      * Goa: *Taj Exotica Resort & Spa Goa* (Benaulim, South Goa)
      * Kashmir: *The Khyber Himalayan Resort & Spa* (Gulmarg & Srinagar, Kashmir)
      * Rajasthan: *The Oberoi Udaivilas* (Lake Pichola, Udaipur)
      * Switzerland: *Victoria-Jungfrau Grand Hotel & Spa* (Interlaken, Swiss Alps) & *The Chedi Andermatt*
      * Japan: *Aman Tokyo* (Otemachi, Tokyo) & *Hoshinoya Kyoto*
      * Thailand: *Amanpuri Beach Sanctuary* (Pansea Beach, Phuket)
      * Italy: *Hotel Danieli, Luxury Collection* (Venice) & *Le Sirenuse Positano*
      * France: *Hôtel Plaza Athénée* (Paris)
  * **Authentic Fine Dining Tables for Every Destination**:
    * Authentic destination culinary spots:
      * Manali: *Johnson's Cafe & Alpine Trout Bar* (Himalayan River Trout, Morel Pizzas)
      * Kerala: *The Rice Boat at Taj Malabar* (Karimeen Pollichathu, Tiger Prawn Moilee)
      * Goa: *The Fisherman's Wharf Waterfront Dining* (Goan Crab Xec Xec, Prawn Balchão)
      * Kashmir: *Ahdoos Traditional Royal Wazwan* (Royal Rista, Gushtaba, Nadru Yakhni)
      * Rajasthan: *Sheesh Mahal Lake Pichola*
      * Tokyo: *Ginza Kyubey Omakase* (Edo-Mae Omakase Sushi)
      * Thailand: *Blue Elephant Royal Thai Gastronomy* (Massaman Lamb Shank, Royal Thai Curries)
      * Venice: *Ristorante Da Ivo* (Venetian Cuttlefish Ink Risotto)
  * **1-Month Grand Expeditions (30-Day Multi-Destination Packages)**:
    * *Incredible India 30-Day Grand Odyssey: Himalayas to Backwaters* (30 Days / 29 Nights): Delhi, Manali, Kashmir, Jaipur, Udaipur, Kerala Backwaters, aur South Goa ka complete month-long journey.
    * *Grand European 28-Day Splendor: 1-Month Pan-European Grand Tour* (28 Days / 27 Nights): Swiss Alps, Paris, Venice, and Amalfi Coast multi-country luxury voyage.
  * **Custom Package Builder (`CustomPackageBuilder.tsx`) Re-Architecture**:
    * Flat cramped 16 pills ko badal kar categorized **Region Tabs** (India, Europe, Asia, Americas & Africa, 1-Month Expeditions) aur interactive city cards integrate kiye gaye.
    * **Dynamic Hotel Strict Matching**: Jab user Manali, Kerala, Goa ya Kashmir select karta hai, toh strictly usi country aur destination ke verified hotels display hote hain. Kabhi bhi random foreign hotels (jaise Bali ya Switzerland) me fallback nahi hota.
    * **Full Days, Nights & Month Selection**:
      * Departure date calendar picker with automatic return date calculation.
      * Duration dropdown: 3 Nights (4 Days), 5 Nights (6 Days), 7 Nights (1 Week), 10 Nights, 14 Nights (2 Weeks), 21 Nights (3 Weeks), 28/30 Nights (1 Full Month Grand Tour).
      * Number of guests selection (1 Solo, 2 Couple, 3-4 Family, 6+ Private Group).
    * **Zero Refreshments in Builder & Bill**: User command #9 and #10 ke accordance refreshments custom builder aur billing se completely hata diye gaye hain; platform par refreshments sirf ek informational showcase guide ke taur par rehta hai.
    * Automatic **15% bundle discount** calculation on combined hotel, dining, and excursion add-ons.
  * **Fix Search & 0-Results Issue**:
    * Tokenized multi-keyword fuzzy matching (`tokens.every/some`) implement kiya gaya taaki user agar "Manali", "Kerala", "Houseboat", "Trout", "Swiss", ya "Dubai Dunes" type kare ya click kare, toh accurate results display hon.
    * Hero me free-text search input add kiya gaya jisme user kisi bhi city, hotel, country ya keyword ko type karke live search kar sakta hai.
    * Hero featured search pills update kiye gaye: *Kullu Manali*, *Kerala*, *Kashmir*, *Goa*, *Swiss Alps*, *Paris*, *Kyoto*, *Dubai*, *Bali*, *1-Month Tours*.
  * **Main Navbar Currency Switcher**:
    * User request ("usme currency change ka option rakho taki sab apni currancy me dekh paye price kya he or ye setting nav baar me honi chahiye") ke anusaar currency switcher ko top black bar ke alawa **main Navbar header** me prominently add kiya gaya hai (Wishlist, Bookings, aur Cart ke sath).
    * Click karte hi clean dropdown me symbols aur currency codes (`₹ INR`, `$ USD`, `€ EUR`, `£ GBP`, `AED AED`) available hain.
    * Mobile slide-out drawer me bhi convenient currency toggle pill bar provide kiya gaya hai.
  * **Footer Worldwide Directory Update**:
    * Footer me Kullu Manali, Kerala Backwaters, Kashmir & Gulmarg, Goa Coast, aur 1-Month Expeditions ke 1-click filter links add kiye gaye hain.

### [v1.4.0] - Refreshments Decoupled from Billing & Custom Builder (Pure Travel Showcase)
* **Date**: November 2026
* **Changes & Key Highlights**:
  * **Removed from Bill & Cart**: User feedback ke anusar Refreshment Hampers ko billing, cart calculation aur checkout se complete decouple kar diya gaya hai. Refreshments ab customer ke total invoice ya booking charges me include nahi hote.
  * **Removed from Custom Package Builder (`CustomPackageBuilder.tsx`)**:
    * Custom package builder me se Refreshments selection step completely remove kar diya gaya hai.
    * Steps ko renumber kiya gaya: Step 1 (Destination & Dates) -> Step 2 (Select Accommodation) -> Step 3 (Dining Reservation - Optional) -> Step 4 (Trip Add-ons & Excursions).
    * Subtotal aur 15% instant bundle discount calculation ab sirf Hotel Stay + Dining + Excursion Add-ons par calculate hota hai.
    * Order summary breakdown card aur bundle booking payloads se refreshments references clean kar diye gaye.
  * **Informational Travel Showcase & Guide Transformation**:
    * Refreshment cards (`RefreshmentCard.tsx`) me se quantity steppers (`+/-`) aur "Add to Bag" buttons remove kar diye gaye.
    * Cards ko rich informative format me enhance kiya gaya: Must-Try Specialties, Local Atmosphere, Opening Hours, aur Curated Traveler Tips display hote hain with an elegant "Guide Highlight" badge.
  * **Wishlist & Cart UX Refinement**:
    * Wishlist drawer me saved refreshments ke liye "Move to Bag" button disabled rakha gaya hai taaki billing integrity maintain rahe.
    * Cart drawer empty state messaging update kar di gayi hai.

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
