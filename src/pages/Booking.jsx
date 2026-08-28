import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Check, CreditCard, Smartphone, AlertCircle, ChevronLeft } from 'lucide-react'
import { rooms, getRoomById } from '../data/rooms.js'

const STEPS = ['Search', 'Choose Room', 'Guest Details', 'Summary', 'Payment', 'Confirmation']
const todayISO = () => new Date().toISOString().split('T')[0]

function nightsBetween(checkIn, checkOut) {
  if (!checkIn || !checkOut) return 0
  const ms = new Date(checkOut) - new Date(checkIn)
  return Math.max(0, Math.round(ms / (1000 * 60 * 60 * 24)))
}

export default function Booking() {
  const [searchParams] = useSearchParams()
  const [step, setStep] = useState(0)

  const [checkIn, setCheckIn] = useState(searchParams.get('checkIn') || '')
  const [checkOut, setCheckOut] = useState(searchParams.get('checkOut') || '')
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)
  const [searchError, setSearchError] = useState('')

  const preselectedRoom = searchParams.get('room')
  const [selectedRoomId, setSelectedRoomId] = useState(preselectedRoom || null)

  const [guest, setGuest] = useState({ fullName: '', email: '', phone: '', requests: '' })
  const [guestErrors, setGuestErrors] = useState({})

  const [payMethod, setPayMethod] = useState('mpesa')
  const [confirmation, setConfirmation] = useState(null)

  useEffect(() => {
    document.title = `Book Your Stay | Fahari Gardens`
  }, [])

  useEffect(() => {
    if (preselectedRoom && checkIn && checkOut) {
      setStep(2)
    } else if (preselectedRoom) {
      setStep(0)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const nights = useMemo(() => nightsBetween(checkIn, checkOut), [checkIn, checkOut])
  const selectedRoom = selectedRoomId ? getRoomById(selectedRoomId) : null

  const taxRate = 0.16
  const roomTotal = selectedRoom ? selectedRoom.price * nights : 0
  const tax = Math.round(roomTotal * taxRate)
  const grandTotal = roomTotal + tax

  const handleSearch = (e) => {
    e.preventDefault()
    setSearchError('')
    if (!checkIn || !checkOut) {
      setSearchError('Please select both check-in and check-out dates.')
      return
    }
    if (checkIn < todayISO()) {
      setSearchError('Check-in date cannot be in the past.')
      return
    }
    if (checkOut <= checkIn) {
      setSearchError('Check-out date must be after check-in.')
      return
    }
    setStep(1)
  }

  const handleSelectRoom = (id) => {
    setSelectedRoomId(id)
    setStep(2)
  }

  const validateGuest = () => {
    const errs = {}
    if (!guest.fullName.trim()) errs.fullName = 'Full name is required.'
    if (!/^\S+@\S+\.\S+$/.test(guest.email)) errs.email = 'Enter a valid email address.'
    if (!/^[0-9+()\s-]{7,}$/.test(guest.phone)) errs.phone = 'Enter a valid phone number.'
    setGuestErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleGuestSubmit = (e) => {
    e.preventDefault()
    if (validateGuest()) setStep(3)
  }

  const handleConfirmPayment = (e) => {
    e.preventDefault()
    const ref = 'FG-' + Math.random().toString(36).slice(2, 8).toUpperCase()
    setConfirmation({
      ref,
      room: selectedRoom,
      checkIn,
      checkOut,
      nights,
      guest,
      total: grandTotal,
      method: payMethod,
    })
    setStep(5)
  }

  return (
    <section className="pt-28 pb-24 bg-sand/20 min-h-screen">
      <div className="container-xl">
        <p className="eyebrow mb-2">Reservation</p>
        <h1 className="font-display text-4xl md:text-5xl text-forest-dark mb-10">Book Your Stay</h1>

        {/* Stepper */}
        <ol className="hidden md:flex items-center gap-2 mb-12" aria-label="Booking progress">
          {STEPS.map((label, i) => (
            <li key={label} className="flex items-center gap-2 flex-1">
              <div className="flex items-center gap-2">
                <span
                  className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-xs font-mono ${
                    i < step ? 'bg-forest-dark text-ivory' : i === step ? 'bg-clay text-ivory' : 'bg-charcoal/10 text-charcoal/50'
                  }`}
                >
                  {i < step ? <Check className="w-4 h-4" /> : i + 1}
                </span>
                <span className={`text-xs whitespace-nowrap ${i === step ? 'text-forest-dark font-semibold' : 'text-charcoal/50'}`}>
                  {label}
                </span>
              </div>
              {i < STEPS.length - 1 && <span className="flex-1 h-px bg-charcoal/15" />}
            </li>
          ))}
        </ol>

        {/* Step 0: Search */}
        {step === 0 && (
          <form onSubmit={handleSearch} className="bg-ivory rounded-md shadow-card p-8 max-w-3xl" noValidate>
            <h2 className="font-display text-2xl text-forest-dark mb-6">When would you like to stay?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="b-checkin" className="block text-xs font-mono uppercase tracking-wider text-charcoal/60 mb-2">Check-in</label>
                <input id="b-checkin" type="date" min={todayISO()} value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="w-full border border-charcoal/15 rounded-sm px-3 py-3 text-sm focus:border-clay outline-none" required />
              </div>
              <div>
                <label htmlFor="b-checkout" className="block text-xs font-mono uppercase tracking-wider text-charcoal/60 mb-2">Check-out</label>
                <input id="b-checkout" type="date" min={checkIn || todayISO()} value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="w-full border border-charcoal/15 rounded-sm px-3 py-3 text-sm focus:border-clay outline-none" required />
              </div>
              <div>
                <label htmlFor="b-adults" className="block text-xs font-mono uppercase tracking-wider text-charcoal/60 mb-2">Adults</label>
                <select id="b-adults" value={adults} onChange={(e) => setAdults(Number(e.target.value))} className="w-full border border-charcoal/15 rounded-sm px-3 py-3 text-sm focus:border-clay outline-none bg-ivory">
                  {[1, 2, 3, 4, 5, 6].map((n) => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="b-children" className="block text-xs font-mono uppercase tracking-wider text-charcoal/60 mb-2">Children</label>
                <select id="b-children" value={children} onChange={(e) => setChildren(Number(e.target.value))} className="w-full border border-charcoal/15 rounded-sm px-3 py-3 text-sm focus:border-clay outline-none bg-ivory">
                  {[0, 1, 2, 3, 4].map((n) => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
            </div>
            {searchError && (
              <p className="flex items-center gap-2 text-clay text-sm mb-4" role="alert">
                <AlertCircle className="w-4 h-4 shrink-0" /> {searchError}
              </p>
            )}
            <button type="submit" className="btn-primary">Check Availability</button>
          </form>
        )}

        {/* Step 1: Choose Room */}
        {step === 1 && (
          <div>
            <button onClick={() => setStep(0)} className="flex items-center gap-1.5 text-sm text-charcoal/60 hover:text-clay mb-6">
              <ChevronLeft className="w-4 h-4" /> Back to search
            </button>
            <p className="text-sm text-charcoal/60 mb-8">
              Available rooms for <strong>{checkIn}</strong> to <strong>{checkOut}</strong> ({nights} night{nights !== 1 ? 's' : ''}, {adults + children} guest{adults + children !== 1 ? 's' : ''})
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rooms.filter((r) => r.guests >= adults + children || r.guests >= adults).map((room) => (
                <div key={room.id} className="bg-ivory rounded-md shadow-card overflow-hidden flex flex-col sm:flex-row">
                  <img src={room.image} alt={room.name} className="w-full sm:w-40 h-40 object-cover" loading="lazy" />
                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="font-display text-lg text-forest-dark">{room.name}</h3>
                      <p className="text-xs text-charcoal/50 mb-2">{room.bed} · Up to {room.guests} guests</p>
                    </div>
                    <div className="flex items-end justify-between">
                      <p className="font-mono text-lg text-forest-dark">{room.currency} {room.price.toLocaleString()}<span className="text-xs text-charcoal/50 font-body">/night</span></p>
                      <button onClick={() => handleSelectRoom(room.id)} className="btn-primary text-sm px-4 py-2.5">Select</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Guest Details */}
        {step === 2 && selectedRoom && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <form onSubmit={handleGuestSubmit} className="lg:col-span-2 bg-ivory rounded-md shadow-card p-8" noValidate>
              <button type="button" onClick={() => setStep(1)} className="flex items-center gap-1.5 text-sm text-charcoal/60 hover:text-clay mb-6">
                <ChevronLeft className="w-4 h-4" /> Change room
              </button>
              <h2 className="font-display text-2xl text-forest-dark mb-6">Guest Details</h2>

              <div className="space-y-5">
                <div>
                  <label htmlFor="g-name" className="block text-xs font-mono uppercase tracking-wider text-charcoal/60 mb-2">Full Name</label>
                  <input id="g-name" type="text" value={guest.fullName} onChange={(e) => setGuest({ ...guest, fullName: e.target.value })} className="w-full border border-charcoal/15 rounded-sm px-3 py-3 text-sm focus:border-clay outline-none" required aria-invalid={!!guestErrors.fullName} aria-describedby={guestErrors.fullName ? 'g-name-err' : undefined} />
                  {guestErrors.fullName && <p id="g-name-err" className="text-clay text-xs mt-1.5">{guestErrors.fullName}</p>}
                </div>
                <div>
                  <label htmlFor="g-email" className="block text-xs font-mono uppercase tracking-wider text-charcoal/60 mb-2">Email Address</label>
                  <input id="g-email" type="email" value={guest.email} onChange={(e) => setGuest({ ...guest, email: e.target.value })} className="w-full border border-charcoal/15 rounded-sm px-3 py-3 text-sm focus:border-clay outline-none" required aria-invalid={!!guestErrors.email} aria-describedby={guestErrors.email ? 'g-email-err' : undefined} />
                  {guestErrors.email && <p id="g-email-err" className="text-clay text-xs mt-1.5">{guestErrors.email}</p>}
                </div>
                <div>
                  <label htmlFor="g-phone" className="block text-xs font-mono uppercase tracking-wider text-charcoal/60 mb-2">Phone Number</label>
                  <input id="g-phone" type="tel" value={guest.phone} onChange={(e) => setGuest({ ...guest, phone: e.target.value })} placeholder="+254 7XX XXX XXX" className="w-full border border-charcoal/15 rounded-sm px-3 py-3 text-sm focus:border-clay outline-none" required aria-invalid={!!guestErrors.phone} aria-describedby={guestErrors.phone ? 'g-phone-err' : undefined} />
                  {guestErrors.phone && <p id="g-phone-err" className="text-clay text-xs mt-1.5">{guestErrors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="g-requests" className="block text-xs font-mono uppercase tracking-wider text-charcoal/60 mb-2">Special Requests (optional)</label>
                  <textarea id="g-requests" rows="3" value={guest.requests} onChange={(e) => setGuest({ ...guest, requests: e.target.value })} className="w-full border border-charcoal/15 rounded-sm px-3 py-3 text-sm focus:border-clay outline-none" />
                </div>
              </div>

              <button type="submit" className="btn-primary mt-8">Continue to Summary</button>
            </form>

            <BookingSidebar room={selectedRoom} checkIn={checkIn} checkOut={checkOut} nights={nights} tax={tax} total={grandTotal} />
          </div>
        )}

        {/* Step 3: Summary */}
        {step === 3 && selectedRoom && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-ivory rounded-md shadow-card p-8">
              <button onClick={() => setStep(2)} className="flex items-center gap-1.5 text-sm text-charcoal/60 hover:text-clay mb-6">
                <ChevronLeft className="w-4 h-4" /> Edit guest details
              </button>
              <h2 className="font-display text-2xl text-forest-dark mb-6">Booking Summary</h2>

              <dl className="divide-y divide-charcoal/10 text-sm">
                <div className="flex justify-between py-3"><dt className="text-charcoal/60">Room</dt><dd className="font-medium text-forest-dark">{selectedRoom.name}</dd></div>
                <div className="flex justify-between py-3"><dt className="text-charcoal/60">Check-in</dt><dd className="font-medium text-forest-dark">{checkIn}</dd></div>
                <div className="flex justify-between py-3"><dt className="text-charcoal/60">Check-out</dt><dd className="font-medium text-forest-dark">{checkOut}</dd></div>
                <div className="flex justify-between py-3"><dt className="text-charcoal/60">Nights</dt><dd className="font-medium text-forest-dark">{nights}</dd></div>
                <div className="flex justify-between py-3"><dt className="text-charcoal/60">Guest</dt><dd className="font-medium text-forest-dark">{guest.fullName}</dd></div>
                <div className="flex justify-between py-3"><dt className="text-charcoal/60">Contact</dt><dd className="font-medium text-forest-dark">{guest.email} · {guest.phone}</dd></div>
                {guest.requests && <div className="flex justify-between py-3 gap-6"><dt className="text-charcoal/60 shrink-0">Requests</dt><dd className="font-medium text-forest-dark text-right">{guest.requests}</dd></div>}
              </dl>

              <button onClick={() => setStep(4)} className="btn-primary mt-8">Continue to Payment</button>
            </div>

            <BookingSidebar room={selectedRoom} checkIn={checkIn} checkOut={checkOut} nights={nights} tax={tax} total={grandTotal} />
          </div>
        )}

        {/* Step 4: Payment */}
        {step === 4 && selectedRoom && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <form onSubmit={handleConfirmPayment} className="lg:col-span-2 bg-ivory rounded-md shadow-card p-8">
              <button type="button" onClick={() => setStep(3)} className="flex items-center gap-1.5 text-sm text-charcoal/60 hover:text-clay mb-6">
                <ChevronLeft className="w-4 h-4" /> Back to summary
              </button>
              <h2 className="font-display text-2xl text-forest-dark mb-2">Payment</h2>
              <p className="text-sm text-charcoal/60 mb-6">
                This is a demo payment step. No card or M-Pesa details are transmitted — a live
                payment provider will be connected here before launch.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                  type="button"
                  onClick={() => setPayMethod('mpesa')}
                  className={`border rounded-md p-4 flex flex-col items-center gap-2 transition-colors ${payMethod === 'mpesa' ? 'border-clay bg-clay/5' : 'border-charcoal/15'}`}
                >
                  <Smartphone className="w-6 h-6 text-clay" />
                  <span className="text-sm font-medium">M-Pesa</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPayMethod('card')}
                  className={`border rounded-md p-4 flex flex-col items-center gap-2 transition-colors ${payMethod === 'card' ? 'border-clay bg-clay/5' : 'border-charcoal/15'}`}
                >
                  <CreditCard className="w-6 h-6 text-clay" />
                  <span className="text-sm font-medium">Card Payment</span>
                </button>
              </div>

              {payMethod === 'mpesa' ? (
                <div>
                  <label htmlFor="mpesa-phone" className="block text-xs font-mono uppercase tracking-wider text-charcoal/60 mb-2">M-Pesa Phone Number</label>
                  <input id="mpesa-phone" type="tel" placeholder="+254 7XX XXX XXX" className="w-full border border-charcoal/15 rounded-sm px-3 py-3 text-sm focus:border-clay outline-none" required />
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="card-number" className="block text-xs font-mono uppercase tracking-wider text-charcoal/60 mb-2">Card Number</label>
                    <input id="card-number" type="text" placeholder="0000 0000 0000 0000" className="w-full border border-charcoal/15 rounded-sm px-3 py-3 text-sm focus:border-clay outline-none" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="card-exp" className="block text-xs font-mono uppercase tracking-wider text-charcoal/60 mb-2">Expiry</label>
                      <input id="card-exp" type="text" placeholder="MM/YY" className="w-full border border-charcoal/15 rounded-sm px-3 py-3 text-sm focus:border-clay outline-none" required />
                    </div>
                    <div>
                      <label htmlFor="card-cvc" className="block text-xs font-mono uppercase tracking-wider text-charcoal/60 mb-2">CVC</label>
                      <input id="card-cvc" type="text" placeholder="123" className="w-full border border-charcoal/15 rounded-sm px-3 py-3 text-sm focus:border-clay outline-none" required />
                    </div>
                  </div>
                </div>
              )}

              <button type="submit" className="btn-primary mt-8">Confirm &amp; Pay {selectedRoom.currency} {grandTotal.toLocaleString()}</button>
            </form>

            <BookingSidebar room={selectedRoom} checkIn={checkIn} checkOut={checkOut} nights={nights} tax={tax} total={grandTotal} />
          </div>
        )}

        {/* Step 5: Confirmation */}
        {step === 5 && confirmation && (
          <div className="max-w-2xl mx-auto bg-ivory rounded-md shadow-soft p-10 text-center">
            <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-forest" />
            </div>
            <h2 className="font-display text-3xl text-forest-dark mb-2">Booking Confirmed</h2>
            <p className="text-charcoal/60 mb-8">A confirmation has been sent to {confirmation.guest.email}.</p>

            <div className="bg-sand/30 rounded-md p-6 text-left text-sm space-y-3">
              <div className="flex justify-between"><span className="text-charcoal/60">Reference</span><span className="font-mono font-semibold text-forest-dark">{confirmation.ref}</span></div>
              <div className="flex justify-between"><span className="text-charcoal/60">Room</span><span className="font-medium text-forest-dark">{confirmation.room.name}</span></div>
              <div className="flex justify-between"><span className="text-charcoal/60">Dates</span><span className="font-medium text-forest-dark">{confirmation.checkIn} → {confirmation.checkOut}</span></div>
              <div className="flex justify-between"><span className="text-charcoal/60">Guest</span><span className="font-medium text-forest-dark">{confirmation.guest.fullName}</span></div>
              <div className="flex justify-between"><span className="text-charcoal/60">Payment Method</span><span className="font-medium text-forest-dark capitalize">{confirmation.method}</span></div>
              <div className="flex justify-between pt-3 border-t border-charcoal/10"><span className="text-charcoal/60">Total Paid</span><span className="font-mono font-semibold text-forest-dark">{confirmation.room.currency} {confirmation.total.toLocaleString()}</span></div>
            </div>

            <a href="/" className="btn-primary mt-8 inline-flex">Return to Homepage</a>
          </div>
        )}
      </div>
    </section>
  )
}

function BookingSidebar({ room, checkIn, checkOut, nights, tax, total }) {
  return (
    <aside className="bg-ivory rounded-md shadow-card p-6 h-fit sticky top-28">
      <img src={room.image} alt={room.name} className="w-full h-36 object-cover rounded-sm mb-4" />
      <h3 className="font-display text-lg text-forest-dark mb-1">{room.name}</h3>
      <p className="text-xs text-charcoal/50 mb-4">{checkIn || '—'} → {checkOut || '—'}</p>
      <dl className="text-sm space-y-2 border-t border-charcoal/10 pt-4">
        <div className="flex justify-between"><dt className="text-charcoal/60">{room.currency} {room.price.toLocaleString()} × {nights} night{nights !== 1 ? 's' : ''}</dt><dd>{room.currency} {(room.price * nights).toLocaleString()}</dd></div>
        <div className="flex justify-between"><dt className="text-charcoal/60">Taxes &amp; fees (16%)</dt><dd>{room.currency} {tax.toLocaleString()}</dd></div>
        <div className="flex justify-between font-semibold text-forest-dark text-base pt-2 border-t border-charcoal/10"><dt>Total</dt><dd>{room.currency} {total.toLocaleString()}</dd></div>
      </dl>
    </aside>
  )
}
