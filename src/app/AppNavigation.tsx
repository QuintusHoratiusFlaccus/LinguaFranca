import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Form from '@features/auth/byEmailAndPassword/components/Form';

function NavigationRoot() {
    if (!isUserLoggedIn) {
        return (
            <Routes>
                <Route path="/" Component={Form} />
            </Routes>
        );
    }

    return (
        <Routes>
            <Route path="/" />
        </Routes>
    );
}

export default NavigationRoot;
