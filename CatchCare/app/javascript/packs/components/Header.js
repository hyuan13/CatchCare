import React from 'react';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBCol, MDBRow } from 'mdbreact';

class Header extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            isOpen: false  
        };

    }

    render() {

        var icon = (
            <span className = 'logo'>
                <MDBRow>
                    <MDBCol>
                        <a href = '/'>
                        <img src = {require('./images/logo.png')} height = '100' width = '105' alt = 'Catch Care' /></a>
                    </MDBCol>
                    <MDBCol className = 'align-items-center justify-content-center' style = {{position:'relative', top:'10px'}}>
                        <MDBRow>
                            <a href = '/'>
                                <img src = {require('./images/catch.png')} height = '20' width = '65' alt = 'Catch Care' />
                            </a>
                        </MDBRow>
                        <MDBRow className = 'align-items-center justify-content-center align-middle' >
                            <a href = '/'>
                                <img src = {require('./images/care.png')} height = '20' width = '55' alt = 'Catch Care' />
                            </a>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </span>
        );

        return(
            <div className = 'fixed-top'>
                <MDBNavbar brand = {icon} style = {{backgroundColor: '#FFFFFF'}} expand = 'md'>
                    <MDBNavbarBrand>
                        {icon}
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick = {() => this.setState({isOpen:!this.state.isOpen})} />
                    <MDBCollapse id = 'navbarCollapse3' isOpen = {this.state.isOpen} navbar>
                        <MDBNavbarNav>
                            <MDBNavItem>
                                <MDBNavLink id = 'cart' style = {{color: '#66B5C4', fontSize: '34px', fontWeight: '600', fontFamily: 'Segoe UI'}} onClick = {() => {}} to = '/'> About Us </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink id = 'account' style = {{color: '#66B5C4', fontSize: '34px', fontWeight: '600'}} onClick = {() => {}} to = '/'> Doctor Entrance </MDBNavLink>
                            </MDBNavItem>
                            { !this.props.cookies.cookies.user && 
                                <MDBNavItem>
                                    <MDBNavLink id = 'account' style = {{color: '#66B5C4', fontSize: '34px', fontWeight: '600'}} onClick = {() => this.props.history.push('/login')} to = '/login'> Log In / Sign Up</MDBNavLink>
                                </MDBNavItem>
                            }
                            { this.props.cookies.cookies.user && 
                                <MDBNavItem>
                                    <MDBNavLink id = 'account' style = {{color: '#66B5C4', fontSize: '34px', fontWeight: '600'}} onClick = {() => this.props.cookies.remove('user')} to = '/'> Log Out</MDBNavLink>
                                </MDBNavItem>
                            }
                            <MDBNavItem>
                                <MDBNavLink id = 'account' style = {{color: '#66B5C4', fontSize: '34px', fontWeight: '600'}} onClick = {() => {}} to = '/'> My Account </MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>  
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </div>  
        )

    }
}

const mapStateToProps = state => {
    return({state: state});
};

export default compose(
    connect(mapStateToProps, null),
    withCookies, 
    withRouter
)(Header);