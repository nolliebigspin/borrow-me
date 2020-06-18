import React from 'react';
import { IonContent, IonPage, IonCard } from '@ionic/react';
import { Header, MenuBar } from '../../common/components';
import { chevronDownSharp } from 'ionicons/icons';
import ActionButton from '../../common/components/ActionButton/ActionButton';
import './Give.css';
import NewBorrowContainer from '../../common/components/NewBorrowContainer/NewBorrowContainer';


const Award: React.FC = () => {
  return (
    <IonPage>
      <Header title={"BorrowMe"} />
      <div className="dropUpSliderButton">
          <ActionButton
            openPage="borrowed"
            dropDownButton={false}
            dropDownSliderButton={true}
            borrowButton={false}
            FAQButton={false}
            color="secondary"
            text="LEIHEN"
            icon={chevronDownSharp}
            chevronDownSharpeSet={true}
          />
        </div>    
      <IonContent color="light" className="content">
        <div>
          <IonCard className="verliehenesCard">
            <h1 className="verliehenesHeadline">Verliehenes</h1>
            <p className="verliehenesText">Die Gegenstände, die du an andere Personene verliehen hast</p>
          </IonCard>
        </div>
        <ActionButton
          openPage="given"
          dropDownButton={true}
          dropDownSliderButton={false}
          borrowButton={false}
          FAQButton={false}
          color="secondary"
          icon={chevronDownSharp}
        />
        <p className="headline" >Etwas neues verleihen</p>
        <NewBorrowContainer/>
        <div className="leihenContainer">
          <ActionButton
            dropDownButton={false}
            dropDownSliderButton={false}
            borrowButton={true}
            FAQButton={false}
            color="secondary"
            text="VERLEIHEN"
          />
        </div>
        </IonContent> 
      <MenuBar />
    </IonPage>
  );
};

export default Award;
