import React from "react";
import "./SearchBar.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSearchTerm,
  setSearchTerm,
  clearSearchTerm,
} from "./SearchSlice";
import clear from "../../assets/cancel-24.png";

function SearchBar() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  const onSearchHandler = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const onSearchClearHandler = () => {
    dispatch(clearSearchTerm());
  };

  return (
    <div className="search-container">
      <input
        type="text"
        id="form-control"
        value={searchTerm}
        onChange={onSearchHandler}
        placeholder="Search"
      />
      {searchTerm.length > 0 && (
        <img
          src={clear}
          id="clear-button"
          onClick={onSearchClearHandler}
          type="button"
          alt="clear icon"
        ></img>
      )}
    </div>
  );
}

export default SearchBar;
