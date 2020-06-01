import React from 'react';
import { IonContent, IonPage, IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import { Header } from '../../common/components';

const Login: React.FC = () => {
  return (
    <IonPage>
      <Header title={"BorrowMe"} />
      <IonContent color="light">
        <IonCard color="light">
          <IonCardHeader>
            <IonCardTitle>Willkommen bei BorrowMe!</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Wir bieten dir die Möglichkeit deine Nachbarn kennenzulernen und dich mit ihnen zu vernetzen.  
            Es ist Egal wie alt du bist oder welche Fähigkeiten du hast, trage deinen Teil zu einem angenehmen und hilfbereiten Miteinander bei.

            Folgende Möglichkeiten bieten wir dir:
            1) Gegenstände Leihen/Verleihen
            2) Hilfe anfragen/anbieten
            3) Wissensaustausch
          </IonCardContent>
        </IonCard>
        <IonButton color="secondary" href="/home">Einloggen</IonButton>
        <IonButton color="secondary">Registrieren</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
