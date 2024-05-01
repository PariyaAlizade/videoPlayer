import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { IComment } from "../../types/comment";
import SeekbarComment from "../seekbarComment/SeekbarComment";

interface VideoPlayerProps {
  onVideoTimeUpdate: () => void;
  comments: Array<IComment>;
}

const VideoPlayer = forwardRef<HTMLVideoElement, VideoPlayerProps>(
  (props, ref) => {
    const { onVideoTimeUpdate, comments } = props;
    const [isPlaying, setIsPlaying] = useState<Boolean>(false);
    const [progress, setProgress] = useState<number>(0);

    const videoRef = useRef<HTMLVideoElement>(null);
    const duration = useRef<number>(0);

    useImperativeHandle(ref, () => videoRef.current!);

    function handelPlayPause() {
      if (isPlaying) {
        videoRef.current!.pause();
        setIsPlaying(false);
      } else {
        videoRef.current!.play();
        setIsPlaying(true);
      }
    }

    function handleTimeUpdate() {
      if (duration.current) {
        setProgress((videoRef.current!.currentTime / duration.current) * 100);
      }
      onVideoTimeUpdate();
    }

    const handleSeek = (e: React.MouseEvent<HTMLDivElement,MouseEvent>) => {
      console.log("offsetX",e.nativeEvent.offsetX);
      //@ts-ignore
      console.log("offsetParent",e.target.offsetParent.offsetWidth);
      console.log("mouse event",e);
      //@ts-ignore
      const seekTime = (e.nativeEvent.offsetX / e.target.offsetParent.offsetWidth) * duration.current;
      videoRef.current!.currentTime = seekTime;
      setProgress((seekTime / duration.current) * 100);
    };

    return (
      <div className="relative">
        <video
          ref={videoRef}
          onTimeUpdate={handleTimeUpdate}
          className="w-[800px]"
          onClick={handelPlayPause}
          onLoadedMetadata={() =>
            (duration.current = videoRef.current!.duration)
          }
          onEnded={() => setIsPlaying(false)}
        >
          <source src="/assets/newyork.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className="absolute right-4 bottom-4 left-4 cursor-pointer"
          onClick={handleSeek}
        >
          <div className="h-[4px] bg-white opacity-60 rounded-full absolute w-full"></div>
          <div
            className={`h-[4px] bg-white rounded-full absolute transition-all ease-linear`}
            style={{ width: `${progress}%` }}
          ></div>
          {comments.map((comment) => (
            <SeekbarComment
              text={comment.text}
              position={(comment.time / duration.current) * 100}
            />
          ))}
        </div>
      </div>
    );
  }
);

export default VideoPlayer;
