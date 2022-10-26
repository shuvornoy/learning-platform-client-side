import { useContext } from "react";
import { Link, Route,  } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";


function PublicRoute({ component: Component, ...rest }) {
  const { user } = useContext(AuthContext);

  return !user ? (
    <Route {...rest}>{(props) => <Component {...props} />}</Route>
  ) : (
    <Link to="/" />
  );
}
export default PublicRoute;
