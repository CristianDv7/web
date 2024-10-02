// FacebookVideo.tsx
import React from 'react';

interface FacebookVideoProps {
  embedHtml: string;
}

const FacebookVideo: React.FC<FacebookVideoProps> = ({ embedHtml }) => {
  return (
    <div
      className="w-full overflow-hidden" // Asegúrate de que el contenedor no tenga margen o relleno adicional
      style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }} // 16:9 aspect ratio
    >
      <iframe
        src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/CTUciudaddeloja/videos/1066522584449668"
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0, border: 'none' }} // Asegura que el iframe ocupe todo el contenedor
        scrolling="no"
        allowFullScreen // Omite allowTransparency
      />
    </div>
  );
};

export default FacebookVideo;
