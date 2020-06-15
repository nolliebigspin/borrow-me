import React from 'react';
import './MenuBar.css';

import {
  IonIcon,
  IonTabBar,
  IonTabButton,
} from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';
import { person, home, chatbubbles, mail } from 'ionicons/icons';


const MenuBar: React.FC = () => {

  // router workaround
  const openFeed = (): void => {
    window.location.assign('/feed');
  }
  const openHome = (): void => {
    window.location.assign('/home');
  }
  const openProfile = (): void => {
    window.location.assign('/profile');
  }
  const openMessages = (): void => {
    window.location.assign('/messages');
  }

  return (
    <IonReactRouter>
      <IonTabBar className="menuBar" slot="bottom">
        <IonTabButton tab="profile" href="/profile" onClick={openProfile}>
          <IonIcon icon={person} />
        </IonTabButton>
        <IonTabButton tab="home" href="/home" onClick={openHome}>
          <IonIcon icon={home} />
        </IonTabButton>
        <IonTabButton tab="feed" href="/feed" onClick={openFeed}>
          <IonIcon icon={chatbubbles} />
        </IonTabButton>
        <IonTabButton tab="messages" href="/messages" onClick={openMessages}>
          <IonIcon icon={mail} />
        </IonTabButton>
      </IonTabBar>
    </IonReactRouter>
  );
};

export default MenuBar;
