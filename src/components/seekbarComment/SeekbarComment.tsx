import React, { memo } from "react";

interface CommentProps {
  text: string;
  position: number;
}

const SeekbarComment = memo((props: CommentProps) => {
  const { text, position } = props;

  return (
    <div
      className={`group w-2 h-2 border-2 rounded-full border-red-primary absolute top-[-2px] bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.2)]`}
      style={{ left: `${position}%` }}
    >
      <div
        className={`hidden bg-white absolute rounded bottom-4 text-nowrap translate-x-[-12px] p-2 before:content-[''] 
before:w-2.5 before:h-2.5 
before:bg-white 
before:rotate-45 
before:rounded-sm 
before:absolute 
before:bottom-0 
before:left-0 
before:translate-y-1/2 
before:translate-x-[10px]
text-[8px] group-hover:block`}
      >
        {text}
      </div>
    </div>
  );
});

export default SeekbarComment;
