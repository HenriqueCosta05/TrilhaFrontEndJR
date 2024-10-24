import React from 'react'

interface WrapperProps {
    children: React.ReactNode
    className?: string
}
    
export default function Wrapper({ children, className }: WrapperProps) {
    return (
        <div className={`flex items-center justify-center w-full h-full ${className}`}>
          {children}
        </div>
  )
}
