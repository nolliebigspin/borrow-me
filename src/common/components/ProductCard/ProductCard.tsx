import React, {useState} from 'react';
import './ProductCard.css'
import { IonCard, IonCardTitle, IonCardContent, IonGrid, IonRow, IonImg, IonCol, IonChip, IonLabel, IonText, IonModal, IonContent, IonIcon} from '@ionic/react';
import { Header} from '../';
import ActionButton from '../ActionButton/ActionButton';
import { arrowBack } from 'ionicons/icons';
import { useHistory } from 'react-router';

interface props {
  title: string;
  image: string;
  description?: string;
  category?: string;
  distance?: string;
}

const ProductCard: React.FC<props> = ({ title, image, description, category, distance }) => {
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();

  function openFAQ() {
    setShowModal(false)
    history.push('/faq')
  }

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
        <IonIcon className="backIcon" icon={arrowBack} onClick={() => setShowModal(false)} />
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
                  </IonCardContent>
                </div>
              </IonCol>
            </IonRow>
            <div className="description">
             {description && <IonText>{description}</IonText>}
            </div>
          </IonGrid>
          </div>
          <div className="borrow-button">
            <ActionButton
            borrowButton={false}
            dropDownButton={false}
            dropDownSliderButton={false}
            FAQButton={true}
            text={"LEIHEN"}
            color="secondary"
          /> 
          </div>
          <div className="faq-button" onClick={() => openFAQ()}>
            <ActionButton
            borrowButton={false}
            dropDownButton={false}
            dropDownSliderButton={false}
            FAQButton={true}
            text={"Fragen?"}
            color="white"
          /> 
          </div>
          
        </IonContent>
      </IonModal>
    </div>
  );
};

export default ProductCard;
