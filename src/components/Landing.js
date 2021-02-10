import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

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
        <h2>Hi Michelle!</h2>
        <Card.Group itemsPerRow={6}>
          <Card raised image={src} />
          <Card raised image={src} />
          <Card raised image={src} />
          <Card raised image={src} />
          <Card raised image={src} />
          <Card raised image={src} />
          <Card raised image={src} />
          <Card raised image={src} />
          <Card raised image={src} />
          <Card raised image={src} />
          <Card raised image={src} />
          <Card raised image={src} />
        </Card.Group>
      </>
    );
  }
}

export default Landing;

