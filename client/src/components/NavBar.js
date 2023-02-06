import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar(props) {
  
  const user = props.user ? props.user : ""

  return (
    <>
      <Navbar variant="dark" className="btn btn-secondary">
        <Container>
          <Navbar.Brand href="#home">Track-It</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand>Track your fitness</Navbar.Brand>
        </Container>
      </Navbar>
      <br />

      {user ? (
        <Container>
          <Navbar variant="dark" className="btn btn-secondary">
            <Container>
              <Navbar.Brand >Logged in as {user.firstName}</Navbar.Brand>
            </Container>
          </Navbar>
          <h1>|</h1>
          <Navbar variant="dark" className="btn btn-secondary">
            <Container>
              <Navbar.Brand href="#logout">Log Out</Navbar.Brand>
            </Container>
          </Navbar>
        </Container>
      ) : (
        <Container>
          <Navbar variant="dark" className="btn btn-secondary">
            <Container>
              <Navbar.Brand href="#signup">Sign up</Navbar.Brand>
            </Container>
          </Navbar>
          <h1>|</h1>
          <Navbar variant="dark" className="btn btn-secondary">
            <Container>
              <Navbar.Brand href="#login">Log In</Navbar.Brand>
            </Container>
          </Navbar>
        </Container>
      )}

      <br />

    </>
  );
}