import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Button, Header } from '../../common/components';

const Messages: React.FC = () => {
  return (
    <IonPage>
      <Header title={"BorrowMe"} />
      <IonContent>
        <Button label="Button 4" />
      </IonContent>
    </IonPage>
  );
};

export default Messages;
