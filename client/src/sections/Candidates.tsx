import { Candidate } from '@/components/Candidate';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import banner from '@/assets/banner-example.png'
import 'swiper/css';
import 'swiper/css/autoplay';

export function Candidates() {
  return (
    <section className="px-6 py-10 relative w-full">
      <div>
        <h1 className="fnt-bungee text-xl bg-black text-yellow-400 w-fit py-1 px-2 -rotate-2">
          Our Candidates
        </h1>
        <p className="mt-2">
          Meet our candidates from different political parties and see their platforms.
        </p>
      </div>

      <div className="mt-8">
        <Swiper
          modules={[Autoplay]}
          allowTouchMove={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={4000}
          loop={true}
          spaceBetween={16}
          breakpoints={{
            0: { slidesPerView: 1 },
            400: { slidesPerView: 1.1 },
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
          }}
          grabCursor={true}
          className="w-full"
        >
          <SwiperSlide>
            <Candidate
              name="Jan Liby Dela Costa"
              description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel nunc dolor. Aenean ultricies, libero et placerat pretium, turpis ligula semper tortor, eget commodo neque arcu gravida lectus."}
              tags={["Independent", "BSIT ITD1"]}
              image={banner}
              position={"President"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Candidate
              name="Marvin Quillo Saik"
              description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel nunc dolor. Aenean ultricies, libero et placerat pretium, turpis ligula semper tortor, eget commodo neque arcu gravida lectus."}
              tags={["Independent", "BSIT 2A"]}
              image={banner}
              position={"Vice President"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Candidate
              name="Rens Acuna"
              description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel nunc dolor. Aenean ultricies, libero et placerat pretium, turpis ligula semper tortor, eget commodo neque arcu gravida lectus."}
              tags={["Independent", "BSIT 1A" ]}
              image={banner}
              position={"Treasurer"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Candidate
              name="Sherwin Jefferson Tajan"
              description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel nunc dolor. Aenean ultricies, libero et placerat pretium, turpis ligula semper tortor, eget commodo neque arcu gravida lectus."}
              tags={["Independent", "BSIT 1A"]}
              image={banner}
              position={"P.I.O."}
            />
          </SwiperSlide>
        </Swiper>
        <div className="mt-6 flex justify-center md:justify-start">
          <button className="bg-[#f7f2ee] border-black border-2 group" style={{ outline: 'none' }}>
            <div
              className="bg-yellow-400 border-black border-2 mb-[4px] mr-[4px] -ml-[6px] -mt-[6px] transition-all duration-150 hover:mb-0 hover:mr-0 hover:-ml-[2px] hover:-mt-[2px]"
            >
              <p className="py-2 px-4 text-black fnt-bungee">All Candidates</p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}