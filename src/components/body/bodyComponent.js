import React, { Component } from 'react';
import CorouselTop from './corouselTop'
import Cards from './cards'
import image1 from './../../assets/images/image1.jpg'
import image2 from './../../assets/images/image2.jpg'
import image3 from './../../assets/images/image3.jpg'
import image4 from './../../assets/corousel2/image4.jpg'
import image5 from './../../assets/corousel2/image5.jpg'
export default class Body extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

    items1 = [
    {
      src: image1,
      altText: 'Home Decor',
      caption: 'Bed Sheets'
    },
    {
      src: image2,
      altText: 'Shoes',
      caption: "Men's shoes"
    },
    {
      src: image3,
      altText: 'Jackets',
      caption: "Men's Jacket"
    }
  ];
  items2 = [
    {
      src: image4,
      altText: 'Home Decor',
      caption: 'Bed Sheets'
    },
    {
      src: image5,
      altText: 'Shoes',
      caption: "Men's shoes"
    }
  ];

  render() {
      console.log("InRender:-",this.items1)
    return (
        <div>
            <CorouselTop items={this.items1}/>
            <Cards />
            <CorouselTop items={this.items2}/>
        </div>
    );
  }
}