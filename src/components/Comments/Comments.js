import React from 'react';
import { comments } from '../../mocks/comment';
import Comment from '../Comment/Comment';
import './Comments.css';

function Comments() {
    console.log(comments);
    return ( 
       <div className='comments-container'>
       {comments.map((comment) => (
           <Comment 
                author={comment.author}
                body={comment.body} 
            />
       ))}
       </div> 
    );
}

export default Comments;