import React, { useState } from 'react';

const SubredditContext = React.createContext();
const SubredditContextProvider = ({ children }) => {
  const [subReddit, setSubReddit] = useState('');
  const [postNum, setPostNum] = useState(0);
  const [isLoading, setIsLoading] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const url = `https://www.reddit.com/r/${subReddit}/top.json`;
    const response = await fetch(url);
    const { data } = await response.json();
    setPostNum(data.children.length);
    setIsLoading(false);
  };

  const value = { handleSubmit, subReddit, setSubReddit, postNum, isLoading };

  return (
    <SubredditContext.Provider value={value}>
      {children}
    </SubredditContext.Provider>
  );
};

export { SubredditContext, SubredditContextProvider };
