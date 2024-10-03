// app/page.tsx

export default function HomePage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Empresa de Transporte Urbano de Buses</h1>
      
      {/* Sección de Misión */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-2">Misión</h2>
        <p className="text-lg leading-relaxed">
          Nuestra misión es proporcionar un servicio de transporte urbano eficiente, seguro y accesible
          para todos los ciudadanos, contribuyendo al bienestar de la comunidad y al desarrollo sostenible
          de la ciudad.
        </p>
      </section>
      
      {/* Sección de Visión */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-2">Visión</h2>
        <p className="text-lg leading-relaxed">
          Ser reconocidos como la empresa líder en transporte urbano, ofreciendo un servicio de calidad que 
          promueva la movilidad urbana inteligente, con un compromiso fuerte hacia la sostenibilidad ambiental 
          y la innovación.
        </p>
      </section>
    </div>
  );
}
