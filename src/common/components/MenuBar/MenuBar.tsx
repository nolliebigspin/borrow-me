import React from 'react';
import './MenuBar.css';

import {
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';

import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import { person, home, chatbubbles } from 'ionicons/icons';

import Tab1 from '../../../pages/Tab1';
import Tab2 from '../../../pages/Tab2';
import Tab3 from '../../../pages/Tab3';

const MenuBar: React.FC = () => {
  return (
    <IonReactRouter>
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/profile" component={Tab1} />
        <Route path="/home" component={Tab2} />
        <Route path="/feed" component={Tab3} />
        <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="profile" href="/profile">
          <IonIcon icon={person} />
        </IonTabButton>
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={home} />
        </IonTabButton>
        <IonTabButton tab="feed" href="/feed">
          <IonIcon icon={chatbubbles} />
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonReactRouter>
  );
};

export default MenuBar;
