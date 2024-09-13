import React from 'react';
import withStyle from '../hocs/withStyle';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
    </div>
  );
};

export default withStyle(HomePage);
