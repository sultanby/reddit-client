import React from 'react';
import { allPosts } from '../../mocks/posts';
import Post from '../Post/Post';
import './AllPosts.css';

function AllPosts() {
    return ( 
        <div className='all-posts-container'>
            {allPosts.map((post) => (
                <Post 
                    subreddit={post.subreddit}
                    title={post.title}
                    image={post.image}
                    num_comments={post.num_comments}
                    id={post.id}
                    votes={post.votes}
                    author={post.author}
                />
            ))}
        </div>
     );
}

export default AllPosts;