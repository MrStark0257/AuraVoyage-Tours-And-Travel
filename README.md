# 🌍 AuraVoyage — Complete Tours, Travel, 3★–5★ Hotel Booking, Scenic Cafes & Custom Package Platform

> **AuraVoyage** ek comprehensive, modern aur minimalist Tours & Travel web application hai. Isme 38 multi-day curated tour packages across India and the World, 47 verified 3-Star, 4-Star aur 5-Star hotels & resorts, 32 Michelin restaurants, scenic mountain cafes & tea salons, highway pit-stops aur ek powerful Custom Package Studio shamil hain jisme customer kisi bhi destination ya custom route ke liye exact days aur options select kar sakta hai.

---

## 📌 Project Overview (Project Ka Parichay)

AuraVoyage ko travelers ke har stage ke travel needs ko dhyan me rakh kar design kiya gaya hai:
1. **38 Curated Multi-Day Tour Packages**: India (Himachal, Kashmir, Ladakh, Uttarakhand, Kerala, Goa, Rajasthan, Golden Triangle, Northeast, South) aur Worldwide (Europe, Asia, Americas, Africa, Oceania, 1-Month Grand Tours).
2. **47 Handpicked 3★ to 5★ Stays**: Luxury 5-star palaces se lekar cozy 3-star mountain chalets aur premium 4-star boutique hotels tak, interactive star-rating filter (`All`, `5★ Luxury`, `4★ Premium`, `3★ Cozy & Budget`) ke sath.
3. **32 Fine Dining Spots, Mountain Cafes & Beach Shacks**: Michelin tasting menus, riverside cafes (Cafe 1947 Manali), rooftop bistros, beach shacks (Curlies Goa), aur heritage tea salons.
4. **Interactive Custom Package Studio**: Freedom to design complete trip — custom route type karein ya list mese select karein, exact days & nights (1 to 60 days), 3★/4★/5★ hotel tier, meal plans, private chauffeured AC cabs, activities aur 15% automatic bundle discount.
5. **Multi-Currency Switcher**: Top nav bar me instant live currency switch (USD `$`, EUR `€`, GBP `£`, INR `₹`, AED `AED`).
6. **Decoupled Refreshment Guide**: Scenic highway pit stops aur mountain bakeries discovery guide ke roop me (billing ya checkout se zero friction).
7. **Trip Bag (Cart), Wishlist, Promo Codes (`VOYAGE10`, `WANDER20`), Confetti animations, Printable Digital Vouchers aur "My Bookings" system**.

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

