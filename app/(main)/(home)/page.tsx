import React from 'react'
import { Metadata } from 'next';
import Image from 'next/image';

import Carousel from './_components/carousel';
import Categories from '@/components/categories';

export const metadata: Metadata = {
    title: "Food App | Get your favorite food delivered to your doorsteps!",
    description: "Order your favorite food from the best restaurants in town!",
};

const imgArr = [
    { name: 'Italian', price: 11.99, imageUrl: '/bannerImg/banner1.avif' },
    { name: 'Italian', price: 11.99, imageUrl: '/bannerImg/banner2.avif' },
    { name: 'Italian', price: 11.99, imageUrl: '/bannerImg/banner3.avif' },
    { name: 'Italian', price: 11.99, imageUrl: '/bannerImg/banner4.avif' },
    // '/bannerImg/banner1.avif',
    // '/bannerImg/banner2.avif',
    // '/bannerImg/banner3.avif',
    // '/bannerImg/banner4.avif',
]

const HomePage = () => {
    return (
        <>
            <div className='w-full h-full my-9'>
                <Carousel imgArr={imgArr} />
            </div>
            <Categories />

        </>
    )
}

export default HomePage