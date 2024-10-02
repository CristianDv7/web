import Script from 'next/script';

const FacebookPageFeedDesktop = () => {
  return (
    <>
      <div id="fb-root"></div>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/CTUciudaddeloja"
        data-tabs="timeline"
        data-width="500" // Ancho para pantallas grandes
        data-height="400"
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

      <Script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v20.0"
      />
    </>
  );
};

export default FacebookPageFeedDesktop;
