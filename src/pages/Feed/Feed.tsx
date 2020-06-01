import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Header } from '../../common/components';

const Feed: React.FC = () => {
  return (
    <IonPage>
      <Header title={"BorrowMe"} />
      <IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Feed;
