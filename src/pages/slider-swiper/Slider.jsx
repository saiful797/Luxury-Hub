import { Navigation, Pagination, A11y, Autoplay, EffectCube } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cube';

const Slider = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay, EffectCube]}
            effect={'cube'}
            cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            }}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay={{delay: 3000}}
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <div className='relative'>
                    <img className='w-full h-[300px] md:h-[600px]' src="https://i.ibb.co/5rtdyP7/Penthouse.jpg" alt=""/>
                    <p className='absolute top-[20%] left-1/2 -translate-x-[50%] -translate-y-[50%] text-3x md:text-4xl lg:text-6xl font-bold text-white'>Penthouse</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className='relative'>
                    <img className=' w-full h-[300px] md:h-[600px]' src="https://i.ibb.co/L1CHZLm/Beachfront-properties.jpg" alt="" />
                    <div className='absolute top-[20%] left-1/2 -translate-x-[50%] -translate-y-[50%] text-3x md:text-4xl lg:text-6xl font-bold text-white'>
                        <div className='flex gap-3'>
                            <p>Beachfront</p>
                            <p>Properties</p>
                        </div>
                    </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative'>
                    <img className='w-full h-[300px] md:h-[600px]' src="https://i.ibb.co/wckC9VH/resorts.jpg" alt="" />
                    <p className='absolute top-[20%] left-1/2 -translate-x-[50%] -translate-y-[50%] text-3x md:text-4xl lg:text-6xl font-bold text-white'>Resorts</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative'>
                    <img className='w-full h-[300px] md:h-[600px]' src="https://i.ibb.co/jywjT8D/luxury-private-land.jpg" alt="" />
                    <p className='absolute top-[20%] left-1/2 -translate-x-[50%] -translate-y-[50%] text-3x md:text-4xl lg:text-6xl font-bold text-white'>Private Islands</p>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;
