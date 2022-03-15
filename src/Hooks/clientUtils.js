import { CordraClient } from "@cnri/cordra-client";
import { useHistory } from "react-router-dom";
import { RiFileCopyLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import AuthorTag from "../Components/AuthorTag";
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
  const client = new CordraClient("https://localhost:8443", userToken);

  const params = { filterQueries: [searchQuery] };
  client
    .search("*:*", params)
    .then((response) =>
      response.results.map((item) => {
        console.log(response.results);
        return (
          <tr key={item.id} className="text-center">
            <td>{item.id}</td>
            <td>{item.content.recipeName}</td>
            <td>{item.content.difficulty}</td>
            <td>
              {(() => {
                const date = new Date(item.metadata.createdOn);
                return date.toLocaleString();
              })()}
            </td>
            <td>{item.content.quantity}</td>
            <td>
              <AuthorTag name={item.content?.authors} />
            </td>
            <td>
              <Link to={`/copy-recipe/${item.id}`} className="">
                <div className="h-8 w-8 ml-3 text-white bg-MatOrange rounded flex justify-center items-center">
                  <RiFileCopyLine />
                </div>
              </Link>
            </td>
          </tr>
        );
      })
    ).then(results => updateResults(results))
};
