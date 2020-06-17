import React from 'react';
import { IonContent, IonPage, IonCard } from '@ionic/react';
import { Header, MenuBar} from '../../common/components';
import ActionButton from '../../common/components/ActionButton/ActionButton';
import ProductCard from '../../common/components/ProductCard/ProductCard';
import { chevronUpSharp } from 'ionicons/icons';
import './BorrowedThings.css';



const BorrowedThings: React.FC = () => {
  
  return (
    <IonPage>
      <Header title={"BorrowMe"} />
      <IonContent color="light" className="content">
        <div className="cardContainer">
          <IonCard className="borrowedCard">
            <h1 className="headline" >Geliehenes</h1>
            <p className="cardText" >Die Gegenstände, die du dir von anderen Personene geliehen hast.</p>
            <div className="productCard">
            <ProductCard
              title="Bohrmaschine"
              image="https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
              description="Eine tolle Bohrmaschine in gutem Zustand"
              distance="2"
              category="Werkzeug"
            />
          </div>
          </IonCard>
        </div>
        <ActionButton
              dropDownButton={true}
              dropDownSliderButton={false}
              borrowButton={false}
              FAQButton={false}
              color="secondary"
              icon={chevronUpSharp}/>
      </IonContent> 
      <MenuBar />
    </IonPage>
  );
};

export default BorrowedThings;