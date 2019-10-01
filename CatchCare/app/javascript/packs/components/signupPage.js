import React from 'react';
import { connect } from 'react-redux';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

import { signup } from '../actions/authActions';

class Signup extends React.Component{

    constructor() {

        super()
        this.state = {
          type: 'user',
          name: 'Hang Yuan',
          email: 'hyuan13@illinois.edu',
          password: '12345678',
          confirm: '12345678',
          create: null,
          redirect: true
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    
    }

    handleSubmit(e) {

        e.preventDefault();
        this.props.signup(this.state)
            .then(() => {
                alert("You have successfully created account!");
                this.props.history.push('/login');
            })

    }

    handleChange(e) {



        if(e.target.id === 'name') this.setState({name: e.target.value})
    
        if(e.target.id === 'email') this.setState({username: e.target.value})
    
        if(e.target.id === 'password') this.setState({password: e.target.value})
    
        if(e.target.id === 'user' || e.target.id === 'doctor'){
    
          var button1 = document.getElementById('user');
    
          var button2 = document.getElementById('doctor')
    
          var button = e.target.id==='user'? 0:1
    
          if(button == 0) {
    
            this.setState({type: 'user'})
    
            button1.className = 'btn btn-block Ripple-parent btn-lg btn-cyan z-depth-1 white-text'
    
            button2.className = 'btn btn-block Ripple-parent btn-outline-cyan z-depth-1 white-text'
    
          }
    
          else {
    
            this.setState({type: 'doctor'})
    
            button2.className = 'btn btn-block Ripple-parent btn-lg btn-cyan z-depth-1 white-text'
    
            button1.className = 'btn btn-block Ripple-parent btn-outline-cyan z-depth-1 white-text'
    
          }
    
          var form = document.getElementById('form')
    
          form.style.visibility = 'visible'
    
        }
    
        if(e.target.id === 'confirm') this.setState({confirm: e.target.value})
    
    
    
      }

    render() {
        return(
            <div className="ui container">
                <MDBContainer style = {{position: 'relative', top: '200px', left: '20px', width: '100%'}}>
          <MDBRow className = 'justify-content-center'>
            <MDBCol md = '5'>
              <p className = 'text-center mb-4 mt-0' fontSize = '15' style = {{fontSize:'30px'}}> I want a new account </p>
              <div style = {{height: '100px'}}>
                <MDBRow>
                  <MDBCol md = '6'>
                    <MDBBtn id = 'user'
                            color = 'cyan'
                            type = 'button'
                            outline
                            onClick = {this.handleChange}
                            className = 'btn-block z-depth-1 white-text'
                    >
                      User
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md = '6'>
                    <MDBBtn id = 'doctor'
                            color = 'cyan'
                            type = 'button'
                            outline
                            onClick = {this.handleChange}
                            className = 'btn-block z-depth-1 white-text'
                    >
                      Doctor
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </div>
              <div id = 'form' style = {{visibility: 'hidden'}}>
                <form onSubmit = {(event) => this.handleSubmit(event)}>
                  <label htmlFor = 'defaultFormRegisterNameEx' className = 'grey-text'>
                    Your name
                  </label>
                  <input
                    id = 'name'
                    type = 'text'
                    onChange = {this.handleChange}
                    className = 'form-control'
                    value = {this.state.name}
                  />
                  <br />
                  <label htmlFor = 'defaultFormRegisterEmailEx' className = 'grey-text'>
                    Your email
                  </label>
                  <input
                    id = 'email'
                    type = 'email'
                    onChange = {this.handleChange}
                    className = 'form-control'
                    value = {this.state.email}
                  />
                  <br />
                  <label
                    htmlFor = 'defaultFormRegisterPasswordEx'
                    className = 'grey-text'
                  >
                    Your password
                  </label>
                  <input
                    id = 'password'
                    type = 'password'
                    onChange = {this.handleChange}
                    className = 'form-control'
                    value = {this.state.password}
                  />
                  <br />
                  <label
                    htmlFor = 'defaultFormRegisterConfirmEx'
                    className = 'grey-text'
                  >
                    Confirm your password
                  </label>
                  <input
                    id = 'confirm'
                    type = 'password'
                    onChange = {this.handleChange}
                    className = 'form-control'
                    value = {this.state.confirm}
                  />
                  <div className = 'text-center mb-4 mt-5'>
                    <MDBBtn
                      color = 'cyan'
                      type = 'submit'
                      className = 'btn-block z-depth-2 white-text'
                    >
                      Create Account
                    </MDBBtn>
                  </div>
                  <p style = {{visibility:'hidden'}} id = 'warn' className = 'font-small red-text d-flex justify-content-center'>
                    Your passwords differ.
                  </p>
                </form>
                <p className = 'font-small grey-text d-flex justify-content-center'>
                  Already have an account?
                  <a
                    href='/login'
                    className='dark-grey-text font-weight-bold ml-1'
                  >
                    Log in
                  </a>
                </p>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>	
            </div>
        )
    }
}

export default connect(null, { signup: signup })(Signup);