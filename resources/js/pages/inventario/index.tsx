import ModuleScreen from '@/components/erp/module-screen';
import { dashboard } from '@/routes';

export default function InventarioIndex() {
    return (
        <ModuleScreen
            title="Inventario"
            description="Existencias de esta empresa, separadas por depósito y con su stock mínimo."
            metrics={[
                {
                    label: 'Disponible',
                    value: '0',
                    detail: 'Unidades en depósito',
                },
                {
                    label: 'Bajo mínimo',
                    value: '0',
                    detail: 'Sin alertas de stock',
                },
                {
                    label: 'Depósitos',
                    value: '0',
                    detail: 'Aún no hay ubicaciones',
                },
            ]}
            columns={['Producto', 'Depósito', 'Disponible', 'Mínimo']}
            emptyTitle="No hay existencias cargadas"
            emptyDescription="El inventario tomará los productos del catálogo. El movimiento de stock se habilita con ese módulo."
        />
    );
}

InventarioIndex.layout = {
    breadcrumbs: [
        { title: 'Inicio', href: dashboard() },
        { title: 'Inventario', href: '/inventario' },
    ],
};
