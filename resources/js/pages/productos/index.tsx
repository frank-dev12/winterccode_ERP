import ModuleScreen from '@/components/erp/module-screen';
import { dashboard } from '@/routes';

export default function ProductosIndex() {
    return (
        <ModuleScreen
            title="Productos"
            description="El catálogo de esta instalación. Aquí van a vivir los códigos, nombres y precios."
            metrics={[
                {
                    label: 'Activos',
                    value: '0',
                    detail: 'Todavía no hay productos',
                },
                {
                    label: 'Sin precio',
                    value: '0',
                    detail: 'Nada pendiente de valorizar',
                },
                {
                    label: 'Códigos',
                    value: '0',
                    detail: 'El alta llega con el módulo',
                },
            ]}
            columns={['Código', 'Nombre', 'Precio', 'Estado']}
            emptyTitle="El catálogo está vacío"
            emptyDescription="Cuando conectemos el módulo de productos, desde aquí se registran los ítems que después usa inventario, ventas y caja."
        />
    );
}

ProductosIndex.layout = {
    breadcrumbs: [
        { title: 'Inicio', href: dashboard() },
        { title: 'Productos', href: '/productos' },
    ],
};
