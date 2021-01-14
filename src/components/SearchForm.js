import React from 'react';

export default function SearchForm(props) {
  return (
    <div className="row justify-content-md-center my-2">
      <div className="col-5">
        <form>
        <input
          className="form-control"
          type="text"
          name="search"
          onChange={props.handleInputChange}
          value={props.search}
          placeholder="Search"
        />
      </form>
      </div>
    </div>

  )
}
