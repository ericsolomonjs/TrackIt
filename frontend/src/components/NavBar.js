import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NavBar(props) {
  const loggedIn = props.loggedIn;
  const setLoggedIn = props.setLoggedIn;
  const navigate = useNavigate();

  const handleLogout = () => {
    const ops = {
      method: "GET",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
    };

    fetch("http://localhost:8080/user/logout", ops)
      .then((res) => {
        setLoggedIn(false);
        navigate("/");
      })
      .catch((err) => alert(err));
  };

  const authenticateAdmin = () => {
    const pw = window.prompt("Please enter admin password");
    if (pw === "admin") {
      console.log("here");
      window.location = "/admin";
    }
  };

  let button;
  if (loggedIn) {
    button = (
      <Link
        onClick={handleLogout}
        aria-current="page"
        className="nav-link"
        to="/"
      >
        Logout
      </Link>
    );
  } else {
    button = (
      <Link aria-current="page" className="nav-link" to="signin">
        Login
      </Link>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {loggedIn ? (
          <Link to="/home" className="navbar-brand">
            Track-it
          </Link>
        ) : (
          <Link to="/" className="navbar-brand">
            Track-it
          </Link>
        )}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {loggedIn && (
              <>
                <li className="nav-item">
                  <Link to="schedule" className="nav-link">
                    Schedule
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="create">
                    Create Workouts
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item"></li>
          <li className="nav-item user-buttons">
            {!loggedIn && (
              <>
                <Link className="nav-link" to="signup">
                  Register
                </Link>
                <Link onClick={authenticateAdmin} className="nav-link">
                  Admin
                </Link>
              </>
            )}
            <Link onClick={authenticateAdmin} className="nav-link">
              Admin
            </Link>
            {button}
          </li>
        </ul>
      </div>
    </nav>
  );
}
