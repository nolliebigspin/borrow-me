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
import { person, home, chatbubbles, mail } from 'ionicons/icons';

import Profile from '../../../pages/Profile/Profile';
import Home from '../../../pages/Home/Home';
import Feed from '../../../pages/Feed/Feed';
import Messages from '../../../pages/Messages/Messages';

const MenuBar: React.FC = () => {
  return (
    <IonReactRouter>
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/profile" component={Profile} />
        <Route path="/home" component={Home} />
        <Route path="/feed" component={Feed} />
        <Route path="/messages" component={Messages} />
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
        <IonTabButton tab="messages" href="/messages">
          <IonIcon icon={mail} />
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonReactRouter>
  );
};

export default MenuBar;
