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
              picture: user.picture.thumbnail,
              firstname: user.name.first,
              lastname: user.name.last,
              email: user.email,
              dob: user.dob.date.slice(0, 9)
            }
          })
        })
      })
      .catch(err => console.log(err));
  };


  handleInputChange = event => {

    const name = event.target.name;
    const value = event.target.value;
    // this.setState({
    //   [name]: value
    // });
    this.setState({
      search: event.target.value
    });
    console.log(this.state.search)
    this.filterInputChange();
  };

  filterInputChange() {
    const searchInput = this.state.search.toLowerCase();
    this.setState({
      users: this.state.users.filter(user => {
        return (
          user.firstname.toLowerCase().includes(searchInput) ||
          user.lastname.toLowerCase().includes(searchInput)
        )
      })
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <SearchForm
            search={this.state.search}
            handleInputChange={this.handleInputChange}
          />
          <UserDisplay users={this.state.users} />
        </div>
      </div>

    )
  }
}
