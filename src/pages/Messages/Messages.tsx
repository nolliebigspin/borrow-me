import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Header, MenuBar } from '../../common/components';
import ChatCard from '../../common/components/ChatCard/ChatCard';

const Messages: React.FC = () => {
  return (
    <IonPage>
      <Header title={"BorrowMe"} />
      <IonContent color="light">
        <ChatCard 
          contact="DieBiene"
          image="https://images.unsplash.com/photo-1592214066571-768e647a735e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
        />
        <ChatCard 
          contact="DieWespe"
          image="https://images.unsplash.com/photo-1592214066571-768e647a735e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
        />
        <ChatCard 
          contact="EineFliege"
          image="https://images.unsplash.com/photo-1592214066571-768e647a735e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
        />
        <ChatCard 
          contact="Turbo3000"
          image="https://images.unsplash.com/photo-1592214066571-768e647a735e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
        />
        <ChatCard 
          contact="XyABC23"
          image="https://images.unsplash.com/photo-1592214066571-768e647a735e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
        />
      </IonContent>
      <MenuBar />
    </IonPage>
  );
};

export default Messages;
