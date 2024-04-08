import React from 'react'
import { Metadata } from 'next';
import Image from 'next/image';

import Carousel from './_components/carousel';

export const metadata: Metadata = {
    title: "Food App | Get your favorite food delivered to your doorsteps!",
    description: "Order your favorite food from the best restaurants in town!",
};

const imgArr = [
    '/bannerImg/banner1.avif',
    '/bannerImg/banner2.avif',
    '/bannerImg/banner3.avif',
    '/bannerImg/banner4.avif',
]

const HomePage = () => {
    return (
        <div className='w-full h-full overflow-hidden'>
            <Carousel imgArr={imgArr} />
        </div>
    )
}

export default HomePage