import ModuleScreen from '@/components/erp/module-screen';
import { dashboard } from '@/routes';

export default function CajaIndex() {
    return (
        <ModuleScreen
            title="Caja"
            description="Sesión de caja de esta empresa: apertura, movimientos y saldo."
            metrics={[
                {
                    label: 'Sesión',
                    value: 'Cerrada',
                    detail: 'No hay caja abierta',
                },
                {
                    label: 'Ingresos',
                    value: '0',
                    detail: 'Movimientos del día',
                },
                {
                    label: 'Saldo',
                    value: '0',
                    detail: 'Sin efectivo registrado',
                },
            ]}
            columns={['Sesión', 'Apertura', 'Movimientos', 'Saldo']}
            emptyTitle="La caja no tiene movimientos"
            emptyDescription="Al abrir una sesión vas a ver ingresos y egresos ligados a las ventas. Esa operación llega con el módulo de caja."
        />
    );
}

CajaIndex.layout = {
    breadcrumbs: [
        { title: 'Inicio', href: dashboard() },
        { title: 'Caja', href: '/caja' },
    ],
};
