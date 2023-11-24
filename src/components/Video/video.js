import React from "react";
import YouTube from 'react-youtube';

const YouTubeVideo = ({ videoId }) => {
  const opts = {
    height: "560",
    width: "1100",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} style={{marginRight:60,marginTop:40, marginBottom:40 } }/>;
};
export default YouTubeVideo;