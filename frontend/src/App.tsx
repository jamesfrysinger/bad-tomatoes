import { FC, useEffect, useState } from "react";
import "./App.css";
import Search from "./components/common/Search";
import { ISearchTypes } from "./types/searchTypes";
import { THEMOVIEDB_KEY } from "./config/credentials";

const App: FC = () => {
  const [search, setSearch] = useState<ISearchTypes[]>();
  const [data, setData] = useState();
  const tempId = "tt0098904";

  const getMovieData = (id: string) => {
    const url = `https://api.themoviedb.org/3/find/${id}?external_source=imdb_id`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: THEMOVIEDB_KEY,
      },
    };

    return fetch(url, options)
      .then((res) => res.json())
      .then((json) => json)
      .catch((err) => console.error("error:" + err));
  };

  console.log(getMovieData(tempId));

  return (
    <>
      <div>{false}</div>
      <Search setSearch={setSearch} />
      <div className="">
        {search?.map((item, indx) => {
          return (
            <div key={indx}>
              {item.primaryTitle},
              <img src={``} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
