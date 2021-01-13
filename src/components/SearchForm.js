import React from 'react';

export default function SearchForm(props) {
  return (
    <div>
      <form>
        <input
          type="text"
          name="search"
          onchange={props.handleInputChange}
          value={props.name}
        />
      </form>
    </div>
  )
}
