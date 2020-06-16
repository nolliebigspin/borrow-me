import React from 'react';
import { IonApp, IonRouterOutlet } from '@ionic/react';

import { Header } from './common/components';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';


/* Theme variables */
import './theme/variables.css';

/* Routing */
import { Route, Redirect } from 'react-router';
import Profile from './pages/Profile/Profile';
import Home from './pages/Home/Home';
import Feed from './pages/Feed/Feed';
import Messages from './pages/Messages/Messages';
import Login from './pages/Login/Login';
import { IonReactRouter } from '@ionic/react-router';

const App: React.FC = () => (
  <IonApp>
    <Header title={"BorrowMe"} />
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/profile" component={Profile} />
        <Route path="/home" component={Home} />
        <Route path="/feed" component={Feed} />
        <Route path="/messages" component={Messages} />
        <Route path="/login" component={Login} />
        <Route path="/" render={() => <Redirect to="/login" />} exact={true} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
