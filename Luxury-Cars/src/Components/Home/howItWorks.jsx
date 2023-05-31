import { Badge, IconButton } from "@mui/material";
import "../../style/style.css";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid #fff2cc`, // Updated badge color
    padding: "0 4px",
    backgroundColor: "#8b4403",
  },
  "&:hover": {
    color: "#67e8f9", // Set the color when hovering over the IconButton
  },
}));

function AboutHome() {
  return (
    <section className="max-lg:mt-40 max-md:mt-0">
      <h1 className="text-black text-center text-5xl mt-10 font-bold font-serif max-sm:text-3xl">
        How it woks
      </h1>
      <p className="w-1/2 text-center m-auto pt-5 ">
        Renting a luxury car has never been easier. Our streamlined process
        makes it simple for you to book and confirm your vehicle of choice
        online
      </p>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 max-sm:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative z-10 lg:pb-16 lg:pt-32">
            <div
              id="default-carousel"
              className="relative w-full"
              data-carousel="slide"
            >
              {/* Carousel wrapper */}
              <div className="relative h-64  overflow-hidden md:h-96 rounded-2xl">
                {/* Item 1 */}
                <div
                  className="hidden duration-1000 ease-in-out"
                  data-carousel-item=""
                >
                  <img
                    src="https://cdn.discordapp.com/attachments/1106603223458000987/1106603296208211989/green-jeep-pickup-truck-drives-through-desert-landscape.jpg"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                {/* Item 2 */}
                <div
                  className="hidden duration-1000 ease-in-out"
                  data-carousel-item=""
                >
                  <img
                    src="https://cdn.discordapp.com/attachments/1106603223458000987/1106603296728301608/black-jeep-is-parked-desert-with-other-cars.jpg"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                {/* Item 3 */}
                <div
                  className="hidden duration-1000 ease-in-out"
                  data-carousel-item=""
                >
                  <img
                    src="https://cdn.discordapp.com/attachments/1106603223458000987/1106603297370021991/mini-coupe-high-speed-drive-road-with-front-lights.jpg"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                {/* Item 4 */}
                <div
                  className="hidden duration-1000 ease-in-out"
                  data-carousel-item=""
                >
                  <img
                    src="https://cdn.discordapp.com/attachments/1106603223458000987/1106603298720600064/black-sport-car-highway-drive-sunset.jpg"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                {/* Item 5 */}
                <div
                  className="hidden duration-1000 ease-in-out"
                  data-carousel-item=""
                >
                  <img
                    src="https://cdn.discordapp.com/attachments/1106603223458000987/1106606949727998073/silver-metallic-color-sport-sedan-road.jpg"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
              </div>
              {/* Slider indicators */}
              <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2 max-sm:bottom-10">
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="true"
                  aria-label="Slide 1"
                  data-carousel-slide-to={0}
                />
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 2"
                  data-carousel-slide-to={1}
                />
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 3"
                  data-carousel-slide-to={2}
                />
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 4"
                  data-carousel-slide-to={3}
                />
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 5"
                  data-carousel-slide-to={4}
                />
              </div>
              {/* Slider controls */}
              <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev=""
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next=""
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
          </div>
          <div className="AboutSec1 relative flex items-center bg-fixed">
            <span
              className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16"
              style={{ backgroundColor: "#b3b3b3" }}
            />
            <div className="p-8 sm:p-16 lg:py-24 lg:px-15 flex flex-col">
              <div className="bg-white p-8 rounded-3xl flex flex-row">
                <div className="bg-gray-500 me-3 hover:bg-gray-200 rounded-2xl flex items-center  ">
                  <IconButton
                    aria-label="cart"
                    style={{ fontSize: "2rem", width: "4rem", height: "4rem" }}
                  >
                    <StyledBadge badgeContent={0} color="primary">
                      <SearchIcon style={{ fontSize: "2rem" }} />
                    </StyledBadge>
                  </IconButton>
                </div>
                <div>
                  <h1 className="text-black text-2xl font-bold font-serif">
                    Browse and select
                  </h1>
                  <p>
                    Choose from our wide range of premium cars, select the
                    pickup and return dates and locations that suit you best.
                  </p>
                </div>
              </div>
              <div className="my-10 bg-white p-8 rounded-3xl flex flex-row">
                <div className="bg-gray-500 me-3 hover:bg-gray-200 rounded-2xl flex items-center  ">
                  <IconButton
                    aria-label="cart"
                    style={{ fontSize: "2rem", width: "4rem", height: "4rem" }}
                  >
                    <StyledBadge badgeContent={0} color="primary">
                      <EventAvailableIcon style={{ fontSize: "2rem" }} />
                    </StyledBadge>
                  </IconButton>
                </div>
                <div>
                  <h1 className="ext-black text-2xl font-bold font-serif">
                    Book and confirm
                  </h1>
                  <p>
                    Book your desired car with just a few clicks and receive an
                    instant confirmation via email or SMS.
                  </p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-3xl flex flex-row">
                <div className="bg-gray-500 me-3 hover:bg-gray-200 rounded-2xl flex items-center  ">
                  <IconButton
                    aria-label="cart"
                    style={{ fontSize: "2rem", width: "4rem", height: "4rem" }}
                  >
                    <StyledBadge badgeContent={0} color="primary">
                      <SentimentVerySatisfiedIcon
                        style={{ fontSize: "2rem" }}
                      />
                    </StyledBadge>
                  </IconButton>
                </div>
                <div>
                  <h1 className="text-black text-2xl font-bold font-serif">
                    Book and confirm
                  </h1>
                  <p>
                    Book your desired car with just a few clicks and receive an
                    instant confirmation via email or SMS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutHome;
