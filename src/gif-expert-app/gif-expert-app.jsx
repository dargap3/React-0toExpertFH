import React, { useState } from 'react';

import AddCategory from '../components/add-category/add-category';
import GifGrid from '../components/gif-grid/gif-grid';

const GifExpertApp = (props) => {
  const [categories, setCategories] = useState(['Dragon Ball']);

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

export default GifExpertApp

