import React, { Component } from 'react';
import Layout from '../../components/layout';
import Videos from '../../components/videos';
import GetVideo from  '../../lib/actions/video';
import GetVideos from  '../../lib/actions/videos';
import Auth from '../../lib/user';
import { connect } from 'react-redux';

class PlayVideo extends Component {
  constructor() {
    super();
    this.playVideo = this.playVideo.bind(this);
  }
  componentWillMount() {
    const state = this.props.data;
    if (!Auth(state)) {
      this.props.history.push('/login');
      return;
    }
    const { id } = this.props.match.params;
    this.props.dispatch(GetVideo(state.user.sessionId, id));
    if (!state.videos || !state.videos.size) {
      this.props.dispatch(GetVideos(state.user.sessionId));
    }
  }

  componentDidMount() {
    const self = this;
    const state = this.props.data;
    window.onscroll = function(ev) {
      if ((window.innerHeight + window.scrollY) >= (document.body.scrollHeight - 300)) {
        if (!self.props.data.loading) {
          self.props.dispatch(GetVideos(state.user.sessionId, self.props.data.skip));
        }
      }
    };
  }
  playVideo(id) {
    this.props.history.push(`/play/${id}`);
    this.props.dispatch(GetVideo(this.props.data.user.sessionId, id));
    this.forceUpdate();
    document.getElementById('player').scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest"
    });
  }
  render() {
    const state = this.props.data;
    if (!(state && state.playing)) {
      return (
        <Layout>
          <p>No videos available...</p>
        </Layout>);
    }
    console.log('playing..', state.playing);
    return (
      <Layout >
        <Videos.PlayerView 
          playing={state.playing}
          videos={state.videos}
          playVideo={this.playVideo}
          dispatch={this.props.dispatch}
         />
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  data: state,
});
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(PlayVideo);