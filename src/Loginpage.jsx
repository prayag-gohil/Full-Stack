import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
export default function Loginpage() {
  return (
    <>
    
     <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">My Website</Navbar.Brand>

          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Card className="shadow p-4" style={{ width: "400px" }}>
          <h2 className="text-center text-primary mb-4">Login Page</h2>

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password" 
                placeholder="Enter Password"/>
            </Form.Group>

            <div className="d-grid">
              <Button variant="warning" size="lg">
                Login
              </Button>
            </div>
          </Form>
        </Card>
      </Container>
     {/* 
    <ul  role="list" class="list-disc marker:text-sky-400 ...">
  <li class="font-sans">5 cups chopped Porcini mushrooms</li>
  <li class="text-xl">1/2 cup of olive oil</li>
  <li class="font-stretch-extra-expanded">3lb of celery</li>
</ul>

<div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
  <img class="size-12 shrink-0" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="ChitChat Logo" />
  <div>
    <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>
    <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>
  </div>
</div>

<button class="btn-primary">Save Button </button>
<p class="lowercase center">Hello, World!</p>
   */} </>
  );
}