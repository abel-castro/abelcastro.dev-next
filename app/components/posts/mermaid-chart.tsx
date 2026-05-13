'use client';

import { useEffect, useId, useState } from 'react';

export default function MermaidChart({ chart }: { chart: string }) {
    const id = useId().replaceAll(':', '');
    const [svg, setSvg] = useState('');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        async function renderChart() {
            try {
                setError(null);
                setSvg('');

                const { default: mermaid } = await import('mermaid');

                mermaid.initialize({
                    startOnLoad: false,
                    theme: 'dark',
                    securityLevel: 'strict',
                });

                const result = await mermaid.render(`mermaid-${id}`, chart);

                if (!cancelled) {
                    setSvg(result.svg);
                }
            } catch (renderError) {
                if (!cancelled) {
                    setError(
                        renderError instanceof Error
                            ? renderError.message
                            : 'Unable to render Mermaid chart',
                    );
                }
            }
        }

        renderChart();

        return () => {
            cancelled = true;
        };
    }, [chart, id]);

    if (error) {
        return (
            <pre className="overflow-x-auto rounded-md bg-slate-950 p-4 text-sm text-red-200">
                <code>{chart}</code>
            </pre>
        );
    }

    return (
        <div
            className="not-prose my-6 overflow-x-auto rounded-md bg-slate-950 p-4"
            dangerouslySetInnerHTML={{ __html: svg }}
        />
    );
}
