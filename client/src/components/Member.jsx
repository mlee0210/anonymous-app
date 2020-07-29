import React from 'react';

const Member = ({ person }) => {
  // do some thing here;
  return (
    <div>
      <span> {person.name} </span>
      <span> {person.age} </span>
      <button onclick={this.handleClick}>Delete</button>
    </div>
  );
};

export default Member;