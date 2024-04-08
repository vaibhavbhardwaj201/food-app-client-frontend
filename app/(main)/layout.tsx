"use client"

import React from 'react'

import useMediaQuery from '@/hooks/use-media-query'

import Header from './_components/header'
import Tabs from './_components/tabs'

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout = ({children}: MainLayoutProps) => {
  const isMobile = useMediaQuery({ media: '(max-width: 767px)' })
  return (
      <>
          <Header />
          {!isMobile && <Tabs cls='flex gap-8 py-15 mx-auto h-20 justify-center' />}
          <div className="px-3 md:px-[2rem] xl:px-[9rem]">
            {children}
          </div>
          {isMobile && <Tabs cls='flex justify-between px-10 h-16 bg-primary-foreground fixed bottom-0 left-0 right-0' />}
      </>
  )
}

export default MainLayout