import React, { Component } from 'react';
import { Button, Card, Image, Segment, Divider, Modal, Header } from 'semantic-ui-react';
import { Label } from 'semantic-ui-react'

class Landing extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      modalOpen: false,
      modalType: null,
    };
  }

  setOpen(modalOpen, modalType) {
    this.setState({
      modalOpen: modalOpen,
      modalType: modalType
    });
  }
  
  render() {
    

    const src = "ares.png";
    const {modalOpen, modalType} = this.state;

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
                <Button as="a" floated="right" onClick={() => this.setOpen(true, 'ares')}>
                  Info
                </Button>
              </Card.Content>
            </Card>

            <Card raised image={src}>
              <Image src="artemis.png" wrapped ui={false} />
              <Card.Content>
                <Card.Header>
                  Artemis <Label size="tiny" color="pink" floated="right">alpha</Label>
                </Card.Header>
                
                <Card.Meta>
                  {/* <span className='date'>Joined in 2015</span> */}
                </Card.Meta>
                <Card.Description>
                  Visualize SRP data on an interactive map.
                </Card.Description>
                
              </Card.Content>
              <Card.Content extra>
                <Button as="a"
                        // href="https://dmac.pharmacy.arizona.edu/GeoUp/Develop/"
                        target="_blank"
                        floated="right"
                        primary>
                  Coming soon!
                </Button>
                <Button as="a" floated="right" onClick={() => this.setOpen(true, 'artemis')} >
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
                  Map RNA sequencing fastq files to reference genomes using STAR.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button as="a" href="https://demeter.pharmacy.arizona.edu" target="_blank" floated="right" primary>
                  Launch
                </Button>
                <Button as="a" floated="right" onClick={() => this.setOpen(true, 'demeter')}>
                  Info
                </Button>
              </Card.Content>
            </Card>

            <Card raised image={src}>
              <Image src="hera.png" wrapped ui={false} />
              <Card.Content>
                <Card.Header>
                  Hera  <Label size="tiny" color="pink" floated="right">alpha</Label>
                </Card.Header>
                
                <Card.Meta>
                  {/* <span className='date'>Joined in 2015</span> */}
                </Card.Meta>
                <Card.Description>
                  Upload geochemical core sample data for visualization in Artemis.
                </Card.Description>
                
              </Card.Content>
              <Card.Content extra>
                <Button as="a" href="https://dmac.pharmacy.arizona.edu/Hera/Home" target="_blank" floated="right" primary>
                  Launch
                </Button>
                <Button as="a" floated="right" onClick={() => this.setOpen(true, 'hera')}>
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
                <Button as="a" floated="right" onClick={() => this.setOpen(true, 'hermes')}>
                  Info
                </Button>
              </Card.Content>
            </Card>
          </Card.Group>

          <Modal
            onClose={() => this.setOpen(false, null)}
            open={modalOpen && modalType === 'ares'}
            size="tiny"
          > 
            <Modal.Header>Ares</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <p>
                  Ares performs DESeq2 analysis which analyzes count data from RNA sequences to detect differentially expressed genes using a negative binomial generalized linear model.
                </p>
                <p>
                  By default, Deseq2 filters out tests with very little chance of being significant by using the mean of normalized counts as a filter statistic.
                </p>
                <p>
                  Ares uses the Benjamini & Hochberg (1995) method implemented by DeSeq2 to control for family-wise error rate.
                </p>
                <p>
                  Ares also pre-filters low count genes by removing rows where there are less than 10 reads.
                </p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={() => this.setOpen(false)}>
                Close
              </Button>
              
            </Modal.Actions>
          </Modal>

          <Modal
            onClose={() => this.setOpen(false, null)}
            open={modalOpen && modalType === 'artemis'}
            size="tiny"
          > 
            <Modal.Header>Artemis</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <p>
                  Visualize SRP data on an interactive map.
                </p>

              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={() => this.setOpen(false)}>
                Close
              </Button>
              
            </Modal.Actions>
          </Modal>

          <Modal
            onClose={() => this.setOpen(false, null)}
            open={modalOpen && modalType === 'demeter'}
            size="tiny"
          > 
            <Modal.Header>Demeter</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <p>Demeter has two modes: <b>RNA seq</b> and <b>DNA seq</b>.</p>
                <h4>RNA Seq</h4>
                <p>
                  Runs <a href="https://github.com/alexdobin/STAR" target="_blank">STAR</a> to align RNA sequencing <code>.fastq</code> files stored on CyVerse to reference genomes. Additionally runs <a href="http://www.htslib.org" target="_blank">samtools</a> to generate <code>.bam</code> and <code>.bai</code> files. Outputs a <code>ReadsPerGene.tab</code> file that is passed to the Ares app for DESeq2 analysis.
                </p>
                <Divider></Divider>
                <h4>DNA Seq</h4>
                <p>Runs <a href="http://bowtie-bio.sourceforge.net/bowtie2/index.shtml" target="_blank">bowtie2</a> and <a href="http://www.htslib.org" target="_blank">samtools</a> to generate <code>.bam</code> and <code>.bai</code> files from DNA sequencing<code>.fastq</code> files stored on CyVerse.</p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={() => this.setOpen(false)}>
                Close
              </Button>
              
            </Modal.Actions>
          </Modal>

          <Modal
            onClose={() => this.setOpen(false, null)}
            open={modalOpen && modalType === 'hera'}
            size="tiny"
          > 
            <Modal.Header>Hera</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <p>
                  Upload geochemical core sample data for visualization in Artemis.
                </p>

              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={() => this.setOpen(false)}>
                Close
              </Button>
              
            </Modal.Actions>
          </Modal>

          <Modal
            onClose={() => this.setOpen(false, null)}
            open={modalOpen && modalType === 'hermes'}
            size="tiny"
          > 
            <Modal.Header>Hermes</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <p>
                  Hermes description.
                </p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={() => this.setOpen(false)}>
                Close
              </Button>
              
            </Modal.Actions>
          </Modal>

          
        </div>
      </>
    );
  }
}

export default Landing;

