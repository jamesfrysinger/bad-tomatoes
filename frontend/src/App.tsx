import { FC, useState } from "react";
import "./App.css";
import Search from "./components/common/Search";
import { ISearchTypes } from "./types/searchTypes";

const App: FC = () => {
  const [search, setSearch] = useState<ISearchTypes[]>();

  return (
    <>
      <Search setSearch={setSearch} />
      <div className="">{search?.map((item) => item.primaryTitle)}</div>
    </>
  );
};

export default App;
