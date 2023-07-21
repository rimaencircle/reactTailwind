import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
gsap.registerPlugin(ScrollTrigger);


function Home() {

  const fadeIn = useRef(null);

  useEffect(() => {
    // Animate the element using GSAP ScrollTrigger
    gsap.to(fadeIn.current, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: fadeIn.current,
        once: false,
      },
    });
  }, []);

  return (
    <>
      <div ref={fadeIn} className='heroHeading mb-60 pt-100 fadeIn'>
        <div className='container-small'>
        <h1 className='font-bold capitalize text-5xl text-slate-600 dark:text-white mb-20'> <span className='text-primary'>This is Micca.</span>A blog that covers productivity, tips, inspiration, and strategies for massive profits.</h1>
        </div>
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          0: {
            slidesPerView: 1.4,
            centeredSlides:true,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            centeredSlides:true,
          },
          991: {
            slidesPerView: 3,
          },
          1199: {
            slidesPerView: 5,
          },
       
        }}
      >
        <SwiperSlide>
          <div className='heroSwiper_image'>
          <img src="https://plus.unsplash.com/premium_photo-1674939148438-bcc5bb0dfdeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="slider" className='heroSwiper_image__img'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='heroSwiper_image'>
        <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=745&q=80" alt="slider" className='heroSwiper_image__img' />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='heroSwiper_image'>
        <img src="https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=684&q=80" alt="slider" className='heroSwiper_image__img'/>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='heroSwiper_image'>
        <img src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=708&q=80" alt="slider" className='heroSwiper_image__img'/>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='heroSwiper_image'>
        <img src="https://plus.unsplash.com/premium_photo-1674939148438-bcc5bb0dfdeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="slider" className='heroSwiper_image__img'/>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='heroSwiper_image'>
        <img src="https://images.unsplash.com/photo-1603739592144-942b49d152d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" alt="slider" className='heroSwiper_image__img'/>
        </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Home;