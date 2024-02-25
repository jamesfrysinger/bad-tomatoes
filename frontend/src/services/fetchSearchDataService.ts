export const fetchSearchDataService = async (
  query: string | null,
  page: number
) => {
  try {
    const response = await fetch(
      `//localhost:3001/api/titles?q=${query}&p=${page}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data from endpoint.");
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};
