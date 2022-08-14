import React, { useEffect } from "react";
// import { comments } from '../../mocks/comment';
import Comment from "../Comment/Comment";
import "./Comments.css";
import { selectAllComments, loadComments } from "./CommentsSlice";
import { useSelector, useDispatch } from "react-redux";
import {useParams} from 'react-router-dom';
import { urlHelper } from "../../utils/urlHelper";

function Comments() {
  const comments = useSelector(selectAllComments);
  //console.log(comments);
  const { isLoading } = useSelector((state) => state.allComments);
  const params = useParams();
  //console.log(params);

  const dispatch = useDispatch();

  useEffect(() => {
    let url = urlHelper({ params });
    //console.log(url);
    dispatch(loadComments(url));
  }, [dispatch, params]);

  return (
    <div className="comments-container">
      {comments.map((comment) => (
        <Comment 
            author={comment.data.author} 
            body={comment.data.body} 
            created={comment.data.created}
            key={comment.data.id}
            />
      ))}
    </div>
  );
}

export default Comments;
