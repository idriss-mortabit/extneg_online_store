import React from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import {connect} from 'react-redux';
import axios from 'axios';
import jQuery from 'jquery';

class FormsPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  state = {
    fname: {
      value: "",
      valid: false
    },
    lname: {
      value: "",
      valid: false
    },
    email: {
      value: "",
      valid: false
    },
    city: {
      value: "",
      valid: false
    },
    address: {
      value: "",
      valid: false
    },
    phone: {
      value: "",
      valid: false
    }
  };
  handleSubmit = event => {
    console.log("ha ana")
    let products = [] 
    let client = {
      first_name: this.state.fname.value,
      last_name: this.state.lname.value,
      email: this.state.email.value,
      phone: this.state.phone.value,
      address: this.state.address.value,
      city: this.state.city.value
    }
    if (this.props.cartItemCount) { 
        this.props.cartItems.map(cart => (
        products.push({
          product_id: cart.id,
          quantity :  cart.quantity
        })
    ))
      let data =[{costumer:client, cart:products, total:this.props.totalPrice}]
      function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    var csrftoken = getCookie('csrftoken');
      var request = new XMLHttpRequest();
      request.open('POST', '/api/get/orders', true);
      request.setRequestHeader('Content-Type', 'application/json');
      request.setRequestHeader('X-CSRFToken', csrftoken);
      request.send(JSON.stringify(data));
      window.location.href="/checkout/ordersuccess"
      event.preventDefault();
        }
  };
  changeHandler = event => {
    this.setState({ [event.target.name]: { value: event.target.value, valid: !!event.target.value } });
  };

  render() {
    return (
      <div>
        <form style={{marginLeft:"40px",marginBottom:"38px", marginTop:"38px", marginRight:"40px"}}> 
          <MDBRow>
            <MDBCol md="4">
              <MDBInput
                value={this.state.fname.value}
                className={this.state.fname.valid ? "is-valid" : "is-invalid"}
                name="fname"
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterNameEx"
                label="First name"
                required
              >
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Provide a valid name!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={this.state.lname.value}
                className={this.state.lname.valid ? "is-valid" : "is-invalid"}
                name="lname"
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterEmailEx2"
                label="Last name"
                required
              >
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Provide a valid last name!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={this.state.email.value}
                className={this.state.email.valid ? "is-valid" : "is-invalid"}
                onChange={this.changeHandler}
                type="email"
                id="materialFormRegisterConfirmEx3"
                name="email"
                label="Your Email address"
              >
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </MDBInput>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4">
              <MDBInput
                value={this.state.city.value}
                className={this.state.city.valid ? "is-valid" : "is-invalid"}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterPasswordEx4"
                name="city"
                label="City"
                required
              >
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={this.state.address.value}
                className={this.state.address.valid ? "is-valid" : "is-invalid"}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterPasswordEx4"
                name="address"
                label="Address"
                required
              >
                <div className="invalid-feedback">
                  Please provide a valid address.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={this.state.phone.value}
                className={this.state.phone.valid ? "is-valid" : "is-invalid"}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterPasswordEx4"
                name="phone"
                label="Phone"
                required
              >
                <div className="invalid-feedback">
                  Please provide a valid phone.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
          </MDBRow>
          <MDBBtn color="success" type="submit" onClick ={this.handleSubmit} >
            Submit
          </MDBBtn>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {

    console.log(state, 'state has changed');

    return {
        cartItems: state.shop.cart,
        cartItemCount: state.shop.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
        }, 0),
        totalPrice: state.shop.cart.reduce((count, curItem) => {
            return count + (curItem.price * curItem.quantity);
        }, 0)
    }
}

export default connect(mapStateToProps, null)(FormsPage);

export const OrderSuccess = () => {
  return(
  <div className="alert alert-success alert-dismissible" style={{marginLeft:"100px",marginBottom:"90px", marginTop:"90px", marginRight:"100px"}}>
    <h2><strong>Success!</strong></h2> 
    <h5>Your order is successfully saved, we will be in touch with you as soon as possible.<br /> Thank you for shopping with us</h5>
</div>
)
  }