"use client";
import Image from "next/image";
import { Container } from "@/components/Container";
import logoconsorcio from "../../public/img/logoconsorcio.png";
import FacebookVideo from '../components/FacebookVideo';
import urbasur from "../../public/img/urbasur.jpg";
import mayo24 from "../../public/img/24mayo.jpg";
import cuxibamba from "../../public/img/cuxibamba.png";
import Facebookpage from '../components/facebookpage';

const videoUrl = 'https://www.facebook.com/CTUciudaddeloja/videos/1066522584449668';
const pageUrl = 'https://www.facebook.com/CTUciudaddeloja';
import ImageSlider from './ImageSlider';

export const Hero = () => {
  return (
    <>
      {/* Contenedor del ImageSlider */}
      <div className="w-full max-w-[1900px] mx-auto min-h-[200px] md:min-h-[400px] lg:min-h-[430px] overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-500 dark:border-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <ImageSlider />
      </div>

      <Container className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="flex items-stretch w-full lg:w-1/2 mb-4"> {/* Cambia items-center por items-stretch */}
          <div className="flex flex-col justify-between max-w-2xl mb-8 bg-gray-100 dark:bg-gray-800 border border-gray-500 dark:border-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 h-full"> {/* Agrega h-full para ocupar toda la altura */}
            <p className="py-5 text-xl leading-normal text-gray-700 lg:text-xl xl:text-2xl dark:text-gray-300">
              En Loja nos movilizamos con la tarjeta SITU
            </p>
            <div>
              <FacebookVideo videoUrl={videoUrl} />
            </div>
            <div className="flex flex-col items-start space-y-2 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://www.facebook.com/CTUciudaddeloja"
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md"
              >
                <div>
                  <img
                    src="/img/facebook.svg"
                    alt="Descripción de la imagen"
                    width="54"
                    height="54"
                    className="w-5 h-5"
                  />
                </div>
                <span>Síguenos</span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.kradac.situ&hl=es_EC"
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
              >
                <div>
                  <img
                    src="/img/situ.png"
                    alt="Descripción de la imagen"
                    width="54"
                    height="54"
                    className="w-10 h-10"
                  />
                </div>
                <span> APP SITU</span>
              </a>
            </div>
            <div className="flex flex-col items-start space-y-2 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://www.facebook.com/CTUciudaddeloja"
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md"
              >
                <div>
                  <img
                    src="/img/facebook.svg"
                    alt="Descripción de la imagen"
                    width="54"
                    height="54"
                    className="w-5 h-5"
                  />
                </div>
                <span>TikTok</span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.kradac.situ&hl=es_EC"
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
              >
                <div>
                  <img
                    src="/img/situ.png"
                    alt="Descripción de la imagen"
                    width="54"
                    height="54"
                    className="w-10 h-10"
                  />
                </div>
                <span> Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-stretch justify-center w-full lg:w-1/2 mb-4">
          <div className="flex flex-col justify-between mb-8 bg-gray-100 dark:bg-gray-800 border border-gray-500 dark:border-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 h-full"> {/* Agrega h-full para ocupar toda la altura */}
            <div>
              <h1></h1>
              <Facebookpage pageUrl={pageUrl} />
            </div>
          </div>
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
