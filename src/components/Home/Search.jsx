import React from "react";

import { BiSearchAlt } from "react-icons/bi";

const Search = ({ value, onSearch, onSubmit }) => {
  return (
    <>
      <form className="search">
        {/* <label htmlFor="search"> Search: </label> */}
        <input
          className="searchTerm"
          id="search"
          value={value}
          onChange={onSearch}
        />
        {/* <p> searching for {value}</p> */}
        <button className="searchButton" onClick={onSubmit}>
          <BiSearchAlt />
        </button>
      </form>
    </>
  );
};

export default Search;
