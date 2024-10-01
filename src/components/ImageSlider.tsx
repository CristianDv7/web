import { useEffect, useState } from 'react';
import Image from 'next/image';
import banner1 from '../../public/img/banner1.png';
import banner2 from '../../public/img/banner2.png';
import banner3 from '../../public/img/banner3.png';

const images = [banner1, banner2,banner3];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Cambia la imagen cada 7 segundos

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar
  }, []);

  return (
    <div className="w-full overflow-hidden relative"> {/* Ocupar todo el ancho */}
      <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <div className="w-full flex-shrink-0" key={index}>
            <Image
              src={src}
              alt={`Imagen ${index + 1}`}
              layout="responsive"
              width={1000}
              height={300}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
