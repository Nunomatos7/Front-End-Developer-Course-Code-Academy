import React from 'react';
import './MainContent.css';
import Post from '../Post/Post.js';


function MainContent() {
    

  return (
    <div className="main-content">
        <div className="posts-column">
            {/* Posts */}
            {/* Example of how you can render posts */}
            <Post
            title="Ronaldo wins FIFA Ballon d'Or 2024 award!"
            author="Author"
            timestamp="2 hours ago"
            commentsCount={10}
            imageUrl="https://ogimg.infoglobo.com.br/in/11287606-940-a89/FT1086A/APTOPIX-Switzerland-Soccer-FIFA-World-Player-Award-GHH1FUL0S.1.jpg"
            />
            <Post
            title="OFICIAL: Messi paid to win Ballon d'Or 2023!"
            author="Author"
            timestamp="5 hours ago"
            commentsCount={1124}
            imageUrl="https://sc0.blr1.digitaloceanspaces.com/large/810804-njhiibbozi-1467125409.jpg"
            />
            <Post
            title="Benfica wins UEFA Champions League 2024!"
            author="Author"
            timestamp="50 mins ago"
            commentsCount={32453}
            imageUrl=""
            />
            {/* Add more posts as needed */}
        </div>
    </div>
  );
}

export default MainContent;
