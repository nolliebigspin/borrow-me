import React from 'react';
import { IonContent, IonPage, IonText } from '@ionic/react';
import { Header, MenuBar } from '../../common/components';
import ChatBubble from '../../common/components/ChatBubble/ChatBubble';
import SendMessageField from '../../common/components/SendMessageField/SendMessageField'
import './Feed.css'

const Feed: React.FC = () => {
  return (
    <IonPage>
      <Header title={"BorrowMe"} />
      <IonContent color="light">
        <div>
          <div className="pageTitle">
            <IonText color="primary">Das ist gerade los in deiner Nachbarschaft</IonText>
          </div>
          <div className="feed">
            <ChatBubble
              left = {true}
              text = "Rita: Hallo in die Runde, hat gerade jemand Zeit mir zu helfen ein paar Sachen in meine Wohnung zu tragen? Ziehe gerade erst ein und kenne hier sonst niemanden :)" 
              image = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            />
            <ChatBubble
              left = {true}
              text = "Tom: Hey Rita, ich habe gerade Zeit und könnte vorbei kommen" 
              image = "https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
            />
            <ChatBubble
              left = {true}
              text = "Rita: Vielen Dank Tom! Ich wohne in der Seitenstraße 12, es gibt auch was zu essen" 
              image = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            />
            <ChatBubble
              left = {true}
              text = "Tom: Sehr gut! Dann bis gleich" 
              image = "https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
            />
          </div>
          <div className="send-message-field">
            <SendMessageField />
          </div>
        </div>
      </IonContent>
      <MenuBar />
    </IonPage>
  );
};

export default Feed;
