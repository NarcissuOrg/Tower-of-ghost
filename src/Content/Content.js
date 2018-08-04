import React, { Component } from 'react';

import Game from '../Game/Game';
import './content.css';

class Content extends Component {
    render() {
        return (
            <div className={"main"}>
                <div className={"game-block"}>
                    <Game />
                </div>
            </div>
        );
    }
}

export default Content;