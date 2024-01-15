import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { CiSearch } from 'react-icons/ci';
import './PagesStyles/Browse.scss';
import Sidebar from '../components/Sidebar/Sidebar';
import { useFilterContext } from '../Context/FilterContext';

const Browse = () => {

  const {handleInputChange,filterResult} = useFilterContext();
  console.log(filterResult)

  

  return (
    <div className="browse-page">
      <div className="search-input">
        <div className="input">
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Search for any products...."
          />
          <CiSearch />
        </div>
      </div>
      <div className="page-header">
        <Breadcrumb />
        <p className='show-p'>Showing 1-9 of 24 results</p>
      </div>
      <div className="flex">
        <Sidebar />
        <div className="all-products">
          {/* All Products */}
         {filterResult}
        </div>
        {filterResult.length === 0 ? <div className='noitems-div'>
          <p className='noitems-p'>No items found</p>
        </div> : ''}
      </div>
    </div>
  );
};

export default Browse;
