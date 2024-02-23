// Subreddits.js

import React, {useState} from 'react';
import './Subreddits.css'; // Import your CSS file for styling if needed

function Subreddits() {
    const [active, setActive] = useState(0);

    const handleItemClick = (index) => {
        setActive(index);
      };

  return (
    <div className="subreddits">
      <h2>Subreddits</h2>
      <ul className="list">
        <li className={active === 0 ? 'active' : ''} onClick={() => handleItemClick(0)}>Subreddit 1</li>
        <li className={active === 1 ? 'active' : ''} onClick={() => handleItemClick(1)}>Subreddit 2</li>
        <li className={active === 2 ? 'active' : ''} onClick={() => handleItemClick(2)}>Subreddit 3</li>
      </ul>
    </div>
  );
}

export default Subreddits;
