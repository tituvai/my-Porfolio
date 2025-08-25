import React from 'react'

const HeaddingFive = ({className, textFive}) => {
  return (
    <>
    <h5 className={`text-2xl lg:text-3xl font-chakra font-bold lg:leading-9 ${className}`}>{textFive}</h5>
    </>
  )
}

export default HeaddingFive