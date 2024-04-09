"use client"

import React, { useState } from 'react'
import Link from 'next/link'

import data from '@/dummy-data/categories.json'
import dummyData from '@/dummy-data/homepage-dummy'
import Card from '@/components/card'
import Dish from '@/components/dish/Dish'

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Asian')
  return (
    <>
      <div className='text-2xl font-bold my-8 overflow-hidden'>Our Menus</div>
      <div className='overflow-hidden'>
        <nav>
          <div className='flex gap-4 overflow-x-auto no-scrollbar'>
            {data.categories.map((category) => (
              <Link 
                className={`whitespace-nowrap text-primary py-1 px-2 rounded-md ${activeCategory === category.name ? 'bg-primary text-white' : ' bg-primary-foreground'}`} 
                onClick={() => setActiveCategory(category.name)}
                href={`#${category.name}`} 
                key={category.name} >
                  {category.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <div className='my-7'>
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {dummyData[0].dishes.map(category => (
              <div key={category.id}>
                <Card item={category} />
                {/* <Dish /> */}
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Menu
