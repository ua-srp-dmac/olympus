import React, { Component } from 'react';
import { Button, Card, Image, Segment, Divider, Grid, Icon, Search, Header } from 'semantic-ui-react';

class Contact extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }
  
  render() {
    
    const src = "ares.png";

    return (
      <>
        {/* Welcome to the UA SRP DMAC home, where you can launch apps.
        <Divider></Divider> */}
        <h2>Contact Us</h2>
        
        <div className="p-t-20 p-b-20"> 

          <Segment placeholder>
            <Grid columns={2} stackable textAlign='center'>
              <Divider vertical>Or</Divider>

              <Grid.Row verticalAlign='middle'>
                <Grid.Column>
                  <Header icon>
                    <Icon name='question circle outline' />
                    Need help with CyVerse or apps?
                  </Header>

                  <div><a href="https://dmac.pharmacy.arizona.edu/Forum/" target="_blank">Visit the Discussion Forum</a></div>
                </Grid.Column>

                <Grid.Column>
                  <Header icon>
                    <Icon name='mail outline' />
                    Contact the DMAC Team
                  </Header>
                  <div>
                    <a href="mailto:UA-SRP-DMAC@pharmacy.arizona.edu">
                      UA-SRP-DMAC@pharmacy.arizona.edu
                    </a>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </div>
        
        <Divider></Divider>
        <div className="p-t-20 p-b-20">
          <h3 className="p-b-30 centered">The DMAC Team</h3>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                  <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
              </Grid.Column>
              <Grid.Column>
                  <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                  <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
              </Grid.Column>
              <Grid.Column>
                  <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </>
    );
  }
}

export default Contact;

