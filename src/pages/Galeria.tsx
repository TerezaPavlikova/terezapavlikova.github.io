import { IonCol, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow } from '@ionic/react';
import {PicsNahlad} from '../components/PicsNahlad';
import './Galeria.css';

const Galeria: React.FC = () => {


let MojZoznam=['vektor', 'raster']




  return (
      <IonGrid>
        <IonRow>
{MojZoznam.map(x=> { return <IonCol size="2">
            <PicsNahlad title={x}/>
          </IonCol>})}
        </IonRow>
      </IonGrid>  
     );
};

export default Galeria;
