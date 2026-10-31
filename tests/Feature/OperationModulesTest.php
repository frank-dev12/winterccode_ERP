<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class OperationModulesTest extends TestCase
{
    use RefreshDatabase;

    public function test_guests_are_redirected_from_operation_modules(): void
    {
        $this->get(route('productos.index'))->assertRedirect(route('login'));
        $this->get(route('inventario.index'))->assertRedirect(route('login'));
        $this->get(route('ventas.index'))->assertRedirect(route('login'));
        $this->get(route('caja.index'))->assertRedirect(route('login'));
    }

    public function test_authenticated_users_can_open_the_operation_screens(): void
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $screens = [
            'productos.index' => 'productos/index',
            'inventario.index' => 'inventario/index',
            'ventas.index' => 'ventas/index',
            'caja.index' => 'caja/index',
            'dashboard' => 'dashboard',
        ];

        foreach ($screens as $route => $component) {
            $this->get(route($route))
                ->assertOk()
                ->assertInertia(fn (Assert $page) => $page->component($component));
        }
    }

    public function test_home_shows_the_erp_welcome_screen(): void
    {
        $this->get(route('home'))
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page->component('welcome'));
    }
}
