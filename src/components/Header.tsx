import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { logo2 } from '@/assets'

const Header = () => {
  return (
    <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link href='/'><Image src={logo2} alt=" "  height={80} width={80}/></Link>
        <Link href='/createPost' className='font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'>Create Post</Link>
      </header>
  )
}

export default Header