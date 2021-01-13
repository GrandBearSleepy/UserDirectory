import React from 'react';

export default function UserDisplay(props) {
  console.log(props.users)
  return (
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date Of Birth</th>
        </tr>
      </thead>
      <tbody>
        {
          props.users.map((user, index) => (
            <tr key={index}>
              <th> <img src={user.picture} alt={user.firstname }></img></th>
              <th>{user.firstname}</th>
              <th>{user.lastname}</th>
              <th>{user.dob}</th>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
