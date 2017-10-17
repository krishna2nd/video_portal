import React, { Component } from 'react';
import Video from './video';

class ThumbsView extends Component {
  render() {
    const videos = this.props.videos;
    const thumbs = [];
    videos.forEach((v) =>{
      thumbs.push(
        <Video.Thumb
          key={v._id}
          {...v}
          playVideo={this.props.playVideo}
          dispatch={this.props.dispatch}
        ></Video.Thumb>
      );
    })
    return (
        <div className="list" >
          {thumbs}
        </div>
    );
  }
}

export default ThumbsView;
