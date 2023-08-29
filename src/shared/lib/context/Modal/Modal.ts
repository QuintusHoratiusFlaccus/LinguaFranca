import { createContext, useContext } from 'react';

import type { ModalContextState } from './Modal.types';

export const ModalContext = createContext<ModalContextState>({} as ModalContextState);

export const useModalContext = (): ModalContextState => useContext(ModalContext);
