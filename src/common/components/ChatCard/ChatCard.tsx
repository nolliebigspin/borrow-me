import './ChatCard.css'
import React from 'react';
import { IonItem, IonLabel, IonAvatar } from '@ionic/react';

interface ContainerProps {
  contact: string;
  image?: string;
}

const ChatCard: React.FC<ContainerProps> = ({ contact, image }) => {
  return (
    <div className="base">
      <IonItem color="light">
        <IonAvatar className="avatar">
          <img src={image} alt="" />
        </IonAvatar>
        <IonLabel className="name">{contact}</IonLabel>
      </IonItem>
    </div>
  );
};

export default ChatCard;
