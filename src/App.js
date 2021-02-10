import React, { Component } from 'react';
// import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Segment, Grid, Header, List, Divider, Image } from 'semantic-ui-react';
import './App.css';

import Landing from "./components/Landing"


class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Menu fixed='top' inverted className="raised-menu">
            <Container>
              <Menu.Item as='a' header>
                <h1>olympus</h1>
              </Menu.Item>
              <Menu.Item as='a' href="/"><h4>Home</h4></Menu.Item>
              {this.state.loggedIn && <Menu.Item as='a' onClick={this.logout}><h4>Logout</h4></Menu.Item>}
            </Container>
          </Menu>
        </header>
        <Container className="appBody">
          <div style={{ minHeight: '80vh' }}>
            
            <Landing></Landing>
          </div>
        </Container>

        <Segment vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }} fixed='bottom'>
          <Container textAlign='center'>
            <Divider section />
            <Grid divided inverted stackable>
              <Grid.Column width={8}>
                <Grid.Column width={8}>
                <Image centered size='medium' src={"ua-logo.png"} as='a' href='https://www.superfund.arizona.edu/'/>
              </Grid.Column>
              </Grid.Column>
              <Grid.Column width={8}>
                <Image centered size='medium' src={"niehs-logo.png"} as='a' href='https://www.niehs.nih.gov/research/supported/centers/srp/index.cfm'/>
              </Grid.Column>
            </Grid>

            {/* <Divider section />
            <List horizontal divided link size='small'>
              <List.Item as='a' href='#'>
                Need help? Contact myung@email.arizona.edu
              </List.Item>
              <List.Item as='a' href='#'>
                Contact Us
              </List.Item>
              <List.Item as='a' href='#'>
                Terms and Conditions
              </List.Item>
              <List.Item as='a' href='#'>
                Privacy Policy
              </List.Item>
            </List> */}
          </Container>
        </Segment>
      </div>
    );
  }
}

export default App;

