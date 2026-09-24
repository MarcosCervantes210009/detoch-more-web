@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>&1
if errorlevel 1 (
  echo.
  echo ERROR: Necesitas instalar Node.js LTS antes de continuar.
  echo Descarga: https://nodejs.org/
  pause
  exit /b 1
)
if exist .next (
  echo Limpiando cache anterior de Next.js...
  rmdir /s /q .next
)
if not exist node_modules (
  echo Instalando dependencias por primera vez...
  call npm install
  if errorlevel 1 (
    echo.
    echo No se pudieron instalar las dependencias.
    pause
    exit /b 1
  )
)
echo.
echo Abriendo Detoch More en http://localhost:3000
start "" http://localhost:3000
call npm run dev
