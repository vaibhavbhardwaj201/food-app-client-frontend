import React from 'react'
import Header from './_components/header'

interface HomeLayoutProps {
    children: React.ReactNode
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default HomeLayout