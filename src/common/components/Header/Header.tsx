import React from 'react';
import { IonHeader, IonTitle, IonToolbar } from '@ionic/react';

interface ContainerProps {
  title: string;
}

const Header: React.FC<ContainerProps> = ({ title }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
