import React from 'react';

const SubredditContext = React.createContext();

const SubredditContextProvider = ({ children }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const value = { handleSubmit };
  return (
    <SubredditContext.Provider value={value}>
      {children}
    </SubredditContext.Provider>
  );
};

export { SubredditContext, SubredditContextProvider };
