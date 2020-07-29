import React from 'react';

class MemberDelete extends React.Component {

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
    console.log('clicked');
    var member = {
      name: this.state.name,
      age: parseInt(this.state.age)
    }
    this.props.handleDeleteMember(member);
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
        <button onClick={this.handleClick}>Delete Member</button>
      </div>
    )
  }
}

export default MemberDelete;