import React from 'react';
import { Link } from 'react-router-dom';

const OtherPage = () => {
  return (
    <div>
      I'm Some other Page!
      <Link to="/">Go Back home</Link>
    </div>
  );
};

export default OtherPage;
