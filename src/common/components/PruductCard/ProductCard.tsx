import React from 'react';
import './ProductCard.css'
import { IonCard, IonCardTitle, IonCardContent, IonGrid, IonRow, IonImg, IonCol, IonChip, IonLabel, IonText } from '@ionic/react';

interface props {
  title: string;
  description?: string;
  category?: string;
  distance?: string;
}

const ProductCard: React.FC<props> = ({ title, description, category, distance }) => {

  return (
    <IonCard color="light">
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonImg className="image" src="https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80" />
          </IonCol>
          <IonCol>
            <div>
              <IonCardTitle >{title}</IonCardTitle>
              <IonCardContent>
                <IonRow>
                  <IonCol>
                    <IonChip color="secondary">
                      <IonLabel>{category}</IonLabel>
                    </IonChip>
                  </IonCol>
                  <IonCol>
                    <IonChip color="secondary">
                      <IonLabel>{distance} km</IonLabel>
                    </IonChip>
                  </IonCol>
                </IonRow>
              <IonText>{description}</IonText>
              </IonCardContent>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default ProductCard;
