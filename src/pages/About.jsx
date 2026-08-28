import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Leaf, HeartHandshake, Target, Eye } from 'lucide-react'
import SectionDivider from '../components/SectionDivider.jsx'

export default function About() {
  useEffect(() => {
    document.title = 'About Us | Fahari Gardens'
  }, [])

  return (
    <>
      <section className="relative h-80 md:h-[420px] flex items-end">
        <img
          src="https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=1920&q=80&auto=format&fit=crop"
          alt="Fahari Gardens landscaped grounds"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 to-charcoal/20" />
        <div className="container-xl relative z-10 pb-14">
          <p className="eyebrow text-gold-light mb-2">Our Story</p>
          <h1 className="font-display text-4xl md:text-6xl text-ivory">About Fahari Gardens</h1>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="eyebrow mb-3">How We Started</p>
            <h2 className="font-display text-3xl md:text-4xl text-forest-dark leading-tight mb-6">
              Named for the pride we take in a quiet corner of Utawala
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              &ldquo;Fahari&rdquo; means pride or glory in Swahili — and it&apos;s the
              word that best describes what we set out to build: a resort
              that Utawala, and Nairobi more broadly, could point to with
              pride. Not the loudest hotel in the city, but one that gets
              the fundamentals unmistakably right.
            </p>
            <p className="text-charcoal/70 leading-relaxed">
              What began as a single garden villa has grown into a full
              resort, but the instinct hasn&apos;t changed: build around the
              gardens, hire people who care, and let the rest follow.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80&auto=format&fit=crop" alt="Guest room at Fahari Gardens" className="rounded-md h-56 w-full object-cover shadow-card" />
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format&fit=crop" alt="Fahari Gardens restaurant" className="rounded-md h-56 w-full object-cover shadow-card mt-8" />
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="section-pad bg-forest-dark text-ivory">
        <div className="container-xl grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Target className="w-8 h-8 text-gold-light mb-4" strokeWidth={1.5} />
            <h3 className="font-display text-2xl mb-3">Our Mission</h3>
            <p className="text-ivory/70 text-sm leading-relaxed">
              To give every guest in Utawala a place that feels considered
              from arrival to checkout — comfortable rooms, honest food, and
              service that anticipates rather than reacts.
            </p>
          </div>
          <div>
            <Eye className="w-8 h-8 text-gold-light mb-4" strokeWidth={1.5} />
            <h3 className="font-display text-2xl mb-3">Our Vision</h3>
            <p className="text-ivory/70 text-sm leading-relaxed">
              To be the resort Nairobi recommends first for anyone who wants
              a quieter, greener alternative to the city centre — without
              trading away convenience.
            </p>
          </div>
          <div>
            <HeartHandshake className="w-8 h-8 text-gold-light mb-4" strokeWidth={1.5} />
            <h3 className="font-display text-2xl mb-3">Our Values</h3>
            <p className="text-ivory/70 text-sm leading-relaxed">
              Warmth without formality, attention to detail without fuss,
              and a genuine respect for the gardens and grounds we&apos;re
              built around.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-xl">
          <div className="max-w-xl mb-14">
            <p className="eyebrow mb-3">Why Guests Choose Us</p>
            <h2 className="font-display text-4xl text-forest-dark leading-tight">
              A resort built on a few things done consistently well
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { title: 'Location', text: 'Close enough to JKIA and the CBD to be convenient, far enough to feel removed.' },
              { title: 'Gardens', text: 'Landscaped grounds guests actually use — for walks, quiet calls, and slow mornings.' },
              { title: 'People', text: 'A small team trained to notice the details that make a stay feel personal.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <Leaf className="w-6 h-6 text-clay shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="font-display text-xl text-forest-dark mb-1.5">{item.title}</h3>
                  <p className="text-sm text-charcoal/65 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/rooms" className="btn-primary mt-14 inline-flex">See Our Rooms</Link>
        </div>
      </section>
    </>
  )
}
