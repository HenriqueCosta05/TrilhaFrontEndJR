import React from 'react'

interface Props {
    children: React.ReactNode
    }
export default function Layout({children}: Props) {
  return (
      <section className='w-full h-screen bg-teal-300 flex justify-center items-center flex-col'> 
          {children}
        </section>
  )
}
