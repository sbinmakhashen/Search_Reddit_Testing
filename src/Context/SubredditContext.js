import React from 'react';

const SubredditContext = React.createContext();

const SubredditContextProvider = (props) => {
  return (
    <SubredditContext.Provider value={null}>
      {props.children}
    </SubredditContext.Provider>
  );
};

export { SubredditContext, SubredditContextProvider };
