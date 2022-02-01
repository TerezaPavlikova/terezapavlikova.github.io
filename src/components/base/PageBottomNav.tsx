import React from 'react';
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonTitle, IonToolbar } from '@ionic/react';
import { homeOutline, imagesOutline, mailOutline, menu } from 'ionicons/icons';
import './PageBottomNav.css';
import { NavLink } from 'react-router-dom';

export const PageBottomNav: React.FC = () => {
  return (

    <div className='page-bottom-nav'>
      <NavLink to='/Domov' className='page-bottom-btn'>
        <div className='page-bottom-btn-text'>
          <IonIcon icon={homeOutline} size="large" />
          <span className='page-bottom-link-lbl'>Domov </span>
        </div>
      </NavLink>
      <NavLink to='/galeria' className='page-bottom-btn'>
        <div className='page-bottom-btn-text'>
          <IonIcon icon={imagesOutline} size="large" />
          <span className='page-bottom-link-lbl'>Galeria </span>
        </div>
      </NavLink>
      <NavLink to='/kontakt' className='page-bottom-btn'>
        <div className='page-bottom-btn-text'>
          <IonIcon icon={mailOutline} size="large" />
          <span className='page-bottom-link-lbl'>Kontakt </span>
        </div>
      </NavLink>
    </div>

  );
};
