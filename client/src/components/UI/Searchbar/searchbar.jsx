import React, { useState } from "react";
import { Search } from "@material-ui/icons";
import { useSelector } from "react-redux";
import "./searchbar.scss";
import { useHistory } from "react-router-dom";

function SearchBar({ placeholder }) {
  const [filteredData, setFilteredData] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const history = useHistory();
  const searchData = useSelector((state) => state.articles.searchData);

  const filterHandler = (event) => {
    setSearchValue(event.target.value);
    const searchWord = event.target.value.toLowerCase();
    const newFilter = searchData.filter((value) => {
      return value.name.toLowerCase().includes(searchWord);
    });
    if (searchWord === "") {
      setFilteredData(false);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div className="searchDiv" id="searchBarId">
      <div className="searchInputs">
        <input
          value={searchValue}
          type="text"
          placeholder={placeholder}
          onChange={filterHandler}
          className="search"
        />
        <div className="searchIcon">
          <Search />
        </div>
      </div>
      {filteredData && (
        <div className="dataResult">
          {filteredData.slice(0, 10).map((value, key) => {
            return (
              <div
                className="dataItem"
                onClick={() => {
                  setFilteredData(false);
                  setSearchValue("");
                  history.push(`/shop/articles/${value.id}`);
                }}
              >
                <p>{value.name}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
