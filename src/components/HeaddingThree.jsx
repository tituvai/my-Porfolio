import React from 'react'

const HeaddingThree = ({textThree, className}) => {
  return (
    <>
    <h3 className={`text-3xl lg:text-5xl font-open lg:leading-20 ${className}`}>{textThree}</h3>
    </>
  )
}

export default HeaddingThree