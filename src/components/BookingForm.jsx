import { useState } from 'react'
import { Calendar, Users, BedDouble, Search, AlertCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const todayISO = () => new Date().toISOString().split('T')[0]

export default function BookingForm({ variant = 'floating' }) {
  const navigate = useNavigate()
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)
  const [roomsCount, setRoomsCount] = useState(1)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!checkIn || !checkOut) {
      setError('Please choose both a check-in and check-out date.')
      return
    }
    if (checkIn < todayISO()) {
      setError('Check-in date cannot be in the past.')
      return
    }
    if (checkOut <= checkIn) {
      setError('Check-out date must be after your check-in date.')
      return
    }

    const params = new URLSearchParams({
      checkIn,
      checkOut,
      adults: String(adults),
      children: String(children),
      rooms: String(roomsCount),
    })
    navigate(`/rooms?${params.toString()}`)
  }

  const wrapClass =
    variant === 'floating'
      ? 'bg-ivory rounded-md shadow-soft p-6 md:p-8 -mt-24 md:-mt-20 relative z-20 mx-6 md:mx-auto max-w-5xl'
      : 'bg-ivory rounded-md shadow-card p-6 md:p-8'

  return (
    <div className={wrapClass}>
      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          <div className="md:col-span-1">
            <label htmlFor="check-in" className="block text-xs font-mono uppercase tracking-wider text-charcoal/60 mb-2">
              Check-in
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-clay pointer-events-none" />
              <input
                id="check-in"
                type="date"
                min={todayISO()}
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full border border-charcoal/15 rounded-sm pl-9 pr-3 py-3 text-sm focus:border-clay outline-none"
                required
              />
            </div>
          </div>

          <div className="md:col-span-1">
            <label htmlFor="check-out" className="block text-xs font-mono uppercase tracking-wider text-charcoal/60 mb-2">
              Check-out
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-clay pointer-events-none" />
              <input
                id="check-out"
                type="date"
                min={checkIn || todayISO()}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full border border-charcoal/15 rounded-sm pl-9 pr-3 py-3 text-sm focus:border-clay outline-none"
                required
              />
            </div>
          </div>

          <div className="md:col-span-1">
            <label htmlFor="adults" className="block text-xs font-mono uppercase tracking-wider text-charcoal/60 mb-2">
              Adults
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-clay pointer-events-none" />
              <select
                id="adults"
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                className="w-full border border-charcoal/15 rounded-sm pl-9 pr-3 py-3 text-sm focus:border-clay outline-none appearance-none bg-ivory"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>{n} Adult{n > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="md:col-span-1">
            <label htmlFor="children" className="block text-xs font-mono uppercase tracking-wider text-charcoal/60 mb-2">
              Children
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-clay pointer-events-none" />
              <select
                id="children"
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
                className="w-full border border-charcoal/15 rounded-sm pl-9 pr-3 py-3 text-sm focus:border-clay outline-none appearance-none bg-ivory"
              >
                {[0, 1, 2, 3, 4].map((n) => (
                  <option key={n} value={n}>{n} Child{n !== 1 ? 'ren' : ''}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="md:col-span-1">
            <label htmlFor="rooms" className="block text-xs font-mono uppercase tracking-wider text-charcoal/60 mb-2">
              Rooms
            </label>
            <div className="relative">
              <BedDouble className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-clay pointer-events-none" />
              <select
                id="rooms"
                value={roomsCount}
                onChange={(e) => setRoomsCount(Number(e.target.value))}
                className="w-full border border-charcoal/15 rounded-sm pl-9 pr-3 py-3 text-sm focus:border-clay outline-none appearance-none bg-ivory"
              >
                {[1, 2, 3, 4].map((n) => (
                  <option key={n} value={n}>{n} Room{n > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {error && (
          <p className="flex items-center gap-2 text-clay text-sm mt-4" role="alert">
            <AlertCircle className="w-4 h-4 shrink-0" /> {error}
          </p>
        )}

        <button type="submit" className="btn-primary w-full md:w-auto mt-6">
          <Search className="w-4 h-4" /> Search Availability
        </button>
      </form>
    </div>
  )
}
