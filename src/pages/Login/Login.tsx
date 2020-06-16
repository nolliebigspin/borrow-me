import React, { useState } from 'react';
import { IonContent, IonPage, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonGrid, IonRow, IonCol, IonAlert } from '@ionic/react';
import { Header } from '../../common/components';
import { useHistory } from 'react-router';

import './Login.css'
import ChatBubble from '../../common/components/ChatBubble/ChatBubble';

const LIST_OF_USERS = ["Alec", "Alex", "Leonard", "Rafael", "admin"];

const Login: React.FC = () => {
  const history = useHistory();
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginFailed, setLoginFailed] = useState(false);


  const checkLogin = (): any => {
    if (LIST_OF_USERS.includes(userName) && (password === "Hallo123" || password === "admin")) {
      console.log("Login succeed!");
      history.push("/home")
    } else {
      console.log("Login failed!");
      setLoginFailed(true);
    }
  }

  const handleKeyDown = (e: any): void => {
    if (e.key === "Enter") {
      checkLogin();
    }
  }
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
            <br/>
            <br/>
            <p>Folgende Möglichkeiten bieten wir dir:</p>
            <p>1) Gegenstände Leihen/Verleihen</p>
            <p>2) Hilfe anfragen/anbieten</p>
            <p>3) Wissensaustausch</p>
          </IonCardContent>
        </IonCard>
        <IonCard color="light">
          <IonInput className="Input" value={userName} placeholder="Benutzername" onIonChange={e => setUserName(e.detail.value!)}></IonInput>
        </IonCard>
        <IonCard color="light">
          <IonInput className="Input" value={password} placeholder="Passwort" type="password" onKeyDown={e => handleKeyDown(e)} onIonChange={e => setPassword(e.detail.value!)}></IonInput>
        </IonCard>
        {loginFailed ? (
          <IonAlert
            cssClass="my-custom-class"
            isOpen={loginFailed}
            onDidDismiss={() => setLoginFailed(false)}
            header={'Login failed!'}
            message={'Please enter a correct login.'}
            buttons={['OK']}
          />
        ) : ( 
          null
        )}
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton className="Button" color="secondary" onClick={checkLogin}>Einloggen</IonButton>
            </IonCol>
            <IonCol>
              <IonButton className="Button" color="secondary" routerLink="/profile">Registrieren</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <ChatBubble
          left={true}
          text="Hi! Ist die Bohmaschine gerade zu haben?"
          image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        />
        <ChatBubble
          left={false}
          text="Klar doch, kannst sie gerne morgen abholen kommen :)"
          image="https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
        />
        <ChatBubble
          left={true}
          text="Oh super, vielen Dank! Ich komme dann gehen 10 Uhr am Vormittag. Muss ich sonst noch was mitbringen?"
          image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
