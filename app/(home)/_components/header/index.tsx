import Image from 'next/image'

import SearchBar from './searchbar'
import Setting from './setting'
import AskLocation from './ask-location'

const Header = () => {
    return (
        <>
            <nav className='flex justify-between items-center border-y p-2 sticky md:px-5'>

                <div className='flex items-center gap-4'>
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