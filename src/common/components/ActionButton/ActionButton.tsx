import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import './ActionButton.css';


interface ContainsProps {
   
  dropDownButton: boolean;
  dropDownSliderButton: boolean;
  borrowButton: boolean;
  FAQButton: boolean;

  chevronDownSharpeSet?: boolean;

  text?: string;
  icon?: string;
  color: string;
}


const ActionButton: React.FC<ContainsProps> = ({ text, icon, color, dropDownButton, 
  dropDownSliderButton, borrowButton, FAQButton, chevronDownSharpeSet}) => {

  var styleClass = "default";
  var content;
  var displayedText;


  if (borrowButton) {
    styleClass = "borrowButton";
    content = text;

  } else if (dropDownButton) {
    styleClass = "dropDownButton";
    content = <IonIcon icon={ icon } className="iconDropDown" ></IonIcon>

  } else if (dropDownSliderButton) {

    if (!chevronDownSharpeSet) {

      styleClass = "dropDownSliderButton";

      content = 
      <div>
        <IonIcon icon={ icon}  className="iconDropDownSlider" >  </IonIcon>
        <p className="textDropDownSlider">{text}</p>
      </div>

    } else if (chevronDownSharpeSet) {

      styleClass = "dropUpSliderButton";

      content = 
      <div>
        <p className="textDropUpSlider">{text}</p>
        <IonIcon icon={ icon}  className="iconDropUpSlider" >  </IonIcon>
      </div>
      
    }
    
  } else if (FAQButton) {
    styleClass = "FAQButton";
    content = text ;
  } 

  return (
    <IonButton 
      className = { styleClass } 
      color={ color }  
    >{ displayedText } { content }</IonButton>
  );
};

export default ActionButton;
