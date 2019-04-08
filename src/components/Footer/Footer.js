import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Background from './../../fonts/footer_background.png';
import './footer.css'
const FooterPagePro = () => {
  return (
    <div style={{backgroundColor:'#1e2434', backgroundSize:"cover",color:"white", width:"100%", position: "absolute", backgroundImage: `url(${Background})`, backgroundPosition:"center"}}>
      <MDBContainer fluid className="text-center text-md-left stylish-color-dark pt-4">
        <MDBRow>
          <MDBCol md="6">
            <div className="logo_text">Ext<span>Neg</span></div>
            <p style={{marginTop:"20px"}}>
              Here you can use rows and columns here to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="3" style={{marginTop:'30px'}}>
            <ul className="list-unstyled nav-link">
              <li>
                <a href="#!">Home</a>
              </li>
              <li>
                <a href="#!">Products</a>
              </li>
              <li>
                <a href="#!">About</a>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="3" style={{marginTop:'30px', color:'white'}}>
            <ul className="list-unstyled nav-link">
              <li>
                <a href="#!">Privacy Policy</a>
              </li>
              <li>
                <a href="#!">Return Policy</a>
              </li>
              <li>
                <a href="#!">Terms of Service</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="text-center">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-fb mx-1 float" href="https://www.facebook.com/ExtNeg-Online-Store-358184034793892">
              <i className="fa fa-facebook-f"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-tw mx-1 float" href="https://www.instagram.com/ExtNeg_Online_Store/">
              <i className="fa fa-instagram"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-gplus mx-1 float" href="https://wa.me/212669383470" >
              <i className="fa fa-whatsapp"> </i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; 2018-{new Date().getFullYear()} Copyright <a href="/" style={{color:'white'}}>Extentia Negoce Online Store</a>
        </MDBContainer>
      </div>
    </div>
  );
}

export default FooterPagePro;