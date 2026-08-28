import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import BookingForm from '../components/BookingForm.jsx'
import RoomCard from '../components/RoomCard.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import Amenities from '../components/Amenities.jsx'
import Dining from '../components/Dining.jsx'
import Gallery from '../components/Gallery.jsx'
import Testimonials from '../components/Testimonials.jsx'
import LocationSection from '../components/LocationSection.jsx'
import { rooms } from '../data/rooms.js'

export default function Home() {
  useEffect(() => {
    document.title = 'Fahari Gardens | Luxury Garden Resort in Utawala, Nairobi'
  }, [])

  return (
    <>
      <Hero />

      <div id="booking-search">
        <BookingForm />
      </div>

      <section className="section-pad pt-16">
        <div className="container-xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div className="max-w-xl">
              <p className="eyebrow mb-3">Featured Rooms</p>
              <h2 className="font-display text-4xl md:text-5xl text-forest-dark leading-tight">
                Rooms built around how you actually rest
              </h2>
            </div>
            <Link to="/rooms" className="text-sm font-semibold text-forest-dark border-b-2 border-clay pb-1 w-fit">
              View All Rooms &amp; Suites →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Amenities />
      <Dining />
      <Gallery />
      <Testimonials />
      <LocationSection />
    </>
  )
}
