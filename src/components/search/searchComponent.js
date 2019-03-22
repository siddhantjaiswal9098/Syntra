import React, { Component } from 'react';
import CorouselTop from './../body/corouselTop'
import Cards from './../body/cards'
import image1 from './../../assets/images/image1.jpg'
import image2 from './../../assets/images/image2.jpg'
import image3 from './../../assets/images/image3.jpg'
import image4 from './../../assets/corousel2/image4.jpg'
import image5 from './../../assets/corousel2/image5.jpg'
import InfiniteScroll from 'react-infinite-scroller';
import { bindActionCreators } from 'redux';
import * as Actions from './../../actions/homeActions';
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';
import './searchComponentstyle.css'
class Body extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.loadFunc = this.loadFunc.bind(this);
    this.state = {
      isOpen: false,
      arrLoading: [],
      searchTag: this.props.match.params.data
    };
    this.counter = 0;
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
    },
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
  loadFunc() {
    this.counter = this.counter + 1
    this.props.getHomeData(this.counter)
    return (
    <Cards />
    )
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('API DATA IN WILLRECIEVEPROPS:-',nextProps.userDetail);
    let arrLoading = this.state.arrLoading
    arrLoading.push(nextProps.userDetail);
    this.setState({ arrLoading: arrLoading });
  }
  componentDidMount() {
    console.log('props', this.props.match.params.data)
  }
  render() {
    if(this.counter === 10) {
      this.counter = 0;
    }
    return (
        <div>
            <InfiniteScroll
                pageStart={0}
                loadMore={this.loadFunc}
                hasMore={!(this.counter===10)}
                loader={<Spinner style={{height: 100, width: 100}} type="grow" color="primary" />}
            >
              { this.state.arrLoading.map(item => (
                <div>
                  <div className="topDiv" style={{ margin: 20, padding: 20}} >
                  <div style={{fontWeight: 'bolder'}}>
                    {this.state.searchTag}
                  </div>
                    <div>
                      ID:
                      {item.id}
                    </div>
                    <div>
                      EMAIL:
                      {item.email}
                    </div>
                    <div>
                      PHONE:
                      {item.phone}
                    </div>
                    <div>
                      USERNAME:
                      {item.username}
                    </div>
                  </div>
                  </div>
              ))}
            </InfiniteScroll>
        </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}
function mapStateToProps(state) {

  const { home } = state;
  return {
    userDetail: home.userDetail,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Body)