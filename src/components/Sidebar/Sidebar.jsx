// Sidebar.jsx

import React, { useEffect, useState } from 'react';
import "./Sidebar.scss";
import { useFilterContext } from '../../Context/FilterContext';
import { BiCategory } from "react-icons/bi";
import { IoPricetagsOutline } from "react-icons/io5";
import FilterOption from './FilterOptions';

const categories = ["bag", "shoe", "cloth", "glass"];
const prices = [1, 51, 101, 151];

const Sidebar = () => {
  const { handleChange, handlePriceChange } = useFilterContext();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 758);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 760);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);

  useEffect(() => {
    const handleResize = () => {

      setIsMobile(window.innerWidth <= 758);
      setIsDesktop(window.innerWidth > 760);

    };
    if(isDesktop){
      setShowCategoryDropdown(true)
      setShowPriceDropdown(true)
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isDesktop]);

  

  return (
    <div className='sidebar'>
      <div className='category-filter' onClick={isMobile ? () => setShowCategoryDropdown(!showCategoryDropdown) : null}>
        <div className="heading-sidebar">
          <BiCategory />
          <h4>Categories</h4>
        </div>
        {showCategoryDropdown && (
          <div className="category-inputs">
            <FilterOption label="All" value="" onChange={handleChange} onClick={isMobile ? () => setShowCategoryDropdown(!showCategoryDropdown) : null}/>
            {categories.map((category) => (
              <FilterOption key={category} label={category} value={category} onChange={handleChange} />
            ))}
          </div>
        )}
      </div>

      <div className="prices-filter" onClick={isMobile ? () => setShowPriceDropdown(!showPriceDropdown) : null}>
        <div className="heading-sidebar">
          <IoPricetagsOutline />
          <h4>Prices</h4>
        </div>
        {showPriceDropdown &&  (
          <div className="price-inputs">
            <FilterOption label="All" value="" onChange={handlePriceChange} onClick={isMobile ? () => setShowPriceDropdown(!showPriceDropdown) : null}/>
            {prices.map((price, index) => (
              <FilterOption key={price} label={`$${price}-$${Number(price) + 50}`} value={price} onChange={handlePriceChange} />
            ))}
          </div>
        ) }
      </div>
    </div>
  );
}

export default Sidebar;
