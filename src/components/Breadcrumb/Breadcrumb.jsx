import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
   

    return (
    <div className='path'>
        <Link to='/'>Home</Link>
        {pathnames.map((part, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            return (
                <span key={index}>
                    {' '}
                    {routeTo}
                    <Link to={routeTo}></Link>
                </span>
            )
        })}
        <p></p>
    </div>
  )
}

export default Breadcrumb
