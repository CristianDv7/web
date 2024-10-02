"use client";
import Image from "next/image";
import { Container } from "@/components/Container";
import logoconsorcio from "../../public/img/logoconsorcio.png";
import ResponsiveContainer from './ResponsiveContainer';
import urbasur from "../../public/img/urbasur.jpg";
import mayo24 from "../../public/img/24mayo.jpg";
import cuxibamba from "../../public/img/cuxibamba.png";
import ImageSlider from './ImageSlider';

const videoUrl = 'https://www.facebook.com/CTUciudaddeloja/videos/1066522584449668';
const pageUrl = 'https://www.facebook.com/CTUciudaddeloja';

export const Hero = () => {
  return (
    <>
      {/* Contenedor del ImageSlider */}
      <div className="w-full max-w-[1900px] mx-auto min-h-[200px] md:min-h-[400px] lg:min-h-[430px] overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-500 dark:border-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <ImageSlider />
      </div>

      <Container>
        <div className="flex justify-center"> {/* Asegúrate de centrar el contenedor */}
          <ResponsiveContainer />
        </div>
      </Container>

      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Empresas que conforman el consorcio ciudad de Loja
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around mb-8 bg-gray-100 dark:bg-gray-800 border border-gray-500 dark:border-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <AmazonLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <MicrosoftLogo />
            </div>
            <div className="pt-1 text-gray-400 dark:text-gray-400">
              <NetflixLogo />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <NetflixLogo />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

function AmazonLogo() {
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

function MicrosoftLogo() {
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

function NetflixLogo() {
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
