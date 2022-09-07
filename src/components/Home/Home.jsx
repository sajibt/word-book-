import axios from "axios";
import React, { useEffect, useState } from "react";
import Bars from "./Bars.tsx";
import "./Home.scss";
import useFetchApi from "./Hooks/useFetchApi";
import Itemlist from "./Itemlist";
import Search from "./Search";

// const options = {
//   method: "GET",
//   url: "https://random-words5.p.rapidapi.com/getMultipleRandom",
//   params: { count: "5" },
//   headers: {
//     "X-RapidAPI-Key": "206d99a898msh16f2b83eae56533p1d537ejsn76140f3352c4",
//     "X-RapidAPI-Host": "random-words5.p.rapidapi.com",
//   },
// };
// const url = "https://ghibliapi.herokuapp.com/films";

const Home = () => {
  const [query, setQuery] = useState("hello");
  //custom hooks
  const [{ data, isLoading, isError }, setUrl] = useFetchApi(
    [],
    "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
  );

  function onSearch(event) {
    setQuery(event.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    setUrl(`   
 https://api.dictionaryapi.dev/api/v2/entries/en/${query}   
    `);
  }

  //in form use prevntDfault

  return (
    <div>
      {isError && <p> Something went wrong </p>}
      <Search onSearch={onSearch} value={query} onSubmit={onSubmit} />
      {isLoading ? (
        <div className="bar-icon">
          <Bars />
          <p className="loading"> Loading...</p>
        </div>
      ) : (
        <Itemlist data={data} />
      )}
    </div>
  );
};

export default Home;
