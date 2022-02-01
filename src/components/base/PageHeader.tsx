import React from 'react';
import { IonButton, IonButtons, IonHeader, IonIcon, IonItem, IonMenuToggle, IonToolbar } from '@ionic/react';
import { menu } from 'ionicons/icons';
import './PageHeader.css';
import {PageHeaderNav} from './PageHeaderNav'

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
            <PageHeaderNav/>

          </IonButtons>
        </IonItem>

      </IonToolbar>
    </IonHeader>

  );
};
