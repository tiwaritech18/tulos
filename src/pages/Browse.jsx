import React, { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { CiSearch } from 'react-icons/ci';
import './PagesStyles/Browse.scss';
import Sidebar from '../components/Sidebar/Sidebar';
import { useFilterContext } from '../Context/FilterContext';
import { ClipLoader } from 'react-spinners';
import { useLoadingContext } from '../Context/LoadingContext';
import { useLocation } from 'react-router-dom';


const Browse = () => {

  const { handleInputChange, filterResult } = useFilterContext();
  const { loading, setLoading } = useLoadingContext();
  const location = useLocation();

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    }
    fetchData()
  }, [location.pathname, handleInputChange])
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

      <>
        <div className="page-header">
          <Breadcrumb />
          <p className='show-p'>Showing 1-3 of 14 results</p>
        </div>
        <div className="flex">
          <Sidebar />
          <div className="all-products">
            {loading ? (
              <div className="loader">
                <ClipLoader />
              </div>
            ) : (
              <>
                {filterResult}
              </>
            )}
          </div>
          {filterResult.length === 0 ? <div className='noitems-div'>
            <p className='noitems-p'>No items found</p>
          </div> : ''}
        </div>
      </>



    </div>
  );
};

export default Browse;
