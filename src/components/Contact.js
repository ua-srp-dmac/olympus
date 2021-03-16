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
                    Need help with apps or CyVerse?
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
          <h2 className="p-b-50 centered">Meet the DMAC Team</h2>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Grid>
                  <Grid.Column width={6}>
                    <Image src='aikseng.png' size='small' circular />
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <h3>Aikseng Ooi</h3>
                    <p>Principal Investigator</p>
                  </Grid.Column>
                </Grid>
              </Grid.Column>

              <Grid.Column>
                <Grid>
                  <Grid.Column width={6}>
                    <Image src='nirav.png' size='small' circular />
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <h3>Nirav Merchant</h3>
                    <p>Co-Investigator</p>
                  </Grid.Column>
                </Grid>
              </Grid.Column>

            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Grid>
                  <Grid.Column width={6}>
                    <Image src='anthony.png' size='small' circular />
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <h3>Anthony Vicenti</h3>
                    <p>Statistician & Computational Biologist</p>
                  </Grid.Column>
                </Grid>
              </Grid.Column>
              <Grid.Column>
                <Grid>
                  <Grid.Column width={6}>
                    <Image src='michelle.png' size='small' circular />
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <h3>Michelle Yung</h3>
                    <p>Software Engineer</p>
                  </Grid.Column>
                </Grid>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </>
    );
  }
}

export default Contact;

