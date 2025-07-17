import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Carousel = () => {
  const { data } = useContext(DataContext)
  // console.log(data)
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      // loop={true}
      cssMode={true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
      navigation={true}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {
        data?.slice(0, 7).map((item) => (

          <SwiperSlide className='bg-gradient-to-r from-[#0f0c29] via-[#302b63]  to-[#24243e] h-full'>
            <div className='h-[607px]  flex md:flex-row flex-col px-4 md:gap-x-15 py-21 md:px-40 justify-between items-center'>
              <div className='space-y-6 flex-1 ali'>
                <h3 className='text-red-500 text-sm font-medium'>Power Your World With The Best In ELectronics</h3>
                <h1 className='text-white font-bold uppercase md:text-4xl line-clamp-3'>{item.title}</h1>
                <p className='line-clamp-3 text-gray-400 '>{item.description}</p>
                <Link to={`/product/${item.id}`}>
                  <button className='bg-gradient-to-r font- from-red-500  to-purple-500 text-white px-3 py-1 rounded-md mt-2 cursor-pointer'>Shop Now</button>
                </Link>
              </div>
              <div className='flex-1'>
                <Link to={`/product/${item.id}`}>
                  <img src={item.image}
                    className='rounded-full w-[240px] md:w-[530px] shadow-2xl shadow-red-400 hover:scale-[1.05]  duration-100 cursor-pointer ' />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))
      }

    </Swiper>
  )
}

export default Carousel