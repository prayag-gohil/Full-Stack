import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function StudentRegistration() {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Student Portal</Navbar.Brand>

          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Courses</Nav.Link>
            <Nav.Link href="#">Register</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Registration Form */}
      <Container className="my-5">
        <Card className="shadow-lg p-4">
          <Card.Title className="text-center text-primary mb-4">
            Student Registration Form
          </Card.Title>

          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter First Name"
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Last Name"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter Mobile Number"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Course</Form.Label>
              <Form.Select>
                <option>Select Course</option>
                <option>BCA</option>
                <option>B.Sc IT</option>
                <option>MCA</option>
                <option>M.Sc IT</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>

              <div>
                <Form.Check
                  inline
                  label="Male"
                  type="radio"
                  name="gender"
                />

                <Form.Check
                  inline
                  label="Female"
                  type="radio"
                  name="gender"
                />

                <Form.Check
                  inline
                  label="Other"
                  type="radio"
                  name="gender"
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter Address"
              />
            </Form.Group>

            <div className="d-flex justify-content-center gap-3">
              <Button variant="success">
                Register
              </Button>
            </div>
          </Form>
        </Card>
      </Container>
    </>
  );
}