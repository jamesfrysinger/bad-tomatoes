export const fetchSearchDataService = async (
  query: string | null,
  page: number = 1,
  limit: number = 25
) => {
  if (!query?.trim()) return;
  return fetch(
    `//localhost:3001/api/titles?query=${query}&page=${page}&limit=${limit}`
  )
    .then((res) => {
      if (!res.ok) console.warn("Failed to fetch data from endpoint.");
      return res.json();
    })
    .catch((err) => console.warn(err));
};
