import type { en } from './en';

export const es = {
  'nav.menu': "Menú",
  'nav.skip': "Saltar al contenido",
  'meta.home.title': 'Simulacro Tech – Consultoría interdisciplinaria en datos e IA',
  'meta.home.description':
  	'Consultoría en datos e IA basada en la ética. Tecnología al servicio de las personas, y no a la inversa.',
  'meta.about.title': 'Sobre mí – Simulacro Tech',
  'meta.about.description':
  	'Consultoría en datos e IA basada en la ética. Tecnología al servicio de las personas, y no a la inversa.',
  'meta.projects.title': 'Proyectos · Simulacro Tech',
  'meta.projects.description':
  	'Trabajos seleccionados en infraestructura de IA, PLN e investigación aplicada.',

  'nav.home': 'Inicio',
  'nav.about': 'Sobre mí',
  'nav.projects': 'Proyectos',
  'nav.contact': 'Contacto',

  'home.hero.title': "Tecnología al servicio de las personas.",
  'home.hero.tagline':
  	"Sistemas de IA, herramientas de investigación y pipelines de datos pensados para quienes los utilizan.",
  'home.hero.cta': 'Contactar',

  'home.services.label': 'Servicios',
  'home.services.heading': 'Lo que construimos',
  'home.services.subheading':
  	'Soluciones interdisciplinarias que combinan profundidad técnica con perspectiva humanística.',
  'home.services.ai.title': 'Soluciones de IA y PLN',
  'home.services.ai.description':
  	'LLMs ajustados, sistemas RAG, embeddings y modelado de temas. Construidos con transparencia y responsabilidad desde el principio.',
  'home.services.data.title': 'Análisis de datos e investigación',
  'home.services.data.description':
  	'Investigación de métodos mixtos que combina profundidad cualitativa con rigor computacional. Minería de datos, visualización y análisis estadístico.',
  'home.services.pipelines.title': 'Pipelines y automatización',
  'home.services.pipelines.description':
  	"Transcripción de audio, lectura de documentos, web scraping y validación. Los pipelines integrados convierten el trabajo manual con datos en un proceso reproducible.",

  'home.why.label': 'Enfoque',
  'home.why.heading': "Cómo trabajamos",
  'home.why.intro':
  	"Nuestro trabajo combina experiencia en psicología clínica, filosofía de la ciencia e ingeniería de software.",
  'home.why.clinical.title': 'Formación clínica',
  'home.why.clinical.description':
  	'Años de práctica psicoterapéutica moldean cómo entendemos el impacto de la tecnología en personas reales.',
  'home.why.philosophy.title': 'Rigor filosófico',
  'home.why.philosophy.description':
  	"Examinamos qué debe lograr un sistema, a quién afecta y cómo se pueden verificar sus resultados.",
  'home.why.technical.title': 'Profundidad técnica',
  'home.why.technical.description':
  	'Desde pipelines de PLN hasta análisis estadístico, el trabajo técnico se basa en metodología académica rigurosa.',

  'home.projects.label': 'Trabajo seleccionado',
  'home.projects.heading': 'Proyectos recientes',
  'home.projects.intro': 'Sistemas en producción, herramientas de investigación, implementaciones integrales.',
  'home.projects.cta': 'Ver todos los proyectos',

  'projects.production.molcajete.tagline':
  	'Pipeline de transcripción y análisis con IA para investigación cualitativa en grupos focales sobre política.',
  'projects.production.molcajete.description':
  	'Pipeline completo de audio a insight que reemplaza transcripción imprecisa y horas de anotaciones por proyecto. Diarización de hablantes, transcripción, clasificación de temas e informes integrados – todo accesible mediante una capa de herramientas que los investigadores realmente usan.',
  'projects.production.molcajete.stat.0': 'horas de audio procesadas',
  'projects.production.molcajete.stat.1': 'tiempo de entrega por proyecto',

  'projects.production.adapta.tagline':
  	'Infraestructura de fine-tuning de LLMs y pipeline de preprocesamiento de datos para análisis político en español mexicano.',
  'projects.production.adapta.description':
  	'LLMs especializados, fruto de un pipeline reproducible de fine-tuning y evaluación. Construido para la comparación empírica de modelos base y prompts.',
  'projects.production.adapta.stat.0': 'métricas de evaluación',
  'projects.production.adapta.stat.1': 'ejecuciones de entrenamiento',

  'projects.production.nopalero.tagline':
  	'Sistema automatizado de selección de participantes para reclutamiento cualitativo.',
  'projects.production.nopalero.description':
  	'Pipeline automatizado de admisión que reemplaza horas de captura manual de datos por proyecto. Combina OCR, detección de fraude y clasificación socioeconómica – para que los analistas se enfoquen en las decisiones, no en el papeleo.',
  'projects.production.nopalero.stat.0': 'verificaciones de validación',
  'projects.production.nopalero.stat.1': 'entrada manual de datos',

  'projects.production.azulejo.tagline':
  	'Convierte notas sueltas en un PowerPoint editable y con la identidad de la marca, apretando un botón.',
  'projects.production.azulejo.description':
  	'La plantilla de la marca se codifica una vez, y cada lámina sale conforme por construcción. El contenido vive en texto plano y las láminas se regeneran a partir de él, versionables y reproducibles como código. El resultado es un .pptx estándar que cualquiera puede editar, sin plataforma de por medio.',
  'projects.production.azulejo.stat.0': 'plantillas de diseño',
  'projects.production.azulejo.stat.1': 'para reconstruir 50 láminas',

  'projects.openSource.judex.tagline':
  	'Scraper y parser en Python para datos de procesos del Supremo Tribunal Federal de Brasil (STF).',
  'projects.openSource.judex.description':
  	'CLI basada en Typer con tres etapas cache-first – recolección, descarga y extracción – con soporte para ejecuciones fuertemente paralelizadas y rotación de proxy, alimentando un warehouse DuckDB. Varios backends de OCR, incluyendo Tesseract auto-alojado en fly.io para OCR de bajo coste.',
  'projects.openSource.judex.stat.0': 'barrido anual de HC',
  'projects.openSource.judex.stat.1': 'rendimiento de PDFs',
  'projects.openSource.judex.stat.2': 'rendimiento de casos',
  'projects.openSource.judex.stat.3': 'backends de OCR',

  'projects.openSource.zelador.tagline':
  	'CLI para que un agente de IA mantenga en orden una biblioteca de Zotero.',
  'projects.openSource.zelador.description':
  	'Verifica etiquetas, metadatos y colecciones; enriquece metadatos con Crossref y arXiv; comprime PDFs. Implementa un ciclo de validación con backups y write-ahead logs – lo que hace seguro dejar que un agente de IA toque la base de datos.',

  'projects.intro.heading': 'Trabajos seleccionados',
  'projects.section.production': 'En producción',
  'projects.section.openSource': 'Código abierto',
  'projects.cta.heading': '¿Tienes un problema que no encaja en una plantilla?',
  'projects.cta.lede': 'La mayoría del trabajo anterior empezó con alguien diciendo exactamente eso.',
  'projects.cta.action': 'Hablemos',

  'home.about.label': 'Sobre mí',
  'home.about.bio':
  	'Fundada por Gustavo Costa, psicólogo de formación, ahora científico de datos. Tras años de práctica clínica, aplica esa misma atención a cómo construimos y desplegamos sistemas de IA.',
  'home.about.cta': 'Leer más',

  'home.why.pullquote.before': 'Construido para ',
  'home.why.pullquote.italic': 'clientes reales',
  'home.why.pullquote.after': ', no para la demo.',

  'home.contact.label': 'Contacto',
  'home.contact.heading': '¿Qué te trae aquí?',
  'home.contact.subheading': '',

  'about.subtitle':
  	'Psicólogo de formación, ahora científico de datos. Aporto la atención clínica al mundo de la IA y la tecnología.',
  'about.bio.p1':
  	'Antes de escribir código, trabajé como psicólogo clínico y psicoanalista en Brasilia, Brasil. Ese trabajo me enseñó a lidiar con la complejidad y a hacer mejores preguntas, en lugar de apresurarme a soluciones inmediatas.',
  'about.bio.p2':
  	'Hoy construyo sistemas de IA y realizo investigación en la intersección entre la tecnología y las humanidades. Esta experiencia interdisciplinaria me mostró cómo la optimización, cuando se aplica con cuidado en contextos humanísticos, puede ayudar a los sistemas a cumplir mejor su propósito.',
  'about.bio.p3':
  	'En Simulacro Tech reúno todo esto a través de una variedad de soluciones técnicas, incluyendo sistemas RAG, investigación de métodos mixtos y estrategia de datos – todas construidas con el mismo cuidado que dedicaba a la práctica clínica.',

  'about.links.heading': 'Enlaces rápidos',
  'about.links.cv': 'CV completo y proyectos',
  'about.links.essays': 'Ensayos sobre IA y cultura',
  'about.links.philosophy': 'Filosofía del psicoanálisis',

  'about.education.heading': 'Educación',
  'about.education.degree1.title': 'Maestría en Artes y Ciencias',
  'about.education.degree2.title': 'Especialista en Psicoanálisis Lacaniano',
  'about.education.degree3.title': 'Licenciatura en Psicología',

  'about.experience.heading': 'Experiencia',
  'about.experience.leadEngineer.title': 'Lead Engineer',
  'about.experience.leadEngineer.details': 'Sistemas LLM & Infraestructura de investigación',
  'about.experience.leadEngineer.dates': '2026',
  'about.experience.psychotherapy.title': 'Psicoterapia',
  'about.experience.psychotherapy.details': 'Socio en la clínica de psicología Espaço Psique',
  'about.experience.psychotherapy.dates': '2020 – 2024',
  'about.experience.writing.title': 'Escritura',
  'about.experience.writing.details':
  	'Ensayos sobre IA y filosofía del psicoanálisis.',
  'about.experience.writing.dates': '2019 – presente',
  'about.experience.research.title': 'Investigación',
  'about.experience.research.details':
  	'Tesis sobre AI slop con métodos mixtos.',
  'about.experience.research.dates': '2025',

  'footer.tagline': 'Consultoría en IA y datos centrada en el ser humano.',
  'footer.manifesto.before': 'Un ',
  'footer.manifesto.italic': 'archivo',
  'footer.manifesto.after': ' de sistemas construidos con el mismo cuidado de la práctica clínica.',
  'footer.contact.heading': 'Contacto',
  'footer.contact.location': 'Londres, UK / Brasilia, BR / CDMX, MX',
  'footer.connect.heading': 'Conecta',
  'footer.copyright': 'Todos los derechos reservados.',
  'footer.build.label': 'última build',

  'form.name.label': 'Nombre',
  'form.name.placeholder': 'Tu nombre',
  'form.email.label': 'Email',
  'form.email.placeholder': 'tu@ejemplo.com',
  'form.message.label': 'Mensaje',
  'form.message.placeholder': 'Di todo lo que se te ocurra, sin censurar...',
  'form.submit': 'Enviar',
  'form.success.title': 'Recibido.',
  'form.success.subtext': 'Pronto vuelvo.',
  'form.success.action': 'Otra sesión',
  'form.error.empty': 'Por favor, completa todos los campos.',
  'form.error.email': 'Por favor, introduce un email válido.',
  'form.error.generic': 'Algo salió mal. Por favor, intenta de nuevo.',
  'form.error.network': 'Error de red. Verifica tu conexión e intenta de nuevo.',

  'banner.suggest': '¿Ver en español?',
  'banner.dismiss': 'Cerrar',
} as const satisfies Record<keyof typeof en, string>;
