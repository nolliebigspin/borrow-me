import './ChatCard.css'
import React from 'react';
import { IonItem, IonLabel, IonAvatar } from '@ionic/react';
import { useHistory } from 'react-router';


interface ContainerProps {
  contact: string;
  image?: string;
}

const ChatCard: React.FC<ContainerProps> = ({ contact, image }) => {
  const history = useHistory();

  const handleClick = (): void => {
    history.push("/messages/" + contact)
  }

  return (
    <div onClick={handleClick} className="base">
      <IonItem color="light">
        <IonAvatar className="shadow">
          <img src={image} alt="" />
        </IonAvatar>
        <IonLabel className="name">{contact}</IonLabel>
      </IonItem>
    </div>
  );
};

export default ChatCard;
