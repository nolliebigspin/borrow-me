import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Header } from '../../common/components';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <Header title={"BorrowMe"} />
      <IonContent color="light">
      </IonContent>
    </IonPage>
  );
};

export default Profile;