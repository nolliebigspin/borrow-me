import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Header, MenuBar } from '../../common/components';
import ProductCard from '../../common/components/ProductCard/ProductCard';
import './Search.css'
import SearchBar from '../../common/components/SearchBar/SearchBar';

const Search: React.FC = () => {
 
  return (
    <IonPage>
      <Header title={"BorrowMe"} />
      <div className="searchbar">
            <SearchBar
            placeholder="Bohrmaschine"
            changePlaceholder={true}/>
      </div> 
      <IonContent color="light" className="content-container">
      
        <div className="content-container">
          <div>
            <ProductCard
              title="Bohrmaschine"
              image="https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
              description="Eine tolle und gelbe Bohrmaschine"
              distance="1"
              category="Werkzeug"
            />
          </div>
          
          <div>
            <ProductCard 
              title="Bohrmaschine"
              image="https://images.unsplash.com/photo-1564942513776-e922cb937bfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
              description="Eine tolle und rote Bohrmaschine"
              distance="4"
              category="Werkzeug"
            />
          </div>
          
          <div>
            <ProductCard 
              title="Kinder Bohrmaschine"
              image="https://images.unsplash.com/photo-1551631880-e807a4453bc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=500&q=80"
              description="Meine Kinder spielen nur noch sehr selten damit und ich will sie auch nicht einstauben lassen"
              distance="3"
              category="Spielzeug"
            />
          </div>
          
        </div>
      </IonContent>
      <MenuBar />
    </IonPage>
  );
};

export default Search;
