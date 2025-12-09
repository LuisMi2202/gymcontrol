# 🔐 Cómo Configurar Supabase para Autenticación

## Paso 1: Crear Cuenta en Supabase

1. Ve a https://supabase.com
2. Haz clic en **"Sign up"** (Registrarse)
3. Usa tu email o GitHub para crear cuenta
4. Confirma tu email

## Paso 2: Crear un Proyecto

1. En el dashboard, haz clic en **"New project"** (Nuevo proyecto)
2. Dale un nombre a tu proyecto (ej: "GymControl")
3. Crea una contraseña para la base de datos
4. Selecciona tu región (ej: us-east-1 o la más cercana)
5. Haz clic en **"Create new project"**

⏳ Espera 2-5 minutos a que se cree el proyecto

## Paso 3: Obtener Credenciales

1. Una vez creado el proyecto, ve a **Settings** (⚙️)
2. Haz clic en **API** en el menú lateral
3. En la sección **Project URL**, copia la URL (ej: `https://abc123.supabase.co`)
4. En la sección **Project API keys**, copia la clave **anon public** (la primera)

## Paso 4: Configurar Variables de Entorno

1. En tu proyecto (en VS Code), abre o crea `.env.local`
2. Reemplaza los valores con los que copiaste:

```env
NEXT_PUBLIC_SUPABASE_URL=https://abc123.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Asegúrate de:**
- ✅ Copiar exactamente los valores
- ✅ Sin espacios al principio/final
- ✅ Mantener el formato exacto

## Paso 5: Crear Tablas en Supabase

1. En Supabase dashboard, ve a **SQL Editor** (en el menú lateral)
2. Haz clic en **New Query**
3. Copia todo el SQL de abajo
4. Haz clic en **Run** (o Ctrl+Enter)

```sql
-- Crear tabla de miembros
CREATE TABLE IF NOT EXISTS members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  document_id VARCHAR(50) UNIQUE NOT NULL,
  status VARCHAR(50) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Crear tabla de membresías
CREATE TABLE IF NOT EXISTS memberships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  member_id UUID REFERENCES members(id) ON DELETE CASCADE,
  plan_type VARCHAR(50) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  status VARCHAR(50) DEFAULT 'active',
  amount_paid DECIMAL(10, 2),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Crear tabla de registros de acceso
CREATE TABLE IF NOT EXISTS access_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  member_id UUID REFERENCES members(id) ON DELETE CASCADE,
  check_in TIMESTAMP,
  check_out TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Crear tabla de pagos
CREATE TABLE IF NOT EXISTS payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  member_id UUID REFERENCES members(id) ON DELETE CASCADE,
  amount DECIMAL(10, 2) NOT NULL,
  payment_date DATE NOT NULL,
  status VARCHAR(50) DEFAULT 'completed',
  created_at TIMESTAMP DEFAULT NOW()
);
```

Deberías ver: ✅ **Success. No rows returned**

## Paso 6: Habilitar Autenticación por Email

1. En Supabase, ve a **Authentication** (en el menú lateral)
2. Haz clic en **Providers**
3. Asegúrate de que **Email** está habilitado (debe estar verde)
4. Si no está, haz clic en él y habilítalo

## Paso 7: Verificar Configuración

Vuelve a VS Code:

1. Guarda `.env.local` (Ctrl+S)
2. El servidor de desarrollo debería recargar automáticamente
3. Abre http://localhost:3000 en tu navegador

## Paso 8: Prueba de Autenticación

### Crear Cuenta (Sign Up)
1. Haz clic en **"Registrarse"**
2. Llena el formulario:
   - Nombre completo
   - Email
   - Contraseña (mínimo 6 caracteres)
   - Confirmar contraseña
3. Haz clic en **"Crear Cuenta"**
4. Deberías ver un mensaje de éxito
5. Serás redirigido a login automáticamente

### Iniciar Sesión (Login)
1. Ahora en la página de login, ingresa:
   - Email que usaste al registrarte
   - Contraseña
2. Haz clic en **"Iniciar Sesión"**
3. ¡Deberías ser redirigido al dashboard! ✅

## ✅ Si Todo Funciona

- ✅ Puedes crear cuenta
- ✅ Puedes iniciar sesión
- ✅ Eres redirigido al dashboard
- ✅ La autenticación está funcionando

## ❌ Si Algo No Funciona

### Error: "Invalid API Key"
→ Verifica que copiaste exactamente la clave anónima

### Error: "Invalid Supabase URL"
→ Verifica que la URL es correcta y tiene formato `https://`

### Error: "User already exists"
→ Ya existe un usuario con ese email, prueba otro email

### Error: "Invalid login credentials"
→ Email o contraseña incorrectos, verifica que escribiste bien

### Error: "Password should be at least 6 characters"
→ La contraseña debe tener mínimo 6 caracteres

### No pasa nada al hacer clic en Login
1. Abre DevTools (F12)
2. Ve a **Console**
3. Busca mensajes de error rojos
4. Lee el error exacto
5. Copia el error y búscalo en Google

---

## 🎯 Resumen Rápido

| Paso | Qué Hacer | Resultado |
|------|-----------|-----------|
| 1 | Crear cuenta Supabase | Acceso a dashboard |
| 2 | Crear proyecto | Nuevo proyecto creado |
| 3 | Copiar credenciales | Tienes URL y clave |
| 4 | Editar `.env.local` | Variables configuradas |
| 5 | Ejecutar SQL | Tablas creadas |
| 6 | Habilitar Email Auth | Autenticación habilitada |
| 7 | Recargar navegador | Servidor actualizado |
| 8 | Probar Sign Up | Cuenta creada |
| 9 | Probar Login | ¡Dashboard accesible! |

---

## 📞 Ayuda

Si tienes problemas:

1. **Revisa Console (F12)** - Busca errores rojos
2. **Lee el error exacto** - Proporciona pistas
3. **Busca en Google** - Probablemente alguien tuvo el mismo error
4. **Lee TROUBLESHOOTING.md** - Tiene soluciones comunes

¡Buena suerte! 🚀
