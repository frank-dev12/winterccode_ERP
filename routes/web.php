<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
    Route::inertia('productos', 'productos/index')->name('productos.index');
    Route::inertia('inventario', 'inventario/index')->name('inventario.index');
    Route::inertia('ventas', 'ventas/index')->name('ventas.index');
    Route::inertia('caja', 'caja/index')->name('caja.index');
});

require __DIR__.'/settings.php';
