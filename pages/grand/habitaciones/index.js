
import React from 'react'
import Link from 'next/link' 
import Header from '@/components/Header'
import BookingForm from '@/components/BookingForm'
import HeroSliderCompact from '@/components/ImageHeaderHab'
import IntroHab from '@/components/IntroHab'
import Gallery from '@/components/Gallery'
import MatriSup from '@/components/MatriSup'

const Habitaciones = () => {
  return (
    <main className="mx-auto">
      {/* Título y descripción del hotel */}
      <Header />

      {/* Componentes de la página */}
      <HeroSliderCompact />

      <div className="relative z-10 -mt-[60px] w-full max-w-6xl mx-auto px-4">
        <BookingForm />
      </div>

      <IntroHab />
      <MatriSup />
      <Gallery  />

      

      {/* Enlace a la versión en inglés */}
      <div className="text-center my-4">
        <Link href="/en/hotel-wyndham-grand-costa-del-sol-lima-airport">
          🇬🇧 English Version.
        </Link>
      </div>
    </main>
  )
}

export default Habitaciones
