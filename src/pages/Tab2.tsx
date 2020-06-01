import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Button, Header } from '../components';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <Header title={"BorrowMe"} />
      <IonContent>
        <Button label="Button 2" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
