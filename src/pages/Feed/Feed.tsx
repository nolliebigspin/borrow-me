import React from 'react';
import { IonContent, IonPage, IonText } from '@ionic/react';
import { Header, MenuBar } from '../../common/components';
import ChatBubble from '../../common/components/ChatBubble/ChatBubble';

import './Feed.css'

const Feed: React.FC = () => {
  return (
    <IonPage>
      <Header title={"BorrowMe"} />
      <IonContent color="light">
        <IonText className="pageTitle" color="primary" >Das ist gerade los in deiner Nachbarschaft</IonText>
          <ChatBubble
              left={true}
              text="Hi! Hat wer vielleicht eine Bohmaschine zu vergeben?"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          />
          <ChatBubble
              left={true}
              text="Ich hätte eine, aber leider nur mit Akku."
              image="https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
          />
          <ChatBubble
              left={true}
              text="Ich hab eine! Kannst sie dir gerne ausleihen. Bin nur leider bis übermorgen noch unterwegs :O"
              image="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1276&q=80"
          />
          <ChatBubble
              left={true}
              text="Oh nein, mit eigener Stromversorgung wäre besser. Brauche sie am besten heute schon."
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          />
          <ChatBubble
              left={true}
              text="Hey! Ich hab eine hier rumliegen, kannst heute jederzeit vorbei schauen! Meine Adresse schalte ich dir frei :)"
              image="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=681&q=80"
          />
          
        </IonContent>  
      <MenuBar />
    </IonPage>
  );
};

export default Feed;
