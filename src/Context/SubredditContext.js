import React, { useState, useRef } from 'react';
import SubContext from './SubContext';

export const SubredditContextProvider = ({ children }) => {
  const [subReddit, setSubReddit] = useState(null);
  const [postNum, setPostNum] = useState(0);
  const [isLoading, setIsLoading] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const resultPosts = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (subReddit === null || subReddit === undefined) {
      setIsEmpty(true);
      resultPosts.current.hidden = true;
      setIsLoading(false);
    } else {
      setIsLoading(true);
      resultPosts.current.hidden = false;
      setIsEmpty(false);
      const url = `https://www.reddit.com/r/${subReddit}/top.json`;
      const response = await fetch(url);
      const { data } = await response.json();
      setPostNum(data.children.length);
      setIsLoading(false);
    }
  };

  const value = {
    handleSubmit,
    subReddit,
    setSubReddit,
    postNum,
    isLoading,
    isEmpty,
    resultPosts,
  };

  return <SubContext.Provider value={value}>{children}</SubContext.Provider>;
};
