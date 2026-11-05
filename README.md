# 🌍 AuraVoyage — Complete Tours, Travel, 1★–5★ Hotel Booking, Scenic Cafes & Custom Package Platform

> **AuraVoyage** ek comprehensive, modern aur minimalist Tours & Travel web application hai. Isme 38 multi-day curated tour packages across India and the World, 72 verified 1-Star se lekar 5-Star accommodations (backpacker hostels, budget lodges, cozy chalets, boutique resorts aur luxury palaces), 64 Michelin restaurants, scenic mountain cafes, desert lounges, courtyard eateries & beach shacks, highway pit-stops aur ek powerful Custom Package Studio shamil hain jisme customer kisi bhi destination ya custom route ke liye exact days aur options select kar sakta hai.

---

## 📌 Project Overview (Project Ka Parichay)

AuraVoyage ko travelers ke har stage ke travel needs ko dhyan me rakh kar design kiya gaya hai:
1. **38 Curated Multi-Day Tour Packages**: India (Himachal, Kashmir, Ladakh, Uttarakhand, Kerala, Goa, Rajasthan, Golden Triangle, Northeast, South) aur Worldwide (Europe, Asia, Americas, Africa, Oceania, 1-Month Grand Tours).
2. **72 Handpicked 1★ to 5★ Stays**: 1-Star backpacker hostels & homestays se lekar 2-Star tourist lodges, 3-Star cozy chalets, 4-Star boutique resorts aur 5-Star grand palaces tak, complete 1★ se 5★ interactive filter buttons (`All Stays`, `5★ Luxury`, `4★ Premium`, `3★ Cozy`, `2★ Standard`, `1★ Backpacker & Inn`) ke sath.
3. **64 Fine Dining Spots, Mountain Cafes, Desert Lounges & Beach Shacks**: Har single domestic aur worldwide destination ke liye authentic local dining — Dharamshala, McLeodganj, Leh Ladakh, Jaisalmer, Jaipur, Jodhpur, Agra, Havelock, Ooty, Darjeeling, Gangtok, Varanasi, Kasol, Rome, Florence, London, Edinburgh, Singapore, Cairo, Sydney, Amsterdam, Prague, Abu Dhabi, Marrakech, Hanoi, Seoul, etc.
4. **Interactive Custom Package Studio**: Freedom to design complete trip — custom route type karein ya list mese select karein, exact days & nights (1 to 60 days), 1★ se 5★ hotel star tiers, meal plans, private chauffeured AC cabs, activities aur 15% automatic bundle discount.
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

### 2. 🏨 72 Curated Accommodations Across All 1-Star to 5-Star Tiers (Hotels, Hostels & Resorts)
* **Complete 1★ to 5★ Star Tier Filtering**:
  * `All Stays (72)`
  * `5★ Luxury` (Heritage Palaces, Overwater Reserves, 5-Star Spas)
  * `4★ Premium` (Comfortable boutique hotels, panoramic mountain view lodges)
  * `3★ Cozy` (Authentic local cottages, riverside chalets, pine stays)
  * `2★ Standard` (Clean private rooms, budget havelis, tourist lodges, attached baths)
  * `1★ Backpacker & Inn` (Social backpacker hostels, mountain homestays, pod dorms, beach huts)
