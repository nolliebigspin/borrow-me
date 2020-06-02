import React, { useState } from 'react';
import { IonContent, IonPage, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonGrid, IonRow, IonCol } from '@ionic/react';
import { Header } from '../../common/components';

const Login: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
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
        <IonInput value={userName} placeholder="Benutzername" onIonChange={e => setUserName(e.detail.value!)}></IonInput>
        <IonInput value={password} placeholder="Passwort" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
        <IonGrid>
          <IonRow>
            <IonCol>
            <IonButton color="secondary" routerLink="/home">Einloggen</IonButton>
            </IonCol>
            <IonCol>
            <IonButton color="secondary" routerLink="/home">Registrieren</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        
        
      </IonContent>
    </IonPage>
  );
};

export default Login;
