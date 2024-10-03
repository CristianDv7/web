"use client";
import Image from "next/image";
import { Container } from "@/components/Container";
import logoconsorcio from "../../public/img/logoconsorcio.png";
import ResponsiveContainer from './ResponsiveContainer';
import urbasur from "../../public/img/urbasur.jpg";
import mayo24 from "../../public/img/24mayo.jpg";
import cuxibamba from "../../public/img/cuxibamba.png";
import urbaexpress from "../../public/img/urbaexpress.png";
import ImageSlider from './ImageSlider';
import { SectionTitle } from "@/components/SectionTitle";


export const Hero = () => {
  return (
    <>
      {/* Contenedor del ImageSlider */}
      <div className="w-full max-w-[1900px] mx-auto min-h-[80px] md:min-h-[400px] lg:min-h-[430px] 
                overflow-hidden border-4 
                bg-gradient-to-r from-blue-900 to-gray-300 
                dark:from-green-900 dark:to-gray-300 
                
                p-1 rounded-lg shadow-2xl transition-transform transform">
        <ImageSlider />
      </div>

      <Container>
        <div className="flex justify-center "> {/* Asegúrate de centrar el contenedor */}
          <ResponsiveContainer />
        </div>
      </Container>

      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mt-6 mb-4">
            Empresas que conforman el consorcio ciudad de Loja
          </div>
          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around mb-8 bg-gray-100 dark:bg-gray-800 border border-gray-500 dark:border-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="overflow-hidden border-4 
                bg-gradient-to-r from-blue-900 to-gray-300 
                dark:from-green-900 dark:to-gray-300 
                border-blue-900 dark:border-green-900 
                p-1 rounded-lg shadow-2xl transition-transform transform">
              <F_urbasur />
            </div>
            <div className="overflow-hidden border-4 
                bg-gradient-to-r from-blue-900 to-gray-300 
                dark:from-green-900 dark:to-gray-300 
                border-blue-900 dark:border-green-900 
                p-1 rounded-lg shadow-2xl transition-transform transform">
              <F_mayo24 />
            </div>
            <div className="overflow-hidden border-4 
                bg-gradient-to-r from-blue-900 to-gray-300 
                dark:from-green-900 dark:to-gray-300 
                border-blue-900 dark:border-green-900 
                p-1 rounded-lg shadow-2xl transition-transform transform">
              <F_cuxibamba />
            </div>
            <div className="overflow-hidden border-4 
                bg-gradient-to-r from-blue-900 to-gray-300 
                dark:from-green-900 dark:to-gray-300 
                border-blue-900 dark:border-green-900 
                p-1 rounded-lg shadow-2xl transition-transform transform">
              <F_urbaexpress />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

function F_urbasur() {
  return (
    <div className="">
      <Image
        src={urbasur}
        width="200"
        height="200"
        className={"object-cover"}
        alt="Hero Illustration"
        loading="eager"
        placeholder="blur"
      />
    </div>
  );
}

function F_mayo24() {
  return (
    <div className="">
      <Image
        src={mayo24}
        width="200"
        height="200"
        className={"object-cover"}
        alt="Hero Illustration"
        loading="eager"
        placeholder="blur"
      />
    </div>
  );
}

function F_cuxibamba() {
  return (
    <div className="">
      <Image
        src={cuxibamba}
        width="200"
        height="200"
        className={"object-cover"}
        alt="Hero Illustration"
        loading="eager"
        placeholder="blur"
      />
    </div>
  );
}

function F_urbaexpress() {
  return (
    <div className="">
      <Image
        src={urbaexpress}
        width="200"
        height="200"
        className={"object-cover"}
        alt="Hero Illustration"
        loading="eager"
        placeholder="blur"
      />
    </div>
  );
}