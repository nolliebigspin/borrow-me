import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Button, Header } from '../../common/components';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header title={"BorrowMe"} />
      <IonContent>
        <Button label="Button 2" />
      </IonContent>
    </IonPage>
  );
};

export default Home;
