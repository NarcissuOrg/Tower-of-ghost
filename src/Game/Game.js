import React, { Component } from 'react';
import Start from './Start/Start';
import Fight from './Fight/Fight';
import Flow from './Flow';
import './game.css';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = { ...this.defaultState };
        this.saveGame = this.saveGame.bind(this);
        this.nextGameFlow = this.nextGameFlow.bind(this);


    }
    defaultState() {
        let state = {
            game: {},
            gameFlow: {}
        };
        return state;
    }
    saveGame(game) {
        this.setState(_ => {
            return {
                ..._,
                game
            }
        })
    }
    componentDidMount() {
        this.nextGameFlow();
    }
    nextGameFlow() {
        let nextState = Flow.next();
        console.log(`nextGameFlow() nextState : `, nextState);
        let gameFlow = {
            ...this.state.gameFlow,
            GameState: nextState.value
        }
        this.setState(_ => {
            return {
                ..._,
                gameFlow: gameFlow
            }
        }, _ => {
            console.log(this.state)
        })

    }
    render() {
        const { props, state } = this;
        return (
            <div className={'game'}>
                <Start
                    state={state.gameFlow}
                    game={state.game}
                    onClick={_ => {
                        // console.log(`Game.js Start()`, _);
                        this.nextGameFlow();
                    }}
                />
                <Fight
                    state={state.gameFlow}
                    game={state.game}
                    onClick={_ => {
                        // console.log(`Game.js Fight()`, _);
                    }}
                    onFinish={_ => {
                        console.log(`Game.js Fight() onFinish : `, _);
                    }}
                />
            </div>
        );
    }
}

export default Game;