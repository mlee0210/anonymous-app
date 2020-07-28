import React from 'react';

const Member = ({ person }) => {
  // do some thing here;
  return (
    <div>
      <span> {person.name} </span>
      <span> {person.age} </span>
    </div>
  );
};

export default Member;