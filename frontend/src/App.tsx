import { FC, useState } from "react";
import "./App.css";
import Search from "./components/common/Search";
import { ISearchTypes } from "./types/searchTypes";

const App: FC = () => {
  const [search, setSearch] = useState<ISearchTypes[]>();
  const tempId = "tt0098904";

  const getMovieData = (id: string) => {
    const url = `https://api.themoviedb.org/3/find/${id}?external_source=imdb_id`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjYwYWM5ZDJjZjNmYzk0NWE5NTA1MzY4MGJlMjBkMyIsInN1YiI6IjY1ZGJmN2E2NDUzOWQwMDE4NmJlYzkyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7YH_BAUAjLkUmeGqWGzCihAiUOuH5eoSceQiaFY9tvQ",
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
