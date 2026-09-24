@echo off
setlocal
cd /d "%~dp0"
title DETOCH MORE - VERSION NUEVA 3015

echo.
echo ==================================================
echo  DETOCH MORE - VERSION NUEVA / PUERTO 3015
echo ==================================================
echo.

if exist .next rmdir /s /q .next

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

echo Iniciando la VERSION NUEVA en http://localhost:3015/proyectos
start "" cmd /c "timeout /t 5 /nobreak >nul & start http://localhost:3015/proyectos"
call npm run dev -- -p 3015
endlocal
