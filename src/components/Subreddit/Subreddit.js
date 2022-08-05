import React from 'react';
import './Subreddit.css';

function Subreddit({subreddit, key}) {
    return ( 
        <div className='subreddit'>
            <a href="">{subreddit}</a>
        </div>
     );
}

export default Subreddit;