import React from 'react';
import { IonContent, IonPage, IonTitle, IonIcon } from '@ionic/react';
import { Header, MenuBar} from '../../common/components';
import './faq.css';
import { arrowBack } from 'ionicons/icons';
import { useHistory } from 'react-router';
import SendMessageField from '../../common/components/SendMessageField/SendMessageField';
import ChatBubble from '../../common/components/ChatBubble/ChatBubble';



const FAQ: React.FC = () => {
  const history = useHistory();
  
  return (
    <IonPage>
      <Header title={"BorrowMe"} />
      <div onClick={() => history.push('/search')}> 
        <IonIcon className="backIcon" icon={arrowBack} />
      </div>
      <IonContent color="light" className="content">
        <div className="headline"> 
          <IonTitle color="primary" >häufig gestellte Fragen</IonTitle>
        </div>
        <div className="faq-content">
            <ChatBubble
              left = {true}
              text = "Rita: Sehr praktisch, wenn man eine Wand hat :)" 
              image = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            />
            <ChatBubble
              left = {true}
              text = "Rita: Beidhändig lässt es sich besser bohren als mit einer Hand" 
              image = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            />
            <ChatBubble
              left = {true}
              text = "Tom: Man sollte hiermit nicht versuchen Holz zu sägen" 
              image = "https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
            />
          </div>
      </IonContent>
      <div className="send-message-field">
        <SendMessageField />
      </div>    
      <MenuBar />
    </IonPage>
  );
};

export default FAQ;
