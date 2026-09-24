import nodemailer from "nodemailer";

export const runtime = "nodejs";

function required(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Falta configurar ${name}.`);
  return value;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { nombre, empresa, correo, telefono, proyecto, website, aceptaPrivacidad, marketing } = body || {};

    // Honeypot: bots that fill this field receive a neutral response.
    if (website) return Response.json({ ok: true });

    if (!nombre || !correo || !proyecto) {
      return Response.json({ message: "Completa nombre, correo y proyecto o necesidad." }, { status: 400 });
    }

    if (!aceptaPrivacidad) {
      return Response.json({ message: "Para enviar la solicitud es necesario aceptar el Aviso de Privacidad Integral." }, { status: 400 });
    }

    const host = required("SMTP_HOST");
    const port = Number(process.env.SMTP_PORT || 465);
    const user = required("SMTP_USER");
    const pass = required("SMTP_PASS");
    const secure = String(process.env.SMTP_SECURE || (port === 465)).toLowerCase() === "true";
    const to = process.env.CONTACT_TO || "ventas@dmaq.mx";
    const from = process.env.MAIL_FROM || user;

    const transporter = nodemailer.createTransport({ host, port, secure, auth: { user, pass } });

    await transporter.sendMail({
      from,
      to,
      replyTo: correo,
      subject: `Solicitud de proyecto — ${empresa || "Nuevo contacto"}`,
      text: [
        `Nombre: ${nombre}`,
        `Empresa: ${empresa || "No indicada"}`,
        `Correo: ${correo}`,
        `Teléfono: ${telefono || "No indicado"}`,
        `Aviso de privacidad aceptado: Sí`,
        `Consentimiento promocional: ${marketing ? "Sí" : "No"}`,
        "",
        "Proyecto o necesidad:",
        proyecto,
      ].join("\n"),
      html: `
        <h2>Solicitud de proyecto — Detoch More</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
        <p><strong>Empresa:</strong> ${escapeHtml(empresa || "No indicada")}</p>
        <p><strong>Correo:</strong> ${escapeHtml(correo)}</p>
        <p><strong>Teléfono:</strong> ${escapeHtml(telefono || "No indicado")}</p>
        <p><strong>Aviso de privacidad aceptado:</strong> Sí</p>
        <p><strong>Consentimiento promocional:</strong> ${marketing ? "Sí" : "No"}</p>
        <hr />
        <p><strong>Proyecto o necesidad:</strong></p>
        <p>${escapeHtml(proyecto).replace(/\n/g, "<br />")}</p>
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("CONTACT_FORM_ERROR", error);
    return Response.json({ message: "No fue posible enviar la solicitud en este momento. Revisa la configuración de correo o escríbenos directamente a ventas@dmaq.mx." }, { status: 500 });
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
