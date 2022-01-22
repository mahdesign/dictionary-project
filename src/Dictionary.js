import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handelDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handelPexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handelDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f917000010000016a7692edbccc444b9a92de036fbdb19a";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handelPexelsResponse);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "LOading...";
  }
}
