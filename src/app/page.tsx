import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import Departamentos from '../components/departamentos';
import { Faq } from "@/components/Faq";


import { benefitOne, benefitTwo } from "@/components/data";


export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Movilizate en Loja con el "
        title="SISTEMA DE PAGO ELECTRONICO"
      >
        Mediante tu tarjeta SITU puedes acceder a todas nuestras unidades así como a las paradas 
        del corredor central. Visita el cantón Loja y enamorate de nuestra ciudad.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

  

      <SectionTitle
        preTitle="Trabajamos por mejorar"
        title="Conoce a nuestro personal"
      >
        Departamentos y directiva del consorcio de transportistas urbanos ciudad de Loja.
      </SectionTitle>


      <Departamentos />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq />
      
    </Container>
  );
}
