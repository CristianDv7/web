// ResponsiveContainer.tsx
"use client";

import React from "react";
import FacebookVideo from './FacebookVideo';
import FacebookPageFeed from './facebookpage';

const embedHtml = `<iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/CTUciudaddeloja/videos/1066522584449668" width="100%" height="300" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>`;
const facebookPageUrl = "https://www.facebook.com/CTUciudaddeloja";

const ResponsiveContainer = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Columna 1: FacebookVideo */}
                <div className="flex justify-center items-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md w-full sm:w-full"> {/* Cambiado a sm:w-full */}
                    <FacebookVideo embedHtml={embedHtml} />
                </div>

                {/* Columna 2: FacebookPageFeed */}
                <div className="flex justify-center items-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md w-full sm:w-full overflow-hidden"> {/* Cambiado a sm:w-full */}
                    <FacebookPageFeed pageUrl={facebookPageUrl} />
                </div>
            </div>
        </div>
    );
};

export default ResponsiveContainer;
