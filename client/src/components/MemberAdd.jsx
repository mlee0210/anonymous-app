import React from 'react';

class MemberAdd extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleAgeChange(event) {
    this.setState({
      age: event.target.value
    })
  }

  handleClick() {
    var member = {
      name: this.state.name,
      age: parseInt(this.state.age)
    }
    this.props.handleAddMember(member);
  }

  render() {
    return (
      <div>
        <input 
          type="text" 
          value={this.state.name} 
          onChange={this.handleNameChange}
        />
        <input 
          type="text" 
          value={this.state.age} 
          onChange={this.handleAgeChange}
        />
        <button onClick={this.handleClick}>Add Member</button>
      </div>
    )
  }
}

export default MemberAdd;