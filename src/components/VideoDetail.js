import React from 'react';

import { Paper, Typography } from '@material-ui/core';

const VideoDetail = ({ videos }) => {
  if (!videos) return <div>Loading ...</div>;

  const videoSrc = `https://www.youtube.com/embed/${videos.id.videoId}`;

  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: '70%' }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ height: '30%' }} />
      <Typography variant="h4">
        {videos.snippet.title} - {videos.snippet.channelTitle}
      </Typography>
      <Typography variant="subtitle1">{videos.snippet.channelTitle}</Typography>
      <Typography variant="subtitle2">{videos.snippet.description}</Typography>
    </React.Fragment>
  );
};

export default VideoDetail;
