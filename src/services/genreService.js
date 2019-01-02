import http from "./httpService";
import { apiUrl } from "../config.json";

export function getGenres() {
  const result = http.get("http://localhost:3000/api/genres");
  console.log("here ", result);
  return result;
}
