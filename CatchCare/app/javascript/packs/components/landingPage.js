import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Footer from './Footer';

class Landing extends React.Component {

    render() {

        return(
            <div>
                <Header cookies={this.props.cookies} history={this.props.history}/>
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