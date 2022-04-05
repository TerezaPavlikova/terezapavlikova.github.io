import { IonCol, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCard, IonCardContent, IonImg, IonModal, IonSelect, IonSelectOption } from '@ionic/react';
import './Galeria.css';
import useGalleryStore from '../hooks/store/useGalleryStore';
import { GalleryItemOrientation, GalleryModelType } from '../models/GalleryModel';
import { useRef, useState } from 'react';
const Galeria: React.FC = () => {


  const { getters: { getAll,getType } } = useGalleryStore();
const [selectedType, setSelectedType] = useState <GalleryModelType>(GalleryModelType.ALL);
    
  var galleryItems = selectedType
    ? getType(selectedType)
    : getAll()
    
  const [modalPhotoId, setModalPhotoId] = useState<number>(-1);
  const modalElPhoto = useRef(document.createElement('ion-modal'));
  const resolveSize = (orientation: GalleryItemOrientation, portrait: number, landscape: number, panorama: number): string => {

    if (orientation === GalleryItemOrientation.LANDSCAPE) {
      return landscape.toString()
    }
    if (orientation === GalleryItemOrientation.PANORAMA) {
      return panorama.toString()
    }
    if (orientation === GalleryItemOrientation.PORTRAIT) {
      return portrait.toString()
    }
    return '0'

  }
  const previous = () => {
    console.log("previous");
    if (modalPhotoId > 0) {
      setModalPhotoId(modalPhotoId - 1);
    }
  }
  const next = () => {
    console.log("next");
    if (modalPhotoId < galleryItems.length - 1) {
      setModalPhotoId(modalPhotoId + 1);
    }
  }


  return (<>
    <IonToolbar>
      <IonTitle>Galéria</IonTitle>
    </IonToolbar>
<div className='selectBoxWrapper'>
  <IonSelect value={selectedType} onIonChange={e=>setSelectedType(e.detail.value)}>
    <IonSelectOption value={GalleryModelType.ALL} > všetko   </IonSelectOption>
    <IonSelectOption value={GalleryModelType.VEKTOR} > vektor   </IonSelectOption>
    <IonSelectOption value={GalleryModelType.RASTER} > raster   </IonSelectOption>
  </IonSelect>
</div>

    <IonGrid className='galeria-content'>
      <IonRow>
        {galleryItems.map((x, i) => {
          return <IonCol
            sizeXs={resolveSize(x.orientation, 12, 12, 12)}
            sizeSm={resolveSize(x.orientation, 6, 12, 12)}
            sizeMd={resolveSize(x.orientation, 6, 6, 12)}
            sizeLg={resolveSize(x.orientation, 3, 6, 12)}
            sizeXl={resolveSize(x.orientation, 3, 6, 12)}
            key={i}
          >
            <IonCard onClick={() => setModalPhotoId(i)}>

              <IonCardContent>
                <IonImg src={x.url} />
              </IonCardContent>
            </IonCard>

          </IonCol>
        })}
      </IonRow>
    </IonGrid>
    <IonModal
      ref={modalElPhoto}
      id='photo-modal'
      swipeToClose
      isOpen={modalPhotoId > -1}
      onDidDismiss={() => setModalPhotoId(-1)}>

      <>
        <div onClick={() => previous()} className="gallery-arrows gallery-arrows-previous"><i className="gallery-arrows-arrow gallery-arrows-arrow-previous"></i></div>
        <div className='previewPhotoBox' >
        <IonImg src={modalPhotoId > -1 ? galleryItems[modalPhotoId].url : ""} alt={modalPhotoId.toString()} className="previewPhoto ion-no-margin ion-no-padding" />
        </div>
        <div onClick={() => next()} className="gallery-arrows gallery-arrows-next"><i className="gallery-arrows-arrow gallery-arrows-arrow-next"></i></div>
      </>

    </IonModal>
  </>
  );
};

export default Galeria;
