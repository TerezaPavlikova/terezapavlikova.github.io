import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

interface PicsNahladProps {
  title: string;
}
export const PicsNahlad: React.FC<PicsNahladProps> = ({title}) => {
  return (
    
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>{title}</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>

  );
};
