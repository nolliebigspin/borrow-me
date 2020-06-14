import React from 'react';
import { IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import './Header.css';

interface ContainerProps {
  title: string;
}

const Header: React.FC<ContainerProps> = ({ title }) => {
  return (
    <IonHeader className="header">
      <IonToolbar color="primary">
        <IonTitle className="text" color="light">{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
