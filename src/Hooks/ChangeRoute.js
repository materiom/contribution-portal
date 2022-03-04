// Import dependencies
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

// Custom hook to change change route
const useChangeRoute = (path) => {
  const history = useHistory();
  useEffect(() => {
    history.push(path, { from: "login" });
  }, []);
};

export default useChangeRoute;
