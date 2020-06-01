import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Button, Header } from '../../common/components';

const Feed: React.FC = () => {
  return (
    <IonPage>
      <Header title={"BorrowMe"} />
      <IonContent>
        <Button label="Button 3" />
      </IonContent>
    </IonPage>
  );
};

export default Feed;