* **Comprehensive 1-Star to 5-Star Coverage Across Regions**:
  * **1-Star Backpacker Hostels & Homestays ($12 - $32/night)**:
    * *Zostel Old Manali Backpacker Hostel (1★, $16)* - Old Manali, Himachal Pradesh
    * *The Hosteller Kasol Parvati Riverside (1★, $14)* - Kasol, Parvati Valley, Himachal Pradesh
    * *McLeodganj Himalayan Backpacker Inn (1★, $15)* - McLeodganj, Dharamshala
    * *Old Town Leh Himalayan Homestay (1★, $18)* - Leh, Ladakh
    * *Rishikesh Ganga Ghat Backpacker Stay (1★, $14)* - Tapovan, Rishikesh
    * *Anjuna Beach Palm Huts Goa (1★, $18)* - Anjuna Beach, North Goa
    * *Sam Sand Dunes Desert Backpacker Camp (1★, $16)* - Jaisalmer, Rajasthan
    * *Ganges View Backpacker Hostel Varanasi (1★, $12)* - Dashashwamedh Ghat, Varanasi
    * *Fort Kochi Backpacker Art House (1★, $15)* - Fort Kochi, Kerala
    * *St. Christopher's Inn Canal Paris (1★, $28)* - Paris, France
    * *Balmers Mountain Backpacker Hostel Interlaken (1★, $32)* - Swiss Alps, Switzerland
    * *The Yellow Hostel Rome Termini (1★, $26)* - Rome, Italy
    * *Nine Hours Capsule Hotel Shinjuku Tokyo (1★, $28)* - Tokyo, Japan
  * **2-Star Standard Lodges & Guest Houses ($20 - $55/night)**:
    * *Hotel Beas View & Apple Orchards Manali (2★, $24)* - Manali, Himachal Pradesh
    * *Shimla Heritage View Lodge (2★, $28)* - The Ridge, Shimla
    * *Dal Lake Traditional Wooden Houseboat Stay (2★, $32)* - Srinagar, Kashmir
    * *Golden Fort Haveli Guest House Jaisalmer (2★, $22)* - Jaisalmer, Rajasthan
    * *Jaipur Traditional Haveli Inn (2★, $26)* - Jaipur, Rajasthan
    * *Alleppey Backwater Village Guest House (2★, $25)* - Alleppey, Kerala
    * *Calangute Palms Budget Stay Goa (2★, $24)* - Calangute, Goa
    * *Hotel City Star Agra Taj View (2★, $20)* - Agra, Uttar Pradesh
    * *Ibis Budget Paris Porte de Montmartre (2★, $48)* - Paris, France
    * *Hotel City Garni Interlaken (2★, $55)* - Interlaken, Switzerland
    * *ibis budget Singapore Crystal (2★, $45)* - Singapore
    * *Hotel Horison Ubud Bali (2★, $26)* - Ubud, Bali, Indonesia
  * **3-Star Cozy Comfort & Chalets ($35 - $65/night)**:
    * *Snow Valley Resorts Manali (3★)*, *Hotel Willow Banks Shimla (3★)*, *Pristine Pine Cottage Dharamshala (3★)*, *Pangong Eco Camp Ladakh (3★)*, *Pine View Cottage Pahalgam (3★)*, *Divine Resort Rishikesh (3★)*, *Fateh Garh Palace Udaipur (3★)*, *Coconut Lagoon Kerala (3★)*, *Santana Beach Resort Goa (3★)*, *Hotel Bernerhof Interlaken (3★)*, *Hotel Antiche Figure Venice (3★)*, *Rove Downtown Dubai (3★)*.
  * **4-Star Premium Boutique Resorts ($75 - $160/night)**:
    * *Apple Country Resort Manali (4★)*, *Combermere Shimla (4★)*, *Norbu The Montanna Dharamshala (4★)*, *Singge Palace Leh (4★)*, *Nedous Hotel Gulmarg (4★)*, *Aloha On The Ganges Rishikesh (4★)*, *Trident Udaipur (4★)*, *Fragrant Nature Kerala (4★)*, *Alila Diwa Goa (4★)*, *Hotel Malte Astotel Paris (4★)*, *Candeo Hotels Tokyo (4★)*, *Alila Ubud Bali (4★)*, *Maya Ubud Resort (4★)*.
  * **5-Star World-Class Palaces & Luxury Reserves ($180 - $850/night)**:
    * *The Himalayan Castle Manali (5★)*, *Wildflower Hall Shimla (5★)*, *Hyatt Dharamshala (5★)*, *Grand Dragon Leh (5★)*, *The Khyber Gulmarg (5★)*, *Ananda in the Himalayas (5★)*, *The Oberoi Udaivilas Udaipur (5★)*, *Rambagh Palace Jaipur (5★)*, *Suryagarh Jaisalmer (5★)*, *Kumarakom Lake Resort Kerala (5★)*, *Taj Exotica Goa (5★)*, *Victoria-Jungfrau Interlaken (5★)*, *Plaza Athénée Paris (5★)*, *Hotel Danieli Venice (5★)*, *Atlantis The Royal Dubai (5★)*, *Aman Tokyo (5★)*, *Four Seasons Bali (5★)*, *Soneva Fushi Maldives (5★)*.
