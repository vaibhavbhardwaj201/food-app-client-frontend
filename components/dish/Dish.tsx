import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const Dish = () => {
  return (
    <div className='container my-5'>
        <div className='flex flex-row gap-5 items-center w-full'>
            <div className='rounded-lg overflow-hidden'>
                <Image className='' src='/bannerImg/banner2.avif' alt='dish' width={300} height={200} />
            </div>
            <div className='flex flex-row gap-5 justify-between w-full'>
                  <div className='flex flex-col gap-5'>
                      <div>
                          <div className='text-primary font-bold'>Dominos Cheese Burst</div>
                          <div className='text-gray'>Here you will find quality with taste.</div>
                      </div>
                    <div className='flex gap-4'>
                        <div className='font-semibold'>€8.4</div>
                        <div>⭐ 8.2</div>
                    </div>
                  </div>
            </div>
            <div>
                <Button className='bg-primary text-white px-4 py-2 rounded-md'>Add to Cart</Button>
            </div>
        </div>
    </div>
  )
}

export default Dish