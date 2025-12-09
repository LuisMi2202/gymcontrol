# 🗺️ Mapa del Sitio - GymControl

## Estructura de Navegación

```
GymControl
│
├─ / (Inicio)
│  └─ Página de bienvenida
│     ├─ Botón: Iniciar Sesión → /login
│     └─ Botón: Registrarse → /signup
│
├─ /login (Iniciar Sesión)
│  ├─ Formulario de login
│  ├─ Validación de credenciales
│  └─ Redirige a /dashboard
│
├─ /signup (Registrarse)
│  ├─ Formulario de registro
│  ├─ Validación de datos
│  └─ Redirige a /login
│
└─ /dashboard (Área Protegida)
   │
   ├─ Layout con Sidebar
   │  └─ Menú de navegación principal
   │
   ├─ /dashboard (Dashboard)
   │  ├─ 📊 4 Tarjetas de estadísticas
   │  │  ├─ Miembros Activos
   │  │  ├─ Membresías Vigentes
   │  │  ├─ Ingresos Mensuales
   │  │  └─ Visitas Hoy
   │  ├─ 📈 Actividad Reciente (tabla)
   │  └─ ⚠️ Membresías Próximas a Vencer
   │
   ├─ /members (Miembros)
   │  ├─ 📋 Tabla de miembros
   │  │  ├─ Columnas: Nombre, Email, Teléfono, Estado
   │  │  └─ Acciones: Editar, Eliminar
   │  └─ ➕ Formulario para agregar miembro
   │     ├─ Nombre Completo
   │     ├─ Email
   │     ├─ Teléfono
   │     └─ Documento de Identidad
   │
   ├─ /memberships (Membresías)
   │  ├─ 📊 3 Tarjetas de resumen
   │  │  ├─ Membresías Activas
   │  │  ├─ Ingreso Mensual Estimado
   │  │  └─ Próximas a Vencer
   │  └─ 📋 Tabla de membresías
   │     ├─ Columnas: Miembro, Plan, Monto, Fechas, Estado
   │     └─ Acciones: Editar, Cancelar
   │
   ├─ /access (Control de Acceso)
   │  ├─ 📊 3 Tarjetas de estado actual
   │  │  ├─ En el Gimnasio Ahora
   │  │  ├─ Entradas Hoy
   │  │  └─ Salidas Hoy
   │  ├─ 👥 Miembros en el Gimnasio
   │  │  ├─ Nombre
   │  │  ├─ Hora de entrada
   │  │  └─ Duración
   │  └─ 📝 Registro de Acceso Reciente
   │     ├─ Tabla de últimas entradas/salidas
   │     └─ Información en tiempo real
   │
   ├─ /payments (Pagos)
   │  ├─ 📊 3 Tarjetas de resumen
   │  │  ├─ Ingresos Totales
   │  │  ├─ Pagos Completados
   │  │  └─ Pagos Pendientes
   │  └─ 💳 Historial de Pagos
   │     ├─ Tabla con:
   │     │  ├─ Miembro
   │     │  ├─ Monto
   │     │  ├─ Fecha
   │     │  ├─ Método de pago
   │     │  ├─ Estado
   │     │  └─ Acciones (Ver, Anular)
   │
   └─ /reports (Reportes)
      ├─ 📊 4 Tarjetas de estadísticas principales
      │  ├─ Total de Miembros
      │  ├─ Miembros Activos
      │  ├─ Ingresos Totales
      │  └─ Visitas Totales
      ├─ 📈 Gráfico de Evolución de Miembros
      │  └─ Barras semanales
      ├─ 🥧 Gráfico de Distribución de Membresías
      │  ├─ Mensual (56%)
      │  ├─ Trimestral (28%)
      │  └─ Anual (16%)
      └─ 🎚️ Filtro de período
         ├─ Semanal
         ├─ Mensual
         └─ Anual
```

## 🔄 Flujos de Usuario

### Flujo 1: Nuevo Usuario
```
Inicio → Registrarse → Login → Dashboard → Completar Perfil
```

### Flujo 2: Admin Agregando Miembro
```
Dashboard → Miembros → Formulario → Guardar → Tabla Actualizada
```

### Flujo 3: Control de Acceso
```
Entrada/Salida → Acceso → Check-in/out → Dashboard Actualizado
```

