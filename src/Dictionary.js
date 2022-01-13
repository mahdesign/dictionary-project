import React, { useState } from "react";
import "./Dictionary.css";
export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyword}`);
  }
  function handelKeywordSearch(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handelKeywordSearch} />
      </form>
    </div>
  );
}
