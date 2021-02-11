import React, { Component } from 'react';
import { Button, Card, Image, Icon } from 'semantic-ui-react';

class Landing extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }
  
  render() {
    

    const src = "placeholder.jpg";

    return (
      <>
        <h2>Apps</h2>
        <Card.Group itemsPerRow={3}>
          <Card raised image={src}>
            <Image src={src} wrapped ui={false} />
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
              <a>
                <Button>Launch</Button>
              </a>
            </Card.Content>
          </Card>

          <Card raised image={src}>
            <Image src={src} wrapped ui={false} />
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
              <a>
                <Button>Launch</Button>
              </a>
            </Card.Content>
          </Card>

          <Card raised image={src}>
            <Image src={src} wrapped ui={false} />
            <Card.Content>
              <Card.Header>App Name</Card.Header>
              <Card.Meta>
                {/* <span className='date'>Joined in 2015</span> */}
              </Card.Meta>
              <Card.Description>
                App description.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Button>Launch</Button>
              </a>
            </Card.Content>
          </Card>
          <Card raised image={src}>
            <Image src={src} wrapped ui={false} />
            <Card.Content>
              <Card.Header>App Name</Card.Header>
              <Card.Meta>
                {/* <span className='date'>Joined in 2015</span> */}
              </Card.Meta>
              <Card.Description>
                App description.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Button>Launch</Button>
              </a>
            </Card.Content>
          </Card>
        </Card.Group>
      </>
    );
  }
}

export default Landing;

