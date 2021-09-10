import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import ContnetTitle from './ContentTitle';
const Form = () => {
  const [subRed, setSubRed] = useState('');

  const handleOnChange = () => {
    const input = document.querySelector('input[name="subRed"]');
    setSubRed(input.value);
  };

  return (
    <>
      <ContnetTitle />
      <form>
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
          <Button variant="contained" color="primary" className="btn">
            Search
          </Button>
        </div>
      </form>
    </>
  );
};

export default Form;
