import React from "react";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="bookInput">Book:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="bookInput"
          type="text"
          className="form-control"
          placeholder="Search Book"
          id="bookInput"
        />
        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-success"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
