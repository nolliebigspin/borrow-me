import './ChatCard.css'
import React from 'react';
import { IonCard, IonInput, IonGrid, IonRow, IonImg, IonCol, IonItem, IonLabel, IonSelect, IonSelectOption, IonTextarea } from '@ionic/react';
import ActionButton from '../ActionButton/ActionButton';

const EditGiven: React.FC = () => {
  return (
    <div  className="container">
      <div className="base">
        <IonGrid>
          <IonCard>
            <IonInput className="input" placeholder="Titel"></IonInput>
          </IonCard>
          <IonRow>
            <IonCard>
              <IonImg className="image" src="https://images.unsplash.com/photo-1502068713670-5acaa8128a4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80" />
            </IonCard>
            <IonCol>
              <IonCard>
                <IonItem>
                  <IonLabel>Werkzeug</IonLabel>
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
                  <IonLabel>Garten</IonLabel>
                  <IonSelect>
                    <IonSelectOption value="brown">Garten</IonSelectOption>
                    <IonSelectOption value="blonde">Haus</IonSelectOption>
                    <IonSelectOption value="black">Yachthafen</IonSelectOption>
                    <IonSelectOption value="red">Golfplatz</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonCard>
              <IonCard>
                <IonItem>
                  <IonLabel>verliehen</IonLabel>
                  <IonSelect>
                    <IonSelectOption value="brown">verliehen</IonSelectOption>
                    <IonSelectOption value="blonde">nicht verliehen</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonCard>
            <IonTextarea className="input" rows={8}>Säge zu verleihen, weist Gebrauschspuren auf, ist ansonsten in gutem Zustand</IonTextarea>
          </IonCard>
        </IonGrid>
      </div>
      <div className="löschenContainer">
        <ActionButton
          dropDownButton={false}
          dropDownSliderButton={false}
          borrowButton={true}
          FAQButton={false}
          color="secondary"
          text="LÖSCHEN"
        />
      </div>
        <div className="faq-button" >
          <ActionButton
            openPage="faq"
            borrowButton={false}
            dropDownButton={false}
            dropDownSliderButton={false}
            FAQButton={true}
            text={"FAQ"}
            color="white"
          /> 
        </div>
    </div>
    
  );
};

export default EditGiven;
