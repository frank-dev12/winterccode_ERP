import {
    LayoutDashboard,
    Package,
    ShoppingBag,
    Wallet,
    Warehouse,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type OperationModule = {
    title: string;
    href: string;
    description: string;
    icon: LucideIcon;
};

export const homeModule = {
    title: 'Inicio',
    href: '/dashboard',
    description: 'Resumen de la operación.',
    icon: LayoutDashboard,
} satisfies OperationModule;

export const operationModules: OperationModule[] = [
    {
        title: 'Productos',
        href: '/productos',
        description: 'Catálogo, códigos y precios de esta empresa.',
        icon: Package,
    },
    {
        title: 'Inventario',
        href: '/inventario',
        description: 'Existencias por depósito y stock mínimo.',
        icon: Warehouse,
    },
    {
        title: 'Ventas',
        href: '/ventas',
        description: 'Comprobantes, clientes y totales del día.',
        icon: ShoppingBag,
    },
    {
        title: 'Caja',
        href: '/caja',
        description: 'Apertura, movimientos y saldo de la sesión.',
        icon: Wallet,
    },
];
