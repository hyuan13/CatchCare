import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';

class Landing extends React.Component {

    render() {

        return(
            <div>
                <Header cookies={this.props.cookies} history={this.props.history}/>
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