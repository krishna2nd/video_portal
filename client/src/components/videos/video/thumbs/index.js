import React, { Component } from 'react';
import StarRating from '../rating';
import './index.css';

class Thumbs extends Component {
  constructor() {
    super();
    this.playVideo = this.playVideo.bind(this);
  }
  playVideo() {
    if(this.props.playVideo) {
      this.props.playVideo(this.props._id);
    }
  }
  render() {
    // console.log(this.props)
    return (
      <div className="thumbnail row" onClick={this.playVideo} >
        <div className="col-12 t-left" >
          <h4>{this.props.name.slice(0, 51)}</h4>
        </div>
        <div className="col-12" >
          <video width="100%" controls>
            <source src={`/${this.props.url}`} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
        <div className="col-12 t-left" >
        <StarRating
          key={this.props._id}
          id={this.props._id}
          ratings={this.props.ratings}
          dispatch={this.props.dispatch}
          ></StarRating>
        </div>
        <div className="col-12 t-left" >
          <p>{(this.props.description||'').slice(0, 100)}...</p>
        </div>
      </div>
    );
  }
}

export default Thumbs;
