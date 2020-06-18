import React from 'react';
import { IonContent, IonPage} from '@ionic/react';
import { Header, MenuBar } from '../../common/components';
import ChatCard from '../../common/components/ChatCard/ChatCard';

const Messages: React.FC = () => {
  return (
    <IonPage>
      <Header title={"BorrowMe"} />
      <IonContent color="light">
        <ChatCard 
          contact="Rita"
          image="https://images.unsplash.com/photo-1592214066571-768e647a735e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
        />
        <ChatCard 
          contact="Karen"
          image="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=681&q=80"
        />
        <ChatCard 
          contact="Frida"
          image="https://images.unsplash.com/photo-1567920784890-1c52e889918c?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        />
      </IonContent>
      <MenuBar />
    </IonPage>
  );
};

export default Messages;
