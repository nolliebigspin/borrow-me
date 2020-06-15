import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Header, MenuBar } from '../../common/components';
import ProductCard from '../../common/components/PruductCard/ProductCard';


const Home: React.FC = () => {
  return (
    <IonPage>
      <Header title={"BorrowMe"} />
      <IonContent color="light">
        <ProductCard />
      </IonContent>
      <MenuBar />
    </IonPage>
  );
};

export default Home;
