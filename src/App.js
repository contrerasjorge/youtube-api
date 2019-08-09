import React from 'react';

import { Grid } from '@material-ui/core';

import { SearchBar, VideoDetail, VideoList } from './components';

import youtube from './api/youtube';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.handleSubmit('javascript');
  }

  onVideoSelect = videos => {
    this.setState({ selectedVideo: videos });
  };

  handleSubmit = async searchTerm => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: process.env.REACT_APP_API_KEY,
        q: searchTerm
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  render() {
    const { videos, selectedVideo } = this.state;

    return (
      <Grid style={{ justifyContent: 'center' }} container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12} style={{ position: 'fixed', width: '100%' }}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8} style={{ marginTop: '80px' }}>
              <VideoDetail videos={selectedVideo} />
            </Grid>
            <Grid item xs={4} style={{ marginTop: '80px' }}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
