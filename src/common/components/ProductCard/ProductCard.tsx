import React from 'react';
import './ProductCard.css'
import { IonCard, IonCardTitle, IonCardContent, IonGrid, IonRow, IonImg, IonCol, IonChip, IonLabel, IonText } from '@ionic/react';

interface props {
  title: string;
  image: string;
  description?: string;
  category?: string;
  distance?: string;
}

const ProductCard: React.FC<props> = ({ title, image, description, category, distance }) => {

  return (
    <IonCard color="light">
      <IonGrid>
        <IonRow>
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
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default ProductCard;
