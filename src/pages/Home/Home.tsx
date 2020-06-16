import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Header, MenuBar } from '../../common/components';
import ProductCard from '../../common/components/ProductCard/ProductCard';
import ProductFull from '../../common/components/ProductFull/ProductFull';
import ActionButton from '../../common/components/ActionButton/ActionButton';
import {chevronDownSharp} from "ionicons/icons";


const Home: React.FC = () => {
  return (
    <IonPage>
      <Header title={"BorrowMe"} />
      <IonContent color="light">
        <ProductCard 
          title="Bohrmaschine"
          image="https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
          description="Eine tolle und gelbe Bohrmaschine"
          distance="3"
          category="Werkzeug"
        />
        <ProductFull 
          title="Bohrmaschine"
          image="https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
          description="Eine bestimmt nicht geklaute Bohrmaschine, die manchmal etwas qualmt. Sonst ist diese aber in gutem Zustand"
          distance="3"
          category="Werkzeug"
          available={false}
        />
      </IonContent>
      <IonContent>
      <ActionButton
          dropDownButton={false}
          dropDownSliderButton={true}
          borrowButton={false}
          FAQButton={false}
          icon={chevronDownSharp}
          text="LEIHEN"
          color="secondary"    
        />
      </IonContent>
      <MenuBar />
    </IonPage>
  );
};

export default Home;
