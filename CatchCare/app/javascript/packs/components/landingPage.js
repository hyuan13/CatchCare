import React from 'react';
import { connect } from 'react-redux';
import { MDBBtn, MDBIcon, MDBCol, MDBRow, MDBCard, MDBCardTitle, MDBContainer } from "mdbreact";

import Header from './Header';
import Footer from './Footer';

class Landing extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
			width: window.innerWidth
        };
        this.updateDimensions = this.updateDimensions.bind(this);
        
    }

    componentDidMount() {

	    window.addEventListener("resize", this.updateDimensions);

	}



	componentWillUnmount() {

	    window.removeEventListener("resize", this.updateDimensions);

	}

	updateDimensions() {

	    this.setState({width: window.innerWidth});

	}

    render() {

        return(
            <div>
                <Header cookies={this.props.cookies} history={this.props.history}/>
                <MDBContainer fluid style={{position: 'relative', top:'100px', width:'100%'}}> 
                    <MDBRow style = {{position:'absolute', top:'0px'}}>
                        <img src = {require("./images/background.png")} style = {{opacity:'0.61'}} height = {Math.floor(this.state.width*2/3).toString()} width = {this.state.width} alt='catch care' />
                    </MDBRow>
                    <MDBRow 
                        className = "justify-content-center"
                        style = {{backgroundColor:'#95B9C9', opacity:'0.72',position:'absolute', top:'300px', height: '260', width:'100%'}}>
                        <div className = 'justify-content-center align-items-center'>
                            <p style = {{fontSize:"60px", color:"white", opacity:'1.2'}}>Transform the HealthCare </p>
                            <p className = 'align-items-center d-flex justify-content-center' style = {{fontSize:"60px", color:"white", opacity:'1.2'}}>Experience in China</p>
                        </div>
                    </MDBRow>
			        <MDBRow className = "align-items-center justify-content-center" style = {{position:'absolute', top:'800px'}}>
				        <MDBCol md = '4'>
			                <MDBCard className="transparent">
                                <div className="indigo lighten-3 text-white text-center d-flex justify-content-center align-items-center rgba-black-strong py-5 px-4">
                                    <div>
                                    <MDBCardTitle tag="h3" className="pt-2">
                                        <strong style = {{fontSize:'35px'}}>Real Time Consultation</strong>
                                    </MDBCardTitle>
                                    <p style = {{fontSize:'25px'}}>
                                        Chat immediately with one of our online general practitioners
                                    </p>
                                    <MDBBtn style = {{fontSize:'20px'}} gradient = 'purple' size = 'lg' href = "/online" className = 'text-white'>
                                        <MDBIcon icon="clone left" /> Online Consultation
                                    </MDBBtn>
                                    </div>
                                </div>
			                </MDBCard>
			            </MDBCol>
			            <MDBCol md = "1">
			            </MDBCol>
                        <MDBCol md = '4'>
                            <MDBCard>
                                <div className="teal lighten-3 text-white text-center d-flex justify-content-center align-items-center rgba-indigo-strong py-5 px-4">
                                    <div>
                                        <MDBCardTitle tag="h3" className="pt-2">
                                            <strong style = {{fontSize:'35px'}} >Schedule an Appointment</strong>
                                        </MDBCardTitle>
                                        <p style = {{fontSize:'25px'}} >
                                            Schedule an appointment with a general practitioner for later time
                                        </p>
                                        <MDBBtn style = {{fontSize:'20px'}} gradient='peach' size = 'lg' className= 'text-white' onClick = { this.handleClick } id = 'schedule-appointment'> 
                                            <MDBIcon icon="clone left" /> Schedule Appointment
                                        </MDBBtn>
                                    </div>
                                </div>
                            </MDBCard>
                        </MDBCol>
			        </MDBRow>
		        </MDBContainer>
                <div style={{position: 'relative', top:'1300px', width:"100%"}}>
			        <Footer />
		        </div>
            </div>
        )

    }
}

const mapStateToProps = (state, ownProps) => {
    return({
        state: state,
        cookies: ownProps.cookies,
        history: ownProps.history
    });
};

export default connect(mapStateToProps, null)(Landing);