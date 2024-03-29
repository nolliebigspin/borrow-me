import React from 'react';
import './ProductFull.css'
import { IonCard, IonCardTitle, IonCardContent, IonRow, IonImg, IonCol, IonChip, IonLabel, IonText } from '@ionic/react';

interface props {
  title: string;
  image: string;
  description: string;
  category?: string;
  distance?: string;
  available: boolean
}

const ProductFull: React.FC<props> = ({ title, image, description, category, distance, available }) => {

  return (
    <IonCard color="light">
          <IonCol>
            <IonImg className="image" src={image} />
          </IonCol>
          <IonCol>
            <div>
              <IonCardTitle className="title">{title}</IonCardTitle>
              <IonCardContent>
                <IonRow>
                  {category && 
                    <IonChip color="secondary">
                      <IonLabel>{category}</IonLabel>
                    </IonChip>
                  }
                  {distance &&
                    <IonChip color="secondary">
                      <IonLabel>{distance} km</IonLabel>
                    </IonChip>
                  }
                </IonRow>
                <IonText className="description">{description}</IonText>
              </IonCardContent>
            </div>
          </IonCol>
    </IonCard>
  );
};

export default ProductFull;
