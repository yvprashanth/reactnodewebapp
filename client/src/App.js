import React, { Component } from 'react';
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
    fetch('/categories', {
      method: 'GET', // or 'PUT'
      headers: {
        'Authorization': 'app'
      }
    }).then(response => response.json())
      .then(
        data => this.setState({ members: data.categories })
      );
  }


  render() {
    debugger;
    const members = this.state;
    return <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="">Rhino</a>
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
            <button type="button" className="btn btn-success">
              Success
            </button>
          <button type="button" className="btn btn-warning">
              Warning
            </button>
          </p>
        </Jumbotron>
        <p className="App-intro">Prashanth Yerramilli</p>
        <ul className="no-bullets">
          {
            members.map(function(user, i){
              <li key={i}>
                {user}
              </li>
            })
          }
        </ul>
      </div>;
  }
}

export default App;