import { Card } from '@/components/Card'
import CategoriesOfFlowers from '@/components/CategoryOfFlowers'
import CategoriesOfFurniture from '@/components/CategoryOfFurniture'
import Hero from '@/components/Hero'
import { ExampleNavbarTwo } from '@/components/Navbar'
import { Section } from '@/components/Section'
import React from 'react'

const Home = () => {
  return (
    <>
    <ExampleNavbarTwo/>
    <Hero/>
    <Section/>
    <CategoriesOfFurniture/>
    <CategoriesOfFlowers/>
    <Card/>
    </>
  )
}

export default Home