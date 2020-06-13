import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Header, MenuBar } from '../../common/components';
import SendMessageField from '../../common/components/SendMessageField/SendMessageField';


const Home: React.FC = () => {
  return (
    <IonPage>
      <Header title={"BorrowMe"} />
      <IonContent color="light">
      <SendMessageField/>
      </IonContent>
      <MenuBar />
    </IonPage>
  );
};

export default Home;
