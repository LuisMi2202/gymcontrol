# 🆘 Guía de Solución de Problemas

## ⚡ Problemas Comunes y Soluciones

### 1. "npx: command not found"

**Problema**: PowerShell no reconoce el comando `npx`

**Causas posibles**:
- Node.js no está instalado
- Node.js no está en el PATH
- Instalación incompleta

**Soluciones**:
```powershell
# Verificar si Node está instalado
node --version

# Si no funciona, reinstala Node.js
# Descarga de https://nodejs.org/
# Instala la versión LTS

# Reinicia PowerShell completamente
# Prueba nuevamente
npm install
```

---

### 2. "Cannot find module 'next'"

**Problema**: Next.js no está instalado

**Solución**:
```powershell
cd c:\Users\luisl\OneDrive\Documentos\pruebaa
npm install
```

**Si persiste**:
```powershell
# Elimina node_modules y package-lock.json
rm -r node_modules
rm package-lock.json

# Reinstala todo
npm install
```

---

### 3. "Port 3000 is already in use"

**Problema**: Otro programa ya está usando el puerto 3000

**Soluciones**:

Opción A: Usar otro puerto
```powershell
npm run dev -- -p 3001
```

Opción B: Liberar el puerto 3000
```powershell
# Encontrar el proceso
netstat -ano | findstr :3000

# Matar el proceso (reemplaza PID)
taskkill /PID 1234 /F
```

---

### 4. "Cannot find module '@/components/...'"

**Problema**: Error en imports con alias `@/`

**Causas**:
- Ruta incorrecta
- Archivo no existe
- tsconfig.json mal configurado

**Soluciones**:
```powershell
# 1. Verifica que tsconfig.json existe y es correcto
# 2. Verifica que la ruta es correcta (case-sensitive en Linux/Mac)
# 3. Reinicia el servidor
npm run dev
```

---

### 5. "NEXT_PUBLIC_SUPABASE_URL is undefined"

**Problema**: Variables de entorno no se cargan

**Soluciones**:

1. **Verificar que existe `.env.local`**
```powershell
# Desde la raíz del proyecto
ls .env.local
```

2. **Verificar contenido**
```powershell
cat .env.local
```

3. **Reiniciar servidor**
```powershell
# Ctrl+C para detener
# Luego
npm run dev
```

4. **Formato correcto de .env.local**
```env
NEXT_PUBLIC_SUPABASE_URL=https://abc123.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...
```

⚠️ **Sin espacios** antes/después del `=`

---

### 6. "connect ECONNREFUSED at 127.0.0.1:5432"

**Problema**: No puede conectar a la base de datos Supabase

**Causas**:
- URL de Supabase incorrecta
- Clave anónima incorrecta
- Proyecto Supabase no existe
- Sin conexión a internet

**Soluciones**:

1. **Verifica las credenciales en Supabase**:
   - Ve a https://app.supabase.com
   - Selecciona tu proyecto
   - Settings > API
   - Copia la URL y clave exactamente

2. **Actualiza `.env.local`**
```env
NEXT_PUBLIC_SUPABASE_URL=https://exactlyascopy.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=exactlyascopy
```

3. **Reinicia servidor**
```powershell
npm run dev
```

---

### 7. "Cannot find module 'react'"

**Problema**: React no está instalado

**Solución**:
```powershell
npm install react react-dom
```

---

### 8. TypeScript errors "Property 'x' does not exist"

**Problema**: Errores de tipos en TypeScript

**Causas**:
- Prop no está definida
- Tipo incorrecto
- Componente mal usado

**Soluciones**:
```powershell
# Ejecuta type check
npm run type-check

# Debería mostrar el error exacto
# Verifica el archivo y línea indicados
```

---

### 9. "Unexpected token '<' in JSON"

**Problema**: JSON parsing error

**Causa**: Probablemente una respuesta HTML en lugar de JSON

**Soluciones**:
- Verifica que estás haciendo requests correctamente
- Abre DevTools (F12) > Network para ver respuestas
- Verifica que las URLs de API son correctas

---

### 10. Página en blanco en producción (Vercel)

**Problema**: Aplicación muestra solo página blanca

**Causas**:
- Error en JavaScript
- Variables de entorno no configuradas
- Build incompleto

**Soluciones**:

1. **Abre DevTools (F12)**
   - Ve a Console
   - Busca errores de JavaScript rojos

2. **Verifica variables en Vercel**
   - Ve a https://vercel.com/dashboard
   - Selecciona tu proyecto
   - Settings > Environment Variables
   - Verifica que `NEXT_PUBLIC_SUPABASE_URL` existe

