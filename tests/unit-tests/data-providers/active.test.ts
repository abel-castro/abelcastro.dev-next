import { beforeAll, describe, expect, test, vi } from 'vitest';

import { GraphqlDataProvider } from '../../../data-providers/graphql';

describe('activeDataProvider tests', () => {
    // un-mock the module before this describe
    // this is necessary because the module is mocked in vitest.setup.tsx
    // to always use the MemoryDataProvider
    beforeAll(() => {
        vi.unmock('../../../data-providers/active');
    });

    test('current active dataProvider should be Graphql', async () => {
        // Dynamically import the real module after unmocking
        const { default: realActiveDataProvider } = await vi.importActual<
            Record<string, any>
        >('../../../data-providers/active');

        expect(realActiveDataProvider).toBeInstanceOf(GraphqlDataProvider);
    });
});
