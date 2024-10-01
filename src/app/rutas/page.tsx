// src/pages/rutas/page.tsx
import Image from "next/image";

interface Ruta {
  src: string;
  alt: string;
}

const Rutas = () => {
  const rutas: Ruta[] = [
    { src: "/rutas/l1.jpg", alt: "Ruta 1" },
    { src: "/rutas/l2.jpg", alt: "Ruta 2" },
    { src: "/rutas/l3.jpg", alt: "Ruta 3" },
    { src: "/rutas/l4.jpg", alt: "Ruta 4" },
    { src: "/rutas/l5.jpg", alt: "Ruta 5" },
    { src: "/rutas/l6.jpg", alt: "Ruta 6" },
    { src: "/rutas/l7.jpg", alt: "Ruta 7" },
    { src: "/rutas/l8.jpg", alt: "Ruta 8" },
    { src: "/rutas/l9.jpg", alt: "Ruta 9" },
    { src: "/rutas/l10.jpg", alt: "Ruta 10" },
    { src: "/rutas/l11.jpg", alt: "Ruta 11" },
    { src: "/rutas/l12.jpg", alt: "Ruta 12" },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Nuestros recorridos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {rutas.map((ruta, index) => (
          <div key={index} className="relative h-64 overflow-hidden rounded-lg shadow-lg">
            <Image
              src={ruta.src}
              alt={ruta.alt}
              layout="fill"
              objectFit="contain"
              className="absolute top-0 left-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rutas;
