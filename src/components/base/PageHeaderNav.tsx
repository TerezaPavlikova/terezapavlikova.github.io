import React from "react";
import { IonButton, IonIcon} from '@ionic/react';
import { NavLink } from 'react-router-dom';
import { homeOutline, imagesOutline, mailOutline} from 'ionicons/icons';
import './PageHeaderNav.css'

export const PageHeaderNav: React.FC= () =>{
   

    return (<>
    <NavLink to='/' className='page-header-btn'>
              <IonButton className='page-header-link-button'>
                <IonIcon icon={homeOutline} className="navburgerIcon" size="large" /> 
                <span className='page-header-link-lbl'>Domov </span>
              </IonButton>
            </NavLink>
            <NavLink to='/galeria' className='page-header-btn'>
              <IonButton className='page-header-link-button'>
                <IonIcon icon={imagesOutline} className="navburgerIcon" size="large" />
                <span className='page-header-link-lbl'>Galeria </span>
              </IonButton>
            </NavLink>
            <NavLink to='/kontakt' className='page-header-btn'>
              <IonButton className='page-header-link-button' >
                <IonIcon icon={mailOutline} className="navburgerIcon" size="large" />
                <span className='page-header-link-lbl'>Kontakt </span>
              </IonButton>
              
            </NavLink>
    </>);
}