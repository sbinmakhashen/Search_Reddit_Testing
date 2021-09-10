import React from 'react';

const SubredditContext = React.createContext();

const SubredditContextProvider = (props) => {
  return (
    <SubredditContext.Provider value="salem">
      {props.children}
    </SubredditContext.Provider>
  );
};

export { SubredditContext, SubredditContextProvider };
