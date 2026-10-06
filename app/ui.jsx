import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone, ChevronRight, Linkedin, Facebook, MessageCircle, Menu } from "lucide-react";

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

const clientLogos = [
  { src: "/client-logos/42.png", alt: "Boehringer Ingelheim" },
  { src: "/client-logos/chinoin.webp", alt: "Chinoin" },
  { src: "/client-logos/43.png", alt: "Laboratorios Silanes" },
  { src: "/client-logos/47.png", alt: "Laboratorios Maver" },
  { src: "/client-logos/48.png", alt: "Haleon" },
  { src: "/client-logos/49.png", alt: "Armstrong" },
  { src: "/client-logos/collins.png", alt: "Collins" },
  { src: "/client-logos/46.png", alt: "Selder" },
  { src: "/client-logos/allen.jpg", alt: "Allen" },
  { src: "/client-logos/landsteiner.jpg", alt: "Landsteiner", supplied: true },
  { src: "/client-logos/mondelez.jpg", alt: "Mondelez", supplied: true },
  { src: "/client-logos/loreal.jpg", alt: "L'Oréal", supplied: true },
  { src: "/client-logos/45.png", alt: "Neolpharma" },
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
        <details className="mobile-menu">
          <summary><Menu size={22} aria-hidden="true"/><span>Menú</span></summary>
          <nav aria-label="Navegación móvil">
            {nav.map(([label, href]) => <Link key={href} href={href}>{label}<ArrowUpRight size={15}/></Link>)}
          </nav>
        </details>
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

export function CTA({ compact = false }) {
  return <section className={`cta-section${compact ? " cta-compact" : ""}`}><div className="container cta-inner"><div><span className="eyebrow">¿Tienes un reto de ingeniería?</span><h2>Cuéntanos qué necesitas. <em>Desarrollemos la solución.</em></h2></div><Link href="/contacto" className="button button-light">Hablar con ingeniería <ArrowUpRight size={18}/></Link></div></section>;
}

export function FeatureLink({ href, number, title, text }) {
  return <Link href={href} className="feature-link"><span className="feature-number">{number}</span><span><strong>{title}</strong><small>{text}</small></span><ChevronRight size={20}/></Link>;
}

export function ImageCard({ src, alt, eyebrow, title, text, href }) {
  const content = <><div className="image-card-media"><img src={src} alt={alt} loading="lazy"/><span className="image-card-index">DET / {eyebrow}</span></div><div className="image-card-body"><span className="eyebrow">{eyebrow}</span><h3>{title}</h3>{text && <p>{text}</p>}</div></>;
  return href ? <Link href={href} className="image-card">{content}</Link> : <article className="image-card">{content}</article>;
}

function LogoMarqueeRow({ reverse = false }) {
  const items = [...clientLogos, ...clientLogos];
  return (
    <div className={`logo-marquee ${reverse ? "is-reverse" : ""}`}>
      <div className="logo-marquee-track">
        {items.map((logo, index) => (
          <div className={`logo-chip${logo.supplied ? " logo-chip--supplied" : ""}`} key={`${logo.alt}-${index}`} aria-hidden={index >= clientLogos.length ? true : undefined}>
            <img src={logo.src} alt={index >= clientLogos.length ? "" : logo.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ClientsSection() {
  return (
    <section className="section clients-showcase-section" aria-label="Empresas con las que hemos colaborado">
      <div className="container clients-showcase-head" data-reveal><h2>Experiencia trabajando para la industria farmacéutica y manufacturera.</h2></div>
      <div className="clients-showcase-marquees">
        <LogoMarqueeRow />
      </div>
    </section>
  );
}
