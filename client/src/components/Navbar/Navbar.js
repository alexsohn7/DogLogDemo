import React, {Component} from "react";
import { Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap'
import "./Navbar.css";
class NavBar extends Component {
    render(){
        return(
            <div>
    <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
        {/*<a href="#brand">doglog</a>*/}
              <img width="150px" height="150px" src="images/logo.png" alt="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse >
            <Nav>
              <NavItem eventKey={1} href="/">
                about
              </NavItem>
              <NavItem eventKey={2} href="/dogsearch">
                search
              </NavItem>
              <NavItem eventKey={3} href="/gallery">
                gallery
              </NavItem>
              <NavItem eventKey={4} href="/map">
                map
              </NavItem>
              <NavDropdown eventKey={5} title="admin" id="basic-nav-dropdown">
                <NavItem eventKey={5.1} href="/Login">
                  login
                </NavItem>
                <NavItem eventKey={5.2} href="/signup">
                  sign in
                </NavItem>
                <NavItem eventKey={5.3} href="/animals">
                  administrator
                </NavItem>
              </NavDropdown>
              <NavItem eventKey={6} href="/contact">
                contact us
              </NavItem>
            </Nav>
            <Nav pullRight />
          </Navbar.Collapse>
        </Navbar>
        
    </div>
        )
    }
}
export default NavBar;