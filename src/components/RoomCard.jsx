import { Link } from 'react-router-dom'
import { Users, BedDouble, Maximize2 } from 'lucide-react'

export default function RoomCard({ room }) {
  return (
    <article className="group bg-ivory rounded-md overflow-hidden shadow-card hover:shadow-soft transition-shadow duration-500">
      <div className="relative h-64 overflow-hidden">
        <img
          src={room.image}
          alt={`${room.name} at Fahari Gardens`}
          loading="lazy"
          width="600"
          height="400"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <span className="absolute top-4 left-4 bg-ivory/90 text-forest-dark text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-sm">
          {room.type}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-display text-2xl text-forest-dark mb-1">{room.name}</h3>
        <p className="text-sm text-charcoal/60 mb-4">{room.tagline}</p>

        <div className="flex flex-wrap gap-4 text-sm text-charcoal/70 mb-4">
          <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-clay" /> {room.guests} Guests</span>
          <span className="flex items-center gap-1.5"><BedDouble className="w-4 h-4 text-clay" /> {room.bed}</span>
          <span className="flex items-center gap-1.5"><Maximize2 className="w-4 h-4 text-clay" /> {room.size}</span>
        </div>

        <ul className="flex flex-wrap gap-2 mb-6">
          {room.amenities.slice(0, 3).map((a) => (
            <li key={a} className="text-xs bg-forest/5 text-forest-dark px-2.5 py-1 rounded-sm">{a}</li>
          ))}
        </ul>

        <div className="flex items-end justify-between border-t border-charcoal/10 pt-4">
          <div>
            <p className="font-mono text-2xl text-forest-dark">
              {room.currency} {room.price.toLocaleString()}
            </p>
            <p className="text-xs text-charcoal/50">per night</p>
          </div>
          <div className="flex gap-2">
            <Link
              to={`/rooms/${room.id}`}
              className="text-sm font-semibold text-forest-dark border border-forest-dark/30 px-4 py-2.5 rounded-sm hover:bg-forest-dark hover:text-ivory transition-colors"
            >
              View Details
            </Link>
            <Link to={`/booking?room=${room.id}`} className="btn-primary text-sm px-4 py-2.5">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
