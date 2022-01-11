import React from 'react';
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonList, IonMenu, IonMenuToggle, IonTitle, IonToolbar } from '@ionic/react';
import { menu } from 'ionicons/icons';

export const PageHeader: React.FC = () => {
  return (

    <IonHeader className="sticky-header">
      <IonToolbar className="sticky-toolbar" >
        <IonTitle>Tab 1</IonTitle>
        <IonButtons slot="end">
          <IonMenuToggle className="navburger" menu="HlavneMenu" autoHide={false}>
            <IonButton>
              <IonIcon icon={menu} className="navburgerIcon" size="large" />
            </IonButton>
          </IonMenuToggle>
        </IonButtons>
      </IonToolbar>
    </IonHeader>

  );
};
