import { Redirect, Route, Switch } from 'react-router-dom';
import {
  IonApp,
  IonContent, IonPage

} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Galeria from './pages/Galeria';
import NaStiahnutie from './pages/NaStiahnutie';
import Kontakt from './pages/Kontakt';
import { Menu } from './components/base/Menu'
import { PageHeader } from './components/base/PageHeader'
import { PageBottomNav } from './components/base/PageBottomNav'
import { GalleryContextProvider } from './store/gallery/GalleryContext'
import {GlobalInitializer } from './components/base/Initializers/GlobalInitializer' 

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
  <GalleryContextProvider>
    <GlobalInitializer>
  <IonApp>
    <IonPage>
      <IonContent fullscreen>
        <IonReactRouter>
          <PageHeader /> 
          <PageBottomNav/>
          <Menu />
          <IonPage className="page-wrapper">
            
           
            <IonContent >
              <div className='page-content' >
                <div className='page-content-body'>
              <Switch >
                <Route path="/Kontakt" exact={true} component={Kontakt} />
                <Route path="/NaStiahnutie" exact={true} component={NaStiahnutie} />
                <Route path="/Galeria" exact={true} component={Galeria} />
                <Route path="/Domov" exact={true} component={Home} />
                <Redirect from="*" to="/Domov" />
              </Switch>
              </div>
              </div>
            </IonContent >
            
          </IonPage>
          
        </IonReactRouter>
      </IonContent>
    </IonPage>

  </IonApp>
  </GlobalInitializer>
  </GalleryContextProvider>
);

export default App;
