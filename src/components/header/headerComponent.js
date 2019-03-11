import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Row,
  Col,
  DropdownItem } from 'reactstrap';
import SelectedComponent from './selectedButton/selectedButtonComponent'
import './header.css'

export default class Header extends React.Component {
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
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><img className='logoApk' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Esko_Praha_logo.svg/2000px-Esko_Praha_logo.svg.png" />yntra</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <SelectedComponent />
            <InputGroup className='SearchBar'>
              <InputGroupAddon addonType="prepend"> 
              <Button id='searchIcon' color="primary">
                <i id='elementID' className="fa fa-search" aria-hidden="true" />
              </Button>
              </InputGroupAddon>
              <Input placeholder="username" />
            </InputGroup>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav>
                      <i className="fa fa-user" aria-hidden="true"></i>
                      Profile
                  </DropdownToggle>
                  <DropdownMenu right>
                    {/* <DropdownItem> */}
                      <span className='WelcomeText'>Welcome</span>
                      <div className='manageOrders'>
                        To access and manage orders
                      </div>
                      <div className='rowData'>
                        <Col className='column' xs="6"><Button color="primary">SignUp</Button></Col>
                        <Col className='column' xs="6"><Button color="primary">LogIn</Button></Col>
                      </div>
                    <DropdownItem>
                      Orders
                    </DropdownItem>
                    <DropdownItem>
                      Wishlist
                    </DropdownItem>
                    <DropdownItem>
                      Gift cards
                    </DropdownItem>
                    <DropdownItem>
                      Contact Us
                    </DropdownItem>
                    <DropdownItem>
                      Syntra Insiders
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Myntra Credits
                    </DropdownItem>
                    <DropdownItem>
                      PhonePe Wallet
                    </DropdownItem>
                    <DropdownItem>
                      Coupones
                    </DropdownItem>
                    <DropdownItem>
                      Saved Cards
                    </DropdownItem>
                    <DropdownItem>
                      Saved Addresses
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              <NavItem>
                <NavLink href="https://www.myntra.com/wishlist"><i className="fa fa-thumb-tack" aria-hidden="true"></i>Wishlist</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.myntra.com/checkout/cart"><i className="fa fa-user" aria-hidden="true"></i>Bag</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}