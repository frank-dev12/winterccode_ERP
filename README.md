# winterccode_ERP

WINTER C CODE ERP versión 1.0.

Aplicación Laravel integrada con React, TypeScript, Inertia y Tailwind CSS. PostgreSQL es la base de datos de la aplicación. Cada empresa se instala por separado, con el mismo código y su propio archivo `.env`: clave de aplicación, URL y base de datos. No hay una aplicación frontend separada ni un despliegue compartido entre empresas.

La autenticación incluida es la del starter kit oficial de Laravel con React (Laravel Fortify): registro, inicio de sesión, verificación de correo, restablecimiento de contraseña, perfil, doble factor y passkeys. Los roles del ERP se agregarán después. Esta base no incluye todavía los módulos de productos, inventario, ventas ni caja.

## Requisitos

- PHP 8.3 o superior, con las extensiones `pdo_pgsql`, `mbstring`, `xml`, `curl`, `zip`, `bcmath` e `intl`. Este proyecto se preparó con PHP 8.5.12.
- Composer 2.
- Node.js 22 y npm 10. Este proyecto se preparó con Node.js 22.23.4 y npm 10.9.9.
- PostgreSQL 16 o superior, en local o en el servidor de esa empresa.

## Instalar dependencias

Desde la raíz del repositorio:

```bash
composer install
npm install
```

`composer install` y `npm install` también forman parte de `composer setup`. Ese comando, además, copia `.env` si todavía no existe, genera `APP_KEY`, ejecuta las migraciones y compila el frontend. PostgreSQL tiene que estar creado antes de lanzarlo.

## Configurar PostgreSQL

Crea una base para esta instalación:

```sql
CREATE DATABASE winterccode_erp;
```

Copia el ejemplo de entorno y genera la clave de la aplicación:

```bash
cp .env.example .env
php artisan key:generate
```

`.env.example` deja la conexión lista para PostgreSQL, sin contraseña:

```dotenv
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=winterccode_erp
DB_USERNAME=postgres
DB_PASSWORD=
```

Si el servidor exige contraseña, escríbela solo en `.env`, en `DB_PASSWORD`. Si esta instalación usa otro usuario o otra base, cambia también `DB_USERNAME` y `DB_DATABASE`. No pongas contraseñas en `.env.example`.

## Ejecutar migraciones

Con la base creada y `.env` apuntando a ella:

```bash
php artisan migrate
```

Las sesiones, la caché y la cola usan la base de datos, así que la aplicación necesita estas tablas para abrir el sitio.

## Arrancar el entorno local

Compila los assets una vez, o déjalos en caliente con el servidor de desarrollo:

```bash
npm run build
composer run dev
```

`composer run dev` levanta el servidor de Laravel en http://localhost:8000, el worker de colas, el visor de logs y Vite. Para detenerlo, interrumpe ese proceso.

Si prefieres procesos separados:

```bash
php artisan serve
npm run dev
```

Abre http://localhost:8000. La portada es pública. El panel queda en `/dashboard` después de registrar un usuario y verificar el correo.

## Comprobaciones

Las pruebas de PHPUnit usan SQLite en memoria, definidas en `phpunit.xml`, y no necesitan PostgreSQL:

```bash
php artisan test
```

Frontend:

```bash
npm run types:check
npm run build
```

`composer ci:check` ejecuta el chequeo de formato del frontend, TypeScript, PHPStan y las pruebas. El flujo de GitHub Actions levanta PostgreSQL 16 sin contraseña, con la misma base de ejemplo, para que `composer setup` pueda migrar antes de esas comprobaciones. En un PostgreSQL recién instalado en Ubuntu, las conexiones por red sí piden contraseña: en ese caso defínela solo en `.env`.

## Archivos que no se versionan

`.gitignore` excluye `.env`, `vendor/`, `node_modules/`, `public/build/` y los demás archivos generados de Laravel. Las bases SQLite locales quedan ignoradas en `database/.gitignore`.
