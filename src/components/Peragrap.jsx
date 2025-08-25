import React from 'react'

const Peragrap = ({peraText, className}) => {
  return (
    <>
    <p className={`text-xs lg:text-base font-paprika leading-7.5 ${className}`}>{peraText}</p>
    </>
  )
}

export default Peragrap