### 1. 🌴 38 Curated Multi-Day Tour Packages (Tour Packages)
* **Dedicated Top-Level 'India' & Worldwide Region Tabs**:
  * Filter buttons: `All (38)`, `India (16)`, `Europe (9)`, `Asia (6)`, `Middle East (2)`, `Africa (2)`, `Americas (2)`, `Oceania (1)`.
  * **India Domestic Expeditions (16 Tours)**:
    1. *Kullu Manali & Solang Valley Snow & Pines* (6D/5N) - Himachal Pradesh
    2. *Shimla, Kufri & Chail Pine Heritage & Toy Train* (5D/4N) - Himachal Pradesh
    3. *Dharamshala, McLeodganj & Kangra Valley Zen Escape* (5D/4N) - Himachal Pradesh
    4. *Kashmir Paradise & Ladakh High Passes Odyssey* (8D/7N) - Kashmir & Ladakh
    5. *Leh Ladakh, Nubra Valley & Pangong Tso High Passes* (7D/6N) - Ladakh
    6. *Rishikesh Yoga, White-Water Rafting & Haridwar Ganga Aarti* (4D/3N) - Uttarakhand
    7. *Royal Rajasthan Fortresses, Palaces & Taj Mahal* (8D/7N) - Rajasthan
    8. *Jaisalmer Golden Fort, Thar Desert Safari & Sam Dunes* (5D/4N) - Rajasthan
    9. *Golden Triangle Classic: Delhi, Agra Taj Mahal & Jaipur Palaces* (6D/5N) - Golden Triangle
    10. *Kerala Backwaters, Munnar Tea Hills & Alleppey Houseboat* (7D/6N) - Kerala
    11. *Ooty, Coonoor & Nilgiri Mountain Toy Train Escape* (5D/4N) - Tamil Nadu
    12. *Goa Luxury Coastal & Portuguese Heritage Escape* (5D/4N) - Goa
    13. *Andaman Islands: Port Blair, Havelock & Radhanagar Beach* (6D/5N) - Andaman
    14. *Darjeeling Himalayan Sunrise & Gangtok Monasteries* (6D/5N) - West Bengal & Sikkim
    15. *Varanasi Spiritual Ghats, Sarnath & Sacred Ganga Dawn* (4D/3N) - Uttar Pradesh
    16. *Incredible India 30-Day Grand Odyssey: Himalayas to Backwaters* (30D/29N) - 1-Month Grand Tour
  * **Global International Expeditions (22 Tours)**:
    17. *Paris Romance & French Riviera Glamour* (8D/7N) - France
    18. *Swiss Alps Glacier Express & Alpine Lakes* (8D/7N) - Switzerland
    19. *Italy Grand Romance: Rome, Florence & Venice Gondolas* (8D/7N) - Italy
    20. *Amalfi Coast & Capri Private Yacht Odyssey* (6D/5N) - Italy
    21. *Santorini & Cycladic Islands Sunset Sailing* (7D/6N) - Greece
    22. *Iceland Northern Lights, Volcanic Lagoons & Glaciers* (6D/5N) - Iceland
    23. *London Royal Landmarks, Stonehenge & Scottish Highlands* (8D/7N) - United Kingdom
    24. *Grand European 28-Day Splendor: 1-Month Pan-European Grand Tour* (28D/27N) - Switzerland, France, Italy
    25. *Thailand Tropical Islands & Bangkok Grand Palaces* (7D/6N) - Thailand
    26. *Bali Island Serenity & Sacred Waterfalls* (7D/6N) - Indonesia
    27. *Singapore Futuristic Wonders, Marina Bay & Sentosa Island* (5D/4N) - Singapore
    28. *Kyoto Zen Gardens, Mount Fuji & Tokyo Lights* (9D/8N) - Japan
    29. *Maldives Private Island Overwater Sanctuary* (6D/5N) - Maldives
    30. *Dubai & Arabian Dunes Ultra-Luxury Escape* (5D/4N) - UAE
    31. *Abu Dhabi Cultural Splendor & Desert Oasis* (5D/4N) - UAE
    32. *Cappadocia Hot Air Balloons & Istanbul Grand Bazaars* (7D/6N) - Turkey
    33. *Egypt Pyramids of Giza, Luxor Temples & Nile Luxury Cruise* (7D/6N) - Egypt
    34. *Serengeti Big Five Safari & Zanzibar Sands* (10D/9N) - Tanzania
    35. *Cape Town, Table Mountain & Garden Route Drive* (8D/7N) - South Africa
    36. *New York Skyline to Grand Canyon Natural Wonders* (9D/8N) - United States
    37. *Machu Picchu Incan Trail & Sacred Valley Heritage* (7D/6N) - Peru
    38. *Australia Sydney Harbour, Blue Mountains & Great Barrier Reef* (8D/7N) - Australia
* **Day-by-Day Master Itinerary**: Har din ka schedule, lunch/dinner information aur hotel stay.
* **Inclusions & Exclusions**: Clear list of what is included (private SUV, spa sessions, entry passes, rail passes) aur exclusions.
* **Instant Departure Dates & Travelers Counter**: Live total price calculation.

---

### 2. 🏨 47 Curated 3-Star, 4-Star & 5-Star Accommodations (Hotels)
* **Star Tier Filtering**:
  * `All Stays (47)`
  * `5★ Luxury` (Heritage Palaces, Overwater Reserves, 5-Star Spas)
  * `4★ Premium` (Comfortable boutique hotels, mountain view lodges)
  * `3★ Cozy & Budget` (Authentic local cottages, riverside chalets, pine stays)
