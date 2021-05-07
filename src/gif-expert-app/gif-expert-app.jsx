import React, { useState } from 'react';

import AddCategory from '../components/add-category/add-category';
import GifGrid from '../components/gif-grid/gif-grid';

const GifExpertApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

        { 
          categories.map(category => 
            <GifGrid
              key={category}
              category={category}
            />
          )
        }
    </>
  );
};

export default GifExpertApp;

