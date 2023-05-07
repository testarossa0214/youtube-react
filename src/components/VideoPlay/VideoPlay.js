// import React from 'react';
// import Youtube from 'react-youtube';
// import Style from './VideoPlay.module.scss';

// export const VideoPlay = ({ id }) => {
//   return (
//     <div className={Style.wrap}>
//       <Youtube className={Style.video} videoId={id} />
//     </div>
//   );
// };

// export default VideoPlay;
import React from 'react';
import Youtube from 'react-youtube';
import Style from './VideoPlay.module.scss';

export const VideoPlay = ({ id }) => {
  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      // Additional player options can be added here.
      autoplay: 0,
    },
  };

  return (
    <div className={Style.wrap}>
      <Youtube className={Style.video} videoId={id} opts={opts} />
    </div>
  );
};

export default VideoPlay;
