import React, { Component } from 'react';
import API from '../../utils/API';
import UserDisplay from '../UserDisplay/UserDisplay';
import SearchForm from '../SearchForm/SearchForm';

export default class UserContainer extends Component {
  //set up state
  state = {
    users: [],
    search: '',
    searchedUsers: [],
    sortOrder: false
  }

  componentDidMount() {
    API.getUsers()
      .then(res => {
        // console.log(res.data.results);
        this.setState({
          users: res.data.results.map(user => {
            return {
              picture: user.picture.thumbnail,
              firstname: user.name.first,
              lastname: user.name.last,
              email: user.email,
              dob: new Date(user.dob.date).toDateString()
            }
          }),
          searchedUsers: res.data.results.map(user => {
            return {
              picture: user.picture.thumbnail,
              firstname: user.name.first,
              lastname: user.name.last,
              email: user.email,
              dob: new Date(user.dob.date).toDateString()
            }
          })
        })
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    console.log(event.target.value)
    const newValue = event.target.value;
    this.setState({
      search: newValue
    });

    this.filterInputChange(newValue);
  };

  filterInputChange = (searchInput) => {
    // const searchInput = this.state.search.toLowerCase();
    this.setState({
      searchedUsers: this.state.users.filter(user => {
        return (
          user.firstname.toLowerCase().includes(searchInput) ||
          user.lastname.toLowerCase().includes(searchInput)
        )
      })
    })
  }

  handleSortByFirstName = () => {
    // sort array ascending or descending by first name
    if (!this.state.sortOrder) {
      this.setState({
        searchedUsers: this.state.searchedUsers.sort((a, b) => (a.firstname > b.firstname) ? 1 : -1),
        sortOrder: true
      });

    } else {
      this.setState({
        searchedUsers: this.state.searchedUsers.sort((a, b) => (a.firstname > b.firstname) ? -1 : 1),
        sortOrder: false
      });
    }
  }

  handleSortByLastName = () => {
    if (!this.state.sortOrder) {
      this.setState({
        searchedUsers: this.state.searchedUsers.sort((a, b) => (a.lastname > b.lastname) ? 1 : -1),
        sortOrder: true
      });

    } else {
      this.setState({
        searchedUsers: this.state.searchedUsers.sort((a, b) => (a.lastname > b.lastname) ? -1 : 1),
        sortOrder: false
      });

    }
  }

  handleSortByDob = () => {
    if (!this.state.sortOrder) {
      this.setState({
        searchedUsers: this.state.searchedUsers.sort((a, b) => (a.dob > b.lastname) ? 1 : -1),
        sortOrder: true
      });

    } else {
      this.setState({
        searchedUsers: this.state.searchedUsers.sort((a, b) => (a.dob > b.lastname) ? -1 : 1),
        sortOrder: false
      });

    }
  }

  render() {
    console.log(this.state.search);
    return (
      <div className="container">
        <div className="row">
          <SearchForm
            handleInputChange={this.handleInputChange}
          />
          <UserDisplay
            users={this.state.searchedUsers}
            handleSortByFirstName={this.handleSortByFirstName}
            handleSortByLastName={this.handleSortByLastName}
            handleSortByDob={this.handleSortByDob}
            handleSort={this.handleSort}
          />
        </div>
      </div>

    )
  }
}
