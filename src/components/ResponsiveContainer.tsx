import FacebookVideo from './FacebookVideo';
import FacebookPageFeedMobile from './FacebookPageFeedMobile';
import FacebookPageFeedDesktop from './FacebookPageFeedDesktop';

const embedHtml = `<iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/CTUciudaddeloja/videos/1066522584449668" width="100%" height="300" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>`;

const ResponsiveContainer = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Columna 1: FacebookVideo */}
                <div className="flex justify-center items-center border-4 
                    bg-gradient-to-r from-blue-900 to-gray-300 
                    dark:from-green-900 dark:to-gray-800 
                    
                    p-1 rounded-lg shadow-2xl transition-transform transform w-full">
                    <FacebookVideo embedHtml={embedHtml} />
                </div>

                {/* Columna 2: FacebookPageFeed */}
                <div className="flex justify-center w-full  ">
                    <div className="hidden md:block bg-gradient-to-r from-blue-900 to-gray-300 
                    dark:from-green-900 dark:to-gray-800 
                   
                    p-1 rounded-lg shadow-2xl border-4 ">
                        <FacebookPageFeedDesktop />
                    </div>
                    <div className="block md:hidden bg-gradient-to-r from-blue-900 to-gray-300 
                    dark:from-green-900 dark:to-gray-800 
                    
                    p-1 rounded-lg shadow-2xl border-4">
                        <FacebookPageFeedMobile />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveContainer;
