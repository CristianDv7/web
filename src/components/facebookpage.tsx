// components/FacebookPageFeed.tsx
import React, { useEffect } from 'react';

type FacebookPageFeedProps = {
  pageUrl: string;
};

const FacebookPageFeed: React.FC<FacebookPageFeedProps> = ({ pageUrl }) => {
  useEffect(() => {
    // Cargar el SDK de Facebook
    if (window.FB) {
      window.FB.XFBML.parse();
    } else {
      window.fbAsyncInit = function () {
        window.FB.init({
          xfbml: true,
          version: 'v13.0',
        });
      };

      (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s) as HTMLScriptElement; // Asegúrate de que js es un HTMLScriptElement
        js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk.js';
        fjs.parentNode?.insertBefore(js, fjs);
      })(document, 'script', 'facebook-jssdk');
    }
  }, []);

  return (
    <div className="facebook-page-feed">
      <div id="fb-root"></div>
      <div
        className="fb-page"
        data-href={pageUrl}
        data-tabs="timeline"
        data-width="500"
        data-height="700"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      ></div>
    </div>
  );
};

export default FacebookPageFeed;
