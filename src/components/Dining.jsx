import { Link } from 'react-router-dom'

export default function Dining() {
  return (
    <section id="dining" className="section-pad bg-ivory scroll-mt-20">
      <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format&fit=crop"
            alt="Fahari Gardens restaurant table setting"
            loading="lazy"
            className="rounded-md object-cover h-64 w-full shadow-card"
          />
          <img
            src="https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&q=80&auto=format&fit=crop"
            alt="Plated dish served at Fahari Gardens restaurant"
            loading="lazy"
            className="rounded-md object-cover h-64 w-full mt-10 shadow-card"
          />
        </div>

        <div>
          <p className="eyebrow mb-3">Dining</p>
          <h2 className="font-display text-4xl md:text-5xl text-forest-dark leading-tight mb-6">
            A kitchen built on local ingredients and honest technique
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-6">
            Breakfast is unhurried, dinners lean on what&apos;s in season, and the
            terrace stays open late for guests who&apos;d rather eat outside. Our
            chefs work closely with growers around Nairobi to keep the menu
            changing with the calendar, not stuck to it.
          </p>
          <ul className="space-y-3 mb-8 text-sm text-charcoal/75">
            <li className="flex gap-2"><span className="text-clay">—</span> A la carte breakfast, 6:30–10:30am</li>
            <li className="flex gap-2"><span className="text-clay">—</span> Garden terrace dining, lunch &amp; dinner</li>
            <li className="flex gap-2"><span className="text-clay">—</span> In-room dining available 24 hours</li>
            <li className="flex gap-2"><span className="text-clay">—</span> Private dining for events, on request</li>
          </ul>
          <Link to="/contact" className="btn-forest">Reserve a Table</Link>
        </div>
      </div>
    </section>
  )
}
