// components/FacebookVideo.js
import { useEffect } from 'react';

const FacebookVideo = ({ videoUrl }) => {
  useEffect(() => {
    // Cargar el SDK de Facebook
    const script = document.createElement('script');
    script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    
    return () => {
      // Limpiar el script al desmontar
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h1></h1>
      <div
        className="fb-video"
        data-href={videoUrl}
        data-width="500"
        data-allowfullscreen="true"
      ></div>
    </div>
  );
};

export default FacebookVideo;
