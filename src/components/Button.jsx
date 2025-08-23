import React from 'react'

const Button = ({btnText, className}) => {
  return (
    <>
    <button className={`text-xl font-open text-green-500 px-8 py-3 uppercase border-1 rounded-xl border-green-500 hover:bg-green-500 hover:text-black transition-all duration-500 cursor-pointer ${className}`}>{btnText}</button>
    </>
  )
}

export default Button