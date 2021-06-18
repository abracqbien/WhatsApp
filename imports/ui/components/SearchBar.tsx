import React from "react"

// Icons
import FontAwesome from "react-fontawesome"

// Styles
import StyledSearchbar from "../elements/StyledSearchbar"

const SearchBar = (props:any):JSX.Element => {
  return (
    <StyledSearchbar>
      <label className="searchbar--label">
        <FontAwesome
          className="searchbar--icon"
          name="search"
        />
        <input
          placeholder="Rechercher ou Démarrer une discussion"
          className="searchbar--input"
          type="text"
        />
      </label>
    </StyledSearchbar>
  )
}

export default SearchBar