### Flujo 4: Reportes y Análisis
```
Dashboard → Reportes → Seleccionar Período → Ver Gráficos
```

## 📊 Componentes Compartidos

Estos componentes aparecen en múltiples páginas:

- **Sidebar** → /dashboard, /members, /memberships, /access, /payments, /reports
- **Header** → Todas las páginas protegidas
- **StatCard** → Dashboard, Memberships, Access, Payments, Reports
- **Tabla genérica** → Members, Memberships, Access, Payments

## 🎯 Elementos de UI por Página

### Inicio
- [ ] Logo/Nombre
- [ ] Descripción
- [ ] Botón Login
- [ ] Botón Signup
- [ ] Lista de características

### Login/Signup
- [ ] Formulario
- [ ] Validación en tiempo real
- [ ] Mensajes de error
- [ ] Links a otras páginas

### Dashboard
- [ ] Sidebar con navegación
- [ ] Header con perfil
- [ ] 4 Tarjetas de estadísticas
- [ ] Tabla de actividad
- [ ] Widget de membresías vencidas
- [ ] Gráficos simples

### Miembros
- [ ] Sidebar
- [ ] Header
- [ ] Tabla de miembros
- [ ] Formulario de creación
- [ ] Búsqueda/filtro (a implementar)
- [ ] Botones de acción

### Membresías
- [ ] Sidebar
- [ ] Header
- [ ] Tarjetas de resumen
- [ ] Tabla de membresías
- [ ] Botones de acción
- [ ] Indicadores de estado

### Control de Acceso
- [ ] Sidebar
- [ ] Header
- [ ] Tarjetas de estado
- [ ] Lista de presentes
- [ ] Tabla de registros
- [ ] Actualizaciones en tiempo real

### Pagos
- [ ] Sidebar
- [ ] Header
- [ ] Tarjetas de resumen
- [ ] Tabla de pagos
- [ ] Filtros de fecha
- [ ] Botones de acción

### Reportes
- [ ] Sidebar
- [ ] Header
- [ ] Tarjetas de estadísticas
- [ ] Gráfico de líneas (evolución)
- [ ] Gráfico de barras (distribución)
- [ ] Selector de período

## 🎨 Patrones de Diseño

### Colores
- **Primario**: Azul (#0066cc) → Botones, links, estados activos
- **Éxito**: Verde (#16a34a) → Membresías activas, entradas
- **Advertencia**: Amarillo (#ca8a04) → Próximas a vencer
- **Error**: Rojo (#dc2626) → Vencidas, salidas
- **Neutral**: Gris (#64748b) → Texto, bordes

### Espaciado
- **Padding**: 4px, 8px, 12px, 16px, 20px, 24px
- **Margin**: Similar al padding
- **Border Radius**: 6px (pequeño), 8px (mediano), 12px (grande)

### Tipografía
- **Títulos H1**: 32px, bold
- **Títulos H2**: 24px, semibold
- **Títulos H3**: 20px, semibold
- **Texto base**: 14px, regular
- **Texto pequeño**: 12px, regular
- **Texto muy pequeño**: 11px, regular

## 📱 Responsividad

### Mobile (< 640px)
- Una columna
- Sidebar colapsado (menú hamburguesa)
- Tablas en scroll horizontal
- Botones full-width

### Tablet (640px - 1024px)
- Dos columnas
- Sidebar visible
- Tablas con scroll

### Desktop (> 1024px)
- Múltiples columnas
- Sidebar siempre visible
- Tablas con scroll horizontal

## ♿ Accesibilidad

- [ ] Todos los botones con label
- [ ] Inputs con labels asociados
- [ ] Colores con suficiente contraste
- [ ] Navegación con teclado (Tab)
- [ ] ARIA labels donde sea necesario
- [ ] Textos alternativos en imágenes

## 🔔 Notificaciones

Tipos de notificaciones a implementar:
- **Success**: Operación completada
- **Error**: Error en operación
- **Warning**: Advertencia
- **Info**: Información general

## 🔐 Estados de Seguridad

- **Desautenticado**: Solo ve /login, /signup, /
- **Autenticado**: Puede navegar todas las páginas
- **Admin**: (A implementar) Acceso a configuración

---

Versión: 1.0
Última actualización: Diciembre 2024
