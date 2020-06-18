import React from 'react';
import { IonContent, IonPage, IonCard } from '@ionic/react';
import { Header, MenuBar} from '../../common/components';
import ActionButton from '../../common/components/ActionButton/ActionButton';
import ProductCard from '../../common/components/ProductCard/ProductCard';
import { chevronUpSharp } from 'ionicons/icons';
import './GivenThings.css';

const GivenThings: React.FC = () => {
  
    return (
      <IonPage>
        <Header title={"BorrowMe"} />
        <IonContent color="light" className="content">
          <div className="cardContainer">
            <IonCard className="borrowedCard">
              <h1 className="headline" >Verliehenes</h1>
              <p className="cardText" >Die Gegenstände, die du an andere Personene verliehen hast.</p>
              <div className="productCard">
              <ProductCard
                title="Säge"
                image="https://images.unsplash.com/photo-1502068713670-5acaa8128a4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
                description="Säge zu verleihen..."
                distance="2"
                category="Werkzeug"
              />
            </div>
            <div className="productCard">
              <ProductCard
                title="Nähmaschine"
                image="https://images.unsplash.com/photo-1586440814054-952c96054f37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                description="Spinnt manchmal, den Trick ..."
                distance="5"
                category="Nähen"
              />
            </div>
            </IonCard>
          </div>
          <ActionButton
            openPage="give"
            dropDownButton={true}
            dropDownSliderButton={false}
            borrowButton={false}
            FAQButton={false}
            color="secondary"
            icon={chevronUpSharp}
          />
        </IonContent> 
        <MenuBar />
      </IonPage>
    );
  };
  
  export default GivenThings;