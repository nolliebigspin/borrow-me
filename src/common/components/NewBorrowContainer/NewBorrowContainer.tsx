import React from 'react';
import './NewBorrowContainer.css';
import { IonCard, IonInput, IonGrid, IonRow, IonIcon, IonCol, IonItem, IonLabel, IonSelect, IonSelectOption, IonTextarea } from '@ionic/react';
import { cameraOutline } from 'ionicons/icons';

const NewBorrowContainer: React.FC = () => {

  return (
    <div className="base">
      <IonGrid>

        <IonCard>
          <IonInput className="input" placeholder="Titel"></IonInput>
        </IonCard>

        <IonRow>
          <IonCard>
            <IonIcon className="icon" icon={cameraOutline} />
          </IonCard>
          <IonCol>
            <IonCard>
              <IonItem>
                <IonLabel>Kategorie</IonLabel>
                <IonSelect>
                  <IonSelectOption value="brown">Werkzeug</IonSelectOption>
                  <IonSelectOption value="blonde">Angelzubehör</IonSelectOption>
                  <IonSelectOption value="black">Holz</IonSelectOption>
                  <IonSelectOption value="red">Computer</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonCard>
            <IonCard>
              <IonItem>
                <IonLabel>Verleihprofil</IonLabel>
                <IonSelect>
                  <IonSelectOption value="brown">Garten</IonSelectOption>
                  <IonSelectOption value="blonde">Haus</IonSelectOption>
                  <IonSelectOption value="black">Yachthafen</IonSelectOption>
                  <IonSelectOption value="red">Golfplatz</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonCard>
          </IonCol>
        </IonRow>

        <IonCard>
          <IonTextarea className="input" placeholder="Beschreibung" rows={8}></IonTextarea>
        </IonCard>

      </IonGrid>
    </div>
  );
};

export default NewBorrowContainer;