* **Rich Coverage Across Regions**:
  * **Himachal & Himalayas**: *The Himalayan Castle 5★*, *Apple Country Resort 4★*, *Snow Valley Resorts 3★*, *Wildflower Hall Shimla 5★*, *Combermere Shimla 4★*, *Hotel Willow Banks 3★*, *Hyatt Dharamshala 5★*, *Norbu The Montanna 4★*, *Pristine Pine Cottage 3★*.
  * **Kashmir & Ladakh**: *The Khyber Gulmarg 5★*, *Nedous Hotel 4★*, *Pine View Cottage Pahalgam 3★*, *Grand Dragon Leh 5★*, *Singge Palace 4★*, *Pangong Eco Camp 3★*.
  * **Uttarakhand**: *Ananda in the Himalayas 5★*, *Aloha On The Ganges 4★*, *Divine Resort & Spa 3★*.
  * **Rajasthan**: *The Oberoi Udaivilas 5★*, *Trident Udaipur 4★*, *Fateh Garh Palace 3★*, *Rambagh Palace Jaipur 5★*, *Suryagarh Jaisalmer 5★*.
  * **Kerala & Goa**: *Kumarakom Lake Resort 5★*, *Fragrant Nature 4★*, *Coconut Lagoon 3★*, *Taj Exotica Goa 5★*, *Alila Diwa 4★*, *Santana Beach Resort 3★*.
  * **Worldwide**: *Victoria-Jungfrau Grand Hotel 5★*, *Hotel Bernerhof 3★*, *Plaza Athénée Paris 5★*, *Hotel Malte Astotel Paris 4★*, *Hotel Danieli Venice 5★*, *Hotel Antiche Figure Venice 3★*, *Atlantis The Royal Dubai 5★*, *Rove Downtown Dubai 3★*, *Aman Tokyo 5★*, *Candeo Hotels Tokyo 4★*, *Four Seasons Bali 5★*, *Alila Ubud 4★*, *Soneva Fushi Maldives 5★*, *Museum Hotel Cappadocia 5★*.
* **Dynamic Stay Calculator**:
  * Check-in aur Check-out dates select karne par automatic nights calculate hoti hain.
  * Live pricing in selected currency (USD, EUR, GBP, INR, AED).

---

### 3. 🍽️ 32 Restaurants, Mountain Cafes & Beach Shacks (Dining Reservations)
* **Diverse Ambience Filters**:
  * `All`, `Mountain Cafe`, `Riverside Cafe`, `Beach Shack`, `Heritage Tea Salon`, `Rooftop Lounge`, `Oceanfront Sunset`, `Michelin Fine Dining`, `Historic Bistro`, `Garden Terrace`.
* **Authentic Local Gems Alongside Fine Dining**:
  * *Cafe 1947 Manali* (Riverside Italian & Wood-fired Pizza by Beas River) - Mountain Cafe ($$)
  * *Wake & Bake Cafe Shimla* (The Mall Road French Crepes & Organic Coffee) - Mountain Cafe ($)
  * *Kashi Art Cafe Fort Kochi* (Courtyard Gallery & Fresh Brews) - Garden Terrace ($$)
  * *Curlies Beach Shack Anjuna Goa* (Sunset Trance, Fresh Seafood & Waves) - Beach Shack ($$)
  * *Chai Jaai Tea Room Srinagar* (Jhelum Riverbank Kahwa & Kashmiri Samovar) - Heritage Tea Salon ($)
  * *Tapri Central Jaipur* (Rooftop Masala Chai & Street Snacks) - Rooftop Lounge ($)
  * *The Little Buddha Cafe Rishikesh* (Treehouse Organic Smoothie Bowl & Ganga View) - Riverside Cafe ($)
  * *Café de Paris Interlaken* (Swiss Fondue & Alpinist Hot Chocolate) - Historic Bistro ($$)
  * *Arabian Tea House Dubai* (Al Fahidi Heritage Courtyard Karak Chai) - Garden Terrace ($$)
  * *Le Jules Verne Eiffel Tower* (Paris, France) - Michelin Fine Dining ($$$$)
  * *Moss Restaurant Blue Lagoon* (Iceland) - Michelin Fine Dining ($$$$)
  * *Sheesh Mahal Lake Pichola* (Udaipur, India) - Royal Indian Terrace ($$$$)
  * *Ithaa Undersea Restaurant* (Maldives) - Ocean Floor Dining ($$$$)
  * *Il San Pietro Cliffside Terrace* (Positano, Italy) - Oceanfront Sunset ($$$$)
  * *Seki Cave Cellar* (Cappadocia, Turkey) - Historic Bistro ($$$)
* **Interactive Reservation Modal**:
  * Time slot, party size (1–10 guests), ambience preference, special requests.

