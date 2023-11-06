import React, { useRef, useEffect } from 'react';

const Camera: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // 获取用户媒体
    const getMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing the camera", error);
      }
    };

    getMedia();

    // 在effect内部声明一个变量并将videoRef.current的值赋给它
    const currentVideoRef = videoRef.current;

    // 清理函数使用这个变量，而不是直接使用videoRef.current
    return () => {
      if (currentVideoRef && currentVideoRef.srcObject) {
        const tracks = (currentVideoRef.srcObject as MediaStream).getTracks();
        tracks.forEach(track => {
          track.stop();
        });
      }
    };
  }, []);

  return (
    <div className="w-96 h-64"> {/* 设置摄像头显示的大小 */}
      <video ref={videoRef} autoPlay playsInline className="w-full h-full"></video>
    </div>
  );
};

export default Camera;
