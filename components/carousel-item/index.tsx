"use client"

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, Parallax } from 'swiper/modules'

import 'swiper/css/bundle'

import useMediaQuery from '@/hooks/use-media-query'
import Card from '../card'

interface Category {
    id: number
    name: string
    price: number
    imageUrl: string
}

interface CarouselProps {
    items?: Category[]
}

const CarouselItem = ({items}: CarouselProps) => {
  const isMobile = useMediaQuery({ media: '(max-width: 767px)' })
  const slidesPerView = Math.min(4, items?.length ?? 0);
  // const lessThanFour = items?.length ?? 0 < 4;
  return (
    <>
    <Swiper
      modules={[Scrollbar, Parallax]}
      spaceBetween={10}
      slidesPerView={isMobile ? 2 : slidesPerView}
      parallax={true}
    >
      {items && items.map(item => (
        <SwiperSlide key={item.id}>
          <div className='w-full h-full rounded-xl overflow-hidden cursor-pointer max-w-[400px] py-1'>
            <Card item={item} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </>
  )
}

export default CarouselItem
