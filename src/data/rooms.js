export const rooms = [
  {
    id: 'garden-deluxe',
    name: 'Garden Deluxe Room',
    tagline: 'Ground-floor comfort opening onto the gardens',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80&auto=format&fit=crop',
    ],
    guests: 2,
    bed: '1 Queen Bed',
    size: '28 m²',
    price: 12500,
    currency: 'KES',
    amenities: ['Free Wi-Fi', 'Garden view', 'Air conditioning', 'En-suite bathroom', 'Work desk'],
    description:
      'Set on the ground floor with direct access to the gardens, the Garden Deluxe Room pairs warm, handcrafted furnishings with quiet, unhurried comfort. Mornings begin with birdsong and filtered light through the acacia canopy outside your window.',
    type: 'Deluxe',
  },
  {
    id: 'executive-suite',
    name: 'Executive Suite',
    tagline: 'A separate lounge for guests who need room to work and unwind',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1400&q=80&auto=format&fit=crop',
    ],
    guests: 3,
    bed: '1 King Bed + Sofa Bed',
    size: '42 m²',
    price: 19800,
    currency: 'KES',
    amenities: ['Free Wi-Fi', 'Separate lounge', 'Mini bar', 'Rain shower', 'Nespresso machine', 'Bathrobe & slippers'],
    description:
      'The Executive Suite gives business and leisure guests alike a proper separation between rest and work — a private lounge with a writing desk, a rain shower built for long evenings, and a king bed dressed in Egyptian cotton.',
    type: 'Suite',
  },
  {
    id: 'family-room',
    name: 'Family Garden Room',
    tagline: 'Two connecting spaces, one shared view of the gardens',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1400&q=80&auto=format&fit=crop',
    ],
    guests: 4,
    bed: '1 King + 2 Twin Beds',
    size: '48 m²',
    price: 22500,
    currency: 'KES',
    amenities: ['Free Wi-Fi', 'Connecting layout', 'Garden view', 'Extra bedding on request', 'Mini fridge'],
    description:
      'Designed for families, this connecting two-room layout keeps everyone close without giving up privacy. Children have their own corner near the garden-facing window, while parents keep the king room quiet after bedtime.',
    type: 'Family',
  },
  {
    id: 'presidential-suite',
    name: 'Presidential Suite',
    tagline: 'The top-floor address for guests who want the whole experience',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1400&q=80&auto=format&fit=crop',
    ],
    guests: 4,
    bed: '1 King Bed + Living Room',
    size: '65 m²',
    price: 38000,
    currency: 'KES',
    amenities: ['Free Wi-Fi', 'Private lounge', 'Dining area', 'Premium toiletries', 'Butler service on request', 'Private balcony'],
    description:
      'Our most spacious address: a private balcony overlooking the gardens, a full lounge and dining area for hosting, and personal touches — from turndown service to a curated welcome tray — reserved for the Presidential Suite.',
    type: 'Suite',
  },
]

export const getRoomById = (id) => rooms.find((room) => room.id === id)
