import React, { Component } from 'react';
import gift from './gift.png';
import cadeau from './disney.mp4'
import './App.css';
import {Animated} from "react-animated-css";
import { Player, BigPlayButton } from 'video-react';
import "./video-react/dist/video-react.css";



class App extends Component {

  constructor() {
    super();
    this.handleClickLikeOn = this.handleClickLikeOn.bind(this);
    this.state = {
      cadeauOpen: true,
    };
  }

  handleClickLikeOn() {
    this.setState({cadeauOpen: false});
  }

  render() {

    return (
    <div>
      { this.state.cadeauOpen ?
      <div className="App">
        <header className="App-header">
          <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
            <div>
              <img onClick={this.handleClickLikeOn} src={gift} className="App-logo" alt="logo" />
            </div>
          </Animated>
          <Animated animationIn="slideInUp" isVisible={true}>
            <h1 className="textTilte">Pensée pour Moumousse</h1>
            <h2 className="textComment">Pour que tu n'oublies jamais que je t'aime</h2>
          </Animated>
        </header>
      </div>
      :
      <div className="page">
        <h1 className="textTitle2">Joyeux Noël mon amoureuse</h1>
        <Player
     playsInline
     poster="/assets/poster.png"
     src={cadeau}
     >
   <BigPlayButton position="center" />
   </Player>
      </div>
      }
    </div>
    );
  }
}

export default App;
