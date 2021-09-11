import React, { useContext } from 'react';
import { SubredditContext } from '../../Context/SubredditContext';

const SubredditResults = () => {
  const { isLoading, postNum } = useContext(SubredditContext);
  return (
    <div className="post-results">
      <div className="loading-true">
        {isLoading && <h2 className="loading">Loading..</h2>}
      </div>
      <div className="show-results">
        {isLoading === false && (
          <h2 className="results">Number of top posts: {postNum}</h2>
        )}
      </div>
    </div>
  );
};

export default SubredditResults;
