import React, { Component } from 'react';

import './footer.css';

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: ((new Date()).toString())
        };
    }
    componentDidMount() {
        setInterval(_ => {
            this.setState(_ => {
                return {
                    ..._,
                    time: ((new Date()).toString())
                }
            })
        }, 1000);
    }

    render() {
        return (
            <div className="footer">
                footer -- Today is {this.state.time}
            </div>
        );
    }
}

export default Footer;