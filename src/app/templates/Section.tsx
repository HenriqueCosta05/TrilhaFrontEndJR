import { WrapperComponent } from '@/components'
import Image from 'next/image'
import React from 'react'

interface SectionProps {
    children: React.ReactNode
    orientation: 'right' | 'left'
    data: {
        title: string
        description: string
        img: {
            src: string
            alt: string
        }
        id: string
    }
}
export default function Section({...props}: SectionProps) {
    return (
      <section id={props.data.id}>
        <WrapperComponent className="h-full flex flex-col lg:flex-row items-center justify-center">
          <Image
            src={props.data.img.src}
            alt={props.data.img.alt}
            className={`object-fit w-[300px] h-[300px] mx-auto ${
              props.orientation === "right" ? "order-2" : "order-1"
            }`}
            width={300}
            height={300}
          />
          <div
            className={`flex flex-col justify-center items-center mx-auto ${
              props.orientation === "left" ? "order-2" : "order-1"
            }`}
          >
            <h1
              className={`${
                props.orientation === "right"
                  ? "text-4xl font-black text-white"
                  : "text-4xl font-black text-primary"
              }`}
            >
              {props.data.title}
            </h1>
            <p className="text-lg text-white">{props.data.description}</p>
          </div>
        </WrapperComponent>
      </section>
    );
}
