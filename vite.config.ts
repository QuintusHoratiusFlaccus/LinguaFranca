import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';

import { vitePWAManifest } from './vitePWAManifest';

export default defineConfig({
    plugins: [react(), tsconfigPaths(), VitePWA(vitePWAManifest)],
});
