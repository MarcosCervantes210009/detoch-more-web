"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  async function submit(e) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const file = formData.get("archivo");
    if (file && file.size > 3 * 1024 * 1024) {
      setStatus("error");
      setMessage("El archivo debe pesar como máximo 3 MB.");
      return;
    }
    if (!file || !file.size) formData.delete("archivo");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "No fue posible enviar la solicitud.");

      setStatus("success");
      setMessage("Solicitud enviada correctamente. El equipo de Detoch More podrá dar seguimiento por correo.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "No fue posible enviar la solicitud. Intenta nuevamente o escríbenos directamente a ventas@dmaq.mx.");
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-head"><span className="eyebrow">Solicitud</span><h2>Cuéntanos qué necesitas.</h2></div>
      <input className="form-honeypot" tabIndex="-1" autoComplete="off" name="website" aria-hidden="true" />
      <div className="form-row">
        <label>Nombre<input required name="nombre" placeholder="Tu nombre" /></label>
        <label>Empresa<input name="empresa" placeholder="Empresa" /></label>
      </div>
      <div className="form-row">
        <label>Correo<input required type="email" name="correo" placeholder="correo@empresa.com" /></label>
        <label>Teléfono<input name="telefono" placeholder="+52 ..." /></label>
      </div>
      <label>Cuéntanos sobre tu proyecto<textarea required name="proyecto" rows="6" placeholder="Cuéntanos brevemente qué necesitas fabricar, rediseñar o resolver..."></textarea></label>

      <label>Adjuntar archivo (opcional)<input type="file" name="archivo" accept=".jpg,.jpeg,.png,.webp,.pdf,.step,.stp,.igs,.iges,.dwg,.dxf,.zip,.txt"/><span className="attachment-help">Fotografía, PDF, STEP u otra información técnica. Máximo 3 MB.</span></label>

      <div className="form-consents">
        <label className="form-check"><input required type="checkbox" name="aceptaPrivacidad"/><span>He leído y acepto el <Link href="/privacidad" target="_blank">Aviso de Privacidad Integral</Link> para la atención de mi solicitud.</span></label>
        <label className="form-check"><input type="checkbox" name="marketing"/><span>Acepto recibir información comercial, noticias, promociones o novedades de Detoch More. Esta autorización es opcional.</span></label>
      </div>

      <button className="button" type="submit" disabled={status === "sending"}>
        {status === "sending" ? <>Enviando <Loader2 size={18} className="spin" /></> : <>Enviar solicitud <ArrowUpRight size={18}/></>}
      </button>
      {message && <p className={`form-note form-${status}`}>{status === "success" && <CheckCircle2 size={15}/>} {message}</p>}
    </form>
  );
}
