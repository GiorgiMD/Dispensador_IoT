# LAS CHUCHESCOM 🍬

Interfaz de usuario (UI/UX) para la máquina expendedora **LAS CHUCHESCOM** del
proyecto **Dispensador IoT** (ESCOM).

## Descripción

Interfaz de máquina expendedora de dulces con catálogo de **5 productos**, todos
a un precio de **$5 MXN**:

| # | Producto            | Precio |
|---|---------------------|--------|
| 1 | Gomitas             | $5 MXN |
| 2 | Churritos           | $5 MXN |
| 3 | Cacahuates          | $5 MXN |
| 4 | Chocolates          | $5 MXN |
| 5 | Manguitos con chile | $5 MXN |

Al completar una compra se muestra el mensaje de agradecimiento:

> **¡Gracias por tu compra! Disfruta tu ESCOMCHUCHE.**

## Estructura

```
Dispensador_IoT/
├── index.html        # Estructura de la interfaz
├── styles.css        # Estilos y animaciones (UI/UX)
├── app.js            # Catálogo y flujo de compra
├── assets/
│   └── logo.png      # Logo ESCOM mejorado (escalado + estilizado)
└── Dispensador.sql   # Esquema de base de datos (existente)
```

## Cómo ejecutar

Es una aplicación web estática: solo abre `index.html` en un navegador, o
sírvela con cualquier servidor estático, por ejemplo:

```bash
npx serve .
```

## Branding

- Título de la app: **LAS CHUCHESCOM**
- Logo basado en `BURRITO.png` (mascota ESCOM), mejorado en resolución y
  estilizado tomando como referencia `ESCOM_IA.jpg`.
