import Image from 'next/image'
import React from 'react'
import SignInForm from './_components/SignInForm'
import Link from 'next/link'

const SignIn = () => {
  return (
    <div className='flex flex-col justify-evenly items-center md:flex-row w-full h-screen bg-white px-5 md:px-10'>
      <div className='relative flex-grow flex-1 h-[15rem] md:h-[30rem] w-full md:w-auto'>
        <Image className='absolute inset-0 w-full h-full' src="/svg/scene6.svg" alt="Sign Up" fill={true} />
      </div>
      <div className='flex-1 w-full'>
        <SignInForm />
        <div className='text-right mt-2'>Don&apos;t have an account? <Link href={'./sign-up'}><span className='text-bold text-primary underline'>Sign up</span></Link> </div>
      </div>
    </div>
  )
}

export default SignIn