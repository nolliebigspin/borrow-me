import React, { useState } from 'react';
import { IonContent, IonPage, IonText, IonItemGroup, IonCard, IonInput, IonLabel, IonAvatar , IonModal} from '@ionic/react';
import { Header, MenuBar } from '../../common/components';
import {IonIcon} from '@ionic/react';
import {addSharp} from 'ionicons/icons';
import RadiusSlider from '../../common/components/RadiusSlider/RadiusSlider'
import './Profile.css'


const Profile: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [location, setLocation] = useState("");

  const handleClick = (locationName : string) : void => {
    setShowModal(true);
    setLocation(locationName)
  }


  return (
    <IonPage>
      <Header title={"BorrowMe"} />
      <IonContent color="light" className="content-container">
        <IonModal isOpen={showModal}>

          {location === "home" &&
            <div className="adress-info-container">
              <IonLabel color="primary">Wohnung</IonLabel>
              <IonCard color="light" className="adress-content">
                <IonLabel>Beispielstraße</IonLabel>
              </IonCard>
              <IonCard color="light" className="adress-content">
                <IonLabel>12</IonLabel>
              </IonCard>
              <IonCard color="light" className="adress-content">
                <IonLabel>12345</IonLabel>
              </IonCard>
              <IonCard color="light" className="adress-content">
                <IonLabel>Beispielstadt</IonLabel>
              </IonCard>
            </div>
          }

          {location === "garden" && 
            <div className="adress-info-container">
              <IonLabel color="primary">Garten</IonLabel>
              <IonCard color="light" className="adress-content">
                <IonLabel>Beispielstraße</IonLabel>
              </IonCard>
              <IonCard color="light" className="adress-content">
                <IonLabel>90</IonLabel>
              </IonCard>
              <IonCard color="light" className="adress-content">
                <IonLabel>12345</IonLabel>
              </IonCard>
              <IonCard color="light" className="adress-content">
                <IonLabel>Beispielstadt</IonLabel>
              </IonCard>
            </div>
          }

          {location === "new" &&
            <div className="adress-input-container">
              <div className="headline">
                <IonLabel color="primary">Neuse Profil</IonLabel>
              </div>
            
              <IonCard color="light" className="adress-content">
                <IonInput className="input" placeholder="Profil Name"></IonInput>
              </IonCard>
              <IonCard color="light" className="adress-content">
                <IonInput className="input" placeholder="Straße"></IonInput>
              </IonCard>
              <IonCard color="light" className="adress-content">
                <IonInput className="input" placeholder="Hausnummer"></IonInput>
              </IonCard>
              <IonCard color="light" className="adress-content">
                <IonInput className="input" placeholder="Postleitzahl"></IonInput>
              </IonCard>
              <IonCard color="light" className="adress-content">
                <IonInput className="input" placeholder="Ort"></IonInput>
              </IonCard>
              <IonCard color="secondary" className="accept-button" onClick={() => setShowModal (false)}>
                BESTÄTIGEN
              </IonCard>
            </div>
          }
          
          <IonCard color="secondary" className="back-button" onClick={() => setShowModal (false)}>Zurück</IonCard>
        </IonModal>

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
        <div className="adress-flex-container">
          <IonCard color="light" className="adress-card" onClick={() => handleClick("home")}>
            <IonLabel color="dark" >Wohnung</IonLabel>
          </IonCard>
          <IonCard color="light" className="adress-card" onClick={() => handleClick("garden")}>
            <IonLabel color="dark" >Garten</IonLabel>
          </IonCard>
          <IonCard color="light" className="adress-card-new" onClick={() => handleClick("new")}>
              <IonIcon icon={addSharp} />
          </IonCard>
          <IonCard color="light" className="adress-card-new" onClick={() => handleClick("new")}>
              <IonIcon icon={addSharp} />
          </IonCard>
        </div>
      </IonContent>
      <MenuBar />
    </IonPage>
  );
};

export default Profile;
