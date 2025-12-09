# 🚀 Guía de Despliegue en Vercel

## Pre-requisitos
- ✅ Proyecto completado localmente
- ✅ Cuenta de GitHub (gratuita)
- ✅ Cuenta de Vercel (gratuita)
- ✅ Variables de Supabase configuradas

## Paso 1: Preparar Proyecto para Git

### 1.1 Instalar Git (si no lo tienes)
- Descarga de https://git-scm.com/download/win
- Instala con opciones por defecto

### 1.2 Configurar Git
Abre PowerShell y ejecuta:
```powershell
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

### 1.3 Inicializar repositorio local
En la carpeta del proyecto:
```powershell
git init
git add .
git commit -m "Initial commit - GymControl v1.0"
```

## Paso 2: Crear Repositorio en GitHub

### 2.1 Ir a GitHub
1. Ve a https://github.com
2. Inicia sesión (o crea cuenta)
3. Haz clic en **+** → **New repository**

### 2.2 Crear repositorio
- **Repository name**: `gymcontrol` (o el que prefieras)
- **Description**: "Sistema de Control de Acceso para Gimnasio"
- **Public** (recomendado) o Private
- NO marques "Initialize with README" (ya lo tienes)
- Haz clic en **Create repository**

### 2.3 Conectar repositorio local con GitHub
En PowerShell (en tu carpeta del proyecto):
```powershell
git branch -M main
git remote add origin https://github.com/TU-USUARIO/gymcontrol.git
git push -u origin main
```

Reemplaza `TU-USUARIO` con tu nombre de usuario de GitHub.

## Paso 3: Desplegar en Vercel

### 3.1 Ir a Vercel
1. Ve a https://vercel.com
2. Haz clic en **Sign Up** (o inicia sesión)
3. Elige **Continue with GitHub**
4. Autoriza Vercel para acceder a tu GitHub

### 3.2 Importar Proyecto
1. En el dashboard de Vercel, haz clic en **Add New** → **Project**
2. Selecciona tu repositorio `gymcontrol`
3. Vercel detectará automáticamente que es un proyecto Next.js
4. Haz clic en **Import**

### 3.3 Configurar Variables de Entorno
Antes de hacer deploy, DEBES configurar las variables:

1. En la página de configuración del proyecto, ve a **Environment Variables**
2. Agrega estas variables:

```
NEXT_PUBLIC_SUPABASE_URL
```
Valor: Tu URL de Supabase (ej: https://abcd1234.supabase.co)

```
NEXT_PUBLIC_SUPABASE_ANON_KEY
```
Valor: Tu clave anónima de Supabase

```
NEXT_PUBLIC_APP_URL
```
Valor: Tu dominio de Vercel (ej: https://gymcontrol.vercel.app)
O tu dominio personalizado si tienes uno

### 3.4 Desplegar
1. Haz clic en **Deploy**
2. Vercel empezará a construir tu proyecto
3. Espera 2-3 minutos
4. ¡Tu aplicación estará en vivo! 🎉

## Paso 4: Verificar Despliegue

1. Vercel te dará una URL como: `https://gymcontrol.vercel.app`
2. Abre esa URL en tu navegador
3. Deberías ver la página de inicio

## Actualizar tu Aplicación

Cada vez que hagas cambios:

```powershell
# En tu carpeta del proyecto:
git add .
git commit -m "Descripción del cambio"
git push
```

Vercel automáticamente detectará los cambios en GitHub y desplegará la nueva versión.

## Dominio Personalizado (Opcional)

Si quieres usar tu propio dominio (ej: gymcontrol.tuempresa.com):

1. En Vercel, ve a **Settings** → **Domains**
2. Agrega tu dominio
3. Vercel te dará instrucciones para configurar tu registrador de dominios
4. Espera a que se verifique (puede tomar hasta 24 horas)

## Monitoreo en Producción

### Ver logs
- En Vercel dashboard → Deployment → **Logs**

### Ver variables
- En Vercel dashboard → **Settings** → **Environment Variables**

### Rollback (volver a versión anterior)
- En Vercel dashboard → **Deployments**
- Haz clic en un deployment anterior
- Haz clic en **Promote to Production**

## Problemas Comunes

### Error: "Build failed"
- Abre los logs en Vercel
- Generalmente significa que falta instalar una dependencia
- Ejecuta `npm install` localmente y push a GitHub

### Error: "Cannot find module '@/components/...'"
- Verifica que la ruta es correcta en `tsconfig.json`
- Las rutas deben usar `@/` en Vercel

### Aplicación muestra página en blanco
- Abre Console (F12) y busca errores
- Verifica que las variables de entorno están correctas
- Revisa los logs en Vercel

### Base de datos no conecta
- Verifica que `NEXT_PUBLIC_SUPABASE_URL` es correcto
- Verifica que `NEXT_PUBLIC_SUPABASE_ANON_KEY` es correcto
- Abre la consola del navegador para ver errores exactos

## Seguridad en Producción

⚠️ **IMPORTANTE:**

1. **Nunca** commits variables secretas a GitHub
2. **Siempre** usa archivos `.env.local` (está en `.gitignore`)
3. En Vercel, solo agregar variables públicas (NEXT_PUBLIC_*)
4. En Supabase, **activa RLS** en todas las tablas
5. **Revisa** los permisos de acceso en Supabase

## Performance

Vercel automáticamente optimiza:
- ✅ Compresión de código
- ✅ Caché de imágenes
- ✅ CDN global
- ✅ Optimización automática

Tu aplicación será rápida automáticamente 🚀

## Próximos Pasos

1. **Agregar dominio personalizado**
2. **Configurar HTTPS** (automático en Vercel)
3. **Monitorear analytics**
4. **Configurar backups automáticos de Supabase**
5. **Agregar monitoreo de errores** (Sentry, LogRocket)

## ¿Necesitas ayuda?

- Documentación de Vercel: https://vercel.com/docs
- Soporte de Vercel: https://vercel.com/support
- Comunidad Next.js: https://nextjs.org/community
- Discord de Next.js: https://discord.gg/nextjs

¡Felicidades! Tu aplicación está en producción 🎉
