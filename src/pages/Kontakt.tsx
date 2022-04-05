import { IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Kontakt.css';
import { callOutline, mailOutline, personOutline } from 'ionicons/icons';

const Kontakt: React.FC = () => {
  return (<>
   <IonCard className='ion-no-margin contactCard'> 
   <IonToolbar className='contactTitle'>
      <IonTitle className='contactTitle'>Kontakt</IonTitle>
    </IonToolbar>
    
      <IonGrid className='contactGrid'>
              <IonRow className='contactRow'>
          <IonCol className='contactColumn contactColumnIcon' >
            <IonIcon icon={personOutline} size='large' />
          </IonCol>
          <IonCol className='contactColumn' >
            <IonLabel className='contactLabel'>
              Tereza Pavlíková
            </IonLabel>
          </IonCol>
        </IonRow>
        <IonRow className='contactRow'>
          <IonCol className='contactColumn contactColumnIcon' >
            <IonIcon icon={mailOutline} size='large' />
          </IonCol>
          <IonCol className='contactColumn' >
            <IonLabel className='contactLabel'>
              <a href="mailto:pavlikova.tereza91@gmail.com?body=Ahoj Tereza, mám záujem o spoluprácu...">pavlikova.tereza91@gmail.com</a>
            </IonLabel>
          </IonCol>
        </IonRow>

        <IonRow className='contactRow'>
          <IonCol className='contactColumn contactColumnIcon' >
            <IonIcon icon={callOutline} size='large' />
          </IonCol>
          <IonCol className='contactColumn' >
            <IonLabel className='contactLabel'>
              <a href="tel:+421949435946">+421 949 435 946</a>
            </IonLabel>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>

  </>
  );
};
/* ked zmizne spodne menu, doplnit ziraru, obr.... */

export default Kontakt;
