import React, { useState, useContext } from 'react';
import { TextField, Button } from '@material-ui/core';
import ContnetTitle from './ContentTitle';
import { SubredditContext } from '../../Context/SubredditContext';
const Form = () => {
  const [subRed, setSubRed] = useState('');

  const { handleSubmit } = useContext(SubredditContext);
  const handleOnChange = () => {
    const input = document.querySelector('input[name="subRed"]');
    setSubRed(input.value);
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
            value={subRed}
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
    </>
  );
};

export default Form;
