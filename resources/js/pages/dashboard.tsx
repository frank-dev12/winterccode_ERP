import { Head, Link, usePage } from '@inertiajs/react';
import { operationModules } from '@/lib/operation';
import { dashboard } from '@/routes';

export default function Dashboard() {
    const { auth } = usePage().props;
    const firstName = auth.user?.name.split(' ')[0] ?? 'equipo';

    return (
        <>
            <Head title="Inicio" />
            <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
                <div>
                    <p className="text-sm text-muted-foreground">
                        Panel de la empresa
                    </p>
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Hola, {firstName}
                    </h1>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {operationModules.map((module) => (
                        <Link
                            key={module.href}
                            href={module.href}
                            className="rounded-xl border bg-card p-5 transition-colors hover:bg-accent"
                        >
                            <module.icon className="size-5 text-primary" />
                            <p className="mt-6 text-3xl font-semibold tracking-tight">
                                0
                            </p>
                            <p className="mt-1 font-medium">{module.title}</p>
                            <p className="mt-1 text-sm text-muted-foreground">
                                {module.description}
                            </p>
                        </Link>
                    ))}
                </div>

                <section className="rounded-xl border bg-card p-6">
                    <h2 className="font-medium">Orden de la operación</h2>
                    <ol className="mt-4 grid gap-4 md:grid-cols-4">
                        {operationModules.map((module, index) => (
                            <li key={module.href} className="flex gap-3">
                                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                                    {index + 1}
                                </span>
                                <div>
                                    <p className="font-medium">
                                        {module.title}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {module.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </section>
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Inicio',
            href: dashboard(),
        },
    ],
};