* **Dynamic Stay Calculator**:
  * Check-in aur Check-out dates select karne par automatic nights calculate hoti hain.
  * Live pricing in selected currency (USD, EUR, GBP, INR, AED).

---

### 3. 🍽️ 64 Curated Restaurants, Mountain Cafes, Desert Lounges & Beach Shacks (Dining Reservations)
* **Comprehensive Ambience Filters**:
  * `All`, `Mountain Cafe`, `Riverside Cafe`, `Beach Shack`, `Heritage Tea Salon`, `Courtyard Dining`, `Desert Lounge`, `Rooftop Lounge`, `Oceanfront Sunset`, `Michelin Fine Dining`, `Historic Bistro`, `Garden Terrace`.
* **Authentic Local Gems for Every Destination**:
  * **Himalayas & North India**:
    * *Cafe 1947 Manali* (Beas Riverside Wood-fired Pizza) - Mountain Cafe ($$)
    * *Johnson’s Cafe & Alpine Trout Bar Manali* (Fresh Trout & Pizzas) - Historic Bistro ($$)
    * *The Restaurant at The Oberoi Cecil Shimla* (Colonial British Roasts & Sepu Badi) - Historic Bistro ($$$)
    * *Wake & Bake Cafe Shimla* (The Mall Road French Crepes & Coffee) - Mountain Cafe ($)
    * *Illiterati Books & Mountain Cafe McLeodganj* (Cliffside Library & Pizza) - Mountain Cafe ($$)
    * *Tibet Kitchen McLeodganj* (Traditional Tingmo, Momos & Thukpa) - Historic Bistro ($)
    * *The Tibetan Kitchen Leh Ladakh* (Ladakhi Skyu & Copper Hot Pot) - Courtyard Dining ($$)
    * *Bon Appétit Leh Ladakh* (Mountain View Fusion Grills & Yak Cheese Flatbread) - Mountain Cafe ($$)
    * *Evergreen Cafe & Riverside Garden Kasol* (Israeli Shakshuka & Trout) - Mountain Cafe ($)
    * *The Little Buddha Cafe Rishikesh* (Ganga Treehouse Smoothies & Bowls) - Riverside Cafe ($)
    * *Chai Jaai Tea Room Srinagar* (Jhelum Riverbank Kahwa & Kashmiri Samovar) - Heritage Tea Salon ($)
    * *Ahdoos Traditional Wazwan Srinagar* (Rista, Gushtaba & Nadru Yakhni) - Historic Bistro ($$)
  * **Rajasthan & Golden Triangle**:
    * *1135 AD Amer Palace Dining Jaipur* (Silver Service Rajput Feast) - Courtyard Dining ($$$$)
    * *Tapri Central Jaipur* (Rooftop Masala Chai & Street Snacks) - Rooftop Lounge ($)
    * *Indique Rooftop at Pal Haveli Jodhpur* (Mehrangarh Fort View Marwari Dining) - Rooftop Lounge ($$$)
    * *The Trio Fort Vista Jaisalmer* (Thar Desert Lal Maas & Ker Sangri) - Desert Lounge ($$)
    * *Sheesh Mahal Lake Pichola Udaipur* (Royal Indian Terrace) - Royal Terrace ($$$$)
    * *Peshawri at ITC Mughal Agra* (18-Hour Dal Bukhara & Sikandari Raan) - Historic Bistro ($$$$)
    * *Dolphin Rooftop Restaurant Varanasi* (Ghats Satvik Thali & Kulhad Lassi) - Riverside Cafe ($)
  * **South India, Goa & Islands**:
    * *Kashi Art Cafe Fort Kochi* (Courtyard Art Gallery & Cold Brews) - Garden Terrace ($$)
    * *The Rice Boat at Taj Malabar Kochi* (Karimeen Pollichathu & Moilee) - Oceanfront Sunset ($$$$)
    * *Earl’s Secret at King’s Cliff Ooty* (Heritage Glasshouse Anglo-Indian Roasts) - Garden Terrace ($$)
    * *Curlies Beach Shack Anjuna Goa* (Sunset Trance, Fresh Seafood & Waves) - Beach Shack ($$)
    * *The Fisherman’s Wharf South Goa* (Goan Crab Xec Xec & Balchão) - Oceanfront Sunset ($$$)
    * *Something Different — A Beachside Cafe Havelock* (Andaman Mud Crab & Tiger Prawns) - Beach Shack ($$)
    * *Glenary’s Bakery & Vintage Pub Darjeeling* (100-Year Heritage Apple Pies & Sizzlers) - Mountain Cafe ($$)
    * *Nimtho Traditional Sikkimese Gangtok* (Gundruk, Sel Roti & Kothey Momos) - Historic Bistro ($$)
  * **Europe & Mediterranean**:
    * *Le Jules Verne Eiffel Tower Paris* (Michelin Fine Dining by Frédéric Anton) ($$$$)
    * *Roscioli Salumeria con Cucina Rome* (Legendary Roman Carbonara & Wine Cellar) - Historic Bistro ($$$)
    * *Trattoria Zà Zà Florence* (Bistecca alla Fiorentina & Black Truffle Tagliolini) - Historic Bistro ($$$)
    * *Il San Pietro Cliffside Terrace Positano* (Neapolitan Seafood & Limoncello Soufflé) ($$$$)
    * *Ristorante Da Ivo San Marco Venice* (Venetian Cuttlefish Ink Risotto) - Historic Bistro ($$$$)
    * *The Ritz Restaurant London* (Michelin-Starred Classical French & High Tea) ($$$$)
    * *Dishoom Covent Garden London* (Bombay Irani Cafe & 24-Hour Black Daal) - Historic Bistro ($$)
    * *The Witchery by the Castle Edinburgh* (Scottish Highland Deer & Mull Scallops) ($$$$)
    * *Restaurant De Kas Amsterdam* (Michelin Green Star Farm-to-Table in Glasshouses) ($$$$)
    * *Café Imperial Prague* (Historic 1914 Art Deco Bohemian Braised Beef Svíčková) ($$)
    * *Café de Paris Interlaken* (Swiss Alpine Fondue & Hot Chocolate) - Historic Bistro ($$)
    * *The Japanese Restaurant at Chedi Andermatt* (Michelin Kaiseki in the Alps) ($$$$)
    * *Ambrosia Sunset Restaurant Santorini* (Caldera Clifftop Candlelit Dining) ($$$$)
    * *Moss Restaurant Blue Lagoon Iceland* (Michelin Geothermal Volcanic Gastronomy) ($$$$)
  * **Asia, Middle East, Americas, Africa & Oceania**:
    * *Lau Pa Sat Satay Street Singapore* (Charcoal Satay Skewers & Chilli Crab) - Courtyard Dining ($)
    * *CÉ LA VI Marina Bay Sands Singapore* (Skyline Rooftop Dining & Cocktails) ($$$$)
    * *Arabian Tea House Dubai* (Al Fahidi Heritage Courtyard Emirati Breakfast) - Garden Terrace ($$)
    * *Pierchic Over-Water Dining Dubai* (Gulf Ocean Floor Seafood) ($$$$)
    * *Hakkasan at Emirates Palace Abu Dhabi* (Michelin Cantonese in Royal Palace) ($$$$)
    * *Seki Cave Cellar Cappadocia* (Underground Volcanic Wine & Anatolian Pot Roast) ($$$)
    * *9 Pyramids Lounge Giza, Egypt* (Bedouin Grills facing the Great Pyramids) - Desert Lounge ($$$)
    * *Naguib Mahfouz Cafe Cairo, Egypt* (Historic Khan el-Khalili Bazaar Dining) - Historic Bistro ($$)
    * *Bennelong at Sydney Opera House* (Modern Australian inside the Sails) ($$$$)
    * *Icebergs Dining Room & Bar Bondi Beach* (Clifftop Mediterranean Dining) ($$$$)
    * *Locavore NXT Ubud, Bali* (Avant-Garde Farm to Table Fermentation Lab) ($$$)
    * *Ginza Kyubey Omakase Tokyo* (Edo-Mae Omakase Sushi) ($$$$)
    * *Kikunoi Roan 2-Star Kaiseki Kyoto* (Traditional Kyoto Kaiseki) ($$$$)
    * *Blue Elephant Royal Thai Phuket & Bangkok* (Massaman Lamb & Royal Curries) ($$$)
    * *Ithaa Undersea Restaurant Maldives* (5 Meters Below Indian Ocean) ($$$$)
    * *Nomad Spice Terrace Marrakech, Morocco* (Rooftop Medina Lamb Tagine) ($$)
    * *Cầu Gỗ Lake Terrace Hanoi, Vietnam* (Hoan Kiem Lake Claypot Catfish) ($$)
    * *Jungsik Seoul, South Korea* (2-Star Michelin Modern Korean Gastronomy) ($$$$)
    * *Serengeti Boma Bush Barbecue Tanzania* (Safari Bush Grills under the Stars) ($$$$)
    * *FYN Restaurant Cape Town, South Africa* (African-Japanese Fusion Overlooking Table Mountain) ($$$$)
    * *Le Bernardin by Eric Ripert New York* (3-Star Michelin Seafood Temple) ($$$$)
    * *Mil Centro Sacred Valley Cusco, Peru* (High-Altitude Andean Ecosystem Tasting) ($$$$)
    * *Rātā Queenstown, New Zealand* (Southern Alps Venison & Marlborough Wines) ($$$$)
