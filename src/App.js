import React, { Component } from 'react';
import Routes from "./Routes";
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
              <Menu.Item as='a' href="/" header>
                <h1>olympus</h1>
              </Menu.Item>
              <Menu.Item as='a' href="/">
                <h4>Home</h4>
              </Menu.Item>
              <Menu.Item as='a' href="/contact">
                <h4>Contact Us</h4>
              </Menu.Item>
              <Menu.Item as='a' href="https://dmac.pharmacy.arizona.edu/Forum/" target="_blank">
                <h4>Forum</h4>
              </Menu.Item>
              <Menu.Item as='a' href="https://www.youtube.com/channel/UC_ETGk9VJU_XPL6OcUjynbw/featured" target="_blank">
                <h4>YouTube</h4>
              </Menu.Item>
            </Container>
          </Menu>
        </header>
        <Container className="appBody">
          <div style={{ minHeight: '80vh' }}>
            <Routes />
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

            <Divider section hidden/>
            
            <List horizontal divided link size='small'>
              <List.Item as='a' href='/contact'>
                Contact Us
              </List.Item>
              <List.Item as='a' href='https://tools.niehs.nih.gov/portfolio/index.cfm/portfolio/grantDetail/grant_number/P42ES004940'>
                Funded by NIEHS grant #P42ES004940
              </List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default App;

