import { useLayoutEffect, useState } from 'react'

interface MediaQuery {
    media: string
}

const useMediaQuery = ({media}: MediaQuery) => {
    const [matches, setMatches] = useState(false)

    useLayoutEffect(() => {
        const mediaQuery = window.matchMedia(media)
        if (mediaQuery.matches !== matches) {
            setMatches(mediaQuery.matches)
        }

        const listener = () => {
            setMatches(mediaQuery.matches)
        }

        mediaQuery.addEventListener('change', listener)
        return () => mediaQuery.removeEventListener('change', listener)
    }, [matches, media])
    
    return matches
}

export default useMediaQuery