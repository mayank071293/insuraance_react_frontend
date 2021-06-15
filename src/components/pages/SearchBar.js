import React from "react";
const SearchBar = (props) => {
  //onSubmit={(e) => props.onClick(e)}
  return (
    <form>
      <div className="input-group">
        <input
          type="text"
          className="form-control mr-2"
          name="id"
          placeholder="Identifier"
          value={props.id}
          onChange={(e) => props.onInputChange(e)}
        />
        <select
          className="form-select mr-2"
          id="inputGroupSelect04"
          name="searchType"
          value={props.searchType}
          onChange={(e) => props.onInputChange(e)}
        >
          <option value="customer_id">Customer</option>
          <option value="policy_id">Policy</option>
        </select>
        <button
          className="btn btn-primary mr-1"
          type="button"
          onClick={(e) => props.onClick(e)}
        >
          Search
        </button>
        <button
          className="btn btn-danger"
          type="button"
          onClick={(e) => props.onClear(e)}
        >
          Clear
        </button>
      </div>
    </form>
  );
};
export default SearchBar;
