import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
 CardSubtitle, CardBody } from 'reactstrap';
 import image6 from './../../assets/corousel3/image6.jpg'
 import image7 from './../../assets/corousel3/image7.jpg'
 import image8 from './../../assets/corousel3/image8.jpg'
 import './body.css'

const BodyComponent = (props) => {
  return (
    <CardGroup className='CardGroupTop'>
      <Card>
        <CardImg className='CardGroup' top width="100%" src={image6} alt="Card image cap" />
      </Card>
      <Card>
        <CardImg className='CardGroup' top width="100%" src={image7} alt="Card image cap" />
      </Card>
      <Card>
        <CardImg className='CardGroup' top width="100%" src={image8} alt="Card image cap" />
      </Card>
      <Card>
        <CardImg className='CardGroup' top width="100%" src={image8} alt="Card image cap" />
      </Card>
    </CardGroup>
  );
};

export default BodyComponent;