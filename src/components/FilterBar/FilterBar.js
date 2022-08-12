import React from 'react';
import { Link } from 'react-router-dom';
import './FilterBar.css';


function FilterBar() {
    const filters = ['hot', 'new', 'top'];

    return ( 
        <div className='filter-bar'>
            {filters.map((filter) => 
                <Link to={`/${filter}`}>
                    <button>{filter}</button>
                </Link>
            )}
        </div>
     );
}

export default FilterBar;