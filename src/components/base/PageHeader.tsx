import React from 'react';
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonTitle, IonToolbar } from '@ionic/react';
import { homeOutline, imagesOutline, mailOutline, menu } from 'ionicons/icons';
import './PageHeader.css';
import { NavLink } from 'react-router-dom';

export const PageHeader: React.FC = () => {
  return (

    <IonHeader className="sticky-header">
      <IonToolbar className="sticky-toolbar" >
        <IonItem className='page-header-content ion-no-padding' lines='none' >
          <IonButtons slot="start" className='ion-no-padding ion-no-margin'>
            <IonMenuToggle className="navburger" menu="HlavneMenu" autoHide={false}>
              <IonButton>
                <IonIcon icon={menu} className="navburgerIcon" size="large" />
              </IonButton>
            </IonMenuToggle>
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

          </IonButtons>
        </IonItem>

      </IonToolbar>
    </IonHeader>

  );
};
