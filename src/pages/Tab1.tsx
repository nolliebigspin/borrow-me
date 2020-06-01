import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Button, Header } from '../components';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <Header title={"BorrowMe"} />
      <IonContent>
        <Button label="Button 1" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
