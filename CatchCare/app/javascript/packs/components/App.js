import React from 'react';
import { withCookies } from 'react-cookie';

import Landing from './landingPage';

class App extends React.Component {

    render() {
        return(
            <div className="ui container">
                <Landing cookies={this.props.cookies} history={this.props.history}/>
            </div>
        )
    }    
}

export default withCookies(App);