* **Interactive Reservation Modal**:
  * Date aur Time slot selector (`12:00 PM`, `1:30 PM`, `7:00 PM`, `8:15 PM`, `9:30 PM`).
  * Party size (1–10 guests), ambience preference, special requests.

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

### [v1.6.5] - Comprehensive Mobile, Tablet & Desktop Responsive Optimization
* **Date**: November 2026
* **Changes & Key Highlights**:
  * **Touch-Optimized Custom Package Studio on Mobile**:
    * **Floating Live Tally Bar (< lg screens)**: Custom Package Builder me mobile screens ke liye sleek sticky bottom bar add kiya gaya hai jo selected days, destination, aur live price tally with instant "Book Custom Package" button display karta hai. Mobile travelers ko step 1 ya 2 se niche tak baar baar scroll karne ki zarurat nahi padti.
    * **Balanced 5-Star Tier Grid**: Mobile viewports par 5-card grid me aakhri card (5★ Luxury Palace) ab `last:col-span-2 sm:last:col-span-1` ke sath full width span karta hai, jisse koi awkward single dangling card nahi rehta.
  * **Enhanced Mobile Navigation Drawer**:
    * Mobile slide-out menu me direct **"Wishlist"** aur **"My Bookings"** shortcut action buttons with dynamic badge counts add kiye gaye.
    * Announcement header me phone helpline ko `hidden md:flex` kiya gaya taaki 320px–380px ultra-narrow screens par promo banner bina kisi text-wrapping ya crowding ke clean display ho.
  * **Mobile Scrollbar Removal (`.no-scrollbar`)**:
    * Global CSS me `-ms-overflow-style: none`, `scrollbar-width: none`, aur `::-webkit-scrollbar { display: none }` integrate kiya gaya, jisse mobile touch screens par horizontal swipeable category tabs aur destination pills bina kisi ugly scrollbar ke smooth swipe hote hain.
  * **All Modals Full Responsiveness (`max-h-[92vh] flex flex-col`)**:
    * `CafeDetailModal.tsx`, `AddReviewModal.tsx`, `TourDetailModal.tsx`, aur `HotelBookingModal.tsx` sabhi ko flex-column architecture par normalize kiya gaya hai jisme header aur footer sticky rehte hain aur body smoothly scroll hoti hai (landscape mode aur short phone screens par zero clipping).
  * **Cards Responsive Flex-Wrap Safeguards**:
    * `TourCard.tsx`, `HotelCard.tsx`, aur `RestaurantCard.tsx` ke pricing aur action button footers me `min-w-0`, `flex-wrap`, aur `shrink-0` safeguards add kiye gaye taaki AED, GBP ya INR jaise multi-character currency symbols ke sath narrow screens par layout break na ho.

