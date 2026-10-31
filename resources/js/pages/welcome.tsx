import { Head, Link, usePage } from '@inertiajs/react';
import AppLogoIcon from '@/components/app-logo-icon';
import { Button } from '@/components/ui/button';
import { operationModules } from '@/lib/operation';
import { dashboard, login, register } from '@/routes';

export default function Welcome() {
    const { auth, name } = usePage().props;

    return (
        <>
            <Head title="Inicio" />
            <div className="min-h-screen bg-background text-foreground">
                <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-6">
                    <header className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                                <AppLogoIcon className="size-5" />
                            </div>
                            <div>
                                <p className="text-sm leading-tight font-semibold">
                                    {name}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    Versión 1.0
                                </p>
                            </div>
                        </div>
                        <nav className="flex items-center gap-2">
                            {auth.user ? (
                                <Button asChild>
                                    <Link href={dashboard()}>Ir al panel</Link>
                                </Button>
                            ) : (
                                <>
                                    <Button variant="ghost" asChild>
                                        <Link href={login()}>Ingresar</Link>
                                    </Button>
                                    <Button asChild>
                                        <Link href={register()}>
                                            Crear cuenta
                                        </Link>
                                    </Button>
                                </>
                            )}
                        </nav>
                    </header>

                    <main className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr]">
                        <section>
                            <p className="text-sm font-medium tracking-[0.18em] text-primary uppercase">
                                Operación comercial
                            </p>
                            <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight md:text-5xl">
                                El frente de la empresa, en una sola pantalla.
                            </h1>
                            <p className="mt-4 max-w-xl text-base text-muted-foreground">
                                Productos, inventario, ventas y caja comparten
                                esta instalación. Cada empresa conserva su
                                propia base y su propio acceso.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-3">
                                {auth.user ? (
                                    <Button size="lg" asChild>
                                        <Link href={dashboard()}>
                                            Continuar en el panel
                                        </Link>
                                    </Button>
                                ) : (
                                    <Button size="lg" asChild>
                                        <Link href={login()}>
                                            Ingresar a la empresa
                                        </Link>
                                    </Button>
                                )}
                            </div>
                        </section>

                        <section className="grid gap-3 sm:grid-cols-2">
                            {operationModules.map((module) => (
                                <article
                                    key={module.href}
                                    className="rounded-xl border bg-card p-5"
                                >
                                    <module.icon className="size-5 text-primary" />
                                    <h2 className="mt-4 font-medium">
                                        {module.title}
                                    </h2>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        {module.description}
                                    </p>
                                </article>
                            ))}
                        </section>
                    </main>
                </div>
            </div>
        </>
    );
}
