import React, { useState } from 'react';
import './Post.css'; 
import { FaRegCommentAlt } from "react-icons/fa";
import { FaAngleDoubleUp, FaAngleDoubleDown } from 'react-icons/fa';
import CommentsSection from '../Comments/Comments.js';

function Post({ title, author, timestamp, commentsCount, imageUrl }) {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
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

  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);
  const [score, setScore] = useState(0); // Initial score value (example)

  const handleUpvote = () => {
    if (upvoted) {
      setScore(score - 1); // Decrease score if upvote is undone
    } else {
      setScore(score + 1); // Increase score if upvoted
    }
    setUpvoted(!upvoted); // Toggle upvoted state
    setDownvoted(false); // Reset downvoted state
  };

  const handleDownvote = () => {
    if (downvoted) {
      setScore(score + 1); // Increase score if downvote is undone
    } else {
      setScore(score - 1); // Decrease score if downvoted
    }
    setDownvoted(!downvoted); // Toggle downvoted state
    setUpvoted(false); // Reset upvoted state
  };

  return (
    <div className="post">
      <div className="score-column">
        {/* Score part */}
        <div className="score">
          <FaAngleDoubleUp
            className={`vote-arrow upvote ${upvoted ? 'upvoted' : ''}`}
            onClick={handleUpvote}
          />
          <div className="score-value" style={{ color: upvoted ? 'green' : downvoted ? 'red' : 'black' }}>
            {score}
          </div>
          <FaAngleDoubleDown
            className={`vote-arrow downvote ${downvoted ? 'downvoted' : ''}`}
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
          <span className="post-comments" onClick={toggleComments}>
            <span className='icon'> <FaRegCommentAlt /> </span> {commentsCount}
          </span>
        </div>
        {/* Comments section */}
        {showComments && <CommentsSection comments={simulatedComments} />}
      </div>
    </div>
  );
}

export default Post;