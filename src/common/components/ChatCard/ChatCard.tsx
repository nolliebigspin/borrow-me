import './ChatCard.css'
import React, { useState } from 'react';
import { IonItem, IonLabel, IonAvatar, IonModal, IonContent, IonIcon } from '@ionic/react';
import ChatBubble from '../ChatBubble/ChatBubble';
import { arrowBack } from 'ionicons/icons';
import Header from '../Header/Header';
import SendMessageField from '../SendMessageField/SendMessageField';

interface ContainerProps {
  contact: string;
  image?: string;
}

const ChatCard: React.FC<ContainerProps> = ({ contact, image }) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <IonItem color="light"className="base" onClick={() => setShowModal(true)}>
        <IonAvatar className="avatar">
          <img src={image} alt="" />
        </IonAvatar>
        <IonLabel className="name">{contact}</IonLabel>
      </IonItem>

      <IonModal isOpen={showModal}>
        <IonContent>
          <IonIcon className="backIcon" icon={arrowBack}  onClick={() => setShowModal(false)} />
          <Header
            title="BorrowMe"
          />
          <ChatBubble
            left={true}
            text="Hi! Ist die Bohmaschine gerade zu haben?"
            image={image}
          />
          <ChatBubble
            left={false}
            text="Klar doch, kannst sie gerne morgen abholen kommen :)"
            image="https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
          />
          <ChatBubble
            left={true}
            text="Oh super, vielen Dank! Ich komme dann gehen 10 Uhr am Vormittag. Muss ich sonst noch was mitbringen?"
            image={image}
          />
        </IonContent>
        <div className="send-message-field">
          <SendMessageField />
        </div>
      </IonModal>
    </div>
  );
};

export default ChatCard;
