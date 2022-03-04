import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const useChangeRoute = (path) => {
  const history = useHistory();
  useEffect(() => {
    history.push(path, { from: "login" });
  }, []);
};

export default useChangeRoute;
