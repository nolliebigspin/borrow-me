import React from 'react';
import { IonContent, IonPage, IonCard } from '@ionic/react';
import { Header, MenuBar } from '../../common/components';
import { chevronDownSharp } from 'ionicons/icons';
import ActionButton from '../../common/components/ActionButton/ActionButton';
import './Award.css';
import NewBorrowContainer from '../../common/components/NewBorrowContainer/NewBorrowContainer';


const Award: React.FC = () => {
  return (
    <IonPage>
      <Header title={"BorrowMe"} />
      <div className="dropDownSliderButton">
          <ActionButton
            dropDownButton={false}
            dropDownSliderButton={true}
            borrowButton={false}
            FAQButton={false}
            color="secondary"
            text="VERLEIHEN"
            icon={chevronDownSharp}
          />
        </div>    
      <IonContent color="light" className="content">
        <div>
          <IonCard className="verliehenesCard">
            <h1 className="verliehenesHeadline">Geliehenes</h1>
            <p className="verliehenesText">Die Gegenstände, die du dir von anderen Personen geliehen hast.</p>
          </IonCard>
        </div>
        <ActionButton
              dropDownButton={true}
              dropDownSliderButton={false}
              borrowButton={false}
              FAQButton={false}
              color="secondary"
              icon={chevronDownSharp}/>
        </IonContent> 
      <MenuBar />
    </IonPage>
  );
};

export default Award;
