import React, { useEffect, useState } from 'react'
import useData from '../Hooks/Data'
import FilterSection from '../components/FilterSection'
import Pagination from '../components/Pagination'
import ProductCard from '../components/ProductCard'

const Product = () => {
  const { data } = useData();
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({ categories: [], searchText: '' });
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {
    let filtered = data;

    if (filters.categories.length > 0) {
      filtered = filtered.filter((item) =>
        filters.categories.includes(item.category.toLowerCase())
      );
    }

    if (filters.searchText.trim() !== '') {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(filters.searchText.toLowerCase())
      );
    }

    setFilteredData(filtered);
    setPage(1); // Reset page when filters change
  }, [filters, data]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className='max-w-7xl mx-auto md:px-13 px-4 mb-10 py-10'>
      <div className='flex md:flex-row flex-col items-start justify-between gap-10'>
        <FilterSection onFilterChange={handleFilterChange} />
        
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8'>
          {
            filteredData
              .slice(page * 8 - 8, page * 8)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
          }
        </div>
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  )
}

export default Product;
