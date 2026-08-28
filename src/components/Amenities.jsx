import { Wifi, UtensilsCrossed, BedDouble, Car, ConciergeBell, CalendarDays, Clock, ShieldCheck } from 'lucide-react'

const amenities = [
  { icon: Wifi, label: 'Free Wi-Fi' },
  { icon: UtensilsCrossed, label: 'Restaurant' },
  { icon: BedDouble, label: 'Comfortable Rooms' },
  { icon: Car, label: 'On-site Parking' },
  { icon: ConciergeBell, label: 'Room Service' },
  { icon: CalendarDays, label: 'Events & Meetings' },
  { icon: Clock, label: '24-Hour Reception' },
  { icon: ShieldCheck, label: 'Security' },
]

export default function Amenities() {
  return (
    <section id="amenities" className="section-pad bg-forest-dark text-ivory scroll-mt-20">
      <div className="container-xl">
        <div className="max-w-xl mb-16">
          <p className="eyebrow text-gold-light mb-3">Amenities</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Everything a stay quietly depends on
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ivory/10 rounded-md overflow-hidden">
          {amenities.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="bg-forest-dark hover:bg-forest transition-colors duration-300 p-8 flex flex-col items-center text-center gap-3"
            >
              <Icon className="w-7 h-7 text-gold-light" strokeWidth={1.5} />
              <span className="text-sm font-medium text-ivory/85">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
