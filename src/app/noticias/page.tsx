"use client";
import Script from 'next/script';
import { useEffect } from 'react';

const Rutas = () => {
  useEffect(() => {
    // Verifica si el script de Facebook se ha cargado
    if (window.FB) {
      window.FB.XFBML.parse(); // Reparsea el contenido de Facebook
    }
  }, []);

  return (
    <>
      <div id="fb-root"></div>

      <div>
        <h1>Página de Rutas</h1>
        <p>Aquí puedes encontrar información sobre noticias.</p>
      </div>

      <div
        className="fb-page"
        data-href="https://www.facebook.com/CTUciudaddeloja"
        data-tabs="timeline"
        data-width=""
        data-height=""
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="true"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/CTUciudaddeloja"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/CTUciudaddeloja">
            Consorcio de Transportistas Urbanos Ciudad De Loja
          </a>
        </blockquote>
      </div>

      {/* Añadiendo el script con el componente next/script */}
      <Script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v20.0"
      />
    </>
  );
};

export default Rutas;
