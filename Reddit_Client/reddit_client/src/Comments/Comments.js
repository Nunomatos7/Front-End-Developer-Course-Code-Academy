// Comments.js

import React from 'react';
import './Comments.css';

function Comment({ comment }) {
  return (
    <div className="comment">
      <div className="comment-header">
        <span className="comment-author">{comment.author}</span>
        <span className="comment-timestamp">{comment.timestamp}</span>
      </div>
      <p className="comment-body">{comment.body}</p>
      {comment.replies && (
        <div className="replies">
          {comment.replies.map((reply, index) => (
            <Comment key={index} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );
}

function CommentsSection({ comments }) {
  return (
    <div className="comments-section">
      <div className="comments">
        {comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default CommentsSection;
