import { useContext } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import classes from "../styles/Account.module.css";
import Theme from "./Them/Them";

function Account() {
  const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
  return (
    <div className={classes.account}>

      {user ? (
        <>
          <Link to="/profile">
            {user?.photoURL ? (
              <Image
                style={{ height: "30px" }}
                roundedCircle
                src={user?.photoURL}
                title={user?.displayName}
              ></Image>
            ) : (
              <span
                className="material-icons-outlined"
                title={user?.displayName}
              >
                account_circle
              </span>
            )}
          </Link>

          <span>{user?.displayName}</span>
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={handleLogOut}
          >
            {" "}
            logout{" "}
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
      <Theme />
    </div>
    
  );
}
export default Account;