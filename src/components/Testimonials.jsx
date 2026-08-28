import { Star } from 'lucide-react'
import { testimonials } from '../data/testimonials.js'

export default function Testimonials() {
  return (
    <section className="section-pad bg-ivory">
      <div className="container-xl">
        <div className="max-w-xl mb-16">
          <p className="eyebrow mb-3">Guest Reviews</p>
          <h2 className="font-display text-4xl md:text-5xl text-forest-dark leading-tight">
            What guests say after they leave
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="bg-sand/30 rounded-md p-7 flex flex-col gap-4">
              <div className="flex items-center gap-1" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < t.rating ? 'fill-gold text-gold' : 'text-charcoal/20'}`}
                  />
                ))}
              </div>
              <p className="text-charcoal/75 leading-relaxed">&ldquo;{t.review}&rdquo;</p>
              <footer className="flex items-center gap-3 mt-2">
                <img
                  src={t.image}
                  alt=""
                  loading="lazy"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <cite className="not-italic font-semibold text-forest-dark text-sm block">{t.name}</cite>
                  <span className="text-xs text-charcoal/50">{t.origin}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
