export const languages = {
	en: 'English',
	pt: 'Português',
	es: 'Español',
} as const;

export const defaultLang = 'en';

export type Lang = keyof typeof languages;

export const ui = {
	en: {
		'meta.home.title': 'Simulacro Tech - Interdisciplinary Data & AI Consultancy',
		'meta.home.description':
			'Data and AI consultancy grounded in ethics. Building technology that serves people, not the other way around.',
		'meta.about.title': 'About - Simulacro Tech',
		'meta.about.description':
			'Data and AI consultancy grounded in ethics. Building technology that serves people, not the other way around.',
		'meta.projects.title': 'Projects · Simulacro Tech',
		'meta.projects.description':
			'Selected work in AI infrastructure, NLP, and applied research.',

		'nav.home': 'Home',
		'nav.about': 'About',
		'nav.projects': 'Projects',
		'nav.contact': 'Contact',

		'home.hero.title.before': 'Technology that serves ',
		'home.hero.title.highlight': 'people',
		'home.hero.tagline':
			'AI and data solutions grounded in ethics. Building systems with transparency, accountability, and human impact at the core.',
		'home.hero.cta': 'Get in Touch',

		'home.services.label': 'Services',
		'home.services.heading': 'What We Build',
		'home.services.subheading':
			'Interdisciplinary solutions that bridge technical depth with humanistic insight.',
		'home.services.ai.title': 'AI & NLP Solutions',
		'home.services.ai.description':
			'RAG systems, embeddings, topic modeling, and fine-tuned LLMs. Built with transparency and accountability from the start.',
		'home.services.data.title': 'Data Analysis & Research',
		'home.services.data.description':
			'Mixed-methods research that pairs qualitative depth with computational rigor. Data mining, visualization, and statistical analysis.',
		'home.services.ethics.title': 'Ethics & Strategy',
		'home.services.ethics.description':
			'AI ethics audits and data strategy consulting. Practical guidance rooted in philosophy and psychology.',

		'home.why.label': 'Approach',
		'home.why.heading': 'Why Work With Us',
		'home.why.intro':
			"A rare blend of clinical psychology, philosophical training, and technical expertise. We bring depth that pure technologists can't match.",
		'home.why.clinical.title': 'Clinical Background',
		'home.why.clinical.description':
			"Years of psychotherapeutic practice shape how we understand technology's impact on real people, not just users in the abstract.",
		'home.why.philosophy.title': 'Philosophical Rigor',
		'home.why.philosophy.description':
			"Ethics isn't an afterthought. Training in philosophy means asking the hard questions before building, not after.",
		'home.why.technical.title': 'Technical Depth',
		'home.why.technical.description':
			'From NLP pipelines to statistical analysis, the technical work is grounded in research-grade methodology.',

		'home.about.label': 'About',
		'home.about.bio':
			'Founded by Gustavo Costa, a psychologist turned data scientist. After years in clinical practice, he now applies that same attentiveness to how we build and deploy AI systems.',
		'home.about.cta': 'Read full bio',

		'home.why.pullquote.before': 'Built for paying ',
		'home.why.pullquote.italic': 'clients',
		'home.why.pullquote.after': ', not for the demo.',

		'home.contact.label': 'Contact',
		'home.contact.heading': "Let's Talk",
		'home.contact.subheading': "Have a project in mind? We'd love to hear about it.",

		'about.label': 'About',
		'about.subtitle':
			'Psychologist turned data scientist. Bringing clinical attentiveness to the world of AI and technology.',
		'about.bio.p1':
			'Before I wrote code, I worked as a clinical psychologist and psychoanalyst in Brasília, Brazil. That work taught me how to navigate complexity and ask better questions, rather than rushing to immediate solutions.',
		'about.bio.p2':
			'Now I build AI systems and conduct research at the intersection of technology and the humanities. This interdisciplinary experience showed me how optimization, when applied thoughtfully in humanistic contexts, can help systems better achieve their purpose.',
		'about.bio.p3':
			'Simulacro Tech is where I bring this together through a diverse range of technical solutions, including RAG systems, mixed-methods research, and data strategy — all built with the same care I brought to clinical practice.',

		'about.links.heading': 'Quick Links',
		'about.links.cv': 'Full CV & Projects',
		'about.links.essays': 'Data Science Essays',
		'about.links.philosophy': 'Philosophy of Psychoanalysis',

		'about.education.heading': 'Education',
		'about.education.degree1.title': 'Master of Arts and Sciences',
		'about.education.degree2.title': 'Specialist in Lacanian Psychoanalysis',
		'about.education.degree3.title': 'Bachelor in Psychology',

		'about.experience.heading': 'Experience',
		'about.experience.psychotherapy.title': 'Psychotherapy',
		'about.experience.psychotherapy.details': 'Partner at Espaço Psique Psychology Clinic',
		'about.experience.writing.title': 'Writing & Research',
		'about.experience.writing.details':
			'Essays on data science, AI, and philosophy of psychoanalysis. Dissertation on AI slop using mixed-methods.',
		'about.experience.technical.title': 'Technical Projects',
		'about.experience.technical.details':
			'RAG systems, NLP applications, and data analysis tools.',

		'footer.tagline': 'Human-centered AI and data consulting.',
		'footer.manifesto.before': 'A working ',
		'footer.manifesto.italic': 'archive',
		'footer.manifesto.after': ' of systems built with the same care once brought to clinical practice.',
		'footer.contact.heading': 'Contact',
		'footer.contact.location': 'London, UK / Brasília, Brazil',
		'footer.connect.heading': 'Connect',
		'footer.copyright': 'All rights reserved.',
		'footer.build.label': 'last build',

		'form.name.label': 'Name',
		'form.name.placeholder': 'Your name',
		'form.email.label': 'Email',
		'form.email.placeholder': 'you@example.com',
		'form.message.label': 'Message',
		'form.message.placeholder': 'Tell us about your project...',
		'form.submit': 'Send Message',
		'form.success.title': 'Thank you!',
		'form.success.subtext': "We'll get back to you soon.",
		'form.success.action': 'Send another message',
		'form.error.empty': 'Please fill in all fields.',
		'form.error.email': 'Please enter a valid email address.',
		'form.error.generic': 'Something went wrong. Please try again.',
		'form.error.network': 'Network error. Please check your connection and try again.',

		'banner.suggest': 'View in English?',
		'banner.dismiss': 'Dismiss',
	},
	pt: {
		'meta.home.title': 'Simulacro Tech — Consultoria interdisciplinar em dados e IA',
		'meta.home.description':
			'Consultoria em dados e IA fundamentada na ética. Construindo tecnologia a serviço das pessoas, e não o contrário.',
		'meta.about.title': 'Sobre — Simulacro Tech',
		'meta.about.description':
			'Consultoria em dados e IA fundamentada na ética. Construindo tecnologia a serviço das pessoas, e não o contrário.',
		'meta.projects.title': 'Projetos · Simulacro Tech',
		'meta.projects.description':
			'Trabalhos selecionados em infraestrutura de IA, PLN e pesquisa aplicada.',

		'nav.home': 'Início',
		'nav.about': 'Sobre',
		'nav.projects': 'Projetos',
		'nav.contact': 'Contato',

		'home.hero.title.before': 'Tecnologia a serviço das ',
		'home.hero.title.highlight': 'pessoas',
		'home.hero.tagline':
			'Soluções de IA e dados fundamentadas na ética. Sistemas construídos com transparência, responsabilidade e impacto humano no centro.',
		'home.hero.cta': 'Entre em contato',

		'home.services.label': 'Serviços',
		'home.services.heading': 'O que construímos',
		'home.services.subheading':
			'Soluções interdisciplinares que unem profundidade técnica e visão humanística.',
		'home.services.ai.title': 'Soluções de IA e PLN',
		'home.services.ai.description':
			'Sistemas RAG, embeddings, modelagem de tópicos e LLMs com fine-tuning. Construídos com transparência e responsabilidade desde o início.',
		'home.services.data.title': 'Análise de dados e pesquisa',
		'home.services.data.description':
			'Pesquisa de métodos mistos que une profundidade qualitativa e rigor computacional. Mineração de dados, visualização e análise estatística.',
		'home.services.ethics.title': 'Ética e estratégia',
		'home.services.ethics.description':
			'Auditorias de ética em IA e consultoria em estratégia de dados. Orientação prática baseada em filosofia e psicologia.',

		'home.why.label': 'Abordagem',
		'home.why.heading': 'Por que trabalhar conosco',
		'home.why.intro':
			'Uma combinação rara de psicologia clínica, formação filosófica e expertise técnica. Trazemos uma profundidade que tecnólogos puros não conseguem oferecer.',
		'home.why.clinical.title': 'Formação clínica',
		'home.why.clinical.description':
			'Anos de prática psicoterapêutica moldam como entendemos o impacto da tecnologia em pessoas reais, não apenas em usuários abstratos.',
		'home.why.philosophy.title': 'Rigor filosófico',
		'home.why.philosophy.description':
			'Ética não é um acessório. Formação em filosofia significa fazer as perguntas difíceis antes de construir, não depois.',
		'home.why.technical.title': 'Profundidade técnica',
		'home.why.technical.description':
			'De pipelines de PLN à análise estatística, o trabalho técnico se baseia em metodologia de pesquisa.',

		'home.about.label': 'Sobre',
		'home.about.bio':
			'Fundada por Gustavo Costa, psicólogo que se tornou cientista de dados. Depois de anos na prática clínica, ele aplica essa mesma atenção à forma como construímos e implantamos sistemas de IA.',
		'home.about.cta': 'Ler bio completa',

		'home.why.pullquote.before': 'Construído para ',
		'home.why.pullquote.italic': 'clientes reais',
		'home.why.pullquote.after': ', não para a demo.',

		'home.contact.label': 'Contato',
		'home.contact.heading': 'Vamos conversar',
		'home.contact.subheading': 'Tem um projeto em mente? Adoraríamos saber mais.',

		'about.label': 'Sobre',
		'about.subtitle':
			'Psicólogo que se tornou cientista de dados. Trazendo atenção clínica para o mundo da IA e tecnologia.',
		'about.bio.p1':
			'Antes de escrever código, trabalhei como psicólogo clínico e psicanalista em Brasília. Esse trabalho me ensinou a navegar pela complexidade e a fazer perguntas melhores, em vez de correr para soluções imediatas.',
		'about.bio.p2':
			'Hoje construo sistemas de IA e faço pesquisa na intersecção entre tecnologia e humanidades. Essa experiência interdisciplinar me mostrou como a otimização, quando aplicada com cuidado em contextos humanísticos, pode ajudar sistemas a cumprirem melhor seu propósito.',
		'about.bio.p3':
			'A Simulacro Tech é onde reúno tudo isso por meio de soluções técnicas diversas, incluindo sistemas RAG, pesquisa de métodos mistos e estratégia de dados — todas construídas com o mesmo cuidado que levava à prática clínica.',

		'about.links.heading': 'Links rápidos',
		'about.links.cv': 'CV completo e projetos',
		'about.links.essays': 'Ensaios sobre ciência de dados',
		'about.links.philosophy': 'Filosofia da psicanálise',

		'about.education.heading': 'Formação',
		'about.education.degree1.title': 'Mestrado em Artes e Ciências',
		'about.education.degree2.title': 'Especialização em Psicanálise Lacaniana',
		'about.education.degree3.title': 'Bacharel em Psicologia',

		'about.experience.heading': 'Experiência',
		'about.experience.psychotherapy.title': 'Psicoterapia',
		'about.experience.psychotherapy.details': 'Sócio na clínica de psicologia Espaço Psique',
		'about.experience.writing.title': 'Escrita e pesquisa',
		'about.experience.writing.details':
			'Ensaios sobre ciência de dados, IA e filosofia da psicanálise. Dissertação sobre AI slop com métodos mistos.',
		'about.experience.technical.title': 'Projetos técnicos',
		'about.experience.technical.details':
			'Sistemas RAG, aplicações de PLN e ferramentas de análise de dados.',

		'footer.tagline': 'Consultoria em IA e dados centrada no humano.',
		'footer.manifesto.before': 'Um ',
		'footer.manifesto.italic': 'arquivo',
		'footer.manifesto.after': ' de sistemas construídos com o mesmo cuidado dedicado à clínica.',
		'footer.contact.heading': 'Contato',
		'footer.contact.location': 'Londres, Reino Unido / Brasília, Brasil',
		'footer.connect.heading': 'Conecte-se',
		'footer.copyright': 'Todos os direitos reservados.',
		'footer.build.label': 'última build',

		'form.name.label': 'Nome',
		'form.name.placeholder': 'Seu nome',
		'form.email.label': 'Email',
		'form.email.placeholder': 'voce@exemplo.com',
		'form.message.label': 'Mensagem',
		'form.message.placeholder': 'Conte-nos sobre seu projeto...',
		'form.submit': 'Enviar mensagem',
		'form.success.title': 'Obrigado!',
		'form.success.subtext': 'Retornaremos em breve.',
		'form.success.action': 'Enviar outra mensagem',
		'form.error.empty': 'Por favor, preencha todos os campos.',
		'form.error.email': 'Por favor, insira um email válido.',
		'form.error.generic': 'Algo deu errado. Por favor, tente novamente.',
		'form.error.network': 'Erro de rede. Verifique sua conexão e tente novamente.',

		'banner.suggest': 'Ver em português?',
		'banner.dismiss': 'Fechar',
	},
	es: {
		'meta.home.title': 'Simulacro Tech — Consultoría interdisciplinaria en datos e IA',
		'meta.home.description':
			'Consultoría en datos e IA basada en la ética. Construyendo tecnología al servicio de las personas, y no al revés.',
		'meta.about.title': 'Sobre mí — Simulacro Tech',
		'meta.about.description':
			'Consultoría en datos e IA basada en la ética. Construyendo tecnología al servicio de las personas, y no al revés.',
		'meta.projects.title': 'Proyectos · Simulacro Tech',
		'meta.projects.description':
			'Trabajos seleccionados en infraestructura de IA, PLN e investigación aplicada.',

		'nav.home': 'Inicio',
		'nav.about': 'Sobre mí',
		'nav.projects': 'Proyectos',
		'nav.contact': 'Contacto',

		'home.hero.title.before': 'Tecnología al servicio de las ',
		'home.hero.title.highlight': 'personas',
		'home.hero.tagline':
			'Soluciones de IA y datos basadas en la ética. Sistemas construidos con transparencia, responsabilidad e impacto humano en el centro.',
		'home.hero.cta': 'Contactar',

		'home.services.label': 'Servicios',
		'home.services.heading': 'Lo que construimos',
		'home.services.subheading':
			'Soluciones interdisciplinarias que combinan profundidad técnica con perspectiva humanística.',
		'home.services.ai.title': 'Soluciones de IA y PLN',
		'home.services.ai.description':
			'Sistemas RAG, embeddings, modelado de temas y LLMs ajustados. Construidos con transparencia y responsabilidad desde el principio.',
		'home.services.data.title': 'Análisis de datos e investigación',
		'home.services.data.description':
			'Investigación de métodos mixtos que combina profundidad cualitativa con rigor computacional. Minería de datos, visualización y análisis estadístico.',
		'home.services.ethics.title': 'Ética y estrategia',
		'home.services.ethics.description':
			'Auditorías de ética en IA y consultoría de estrategia de datos. Orientación práctica basada en filosofía y psicología.',

		'home.why.label': 'Enfoque',
		'home.why.heading': 'Por qué trabajar con nosotros',
		'home.why.intro':
			'Una combinación poco común de psicología clínica, formación filosófica y experiencia técnica. Aportamos una profundidad que los tecnólogos puros no pueden igualar.',
		'home.why.clinical.title': 'Formación clínica',
		'home.why.clinical.description':
			'Años de práctica psicoterapéutica moldean cómo entendemos el impacto de la tecnología en personas reales, no solo en usuarios abstractos.',
		'home.why.philosophy.title': 'Rigor filosófico',
		'home.why.philosophy.description':
			'La ética no es algo accesorio. La formación en filosofía significa hacer las preguntas difíciles antes de construir, no después.',
		'home.why.technical.title': 'Profundidad técnica',
		'home.why.technical.description':
			'Desde pipelines de PLN hasta análisis estadístico, el trabajo técnico se basa en metodología de investigación.',

		'home.about.label': 'Sobre mí',
		'home.about.bio':
			'Fundada por Gustavo Costa, psicólogo convertido en científico de datos. Tras años de práctica clínica, él aplica esa misma atención a cómo construimos y desplegamos sistemas de IA.',
		'home.about.cta': 'Leer biografía completa',

		'home.why.pullquote.before': 'Construido para ',
		'home.why.pullquote.italic': 'clientes reales',
		'home.why.pullquote.after': ', no para la demo.',

		'home.contact.label': 'Contacto',
		'home.contact.heading': 'Hablemos',
		'home.contact.subheading': '¿Tienes un proyecto en mente? Nos encantaría saber más.',

		'about.label': 'Sobre mí',
		'about.subtitle':
			'Psicólogo convertido en científico de datos. Llevando la atención clínica al mundo de la IA y la tecnología.',
		'about.bio.p1':
			'Antes de escribir código, trabajé como psicólogo clínico y psicoanalista en Brasilia, Brasil. Ese trabajo me enseñó a navegar la complejidad y a hacer mejores preguntas, en lugar de apresurarme a soluciones inmediatas.',
		'about.bio.p2':
			'Hoy construyo sistemas de IA y realizo investigación en la intersección entre la tecnología y las humanidades. Esta experiencia interdisciplinaria me mostró cómo la optimización, cuando se aplica con cuidado en contextos humanísticos, puede ayudar a los sistemas a cumplir mejor su propósito.',
		'about.bio.p3':
			'Simulacro Tech es donde uno todo esto a través de una variedad de soluciones técnicas, incluyendo sistemas RAG, investigación de métodos mixtos y estrategia de datos — todas construidas con el mismo cuidado que llevaba a la práctica clínica.',

		'about.links.heading': 'Enlaces rápidos',
		'about.links.cv': 'CV completo y proyectos',
		'about.links.essays': 'Ensayos sobre ciencia de datos',
		'about.links.philosophy': 'Filosofía del psicoanálisis',

		'about.education.heading': 'Educación',
		'about.education.degree1.title': 'Maestría en Artes y Ciencias',
		'about.education.degree2.title': 'Especialista en Psicoanálisis Lacaniano',
		'about.education.degree3.title': 'Licenciatura en Psicología',

		'about.experience.heading': 'Experiencia',
		'about.experience.psychotherapy.title': 'Psicoterapia',
		'about.experience.psychotherapy.details': 'Socio en la clínica de psicología Espaço Psique',
		'about.experience.writing.title': 'Escritura e investigación',
		'about.experience.writing.details':
			'Ensayos sobre ciencia de datos, IA y filosofía del psicoanálisis. Tesis sobre AI slop con métodos mixtos.',
		'about.experience.technical.title': 'Proyectos técnicos',
		'about.experience.technical.details':
			'Sistemas RAG, aplicaciones de PLN y herramientas de análisis de datos.',

		'footer.tagline': 'Consultoría en IA y datos centrada en el ser humano.',
		'footer.manifesto.before': 'Un ',
		'footer.manifesto.italic': 'archivo',
		'footer.manifesto.after': ' de sistemas construidos con el mismo cuidado de la práctica clínica.',
		'footer.contact.heading': 'Contacto',
		'footer.contact.location': 'Londres, Reino Unido / Brasilia, Brasil',
		'footer.connect.heading': 'Conecta',
		'footer.copyright': 'Todos los derechos reservados.',
		'footer.build.label': 'última build',

		'form.name.label': 'Nombre',
		'form.name.placeholder': 'Tu nombre',
		'form.email.label': 'Email',
		'form.email.placeholder': 'tu@ejemplo.com',
		'form.message.label': 'Mensaje',
		'form.message.placeholder': 'Cuéntanos sobre tu proyecto...',
		'form.submit': 'Enviar mensaje',
		'form.success.title': '¡Gracias!',
		'form.success.subtext': 'Te responderemos pronto.',
		'form.success.action': 'Enviar otro mensaje',
		'form.error.empty': 'Por favor, completa todos los campos.',
		'form.error.email': 'Por favor, introduce un email válido.',
		'form.error.generic': 'Algo salió mal. Por favor, intenta de nuevo.',
		'form.error.network': 'Error de red. Verifica tu conexión e intenta de nuevo.',

		'banner.suggest': '¿Ver en español?',
		'banner.dismiss': 'Cerrar',
	},
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)['en'];
