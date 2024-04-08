import React from 'react'

import CarouselItem from '../carousel-item'
import data from '@/dummy-data/homepage-dummy'

const Categories = () => {
  return (
    <>
        <div className=''>
            {data.map(catItem => (
                <div key={catItem.category} className='my-10'>
                    <div className='text-2xl font-semibold my-5'>{catItem.category}</div>
                    <div className='flex gap-5 py-2 px-2'>
                        <CarouselItem key={catItem.category} items={catItem.dishes} />
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}

export default Categories
