import { FC, useState } from "react";
import "./App.css";
import Search from "./components/common/Search";
import { ISearchTypes } from "./types/searchTypes";
import { THEMOVIEDB_KEY } from "./config/credentials";

const App: FC = () => {
  const [search, setSearch] = useState<ISearchTypes[]>();
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

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.error("error:" + err));
  };

  getMovieData(tempId);

  return (
    <>
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
