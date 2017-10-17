import React, { Component } from 'react';
import Player from './video/player';
import List from './video/list';

class PlayerView extends Component {
  render() {
    const videos = new Map(this.props.videos);
    if (!this.props.playing) return null;

    const id = this.props.playing._id;
    
    console.log('player view', this.props.playing, this.props.videos);
    if (videos && videos.has(this.props.playing._id)) {
      videos.delete(id);
    }
    return (
      <div className="row" >
        <div className="col-9">
          <Player
            {...this.props.playing}
            dispatch={this.props.dispatch}
            />
        </div>
        <div className="col-3">
          <div>
          {
            videos ? (<List
                items={videos}
                playVideo={this.props.playVideo}
                dispatch={this.props.dispatch}
                />) : (null)
          }
          </div>
          
        </div>
      </div>
    );
  }
}

export default PlayerView;
