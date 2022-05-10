import { CordraClient } from "@cnri/cordra-client";
import { useHistory } from "react-router-dom";
import { browserHistory } from "react-router";
import { RiFileCopyLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import AuthorTag from "../Components/AuthorTag";
import SearchResultsTableRow from "../Components/SearchResultsTableRow";
import { Redirect } from "react-router-dom";
import useChangeRoute from "./ChangeRoute";
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
    const client = new CordraClient("https://localhost:8443", cordraUserObject);
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
      results = response.results[0];
    })
    .catch((error) => {
      return error;
    });

  return results;
};

export const updateDatabaseItemById = async (userToken, id, content) => {
  const client = new CordraClient("https://localhost:8443", userToken);
  const cordraUpdateObject = {
    id: id,
    content: content,
  };
  client.update(cordraUpdateObject);
  let results;
  await client.update(cordraUpdateObject).catch((error) => {
    return error;
  });

  return results;
};

// Function to search database

export const searchDatabase = (userToken, searchQuery, updateResults) => {
  // const history = useHistory();
  const client = new CordraClient("https://localhost:8443", userToken);

  (async () =>
    await client
      .getAuthenticationStatus()
      .then((response) => console.log(response, 7))
      .catch(async (error) => {
        console.error("Invalid Token, please login", error);
        await client.signOut();
      }))();

  const params = { filterQueries: [searchQuery] };
  client
    .search("*:*", params)
    .then((response) =>
      response.results.map((item) => {
          console.log(item)
        return <SearchResultsTableRow data={item} />;
      })
    )
    .then((results) => updateResults(results))
    .catch((error) => {
      if (error === "Invalid token") {
        alert(error);
      }
    });
};
