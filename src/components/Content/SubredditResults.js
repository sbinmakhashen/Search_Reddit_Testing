import React, { useContext } from 'react';
import { SubredditContext } from '../../Context/SubredditContext';

const SubredditResults = () => {
  const { isLoading, postNum } = useContext(SubredditContext);
  return (
    <div className="post-results">
      <div className="loading-true">
        {isLoading && <h1 className="loading">Loading..</h1>}
      </div>
      <div className="show-results">
        {isLoading === false && (
          <h1 className="results">Number of top posts: {postNum}</h1>
        )}
      </div>
    </div>
  );
};

export default SubredditResults;
