import React from 'react'

const IntroHab = () => {
  return (
    <section className="py-40 px-4"> {/* <-- aquí agregamos espacio arriba */}
      <div className="max-w-3xl mx-auto text-center">
        <h4 className="text-3xl Gotham-Light text-black-grand mb-6">
          OPCIONES DE SUITES
        </h4>

        <div className="h-1 w-16 bg-[#e8ddd2] mx-auto mb-6" />

        <p className="text-gray-700 leading-relaxed text-parrafos">
          Disponibles en <u>Deluxe</u>, <u>Premium Plus</u> y <u>Lujo</u>, las suites están situadas en tres zonas distintas del complejo, cada una con sus propias piscinas y terrazas.
          <br /><br />
          ¿Busca hoteles en la Costa del Sol? ¿O prefiere un alojamiento independiente en la Costa del Sol? No busque más: Wyndham Grand. Ubicadas en una ladera junto al Mediterráneo, nuestras suites ofrecen lo mejor de ambas opciones.
          <br /><br />
          Tanto si desea aislamiento y vistas panorámicas al mar, un espacio contemporáneo sólo para adultos o el ambiente relajado de un complejo familiar, Wyndham Grand cuenta con el espacio ideal para usted.
        </p>
      </div>
    </section>
  )
}

export default IntroHab
