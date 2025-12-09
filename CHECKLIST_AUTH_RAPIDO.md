# ✅ Checklist Rápido - Autenticación

## 🎯 Antes de Probar (Configuración)

- [ ] Tienes Node.js instalado (`node --version`)
- [ ] Ejecutaste `npm install` (completamente sin errores)
- [ ] Tienes cuenta en Supabase
- [ ] Creaste un proyecto en Supabase
- [ ] Obtuviste URL de Supabase
- [ ] Obtuviste clave anónima de Supabase
- [ ] Creaste `.env.local` en la raíz del proyecto
- [ ] Pegaste URL en `NEXT_PUBLIC_SUPABASE_URL`
- [ ] Pegaste clave en `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] Ejecutaste el SQL de creación de tablas
- [ ] El servidor corre sin errores (`npm run dev`)

## 🚀 Servidor Corriendo

Verifica que ves en la terminal:
```
✓ Ready in 6.8s
Local: http://localhost:3000
```

Si ves eso, el servidor está listo ✅

## 🌐 Abre el Navegador

1. Ve a http://localhost:3000
2. Deberías ver la página de inicio con:
   - Logo "GymControl"
   - Botón "Iniciar Sesión"
   - Botón "Registrarse"
   - Lista de características

## 📝 Prueba 1: Crear Cuenta (Sign Up)

1. Haz clic en **"Registrarse"**
2. Llena el formulario con:
   ```
   Nombre: Juan Pérez
   Email: juan@example.com
   Contraseña: password123
   Confirmar: password123
   ```
3. Haz clic en **"Crear Cuenta"**

### ✅ Si funciona:
- [ ] Ves un mensaje verde de éxito
- [ ] Después de 2 segundos, vas a /login
- [ ] El formulario se limpia

### ❌ Si algo falla:
- [ ] Mira el mensaje de error en rojo
- [ ] Lee el error exacto
- [ ] Abre DevTools (F12) > Console > Busca errores
- [ ] Ve a TROUBLESHOOTING.md

## 🔐 Prueba 2: Iniciar Sesión (Login)

1. Estás en la página de login
2. Llena con los datos que acabas de crear:
   ```
   Email: juan@example.com
   Contraseña: password123
   ```
3. Haz clic en **"Iniciar Sesión"**

### ✅ Si funciona:
- [ ] Ves el botón cambiar a "Iniciando sesión..."
- [ ] Se redirige a /dashboard
- [ ] Ves el panel con estadísticas
- [ ] No hay errores

### ❌ Si falla:
- [ ] Verifica que el email y contraseña son correctos
- [ ] Revisa Console (F12) para errores
- [ ] Ve TROUBLESHOOTING.md

## 🎯 Verificación Final

Si ambas pruebas funcionan:

- ✅ La autenticación está **FUNCIONANDO**
- ✅ Puedes crear cuentas
- ✅ Puedes iniciar sesión
- ✅ El dashboard es accesible
- ✅ **¡Felicidades!** 🎉

---

## 🆘 Si Algo No Funciona

### Paso 1: Revisa .env.local
```powershell
cat .env.local
```
Deberías ver:
```
NEXT_PUBLIC_SUPABASE_URL=https://...
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
```

### Paso 2: Reinicia el servidor
```powershell
# En la terminal donde corre npm run dev
Ctrl+C
npm run dev
```

### Paso 3: Abre DevTools (F12)
- Console tab
- Busca mensajes de error rojos
- Lee el error exacto
- Copia y busca en Google

### Paso 4: Revisa Supabase
- Ve a https://app.supabase.com
- ¿El proyecto existe?
- ¿Las tablas fueron creadas?
- ¿La autenticación está habilitada?

### Paso 5: Busca en TROUBLESHOOTING.md
Tiene soluciones para 15+ problemas comunes

---

## 📞 Mensajes de Error Comunes

| Error | Solución |
|-------|----------|
| "Invalid API Key" | Verifica que copiaste exactamente la clave |
| "Invalid Supabase URL" | Verifica que la URL es correcta |
| "User already exists" | Usa otro email |
| "Invalid login credentials" | Email o contraseña incorrectos |
| "Password should be at least 6 characters" | Usa contraseña más larga |
| "Cannot find module '@/lib/auth'" | Variables de entorno no cargadas, reinicia servidor |

---

## ✨ Lo Que Sigue

Una vez que la autenticación funciona:

1. **Crear tabla de miembros**
   - Implementar CRUD
   - Listar miembros
   - Crear/editar/eliminar

2. **Crear tabla de membresías**
   - Planes de suscripción
   - Vencimientos
   - Renovaciones

3. **Implementar control de acceso**
   - Registro de entrada/salida
   - Historial
   - Reportes

4. **Agregar sistema de pagos**
   - Registro de transacciones
   - Historial
   - Estado de pagos

5. **Desplegar en Vercel**
   - Push a GitHub
   - Conectar con Vercel
   - En vivo en producción

---

¡Listo! Ahora sigue el checklist arriba y cuéntame si todo funciona 🚀
