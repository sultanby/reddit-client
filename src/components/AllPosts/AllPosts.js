import React from 'react';
// import { allPosts } from '../../mocks/posts';
import Post from '../Post/Post';
import './AllPosts.css';
import { selectAllPosts } from './AllPostsSlice';
import { useSelector } from 'react-redux';

function AllPosts() {
    const allPosts = useSelector(selectAllPosts);
    console.log(allPosts);
    const { isLoading } = useSelector((state) => state.allPosts);
    //console.log(isLoading);
    return ( 
        <div className='all-posts-container'>
            {allPosts.map((post, index) => (
                <Post 
                    subreddit={post.data.subreddit}
                    title={post.data.title}
                    image={post.data.url}
                    num_comments={post.data.num_comments}
                    id={post.data.id}
                    votes={post.data.ups}
                    author={post.data.author}
                    post_hint={post.data.post_hint}
                    url={post.data.url}
                    video_src={post.data.secure_media !== null ? post.data.secure_media.reddit_video.fallback_url : false}
                    key={index}
                />
            ))}
        </div>
     );
}

export default AllPosts;