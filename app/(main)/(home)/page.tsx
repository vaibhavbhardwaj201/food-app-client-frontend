import React from 'react'
import Banner from './_components/banner'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Food App | Get your favorite food delivered to your doorsteps!",
    description: "Order your favorite food from the best restaurants in town!",
};

const HomePage = () => {
    return (
        <div className='h-[100vh]'>
            <Banner />
        </div>
    )
}

export default HomePage