import React, { useEffect } from "react";
// import { comments } from '../../mocks/comment';
import Comment from "../Comment/Comment";
import Post from "../Post/Post";
import "./Comments.css";
import { selectAllComments, loadComments, selectPostInfo } from "./CommentsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { urlHelper } from "../../utils/urlHelper";

function Comments() {
  const comments = useSelector(selectAllComments);
  const postInfo = useSelector(selectPostInfo);
//   console.log(comments);
//   console.log(postInfo);
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
    <div>
      <Post 
        subreddit={postInfo.subreddit}
        title={postInfo.title}
        image={postInfo.url}
        num_comments={postInfo.num_comments}
        id={postInfo.id}
        votes={postInfo.ups}
        author={postInfo.author}
        post_hint={postInfo.post_hint}
        url={postInfo.url}
        video_src={postInfo.secure_media?.reddit_video?.fallback_url}
        comment_link={postInfo.permalink}
    />
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
    </div>
  );
}

export default Comments;
