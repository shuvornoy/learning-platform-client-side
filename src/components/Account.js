import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from "../styles/Account.module.css";

function Account() {
  const { currentUser, logout } = useAuth();
  return (
    <div className={classes.account}>
      {currentUser ? (
        <>
          <Link to="/profile">
            {currentUser?.photoURL ? (
              <Image
                style={{ height: "30px" }}
                roundedCircle
                src={currentUser?.photoURL}
                title={currentUser?.displayName}
              ></Image>
            ) : (
              <span
                className="material-icons-outlined"
                title={currentUser?.displayName}
              >
                account_circle
              </span>
            )}
          </Link>

          <span>{currentUser?.displayName}</span>
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={logout}
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
    </div>
  );
}
export default Account;