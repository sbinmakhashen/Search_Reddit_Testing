import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import ContentTitle from './ContentTitle';
import ContnetTitle from './ContentTitle';
const Form = () => {
  const [subRed, setSubRed] = useState('javascript');

  return (
    <>
      <ContnetTitle />
      <form id="form-group">
        <label htmlFor="sub-reddit">
          r/
          <TextField id="filled-basic" label="<subreddit>" />
        </label>
        <Button variant="contained" color="primary">
          Search
        </Button>
      </form>
    </>
  );
};

export default Form;
