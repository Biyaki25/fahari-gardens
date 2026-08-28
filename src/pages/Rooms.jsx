import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal } from 'lucide-react'
import RoomCard from '../components/RoomCard.jsx'
import { rooms } from '../data/rooms.js'

const roomTypes = ['All', 'Deluxe', 'Suite', 'Family']

export default function Rooms() {
  const [searchParams] = useSearchParams()
  const [type, setType] = useState('All')
  const [maxPrice, setMaxPrice] = useState(40000)
  const [minGuests, setMinGuests] = useState(1)

  useEffect(() => {
    document.title = 'Rooms & Suites | Fahari Gardens'
  }, [])

  const checkIn = searchParams.get('checkIn')
  const checkOut = searchParams.get('checkOut')

  const filteredRooms = useMemo(() => {
    return rooms.filter((room) => {
      if (type !== 'All' && room.type !== type) return false
      if (room.price > maxPrice) return false
      if (room.guests < minGuests) return false
      return true
    })
  }, [type, maxPrice, minGuests])

  return (
    <>
      <section className="relative h-72 md:h-96 flex items-end">
        <img
          src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1920&q=80&auto=format&fit=crop"
          alt="Fahari Gardens room interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 to-charcoal/20" />
        <div className="container-xl relative z-10 pb-12">
          <p className="eyebrow text-gold-light mb-2">Accommodation</p>
          <h1 className="font-display text-4xl md:text-6xl text-ivory">Rooms &amp; Suites</h1>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-xl">
          {checkIn && checkOut && (
            <p className="text-sm text-charcoal/60 mb-8 bg-sand/40 inline-block px-4 py-2 rounded-sm">
              Showing availability for <strong>{checkIn}</strong> to <strong>{checkOut}</strong>
            </p>
          )}

          <div className="flex flex-col lg:flex-row gap-10">
            <aside className="lg:w-64 shrink-0">
              <div className="flex items-center gap-2 mb-6">
                <SlidersHorizontal className="w-4 h-4 text-clay" />
                <h2 className="font-display text-lg text-forest-dark">Filter Rooms</h2>
              </div>

              <div className="mb-8">
                <p className="text-xs font-mono uppercase tracking-wider text-charcoal/50 mb-3">Room Type</p>
                <div className="flex flex-wrap gap-2">
                  {roomTypes.map((t) => (
                    <button
                      key={t}
                      onClick={() => setType(t)}
                      className={`text-sm px-3.5 py-2 rounded-sm border transition-colors ${
                        type === t
                          ? 'bg-forest-dark text-ivory border-forest-dark'
                          : 'border-charcoal/20 text-charcoal/70 hover:border-forest-dark'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="price-range" className="text-xs font-mono uppercase tracking-wider text-charcoal/50 mb-3 block">
                  Max Price: KES {maxPrice.toLocaleString()}
                </label>
                <input
                  id="price-range"
                  type="range"
                  min="10000"
                  max="40000"
                  step="1000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-clay"
                />
              </div>

              <div>
                <label htmlFor="guests-range" className="text-xs font-mono uppercase tracking-wider text-charcoal/50 mb-3 block">
                  Min Guests: {minGuests}
                </label>
                <input
                  id="guests-range"
                  type="range"
                  min="1"
                  max="4"
                  step="1"
                  value={minGuests}
                  onChange={(e) => setMinGuests(Number(e.target.value))}
                  className="w-full accent-clay"
                />
              </div>
            </aside>

            <div className="flex-1">
              {filteredRooms.length === 0 ? (
                <div className="text-center py-20 bg-sand/30 rounded-md">
                  <p className="font-display text-2xl text-forest-dark mb-2">No rooms match those filters</p>
                  <p className="text-charcoal/60 text-sm">Try increasing your max price or reducing the guest count.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {filteredRooms.map((room) => (
                    <RoomCard key={room.id} room={room} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
