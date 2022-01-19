import React from 'react';
import { IonContent, IonButton, IonHeader, IonItem, IonList, IonMenu, IonMenuToggle, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import './Menu.css'
import { arrowBackOutline } from 'ionicons/icons';
export const Menu: React.FC = () => {
    return (

        <IonMenu className="menu" side="start" menuId="HlavneMenu" contentId="main" type="overlay" disabled={false}>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonMenuToggle className="navburger" menu="HlavneMenu" autoHide={false}>
                        <IonButton fill='clear'>
                            <IonIcon icon={arrowBackOutline} className="navburgerIcon" size="large" />
                        </IonButton>
                    </IonMenuToggle>
                </IonToolbar>
            </IonHeader>
            <IonContent id="main">
                <IonList>
                    <IonMenuToggle menu="HlavneMenu">
                        <IonItem routerLink='/'>Domov</IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle menu="HlavneMenu">
                        <IonItem routerLink='/galeria'>Galéria</IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle menu="HlavneMenu">
                        <IonItem routerLink='/nastiahnutie'>Na Stiahnutie</IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle menu="HlavneMenu">
                        <IonItem routerLink='/kontakt'>Kontakt</IonItem>
                    </IonMenuToggle>
                </IonList>
            </IonContent>
        </IonMenu>

    );
};
