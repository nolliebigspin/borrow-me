import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { chevronDownSharp, chevronUpSharp } from 'ionicons/icons';
import './ActionButton.css';


interface ContainsProps {
   
  dropDownButton: boolean;
  dropDownSliderButton: boolean;
  borrowButton: boolean;
  FAQButton: boolean;

  text?: string;
  icon?: string;
  color: string;
}


const ActionButton: React.FC<ContainsProps> = ({ text, icon, color, dropDownButton, 
  dropDownSliderButton, borrowButton, FAQButton}) => {

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

    styleClass = "dropDownSliderButton";

    if (icon === chevronDownSharp) {


    } else if (icon === chevronUpSharp) {

    }

    content = 
              <div>
                <IonIcon icon={ icon}  className="iconDropDownSlider" >  </IonIcon>
                <p className="textDropDownSlider">{text}</p>
              </div>
    
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
