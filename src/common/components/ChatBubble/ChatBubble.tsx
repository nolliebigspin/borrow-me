import React from 'react';
import './ChatBubble.css'
import { IonAvatar } from '@ionic/react';
import { Grid, Row, Col } from 'react-flexbox-grid';


interface ContainerProps {
  text: string;
  image?: string;
  imagepos?: string;
}

const ChatBubble: React.FC<ContainerProps> = ({ text, image }) => {
  return (
    <div className="base">
      <Grid fluid>
        <Row>
          <div className="talk-bubble round shadow">
            <div className="talktext">
              <p>{text}</p>
            </div>
          </div>
          <IonAvatar className="shadow">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="" />
          </IonAvatar>
        </Row>
      </Grid>
    </div>
  );
};

export default ChatBubble;
