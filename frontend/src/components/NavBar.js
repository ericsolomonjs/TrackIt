export default function NavBar(props) {
  const user = props.user ? props.user : "";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Track-It
        </a>
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
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="main">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="schedule">
                My Schedule
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/create">
                Create
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/days">
                Workout
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="signin">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="signup">
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
