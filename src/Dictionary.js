import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handelResponse(response) {
    setResults(response.data[0]);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handelResponse);
  }
  function handelSubmit(event) {
    event.preventDefault();
    search();
  }
  function handelKeywordSearch(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handelSubmit}>
            <input
              type="search"
              onChange={handelKeywordSearch}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">suggested words:sunset,wine,yoga,plants..</div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();

    return "LOading...";
  }
}
