// App.tsx
import React from 'react';
import Camera from './Camera';
import LoopingVideo from './LoopingVideo';
import './App.css'; // 假设你在这个CSS文件中定义了你的样式

const App: React.FC = () => {
  // 注意：本地视频文件需要放在public目录下或者通过Webpack等工具处理后才能正确引用
  const videoPath = './Untitled Video.mp4'; // 更改为你的视频文件路径

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200"> {/* 设置背景色和居中对齐 */}
      <div className="relative"> {/* 主视频 */}
        <LoopingVideo videoSrc={videoPath} />
      </div>
      <div className="absolute top-4 right-4 w-1/4"> {/* 次窗口，根据需要调整大小 */}
        <Camera />
      </div>
    </div>
  );
};

export default App;
