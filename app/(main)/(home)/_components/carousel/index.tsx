"use client"

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar, Autoplay, Parallax } from 'swiper/modules'

import 'swiper/css/bundle'

import useMediaQuery from '@/hooks/use-media-query'

interface Category {
    name: string
    price: number
    imageUrl: string
}

interface CarouselProps {
    imgArr?: Category[]
}

const Carousel = ({imgArr}: CarouselProps) => {
    const isMobile = useMediaQuery({ media: '(max-width: 767px)' })
  return (
      <Swiper
          modules={[Navigation, Scrollbar, Autoplay, Parallax]}
          spaceBetween={10}
          loop={true}
          slidesPerView={isMobile ? 1 : 2}
          navigation={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          parallax={true}
          onSlideChange={() => {}}
          onSwiper={(swiper) => {}}
      >
        {imgArr && imgArr.map(url => (
            <SwiperSlide key={url.name}>
                <div className='w-full h-full overflow-hidden rounded-xl cursor-pointer'>
                    <Image src={url.imageUrl} alt='banner' width={1200} height={400} className='rounded-xl hover:scale-110 transition ease-in-out delay-250' />
                </div>
            </SwiperSlide>
        ))}
      </Swiper>

  )
}

export default Carousel