import React from "react";
import Image from "next/image";

const Ofertas = () => {
  return (
    <section className="SectionDiv">
      <div className="ContainerFlex">
        {/* Texto vertical "Ofertas" más angosto */}
        <div className="container flex justify-center md:justify-end items-center flex-[1]">
          <h2 className="TitleSection text-8xl tracking-widest -rotate-90 ">
            Ofertas
          </h2>
        </div>

        {/* Card de oferta más ancha */}
        <div className="container flex-[3] bg-white rounded-lg shadow-md overflow-hidden">
          {/* Imagen */}
          <div className="relative w-full h-72">
            <Image
              src="https://picsum.photos/id/1050/600/300"
              alt="Oferta"
              fill
              className="object-cover"
            />
          </div>

          {/* Contenido */}
          <div className="p-6 text-black-grand">
            <button className="ButtonSolid text-xs mb-4 inline-block">
              <a href="#">TARIFA DE APERTURA</a>
            </button>
            <p className="text-parrafos text-sm">
              Reserva tus vacaciones para el próximo año con anticipación y
              aprovecha hasta un 30% de descuento + 10% adicional al unirte a
              nuestro programa Grupo Cancún Rewards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ofertas;
