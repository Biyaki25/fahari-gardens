import { BedDouble, Users, MapPin, Trees, UtensilsCrossed, ShieldCheck } from 'lucide-react'
import SectionDivider from './SectionDivider.jsx'

const reasons = [
  { icon: BedDouble, title: 'Considered Comfort', text: 'Rooms designed for genuine rest, from mattress quality to how the morning light enters.' },
  { icon: Users, title: 'Attentive Hospitality', text: 'A small, well-trained team that remembers names, not just room numbers.' },
  { icon: MapPin, title: 'Convenient Utawala Location', text: 'Minutes from JKIA and the Eastern Bypass, tucked away from the noise of the city.' },
  { icon: Trees, title: 'Gardens & Open Air', text: 'Landscaped courtyards and quiet corners built for slowing down.' },
  { icon: UtensilsCrossed, title: 'Quality Dining', text: 'A kitchen that treats local ingredients and honest technique as the whole point.' },
  { icon: ShieldCheck, title: 'Secure & Professional', text: '24-hour reception, on-site security and a team trained to anticipate, not just react.' },
]

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-ivory">
      <div className="container-xl">
        <div className="max-w-xl mb-16">
          <p className="eyebrow mb-3">Why Fahari Gardens</p>
          <h2 className="font-display text-4xl md:text-5xl text-forest-dark leading-tight">
            The details guests notice, and the ones they don&apos;t have to
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {reasons.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="flex gap-4 opacity-0 animate-fadeUp" style={{ animationDelay: `${i * 90}ms`, animationFillMode: 'forwards' }}>
              <div className="shrink-0 w-12 h-12 rounded-full bg-forest/8 flex items-center justify-center">
                <Icon className="w-5 h-5 text-clay" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-xl text-forest-dark mb-1.5">{title}</h3>
                <p className="text-sm text-charcoal/65 leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SectionDivider className="mt-20" />
    </section>
  )
}
