import React from 'react';

const NoMatch = ({ location }) => (
  <div>
    OOOPS!!
    <br />
    We can't seem to find the screen you're looking for:
    <br />
    {location.pathname}
    <br />
  </div>
);

export default NoMatch;
