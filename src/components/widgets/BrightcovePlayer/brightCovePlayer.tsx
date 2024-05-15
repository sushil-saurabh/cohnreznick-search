import React from 'react';
import ReactPlayerLoader from '@brightcove/react-player-loader';
interface BrightcovePlayerProps {
  videoId: string;
}
const BrightcovePlayer = ({ videoId }: BrightcovePlayerProps) => {
  return (
    <ReactPlayerLoader
      accountId="5793223965001"
      videoId={videoId}
      player="m8PPlSzK3"
      options={{
        autoplay: true,
        muted: false,
        controls: true,
        playsinline: true,
        loop: false,
        preload: 'auto',
      }}
    />
  );
};

export default BrightcovePlayer;
