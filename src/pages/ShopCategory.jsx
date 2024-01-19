import React, { useContext, useEffect } from 'react'
import { useShopContext} from "../Context/ShopContext";
import Item from "../components/Item/Item";
import "./PagesStyles/ShopCategory.scss";
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { useLoadingContext } from '../Context/LoadingContext';
import { ClipLoader } from 'react-spinners';
import { useLocation } from 'react-router-dom';


const ShopCategory = (props) => {
  const {Data} = useShopContext();
  const {loading, setLoading} = useLoadingContext();
  const location = useLocation();

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setLoading(false);
    }
    fetchData();
  },[location.pathname])


  return (
<div className='shop-category-container'>
    <div className="shop-category-header">
      <Breadcrumb />
    </div>
    
      <div className="shop-category">
        {loading ? (
          <div className="loader">
            <ClipLoader />
          </div>
        ) :
        (
          Data.map((item, i) => {
            if(props.category === item.category){
              return (
                <div key={i}>
                <Item id={item.id} name={item.name} imgSrc={item.imgSrc}  description={item.description} price={item.price} />
              </div>
          )}else{
            return null;
          }
        }))}
      </div>
      </div>
  
  )
}

export default ShopCategory
