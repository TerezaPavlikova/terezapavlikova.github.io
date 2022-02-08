import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonImg } from '@ionic/react';
import { GalleryModelType } from '../models/GalleryModel';

interface PicsNahladProps {
  title: string;
  url: string;
  type: GalleryModelType
}
export const PicsNahlad: React.FC<PicsNahladProps> = ({ title, url, type }) => {
  return (

    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>{title}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonImg src={url} />
      </IonCardContent>
    </IonCard>

  );
};
