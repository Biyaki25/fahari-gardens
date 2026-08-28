import { useState, useCallback, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80&auto=format&fit=crop', alt: 'Fahari Gardens exterior and pool at dusk', tall: true },
  { src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1000&q=80&auto=format&fit=crop', alt: 'Garden Deluxe room interior' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1000&q=80&auto=format&fit=crop', alt: 'Restaurant dining area' },
  { src: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=1200&q=80&auto=format&fit=crop', alt: 'Hotel gardens and walking paths', tall: true },
  { src: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1000&q=80&auto=format&fit=crop', alt: 'Executive Suite bedroom' },
  { src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1000&q=80&auto=format&fit=crop', alt: 'Event and meeting space setup' },
  { src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&q=80&auto=format&fit=crop', alt: 'Hotel lobby and reception', tall: true },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80&auto=format&fit=crop', alt: 'En-suite bathroom detail' },
]

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)

  const close = useCallback(() => setActiveIndex(null), [])
  const prev = useCallback(() => setActiveIndex((i) => (i - 1 + images.length) % images.length), [])
  const next = useCallback(() => setActiveIndex((i) => (i + 1) % images.length), [])

  useEffect(() => {
    if (activeIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeIndex, close, prev, next])

  return (
    <section id="gallery" className="section-pad bg-sand/40 scroll-mt-20">
      <div className="container-xl">
        <div className="max-w-xl mb-16">
          <p className="eyebrow mb-3">Gallery</p>
          <h2 className="font-display text-4xl md:text-5xl text-forest-dark leading-tight">
            A closer look around Fahari Gardens
          </h2>
        </div>

        <div className="columns-2 md:columns-4 gap-4 [column-fill:_balance]">
          {images.map((img, i) => (
            <button
              key={img.alt}
              onClick={() => setActiveIndex(i)}
              className={`mb-4 block w-full break-inside-avoid rounded-md overflow-hidden shadow-card group relative focus-visible:ring-2 focus-visible:ring-clay ${img.tall ? '' : ''}`}
              aria-label={`View larger image: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${img.tall ? 'h-80' : 'h-48'}`}
              />
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-charcoal/95 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button onClick={close} className="absolute top-6 right-6 text-ivory/80 hover:text-ivory" aria-label="Close preview">
            <X className="w-8 h-8" />
          </button>
          <button onClick={prev} className="absolute left-4 md:left-8 text-ivory/70 hover:text-ivory" aria-label="Previous image">
            <ChevronLeft className="w-9 h-9" />
          </button>
          <img
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-md"
          />
          <button onClick={next} className="absolute right-4 md:right-8 text-ivory/70 hover:text-ivory" aria-label="Next image">
            <ChevronRight className="w-9 h-9" />
          </button>
        </div>
      )}
    </section>
  )
}
