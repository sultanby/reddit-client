import React from 'react';
import './SearchBar.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectSearchTerm, setSearchTerm, clearSearchTerm } from './SearchSlice';

function SearchBar() {
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);

    const onSearchHandler = (e) => {
        dispatch(setSearchTerm(e.target.value));
    };

    // const onSearchClearHandler = () => {
    //     dispatch(clearSearchTerm());
    // };

    return ( 
        <form className='search-container'>
            <input 
                type='text' 
                id='form-control' 
                value={searchTerm}
                onChange={onSearchHandler}
                placeholder='Search in this subreddit'
            />
            {/* {searchTerm.length > 0 && (
                <button
                    onClick={onSearchClearHandler}
                    type='button' 
                >x
                </button>
            )} */}
        </form>
     );
}

export default SearchBar;