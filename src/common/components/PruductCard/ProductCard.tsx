import React from 'react';
import './ProductCard.css'
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonImg, IonCol } from '@ionic/react';


const ProductCard: React.FC = () => {

  return (
    <IonCard color="light">
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonImg src="https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80" />
          </IonCol>
          <IonCol>
            <div>
              <IonCardTitle >Bohrmaschine</IonCardTitle>
              <IonCardContent>
                Eine bestimmt nicht geklaute Bohrmaschine, die manchmal etwas qualmt. Sonst ist diese aber im Gut Zustand
              </IonCardContent>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default ProductCard;
