"use client"

import Image from 'next/image'

import SearchBar from './searchbar'
import Setting from './setting'
import AskLocation from './ask-location'

const Header = () => {
    return (
        <>
            <nav className='flex justify-between items-center border-b p-2 px-5 sticky top-0 md:px-5 z-10 bg-white'>

                <div className='flex items-center gap-4 justify-start'>
                    <Image
                        src="/logo.svg"
                        alt="Food App"
                        width={70}
                        height={70}
                    />
                    <div className='hidden md:block'>
                        <AskLocation />
                    </div>
                </div>
                <SearchBar />
                <Setting />
            </nav>
            <div className='md:hidden transition'>
                <AskLocation />
            </div>
        </>
    )
}

export default Header