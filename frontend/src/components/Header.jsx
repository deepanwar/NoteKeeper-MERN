import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <Navbar bg="primary" expand="lg" variant="dark">
            <Container>
                    <Navbar.Brand>
                        <Link to="/">Note Keeper</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Form inline>
                                <FormControl
                                    type="text"
                                    placeholder="Search..."
                                    className='mr-sm-2'
                                />
                            </Form>
                        </Nav>
                        <Nav>
                            <Nav.Link>
                                <Link to="/mynotes">My Notes</Link>
                            </Nav.Link>
                            <NavDropdown title="Deepak" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Log Out
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;