---

### 4. ☕ Travel Refreshments & Pit Stops (Informational Discovery Guide)
* **Decoupled from Billing**: User feedback ke anusar Refreshment Hampers ko billing, cart aur custom builder se completely remove kar diya gaya hai. Ye section pure discovery ke liye hai.
* **Artisan Pit Stops**: Highway scenic stops, bakeries aur coffee stops around the world.

---

### 5. 🎒 Custom Package Studio ("Create Your Own Tour Package")
Customer ko poori aazadi milti hai apna custom package design karne ki:
* **Destination Selection**:
  * 30+ pre-configured domestic & international destinations across India, Europe, Asia, Americas, Africa & Oceania.
  * **"✏️ Type Custom Route" Free-Text Mode**: Customer koi bhi city, multi-city route (e.g. *Delhi -> Manali -> Kasol -> Shimla* ya *Paris -> Zermatt -> Rome*) type kar sakta hai. Koi limitation nahi hai.
* **Exact Days & Nights Selection**:
  * Steppers (`+` / `-`) aur direct numeric input se 1 se 60 days tak select karein.
  * Automatic return date calculator based on departure date.
* **Hotel Tier Selector**:
  * 3★ Cozy & Budget (`$45/night`)
  * 4★ Premium Boutique (`$95/night`)
  * 5★ Luxury Palace / Resort (`$220/night`)
  * Matching verified properties ka live interactive preview.
* **Meal Plan Options**:
  * Half Board (Breakfast & Dinner Included)
  * All Inclusive (All Meals & Snacks)
  * Breakfast Only
  * Self-Dining / Flexible
* **Transport Options**:
  * Private AC Cab / SUV with Dedicated Chauffeur
  * Self-Drive Rental Vehicle Assist
  * Airport / Railway Transfers Only
* **Activities & Concierge Add-ons**:
  * Dedicated Private Tour Guide
  * Professional 50-Photo Vacation Shoot
  * VIP Sightseeing Fast-Track Passes
* **Live Transparent Pricing & Bundle Savings**:
  * Real-time currency conversion with active currency.
  * **15% Automatic Custom Bundle Savings** applied.
  * 1-Click "Book Custom Package" adds the entire tailored trip directly to the Cart/Bag.

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

