import { Dispatch, FC, useEffect, useState } from "react";
import { ISearchTypes } from "../../types/searchTypes";
import { FormControl, TextField } from "@mui/material";
import { setUrlParam } from "../../helpers/searchHelpers";
import { fetchSearchDataService } from "../../services/fetchSearchDataService";

interface ISearch {
  setSearch: Dispatch<React.SetStateAction<ISearchTypes[] | undefined>>;
}
const Search: FC<ISearch> = ({ setSearch }) => {
  const queryParams = new URLSearchParams(window.location.search);
  const urlParams = queryParams.get("q") as string;

  const [searchQuery, setSearchQuery] = useState<string>(urlParams);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchQuery(e.target.value);

  useEffect(() => {
    const debounceSearch = setTimeout(() => {
      setUrlParam("q", searchQuery);

      if (!searchQuery.trim()) {
        setSearch(undefined);
        return;
      }

      fetchSearchDataService(searchQuery, 1, 10)
        .then((res) => {
          setSearch(res);
        })
        .catch((err) => {
          console.warn(err);
        });
    }, 300);

    return () => clearTimeout(debounceSearch);
  }, [searchQuery]);

  return (
    <div className="m-10">
      <FormControl fullWidth={true}>
        <TextField
          id="search"
          variant="standard"
          defaultValue={urlParams ?? ""}
          onChange={handleOnChange}
        />
      </FormControl>
    </div>
  );
};
export default Search;
