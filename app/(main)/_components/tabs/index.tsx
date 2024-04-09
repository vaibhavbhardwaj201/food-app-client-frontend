import { Home, ShoppingCart, Utensils } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

interface TabsProps {
    cls: string
}

const Tabs = ({cls}: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string>('home')
  return (
      <nav className={`${cls} z-20`}>
            <Link href={'/'} onClick={() => setActiveTab('home')} className={`flex flex-col gap-1 justify-center items-center md:flex-row md:gap-2 ${activeTab === 'home' ? 'text-primary font-bold': 'text-gray'}`}>
                <Home size={20} />
                <div className='text-sm'>Home</div>
            </Link>
          <Link href='/menu' onClick={() => setActiveTab('menu')} className={`flex flex-col gap-1 justify-center items-center md:flex-row md:gap-2 ${activeTab === 'menu' ? 'text-primary font-bold' : 'text-gray'}`}>
                <Utensils size={20} />
                <div className='text-sm'>Menu</div>
            </Link>
          <Link href={'/cart'} onClick={() => setActiveTab('cart')} className={`flex flex-col gap-1 justify-center items-center md:flex-row md:gap-2 ${activeTab === 'cart' ? 'text-primary font-bold' : 'text-gray'}`}>
                <ShoppingCart size={20} />
                <div className='text-sm'>Cart</div>
            </Link>
    </nav>
  )
}

export default Tabs