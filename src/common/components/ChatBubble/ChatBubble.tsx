import React from 'react';
import './ChatBubble.css'
import { IonAvatar, IonGrid, IonRow } from '@ionic/react';


interface ContainerProps {
  text: string;
  left: boolean;
  image?: string;
}

const ChatBubble: React.FC<ContainerProps> = ({ text, image, left }) => {
  return (
    <div>
      {left ? (
        <div className="baseLeft">
        <IonGrid>
          <IonRow>
            <IonAvatar className="shadow">
              <img src={image} alt="" />
            </IonAvatar>
            <div className="talk-bubble round shadow">
              <div className="talktext">
                <p>{text}</p>
              </div>
            </div>
          </IonRow>
        </IonGrid>
      </div>
      ) : (
        <div className="baseRight">
        <IonGrid>
          <IonRow>
            <div className="talk-bubble round shadow">
              <div className="talktext">
                <p>{text}</p>
              </div>
            </div>
            <IonAvatar className="shadow">
              <img src={image} alt="" />
            </IonAvatar>
          </IonRow>
        </IonGrid>
      </div>
      )}
    </div>
  );
};

export default ChatBubble;
