import React, { useEffect, Fragment } from 'react';
import useGalleryStore from '../../../hooks/store/useGalleryStore';

export const GlobalInitializer: React.FC = (props) => {
    const { actions: galleryActions } = useGalleryStore();
    const inicialize = async () => {
        await galleryActions.dispatch({ type: "load-gallery" });
    }

    useEffect(() => {
        inicialize();
    }, []);

    return <Fragment>
        {props.children}
    </Fragment>;
};  