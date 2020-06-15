import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Header, MenuBar } from '../../common/components';
import ProductFull from '../../common/components/ProductFull/ProductFull';

const Messages: React.FC = () => {
  return (
    <IonPage>
      <Header title={"BorrowMe"} />
      <IonContent color="light">
        <ProductFull 
          title="Bohrmaschine"
          image="https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
          description="Eine bestimmt nicht geklaute Bohrmaschine, die manchmal etwas qualmt. Sonst ist diese aber in gutem Zustand"
          distance="3"
          category="Werkzeug"
          available={false}
        />
      </IonContent>
      <MenuBar />
    </IonPage>
  );
};

export default Messages;
