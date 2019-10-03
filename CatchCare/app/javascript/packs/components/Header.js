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
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(e) {

        if(e.target.id === 'account') {
            if(this.props.cookies.cookies.id) {
                this.props.history.push('/myaccount');    
            }
            else {
                this.props.history.push('/login');
            }
        }
        else if(e.target.id === 'logout') {
            this.props.cookies.remove('user');
            this.props.cookies.remove('id');
            alert('You have logged out!');
            this.props.history.push('/');
        }

    }

    render() {

        var icon = (
            <span className = 'logo'>
                <MDBRow>
                    <MDBCol>
                        <img src = {require('./images/logo.png')} height = '100' width = '105' alt = 'Catch Care' />
                    </MDBCol>
                    <MDBCol className = 'align-items-center justify-content-center' style = {{position:'relative', top:'10px'}}>
                        <MDBRow>
                                <img src = {require('./images/catch.png')} height = '20' width = '65' alt = 'Catch Care' />
                        </MDBRow>
                        <MDBRow className = 'align-items-center justify-content-center align-middle' >
                                <img src = {require('./images/care.png')} height = '20' width = '55' alt = 'Catch Care' />
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </span>
        );

        return(
            <div className = 'fixed-top'>
                <MDBNavbar brand = {icon} style = {{backgroundColor: '#FFFFFF'}} expand = 'md'>
                    <MDBNavbarBrand>
                        <MDBNavLink onClick = {() => {}} to = '/'>{ icon }</MDBNavLink>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick = {() => this.setState({isOpen:!this.state.isOpen})} />
                    <MDBCollapse id = 'navbarCollapse3' isOpen = {this.state.isOpen} navbar>
                        <MDBNavbarNav>
                            <MDBNavItem>
                                <div 
                                    id = 'about-us' 
                                    style = {{color: '#66B5C4', fontSize: '34px', fontWeight: '600', fontFamily: 'Segoe UI', cursor: 'pointer'}} 
                                    onClick = {() => this.props.history.push('/')}
                                > 
                                    About Us 
                                </div>
                            </MDBNavItem>
                            <MDBNavItem>
                                <div 
                                    id = 'doctor-entrance' 
                                    style = {{color: '#66B5C4', fontSize: '34px', fontWeight: '600', cursor: 'pointer'}} 
                                    onClick = {() => {}}
                                > 
                                    Doctor Entrance 
                                </div>
                            </MDBNavItem>
                            { !this.props.cookies.cookies.user && 
                                <MDBNavItem>
                                    <div 
                                        id = 'login-signup' 
                                        style = {{color: '#66B5C4', fontSize: '34px', fontWeight: '600', cursor: 'pointer'}} 
                                        onClick = {() => this.props.history.push('/login')}
                                    > 
                                        Log In / Sign Up
                                    </div>
                                </MDBNavItem>
                            }
                            { this.props.cookies.cookies.user && 
                                <MDBNavItem>
                                    <div 
                                        id = 'logout' 
                                        style = {{color: '#66B5C4', fontSize: '34px', fontWeight: '600', cursor: 'pointer'}} 
                                        onClick = {this.handleClick}
                                    > 
                                        Log Out
                                    </div>
                                </MDBNavItem>
                            }
                            <MDBNavItem>
                                <div 
                                    id = 'account' 
                                    style = {{color: '#66B5C4', fontSize: '34px', fontWeight: '600', cursor: 'pointer'}} 
                                    onClick = {this.handleClick} 
                                > 
                                    My Account 
                                </div>
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