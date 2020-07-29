import React from 'react';

import Member from './Member';

const MemberList = props => (
  <div className="members">
    {props.list.map(
      person => <Member key={person.id} person={person} handleDeleteMember={this.handleDeleteMember} />
    )}
  </div>
);

export default MemberList;
