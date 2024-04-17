import { Card } from '@/components/Card'
import CategoriesOfFlowers from '@/components/CategoryOfFlowers'
import CategoriesOfFurniture from '@/components/CategoryOfFurniture'
import { FeaturedProduct } from '@/components/FeaturedProducts'
import Hero from '@/components/Hero'
import { ExampleNavbarTwo } from '@/components/Navbar'
import { Section } from '@/components/Section'
import React from 'react'

const Home = () => {
  return (
    <>
    
    <Hero/>
    <Section/>
    <CategoriesOfFurniture/>
    <CategoriesOfFlowers/>
    <FeaturedProduct/>
    <Card/>
    </>
  )
}

export default Home