# Nexus Cyberware Systems — React

Adaptación a **React + Vite + Tailwind CSS 3** de `hola.html` (login) y `home.html` (catálogo).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

## Rutas

| Ruta     | Página      | Origen       |
| -------- | ----------- | ------------ |
| `/`      | `HomePage`  | `home.html`  |
| `/login` | `LoginPage` | `hola.html`  |

## Estructura

```
src/
├─ components/
│  ├─ common/    Icon, PingDot, SectionLabel, Checkbox
│  ├─ layout/    Header, SearchBar, Footer
│  ├─ auth/      AuthShowcase, AuthPanel, AuthTabs, PasskeyButton,
│  │             SocialButtons, AuthForm, InputField, FeedbackAlert, CircuitGrid
│  └─ home/      TelemetryTicker, Hero, CategoryPills, FilterSidebar,
│                CatalogControls, ProductGrid, ProductCard, ProductTable,
│                Pagination, GuaranteesSection, RigBuilderCta
├─ hooks/        useCatalog (filtros + orden), useCart, useToggleSet
├─ data/         catalog.js (productos/filtros), site.js (nav/footer), images.js
├─ pages/        HomePage, LoginPage
└─ utils/        cx, format
tailwind.tokens.js   ← design tokens extraídos de los HTML (colores, tipografías, espaciados)
```

## Qué cambió respecto al HTML

- El JS con `document.getElementById` pasó a **estado de React** (`useState`, hooks propios).
- Los productos, categorías y textos repetidos viven en `src/data/` y se renderizan con `.map()`.
- Funcionan de verdad: búsqueda (y `Ctrl+K`), categorías, disponibilidad, presupuesto, orden,
  vista grid/tabla, favoritos, contador del carrito, tabs login/registro, mostrar/ocultar contraseña.
- Tras iniciar sesión / registrarse (simulado) se navega a `/`.

## Pendiente de conectar

- `AuthForm` y `PasskeyButton` usan `setTimeout` para simular la respuesta: reemplaza por tu API / WebAuthn.
- Filtros de arquitectura, TDP y factor de forma solo guardan la selección (los 6 productos de ejemplo no tienen esos datos).
- La paginación cambia el número de página pero los datos son estáticos.
