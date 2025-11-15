import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        setupFiles: ['./vitest.setup.tsx'],
        include: [
            'tests/unit-tests/*.(spec|test).(ts|tsx)',
            'tests/unit-tests/**/*.(spec|test).(ts|tsx)',
            'tests/unit-tests/***/**/*.(spec|test).(ts|tsx)',
        ],
        globals: true,
        environment: 'jsdom',
        env: {
            NEXT_PUBLIC_BLOG_GRAPHQL_URL: 'http://localhost:8000/graphql',
            NEXT_PUBLIC_ROOT_URL: 'http://localhost:3000',
        },
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
                'apollo-client.ts',
                '*.config.ts',
                '*.config.mjs',
                '**/layout.tsx',
                '**/constants.ts',
                '**/interface.ts',
                '**/definitions.ts',
                '**/loading.tsx',
                '**/skeletons.tsx',
                'playwright-report/',
            ],
        },
    },
});
