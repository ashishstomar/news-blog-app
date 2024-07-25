import { useEffect, useState } from "react";
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { POST_API } from "../utils/constant";
import { Link } from "react-router-dom";

const Carousal = () => {
  const [trendData, setTrendData] = useState([]);

  useEffect(() => {
    fetchTrendData();
  }, []);

  const fetchTrendData = async () => {
    const data = await fetch(
      "https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=" + POST_API
    );
    const json = await data.json();
    setTrendData(json.articles);
  };

  return (
    <Swiper
      className="mt-4 rounded-2xl h-96 w-11/12 text-center"
      modules={[Navigation, Scrollbar, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {trendData.map((slide) => (
        <SwiperSlide key={slide.url} className="relative ">
          <Link to={`/article/${"carousal"}/${encodeURIComponent(slide.url)}`}>
            <img
              src={slide.urlToImage}
              className="h-full w-full object-cover"
            />
          </Link>
          <div className=" absolute py-2 px-3  text-xl font-extrabold shadow-2xl text-white bottom-10 left-4">
            <h1>{slide.title}</h1>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousal;
