import { WrapperComponent } from '@/components'
import Image from 'next/image';
import React from 'react'

interface HeroProps {
    title: string;
    highlightedText: string;
    description: string;
    img: {
        src: string;
        alt: string;
    }
}
export default function Hero({...props}: HeroProps) {
  return (
      <WrapperComponent className='lg:flex-nowrap flex-wrap mx-auto justify-between lg:p-16 p-4 space-y-12'>
          <Image src={props.img.src} alt={props.img.alt}  className='object-fit lg:w-[45%] h-[80%] mx-auto' width={300} height={300} />
          <div className='flex flex-col lg:ml-24 ml-8'>
          <h1 className='lg:text-7xl text-4xl font-black text-white'>
              {props.title}
              <span className='text-primary'>{props.highlightedText}</span>
          </h1>
              <p className='lg:text-2xl text-lg text-white'>{props.description}</p>
              </div>
    </WrapperComponent>
  )
}
