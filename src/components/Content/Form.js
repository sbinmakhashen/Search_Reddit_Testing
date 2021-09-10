import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import ContentTitle from './ContentTitle';
import ContnetTitle from './ContentTitle';
const Form = () => {
  const [subRed, setSubRed] = useState('javascript');

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
            className="sub-input"
            label="Enter a subreddit"
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
