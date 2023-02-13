import Header from '@/components/Header'
import Wrapper from '@/components/Wrapper'
import React, { useState } from 'react'
import { preview } from '@/assets'
import { FormField,Loader } from '@/components'
import { getRandomPrompt } from '@/utils'
import Image from 'next/image'

const CreatePost = () => {
    const [form,setForm] = useState<any>({
        name:'',
        prompt:'',
        photo:'',
    })
    const [generatingImg,setGenerationImg] = useState<boolean>(false)
    const [loading,setLoading] = useState<boolean>(false)

    //Functions
    const handleSubmit = () => {

    }

    const handleChange = (e:any) => {
      if(!e.target || e.target.name || e.target.value) return 
      setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSupriceMe = () => {
      const randomPrompt: string = getRandomPrompt(form.prompt)
      setForm({...form, prompt:randomPrompt})
    }

    const generateImage = () => {

    }

  return (
   <>
   <Header/>
   <Wrapper>
        <section className='max-w-7xl mx-auto flex-col flex justify-center items-center'>
        <div>
            <h1 className='font-extrabold text-[#222328] text-[32px]'>Create your image</h1>
            <p className='mt-2 text-[#666e75] text-[14px] max-w-[500px]'>Random text here</p>
          </div>
          <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
            <div className='flex flex-col gap-5'>
                <FormField 
                labelName='your name'
                type='text'
                name='name'
                placeholder='JohnDoe'
                value={form.name}
                handleChange={handleChange}
                />
                 <FormField 
                labelName='prompt'
                type='text'
                name='prompt'
                placeholder='Synthwave aeroplane'
                value={form.prompt}
                handleChange={handleChange}
                isSupriceMe={true}
                handleSupriceMe={handleSupriceMe}
                />
                <div className='relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center'>
                  {
                    form.photo ? (
                      <img src={form.photo} alt="" className='w-full h-full object-contain' />
                    ) : <Image src={preview} alt="image" className='w-9/12 h-9/12 object-contain opacity-40' />
                  }{
                    generatingImg && <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
                      <Loader/>
                      </div>
                  }
                </div>
            </div>
            <div className='mt-5 flex gap-5'>
              <button type='button' onClick={generateImage} className='text-white bg-green-700 font-medium rounded-md
              text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
                {generatingImg ? 'Generationg' : 'Generate image'}
              </button>
            </div>
            <div className='mt-10'>
              <p className='mt-2 text-[#666e75] text-[14px]'>Once you have created, if you want you can share it with others in the community</p>
              <button type='submit' className='mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto
              px-5 py-2.5 text-center'>
                {loading ? 'Sharing...' : 'Share with the community'}
              </button>
            </div>
          </form>
        </section>
    </Wrapper>
   </>
  )
}

export default CreatePost