import React, { Component } from 'react';

import './fight.css';

class Fight extends Component {
    render() {
        return (
            <div className={'fight ' + (this.props.className || '')}>
                Fight UI
            </div>
        );
    }
}

export default Fight;