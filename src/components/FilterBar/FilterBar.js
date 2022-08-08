import React from 'react';
import './FilterBar.css';

function FilterBar() {
    const filters = ['hot', 'new', 'top'];

    return ( 
        <div className='filter-bar'>
            {filters.map((filter) => 
                <button>{filter}</button>
            )}
        </div>
     );
}

export default FilterBar;