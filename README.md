# ESCOMCHUCHES 🍬

Interfaz de usuario (UI/UX) para la **máquina expendedora de dulces** del
proyecto **Dispensador IoT** (ESCOM), optimizada para **tablet Android**
(interacción táctil y diseño responsive).

## Descripción

Máquina expendedora con catálogo de **5 productos**, todos a **$5 MXN**:

| # | Producto            | Precio |
|---|---------------------|--------|
| 1 | Gomitas             | $5 MXN |
| 2 | Churritos           | $5 MXN |
| 3 | Cacahuates          | $5 MXN |
| 4 | Chocolates          | $5 MXN |
| 5 | Manguitos con chile | $5 MXN |

Al completar una compra se muestra el mensaje de agradecimiento:

> **¡Gracias por tu compra! Disfruta tu ESCOMCHUCHE.**

## Branding

- **Título:** ESCOMCHUCHES
- **Subtítulo:** Escuela Superior de Chuches
- **Header:** arte de `ESCOM_IA.jpg` (mascota ESCOM "Burrito" en estilo IA),
  escalado 2× y con detalles de dulces añadidos, manteniendo el esquema de
  color azul oficial de ESCOM.

## Estructura

```
Dispensador_IoT/
├── index.html          # Estructura de la interfaz
├── styles.css          # Estilos, animaciones y responsive (tablet-first)
├── app.js              # Catálogo y flujo de compra
├── assets/
│   ├── header.jpg      # Arte del header (mascota + dulces, 2560×1382)
│   └── logo.png        # Logo ESCOM mejorado (escalado + estilizado)
└── Dispensador.sql     # Esquema de base de datos (existente)
```

## Cómo ejecutar / probar

Es una aplicación web estática (HTML + CSS + JS). Opciones:

```bash
# 1) Servidor local simple (desde la carpeta del repo)
npx serve .
# 2) O con Python
python -m http.server 8080
```

### En una tablet Android

1. Copia la carpeta a un servidor o súbela a un hosting estático (Vercel,
   GitHub Pages, Netlify, etc.).
2. Abre la URL desde el navegador de la tablet (Chrome/Edge).
3. Toca cualquier producto ("Comprar") y verifica el modal
   *"¡Gracias por tu compra! Disfruta tu ESCOMCHUCHE."*.

### En un emulador Android

1. Crea un AVD (Android Studio → Device Manager) o usa un emulador web de
   tablet.
2. Abre Chrome en el emulador y navega a la URL (o `http://10.0.2.2:8080`
   para acceder al `localhost` de la máquina host).
3. Gira a horizontal (landscape) para ver el layout de 5 columnas.

### Vista previa rápida (navegador de escritorio)

1. Abre `index.html` directamente o sírvelo con `npx serve .`.
2. Activa las **DevTools** (F12) → *Toggle device toolbar* → elige una tablet
   (ej. **iPad Air** o **Samsung Galaxy Tab**) para simular el viewport táctil.

## Publicar en GitHub Pages

El repositorio ya está listo para GitHub Pages:

- `.nojekyll` → evita el procesado de Jekyll.
- `.github/workflows/pages.yml` → despliega automáticamente el contenido
  estático en cada push a `main`.

### Activar (una sola vez, requiere permisos de administrador del repo)

1. Ve a **Settings → Pages** del repositorio.
2. En **Source**, elige **GitHub Actions**.
3. El workflow ya se habrá ejecutado; si no, haz un push o lanza
   *Deploy static content to Pages* desde la pestaña **Actions**.

El sitio quedará disponible en:

```
https://giorgimd.github.io/Dispensador_IoT/
```

> Alternativa sin Actions: en **Settings → Pages**, elige
> **Deploy from a branch** → `main` → carpeta `/ (root)` y guarda.

