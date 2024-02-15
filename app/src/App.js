import React, { useState, useEffect } from 'react';
import WatchList from './WatchList';
import watchesData from './watchesData';
import watchCategories from './categories';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  useEffect(() => {
    setSelectedSubCategory(null);
  }, [selectedCategory]);

  const filteredWatches = watchesData.filter((watch) => {
    return (
      (!selectedCategory || watch.category === selectedCategory) &&
      (!selectedSubCategory || watch.subCategory === selectedSubCategory)
    );
  });

  const categories = watchCategories.map((category) => category.category);
  const subCategories = watchCategories.map((category) => selectedCategory === category.category ? category.subCategories : []).flat();

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          className="ml-2 p-2"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="subCategory">Sub-Category:</label>
        <select
          id="subCategory"
          className="ml-2 p-2"
          onChange={(e) => setSelectedSubCategory(e.target.value)}
          value={selectedSubCategory || ''}
        >
          <option value="">All Sub-Categories</option>
          {subCategories.map((subCategory) => (
            <option key={subCategory} value={subCategory}>
              {subCategory}
            </option>
          ))}
        </select>
      </div>

      <WatchList watches={filteredWatches} />
    </div>
  );
};

export default App;
