# Sistema de Control de Acceso para Gimnasio 🏋️

Aplicación web moderna y profesional para gestionar el acceso, membresías y pagos de un gimnasio. Construida con Next.js 14, TypeScript, Tailwind CSS e integrada con Supabase para backend. Lista para desplegar en Vercel.

## 📋 Características Principales

✅ **Autenticación Segura** - Login/Registro con Supabase Auth  
✅ **Gestión de Miembros** - Crear, editar, eliminar y listar miembros  
✅ **Planes de Membresía** - Mensual, Trimestral, Anual con validación de vencimiento  
✅ **Control de Acceso** - Registro de entrada/salida en tiempo real  
✅ **Sistema de Pagos** - Historial y seguimiento de pagos  
✅ **Dashboard Inteligente** - Panel de control con estadísticas en tiempo real  
✅ **Reportes Avanzados** - Gráficos y análisis de ocupación  
✅ **Interfaz Moderna** - Diseño responsivo con Tailwind CSS  
✅ **Optimizado para Vercel** - Despliegue automático sin configuración

## 🚀 Guía de Instalación y Configuración

### Paso 1: Instalar Node.js (IMPORTANTE)

Esta aplicación requiere Node.js para funcionar.

1. Ve a [https://nodejs.org/](https://nodejs.org/)
2. Descarga la versión **LTS** (Long Term Support)
3. Ejecuta el instalador y sigue las instrucciones
4. Verifica la instalación abriendo PowerShell y escribe:
   ```powershell
   node --version
   npm --version
   ```

### Paso 2: Instalar Dependencias

Abre PowerShell en la carpeta del proyecto y ejecuta:

```powershell
npm install
```

Este comando instalará todas las dependencias necesarias (React, Next.js, Supabase, etc.)

### Paso 3: Configurar Supabase

1. **Crear cuenta en Supabase**
   - Ve a [https://supabase.com](https://supabase.com)
   - Haz clic en "Start your project"
   - Regístrate con tu email

2. **Obtener credenciales**
   - En el dashboard de Supabase, ve a **Settings > API**
   - Copia la **URL del proyecto** (Project URL)
   - Copia la **clave anónima** (anon public key)

3. **Crear archivo de configuración**
   - En la raíz del proyecto, copia `.env.example` a `.env.local`
   - Reemplaza los valores:
     ```env
     NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
     NEXT_PUBLIC_APP_URL=http://localhost:3000
     ```

### Paso 4: Crear Tablas en Supabase

En el SQL Editor de Supabase, ejecuta este código para crear las tablas:

```sql
-- Tabla de Miembros
CREATE TABLE members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  document_id VARCHAR(50) UNIQUE NOT NULL,
  status VARCHAR(50) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Tabla de Membresías
CREATE TABLE memberships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  member_id UUID REFERENCES members(id) ON DELETE CASCADE,
  plan_type VARCHAR(50) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  status VARCHAR(50) DEFAULT 'active',
  amount_paid DECIMAL(10, 2),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tabla de Registros de Acceso
CREATE TABLE access_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  member_id UUID REFERENCES members(id) ON DELETE CASCADE,
  check_in TIMESTAMP,
  check_out TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tabla de Pagos
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  member_id UUID REFERENCES members(id) ON DELETE CASCADE,
  amount DECIMAL(10, 2) NOT NULL,
  payment_date DATE NOT NULL,
  status VARCHAR(50) DEFAULT 'completed',
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Paso 5: Ejecutar la Aplicación

En PowerShell (en la carpeta del proyecto), ejecuta:

```powershell
npm run dev
```

Abre tu navegador y ve a: **http://localhost:3000**



## 📁 Estructura del Proyecto

```
src/
├── app/                      # Rutas y páginas
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Página de inicio
│   ├── dashboard/           # Panel de control
│   ├── members/             # Gestión de miembros
│   ├── memberships/         # Gestión de membresías
│   ├── access/              # Control de acceso
│   ├── payments/            # Gestión de pagos
│   ├── reports/             # Reportes y análisis
│   ├── login/               # Página de inicio de sesión
│   └── signup/              # Página de registro
├── components/              # Componentes reutilizables
│   ├── Header.tsx          # Encabezado
│   ├── Sidebar.tsx         # Barra de navegación
│   ├── MemberForm.tsx      # Formulario de miembros
│   └── StatCard.tsx        # Tarjeta de estadísticas
├── lib/                     # Utilidades y funciones
│   ├── supabase.ts         # Configuración de Supabase
│   ├── auth.ts             # Funciones de autenticación
│   └── utils.ts            # Funciones auxiliares
├── types/                   # Definiciones de TypeScript
│   └── index.ts            # Tipos de la aplicación
├── hooks/                   # Custom hooks
│   └── useAuth.ts          # Hook para autenticación
└── styles/                  # Estilos globales
    └── globals.css         # CSS global
```

## 🔧 Tecnologías Utilizadas

- **Next.js 14** - Framework React con Server Components
- **TypeScript** - Tipado estático para mayor seguridad
- **React 18** - Biblioteca UI moderna
- **Tailwind CSS** - Estilos utilities-first
- **Supabase** - Backend y autenticación
- **Vercel** - Hosting y despliegue automático

## 🛠️ Comandos Disponibles

```powershell
# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Ejecutar en producción
npm start

# Verificar tipos TypeScript
npm run type-check

# Ejecutar linter
npm run lint
```

## 🔐 Seguridad

- Autenticación con Supabase Auth (OAuth, Email/Password)
- Row Level Security (RLS) en Supabase
- Variables de entorno seguras
- HTTPS en producción
- Protección CSRF con Next.js

## 📊 Características de UX

### Dashboard
- Estadísticas en tiempo real
- Widget de ocupación actual
- Actividad reciente de miembros
- Membresías próximas a vencer
- Gráficos de ingresos

### Gestión de Miembros
- Búsqueda y filtrado
- Importación en lote
- Historial de cambios
- Estatus de membresía visible
- Contacto rápido (email/teléfono)

### Control de Acceso
- Registro en tiempo real
- Cálculo automático de duración
- Historial detallado
- Estadísticas de ocupación
- Alertas de vencimiento

### Reportes
- Gráficos interactivos
- Estadísticas de ingresos
- Análisis de ocupación
- Exportación de datos
- Filtros por período

## 🚀 Despliegue en Vercel

### Opción 1: Automático desde GitHub

1. **Sube tu proyecto a GitHub**
   ```powershell
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/tu-usuario/tu-repo.git
   git push -u origin main
   ```

2. **Conecta a Vercel**
   - Ve a https://vercel.com
   - Haz clic en "Import Project"
   - Selecciona tu repositorio de GitHub
   - Vercel detectará automáticamente que es Next.js

3. **Configura variables de entorno**
   - En Vercel, ve a **Settings > Environment Variables**
   - Agrega:
     ```
     NEXT_PUBLIC_SUPABASE_URL=tu-url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-clave
     NEXT_PUBLIC_APP_URL=tu-dominio-vercel.vercel.app
     ```

4. **Despliega**
   - Haz clic en "Deploy"
   - Tu aplicación estará disponible en unos minutos

### Opción 2: Despliegue Manual

```powershell
# Instala Vercel CLI
npm install -g vercel

# Despliega
vercel
```

## 📱 Características Responsivas

- Diseño Mobile-First
- Breakpoints optimizados (móvil, tablet, escritorio)
- Navegación adaptativa
- Tablas scrolleables en móvil
- Formularios optimizados para touch

## 🎨 Paleta de Colores

- **Primario**: Azul (#0066cc)
- **Éxito**: Verde (#16a34a)
- **Advertencia**: Amarillo (#ca8a04)
- **Error**: Rojo (#dc2626)
- **Neutral**: Gris (#64748b)

## 📚 Documentación Adicional

### Supabase
- [Documentación de Supabase](https://supabase.com/docs)
- [Guía de RLS](https://supabase.com/docs/guides/auth/row-level-security)
- [SQL Reference](https://supabase.com/docs/reference/sql)

### Next.js
- [Documentación de Next.js](https://nextjs.org/docs)
- [App Router](https://nextjs.org/docs/app)
- [TypeScript](https://nextjs.org/docs/basic-features/typescript)

### Tailwind CSS
- [Documentación de Tailwind](https://tailwindcss.com/docs)
- [Componentes](https://tailwindcss.com/docs/theme)

## 🐛 Solución de Problemas

### "Error: Cannot find module 'react'"
- Ejecuta `npm install` nuevamente
- Verifica que Node.js está instalado correctamente

### "Error: NEXT_PUBLIC_SUPABASE_URL is undefined"
- Verifica que el archivo `.env.local` existe
- Reinicia el servidor con `npm run dev`

### Puerto 3000 en uso
```powershell
npm run dev -- -p 3001
```

## 📧 Contacto y Soporte

Para reportar errores o sugerencias, abre un issue en el repositorio.

## 📄 Licencia

Este proyecto está bajo licencia MIT.
