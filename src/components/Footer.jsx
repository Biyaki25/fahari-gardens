import { Link } from 'react-router-dom'
import { Leaf, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email.includes('@')) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="bg-forest-dark text-ivory">
      <div className="container-xl py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="w-6 h-6 text-gold-light" strokeWidth={1.5} />
            <span className="font-display text-xl">Fahari Gardens</span>
          </div>
          <p className="text-ivory/70 text-sm leading-relaxed max-w-xs">
            A garden resort in Utawala, Nairobi, built around quiet comfort,
            attentive service and a genuine sense of place.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" aria-label="Facebook" className="text-ivory/70 hover:text-gold-light transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="text-ivory/70 hover:text-gold-light transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter / X" className="text-ivory/70 hover:text-gold-light transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg mb-4">Explore</h3>
          <ul className="space-y-2.5 text-sm text-ivory/70">
            <li><Link to="/rooms" className="hover:text-gold-light transition-colors">Rooms &amp; Suites</Link></li>
            <li><Link to="/#dining" className="hover:text-gold-light transition-colors">Dining</Link></li>
            <li><Link to="/#amenities" className="hover:text-gold-light transition-colors">Amenities</Link></li>
            <li><Link to="/#gallery" className="hover:text-gold-light transition-colors">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-gold-light transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-gold-light transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-ivory/70">
            <li className="flex gap-2.5">
              <MapPin className="w-5 h-5 shrink-0 text-gold-light" />
              <span>0100 Road D, Upendo Close, Utawala, Nairobi, Kenya</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="w-5 h-5 shrink-0 text-gold-light" />
              <a href="tel:+254700000000" className="hover:text-gold-light transition-colors">+254 700 000 000</a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="w-5 h-5 shrink-0 text-gold-light" />
              <a href="mailto:reservations@fahari-gardens.com" className="hover:text-gold-light transition-colors">reservations@fahari-gardens.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg mb-4">Stay in touch</h3>
          <p className="text-sm text-ivory/70 mb-4">Seasonal offers and garden updates, occasionally, never spam.</p>
          {subscribed ? (
            <p className="text-sm text-gold-light" role="status">You&apos;re subscribed — welcome.</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2" noValidate>
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="bg-ivory/10 border border-ivory/20 rounded-sm px-4 py-2.5 text-sm placeholder:text-ivory/40 focus:border-gold-light outline-none"
              />
              <button type="submit" className="btn-forest border border-gold-light/40 text-sm py-2.5">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-xl py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-ivory/50">
          <p>© {new Date().getFullYear()} Fahari Gardens. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ivory/80">Privacy Policy</a>
            <a href="#" className="hover:text-ivory/80">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
