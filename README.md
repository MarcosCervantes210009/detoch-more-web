# Detoch More — Web corporativa

Sitio web corporativo para Detoch More S.A., enfocado en ingeniería y manufactura de precisión.

## Incluye
- Identidad visual fija en guinda + negro, alineada al logotipo proporcionado.
- Inicio, Nosotros, Servicios, Capacidades, Industrias, Proyectos, Calidad y Contacto.
- Galería preparada para fotografías finales y autorizadas.
- Área preparada para logotipos de clientes/casos de éxito.
- Placeholders para redes sociales.
- Botón flotante de WhatsApp.
- Aviso de privacidad preparado, pendiente del contenido legal oficial.
- Formulario de contacto conectado a `/api/contact` para envío real por SMTP.
- SEO básico, sitemap y robots.

## Abrir en local
1. Instala Node.js LTS.
2. Descomprime el proyecto.
3. Haz doble clic en `INICIAR_LOCAL.bat`.
4. El script instala dependencias la primera vez y ejecuta el sitio.
5. Visita `http://localhost:3000`.

## Configurar correo
Copia `.env.example` como `.env.local` y completa las credenciales SMTP del proveedor que administra `ventas@dmaq.mx`.

Variables principales:
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `MAIL_FROM`
- `CONTACT_TO`

El formulario recibe las solicitudes y las envía a `ventas@dmaq.mx`. El correo del visitante se usa como `Reply-To` para facilitar la respuesta.

## Configurar WhatsApp
En `.env.local`, define `NEXT_PUBLIC_WHATSAPP_NUMBER` con el número de WhatsApp Business, solo números y con código de país.

El proyecto trae provisionalmente `525558006201` para que el botón tenga funcionamiento desde el inicio; sustituirlo por el número confirmado antes de publicar.

## Material pendiente
- Aviso de privacidad oficial.
- Fotografías finales/autorizadas.
- Logotipos de clientes y casos de éxito autorizados.
- Enlaces oficiales de redes sociales.
