import { useEffect, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Users, BedDouble, Maximize2, Check } from 'lucide-react'
import { getRoomById, rooms } from '../data/rooms.js'
import RoomCard from '../components/RoomCard.jsx'

export default function RoomDetails() {
  const { id } = useParams()
  const room = getRoomById(id)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    if (room) document.title = `${room.name} | Fahari Gardens`
    setActiveImage(0)
  }, [room])

  if (!room) return <Navigate to="/rooms" replace />

  const similarRooms = rooms.filter((r) => r.id !== room.id).slice(0, 3)

  return (
    <>
      <section className="pt-28 pb-4">
        <div className="container-xl">
          <nav className="text-xs text-charcoal/50 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-clay">Home</Link> /{' '}
            <Link to="/rooms" className="hover:text-clay">Rooms</Link> /{' '}
            <span className="text-charcoal/80">{room.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 mb-4">
            <div className="lg:col-span-3 rounded-md overflow-hidden h-[380px] md:h-[480px]">
              <img
                src={room.gallery[activeImage]}
                alt={`${room.name} view ${activeImage + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-3">
              {room.gallery.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setActiveImage(i)}
                  className={`rounded-md overflow-hidden h-24 md:h-[152px] border-2 transition-colors ${
                    activeImage === i ? 'border-clay' : 'border-transparent'
                  }`}
                  aria-label={`Show image ${i + 1}`}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <span className="eyebrow">{room.type}</span>
            <h1 className="font-display text-4xl md:text-5xl text-forest-dark mt-2 mb-3">{room.name}</h1>
            <p className="text-charcoal/60 mb-6">{room.tagline}</p>

            <div className="flex flex-wrap gap-6 text-sm text-charcoal/70 mb-8 border-y border-charcoal/10 py-5">
              <span className="flex items-center gap-2"><Users className="w-4 h-4 text-clay" /> {room.guests} Guests Max</span>
              <span className="flex items-center gap-2"><BedDouble className="w-4 h-4 text-clay" /> {room.bed}</span>
              <span className="flex items-center gap-2"><Maximize2 className="w-4 h-4 text-clay" /> {room.size}</span>
            </div>

            <h2 className="font-display text-2xl text-forest-dark mb-3">About This Room</h2>
            <p className="text-charcoal/70 leading-relaxed mb-8">{room.description}</p>

            <h2 className="font-display text-2xl text-forest-dark mb-4">Room Amenities</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {room.amenities.map((a) => (
                <li key={a} className="flex items-center gap-2 text-sm text-charcoal/70">
                  <Check className="w-4 h-4 text-clay shrink-0" /> {a}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-sand/30 rounded-md p-7 sticky top-28">
              <p className="font-mono text-3xl text-forest-dark mb-1">
                {room.currency} {room.price.toLocaleString()}
              </p>
              <p className="text-xs text-charcoal/50 mb-6">per night, excluding taxes</p>
              <p className="text-sm text-charcoal/60 mb-6" role="status">
                Availability updates once dates are selected at checkout.
              </p>
              <Link to={`/booking?room=${room.id}`} className="btn-primary w-full">
                Book This Room
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-sand/30">
        <div className="container-xl">
          <h2 className="font-display text-3xl text-forest-dark mb-10">Similar Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {similarRooms.map((r) => (
              <RoomCard key={r.id} room={r} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
