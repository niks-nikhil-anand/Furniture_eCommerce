
import { ParallaxScrollDemo } from '@/components/Gallery'
import { HeroScrollDemo } from '@/components/Tablet'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroScrollDemo/>
      <ParallaxScrollDemo/>
    </div>
  )
}

export default page