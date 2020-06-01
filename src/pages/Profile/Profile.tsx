import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Button, Header } from '../../common/components';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <Header title={"BorrowMe"} />
      <IonContent>
        <Button label="Button 1" />
      </IonContent>
    </IonPage>
  );
};

export default Profile;
