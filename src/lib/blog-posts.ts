
export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: '5-claves-para-reformar-tu-cocina-con-exito',
    title: '5 Claves para reformar tu cocina con éxito',
    date: '2024-05-20',
    excerpt: 'Reformar la cocina es una de las decisiones más importantes para tu hogar. Aquí te dejamos 5 claves para que el proceso sea un éxito y consigas la cocina de tus sueños.',
    imageUrl: 'https://images.unsplash.com/photo-1592506119503-c0b18879bd5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBraXRjaGVufGVufDB8fHx8MTc2NDMwNjI0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    content: `
      <h2>1. Planificación: La base de todo</h2>
      <p>Antes de mover un solo mueble, la planificación es esencial. Define tus necesidades: ¿necesitas más almacenamiento?, ¿una zona para comer?, ¿mejor iluminación? Haz una lista de deseos y establece un presupuesto realista. Esto te ayudará a tomar decisiones informadas y evitará sorpresas desagradables durante la obra.</p>
      
      <h2>2. Distribución: Optimiza el espacio</h2>
      <p>El "triángulo de trabajo" (fregadero, vitrocerámica y frigorífico) es un concepto clásico que sigue funcionando. Piensa en una distribución que te resulte cómoda y funcional para tu día a día. Las cocinas en L, en U o con isla son opciones populares, pero la mejor será la que se adapte a tu espacio y a tu forma de cocinar.</p>
      
      <h2>3. Materiales: Calidad y estilo</h2>
      <p>La elección de materiales marcará la diferencia en durabilidad y estética. Para la encimera, materiales como el cuarzo compacto, el granito o la porcelana son resistentes y fáciles de limpiar. En los muebles, busca acabados que soporten bien la humedad y el uso diario. ¡No te olvides del suelo! Un pavimento vinílico o porcelánico puede ser una gran opción.</p>
      
      <h2>4. Iluminación: Funcional y ambiental</h2>
      <p>Una buena iluminación es clave en la cocina. Combina una luz general potente con luces funcionales bajo los muebles altos para iluminar bien la zona de trabajo. También puedes añadir una lámpara decorativa sobre la mesa o la isla para crear un ambiente más acogedor.</p>

      <h2>5. Confía en profesionales</h2>
      <p>Una reforma es un proyecto complejo. Contar con una empresa de reformas con experiencia como Vestalar te garantiza un resultado profesional, el cumplimiento de los plazos y la tranquilidad de saber que todo está en buenas manos. Nos encargamos de todo, desde el diseño inicial hasta el último detalle.</p>
      <p>¿Listo para empezar? <a href="/#contact">Pide tu presupuesto</a> sin compromiso y hagamos realidad la cocina de tus sueños.</p>
    `,
  },
];
