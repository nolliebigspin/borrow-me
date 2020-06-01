import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Button, Header } from '../components';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <Header title={"BorrowMe"} />
      <IonContent>
        <Button label="Button 3" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
