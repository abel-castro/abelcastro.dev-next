import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        setupFiles: ['./vitest.setup.ts'],
        include: [
            'tests/unit-tests/*.(spec|test).(ts|tsx)',
            'tests/unit-tests/**/*.(spec|test).(ts|tsx)',
            'tests/unit-tests/***/**/*.(spec|test).(ts|tsx)',
        ],
        globals: true,
        environment: 'jsdom',
        exclude: ['node_modules/', 'dist/', 'tests/'],
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
            exclude: [
                'node_modules/',
                'dist/',
                'tests/',
                '.next/',
                'next-env.d.ts',
                '*.config.ts',
                '*.config.mjs',
                '**/layout.tsx',
                '**/constants.ts',
                '**/interface.ts',
                '**/definitions.ts',
                '**/loading.tsx',
                '**/skeletons.tsx',
            ],
        },
    },
});
