import React from 'react';
import './ChatBubble.css'


interface ContainerProps {
  text: string;
  image?: string;
  imagepos?: string;
}

const ChatBubble: React.FC<ContainerProps> = ({ text, image }) => {
  return (
    <div className="base">
      <div className="talk-bubble tri-right round right-in">
        <div className="talktext">
          <p>{text}</p>
        </div>
      </div>
      <img src={`../../../${image}.jpg`} alt="" className="avatar"></img>
    </div>
  );
};

export default ChatBubble;
