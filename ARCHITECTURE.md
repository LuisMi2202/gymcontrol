# Arquitectura de GymControl

## 🏗️ Flujo de la Aplicación

```
Cliente (Navegador)
       ↓
Next.js App Router
  ├── Pages (src/app/*)
  ├── Components (src/components/*)
  └── Styles (Tailwind CSS)
       ↓
API/Hooks
  ├── useAuth.ts
  ├── auth.ts
  └── utils.ts
       ↓
Supabase Client
  ├── Autenticación
  ├── Base de Datos (PostgreSQL)
  └── RLS (Row Level Security)
```

## 📁 Estructura de Directorios

### `/src/app`
Contiene todas las **páginas y rutas** de la aplicación. Usa App Router de Next.js.

- `page.tsx` → Página de inicio
- `layout.tsx` → Layout compartido por todas las páginas
- `dashboard/page.tsx` → Dashboard principal
- `members/page.tsx` → Gestión de miembros
- `memberships/page.tsx` → Gestión de membresías
- `access/page.tsx` → Control de acceso
- `payments/page.tsx` → Registros de pagos
- `reports/page.tsx` → Reportes
- `login/page.tsx` → Login
- `signup/page.tsx` → Registro

### `/src/components`
Componentes **reutilizables** de React:

- `Header.tsx` → Encabezado con perfil
- `Sidebar.tsx` → Navegación lateral
- `StatCard.tsx` → Tarjeta de estadísticas
- `MemberForm.tsx` → Formulario para agregar miembros

### `/src/lib`
Funciones y configuraciones **de utilidad**:

- `supabase.ts` → Inicialización del cliente Supabase
- `auth.ts` → Funciones de autenticación (login, signup, logout)
- `utils.ts` → Funciones auxiliares (formato de fecha, moneda, etc)

### `/src/types`
**Definiciones de TypeScript** para tipos compartidos:

- `index.ts` → Interfaces: Member, Membership, AccessLog, Payment, User

### `/src/hooks`
**Custom Hooks** reutilizables:

- `useAuth.ts` → Hook para gestionar autenticación

## 🔄 Flujos Principales

### 1. Flujo de Autenticación

```
Usuario en /login
    ↓
Ingresa credenciales
    ↓
Envía a Supabase Auth
    ↓
Supabase valida email/contraseña
    ↓
Retorna session token
    ↓
Se guarda en localStorage
    ↓
Redirige a /dashboard
```

### 2. Flujo de Gestión de Miembros

```
Usuario en /members
    ↓
Carga lista de miembros desde BD
    ↓
Muestra tabla de miembros
    ↓
Usuario completa MemberForm
    ↓
Form envía datos a Supabase
    ↓
BD crea nuevo miembro
    ↓
Lista se actualiza automáticamente
```

### 3. Flujo de Control de Acceso

```
Miembro entra al gimnasio
    ↓
Se registra entrada en /access
    ↓
Se calcula tiempo en el gimnasio
    ↓
Cuando se va, se registra salida
    ↓
Se guardan datos en BD
    ↓
Dashboard muestra ocupación en tiempo real
```

## 🗄️ Esquema de Base de Datos

### Tabla: `members`
```sql
id (UUID)          - Identificador único
email (VARCHAR)    - Email único
full_name (VARCHAR) - Nombre completo
phone (VARCHAR)    - Teléfono
document_id (VARCHAR) - Cédula/Pasaporte
status (VARCHAR)   - active, inactive, suspended
created_at (TIMESTAMP)
updated_at (TIMESTAMP)
```

### Tabla: `memberships`
```sql
id (UUID)          - Identificador único
member_id (FK)     - Referencia a members
plan_type (VARCHAR) - monthly, quarterly, annual
start_date (DATE)  - Fecha de inicio
end_date (DATE)    - Fecha de vencimiento
status (VARCHAR)   - active, expired, cancelled
amount_paid (DECIMAL) - Monto pagado
created_at (TIMESTAMP)
```

### Tabla: `access_logs`
```sql
id (UUID)          - Identificador único
member_id (FK)     - Referencia a members
check_in (TIMESTAMP) - Hora de entrada
check_out (TIMESTAMP) - Hora de salida
created_at (TIMESTAMP)
```

### Tabla: `payments`
```sql
id (UUID)          - Identificador único
member_id (FK)     - Referencia a members
amount (DECIMAL)   - Monto pagado
payment_date (DATE) - Fecha del pago
status (VARCHAR)   - completed, pending, failed
created_at (TIMESTAMP)
```

## 🔐 Seguridad

### Autenticación
- **Supabase Auth** maneja el login/registro
- **JWT tokens** para sesiones persistentes
- **localStorage** almacena el token (revisar)

### Autorización
- **RLS (Row Level Security)** en Supabase
- Cada usuario solo puede ver sus propios datos
- Admin puede ver todos los datos

### Validación
- **TypeScript** valida tipos en tiempo de compilación
- **Zod** o **React Hook Form** validan formularios

## 🚀 Despliegue

### En Vercel
```
Git Push → Vercel detecta cambios
        → Ejecuta `npm run build`
        → Genera archivo estático
        → Despliega automáticamente
        → URL disponible en minutos
```

### Variables de Entorno
```
NEXT_PUBLIC_SUPABASE_URL    → URL de Supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY → Clave anónima
NEXT_PUBLIC_APP_URL         → URL de la aplicación
```

## 📦 Dependencias Principales

| Paquete | Versión | Uso |
|---------|---------|-----|
| next | 14.0.0 | Framework React |
| react | 18.2.0 | UI library |
| typescript | 5.x | Lenguaje tipado |
| tailwindcss | 3.3.5 | Estilos CSS |
| @supabase/supabase-js | 2.38.0 | Cliente Supabase |
| react-hook-form | 7.48.0 | Gestión de formularios |
| zod | 3.22.0 | Validación de esquemas |

## 🎯 Próximas Características

### Fase 2
- [ ] Integración de pagos (Stripe)
- [ ] Lector de códigos QR
- [ ] Notificaciones por email
- [ ] Exportación de reportes

### Fase 3
- [ ] Aplicación móvil (React Native)
- [ ] Tablero de tiempo real (WebSockets)
- [ ] Machine Learning para predicción de churn
- [ ] Sistema de referidos

## 🐛 Debugging

### Console Browser (F12)
```javascript
// Ver token de sesión
localStorage.getItem('supabase.auth.token')

// Ver usuario actual
localStorage.getItem('supabase.auth.user')
```

### Server Logs
```powershell
# En la terminal donde corre `npm run dev`
# Verás logs de errores y requests
```

### Herramientas Útiles
- **VS Code Debugger** - Para debugging de JavaScript
- **Supabase Studio** - Para inspeccionar BD
- **Chrome DevTools** - Para inspeccionar red y DOM

## 📊 Métricas a Rastrear

- Miembros activos
- Tasa de retención
- Ingresos mensuales
- Ocupación pico
- Distribución de planes
- Duración promedio de visitas

¡Felicidades! Ahora entiendes la arquitectura de GymControl 🎉