### [v1.6.4] - Resolved Navbar Navigation, Category Switching & Smooth Scroll Glitch
* **Date**: November 2026
* **Changes & Key Highlights**:
  * **Fixed Navbar "Dining" & "Cafes" Jump Glitch**:
    * User reported issue (*"abhi bhi glitch he jese nav baar me dining or cafe ka buttion click kar nepe page kahi or hi ja raha he"*):
      * **Root Cause Found**: Pehle jab customer Navbar ya Category Pills me "Dining" ya "Cafes" par click karta tha, toh `scrollIntoView()` synchronous call React 19 ke layout re-render se pehle execute ho jati thi. Purane multi-section layout me `#restaurants` Y=6,800px par tha, lekin filtering ke baad page height collapse hokar ~1,800px ho jati thi, jisse browser viewport wildly footer/testimonials tak jump kar jata tha. Dusri taraf, filtered view me dusra category element DOM me na hone par scroll completely fail ho jata tha.
    * **Centralized `navigateToCategory` Engine (`TravelContext.tsx`)**:
      * Naya asynchronous navigation controller implement kiya gaya jo React 19 ke DOM reconciliation aur layout commit hone tak wait karta hai (70ms).
      * Naye mounted target section ka absolute viewport offset dynamically compute hota hai with 85px sticky navbar clearance (`window.scrollTo({ top: offsetPosition, behavior: 'smooth' })`).
      * "All Highlights" ya brand logo click karne par page automatically `top: 0` par smoothly reset hota hai.
    * **Navbar & Category Navigation Synchronization**:
      * `Navbar.tsx` (desktop nav buttons + mobile drawer menu + brand logo) ab centralized `navigateToCategory` use karta hai.
      * `CategoryPills.tsx` (All 6 category selector buttons) centralized engine se connect kiye gaye.
      * `Footer.tsx` (Tour Packages, Hotels & Resorts, Fine Dining Tables, Refreshments & Cafes, Custom Configurator, aur Worldwide destination links) me sabhi broken scroll calls ko `navigateToCategory` se replace kiya gaya.
      * `Hero.tsx` search submit handler me safe offset scrolling integrate kiya gaya.
    * **Added `scroll-mt-20 sm:scroll-mt-24` Across All Catalog Sections**:
      * `#tours`, `#hotels`, `#restaurants`, `#refreshments`, `#builder`, aur `#catalog-section` par standard Tailwind scroll margin tops integrate kiye gaye taaki sticky header kisi bhi section ke heading ya filters ko overlap na kare.

