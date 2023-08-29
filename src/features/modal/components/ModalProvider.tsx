import type { FC, PropsWithChildren } from 'react';
import React, { useCallback, useState } from 'react';

import type { Modal, ModalContextState } from '@shared/lib/context/Modal';
import { ModalContext } from '@shared/lib/context/Modal';

const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
    const [activeModal, setActiveModal] = useState<Modal>(null);

    const openModal: ModalContextState['openModal'] = (modalProps) => {
        document?.documentElement.style.setProperty('overflow', 'hidden');

        setActiveModal(modalProps);
    };

    const closeModal: ModalContextState['closeModal'] = useCallback(() => {
        document?.documentElement.style.removeProperty('overflow');

        setActiveModal(null);
    }, []);

    const contextValue: ModalContextState = {
        activeModal,
        openModal,
        closeModal,
    };

    return <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>;
};

export default ModalProvider;
