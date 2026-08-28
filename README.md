# Fahari Gardens — Hotel Website

A production-quality React + Vite + Tailwind CSS website for **Fahari Gardens**,
a resort in Utawala, Nairobi, Kenya.

## Tech Stack
- React 18 + Vite
- React Router v6
- Tailwind CSS
- Lucide React icons

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

Build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
fahari-gardens/
├── public/images/       # favicon + static images
├── src/
│   ├── components/      # Navbar, Footer, Hero, BookingForm, RoomCard,
│   │                     Amenities, Gallery, Testimonials, Dining,
│   │                     WhyChooseUs, LocationSection, SectionDivider
│   ├── pages/            # Home, Rooms, RoomDetails, Booking, About, Contact
│   ├── data/              # rooms.js, testimonials.js — edit these to update content
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── tailwind.config.js
```

## What's real vs. what needs wiring up

This is a fully functional **frontend**. Before taking it live, connect:

1. **A booking engine / channel manager** (e.g. Cloudbeds, SiteMinder, Little
   Hotelier) or a custom backend, so `Booking.jsx`'s room search actually
   checks live availability instead of showing all rooms.
2. **A real payment provider** — Stripe, Flutterwave, or Safaricom's
   M-Pesa Daraja API — to replace the placeholder payment step in
   `Booking.jsx`. No card or M-Pesa details are currently transmitted
   anywhere; the form is UI-only.
3. **A contact form backend** (e.g. Formspree, a serverless function, or
   your own API) to actually deliver messages from `Contact.jsx` and the
   newsletter form in `Footer.jsx`.
4. **Real photography.** All images currently load from Unsplash as
   placeholders — swap the URLs in `src/data/rooms.js` and the various
   page/component files for your own photos, ideally served from
   `/public/images/` or a CDN, sized and compressed for the web.
5. **A real Google Maps embed / API key** if you want a branded map
   instead of the generic embed currently used in `LocationSection.jsx`
   and `Contact.jsx`.
6. **Your logo**, once ready, in place of the leaf icon + wordmark in
   `Navbar.jsx` and `Footer.jsx`.

## Design Notes

- Color and type tokens live in `tailwind.config.js` (colors: `forest`,
  `clay`, `gold`, `ivory`, `sand`, `charcoal`; fonts: `Fraunces` display,
  `Manrope` body, `IBM Plex Mono` for data/labels like prices and dates).
- The recurring vine-motif divider (`SectionDivider.jsx`) is the site's
  signature visual element, tying back to the "Gardens" in the name.
- Update `src/data/rooms.js` to add, remove, or reprice rooms — every
  page that lists rooms reads from this single file.
