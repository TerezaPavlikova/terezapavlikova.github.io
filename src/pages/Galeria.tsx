import { IonCol, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow } from '@ionic/react';
import {PicsNahlad} from '../components/PicsNahlad';
import './Galeria.css';
import useGalleryStore from '../hooks/store/useGalleryStore';
const Galeria: React.FC = () => {


const{getters:{getAll}} = useGalleryStore(); 
var galleryItems=getAll()



  return (
      <IonGrid>
        <IonRow>
{galleryItems.map(x=> { return <IonCol sizeXs='12' sizeSm='6' sizeMd='4' sizeLg='3' sizeXl='2'>
            <PicsNahlad title={x.title} url={x.url} type={x.type} />
          </IonCol>})}
        </IonRow>
      </IonGrid>  
     );
};

export default Galeria;
