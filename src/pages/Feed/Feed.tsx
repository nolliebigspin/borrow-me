import React from 'react';
import { IonContent, IonPage, IonText } from '@ionic/react';
import { Header, MenuBar } from '../../common/components';
import './Feed.css'

const Feed: React.FC = () => {
  return (
    <IonPage>
      <Header title={"BorrowMe"} />
      <IonContent color="light">
        <IonText className="pageTitle" color="primary" >Das ist gerade los in deiner Nachbarschaft</IonText>
 
        </IonContent>
      <MenuBar />
    </IonPage>
  );
};

export default Feed;