### [v1.6.3] - Full Website Audit: Bug Fixes, Filter Normalization & Form State Reset
* **Date**: November 2026
* **Changes & Key Highlights**:
  * **Complete Codebase Audit & Zero-Loop Verification**:
    * Pura website scan kiya gaya: koi infinite re-render loop nahi hai, event listeners correctly unmount hote hain, aur local storage synchronization safe aur unidirectional hai.
    * Dataset ID uniqueness verified across all 38 tours, 72 hotels, 64 restaurants, and 16 refreshments (0 duplicates).
  * **Hero Month Filter Normalization in `TourList.tsx`**:
    * Fixed a filtering glitch where Hero departure month selection (`Nov`, `Dec`, `Jan`, `Feb`, `Spring`, `Summer`, `Autumn`) was not matching composite date strings. Added case-insensitive substring checks for all travel seasons and months.
  * **Interactive Form State Reset (`AddReviewModal.tsx`)**:
    * Review submit hone par form input fields (`name`, `location`, `itemTitle`, `comment`, `rating`) cleanly reset hote hain taaki duplicate ya stale values na bachein.
  * **Category Navigation Sync (`CategoryPills.tsx`)**:
    * Category pills me hotel description ko update karke `1★ to 5★ stays` kiya gaya taaki 72 verified backpacker hostels se lekar 5-star luxury palaces tak ka exact sync rahe.
  * **Hero "Featured:" Pills Permanent Removal Reconfirmed**:
    * Dono purani screenshots me dikhayi gayi `Featured: Bali ...` aur `Featured: Kullu Manali ...` quick pills Hero search bar se completely removed hain, jisse ultra-minimalist, distraction-free search experience bana rahe.

