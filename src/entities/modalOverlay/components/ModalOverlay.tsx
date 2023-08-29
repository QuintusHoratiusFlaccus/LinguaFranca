import type { FC } from 'react';
import React from 'react';

import Dialog from '@shared/components/molecules/Dialog';
import Overlay from '@shared/components/molecules/Overlay';
import { useModalContext } from '@shared/lib/context/Modal';

const ModalOverlay: FC = () => {
    const { activeModal } = useModalContext();
    if (!activeModal?.Component) {
        return null;
    }

    const {
        Component,
        props: { onBackdropClick, onClose },
    } = activeModal;

    return (
        <Overlay onBackdropClick={onBackdropClick}>
            <Dialog>
                <Component onClose={onClose} />
            </Dialog>
        </Overlay>
    );
};

export default ModalOverlay;
