import React from 'react';
import { IonContent, IonPage, IonText, IonItem, IonCard, IonInput, IonLabel, IonModal, IonButton, IonTitle} from '@ionic/react';
import { Header, MenuBar} from '../../common/components';
import ProductCard from '../../common/components/ProductCard/ProductCard';
import './Search.css'

const Search: React.FC = () => {
  return (
    <IonPage>
      <Header title={"BorrowMe"} />
      <IonContent color="light" className="content-container">
        <ProductCard 
            title="Bohrmaschine"
            image="https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
            description="Eine tolle und gelbe Bohrmaschine"
            distance="3"
            category="Werkzeug"
          />
      </IonContent>
      <MenuBar />
    </IonPage>
  );
};

export default Search;
