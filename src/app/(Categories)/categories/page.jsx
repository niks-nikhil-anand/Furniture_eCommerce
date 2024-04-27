import Card from '@/components/Card';
import { CategoryCard } from '@/components/CategoryCard';
import { categories2 } from '@/constants/category';
import React from 'react';

const Page = () => {
  return (
    <>
      <div>
        <div className='p-3 flex flex-wrap gap-5'>
          {categories2.map((category2) => (
            <div key={category2.id} style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}>
              <CategoryCard title={category2.name} image={category2.image} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <Card />
      </div>
    </>
  );
};

export default Page;
