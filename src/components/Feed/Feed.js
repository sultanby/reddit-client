import React from 'react';
import AllPosts from '../AllPosts/AllPosts';
import FilterBar from '../FilterBar/FilterBar';
import SubredditList from '../SubredditList/SubredditList';
import './Feed.css'

function Feed() {
    return ( 
        <div id='home-grid'>
            <FilterBar />
            <AllPosts />
            <SubredditList />
        </div>
     );
}

export default Feed;