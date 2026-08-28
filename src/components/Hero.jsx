import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[640px] flex items-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80&auto=format&fit=crop"
        alt="Fahari Gardens resort pool framed by gardens at dusk"
        className="absolute inset-0 w-full h-full object-cover"
        fetchpriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/35 to-charcoal/50" />

      <div className="container-xl relative z-10 pt-20">
        <p className="eyebrow text-gold-light mb-5 animate-fadeUp">Utawala · Nairobi · Kenya</p>
        <h1 className="font-display text-5xl md:text-7xl text-ivory max-w-3xl leading-[1.05] mb-6 animate-fadeUp [animation-delay:120ms] opacity-0 [animation-fill-mode:forwards]">
          Experience Comfort, Elegance &amp; Hospitality in Utawala
        </h1>
        <p className="text-ivory/85 text-lg max-w-xl mb-10 animate-fadeUp [animation-delay:240ms] opacity-0 [animation-fill-mode:forwards]">
          A garden resort minutes from JKIA, where quiet courtyards, considered
          rooms and warm Kenyan hospitality meet.
        </p>
        <div className="flex flex-wrap gap-4 animate-fadeUp [animation-delay:360ms] opacity-0 [animation-fill-mode:forwards]">
          <Link to="/booking" className="btn-primary">Book Your Stay</Link>
          <Link to="/rooms" className="btn-outline">Explore Our Rooms</Link>
        </div>
      </div>

      <a
        href="#booking-search"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/70 hover:text-ivory transition-colors z-10"
        aria-label="Scroll to booking search"
      >
        <ChevronDown className="w-7 h-7 animate-bounce" />
      </a>
    </section>
  )
}
