import { IonCol, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow } from '@ionic/react';
import {PicsNahlad} from '../components/PicsNahlad';
import './Galeria.css';

const Galeria: React.FC = () => {


let MojZoznam=['vektor', 'raster']




  return (
      <IonGrid>
        <IonRow>
{MojZoznam.map(x=> { return <IonCol sizeXs='12' sizeSm='6' sizeMd='4' sizeLg='3' sizeXl='2'>
            <PicsNahlad title={x}/>
          </IonCol>})}
        </IonRow>
      </IonGrid>  
     );
};

export default Galeria;
