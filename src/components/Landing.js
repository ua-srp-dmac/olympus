import React, { Component } from 'react';
import { Button, Card, Image, Segment, Divider } from 'semantic-ui-react';

class Landing extends Component {

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
        <h2 >Apps</h2>
        <div className="p-t-20">      
          <Card.Group itemsPerRow={3}>
            <Card raised image={src}>
              <Image src="ares_results.png" wrapped ui={false} />
              <Card.Content>
                <Card.Header>Ares</Card.Header>
                <Card.Meta>
                  {/* <span className='date'>Joined in 2015</span> */}
                </Card.Meta>
                <Card.Description>
                  Visualize genomic data.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button as="a" href="https://dmac.pharmacy.arizona.edu/Ares/Develop" target="_blank" floated="right" primary>
                  Launch
                </Button>
                <Button as="a" floated="right">
                  Info
                </Button>
              </Card.Content>
            </Card>

            <Card raised image={src}>
              <Image src="genomic_data.jpeg" wrapped ui={false} />
              <Card.Content>
                <Card.Header>Demeter</Card.Header>
                <Card.Meta>
                  {/* <span className='date'>Joined in 2015</span> */}
                </Card.Meta>
                <Card.Description>
                  Launch nextGen sequencing analysis.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button as="a" href="https://demeter.pharmacy.arizona.edu" target="_blank" floated="right" primary>
                  Launch
                </Button>
                <Button as="a" floated="right">
                  Info
                </Button>
              </Card.Content>
            </Card>

            <Card raised image={src}>
              <Image src="hermes_cnet.png" wrapped ui={false} />
              <Card.Content>
                <Card.Header>Hermes</Card.Header>
                <Card.Meta>
                  {/* <span className='date'>Joined in 2015</span> */}
                </Card.Meta>
                <Card.Description>
                  App description.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button as="a" href="https://dmac.pharmacy.arizona.edu/Hermes/Develop" target="_blank" floated="right" primary>
                  Launch
                </Button>
                <Button as="a" floated="right">
                  Info
                </Button>
              </Card.Content>
            </Card>
          </Card.Group>
        </div>
      </>
    );
  }
}

export default Landing;

