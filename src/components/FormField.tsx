import React from 'react'
import { FormField } from '@/interfaces/props'

const FormField = ({labelName,type,name,placeholder,value,handleChange,isSupriceMe,handleSupriceMe}: FormField) => {
  return (
    <div>
        <div className='flex items-center gap-2 mb-2'>
            <label htmlFor={name} className='block text-sm font-medium text-gray-900'>
                {labelName}
            </label>
            {
              isSupriceMe && (
                <button type='button' onClick={handleSupriceMe} className='font-semibold text-xs bg-[#ececf1] py-1 px-2 rounded-[5px] text-black'>
                  Suprice me
                </button>
              )
            }
        </div>
        <input type={type} id={name} name={name} placeholder={placeholder} value={value} onChange={handleChange}
        required autoComplete='off' className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg 
        focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3 border' />
    </div>
  )
}

export default FormField