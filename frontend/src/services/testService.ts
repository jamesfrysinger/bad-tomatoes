export const fetchTestData = async () => {
  try {
    const response = await fetch("//localhost:3001/api/hello");
    if (!response.ok) {
      throw new Error("Failed to fetch data from endpoint.");
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};
