import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
    return (
        <div className='flex items-center rounded-[50px] bg-gray-100 px-2'>
            <Search size={17} />
            <Input
                className='rounded-[50px] bg-gray-100 border-transparent'
                type="text"
                placeholder="Search for food..."
            />
        </div>
    )
}

export default SearchBar