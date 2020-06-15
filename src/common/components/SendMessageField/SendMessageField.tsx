import React from 'react';
import {IonInput, IonIcon} from '@ionic/react';
import './SendMessageField.css';
import {sendSharp} from 'ionicons/icons';

const SendMessageField: React.FC = () => {
    return (
        <div className="container">
            <IonInput className="inputElement" placeholder="Nachricht"></IonInput>
            <IonIcon className="sendElement" icon={sendSharp} />
        </div>
    );
};

export default SendMessageField;