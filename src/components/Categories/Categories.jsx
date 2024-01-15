import React from 'react';
import "./Categories.scss";
import category1 from '../Assets/category1.jpg';
import category2 from '../Assets/category2.jpg';
import category3 from '../Assets/category3.jpg';
import Category from './Category';
import { Link } from 'react-router-dom';

const categories = [
    {
        id: 1,
        category: 'man',
        to: '/man',
        title: 'MAN',
        imgSrc: category1,
    },
    {
        id: 2,
        category: 'women',
        to: '/women',
        title: 'WOMEN',
        imgSrc: category2,
    },
    {
        id: 3,
        category: 'kid',
        to: '/kid',
        title: 'KIDS',
        imgSrc: category3,
    },
];

const Categories = () => {
    const handleCategoryClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className='categories-container'>
            <div className="categories">
                {categories.map((category) => (
                    <Link to={category.to} key={category.id}>
                        <div className="category" onClick={handleCategoryClick}>
                            <Category {...category} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Categories;
