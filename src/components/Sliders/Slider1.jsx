import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { carouselData } from "../../data/carouselData";
import { Link } from "react-router";

export default function Slider1() {
  return (
    <section className="mx-5 py-5 md:container md:mx-auto">
      <Swiper className="mySwiper w-full md:h-[496px]">
        {carouselData.map((data, i) => (
          <SwiperSlide key={i}>
            <Link to={data.url}>
              <img
                src={data.img}
                alt=""
                className="h-full w-full object-cover"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
