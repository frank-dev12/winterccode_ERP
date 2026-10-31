import ModuleScreen from '@/components/erp/module-screen';
import { dashboard } from '@/routes';

export default function VentasIndex() {
    return (
        <ModuleScreen
            title="Ventas"
            description="Comprobantes de esta instalación: cliente, total y estado de cada venta."
            metrics={[
                { label: 'Hoy', value: '0', detail: 'Ventas del día' },
                {
                    label: 'Por cobrar',
                    value: '0',
                    detail: 'Sin saldos abiertos',
                },
                { label: 'Clientes', value: '0', detail: 'Aún no hay ventas' },
            ]}
            columns={['Comprobante', 'Cliente', 'Total', 'Estado']}
            emptyTitle="Todavía no hay ventas"
            emptyDescription="Cada venta descontará inventario y pasará por caja. El registro queda para el módulo de ventas."
        />
    );
}

VentasIndex.layout = {
    breadcrumbs: [
        { title: 'Inicio', href: dashboard() },
        { title: 'Ventas', href: '/ventas' },
    ],
};
