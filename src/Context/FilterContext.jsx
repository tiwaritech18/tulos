import { createContext, useContext, useEffect, useState } from "react";
import Data from "../components/Assets/AllProducts";
import Item from "../components/Item/Item";


const FilterContext = createContext();


const FilterContextProvider = ({children}) => {
    const [products, setProducts] = useState(Data);
    const [price, setPrice] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    
    // ===== input filter
    const [query, setQuery] = useState('');
    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const filteredItems = products.filter((product) => {
        const queryLowercase = query.toLowerCase();
        const categoryLowercase = product.itemCategory.toLowerCase();
        const productLowercase = product.name.toLowerCase(); 

        return (
            productLowercase.startsWith(queryLowercase) ||
            categoryLowercase.includes(queryLowercase)
        )
    })

    // ===== Radio filter
    const handleChange = (e) => {
        setSelectedCategory(e.target.value);
    }

    // ====== Buttons Filter
    const handleClick = (e) => {
        setSelectedCategory(e.target.value);
    }

    // ====== price filter
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    }

    function filteredData(products, selected, query, price){
        let filteredProducts = products;

        //filtering input items
        if(query){
            filteredProducts = filteredItems;
        }
        if(price){
            filteredProducts = filteredProducts.filter((product) => {
                if (price > 0 && price <= 50) {
                  return product.price > 0 && product.price <= 50;
                } else if (price > 50 && price <= 100) {
                  return product.price > 50 && product.price <= 100;
                } else if(price > 100 && price <= 150){
                    return product.price > 100 && product.price <= 150;
                }else if(price > 150 && price <= 200){
                    return product.price > 150 && product.price <= 200;
                }
                // Add similar conditions for other price ranges
                // ...
          
                return true; 
                
            })
        }
        // selected filter
        if(selected){
            filteredProducts = filteredProducts.filter((product) => {
                return (
                    product.itemCategory === selected || product.name === selected || product.price === selected
                )
            })
        }
        return filteredProducts.map((item) => {
            return <Item 
            id={item.id}
            key={item.id}
            imgSrc={item.imgSrc}
            price={item.price}
            description={item.description}
            name={item.name}
                 />
        })
    }
    const filterResult = filteredData(products, selectedCategory, query, price);

    const contextValue = {
                handleChange,
                selectedCategory,
                filterResult,
                handleInputChange,
                handlePriceChange
            };
    return (
        <FilterContext.Provider value={contextValue}>
            {children}
        </FilterContext.Provider>
    )
}


const useFilterContext = () => {
    const context = useContext(FilterContext);
    if(!context) {
        throw new Error('useShopContext must be used within a ShopContextProvider')
      }
      return context;
}

export {FilterContextProvider, useFilterContext};