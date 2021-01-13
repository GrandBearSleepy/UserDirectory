import React, { Component } from 'react';
import API from '../utils/API';
import UserDisplay from './UserDisplay';
import SearchForm from './SearchForm';

export default class UserContainer extends Component {
  //set up state
  state = {
    users: [],
    search: ''
  }

  componentDidMount() {
    API.getUsers()
      .then(res => {
        console.log(res.data.results);
        this.setState({
          users: res.data.results.map(user => {
            return {
              picture: user.picture.medium,
              firstname: user.name.first,
              lastname: user.name.last,
              email: user.email,
              dob: user.dob.age
            }
          })
        })
      })
      .catch(err => console.log(err));
  };


  handleSearchUser() {
    const search = this.state.search.toLowerCase();
    return this.state.users.filter(user => {
      return (
        user.first.toLowerCase().includes(search) ||
        user.last.toLowerCase().includes(search)
      );
    });
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value })
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.searchUser(this.state.search);
  // };



  render() {
    return (
      <div>
        <SearchForm handleInputChange={this.handleInputChange} />
        <UserDisplay users={this.state.users} />
      </div>
    )
  }
}
