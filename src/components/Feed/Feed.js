import React from 'react';
import AllPosts from '../AllPosts/AllPosts';
import SubredditList from '../SubredditList/SubredditList';

function Feed() {
    return ( 
        <div>
            <AllPosts />
            <SubredditList />
        </div>
     );
}

export default Feed;