import React, { useState } from 'react';

const FilterSection = ({ onFilterChange }) => {
  const categories = ["tv", "audio", "laptop", "mobile", "gaming", "appliances"];
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleCheckboxChange = (category) => {
    let updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((item) => item !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
    onFilterChange({ categories: updatedCategories, searchText });
  };

  const handleSearchChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    onFilterChange({ categories: selectedCategories, searchText: text });
  };

  return (
    <div className='w-full bg-gray-100 px-5 rounded-md py-4'>
      <input
        type="text"
        value={searchText}
        onChange={handleSearchChange}
        className='px-3 bg-white py-2 border border-gray-200 rounded-md w-full'
        placeholder='Search...'
      />

      <h1 className='text-xl mt-5 font-medium'>Category</h1>
      <div className='flex flex-col gap-2 mt-2'>
        {categories.map((item) => (
          <label key={item} className='flex gap-2 items-center'>
            <input
              type="checkbox"
              checked={selectedCategories.includes(item)}
              onChange={() => handleCheckboxChange(item)}
            />
            <span className='uppercase cursor-pointer'>{item}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
