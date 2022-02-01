import React from 'react';
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonTitle, IonToolbar } from '@ionic/react';
import { homeOutline, imagesOutline, mailOutline, menu } from 'ionicons/icons';
import './PageBottomNav.css';
import { NavLink } from 'react-router-dom';

export const PageBottomNav: React.FC = () => {
  return (

    <div className='page-bottom-nav'>
      <NavLink to='/' className='page-bottom-btn'>
        <IonButton className='page-bottom-link-button'>
          <IonIcon icon={homeOutline} className="navburgerIcon" size="large" />
          <span className='page-bottom-link-lbl'>Domov </span>
        </IonButton>
      </NavLink>
      <NavLink to='/galeria' className='page-bottom-btn'>
        <IonButton className='page-bottom-link-button'>
          <IonIcon icon={imagesOutline} className="navburgerIcon" size="large" />
          <span className='page-bottom-link-lbl'>Galeria </span>
        </IonButton>
      </NavLink>
      <NavLink to='/kontakt' className='page-bottom-btn'>
        <IonButton className='page-bottom-link-button' >
          <IonIcon icon={mailOutline} className="navburgerIcon" size="large" />
          <span className='page-bottom-link-lbl'>Kontakt </span>
        </IonButton>

      </NavLink>
    </div>

  );
};
