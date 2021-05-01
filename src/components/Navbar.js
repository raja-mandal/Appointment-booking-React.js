import React, { useState } from 'react'
import { Card, Alert, Button, Navbar, Nav, Form, FormControl, NavDropdown, DropdownButton, Dropdown } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import Avatar from 'react-avatar';

export default function NavbarMenu() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to log out')
        }
    }

    return (
        <>
            {error && <Alert variant="danger">{error}</Alert>}
            {/* <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email:</strong>{currentUser.email}
                    <Link to="/update-profile" className="btn btn-primary w-100" mt-3>Update Profile</Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </div> */}




            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Navbar.Brand style={{ fontSize: 25 }}>Appointment-Booking</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        {/* <Nav.Link className="d-flex align-items-center text-light">
                            Add seller list &nbsp;<span class="badge badge-pill badge-warning">0</span>
                        </Nav.Link> */}

                        <Nav.Link className="d-flex align-items-center">
                            <DropdownButton id="dropdown-basic-button" variant="light" title={currentUser.email}>
                                <Dropdown.Item style={{ color: 'white' }}><Link to="/update-profile" className="text-decoration-none text-dark" >Update Profile</Link></Dropdown.Item>
                                <Dropdown.Item onClick={handleLogout}>Log Out</Dropdown.Item>
                            </DropdownButton>
                        </Nav.Link>
                        <Nav.Link className="d-flex align-items-center" ><Avatar name={currentUser.email} size="45" round={true} textSizeRatio={3} /></Nav.Link>
                        {/*                         
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
