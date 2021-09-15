import React, { useContext } from 'react';
import { TextField, Button } from '@material-ui/core';
import ContnetTitle from './ContentTitle';
import SubContext from '../../Context/SubContext';
import SubredditResults from './SubredditResults';

const Form = () => {
  const { handleSubmit, subReddit, setSubReddit } = useContext(SubContext);
  // const handleOnChange = () => {
  //   const input = document.querySelector('input[name="subRed"]');
  //   setSubReddit(input.value);
  // };

  return (
    <>
      <ContnetTitle />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="sub-label" htmlFor="sub-reddit">
            r/
          </label>
          <TextField
            id="filled-basic"
            name="subRed"
            className="sub-input"
            label="Enter a subreddit"
            value={subReddit}
            onChange={(event) => setSubReddit(event.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="btn"
          >
            Search
          </Button>
        </div>
      </form>
      <SubredditResults />
    </>
  );
};

export default Form;
