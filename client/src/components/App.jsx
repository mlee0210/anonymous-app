import React from 'react';
import axios from 'axios';

import MemberList from './MemberList';
import MemberAdd from './MemberAdd';
import MemberDelete from './MemberDelete';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: []
    }

    this.addMember = this.addMember.bind(this);
    this.deleteMember = this.deleteMember.bind(this);
  }

  componentDidMount() {
    this.getAllMembers();
  }

  getAllMembers() {
    axios.get('/members')
      .then(results => this.setState({ members: results.data }))
      .catch(err => console.log('error fetching members:', err));
  }

  addMember(member) {
    axios.post('/members', member)
      .then(results => this.getAllMembers())
      .catch(err => console.log('error posting member:', err));
  }

  deleteMember(member) {
    axios.delete('/members', { data: { member } })
      .then(results => this.getAllMembers())
      .catch(err => console.log('error deleting member: ', err));
  }

  render() {
    return (
      <div>
        <h1>Member List</h1>
        <MemberAdd handleAddMember={this.addMember} />
        <MemberList list={this.state.members} />
        <MemberDelete handleDeleteMember={this.deleteMember} />
      </div>
    )
  }
}

export default App;