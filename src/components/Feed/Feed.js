import React from 'react';
import AllPosts from '../AllPosts/AllPosts';
import FilterBar from '../FilterBar/FilterBar';
import SubredditList from '../SubredditList/SubredditList';

function Feed() {
    return ( 
        <div>
            <FilterBar />
            <AllPosts />
            <SubredditList />
        </div>
     );
}

export default Feed;