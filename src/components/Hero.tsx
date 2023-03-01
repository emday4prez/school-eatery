import React, { useState } from 'react'
import Image from 'next/image'
import useDimensions from 'react-cool-dimensions'
import arrayCeil from '../utils/arrayCeil'

export default function Hero() {
  const [heroImage, setHeroImage] = useState('kidsrunning-1920.jpeg')
  const imageSizes = [640, 1280, 1920]

  const { observe, unobserve, width, height, entry } = useDimensions({
    onResize: ({ observe, unobserve, width, height, entry }) => {
      setHeroImage(`kidsrunning-${arrayCeil(imageSizes, width)}.jpeg`)

      unobserve() // To stop observing the current target element
      observe() // To re-start observing the current target element
    },
  })

  return (
    <div
      ref={observe}
      className='w-full h-screen flex justify-center items-center overflow-hidden relative bg-black pt-20'
    >
      <Image
        src={`/images/${heroImage}`}
        alt='Hero Image'
        className='opacity-60 object-cover object-center'
        fill
      />
      <div className='flex flex-col justify-center items-center px-3'>
        <p className='mt-5 text-center text-2xl text-white opacity-90'>School Eatery</p>
        <h4 className=' text-center text-3xl md:text-5xl text-white font-bold drop-shadow-lg'>
          ON SALE NOW <br />
        </h4>
      </div>
    </div>
  )
}
