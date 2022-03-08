import { CordraClient } from "@cnri/cordra-client";
import { useHistory } from "react-router-dom";
// Function to check whether the user is logged in
export const isLoggedIn = () => {
  const user = sessionStorage.getItem("user");
  return user ? true : false;
};

// Function to fetch the user auth token
export const getUserToken = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  if (user?.access_token) {
    const cordraUserObject = {
      username: user.username,
      token: user.access_token,
    };
    return cordraUserObject;
  } else {
    return null;
  }
};

// Function to get an item from the DB by ID
export const getDatabaseItemById = async (userToken, id) => {
  const client = new CordraClient("https://localhost:8443", userToken);
  const params = { filterQueries: [`id:${id}`] };
  let results;
  await client
    .search("type:Document", params)
    .then((response) => {
      console.log(response.results);
      results = response.results[0];
    })
    .catch((error) => {
      return error;
    });

  return results;
};
