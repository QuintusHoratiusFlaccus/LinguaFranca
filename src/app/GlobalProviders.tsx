import type { PropsWithChildren } from 'react';
import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import ModalProvider from '@features/modal';

import ErrorBoundary from './components/ErrorBoundary';

const GlobalProviders: React.FC<PropsWithChildren> = ({ children }) => (
    <StrictMode>
        <ErrorBoundary>
            <ModalProvider>
                <BrowserRouter>{children}</BrowserRouter>
            </ModalProvider>
        </ErrorBoundary>
    </StrictMode>
);

export default GlobalProviders;
