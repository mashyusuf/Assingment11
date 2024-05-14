// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slider'

import one from '../assets/carousel1.webp'
import two from '../assets/cursole2.png'
import three from '../assets/cursole3.jpg'
import four from '../assets/cursole4.jpg'
import five from '../assets/cursole5.jpg'

export default function Carousel() {
  return (
    <div className=''>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide
            image={one}
            text='In the depths of digital silence'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={two}
            text='BJet Mren Develpor, where innovation whispers'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={three}
            text='Dare to decode the unknown,
            Unraveling mysteries in lines of code.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={four}
            text='Unraveling mysteries, pixel by pixel, the journey unfolds'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={five}
            text='Will you heed the call of the digital sirens'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}