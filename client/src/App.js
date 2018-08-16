import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Navbar,
  Jumbotron,
  Button, 
  NavItem, 
  MenuItem, 
  Nav, 
  NavDropdown
} from "react-bootstrap";

class App extends Component {
  render() {
    return <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">React-Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              Link
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>

        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component
            for calling extra attention to featured content or information.
          </p>
          <p>
            <Button bsStyle="primary">Learn more</Button>
          </p>
        </Jumbotron>

        <button type="button" class="btn btn-success">
          Success
        </button>
        <button type="button" class="btn btn-warning">
          Warning
        </button>
        <p className="App-intro">Prashanth Yerramilli</p>
      </div>;
  }
}

export default App;
