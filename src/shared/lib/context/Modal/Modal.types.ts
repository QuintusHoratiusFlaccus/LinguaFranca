import type { ComponentType } from 'react';

export type BaseModalProps = Readonly<{
    onClose?: () => void;
    onBackdropClick?: () => void;
}>;

export type Modal = Readonly<{
    Component: ComponentType<BaseModalProps & { [key: string]: any }>;
    props: Partial<BaseModalProps>;
}>;

export type ModalContextState = Readonly<{
    activeModal?: Modal;
    openModal: ({ Component, props }: Modal) => void;
    closeModal: () => void;
}>;
