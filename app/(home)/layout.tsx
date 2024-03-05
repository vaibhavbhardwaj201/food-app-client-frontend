import React from 'react'
import Header from './_components/header'

interface HomeLayoutProps {
    children: React.ReactNode
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default HomeLayout