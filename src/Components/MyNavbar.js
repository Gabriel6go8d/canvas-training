import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import logo from '../logo.svg'
import '../App.css'

function MyNavbar(prop) {

    return (
        <div>
            <Navbar bg="dark" variant='dark' expand="lg">
            <Navbar.Brand style={{cursor: 'pointer'}}><img src={logo} className="App-logo" alt="logo"/>ACanvas</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" activeKey={prop.active}>
                        <Nav.Link eventKey={1} onClick={() => prop.action('explote')}>Explote</Nav.Link>
                        <Nav.Link eventKey={2} onClick={() => prop.action('run away')}>Run Away</Nav.Link>
                        <Nav.Link eventKey={3} onClick={() => prop.action('rain')}>Rain</Nav.Link>
                        <Nav.Link eventKey={4} onClick={() => prop.action('rain2')}>Splash Rain</Nav.Link>
                        <Nav.Link eventKey={5} onClick={() => prop.action('about')}>About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>           
        </div>
    )
}

export default MyNavbar
