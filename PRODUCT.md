# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated: Astro (static output) deployed on Vercel from the GitHub repo `ArcaDiNoe` (owner Matteoiazz), which is already linked to a Vercel project. Static output keeps hosting free, fast and maintenance-free for a small restaurant. Menu, hours and contacts live in editable data files so they can be updated without touching markup.

## Users

- **Primary: people deciding where to eat tonight** in the Cosenza area: families, groups of friends, couples. They are mostly on a phone, often already in the car or on the sofa, and want to know whether it is open, what it serves, where it is and how to book.
- **Diners already at the table** who scan a QR code to read the menu on their phone.
- **People organising an event** (communions, birthdays, company dinners, banquets) who compare venues and want to ask about availability for a group.
- **Buyer: the owner, Franco Crocco**, who will be shown this site as a sales demo. He has to recognise his own place in it and see that it brings him bookings.

## Product Purpose

The official website of L'Arca di Noè, a ristorante, pizzeria and griglieria in Trenta, Casali del Manco (CS). Today the place has no website: its presence is directory listings and reviews with inconsistent addresses. The site gives it one authoritative source for hours, menu, location and booking, and turns visits into bookings by phone or WhatsApp.

Success: a visitor knows within seconds whether it is open now, can read the menu comfortably on a phone, and books in two taps. The owner says yes to the demo.

## Positioning

Facts other local pizzerias cannot copy: the panoramic view over the city of Cosenza from Trenta, the gardens and outdoor veranda that stay cool in summer, a large private car park, a wood-fired oven, and three kitchens in one place (pizzeria, restaurant and grill, including fish and mountain dishes). Generous portions, family service, live music evenings, and big rooms for banquets.

## Operating Context

- Address: Via Catena, Trenta, 87059 Casali del Manco (CS). Directory listings disagree on the street number (31 / 34 / 54); **the number must be confirmed with the owner**.
- Phone: 0984 439508 (landline).
- Hours (from public listings, to confirm): Monday closed; Tuesday to Friday 19:00 to 01:00; Saturday 19:00 to 02:00; Sunday 12:00 to 01:00.
- Services: dine-in, takeaway, outdoor seating, gardens, veranda, air conditioning, Wi-Fi, TV for sport, wheelchair access, large private car park, live music evenings, receptions and banquets, gluten-free options.

## Capabilities and Constraints

- Booking: a form that composes a pre-filled WhatsApp message to the restaurant, with a phone call as the alternative. No backend, database or paid service. **The restaurant's WhatsApp mobile number is unknown**: it sits in one config value until the owner provides it.
- Event enquiries use the same WhatsApp/phone channel.
- Menu: structured data with categories, dietary tags (vegetarian, gluten-free on request, spicy) and prices. It is QR-friendly and fast on mobile data.
- "Open now" status is computed from the hours in the Europe/Rome timezone, including service that runs past midnight.
- No tracking cookies. The map loads only after the visitor consents, so the site needs no cookie banner.
- Language: Italian first.

## Brand Commitments

- Name: "L'Arca di Noè". The public listings also use "Pizzeria Ristorante L'Arca di Noè".
- There is no known logo, palette or brand asset, so the identity is created here and has to be presentable to the owner.
- **Binding style (from the user, 2026-10-03):** professional, minimal and functional, like a well-made restaurant website. No spectacular effects. It must be beautiful but not exaggerated. The place has large rooms, so the site sells space, food and practicality. The user rejected a first "night sky" direction as too "AI site". References: the structure of established Italian pizzeria sites (Berberè, Pepe in Grani), with a clear header and Prenota button, a large photo, practical info, then sections.

## Evidence on Hand

- **None of the restaurant's own material**: no photos, logo or menu with prices. The user asked that everything be sourced from the internet for now.
- Dishes named in public reviews: patate 'mpacchiuse, fusilli ai funghi porcini, grigliata di pesce, riso con zucchine e gamberetti, sorbetto al limone, penne alla calabrese, pizza crudo e rucola, a cured-meat and cheese platter.
- Recurring review themes: kindness and helpfulness of the staff, home-style cooking, quality ingredients, generous portions, cleanliness, good live music, and honest prices. Some reviews mention waits at busy times and a thin pizza base.
- **Must not be fabricated or presented as real**: customer testimonials or quotes, star ratings or review counts (sources disagree), awards, founding year or history, and prices. The demo menu prices are placeholders, marked as such in the data file and replaced with the real menu before go-live.
- Photography: free stock (Unsplash licence), to be replaced with real photos of the place. The list of assets to replace is in `CONTENUTI-DA-SOSTITUIRE.md`.

## Product Principles

1. **Tonight first.** Whether it is open, how to book and how to get there always come before atmosphere.
2. **The place is the proof.** Sell the view, the garden, the wood-fired oven and the three kitchens, which are real facts, never invented praise.
3. **Two taps to a table.** Every page offers a call or WhatsApp action within thumb reach.
4. **The owner edits words, not code.** Hours, menu and contacts live in one place.
5. **Honest demo.** Placeholder content is easy to find and replace, and no false claims are made.

## Accessibility & Inclusion

WCAG 2.2 AA. Large tap targets and legible menu text for older diners reading in dim light. Reduced-motion support. Wheelchair access is stated, since the venue offers it.
