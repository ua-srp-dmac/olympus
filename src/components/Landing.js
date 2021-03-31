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
        <Image centered size='medium' src={"ua-logo.png"} as='a' href='https://www.superfund.arizona.edu/'/>
        
        <h1>Data Management & Analysis Core</h1>

        <div className="m-t-40 landing">
          <p>
            The University of Arizona Superfund Research Center (UA SRC) generates volumes and types of data that are not manageable in traditional laboratory settings. The Data Management and Analysis Core (DMAC) functions as the primary service for UA SRC in large biological, geophysical, and chemical datasets, and enables investigators by performing three core functions:
          </p>

          <ul>
            <li>
              Leading the housing of all data within CyVerse, an easy-to-access data repository system.
            </li>
            <li>
            Performing both standard and custom computational analyses of the data.
            </li>
            <li>
              Developing a collection of user-friendly web applications that allows individual investigators to retrieve, manipliate, and visualize UA SRC data.
            </li>   
          </ul>
        </div>
        <div className="m-t-40 m-b-40">
          <Button as="a" href="https://superfund.arizona.edu/cores/data-management-and-analysis-core" target="_blank">
            Learn more
          </Button>
        </div>
        
        <Divider></Divider>

        <h2>Apps</h2>

        <div className="p-t-20">      
          <Card.Group className="three fluid doubling stackable">
            <Card raised image={src}>
              <Image src="ares_results.png" wrapped ui={false} />
              <Card.Content>
                <Card.Header>Ares</Card.Header>
                <Card.Meta>
                  {/* <span className='date'>Joined in 2015</span> */}
                </Card.Meta>
                <Card.Description>
                  Differential gene expression analysis using DESeq2.
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
                  Gene set enrichment and pathway analysis.
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

