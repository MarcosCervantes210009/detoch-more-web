export default function sitemap() {
  const base = "https://dmaq.mx";
  const routes = ["", "/sobre-nosotros", "/servicios", "/capacidades", "/industrias", "/proyectos", "/calidad", "/contacto",
    "/privacidad"];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
