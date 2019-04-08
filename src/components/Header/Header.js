import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import SearchBox from './../SearchFilter/SearchBox';
import {connect} from 'react-redux';
import './header.css'

class Header extends Component {
  state = {
    isOpen: false
  };
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render(){
  return (
    <MDBNavbar style={{backgroundColor:'#1e2434'}} dark expand="md">
      <MDBNavbarBrand>
        <MDBNavLink to="/"><div className="logo_text">Ext<span>Neg</span></div></MDBNavLink>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={this.toggleCollapse}/>
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav left>
          <MDBNavItem className="float">
            <MDBNavLink to="/">Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem className="float">
            <MDBNavLink to="/products">Products</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem className="float">
            <MDBNavLink to="/about">About</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <SearchBox />
          </MDBNavItem>
          <MDBNavItem>
            <div className="waves-effect waves-light" to="#">
            <a href="https://www.facebook.com/ExtNeg-Online-Store-358184034793892" style={{width:"30px"}} className="float nav-link"><i className="fa fa-facebook-f"></i></a>
            </div>
          </MDBNavItem>
          <MDBNavItem>
            <div className="waves-effect waves-light" to="#">
              <a href="https://wa.me/212669383470" style={{width:"30px"}} className="float nav-link"><i className="fa fa-whatsapp"></i></a>
            </div>
          </MDBNavItem>
          <MDBNavItem>
            <div className="waves-effect waves-light" to="#">
            <a href="https://www.instagram.com/ExtNeg_Online_Store/" style={{width:"30px"}} className="float nav-link"><i className="fa fa-instagram "></i></a>
            </div>
          </MDBNavItem>
          <MDBNavItem className="float">
            <MDBNavLink className="nav-link" to={"/cart"}><i className="fa fa-shopping-cart mr-2" aria-hidden="true" />Cart {this.props.cartLength ? `(${this.props.cartLength})`: ''}</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      cartLength: state.shop.cart.length
  }
};

export default connect(mapStateToProps, null)(Header);