import React from 'react';
import { categories } from '@/constants/category.js';

const Category = ({ name, image }) => (
  <div className="w-32 flex flex-col items-center justify-center">
    <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <p className="mt-2 text-sm text-center">{name}</p>
  </div>
);

const CategoryList = () => (
  <div className="flex items-center py-4 lg:gap-[1.5rem] overflow-x-scroll hide-scrollbar">
    <div className="flex flex-nowrap space-x-4 px-4 md:px-0 lg:px-4">
      {categories.map((category) => (
        <Category key={category.id} name={category.name} image={category.image} />
      ))}
    </div>
  </div>
);

const CategoriesOfFurniture = () => (
  <div className="container mx-auto px-7 mt-[4rem] lg:ml-[4rem]">
    <h2 className="text-3xl font-bold mt-8 mb-4">Categories of Flowers</h2>
    <div className="border-t border-b py-4 overflow-x-auto">
      <CategoryList />
    </div>
  </div>
);

export default CategoriesOfFurniture;
