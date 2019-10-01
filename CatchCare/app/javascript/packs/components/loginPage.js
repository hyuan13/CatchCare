import React from 'react';
import { connect } from 'react-redux';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import { authenticateUser } from '../actions/authActions';


class Login extends React.Component{

    constructor(props) {

        super(props);
        this.state = {
            email: null,
            password: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {

        if(e.target.id === 'email') this.setState({email: e.target.value});
        if(e.target.id === 'password') this.setState({password: e.target.value});

    }


    handleSubmit(e) {

        e.preventDefault();
        this.props.authenticateUser(this.state.email, this.state.password)
            .then(response => {
                if(this.props.message) {
                    alert("You're Logged In!");
                }
                else {
                    alert("Sorry, something went wrong. Please try logging in again.");
                }
            })

    }


	render() {

		return(
			<div id = 'log-in'>
			    <MDBContainer style = {{position: 'relative', top: '200px', left: '20px', width: '100%'}}>
                    <MDBRow className = 'justify-content-center'>
                        <MDBCol md = '5'>
                            <MDBCard>
                                <div className = 'header pt-3 lighten-2' style = {{backgroundColor: '#66B5C4'}}>
                                    <MDBRow className = 'd-flex justify-content-start'>
                                        <h3 className = 'white-text mt-3 mb-4 pb-1 mx-5'>
                                            Log in
                                        </h3>
                                    </MDBRow>
                                </div>
                                <MDBCardBody className = 'mx-4 mt-4'>
                                    <form onSubmit = {(event) => this.handleSubmit(event)}>
                                        <MDBInput 
                                            id = 'email' 
                                            className = 'form-control' 
                                            label = 'User ID' 
                                            onInput = {this.handleChange} 
                                            group 
                                            type = 'text' 
                                            validate 
                                            value = { this.email }
                                        />
                                        <MDBInput
                                            id = 'password'
                                            label = 'Password'
                                            group
                                            type = 'password'
                                            onInput = {this.handleChange}
                                            className = 'form-control'
                                            validate
                                            containerClass = 'mb-0'
                                            value = { this.password }
                                        />
                                        <p className = 'font-small grey-text d-flex justify-content-end'>
                                            Forgot
                                            <a
                                                href = '#!'
                                                className = 'dark-grey-text font-weight-bold ml-1'
                                            >
                                                Password?
                                            </a>
                                        </p>
                                        <div className = 'text-center mb-4 mt-5'>
                                            <MDBBtn
                                                color = 'cyan'
                                                type = 'submit'
                                                className = 'btn-block z-depth-2 white-text'
                                            >
                                                Log in
                                            </MDBBtn>
                                        </div>
                                    </form>
                                    <p className = 'font-small grey-text d-flex justify-content-center'>
                                        Don't have an account?
                                        <a
                                            className = 'dark-grey-text font-weight-bold ml-1'
                                            onClick = { () => this.props.history.push('/signup') }
                                        >
                                            Sign up
                                        </a>
                                    </p>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>    
                    </MDBRow>
                </MDBContainer>	
    	    </div>
        )

	}

}

const mapStateToProps = state => {
    console.log(state);
    return {message: state.loginMessage};
};

export default connect(mapStateToProps, { authenticateUser: authenticateUser})(Login);