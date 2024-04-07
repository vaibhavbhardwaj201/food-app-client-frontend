import { Home, ShoppingCart, Utensils } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface TabsProps {
    cls: string
}

const Tabs = ({cls}: TabsProps) => {
  return (
      <nav className={cls}>
            <Link href={'/'} className='flex flex-col gap-1 justify-center items-center md:flex-row md:gap-2 text-primary'>
                <Home size={20} />
                <div className='text-sm'>Home</div>
            </Link>
            <Link href='/menu' className='flex flex-col gap-1 justify-center items-center md:flex-row md:gap-2'>
                <Utensils size={20} />
                <div className='text-sm'>Menu</div>
            </Link>
            <Link href={'/cart'} className='flex flex-col gap-1 justify-center items-center md:flex-row md:gap-2'>
                <ShoppingCart size={20} />
                <div className='text-sm'>Cart</div>
            </Link>
    </nav>
  )
}

export default Tabs