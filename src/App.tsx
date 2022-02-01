import { Redirect, Route, Switch } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs, IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonButtons,
  IonButton,
  IonMenu,
  IonList,
  IonItem,
  IonMenuToggle


} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle, menu } from 'ionicons/icons';
import Home from './pages/Home';
import Galeria from './pages/Galeria';
import NaStiahnutie from './pages/NaStiahnutie';
import Kontakt from './pages/Kontakt';
import { Menu } from './components/base/Menu'
import { PageHeader } from './components/base/PageHeader'
import { PageBottomNav } from './components/base/PageBottomNav'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './App.css';

const App: React.FC = () => (
  <IonApp>
    <IonPage>
      <IonContent fullscreen>
        <IonReactRouter>
          <PageHeader /> 
          <PageBottomNav/>
          <Menu />
          <IonPage className="page-content">
            <IonContent >
              <Switch >
                <Route path="/Kontakt" exact={true} component={Kontakt} />
                <Route path="/NaStiahnutie" exact={true} component={NaStiahnutie} />
                <Route path="/Galeria" exact={true} component={Galeria} />
                <Route path="/Domov" exact={true} component={Home} />
                <Redirect from="*" to="/Domov" />
              </Switch>
            </IonContent >
          </IonPage>
          
        </IonReactRouter>
      </IonContent>
    </IonPage>

  </IonApp>
);

export default App;
