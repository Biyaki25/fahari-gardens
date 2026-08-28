import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Leaf } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/rooms', label: 'Rooms' },
  { to: '/#dining', label: 'Dining' },
  { to: '/#amenities', label: 'Amenities' },
  { to: '/#gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const solid = scrolled || !isHome || open

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid ? 'bg-ivory/95 backdrop-blur shadow-card' : 'bg-gradient-to-b from-charcoal/60 to-transparent'
      }`}
    >
      <nav className="container-xl flex items-center justify-between h-20" aria-label="Primary">
        <Link to="/" className="flex items-center gap-2 group" aria-label="Fahari Gardens home">
          <Leaf className={`w-6 h-6 ${solid ? 'text-clay' : 'text-gold-light'} transition-colors`} strokeWidth={1.5} />
          <span className={`font-display text-xl tracking-wide ${solid ? 'text-forest-dark' : 'text-ivory'}`}>
            Fahari Gardens
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors ${
                    solid ? 'text-charcoal hover:text-clay' : 'text-ivory/90 hover:text-gold-light'
                  } ${isActive && link.to !== '/#dining' && link.to !== '/#amenities' && link.to !== '/#gallery' ? 'underline decoration-gold decoration-2 underline-offset-8' : ''}`
                }
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+254700000000" className={`text-sm font-medium ${solid ? 'text-charcoal' : 'text-ivory/90'}`}>
            +254 700 000 000
          </a>
          <Link to="/booking" className="btn-primary text-sm px-6 py-3">
            Book Now
          </Link>
        </div>

        <button
          className={`lg:hidden p-2 ${solid ? 'text-forest-dark' : 'text-ivory'}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-ivory border-t border-charcoal/10 px-6 pb-8 pt-2 animate-fadeUp">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  className="block py-3 text-base font-medium text-charcoal border-b border-charcoal/10"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/booking" className="btn-primary w-full mt-6">
            Book Now
          </Link>
        </div>
      )}
    </header>
  )
}
