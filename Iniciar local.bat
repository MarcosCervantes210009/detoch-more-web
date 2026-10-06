@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Necesitas instalar Node.js para abrir la pagina.
  pause
  exit /b 1
)
if not exist "node_modules\next" (
  echo Instalando dependencias por primera vez...
  call npm ci
  if errorlevel 1 (
    echo La instalacion fallo. Revisa la conexion a Internet.
    pause
    exit /b 1
  )
)
echo Abre http://localhost:3000 en tu navegador.
echo Para detener la pagina, presiona Ctrl+C.
call npm run dev
pause
