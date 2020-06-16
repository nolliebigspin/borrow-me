import React from 'react';
import { IonContent, IonPage, IonCard } from '@ionic/react';
import { Header, MenuBar } from '../../common/components';
import SearchBar from '../../common/components/SearchBar/SearchBar';
import ActionButton from '../../common/components/ActionButton/ActionButton';
import ChatBubble from '../../common/components/ChatBubble/ChatBubble';
import './Home.css';
import { chevronDownSharp, chevronUpSharp } from 'ionicons/icons';


const Home: React.FC = () => {
  return (
    <IonPage>
      <Header title={"BorrowMe"} />
      <IonContent color="light" className="content">
        <div className="searchBarContainer">
          <SearchBar
          changePlaceholder={false}/>
        </div>
        <div>
          <IonCard className="geliehenesCard">
            <h1 className="geliehenesHeadline">Geliehenes</h1>
            <p className="geliehenesText">Die Gegenstände, die du dir von anderen Personen geliehen hast.</p>
          </IonCard>
        </div>
        <ActionButton
              dropDownButton={true}
              dropDownSliderButton={false}
              borrowButton={false}
              FAQButton={false}
              color="secondary"
              icon={chevronDownSharp}/>
        <div>
          <IonCard className="chatCard">
            <h1 className="chatHeadline">Das ist gerade los in deiner Nachbarschaft</h1>
            <div className="chatBubbleConatainer">
              <ChatBubble
                text="Tom: Ich wohne in der Seitenstraße 12,
                es gibt auch was zu Essen :)"
                image="https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
                left={true}
              />
              <ChatBubble
                text="Rita: Sehr gut! Dann bis gleich :)"
                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                left={true}
              />
            </div>
          </IonCard>
        </div>
        <ActionButton
          dropDownButton={false}
          dropDownSliderButton={true}
          borrowButton={false}
          FAQButton={false}
          color="secondary"
          text="VERLEIHEN"
          icon={chevronUpSharp}
        />
        </IonContent>      
        <MenuBar />
    </IonPage>
  );
};

export default Home;
