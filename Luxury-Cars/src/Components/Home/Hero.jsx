import "../../style/style.css";
import Maybach from "../../Images/Maybach.mp4";
import ReactPlayer from "react-player";
import AboutHome from "./howItWorks";
import GallerySes from "./gallerySes";
import Find from "./find";

function Main() {
  return (
    <>
      <div className="MainCont w-full px-5">
        <div className="flex h-screen">
          <div className="flex items-center text-center w-full flex-row max-sm:flex-wrap mt-48">
            <div className="md">
              <h2 className=" font-semibold text-gray-200 md:text-4xl">
                Welcome To{" "}
                <span className="text-cyan-300 font-bold text-5xl max-sm:text-2xl">
                  Luxury Cars
                </span>
              </h2>
              <p className="mt-2 text-sm text-gray-400 md:text-base">
                Exploring the unexplored. The art piece combines the
                characteristic design features of the iconic vehicle with the
                equally style-defining design language of the Mercedes-Benz
                puffer jacket, creating a beautiful contrast.
              </p>
              <div className="flex justify-center mt-6 max-lg:mb-10">
                <a
                  className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800"
                  href="#"
                >
                  Get Started
                </a>
                <a
                  className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400"
                  href="#"
                >
                  About-Us
                </a>
              </div>
            </div>
            {/* //// */}
            <div
              className="videoCon flex flex-col justify-center"
              style={{ clipPath: "polygon(5% 0, 100% 0%, 100% 100%, 0 100%)" }}
            >
              <ReactPlayer
                url={Maybach}
                width="100%"
                height="100%"
                pip={true}
                controls={true}
                loop={true}
                playing={true}
                playsinline={true}
                config
                className="video"
              />
            </div>
          </div>
        </div>
      </div>
      <Find />
      <GallerySes />
      <AboutHome />
    </>
  );
}

export default Main;
