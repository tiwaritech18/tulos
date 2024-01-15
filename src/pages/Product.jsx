import React  from 'react'
import { useShopContext} from "../Context/ShopContext"
import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ProductDisplay from '../components/Productdisplay/ProductDisplay';
// import Container  from '../components/Container/Container';
import SimilarProduct from '../components/SimilarProducts/SimilarProduct';

const Product = () => {
  const {Data} = useShopContext();
  const {productId} = useParams()

  const product = Data.find((e) => e.id === Number(productId));

  const similarProductsArray = Data.filter((otherProduct) => otherProduct.category === product.category && otherProduct.id !== product.id);
  const similarProducts = similarProductsArray.slice(0, 4);
  
  return (
    <div className='product'>
      <Breadcrumb />
      <ProductDisplay product={product}/>
      <SimilarProduct similarProducts={similarProducts} />
    </div>
  )
}

export default Product
