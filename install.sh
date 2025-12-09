#!/usr/bin/env bash
# GymControl - Instalación Automática
# Ejecutar este script para instalar todo automáticamente

echo "🚀 GymControl - Instalación Automática"
echo "======================================="
echo ""

# Verificar si Node está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado"
    echo "Por favor, descarga e instala desde: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js detectado: $(node --version)"
echo "✅ npm detectado: $(npm --version)"
echo ""

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Error durante la instalación de dependencias"
    exit 1
fi

echo "✅ Dependencias instaladas correctamente"
echo ""

# Crear archivo de entorno si no existe
if [ ! -f .env.local ]; then
    echo "📝 Creando .env.local..."
    cp .env.example .env.local
    echo "⚠️  Por favor, edita .env.local con tus credenciales de Supabase"
fi

echo ""
echo "✅ ¡Instalación completada!"
echo ""
echo "Próximos pasos:"
echo "1. Edita .env.local con tus credenciales de Supabase"
echo "2. Ejecuta: npm run dev"
echo "3. Abre http://localhost:3000"
echo ""
echo "📖 Para más información, lee README.md o QUICK_START.md"
