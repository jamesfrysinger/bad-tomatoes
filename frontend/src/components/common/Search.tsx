import { Dispatch, FC, useEffect, useState } from "react";
import { ISearchTypes } from "../../types/searchTypes";
import { FormControl, TextField } from "@mui/material";
import { setUrlParam } from "../../helpers/searchHelpers";
import { fetchSearchDataService } from "../../services/fetchSearchDataService";

interface ISearch {
  setSearch: Dispatch<React.SetStateAction<ISearchTypes[] | undefined>>;
}
const Search: FC<ISearch> = ({ setSearch }) => {
  // const queryParams = new URLSearchParams(window.location.search);
  // const query = queryParams.get("q");

  const [searchQuery, setSearchQuery] = useState<string>("");

  const fetchSearchData = async (query: string) => {
    try {
      const data = await fetchSearchDataService(query, 1);
      setSearch(data);
    } catch (error) {
      console.warn(error);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchQuery(e.target.value);

  useEffect(() => {
    const debounceSearch = setTimeout(() => {
      setUrlParam("q", searchQuery);
      fetchSearchData(searchQuery);
    }, 500);

    return () => clearTimeout(debounceSearch);
  }, [searchQuery]);

  return (
    <div className="m-10">
      <FormControl fullWidth={true}>
        <TextField id="search" variant="standard" onChange={handleOnChange} />
      </FormControl>
    </div>
  );
};
export default Search;
