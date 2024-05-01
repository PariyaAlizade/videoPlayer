import React, { memo } from "react";

interface CommentProps {
  text: string;
  time: number;
}

const Comment = memo((props: CommentProps) => {
  const { text, time } = props;
  
  return (
    <div
      className="bg-[#070C15] flex
    relative rounded-lg 
    py-3.5 px-4 before:content-[''] 
    before:w-4 before:h-4 
    before:bg-[#070C15] 
    before:rotate-45 
    before:rounded-sm 
    before:absolute 
    before:bottom-full 
    before:right-1/2 
    before:translate-y-1/2 
    before:translate-x-1/2
    text-[8px]
    text-white"
    >
      <div className="font-bold">{Math.round(time * 100) / 100}:</div>
      <div className="font-medium">{text}</div>
    </div>
  );
});

export default Comment;
