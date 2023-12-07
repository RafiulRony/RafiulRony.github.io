import React from 'react'

const InputArea = ({onChange, label, id, type='text', className = '', required = true}) => {
  return (
    <>
    <label htmlFor={id} className="mb-2">
      {label}
    </label>
    <input
    onChange={onChange}
      className={`${className} rounded-lg bg-gray-200 mt-2 p-2  focus:outline-blue-800`}
      type={type}
      id={id}
      required={required}
    />
  </>
  )
}

export default InputArea