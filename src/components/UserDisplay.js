import React from 'react';


export default function UserDisplay(props) {
  // console.log(props.users)
  return (
    <table className="table table-striped">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Picture</th>
          <th scope="col" onClick={props.handleSortByFirstName}>First Name</th>
          <th scope="col" onClick={props.handleSortByLastName}>Last Name</th>
          <th scope="col" >Email</th>
          <th scope="col">Date Of Birth</th>
        </tr>
      </thead>
      <tbody>
        {
          props.users.map((user, index) => (
            <tr key={index}>
              <th> <img src={user.picture} alt={user.firstname }></img></th>
              <th>{user.firstname}</th>
              <th>{user.lastname}</th>
              <th>{user.email}</th>
              <th>{user.dob}</th>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
