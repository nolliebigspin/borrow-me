import React from 'react';
import { IonContent, IonPage, IonText, IonItemGroup, IonItem, IonCard, IonInput, IonLabel, IonAvatar } from '@ionic/react';
import { Header, MenuBar } from '../../common/components';
import {IonIcon} from '@ionic/react';
import {addSharp} from 'ionicons/icons';
import RadiusSlider from '../../common/components/RadiusSlider/RadiusSlider'
import './Profile.css'

const Profile: React.FC = () => {
  return (
    <IonPage>
      <Header title={"BorrowMe"} />
      <IonContent color="light" className="content-container">
        <IonItemGroup className="profile-text">
          <IonText color="primary" ><h2>Hallo Vorname Nachname!</h2></IonText>
          <IonText color="primary" ><h2>Deine Daten</h2></IonText>
          <IonText color="dark"><p>
          Hier kannst du deine persönlichen Daten einsehen/ändern, den Radius angeben über den du deine Nachbarschaft definierst und Verleihprofile für deine Gegenstände hinzufügen.
            </p>
          </IonText>
        </IonItemGroup>
        <div className="center-content">
           <IonAvatar className="shadow">
              <img src={"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"} alt="" />
            </IonAvatar>
        </div>
        <div className="center-content">
          <RadiusSlider />
        </div>
        <IonCard color="light">
          <IonInput className="Input" placeholder="Vorname"></IonInput>
        </IonCard>
        <IonCard color="light">
          <IonInput className="Input" placeholder="Nachname"></IonInput>
        </IonCard>
        <IonCard color="light">
          <IonInput className="Input" placeholder="Email"></IonInput>
        </IonCard>
        <IonCard color="light">
          <IonInput className="Input" placeholder="Passwort"></IonInput>
        </IonCard>
        <IonCard color="light">
          <IonInput className="Input" placeholder="Über mich"></IonInput>
        </IonCard>
        <div className="adresss-flex-container">
          <IonCard className="adress-card" >
            <IonLabel color="dark" >Wohnung</IonLabel>
          </IonCard>
          <IonCard className="adress-card" >
            <IonLabel color="dark" >Garten</IonLabel>
          </IonCard>
          <IonCard className="adress-card-new" >
              <IonIcon icon={addSharp} />
          </IonCard>
          <IonCard className="adress-card-new" >
              <IonIcon icon={addSharp} />
          </IonCard>
        </div>
      </IonContent>
      <MenuBar />
    </IonPage>
  );
};

export default Profile;
