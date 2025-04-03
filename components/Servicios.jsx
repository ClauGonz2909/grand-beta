import React from "react";
import { FaCoffee, FaDog, FaTv, FaWifi, FaUtensils, FaSpa, FaSwimmingPool, FaDumbbell, FaWheelchair, FaCar, FaGlassCheers, FaConciergeBell, FaTemperatureHigh, FaShower, FaFan, FaTshirt, FaKey, FaChair, FaClock, FaHome } from "react-icons/fa";

const servicios = [
  { icon: <FaUtensils />, text: "Desayuno Incluido" },
  { icon: <FaUtensils />, text: "Restaurante Páprika" },
  { icon: <FaUtensils />, text: "Paraka Barrio Gourmet" },
  { icon: <FaSpa />, text: "Spa" },
  { icon: <FaGlassCheers />, text: "Walak Bar" },
  { icon: <FaDog />, text: "Dog Friendly (sin costo)" },
  { icon: <FaConciergeBell />, text: "Lavandería" },
  { icon: <FaSwimmingPool />, text: "Piscina temperada" },
  { icon: <FaCoffee />, text: "Cafetera" },
  { icon: <FaTv />, text: "TV Cable" },
  { icon: <FaDumbbell />, text: "Gimnasio" },
  { icon: <FaKey />, text: "Caja fuerte" },
  { icon: <FaWifi />, text: "Wifi gratuito" },
  { icon: <FaHome />, text: "Self check in" },
  { icon: <FaChair />, text: "Premium Amenities" },
  { icon: <FaGlassCheers />, text: "Coctel de bienvenida" },
  { icon: <FaWheelchair />, text: "Silla de ruedas" },
  { icon: <FaTshirt />, text: "Plancha y planchador" },
  { icon: <FaConciergeBell />, text: "Sala de eventos" },
  { icon: <FaCar />, text: "Estacionamiento Incluido" },
  { icon: <FaFan />, text: "Aire acondicionado" },
  { icon: <FaShower />, text: "Bata y pantuflas" },
  { icon: <FaCoffee />, text: "Minibar" },
  { icon: <FaCoffee />, text: "Hervidora" },
  { icon: <FaClock />, text: "Servicio a la habitación" },
];

const Servicios = () => {
  return (
    <section className="SectionDiv">
      <div className="ContainerFlex flex-col items-center text-center bg-white/70 p-4 rounded-lg shadow-md" >
        <h4 className="TitleSection mb-6">INCLUIDO CON CADA ESTANCIA</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl">
          {servicios.map((servicio, index) => (
            <div key={index} className="flex items-center gap-2 text-parrafos text-sm">
              <span className="text-primary-oceanic text-lg">{servicio.icon}</span>
              <span>{servicio.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
