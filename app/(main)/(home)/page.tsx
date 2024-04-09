import React from 'react'
import { Metadata } from 'next';

import Carousel from './_components/carousel';
import Categories from '@/components/categories';

export const metadata: Metadata = {
    title: "Food App | Get your favorite food delivered to your doorsteps!",
    description: "Order your favorite food from the best restaurants in town!",
};

const imgArr = [
    { id: 4653, name: 'Italian', price: 11.99, imageUrl: '/bannerImg/banner1.avif' },
    { id: 463453, name: 'Lol', price: 11.99, imageUrl: '/bannerImg/banner2.avif' },
    { id: 4657353, name: 'Indian', price: 11.99, imageUrl: '/bannerImg/banner3.avif' },
    { id: 4636553, name: 'SA', price: 11.99, imageUrl: '/bannerImg/banner4.avif' },
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