import React from 'react'

const InputArea = ({ label, id, type='text', className = '', required = true, register}) => {
  return (
    <>
    <label htmlFor={id} className="mt-3">
      {label}
    </label>
    <input
      {...register}
      className={`${className} rounded-lg bg-gray-200 mt-2 p-2  focus:outline-blue-800`}
      type={type}
      id={id}
      required={required}
    />
  </>
  )
}

export default InputArea