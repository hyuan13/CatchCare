import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn, MDBIcon } from "mdbreact";

const Footer = () => {
  return (
    
    <MDBFooter style = {{backgroundColor:"#95B9C9", opacity:"0.72"}} className="font-small pt-3 mt-3" >
      <MDBContainer fluid className="text-center">
        <MDBRow>
          <MDBCol className = 'align-item-center justify-content-center' md="3">
            <h5 className="title" style = {{ fontSize:"30px"}}>Help</h5>
            <ul className="list-unstyled" style = {{ fontSize:"25px"}}>
              <li>
                <a href="#!">New User Guide</a>
              </li>
              <li>
                <a href="#!">FAQs</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title" style = {{ fontSize:"30px"}}>Contact Us</h5>
            <ul className="list-unstyled" style = {{ fontSize:"25px"}}>
              <li>
                <a href="#!">24 Hour <br /> Customer Support</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title" style = {{ fontSize:"30px"}}>Learn More</h5>
            <ul className="list-unstyled" style = {{ fontSize:"25px"}}>
              <li>
                <a href="#!">Mission and Vision</a>
              </li>
              <li>
                <a href="#!">History</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <MDBBtn size="lg" social="fb">
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>
            <MDBBtn size="lg" social="tw">
              <MDBIcon fab icon="twitter" />
            </MDBBtn>
            <MDBBtn size="lg" social="li">
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>
            <ul className="list-unstyled" style = {{ fontSize:"25px"}}>
              <li>
                Contact us at
              </li>
              <li>
                catchcare.official@gmail.com
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-2">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    
  );
}

export default Footer;