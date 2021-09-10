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
          <TextField id="filled-basic sub-input" label="<subreddit>" />
          <Button variant="contained" color="primary">
            Search
          </Button>
        </div>
      </form>
    </>
  );
};

export default Form;