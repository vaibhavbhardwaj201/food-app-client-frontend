import { ChevronDown, MapPin } from 'lucide-react'
import React from 'react'

const AskLocation = () => {
    return (
        <div className='p-2 flex items-center'>
            <span className='rounded-[50px] bg-blue-100 inline-block p-1'>
                <MapPin color="#5094ed" size={15} />
            </span>
            <span className='mx-2 text-xs text-[#5094ed]'>Deliver to</span>
            <ChevronDown size={15} color="#5094ed" />
        </div>
    )
}

export default AskLocation