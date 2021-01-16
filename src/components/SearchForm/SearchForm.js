import React from 'react';

export default function SearchForm(props) {
  return (
    <div className="row justify-content-md-center my-2">
      <div className="col-5">
        <form>
          <input
            className="form-control"
            onChange={props.handleInputChange}
            value={props.search}
            type="text"
            name="search"
            placeholder="Search"
          />
        </form>
      </div>
    </div>
  )
}
