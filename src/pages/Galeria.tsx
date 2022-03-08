import { IonCol, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow } from '@ionic/react';
import { PicsNahlad } from '../components/PicsNahlad';
import './Galeria.css';
import useGalleryStore from '../hooks/store/useGalleryStore';
import { GalleryItemOrientation } from '../models/GalleryModel';
const Galeria: React.FC = () => {


  const { getters: { getAll } } = useGalleryStore();
  var galleryItems = getAll()
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


  return (<>
    <IonToolbar>
      <IonTitle>Default Title</IonTitle>
    </IonToolbar>
    <IonGrid className='galeria-content'>
      <IonRow>
        {galleryItems.map(x => {
          return <IonCol
            sizeXs={resolveSize(x.orientation, 12, 12, 12)}
            sizeSm={resolveSize(x.orientation, 6, 12, 12)}
            sizeMd={resolveSize(x.orientation, 6, 6, 12)}
            sizeLg={resolveSize(x.orientation, 3, 6, 12)}
            sizeXl={resolveSize(x.orientation, 3, 6, 12)}
           
                     >
            <PicsNahlad url={x.url} type={x.type} />
          </IonCol>
        })}
      </IonRow>
    </IonGrid>
  </>
  );
};

export default Galeria;
