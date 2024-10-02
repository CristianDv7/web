import {
  FaceSmileIcon,
  IdentificationIcon ,
  UserGroupIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  VideoCameraIcon,
  MapIcon,
  SunIcon,
  
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/tarjetasitu.png";
import benefitTwoImg from "../../public/img/portada.jpg";

const benefitOne = {
  title: "BENEFICIOS DE LA TARJETA SITU",
  desc:"",
  image: benefitOneImg,
  bullets: [
    {
      title: "Pasaje electrónico",
      desc: "Evita llevar monedas, ingresa al sistema de transporte urbano unicamente con tu tarjeta electrónica.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Seguridad",
      desc: "Mediante el pago electrónico tus hijos familiares y amigos viajan más seguros.",
      icon: <IdentificationIcon  />,
    },
    {
      title: "Respaldo",
      desc: "Registra tu tarjeta SITU para mantener seguro tu saldo electrónico.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "CONOCE NUESTRO SERVICIO DE TRANSPORTE",
  desc: "Como Lojanos queremos brindarte la mejor calidad en servicio de transporte a un precio accecible con un viaje cómodo y seguro en nuestras unidades.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "13 RUTAS EN TODA LA CIUDAD",
      desc: "Conectamos a toda la ciudad, casco central y sectores rurales. Movilizate en Loja con el transporte urbano.",
      icon: <MapIcon />,
    },
    {
      title: "FLOTA DE 238 BUSES",
      desc: "Plan de renovación de buses anual para ofrecer unidades con mayor tecnología, menor contaminación y mayor comodidad.",
      icon: <UserGroupIcon />,
    },
    {
      title: "Sistema de monitoreo",
      desc: "Buses y paradas del corredor central cuenta con cámaras de seguridad y seguimiento por GPS. Viaja seguro con nosotros. ",
      icon: <VideoCameraIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
