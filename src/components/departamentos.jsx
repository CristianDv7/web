// departamentos.jsx
import Image from 'next/image';

const departamentos = [
  {
    title: 'Credencialización',
    description: 'Descripción breve del departamento 1.',
    image: '/img/departamento1.jpg', // Cambiar a /img/
  },
  {
    title: 'Taller',
    description: 'Emisión de facturas y temas contables.',
    image: '/img/contabilidad.png',
  },
  {
    title: 'Contabilidad',
    description: 'Descripción breve del departamento 3.',
    image: '/img/contabilidad.png',
  },
  {
    title: 'Secretaria',
    description: 'Descripción breve del departamento 4.',
    image: '/img/secretaria.png',
  },
  {
    title: 'Desarrollo',
    description: 'Descripción breve del departamento 5.',
    image: '/img/departamento5.jpg',
  },
  {
    title: 'Monitoreo',
    description: 'Descripción breve del departamento 6.',
    image: '/img/monitoreo.png',
  },
  {
    title: 'SIR',
    description: 'Sistema interno de reacuado.',
    image: '/img/departamento7.jpg',
  },
  {
    title: 'Directivos 2024 ',
    description: 'Representantes de las 4 empresas de transporte.',
    image: '/img/directiva.jpg',
  },
];

const Departamentos = () => {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
      {departamentos.map((departamento, index) => (
        <div key={index} className="border p-4 shadow-lg rounded-lg">
          <div className="w-full h-[200px] relative ">
            <Image
              src={departamento.image}
              alt={departamento.title}
              layout="fill" // Usar layout fill para ocupar todo el div padre
              objectFit="cover" // Ajustar la imagen sin distorsionar
              className="rounded-lg"
            />
          </div>
          <h2 className="mt-4 text-xl font-bold">{departamento.title}</h2>
          <p className="mt-2 text-gray-600">{departamento.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Departamentos;
