// Import dependencies
import { CordraClient } from "@cnri/cordra-client";

// Import custom components
import SearchResultsTableRow from "../Components/SearchResultsTableRow";

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
  const client = new CordraClient(process.env.REACT_APP_CORDRA_URL, userToken);
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

// Function to update the database
export const updateDatabaseItemById = async (userToken, id, content) => {
  const client = new CordraClient(process.env.REACT_APP_CORDRA_URL, userToken);
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
export const searchDatabase = (
  userToken,
  searchQuery,
  filter,
  updateResults
) => {
  const client = new CordraClient(process.env.REACT_APP_CORDRA_URL, userToken);
  const searchQueryArr = new Array(searchQuery);
  const filteredSearchQuery = filter
    ? [searchQuery, `+type:${filter}`]
    : [searchQuery];
  const params = { filterQueries: filteredSearchQuery };

  client
    .search(`*:*`, params)
    .then((response) =>
      response.results.map((item) => {
        return <SearchResultsTableRow key={item.id} data={item} />;
      })
    )
    .then((results) => updateResults(results))
    .catch((err) => console.error(err));
};
