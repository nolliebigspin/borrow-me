import React from 'react';
import './MenuBar.css';

import {
  IonIcon,
  IonTabBar,
  IonTabButton,
} from '@ionic/react';

import { person, home, chatbubbles, mail } from 'ionicons/icons';


const MenuBar: React.FC = () => {

  return (
    <IonTabBar className="menuBar" slot="bottom">
      <IonTabButton tab="profile" href="/profile">
        <IonIcon icon={person} />
      </IonTabButton>
      <IonTabButton tab="home" href="/home">
        <IonIcon icon={home} />
      </IonTabButton>
      <IonTabButton tab="feed" href="/feed">
        <IonIcon icon={chatbubbles} />
      </IonTabButton>
      <IonTabButton tab="messages" href="/messages">
        <IonIcon icon={mail} />
      </IonTabButton>
    </IonTabBar>
  );
};

export default MenuBar;
