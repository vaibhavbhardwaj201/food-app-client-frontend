import Image from 'next/image'
import React from 'react'
import SignUpForm from './_components/SignUpForm'
import Link from 'next/link'

const SignUp = () => {
  return (
    <div className='flex flex-col justify-evenly items-center md:flex-row w-full h-screen bg-white px-5 md:px-10'>
          <div className='relative flex-grow flex-1 h-[15rem] md:h-[30rem] w-full md:w-auto'>
              <Image className='absolute inset-0 w-full h-full' src="/svg/scene5.svg" alt="Sign Up" fill={true} />
        </div>
        <div className='flex-1 w-full'>
            <SignUpForm />
              <div className='text-right mt-2'>Already have an account? <Link href={'./sign-in'}><span className='text-bold text-primary underline'>Sign In</span></Link></div>
        </div>
        
    </div>
  )
}

export default SignUp