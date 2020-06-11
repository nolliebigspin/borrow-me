import React from 'react';
import './ChatBubble.css'
import { IonAvatar } from '@ionic/react';
import { Grid, Row, Col } from 'react-flexbox-grid';


interface ContainerProps {
  text: string;
  left: boolean;
  image?: string;
}

const ChatBubble: React.FC<ContainerProps> = ({ text, image, left }) => {
  return (
    <div>
      {left ? (
        <div className="baseLeft">
        <Grid fluid>
          <Row className="row">
            <IonAvatar className="shadow">
              <img src={image} alt="" />
            </IonAvatar>
            <div className="talk-bubble round shadow">
              <div className="talktext">
                <p>{text}</p>
              </div>
            </div>
          </Row>
        </Grid>
      </div>
      ) : (
        <div className="baseRight">
        <Grid fluid>
          <Row>
            <div className="talk-bubble round shadow">
              <div className="talktext">
                <p>{text}</p>
              </div>
            </div>
            <IonAvatar className="shadow">
              <img src={image} alt="" />
            </IonAvatar>
          </Row>
        </Grid>
      </div>
      )}
    </div>
  );
};

export default ChatBubble;
