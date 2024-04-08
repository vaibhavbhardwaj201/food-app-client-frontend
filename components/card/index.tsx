import Image from 'next/image'
import React from 'react'

interface CardProps {
    item: {
        name: string
        price: number
        imageUrl: string
    }
}

const Card = ({ item }: CardProps) => {
  return (
      <div className='rounded-xl cursor-pointer max-w-[400px] shadow-md'>
          <div className='hover:scale-105 transition ease-in-out delay-250'>
              <div key={item.name} className='border-2 z-10 flex flex-col gap-1 rounded-xl overflow-hidden'>
                  <Image src={item.imageUrl} alt={item.name} width={500} height={150} className='object-cover' />
                <div className='px-5 flex justify-between items-center'>
                      <div>
                          <div className='text-md font-semibold'>{item.name}</div>
                          <div className='text-sm text-gray'>Finger licking taste...</div>
                      </div>
                      <div className='hidden md:block'>
                        <div className='bg-primary text-white rounded-full px-3 py-1.5 flex'>+</div>
                      </div>
                </div>
                <div className='border-t-2 border-dotted px-5 py-1'>
                    <div className='text-sm text-primary'>€{item.price}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
