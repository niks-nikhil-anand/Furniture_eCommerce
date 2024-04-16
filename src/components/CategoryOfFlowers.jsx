import React from 'react';
import {categories} from '@/constants/category.js'

const Category = ({ name, image }) => (
  <div className="w-32 flex flex-col items-center justify-center ">
    <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden ">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <p className="mt-2 text-sm text-center">{name}</p>
  </div>
);

const CategoryList = () => (
  <div className="flex items-center overflow-x-auto space-x-4 py-4 lg:gap-[1.5rem] ">
    {categories.map((category) => (
      <Category key={category.id} name={category.name} image={category.image} />
    ))}
  </div>
);

const CategoriesOfFlowers = () => (
  <div className="container mx-auto px-7 mt-[1rem] lg:ml-[4rem]">
    <h2 className="text-xl lg:text-3xl font-bold mt-8 mb-4">Categories of Flowers</h2>
    <div className="border-t border-b py-4  ">
      <CategoryList />
    </div>
  </div>
);

export default CategoriesOfFlowers;
