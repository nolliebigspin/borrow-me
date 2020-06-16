import React, {useState} from 'react';
import './ProductCard.css'
import { IonCard, IonCardTitle, IonCardContent, IonGrid, IonRow, IonImg, IonCol, IonChip, IonLabel, IonText, IonModal, IonContent } from '@ionic/react';
import { Header, MenuBar } from '../';
import ActionButton from '../ActionButton/ActionButton';

interface props {
  title: string;
  image: string;
  description?: string;
  category?: string;
  distance?: string;
}

const ProductCard: React.FC<props> = ({ title, image, description, category, distance }) => {
  
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div>
        <IonCard color="light" onClick={() => setShowModal(true)}>
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
      </div>
      <IonModal isOpen={showModal}>
        <Header title={"BorrowMe"}/>
        <IonContent>
          <div>
            <div className="card-title">
              <IonCardTitle className="title-modal" color="primary" >{title}</IonCardTitle>
            </div>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonImg className="image" src={image} />
              </IonCol>
              <IonCol>
                <div>
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
          </div>
        </IonContent>
        <MenuBar/>
      </IonModal>
    </div>
  );
};

export default ProductCard;
