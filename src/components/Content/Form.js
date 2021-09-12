import React, { useContext } from 'react';
import { TextField, Button } from '@material-ui/core';
import ContnetTitle from './ContentTitle';
import { SubredditContext } from '../../Context/SubredditContext';
import SubredditResults from './SubredditResults';

const Form = () => {
  const { handleSubmit, subReddit, setSubReddit } =
    useContext(SubredditContext);

  const handleOnChange = () => {
    const input = document.querySelector('input[name="subRed"]');
    setSubReddit(input.value);
  };

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
            onChange={handleOnChange}
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
