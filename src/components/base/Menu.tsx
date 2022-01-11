import React from 'react';
import { IonContent, IonButton, IonHeader, IonItem, IonList, IonMenu, IonMenuToggle, IonTitle, IonToolbar } from '@ionic/react';
import './Menu.css'
export const Menu: React.FC = () => {
    return (

        <IonMenu className="menu" side="end" menuId="HlavneMenu" contentId="main" type="overlay" disabled={false}>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Start Menu</IonTitle>
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
