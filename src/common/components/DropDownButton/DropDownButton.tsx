import React from 'react';
import { IonButton, IonIcon} from '@ionic/react';
import {chevronDownSharp} from "ionicons/icons";
import './DropDownButton.css';


const ActionButton: React.FC = () => {
    return (
      <div className="container">
        <IonButton className = "button" color="secondary">
          <IonIcon className="icon" icon={chevronDownSharp}></IonIcon>
        </IonButton>
      </div>
        
    );
};

export default ActionButton;