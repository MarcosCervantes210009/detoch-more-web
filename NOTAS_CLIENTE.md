# Notas de cliente — Detoch More

## Identidad visual
- Se eliminó el selector de identidades/colores.
- La interfaz queda fija en **guinda + negro**, alineada con el logotipo proporcionado.
- El logotipo fue ajustado para conservar su proporción y evitar recortes o deformaciones.

## Contenido pendiente
- **Aviso de privacidad:** pendiente de recibir/aprobar el texto oficial. La página está preparada, pero no se inventó contenido legal.
- **Fotografías finales:** la galería queda preparada y las imágenes actuales funcionan como material temporal. Sustituir por las fotografías finales cuando sean enviadas y autorizadas.
- **Logotipos de clientes/casos de éxito:** placeholders listos hasta recibir material autorizado.
- **Redes sociales:** placeholders listos hasta recibir enlaces oficiales.
- **WhatsApp:** el botón flotante ya está implementado. El número está centralizado mediante `NEXT_PUBLIC_WHATSAPP_NUMBER`; actualmente usa provisionalmente el teléfono corporativo disponible (+52 55 5800 6201). Sustituirlo cuando se confirme el número de WhatsApp Business.

## Formulario de contacto
El formulario ya no depende de `mailto:`. Ahora envía los datos al endpoint `/api/contact` mediante SMTP.

Para producción hay que configurar las variables SMTP del proveedor que aloje la cuenta `ventas@dmaq.mx`. Ver `.env.example`.

Variables requeridas:
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `MAIL_FROM`
- `CONTACT_TO`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`

**Importante:** el código está listo, pero el envío real no puede probarse hasta disponer de las credenciales SMTP de la cuenta/proveedor de correo.

## Retroalimentación 17-sep-2026
- Se actualizó el eje de Inicio a “Ingeniería y Manufactura de Precisión” y la descripción explícita de especialización en maquinaria farmacéutica.
- Menú renombrado a “Aplicaciones” y página enfocada en aplicaciones farmacéuticas.
- Se enlazaron Facebook y LinkedIn oficiales compartidos por el cliente.
- La selección fotográfica final y los casos específicos siguen sujetos a material y autorización del cliente; evitar inventar certificaciones o capacidades.
- Documento recibido: Retroalimentacion_Web_Detoch_More.docx.

## Actualización visual — 23 septiembre 2026
- Se incorporaron las 48 fotografías entregadas en `public/images/editorial/` en formato WebP optimizado.
- La página `/proyectos` fue rediseñada como una composición editorial asimétrica: imagen protagonista, piezas flotantes, bloques de diferentes alturas, sección de proceso y detalle final.
- Se eliminó la presentación tipo galería cuadriculada uniforme.
- La portada ahora utiliza una selección editorial de las nuevas fotografías en lugar de cuatro tarjetas iguales.
- Las fotografías conservan sus encuadres y se presentan con distintos ritmos visuales para acercar el sitio a la referencia proporcionada.
