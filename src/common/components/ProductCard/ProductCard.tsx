import React, {useState} from 'react';
import './ProductCard.css'
import { IonCard, IonCardTitle, IonCardContent, IonGrid, IonRow, IonImg, IonCol, IonChip, IonLabel, IonText, IonModal, IonContent, IonIcon} from '@ionic/react';
import { Header} from '../';
import ActionButton from '../ActionButton/ActionButton';
import { arrowBack } from 'ionicons/icons';
import ProductFull from '../ProductFull/ProductFull';

interface props {
  title: string;
  image: string;
  description: string;
  category: string;
  distance: string;
  my?: boolean;
}

const ProductCard: React.FC<props> = ({ title, image, description, category, distance, my }) => {
  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setShowModal(false)
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
        
          <ProductFull
            title={title}
            image={image}
            description={description}
            category={category}
            distance={distance}
            available={true}
          />       

          { !my &&
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
          }
  
          <div className="faq-button" onClick={closeModal}>
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

          { my &&
            <div className="borrow-button">
              <ActionButton
                borrowButton={false}
                dropDownButton={false}
                dropDownSliderButton={false}
                FAQButton={true}
                text={"Löschen"}
                color="danger"
              /> 
            </div>
          }
          
        </IonContent>
      </IonModal>
    </div>
  );
};

export default ProductCard;
