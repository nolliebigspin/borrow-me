import React from 'react';
import './ProductFull.css'
import { IonCard, IonCardTitle, IonCardContent, IonGrid, IonRow, IonImg, IonCol, IonChip, IonLabel, IonText } from '@ionic/react';

interface props {
  title: string;
  image: string;
  description: string;
  category?: string;
  distance?: string;
  available: boolean
}

const ProductFull: React.FC<props> = ({ title, image, description, category, distance }) => {

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
                  <IonCol>
                    {category && 
                      <IonChip color="secondary">
                        <IonLabel>{category}</IonLabel>
                      </IonChip>
                    }
                  </IonCol>
                  <IonCol>
                    {distance &&
                      <IonChip color="secondary">
                        <IonLabel>{distance} km</IonLabel>
                      </IonChip>
                    }
                  </IonCol>
                </IonRow>
                {description && <IonText>{description}</IonText>}
              </IonCardContent>
            </div>
          </IonCol>
    </IonCard>
  );
};

export default ProductFull;
