// LoopingVideo.tsx
import React from 'react';

interface LoopingVideoProps {
  videoSrc: string; // 视频源的路径
}

const LoopingVideo: React.FC<LoopingVideoProps> = ({ videoSrc }) => {
  return (
    <video src={videoSrc} loop autoPlay muted playsInline className="w-full h-auto">
      Your browser does not support the video tag.
    </video>
  );
};

export default LoopingVideo;
