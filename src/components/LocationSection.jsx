import { MapPin, Navigation, Phone, Mail, Plane } from 'lucide-react'

export default function LocationSection() {
  const mapSrc =
    'https://www.google.com/maps?q=Utawala,+Nairobi,+Kenya&output=embed'

  return (
    <section className="section-pad bg-sand/40">
      <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        <div>
          <p className="eyebrow mb-3">Find Us</p>
          <h2 className="font-display text-4xl md:text-5xl text-forest-dark leading-tight mb-6">
            Utawala, Nairobi — close to JKIA, far from the noise
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-8">
            Fahari Gardens sits just off Eastern Bypass in Utawala, a short
            drive from Jomo Kenyatta International Airport and easy reach of
            Nairobi&apos;s CBD and Nairobi National Park.
          </p>

          <div className="space-y-5 mb-8">
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-clay shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-forest-dark text-sm">Address</p>
                <p className="text-sm text-charcoal/65">0100 Road D, Upendo Close, Utawala, Nairobi, Kenya</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Plane className="w-5 h-5 text-clay shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-forest-dark text-sm">From JKIA</p>
                <p className="text-sm text-charcoal/65">Approx. 20 minutes by road, traffic dependent</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone className="w-5 h-5 text-clay shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-forest-dark text-sm">Phone</p>
                <a href="tel:+254700000000" className="text-sm text-charcoal/65 hover:text-clay">+254 700 000 000</a>
              </div>
            </div>
            <div className="flex gap-3">
              <Mail className="w-5 h-5 text-clay shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-forest-dark text-sm">Email</p>
                <a href="mailto:danielnyamongo704@gmail.com" className="text-sm text-charcoal/65 hover:text-clay">danielnyamongo704@gmail.com</a>
              </div>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Utawala,+Nairobi,+Kenya"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-forest"
          >
            <Navigation className="w-4 h-4" /> Get Directions
          </a>
        </div>

        <div className="rounded-md overflow-hidden shadow-card min-h-[360px]">
          <iframe
            title="Map showing Fahari Gardens location in Utawala, Nairobi"
            src={mapSrc}
            className="w-full h-full min-h-[360px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
