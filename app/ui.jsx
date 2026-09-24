import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone, ChevronRight, Instagram, Linkedin, Facebook, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "525558006201";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const nav = [
  ["Inicio", "/"],
  ["Nosotros", "/sobre-nosotros"],
  ["Capacidades", "/capacidades"],
  ["Aplicaciones", "/industrias"],
  ["Proyectos", "/proyectos"],
  ["Calidad", "/calidad"],
  ["Contacto", "/contacto"],
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" aria-label="Detoch More inicio">
          <span className="brand-logo"><img src="/logo-mark.png" alt="" /></span>
          <span><strong>DETOCH MORE</strong><small>INGENIERÍA · MANUFACTURA</small></span>
        </Link>
        <nav className="desktop-nav">
          {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <div className="nav-tools"><Link className="nav-cta" href="/contacto">Cotizar proyecto <ArrowUpRight size={16} /></Link></div>
      </div>
    </header>
  );
}

function SocialLink({ icon: Icon, label, href }) {
  return <a className="social-placeholder" href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon size={16}/><span>{label}</span></a>;
}

export function WhatsAppFloat() {
  return (
    <a className="whatsapp-float" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Contactar a Detoch More por WhatsApp">
      <MessageCircle />
      <span className="whatsapp-float-label">WhatsApp</span>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand"><span className="brand-logo"><img src="/logo-mark.png" alt="" /></span><span><strong>DETOCH MORE</strong><small>INGENIERÍA · MANUFACTURA</small></span></div>
          <p className="muted">Ingeniería y manufactura de precisión para la industria farmacéutica.</p>
          <div className="footer-socials">
            <SocialLink icon={Linkedin} label="LinkedIn" href="https://www.linkedin.com/company/detoch-more/about/?viewAsMember=true" />
            <SocialLink icon={Facebook} label="Facebook" href="https://www.facebook.com/profile.php?id=61593954643520" />
          </div>
        </div>
        <div>
          <p className="footer-title">Explora</p>
          <Link href="/sobre-nosotros">Nosotros</Link><Link href="/capacidades">Capacidades</Link><Link href="/industrias">Aplicaciones</Link><Link href="/proyectos">Proyectos</Link><Link href="/calidad">Calidad</Link>
        </div>
        <div>
          <p className="footer-title">Contacto</p>
          <a href="tel:+525558006201"><Phone size={15}/> +52 55 5800 6201</a>
          <a href="mailto:ventas@dmaq.mx"><Mail size={15}/> ventas@dmaq.mx</a>
          <span><MapPin size={15}/> Iztapalapa, CDMX</span>
          <span><strong className="footer-hours">Horario:</strong> Lun–Vie · 8:00–18:00</span>
          <a className="whatsapp-placeholder" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={15}/> WhatsApp Business</a>
        </div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Detoch More, S.A. de C.V.</span><span className="footer-legal"><Link href="/privacidad">Aviso de privacidad integral</Link><span>Precisión en todo el proceso.</span></span></div>
    </footer>
  );
}

export function SectionIntro({ eyebrow, title, text }) {
  return <div className="section-intro"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export function CTA() {
  return <section className="cta-section"><div className="container cta-inner"><div><span className="eyebrow">¿Tienes un reto de ingeniería?</span><h2>Cuéntanos qué necesitas. <em>Lo llevamos a una solución.</em></h2></div><Link href="/contacto" className="button button-light">Hablar con ingeniería <ArrowUpRight size={18}/></Link></div></section>;
}

export function FeatureLink({ href, number, title, text }) {
  return <Link href={href} className="feature-link"><span className="feature-number">{number}</span><span><strong>{title}</strong><small>{text}</small></span><ChevronRight size={20}/></Link>;
}

export function ImageCard({ src, alt, eyebrow, title, text, href }) {
  const content = <><div className="image-card-media"><img src={src} alt={alt} loading="lazy"/><span className="image-card-index">DET / {eyebrow}</span></div><div className="image-card-body"><span className="eyebrow">{eyebrow}</span><h3>{title}</h3>{text && <p>{text}</p>}</div></>;
  return href ? <Link href={href} className="image-card">{content}</Link> : <article className="image-card">{content}</article>;
}
