# GUÍA RÁPIDA - GymControl

## ⚡ Pasos Iniciales (5-10 minutos)

### 1️⃣ Instalar Node.js
- Descarga: https://nodejs.org/ (LTS)
- Instala normalmente
- Reinicia tu computadora

### 2️⃣ Verificar instalación
Abre PowerShell y escribe:
```powershell
node --version
npm --version
```

### 3️⃣ Instalar dependencias
En PowerShell, en la carpeta del proyecto:
```powershell
npm install
```
Espera a que termine (puede tomar 2-3 minutos)

### 4️⃣ Configurar Supabase
1. Ve a https://supabase.com
2. Crea una cuenta o inicia sesión
3. Crea un nuevo proyecto
4. En Settings → API, copia:
   - Project URL
   - anon public key

### 5️⃣ Crear archivo de configuración
En la carpeta del proyecto, crea/edita `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 6️⃣ Crear tablas en Supabase
1. En Supabase dashboard, ve a "SQL Editor"
2. Copia y ejecuta el SQL de README.md (Paso 4)

### 7️⃣ Ejecutar aplicación
```powershell
npm run dev
```

Abre: http://localhost:3000

## 📊 Páginas Disponibles

| Ruta | Descripción |
|------|-------------|
| `/` | Inicio |
| `/login` | Iniciar sesión |
| `/signup` | Registrarse |
| `/dashboard` | Panel de control |
| `/members` | Gestión de miembros |
| `/memberships` | Gestión de membresías |
| `/access` | Control de acceso |
| `/payments` | Registros de pago |
| `/reports` | Reportes y análisis |

## 🆘 Si algo no funciona

### Error: "npx no se reconoce"
- Node.js no está instalado correctamente
- Reinicia tu computadora después de instalar

### Error: "Cannot find module"
- Ejecuta `npm install` de nuevo
- Elimina la carpeta `node_modules` y ejecuta `npm install`

### Puerto 3000 en uso
```powershell
npm run dev -- -p 3001
```

## 🚀 Próximos pasos

1. **Conectar autenticación real**
   - Implementar login/signup con Supabase
   - Agregar persistencia de sesión

2. **Agregar datos reales**
   - Conectar base de datos
   - Implementar CRUD completo

3. **Mejorar seguridad**
   - Implementar RLS en Supabase
   - Agregar validaciones adicionales

4. **Desplegar en Vercel**
   - Subir a GitHub
   - Conectar con Vercel
   - Configurar variables de entorno

## 📚 Recursos Útiles

- [Documentación Next.js](https://nextjs.org/docs)
- [Documentación Supabase](https://supabase.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vercel Docs](https://vercel.com/docs)

## 💡 Tips

- Usa `npm run type-check` para verificar tipos TypeScript
- Usa `npm run lint` para verificar el código
- El archivo `.env.local` NUNCA debe commitearse a Git
- Usa `.env.example` como plantilla

¡Buena suerte con tu aplicación! 🎉
