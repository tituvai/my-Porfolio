import React from 'react'

const Button = ({onClick, btnText, className, value}) => {
  return (
    <>
    <button onClick={onClick} className={`text-xl font-open text-green-500 px-8 py-3 rounded-xl  hover:bg-green-500 hover:text-black transition-all duration-500 cursor-pointer ${className} ${ value ? 'bg-green-500 text-white' : 'bg-stone-900 text-black' }`}>{btnText}</button>
    </>
  )
}

export default Button