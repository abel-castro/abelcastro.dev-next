'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');

        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`/?${params.toString()}`);
    }, 300);

    return (
        <form
            data-testid="search-form"
            className="relative flex mt-4 sm:mt-0 w-full sm:w-auto sm:flex justify-center"
        >
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                className="peer block rounded border border-gray-200 py-[9px] lg:pl-8 pl-4 text-sm outline-2 text-gray-500 w-full max-w-xs"
                placeholder={placeholder}
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                defaultValue={searchParams.get('query')?.toString()}
            />
            <MagnifyingGlassIcon className="hidden lg:block absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 " />
        </form>
    );
}
