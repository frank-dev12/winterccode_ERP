import { Head } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';

type Metric = {
    label: string;
    value: string;
    detail: string;
};

export default function ModuleScreen({
    title,
    description,
    metrics,
    columns,
    emptyTitle,
    emptyDescription,
}: {
    title: string;
    description: string;
    metrics: Metric[];
    columns: string[];
    emptyTitle: string;
    emptyDescription: string;
}) {
    return (
        <>
            <Head title={title} />
            <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        {title}
                    </h1>
                    <p className="max-w-2xl text-sm text-muted-foreground">
                        {description}
                    </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                    {metrics.map((metric) => (
                        <article
                            key={metric.label}
                            className="rounded-xl border bg-card p-4"
                        >
                            <p className="text-sm text-muted-foreground">
                                {metric.label}
                            </p>
                            <p className="mt-2 text-2xl font-semibold tracking-tight">
                                {metric.value}
                            </p>
                            <p className="mt-1 text-xs text-muted-foreground">
                                {metric.detail}
                            </p>
                        </article>
                    ))}
                </div>

                <section className="overflow-hidden rounded-xl border bg-card">
                    <div className="flex items-center justify-between gap-3 border-b px-4 py-3">
                        <h2 className="text-sm font-medium">Registros</h2>
                        <Badge variant="secondary">Sin datos</Badge>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[40rem] text-sm">
                            <thead className="bg-muted/60 text-left text-muted-foreground">
                                <tr>
                                    {columns.map((column) => (
                                        <th
                                            key={column}
                                            className="px-4 py-3 font-medium"
                                        >
                                            {column}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div className="px-4 py-12 text-center">
                        <p className="font-medium">{emptyTitle}</p>
                        <p className="mx-auto mt-1 max-w-md text-sm text-muted-foreground">
                            {emptyDescription}
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}
