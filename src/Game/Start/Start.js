import React, { Component } from 'react';

class Start extends Component {
    constructor(props) {
        super(props);
        this.start = this.start.bind(this);
    }
    start(e) {
        console.log(`Start.js start(${e})`);
        this.props.onClick && this.props.onClick(e);
    }
    render() {
        return (
            <div className={'btn'}>
                <button onClick={this.start}>Start</button>
            </div>
        );
    }
}

export default Start;