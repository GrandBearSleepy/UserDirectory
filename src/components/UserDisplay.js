import React from 'react';

export default function UserDisplay(props) {
  // console.log(props.users)
  return (
    <table className="table table-striped">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Picture</th>
          <th scope="col" ><button
            onClick={props.handleSortByFirstName}
            className="btn btn-info"
          >First Name</button></th>
          <th scope="col" ><button
            className="btn btn-info"
            onClick={props.handleSortByLastName}
          >Last Name</button></th>
          <th scope="col" >Email</th>
          <th scope="col" ><button
            onClick={props.handleSortByDob}
            className="btn btn-info"
          >Date Of Birth</button></th>
        </tr>
      </thead>
      <tbody>
        {
          props.users.map((user, index) => (
            <tr key={index}>
              <th> <img src={user.picture} alt={user.firstname}></img></th>
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
