// src/app/page.tsx
import PuntosRecarga from '@/components/PuntosRecarga';

const Page = () => {
  return (
    <div>
      {/* Suponiendo que tienes un Navbar aquí */}
   

      {/* Añadiendo margen superior al componente PuntosRecarga */}
      <div className="mt-8 "> {/* Ajusta mt-8 según necesites */}
        <PuntosRecarga />
      </div>
    </div>
  );
};

export default Page;
