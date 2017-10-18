import React, { Component } from 'react';
import Item from './item';

class List extends Component {
  render() {
    const items = this.props.items;
    const videos = [];
    items.forEach((ele, index) => (videos.push(<Item
      key={`${index}-${ele._id}`}
      {...ele}
      playVideo={this.props.playVideo}
      dispatch={this.props.dispatch}
    />)))
    return (
      <div>
        {videos}
      </div>
    );
  }
}

export default List;
