import React from 'react';
import axios from 'axios';

import MemberList from './MemberList';
import MemberAdd from './MemberAdd';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: []
    }

    this.addMember = this.addMember.bind(this);
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

  render() {
    return (
      <div>
        <h1>Member List</h1>
        <MemberAdd 
          handleAddMember={this.addMember}
        />
        <MemberList list={this.state.members} />
      </div>
    )
  }
}

export default App;