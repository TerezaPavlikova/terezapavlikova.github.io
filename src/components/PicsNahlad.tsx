import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonImg } from '@ionic/react';
import { GalleryModelType } from '../models/GalleryModel';

interface PicsNahladProps {
    url: string;
  type: GalleryModelType
}
export const PicsNahlad: React.FC<PicsNahladProps> = ({ url, type }) => {
  return (

    <IonCard>
      
      <IonCardContent>
        <IonImg src={url} />
      </IonCardContent>
    </IonCard>

  );
};
