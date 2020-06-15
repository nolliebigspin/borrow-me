import React from 'react';
import { IonButton, IonContent } from '@ionic/react';
import './ActionButton.css';


interface ContainsProps {
    text: string;
}


const ActionButton: React.FC<ContainsProps> = ({ text }) => {
    return (
        <IonContent className = "container">
            <IonButton className = "button" color="secondary">{text}</IonButton>
        </IonContent>
    );
};

export default ActionButton;
