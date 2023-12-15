import React from 'react'

const InputTextArea = ({ label, id, className = '', required = true, register}) => {
  return (
    <>
    <label htmlFor={id} className="mt-3">
      {label}
    </label>
    <textarea
      {...register}
      className={`${className} rounded-md py-2 px-3 bg-gray-200 focus:outline-blue-800`}
      id={id}
      required={required}
    />
  </>
  )
}

export default InputTextArea