### [v1.6.0] - Unlimited Places, 3-Star to 5-Star Stays, Mountain Cafes & Full Custom Package Studio
* **Date**: November 2026
* **Changes & Key Highlights**:
  * **Unlimited Places & Custom Route Input**:
    * User feedback ("limitated jage dikhayi ja rahi he ... place me sare place add karo limitade nahi") ke mutabiq destination selection ko unrestricted banaya gaya:
      * **Catalog Expansion**: Manali, Shimla, Dharamshala, Spiti Valley, Kashmir, Gulmarg, Pahalgam, Leh Ladakh, Rishikesh, Mussoorie, Kerala Backwaters, Munnar, Goa (North & South), Udaipur, Jaipur, Jaisalmer, Agra, Andaman, Ooty, Darjeeling, Swiss Alps (Interlaken, Zermatt), Paris, Rome, Venice, Amalfi, London, Barcelona, Tokyo, Kyoto, Phuket, Bangkok, Bali, Dubai, Abu Dhabi, Maldives, Singapore, Cappadocia, New York, California, Serengeti, Cape Town, Queenstown, etc.
      * **"✏️ Type Custom Route" Feature**: Customer ab koi bhi custom destination ya multi-city circuit (jaise "Manali - Kasol - Jibhi - Tirthan Valley" ya "Delhi - Agra - Jaipur - Udaipur") free-text input me type karke package design kar sakta hai.
  * **3-Star, 4-Star & 5-Star Accommodations (Expanded to 47 Stays)**:
    * Platform par sirf 5-star nahi, balki har destination ke liye 3★, 4★, aur 5★ verified stays integrate kiye gaye:
      * **3★ Cozy & Budget Stays ($38 - $75 / ₹3,000 - ₹6,000)**: Clean mountain chalets, heritage havelis, plantation cottages, aur boutique stays with complimentary breakfast (e.g., *Apple Country Pine Resort Manali*, *Cedar Heights Shimla*, *Green Woods Munnar*, *Casa De Goa*, *Pine Spring Pahalgam*, *Udai Haveli Udaipur*, *Ganga Kinare Rishikesh*, *Hotel Bernerhof Interlaken*, *Rove Downtown Dubai*).
      * **4★ Premium Comfort ($95 - $165 / ₹8,000 - ₹14,000)**: Resorts with swimming pool, wellness spas, valley-view suites & lavish breakfast (e.g., *Manu Allaya Manali*, *The Clarkes Shimla*, *Fragrant Nature Kerala*, *Heritage Village Goa*, *Nedou's Gulmarg*, *Alsisar Haveli Jaipur*, *Aloha On The Ganges Rishikesh*, *Boutique Hotel Bellevue Swiss Alps*, *Vida Downtown Dubai*).
      * **5★ Ultra-Luxury Palaces & Resorts ($280 - $650+)**: World-class palace suites, overwater villas, and five-star luxury (e.g., *The Himalayan Manali*, *Kumarakom Lake Resort*, *Taj Exotica Goa*, *The Khyber Gulmarg*, *The Oberoi Udaivilas*, *The Chedi Andermatt*, *Hôtel Plaza Athénée Paris*, *Atlantis The Royal Dubai*).
    * **Interactive Star Rating Filter in Stays Section (`HotelList.tsx`)**:
      * Filter buttons: `All Stays (47)`, `5★ Luxury`, `4★ Premium`, `3★ Cozy & Budget`.
      * Golden star badges (`★★★`, `★★★★`, `★★★★★`) on all cards.
  * **Mountain Cafes, Beach Shacks & Tea Salons (Expanded to 32 Venues)**:
    * High-end dining ke sath budget-friendly aur iconic local spots add kiye gaye:
      * *Cafe 1947 & Riverside Acoustic Lounge* (Old Manali) — Wood-fired pizzas & trout.
      * *Wake & Bake Cafe The Ridge* (Shimla) — French savory crepes & specialty coffee.
      * *Kashi Art Cafe & Heritage Courtyard* (Fort Kochi, Kerala) — Artisan bakery & organic cafe.
      * *Curlies Beach Shack & Sunset Bar* (Anjuna Beach, Goa) — Fresh Arabian sea catch & beach vibes.
      * *Chai Jaai Tea Room & Heritage Bakery* (Srinagar, Kashmir) — Saffron Kahwa & Noon Chai.
      * *Tapri The Tea House Central Park* (Jaipur) — Masala Kulhad Chai & street food delicacies.
      * *The Little Buddha Cafe & River Treehouse* (Rishikesh) — Mountain health bowls & wood-fired pizza.
      * *Cafe de Paris & Alpine Bakery* (Interlaken, Swiss Alps) — Swiss cheese fondue & hot chocolate.
      * *Arabian Tea House* (Al Fahidi, Dubai) — Authentic Emirati breakfast & karak chai.
  * **Full Custom Package Studio (`CustomPackageBuilder.tsx`)**:
    * Customer ab step-by-step complete freedom ke sath apna package create kar sakta hai:
      1. **Destination**: Catalog me se choose karein ya "Type Custom Route" me apni marzi ka place dalein.
      2. **Days & Nights**: Exact number of Days (1 se 60 days) with `+` / `-` steppers aur direct number input + Departure Date calendar with auto-calculated Return Date.
      3. **Hotel Star Tier**: 3★ Budget, 4★ Premium, ya 5★ Luxury choose karein, aur matching verified local hotels me se pasand karein.
      4. **Food & Meal Plan**: Daily Breakfast & Dinner (Half Board), All Meals (B+L+D), Breakfast Only, ya Independent / Street Food explorer.
      5. **Transport Mode**: Private Dedicated AC Cab / SUV with Chauffeur, Self-Drive Assist, ya Transfers Only.
      6. **Signature Excursions**: Dedicated Local Guide, Vacation Photography Session, Scenic/Adventure Passes.
      7. **Live Pricing**: Customer ki chosen currency (`₹ INR`, `$ USD`, etc.) me itemized math aur automatic **15% bundle discount** calculation.
      8. **1-Click Booking**: "Book Custom Package" button se complete itinerary bag me add hokar instant checkout open hota hai.

### [v1.6.0] - Pan-India & Global Destination Expansion, 3★–5★ Stays, Scenic Cafes & Custom Package Studio
* **Date**: November 2026
* **Changes & Key Highlights**:
  * **38 Curated Multi-Day Tour Packages**:
    * 15 naye tour packages add kiye gaye (10 domestic Indian + 5 global international), jisse total tour packages 23 se badhkar **38** ho gaye hain.
    * **16 Domestic Indian Tours**: Kullu Manali, Shimla & Kufri, Dharamshala & McLeodganj, Leh Ladakh Nubra & Pangong Tso, Kashmir Paradise, Rishikesh Yoga & Rafting, Royal Rajasthan, Jaisalmer Thar Desert, Golden Triangle (Delhi, Agra, Jaipur), Kerala Backwaters, Ooty & Nilgiris, Goa Coastal, Andaman & Nicobar Islands, Darjeeling & Gangtok, Varanasi Spiritual Ghats, aur 30-Day Incredible India Grand Tour.
    * **22 Global Worldwide Tours**: Paris, Swiss Alps, Italy Grand Romance (Rome/Florence/Venice), Amalfi Coast, Santorini, Iceland, London & Highlands, 28-Day Grand European Splendor, Thailand, Bali, Singapore, Kyoto, Maldives, Dubai, Abu Dhabi, Cappadocia, Egypt Pyramids, Serengeti Safari, Cape Town, New York & Grand Canyon, Machu Picchu, aur Sydney & Great Barrier Reef.
    * **Dedicated 'India' Region Tab**: Tour filter bar me 'India' ko ek distinct primary tab banaya gaya (`All`, `India`, `Europe`, `Asia`, `Middle East`, `Africa`, `Americas`, `Oceania`).
  * **47 Handpicked Accommodations Across 3-Star, 4-Star & 5-Star Tiers**:
    * Luxury 5-star properties ke sath 3-star cozy chalets aur 4-star boutique stays add kiye gaye (Manali, Shimla, Dharamshala, Leh, Kashmir, Rishikesh, Rajasthan, Kerala, Goa, Swiss Alps, Paris, Dubai, Bali, Tokyo, Venice).
    * **Interactive Star Rating Filter**: `All Stays (47)`, `5★ Luxury`, `4★ Premium`, `3★ Cozy & Budget` quick filters + gold star rating badges on every card.
  * **32 Dining Spots, Mountain Cafes, Riverside Eateries & Beach Shacks**:
    * Fine dining ke sath authentic local spots shamil kiye gaye: *Cafe 1947 Manali* (Riverside Cafe), *Wake & Bake Shimla* (Mountain Cafe), *Kashi Art Cafe Kochi*, *Curlies Beach Shack Goa*, *Chai Jaai Srinagar* (Heritage Tea Salon), *Tapri Central Jaipur* (Rooftop Lounge), *The Little Buddha Cafe Rishikesh*, *Café de Paris Interlaken*, aur *Arabian Tea House Dubai*.
    * Filter bar me `Mountain Cafe`, `Riverside Cafe`, `Beach Shack`, `Heritage Tea Salon` options integrate kiye gaye.
  * **Interactive Custom Package Studio ("Create Your Own Tour Package")**:
    * **Unlimited Destinations**: 30+ pre-listed global/domestic spots ya **"✏️ Type Custom Route"** mode jisme customer koi bhi city ya custom multi-city itinerary freely type kar sakta hai.
    * **Exact Days & Nights**: 1 se 60 days tak steppers (`+`/`-`) aur direct numeric input se set karein with auto return date calculator.
    * **Hotel Star Tier Selection**: 3★ ($45/night), 4★ ($95/night), 5★ ($220/night) with matching local properties preview.
    * **Meal Plans & Local Cafes**: Half Board, All Inclusive, Breakfast Only, Self-Dining + optional local cafe reservation.
    * **Transport Selection**: Dedicated Private AC Cab/SUV with Chauffeur, Self-Drive Assist, Transfers Only.
    * **Live Itemized Math & 15% Automatic Bundle Savings**: Real-time pricing in active currency with 1-click cart addition.
  * **Hero Cleanup Reconfirmed**:
    * `Featured: ...` quick search pills row removed from Hero, giving a clean, minimalist UI with expanded worldwide destination dropdown and 3★ to 5★ verified stay badges.

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
