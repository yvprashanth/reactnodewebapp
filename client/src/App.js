import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  constructor(props) {
    super(props);
    this.state = {
      members: []
    }
  }

  componentDidMount() {
    fetch('/api', {
      headers: {
        'Authorization': 'bearer'
      }
    })
      .then(res => res.json())
      .then(
        members => {
          this.setState({ members: members.message });
        }
      );
  }

  render() {
    return <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="">
                Rhino
              </a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Person Name
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
            <NavItem eventKey={2} href="#">
              Logout
            </NavItem>
          </Nav>
        </Navbar>
        <Jumbotron>
          <h1>Rhino!</h1>
          <p>
            Easy to use music teacher software
            <FontAwesomeIcon icon="coffee" />
          </p>
          <p>
            <Button bsStyle="primary">Learn more</Button>
            <button type="button" class="btn btn-success">
              Success
            </button>
            <button type="button" class="btn btn-warning">
              Warning
            </button>
          </p>
        </Jumbotron>
        <p className="App-intro">Prashanth Yerramilli</p>
      </div>;
  }
}

export default App;
