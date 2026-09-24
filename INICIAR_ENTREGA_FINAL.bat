@echo off
setlocal
cd /d "%~dp0"
echo.
echo ================================================
echo   DETOCH MORE - ENTREGA FINAL 24-09-2026
echo ================================================
echo.
if exist .next rmdir /s /q .next
if not exist node_modules (
  echo Instalando dependencias por primera vez...
  call npm install
  if errorlevel 1 (
    echo.
    echo No se pudieron instalar dependencias. Revisa tu conexion y vuelve a ejecutar este archivo.
    pause
    exit /b 1
  )
)
echo Iniciando sitio en puerto 3018...
start "" http://localhost:3018/proyectos
call npm run dev -- -p 3018
endlocal
