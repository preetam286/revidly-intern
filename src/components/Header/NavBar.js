import React from 'react';
import './NavBar.css';
import {Navbar, Nav} from 'react-bootstrap';
//import Nav from 'react-bootstrap/Nav';
import logo from './logo.png'

    function NavBar() {
        return (
          <div className="NavBar">

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
              <Navbar.Brand href="#home">
                <img alt="NavbarLogo" src={logo} height="30" className="d-inline-block align-auto" />
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav class="navbar-nav ml-auto">
                  <Nav.Link href="#new"><i class="fa fa-user fa-lg"> Profile</i></Nav.Link>
                  <Nav.Link href="#search"><i class="fa fa-search fa-lg"> Search</i></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Navbar bg="light" variant="light" fixed="bottom" className="d-flex">
              <Nav.Link className="mx-auto" href="#home"><i class="fa fa-home fa-lg"></i></Nav.Link>
              <Nav.Link className="mx-auto" href="#feed"><i class="fa fa-newspaper-o fa-lg"></i></Nav.Link>
              <Nav.Link className="mx-auto" href="#new"><i class="fa fa-plus fa-lg"></i></Nav.Link>
              <Nav.Link className="mx-auto" href="#notification"><i class="fa fa-bell fa-lg"></i></Nav.Link>
            </Navbar>
          </div>
       );
      }   
      export default NavBar;