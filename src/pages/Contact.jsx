import { useEffect, useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ fullName: '', email: '', phone: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  useEffect(() => {
    document.title = 'Contact Us | Fahari Gardens'
  }, [])

  const validate = () => {
    const errs = {}
    if (!form.fullName.trim()) errs.fullName = 'Full name is required.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Enter a valid email address.'
    if (!/^[0-9+()\s-]{7,}$/.test(form.phone)) errs.phone = 'Enter a valid phone number.'
    if (!form.subject.trim()) errs.subject = 'Please add a subject.'
    if (!form.message.trim() || form.message.trim().length < 10) errs.message = 'Message should be at least 10 characters.'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setSent(true)
      setForm({ fullName: '', email: '', phone: '', subject: '', message: '' })
    }
  }

  const mapSrc = 'https://www.google.com/maps?q=Utawala,+Nairobi,+Kenya&output=embed'

  return (
    <>
      <section className="relative h-72 md:h-96 flex items-end">
        <img
          src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1920&q=80&auto=format&fit=crop"
          alt="Fahari Gardens reception"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 to-charcoal/20" />
        <div className="container-xl relative z-10 pb-12">
          <p className="eyebrow text-gold-light mb-2">Get In Touch</p>
          <h1 className="font-display text-4xl md:text-6xl text-ivory">Contact Us</h1>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 bg-ivory rounded-md shadow-card p-8">
            <h2 className="font-display text-2xl text-forest-dark mb-6">Send Us a Message</h2>

            {sent && (
              <p className="flex items-center gap-2 bg-forest/10 text-forest-dark text-sm px-4 py-3 rounded-sm mb-6" role="status">
                <CheckCircle2 className="w-5 h-5 shrink-0" /> Thank you — your message has been sent. We&apos;ll reply within one business day.
              </p>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="c-name" className="block text-xs font-mono uppercase tracking-wider text-charcoal/60 mb-2">Full Name</label>
                  <input id="c-name" type="text" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} className="w-full border border-charcoal/15 rounded-sm px-3 py-3 text-sm focus:border-clay outline-none" required aria-invalid={!!errors.fullName} />
                  {errors.fullName && <p className="text-clay text-xs mt-1.5">{errors.fullName}</p>}
                </div>
                <div>
                  <label htmlFor="c-email" className="block text-xs font-mono uppercase tracking-wider text-charcoal/60 mb-2">Email</label>
                  <input id="c-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full border border-charcoal/15 rounded-sm px-3 py-3 text-sm focus:border-clay outline-none" required aria-invalid={!!errors.email} />
                  {errors.email && <p className="text-clay text-xs mt-1.5">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="c-phone" className="block text-xs font-mono uppercase tracking-wider text-charcoal/60 mb-2">Phone Number</label>
                  <input id="c-phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+254 7XX XXX XXX" className="w-full border border-charcoal/15 rounded-sm px-3 py-3 text-sm focus:border-clay outline-none" required aria-invalid={!!errors.phone} />
                  {errors.phone && <p className="text-clay text-xs mt-1.5">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="c-subject" className="block text-xs font-mono uppercase tracking-wider text-charcoal/60 mb-2">Subject</label>
                  <input id="c-subject" type="text" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full border border-charcoal/15 rounded-sm px-3 py-3 text-sm focus:border-clay outline-none" required aria-invalid={!!errors.subject} />
                  {errors.subject && <p className="text-clay text-xs mt-1.5">{errors.subject}</p>}
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="c-message" className="block text-xs font-mono uppercase tracking-wider text-charcoal/60 mb-2">Message</label>
                <textarea id="c-message" rows="5" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full border border-charcoal/15 rounded-sm px-3 py-3 text-sm focus:border-clay outline-none" required aria-invalid={!!errors.message} />
                {errors.message && <p className="text-clay text-xs mt-1.5">{errors.message}</p>}
              </div>
              <button type="submit" className="btn-primary">
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-sand/30 rounded-md p-6">
              <h3 className="font-display text-lg text-forest-dark mb-4">Fahari Gardens</h3>
              <ul className="space-y-4 text-sm text-charcoal/70">
                <li className="flex gap-3"><MapPin className="w-5 h-5 text-clay shrink-0" /> 0100 Road D, Upendo Close, Utawala, Nairobi, Kenya</li>
                <li className="flex gap-3"><Phone className="w-5 h-5 text-clay shrink-0" /> <a href="tel:+254700000000" className="hover:text-clay">+254 700 000 000</a></li>
                <li className="flex gap-3"><Mail className="w-5 h-5 text-clay shrink-0" /> <a href="mailto:reservations@fahari-gardens.com" className="hover:text-clay">reservations@fahari-gardens.com</a></li>
                <li className="flex gap-3"><Clock className="w-5 h-5 text-clay shrink-0" /> Reception open 24 hours</li>
              </ul>
            </div>
            <div className="rounded-md overflow-hidden shadow-card h-64">
              <iframe
                title="Map showing Fahari Gardens location"
                src={mapSrc}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
