import React, { useContext } from 'react';
import { SubredditContext } from '../../Context/SubredditContext';

const SubredditResults = () => {
  const { isLoading, postNum, isEmpty, resultPosts } =
    useContext(SubredditContext);
  console.log(isEmpty);
  return (
    <div className="post-results">
      <div className="loading-true">
        {isLoading && <h1 className="loading">Loading..</h1>}
      </div>
      <div className="show-results" ref={resultPosts}>
        {isLoading === false && (
          <h1 className="results">Number of top posts: {postNum}</h1>
        )}
      </div>
      <div className="empty-str">
        {isEmpty && <p>Please enter a subreddit please!!</p>}
      </div>
    </div>
  );
};

export default SubredditResults;
