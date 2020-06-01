import React from 'react';
import { IonContent, IonPage, IonButton } from '@ionic/react';
import { Header } from '../../common/components';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <Header title={"BorrowMe"} />
      <IonContent color="light">
        <IonButton color="secondary">Einloggen</IonButton>
        <IonButton color="secondary">Registrieren</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
