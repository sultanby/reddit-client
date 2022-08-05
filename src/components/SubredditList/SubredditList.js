import React from 'react';
import { todaysMostPopular } from '../../mocks/subreddits';
import Subreddit from '../Subreddit/Subreddit';
import './SubredditList.css';

function SubredditList() {
    return ( 
        <div className='subreddit-list-container'>
            <h4>Hottest Communities</h4>
            {todaysMostPopular.map((subreddit) => (
                <Subreddit subreddit={subreddit} key={subreddit.id}/>
            ))}
        </div>
     );
}

export default SubredditList;