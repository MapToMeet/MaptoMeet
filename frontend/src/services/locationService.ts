import axios from "axios";

export async function searchLocations(query: string) {
  const response = await axios.get(
    `http://127.0.0.1:8000/locations/search?q=${query}`,
  );

  return response.data;
}
