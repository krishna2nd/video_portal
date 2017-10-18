import React, { Component } from 'react';
import StarRating from '../rating';

import "./index.css";

class Player extends Component {
  componentDidMount() {
  }
  componentWillUnmount() {
    if (this.player) {
      this.player.src = '#';
    }
  }
  componentWillReceiveProps(newProps) {
    const uri = `/${newProps.url}`;
    if (this.player) {
      this.player.pause();
      this.player.setAttribute('src', uri)
      this.player.load();
      this.player.play();
    }
  }
  render() {
    const state = this.props;
    return (
      <div id='player' className="player">
        <h4>{state.name}</h4>
        <video width="100%" controls
          ref={(player) => { this.player = player}}
          src={`/${this.props.url}`}
        >
         <source src={`/${this.props.url}`} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <StarRating
          key={state._id}
          ratings={state.ratings}
          dispatch={state.dispatch}
          id={state._id}
          ></StarRating>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Player;
