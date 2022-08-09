import React from 'react';
import { Link } from 'react-router-dom';
import commentLogo from '../../assets/comments-24.png';
import './Post.css';

function Post({subreddit,
    title,
    image,
    num_comments,
    id,
    votes,
    author}) {
        console.log(image);
        return ( 
            <div className='post-container'>
                <h5>r/{subreddit}</h5>
                <h4>{title}</h4>
                <img src={image}/>
                <div className='down-section'>
                    <p>{author}</p>
                    <Link to='/comments'>
                        <button className='comment-button'>
                            <img src={commentLogo} />
                            <p>{num_comments}</p>
                        </button>
                    </Link>
                </div>
                
            </div>
        );
}

export default Post;