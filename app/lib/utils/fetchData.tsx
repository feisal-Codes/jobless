import { fetchJobUrl } from "./urls";

const options: Object = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_SECRET_KEY,
  },
};

export const fetchJobsLists = async (query: string) => {
  const searchTerm = `query=${query} `;
  try {
    if (!searchTerm) {
      return;
    }
    const response = await fetch(fetchJobUrl + searchTerm, options);
    if (response.ok) {
      return response.json();
    }
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (e) {
    console.error("Error fetching data:", e);
    throw new Error(`API request failed:  ${e}`);
  }
};