3. **Revisa logs de despliegue**
   - En dashboard de Vercel
   - Haz clic en tu deployment
   - Ve a "Logs"

4. **Redeploy**
```powershell
git push
# Vercel automáticamente redeploya
```

---

### 11. "Module not found: Can't resolve 'fs'"

**Problema**: Intentas usar módulo de Node en el cliente

**Causa**: `fs` solo funciona en el servidor (Node.js)

**Solución**: Usa `fs` solo en archivos del servidor:
- `app/api/` (API routes)
- `lib/` con `'use server'`
- Archivos `.server.ts`

---

### 12. Formularios no se envían

**Problema**: Al hacer clic en submit, no pasa nada

**Causas**:
- Falta `e.preventDefault()`
- Handler de error silencioso
- Validación fallida silenciosa

**Soluciones**:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();  // ← IMPORTANTE
  console.log('Form submitted'); // Para debugging
  try {
    // Aquí tu código
  } catch (error) {
    console.error('Error:', error); // ← Ver errores
  }
};
```

---

### 13. Cambios en código no se reflejan

**Problema**: Guardas código pero no ves cambios

**Soluciones**:

1. **Verifica que guardaste el archivo**
   - VS Code muestra punto blanco si no guardó

2. **Servidor caliente debería recargar automáticamente**
   - Si no, reinicia manualmente:
```powershell
# Ctrl+C
npm run dev
```

3. **Limpia caché del navegador**
```
Ctrl+Shift+Del → Selecciona "Caché"
```

---

### 14. "Error: Something went wrong. Try reloading."

**Problema**: Error genérico sin detalles

**Soluciones**:

1. **Abre DevTools (F12)**
   - Console > busca errores rojos

2. **Abre Network tab**
   - Recarga la página
   - Busca requests con status 500
   - Haz clic para ver detalles

3. **Revisa servidor terminal**
   - Busca errores en la terminal donde corre `npm run dev`

---

### 15. Base de datos vacía

**Problema**: No ves datos en las tablas

**Soluciones**:

1. **Verifica que las tablas existen**
   - Ve a Supabase Dashboard
   - En SQL Editor, ejecuta:
   ```sql
   SELECT * FROM members;
   ```

2. **Verifica que tienes datos**
   - Debería mostrar filas
   - Si está vacío, agrega datos de prueba:
   ```sql
   INSERT INTO members (email, full_name, phone, document_id)
   VALUES ('test@example.com', 'Test User', '+34600000000', '12345678A');
   ```

3. **Verifica RLS (Row Level Security)**
   - Si habilitaste RLS sin políticas, no ves datos
   - Ve a Supabase > Authentication > Policies
   - Verifica que hay policies permitiendo lectura

---

## 🔍 Debugging Tips

### Ver logs en tiempo real
```powershell
# En la terminal donde corre npm run dev
# Verás todos los logs automáticamente
```

### Agregar console.logs
```javascript
console.log('Debug:', variableADebugear);
console.error('Error:', error);
```

### Usar DevTools del navegador
- **F12** → Abre DevTools
- **Console** → Ver errores
- **Network** → Ver requests
- **Elements** → Inspeccionar HTML
- **Sources** → Debugger paso a paso

### Verificar estado de Supabase
```javascript
// En la consola del navegador
localStorage.getItem('supabase.auth.token')
```

---

## 📞 Recursos de Ayuda

### Documentación Oficial
- [Next.js Docs](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)

### Comunidades
- [Next.js Discord](https://discord.gg/nextjs)
- [Supabase Discord](https://discord.supabase.com)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

### Herramientas Online
- [Tailwind CSS Playground](https://play.tailwindcss.com)
- [JSON Editor](https://jsoncrack.com)
- [Regex Tester](https://regex101.com)

---

## 🎯 Checklist de Debugging

Cuando algo no funciona:

1. ✅ **Abre console (F12)**
   - ¿Hay errores rojos?

2. ✅ **Revisa terminal**
   - ¿Hay errores durante dev?

3. ✅ **Verifica archivos**
   - ¿El archivo existe?
   - ¿La ruta es correcta?

4. ✅ **Reinicia servidor**
   - Ctrl+C → npm run dev

5. ✅ **Limpia caché**
   - Ctrl+Shift+Del → Caché

6. ✅ **Verifica BD**
   - ¿Los datos están en Supabase?
   - ¿RLS está bien configurado?

7. ✅ **Lee el error completo**
   - No ignores el stack trace
   - Busca la línea exacta del error

8. ✅ **Google + Stack Overflow**
   - Copia el error exacto
   - Busca en internet

---

¡Espero que esta guía te ayude a solucionar problemas! 🚀

Si encuentras un problema no listado aquí, contribuye agregándolo.
