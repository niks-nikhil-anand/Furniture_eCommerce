import Card from '@/components/Card';
import { CategoryCard } from '@/components/CategoryCard';
import { categories2 } from '@/constants/category';
import React from 'react';

const Page = () => {
  return (
    <>
     <div className='p-[3rem]'>
      
      <div className='p-5 flex flex-wrap gap-5 '>
        {categories2.map((category2) => (
          <CategoryCard key={category2.id} title={category2.name} image={category2.image} />
        ))}
      </div>
</div>
 <div>
      <Card/>
      </div>
    </>
   
  );
};

export default Page;
