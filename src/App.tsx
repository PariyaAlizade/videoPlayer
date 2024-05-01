import React, { useRef, useState } from "react";
import Button from "./components/button/Button";
import TextFeild from "./components/textField/TextField";
import VideoPlayer from "./components/videoPlayer/VideoPlayer";
import Comment from "./components/comment/Comment";
import { IComment } from "./types/comment";

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const commentInputRef = useRef<HTMLInputElement>(null);
  const commentTimeRef = useRef<number>(0);

  const [comments, setComments] = useState<Array<IComment>>([]);
  const [displayedcomment, setDisplayedComment] = useState<Array<IComment>>([]);

  const handleTimeUpdate = () => {
    const currentTime = videoRef.current!.currentTime;
    const currentComment = comments.filter(
      (comment) =>
        comment.time > currentTime - 1 && comment.time < currentTime + 1
    );
    if (currentComment) {
      setDisplayedComment([...currentComment]);
    } else {
      setDisplayedComment([]);
    }
  };

  const handleAddComment = () => {
    const commentText = commentInputRef.current!.value;
    if (commentText.trim() === "") return;
    const newComment = { time: commentTimeRef.current, text: commentText };
    setComments([...comments, newComment]);
    commentInputRef.current!.value = "";
  };

  const handleComment = () => {
    if (isVideoPlaying()) {
      commentTimeRef.current = videoRef.current!.currentTime;
    }
  };

  const isVideoPlaying = () => {
    return (
      videoRef.current!.currentTime > 0 &&
      !videoRef.current!.paused &&
      !videoRef.current!.ended
    );
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-10">
      <div className="flex justify-center gap-4 relative">
        <TextFeild onFocus={handleComment} ref={commentInputRef} />
        <Button
          buttonType="Primary"
          size="L"
          text="Add Comment"
          onClick={handleAddComment}
        />
      </div>
      <VideoPlayer
        ref={videoRef}
        onVideoTimeUpdate={handleTimeUpdate}
        comments={comments}
      />
      <div className="absolute bottom-9">
        {displayedcomment.map((item) => (
          <Comment text={item.text} time={item.time} />
        ))}
      </div>
    </div>
  );
}

export default App;
