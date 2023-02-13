import React from 'react'
import { WrapperProps } from '@/interfaces/props'

const Wrapper = ({children} : WrapperProps) => {
  return (
    <main className='sm:px-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
        {children}
    </main>
  )
}

export default Wrapper