### [v1.6.2] - Comprehensive 1-Star to 5-Star Accommodations (72 Hostels to Palaces)
* **Date**: November 2026
* **Changes & Key Highlights**:
  * **Complete 1-Star to 5-Star Coverage (72 Accommodations)**:
    * User request ("isme sare bataoo 1 star se leke 5 star sab") ke anusar platform par 1★ se lekar 5★ tak ke sabhi accommodation tiers ko expand kiya gaya:
      * **1-Star Stays ($12 - $32/night)**: Social backpacker hostels, mountain homestays, capsule pods aur beach huts (*Zostel Old Manali*, *Hosteller Kasol*, *McLeodganj Backpacker Inn*, *Leh Old Town Homestay*, *Rishikesh Ganga Ghat Stay*, *Anjuna Palm Huts*, *Varanasi Ganges View Hostel*, *Sam Sand Dunes Camp*, *St. Christopher's Inn Paris*, *Balmers Hostel Interlaken*, *The Yellow Hostel Rome*, *Nine Hours Capsule Tokyo*).
      * **2-Star Stays ($20 - $55/night)**: Standard tourist lodges, clean budget guest houses aur heritage havelis (*Hotel Beas View Manali*, *Shimla Heritage View Lodge*, *Dal Lake Houseboat Srinagar*, *Golden Fort Haveli Jaisalmer*, *Jaipur Traditional Haveli*, *Alleppey Backwater Village Guest House*, *Calangute Palms Goa*, *Hotel City Star Agra Taj View*, *Ibis Budget Paris*, *Hotel City Garni Interlaken*, *ibis budget Singapore*, *Hotel Horison Ubud Bali*).
      * **3-Star Stays**: Cozy boutique stays, alpine chalets, lakeside cottages (*Snow Valley Manali*, *Willow Banks Shimla*, *Pangong Eco Camp*, *Coconut Lagoon Kerala*, *Hotel Bernerhof Interlaken*, *Rove Downtown Dubai*).
      * **4-Star Stays**: Scenic resorts with pool, spa and balcony views (*Apple Country Resort*, *Combermere Shimla*, *Singge Palace Leh*, *Trident Udaipur*, *Alila Diwa Goa*, *Maya Ubud Resort*).
      * **5-Star Stays**: World-class heritage palaces, private pool villas aur overwater reserves (*The Himalayan Castle*, *Wildflower Hall*, *The Khyber*, *The Oberoi Udaivilas*, *Taj Exotica Goa*, *Victoria-Jungfrau Switzerland*, *Plaza Athénée Paris*, *Atlantis The Royal Dubai*, *Soneva Fushi Maldives*).
  * **Interactive Star Tier Filters**:
    * `All Stays (72)`, `5★ Luxury`, `4★ Premium`, `3★ Cozy`, `2★ Standard`, `1★ Backpacker & Inn` buttons.
    * Dynamic gold star badges (`{'★'.repeat(starRating)} {starRating}-Star`) on all hotel cards.
  * **Custom Package Studio 5-Tier Accommodation Selector**:
    * Custom Package Builder me ab 5 distinct star tiers shamil hain: 1★ Backpacker & Inn ($16/night), 2★ Standard Lodge ($26/night), 3★ Cozy & Comfort ($48/night), 4★ Premium Resort ($115/night), 5★ Luxury Palace ($320/night), with matching local property previews.
  * **Hero Badge Updated**: Hero banner subhead and trust badges updated to "1★ to 5★ Stays & Scenic Cafes".

### [v1.6.1] - Pan-Destination Dining & Cafe Expansion (64 Spots Across All Places)
* **Date**: November 2026
* **Changes & Key Highlights**:
  * **64 Curated Restaurants, Mountain Cafes, Desert Lounges & Beach Shacks**:
    * Catalog ko 32 spots se expand karke **64 world-class dining spots** kar diya gaya hai, taaki har destination ke pas verified local restaurants aur cafes hon.
    * **Every Indian Destination Covered**:
      * *Shimla*: *The Oberoi Cecil Restaurant* (British roasts & Pahadi Chha Gosht) & *Wake & Bake Cafe*.
      * *Dharamshala & McLeodganj*: *Illiterati Books & Mountain Cafe* (Kangra valley pizza) & *Tibet Kitchen* (Traditional momos & thukpa).
      * *Leh Ladakh*: *The Tibetan Kitchen Leh* (Copper hot pot & Ladakhi Skyu) & *Bon Appétit Leh* (Apricot glazed grills).
      * *Jaisalmer*: *The Trio Fort Vista* (Thar desert Lal Maas & Ker Sangri).
      * *Jaipur & Jodhpur*: *1135 AD Amer Palace Dining* (Silver service feast) & *Indique Rooftop Pal Haveli*.
      * *Agra*: *Peshawri at ITC Mughal Agra* (18-Hour Dal Bukhara & Sikandari Raan).
      * *Andaman Islands*: *Something Different — A Beachside Cafe Havelock* (Mud crab & tiger prawns).
      * *Ooty & Coonoor*: *Earl’s Secret at King’s Cliff* (Heritage glasshouse Anglo-Indian dining).
      * *Darjeeling & Gangtok*: *Glenary’s Bakery & Vintage Pub* (100-year apple pies) & *Nimtho Sikkimese Restaurant*.
      * *Varanasi*: *Dolphin Rooftop Restaurant on the Ghats* (Satvik thali & Malai lassi).
      * *Kasol & Parvati Valley*: *Evergreen Cafe & Riverside Garden* (Shakshuka & trout).
    * **Every International Destination Covered**:
      * *Rome & Florence*: *Roscioli Salumeria con Cucina Rome* (Carbonara & wine) & *Trattoria Zà Zà Florence* (Bistecca alla Fiorentina).
      * *London & Edinburgh*: *The Ritz Restaurant London* (Michelin French & high tea), *Dishoom Covent Garden* (Bombay Irani cafe), & *The Witchery by the Castle Edinburgh* (Highland venison).
      * *Singapore*: *Lau Pa Sat Satay Street* (Charcoal satay & chili crab) & *CÉ LA VI Marina Bay Sands SkyBar*.
      * *Egypt (Cairo & Giza)*: *9 Pyramids Lounge Giza* (Bedouin grills facing the Pyramids) & *Naguib Mahfouz Cafe Khan el-Khalili*.
      * *Australia (Sydney)*: *Bennelong at Sydney Opera House* (Inside the sails) & *Icebergs Dining Room Bondi Beach*.
      * *Amsterdam & Prague*: *Restaurant De Kas Amsterdam* (Michelin Green Star glasshouse farm-to-table) & *Café Imperial Prague* (Historic 1914 Art Deco Svíčková).
      * *Abu Dhabi & Morocco*: *Hakkasan Emirates Palace Abu Dhabi* & *Nomad Spice Terrace Marrakech*.
      * *Vietnam & South Korea*: *Cầu Gỗ Lake Terrace Hanoi* & *Jungsik Seoul 2-Star Michelin*.
  * **New Ambience Categories**: Added `Courtyard Dining` aur `Desert Lounge` filters with total 12 ambience chips in the dining filter bar.
  * **Smart Prioritized Custom Studio Matching**: Custom Package Studio me restaurant selector direct destination tokens se match karta hai, jisse Dharamshala, Leh, Jaisalmer ya Rome select karte hi strictly authentic local restaurants sabse upar display hote hain.

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
