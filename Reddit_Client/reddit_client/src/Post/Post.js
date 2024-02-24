import React, { useState } from 'react';
import './Post.css'; 
import { FaRegCommentAlt } from "react-icons/fa";
import { FaAngleDoubleUp, FaAngleDoubleDown } from 'react-icons/fa';
import CommentsSection from '../Comments/Comments.js';

function Post({ title, author, timestamp, commentsCount, imageUrl }) {
  const [showComments, setShowComments] = useState(false);
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);
  const [score, setScore] = useState(0); // Initial score value (example)

  const handleUpvote = () => {
    if (upvoted) {
      setScore(score - 1);
      setUpvoted(false);
    } else {
      setScore(score + 1);
      setUpvoted(true);
      setDownvoted(false);
    }
  };

  const handleDownvote = () => {
    if (downvoted) {
      setScore(score + 1);
      setDownvoted(false);
    } else {
      setScore(score - 1);
      setDownvoted(true);
      setUpvoted(false);
    }
  };

  // Simulated comments data
  const simulatedComments = [
    {
      author: 'User1',
      timestamp: '2 hours ago',
      body: 'This is a simulated comment. It can contain any text.'
    },
    {
      author: 'User2',
      timestamp: '2 hours ago',
      body: 'This is a simulated comment. It can contain any text.'
    },
    {
      author: 'User3',
      timestamp: '2 hours ago',
      body: 'This is a simulated comment. It can contain any text.'
    }
    // Add more simulated comments as needed
  ];
  


  return (
    <div className="post">
      <div className="score-column">
        <div className="score">
          <FaAngleDoubleUp
            className={`vote-arrow ${upvoted ? 'upvoted' : ''}`}
            onClick={handleUpvote}
          />
          <div className="score-value">{score}</div>
          <FaAngleDoubleDown
            className={`vote-arrow ${downvoted ? 'downvoted' : ''}`}
            onClick={handleDownvote}
          />
        </div>
      </div>
      <div className="post-content">
        <h2 className="post-title">{title}</h2>
        {imageUrl && <img src={imageUrl} alt="Post" className="post-image" />}
        <div className="post-details">
          <span className="post-author">Posted by <span className='author'>{author}</span></span>
          <span className="post-timestamp">{timestamp}</span>
          <span className="post-comments" onClick={() => setShowComments(!showComments)}>
            <span className='icon'> <FaRegCommentAlt /> </span> {commentsCount}
          </span>
        </div>
        {showComments && <CommentsSection comments={simulatedComments} />}
      </div>
    </div>
  );
}

export default Post;