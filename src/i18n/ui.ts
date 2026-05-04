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

		'home.hero.line1': 'Technology that serves',
		'home.hero.line2.before': '',
		'home.hero.line2.highlight': 'people',
		'home.hero.line2.after': '.',
		'home.hero.tagline':
			'AI and data solutions grounded in ethics. Building systems with transparency, accountability, and human impact at the core.',
		'home.hero.cta': 'Get in Touch',

		'home.services.label': 'Services',
		'home.services.heading': 'What We Build',
		'home.services.subheading':
			'Interdisciplinary solutions that bridge technical depth with humanistic insight.',
		'home.services.ai.title': 'AI & NLP Solutions',
		'home.services.ai.description':
			'Fine-tuned LLMs, RAG systems, embeddings, and topic modeling. Built with transparency and accountability from the start.',
		'home.services.data.title': 'Data Analysis & Research',
		'home.services.data.description':
			'Mixed-methods research that pairs qualitative depth with computational rigor. Data mining, visualization, and statistical analysis.',
		'home.services.pipelines.title': 'Pipelines & Automation',
		'home.services.pipelines.description':
			'Replacing manual data work with end-to-end pipelines — audio transcription, document parsing, web scraping, validation. Operators spend their time on judgement, not data entry.',

		'home.why.label': 'Approach',
		'home.why.heading': 'Why Work With Us',
		'home.why.intro':
			"A rare blend of clinical psychology, philosophical training, and technical expertise. We bring depth that pure technologists can't match.",
		'home.why.clinical.title': 'Clinical Background',
		'home.why.clinical.description':
			"Years of psychotherapeutic practice shape how we understand technology's impact on real people.",
		'home.why.philosophy.title': 'Philosophical Rigor',
		'home.why.philosophy.description':
			"Ethics isn't an afterthought. Training in philosophy means asking the hard questions before building, not after.",
		'home.why.technical.title': 'Technical Depth',
		'home.why.technical.description':
			'From NLP pipelines to statistical analysis, the technical work is grounded in research-grade methodology.',

		'home.projects.label': 'Selected work',
		'home.projects.heading': 'Recent projects',
		'home.projects.intro': 'Production systems, research tools, end-to-end builds.',
		'home.projects.cta': 'Browse all projects',

		'projects.production.molcajete.tagline':
			'AI-powered transcription and analysis pipeline for political focus group research in Mexican Spanish.',
		'projects.production.molcajete.description':
			'A full audio-to-insight pipeline replacing error-prone transcription and weeks of manual coding. Speaker diarization, transcription, theme classification, and integrated reporting — all surfaced through a tooling layer that researchers actually use.',
		'projects.production.molcajete.stat.0': 'hours of audio processed',
		'projects.production.molcajete.stat.1': 'turnaround per project',

		'projects.production.adapta.tagline':
			'Data preprocessing pipeline and LLM fine-tuning infrastructure for Mexican Spanish political analysis.',
		'projects.production.adapta.description':
			'Specialized LLMs, produced by a reproducible fine-tuning and evaluation pipeline. Built for empirical comparison of base models and prompts.',
		'projects.production.adapta.stat.0': 'evaluation metrics',
		'projects.production.adapta.stat.1': 'training runs',

		'projects.production.nopalero.tagline':
			'Automated participant screening system for qualitative recruitment.',
		'projects.production.nopalero.description':
			'Automated intake pipeline that replaces hours of manual data entry per project. Combines OCR, fraud detection, and socioeconomic classification — so analysts focus on the decisions, not the paperwork.',
		'projects.production.nopalero.stat.0': 'validation checks',
		'projects.production.nopalero.stat.1': 'manual data entry',

		'projects.openSource.judex.summary':
			'Streamlined Python library for scraping case data from the Brazilian Supreme Court (STF).',

		'projects.intro.heading': 'Selected work',
		'projects.section.production': 'In production',
		'projects.section.openSource': 'Open source',
		'projects.cta.heading': "Have a problem that doesn't fit a template?",
		'projects.cta.lede': 'Most of the work above started as someone saying exactly that.',
		'projects.cta.action': 'Start a conversation',

		'home.about.label': 'About',
		'home.about.bio':
			'Founded by Gustavo Costa, a psychologist turned data scientist. After years in clinical practice, he now applies that same attentiveness to how we build and deploy AI systems.',
		'home.about.cta': 'Read more',

		'home.why.pullquote.before': 'Built for paying ',
		'home.why.pullquote.italic': 'clients',
		'home.why.pullquote.after': ', not for the demo.',

		'home.contact.label': 'Contact',
		'home.contact.heading': 'What brings you here?',
		'home.contact.subheading': '',

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
		'about.links.essays': 'Essays on AI & Culture',
		'about.links.philosophy': 'Philosophy of Psychoanalysis',

		'about.education.heading': 'Education',
		'about.education.degree1.title': 'Master of Arts and Sciences',
		'about.education.degree2.title': 'Specialist in Lacanian Psychoanalysis',
		'about.education.degree3.title': 'Bachelor in Psychology',

		'about.experience.heading': 'Experience',
		'about.experience.leadEngineer.title': 'Lead Engineer',
		'about.experience.leadEngineer.details': 'LLM Systems & Research Infrastructure',
		'about.experience.leadEngineer.dates': '2026',
		'about.experience.psychotherapy.title': 'Psychotherapy',
		'about.experience.psychotherapy.details': 'Partner at Espaço Psique Psychology Clinic',
		'about.experience.psychotherapy.dates': '2020 – 2024',
		'about.experience.writing.title': 'Writing',
		'about.experience.writing.details':
			'Essays on AI and philosophy of psychoanalysis.',
		'about.experience.writing.dates': '2019 – present',
		'about.experience.research.title': 'Research',
		'about.experience.research.details':
			'Dissertation on AI slop using mixed-methods.',
		'about.experience.research.dates': '2025',

		'footer.tagline': 'Human-centered AI and data consulting.',
		'footer.manifesto.before': 'A working ',
		'footer.manifesto.italic': 'archive',
		'footer.manifesto.after': ' of systems built with the same care once brought to clinical practice.',
		'footer.contact.heading': 'Contact',
		'footer.contact.location': 'London, UK / Brasília, BR / CDMX, MX',
		'footer.connect.heading': 'Connect',
		'footer.copyright': 'All rights reserved.',
		'footer.build.label': 'last build',

		'form.name.label': 'Name',
		'form.name.placeholder': 'Your name',
		'form.email.label': 'Email',
		'form.email.placeholder': 'you@example.com',
		'form.message.label': 'Message',
		'form.message.placeholder': 'Say everything that comes to mind, without censoring...',
		'form.submit': 'Send',
		'form.success.title': 'Heard.',
		'form.success.subtext': "I'll be back in touch soon.",
		'form.success.action': 'Another session',
		'form.error.empty': 'Please fill in all fields.',
		'form.error.email': 'Please enter a valid email address.',
		'form.error.generic': 'Something went wrong. Please try again.',
		'form.error.network': 'Network error. Please check your connection and try again.',

		'banner.suggest': 'View in English?',
		'banner.dismiss': 'Dismiss',

		'eyebrow.position': 'A position',
		'eyebrow.work': "Work I've shipped",
		'eyebrow.approach': 'An approach',
		'eyebrow.elsewhere': 'About me',
		'eyebrow.note': 'A note',
		'eyebrow.next': 'Next',

		'projects.h2.production': 'Built. Running. Used.',
		'projects.h2.openSource': 'Tools, left in public.',

		'form.error.label': 'Error',
	},
	pt: {
		'meta.home.title': 'Simulacro Tech — Consultoria interdisciplinar em dados e IA',
		'meta.home.description':
			'Consultoria em dados e IA fundamentada na ética. Tecnologia construída a serviço das pessoas, e não o contrário.',
		'meta.about.title': 'Sobre — Simulacro Tech',
		'meta.about.description':
			'Consultoria em dados e IA fundamentada na ética. Tecnologia construída a serviço das pessoas, e não o contrário.',
		'meta.projects.title': 'Projetos · Simulacro Tech',
		'meta.projects.description':
			'Trabalhos selecionados em infraestrutura de IA, PLN e pesquisa aplicada.',

		'nav.home': 'Início',
		'nav.about': 'Sobre',
		'nav.projects': 'Projetos',
		'nav.contact': 'Contato',

		'home.hero.line1': 'Tecnologia',
		'home.hero.line2.before': 'a serviço das ',
		'home.hero.line2.highlight': 'pessoas',
		'home.hero.line2.after': '.',
		'home.hero.tagline':
			'Soluções éticas de IA e dados. Construímos sistemas com cuidado, transparência e responsabilidade.',
		'home.hero.cta': 'Fale conosco',

		'home.services.label': 'Serviços',
		'home.services.heading': 'O que construímos',
		'home.services.subheading':
			'Soluções interdisciplinares que combinam profundidade técnica com olhar humanístico.',
		'home.services.ai.title': 'Soluções de IA e PLN',
		'home.services.ai.description':
			'LLMs com fine-tuning, sistemas RAG, embeddings e modelagem de tópicos. Construídos com transparência e responsabilidade desde o início.',
		'home.services.data.title': 'Análise de dados e pesquisa',
		'home.services.data.description':
			'Pesquisa de métodos mistos que une profundidade qualitativa e rigor computacional. Mineração de dados, visualização e análise estatística.',
		'home.services.pipelines.title': 'Pipelines e automação',
		'home.services.pipelines.description':
			'Substituindo o copia-e-cola por pipelines automáticas — transcrição de áudio, leitura de documentos, web scraping, validação. As equipes gastam o tempo decidindo, não digitando.',

		'home.why.label': 'Abordagem',
		'home.why.heading': 'Por que trabalhar conosco',
		'home.why.intro':
			'Uma combinação rara de psicologia clínica, formação filosófica e expertise técnica. Trazemos uma profundidade que quem só faz tecnologia não consegue alcançar.',
		'home.why.clinical.title': 'Formação clínica',
		'home.why.clinical.description':
			'Anos de prática psicoterapêutica moldam como entendemos o impacto da tecnologia em pessoas de carne e osso.',
		'home.why.philosophy.title': 'Rigor filosófico',
		'home.why.philosophy.description':
			'Ética não é um detalhe posterior. Filosofia é sobre fazer perguntas difíceis antes de construir.',
		'home.why.technical.title': 'Profundidade técnica',
		'home.why.technical.description':
			'De pipelines de PLN à análise estatística — trabalho técnico com rigor acadêmico.',

		'home.projects.label': 'Trabalho selecionado',
		'home.projects.heading': 'Projetos recentes',
		'home.projects.intro':
			'Sistemas em produção, ferramentas de pesquisa, implementações ponta a ponta.',
		'home.projects.cta': 'Ver todos os projetos',

		'projects.production.molcajete.tagline':
			'Pipeline de transcrição e análise com IA para pesquisa política qualitativa.',
		'projects.production.molcajete.description':
			'Pipeline completo, do áudio bruto ao insight final, no lugar de transcrição cheia de erros e horas de anotação por projeto. Diarização de falantes, transcrição, classificação de temas e relatórios integrados — tudo numa camada de ferramentas que pesquisadores realmente usam.',
		'projects.production.molcajete.stat.0': 'horas de áudio processadas',
		'projects.production.molcajete.stat.1': 'tempo de entrega por projeto',

		'projects.production.adapta.tagline':
			'Pipeline de pré-processamento de dados e infraestrutura de fine-tuning de LLMs para análise política em espanhol mexicano.',
		'projects.production.adapta.description':
			'Modelos LLM especializados, fruto de um pipeline reprodutível de fine-tuning e avaliação. Permite a comparação empírica de modelos base e prompts.',
		'projects.production.adapta.stat.0': 'métricas de avaliação',
		'projects.production.adapta.stat.1': 'execuções de treino',

		'projects.production.nopalero.tagline':
			'Sistema automatizado de triagem de participantes para recrutamento qualitativo.',
		'projects.production.nopalero.description':
			'Pipeline automatizado de triagem que substitui horas de digitação manual por projeto. Combina OCR, detecção de fraude e classificação socioeconômica — para que os analistas foquem nas decisões, não no trabalho burocrático.',
		'projects.production.nopalero.stat.0': 'verificações de validação',
		'projects.production.nopalero.stat.1': 'entrada manual de dados',

		'projects.openSource.judex.tagline':
			'Scraper de processos do Supremo Tribunal Federal (STF).',
		'projects.openSource.judex.description':
			'CLI em Python baseada em Typer, com três etapas cache-first — coleta, download e extração. Suporta execuções massivamente paralelas com rotação de proxy e alimenta um warehouse DuckDB. Vários backends de OCR, incluindo Tesseract auto-hospedado no fly.io para inferência de baixo custo.',
		'projects.openSource.judex.stat.0': 'varredura anual de HC',
		'projects.openSource.judex.stat.1': 'vazão de PDFs',
		'projects.openSource.judex.stat.2': 'vazão de processos',
		'projects.openSource.judex.stat.3': 'backends de OCR',

		'projects.intro.heading': 'Trabalhos selecionados',
		'projects.section.production': 'Em produção',
		'projects.section.openSource': 'Código aberto',
		'projects.cta.heading': 'Tem um problema que não entra numa caixinha?',
		'projects.cta.lede': 'Os projetos acima começaram com alguém dizendo isso.',
		'projects.cta.action': 'Conte mais',

		'home.about.label': 'Sobre',
		'home.about.bio':
			'Fundada por Gustavo Costa, psicólogo de formação, hoje cientista de dados. Depois de anos de prática clínica, traz a mesma escuta e cuidado na construção de sistemas de IA.',
		'home.about.cta': 'Ler mais',

		'home.why.pullquote.before': 'Construído para ',
		'home.why.pullquote.italic': 'clientes reais',
		'home.why.pullquote.after': ', não para a demo.',

		'home.contact.label': 'Contato',
		'home.contact.heading': 'O que te traz aqui?',
		'home.contact.subheading': '',

		'about.label': 'Sobre',
		'about.subtitle':
			'Psicólogo de formação, hoje cientista de dados. A mesma escuta clínica, agora aplicada à IA e à tecnologia.',
		'about.bio.p1':
			'Antes de escrever código, trabalhei como psicólogo clínico e psicanalista em Brasília. Esse trabalho me ensinou a sustentar a complexidade e formular perguntas melhores, em vez de pular para soluções imediatas.',
		'about.bio.p2':
			'Hoje construo sistemas de IA e faço pesquisa na interseção entre tecnologia e humanidades. A experiência interdisciplinar me mostrou: a otimização, aplicada com cuidado em contextos humanísticos, ajuda sistemas a cumprir melhor seu propósito.',
		'about.bio.p3':
			'Na Simulacro Tech, junto tudo isso em soluções técnicas variadas — sistemas RAG, pesquisa de métodos mistos, estratégia de dados — todas construídas com a mesma atenção da prática clínica.',

		'about.links.heading': 'Links rápidos',
		'about.links.cv': 'Currículo e portfólio',
		'about.links.essays': 'Ensaios sobre IA e cultura',
		'about.links.philosophy': 'Filosofia da psicanálise',

		'about.education.heading': 'Formação',
		'about.education.degree1.title': 'Mestrado em Artes e Ciências',
		'about.education.degree2.title': 'Especialização em Psicanálise Lacaniana',
		'about.education.degree3.title': 'Bacharel em Psicologia',

		'about.experience.heading': 'Experiência',
		'about.experience.leadEngineer.title': 'Lead Engineer',
		'about.experience.leadEngineer.details': 'Sistemas LLM & Infraestrutura de pesquisa',
		'about.experience.leadEngineer.dates': '2026',
		'about.experience.psychotherapy.title': 'Psicoterapia',
		'about.experience.psychotherapy.details': 'Sócio na clínica de psicologia Espaço Psique',
		'about.experience.psychotherapy.dates': '2020 – 2024',
		'about.experience.writing.title': 'Escrita',
		'about.experience.writing.details':
			'Ensaios sobre IA e filosofia da psicanálise.',
		'about.experience.writing.dates': '2019 – hoje',
		'about.experience.research.title': 'Pesquisa',
		'about.experience.research.details':
			'Dissertação sobre AI slop com métodos qualitativos e quantitativos.',
		'about.experience.research.dates': '2025',

		'footer.tagline': 'Consultoria humana em IA e dados.',
		'footer.manifesto.before': 'Um ',
		'footer.manifesto.italic': 'arquivo',
		'footer.manifesto.after': ' de sistemas construídos com o mesmo cuidado dedicado à clínica.',
		'footer.contact.heading': 'Contato',
		'footer.contact.location': 'Londres, UK / Brasília, BR / CDMX, MX',
		'footer.connect.heading': 'Conecte-se',
		'footer.copyright': 'Todos os direitos reservados.',
		'footer.build.label': 'última build',

		'form.name.label': 'Nome',
		'form.name.placeholder': 'Seu nome',
		'form.email.label': 'Email',
		'form.email.placeholder': 'voce@exemplo.com',
		'form.message.label': 'Mensagem',
		'form.message.placeholder': 'Diga tudo o que lhe vier à mente, sem censura...',
		'form.submit': 'Enviar',
		'form.success.title': 'Recebido.',
		'form.success.subtext': 'Em breve, retorno.',
		'form.success.action': 'Outra sessão',
		'form.error.empty': 'Por favor, preencha todos os campos.',
		'form.error.email': 'Por favor, insira um email válido.',
		'form.error.generic': 'Algo deu errado. Por favor, tente novamente.',
		'form.error.network': 'Erro de rede. Verifique sua conexão e tente novamente.',

		'banner.suggest': 'Ver em português?',
		'banner.dismiss': 'Fechar',

		'eyebrow.position': 'Uma posição',
		'eyebrow.work': 'Trabalhos que entreguei',
		'eyebrow.approach': 'Um método',
		'eyebrow.elsewhere': 'Sobre mim',
		'eyebrow.note': 'Uma nota',
		'eyebrow.next': 'Próximo',

		'projects.h2.production': 'Construído. Em produção. Em uso.',
		'projects.h2.openSource': 'Ferramentas, deixadas em público.',

		'form.error.label': 'Erro',
	},
	es: {
		'meta.home.title': 'Simulacro Tech — Consultoría interdisciplinaria en datos e IA',
		'meta.home.description':
			'Consultoría en datos e IA basada en la ética. Tecnología al servicio de las personas, y no a la inversa.',
		'meta.about.title': 'Sobre mí — Simulacro Tech',
		'meta.about.description':
			'Consultoría en datos e IA basada en la ética. Tecnología al servicio de las personas, y no a la inversa.',
		'meta.projects.title': 'Proyectos · Simulacro Tech',
		'meta.projects.description':
			'Trabajos seleccionados en infraestructura de IA, PLN e investigación aplicada.',

		'nav.home': 'Inicio',
		'nav.about': 'Sobre mí',
		'nav.projects': 'Proyectos',
		'nav.contact': 'Contacto',

		'home.hero.line1': 'Tecnología',
		'home.hero.line2.before': 'al servicio de las ',
		'home.hero.line2.highlight': 'personas',
		'home.hero.line2.after': '.',
		'home.hero.tagline':
			'Soluciones de IA y datos basadas en la ética. Sistemas construidos con transparencia, responsabilidad y centrados en el impacto humano.',
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
			'Reemplazando el trabajo manual de datos con pipelines de extremo a extremo — transcripción de audio, parsing de documentos, web scraping, validación. Los equipos invierten su tiempo en juicio, no en captura de datos.',

		'home.why.label': 'Enfoque',
		'home.why.heading': 'Por qué trabajar con nosotros',
		'home.why.intro':
			'Una combinación poco común de psicología clínica, formación filosófica y experiencia técnica. Aportamos una profundidad que los perfiles puramente técnicos no pueden igualar.',
		'home.why.clinical.title': 'Formación clínica',
		'home.why.clinical.description':
			'Años de práctica psicoterapéutica moldean cómo entendemos el impacto de la tecnología en personas reales.',
		'home.why.philosophy.title': 'Rigor filosófico',
		'home.why.philosophy.description':
			'La ética no es una ocurrencia tardía. La formación en filosofía significa hacer las preguntas difíciles antes de construir, no después.',
		'home.why.technical.title': 'Profundidad técnica',
		'home.why.technical.description':
			'Desde pipelines de PLN hasta análisis estadístico, el trabajo técnico se basa en metodología de investigación.',

		'home.projects.label': 'Trabajo seleccionado',
		'home.projects.heading': 'Proyectos recientes',
		'home.projects.intro': 'Sistemas en producción, herramientas de investigación, implementaciones integrales.',
		'home.projects.cta': 'Ver todos los proyectos',

		'projects.production.molcajete.tagline':
			'Pipeline de transcripción y análisis con IA para investigación cualitativa en grupos focales de política en español mexicano.',
		'projects.production.molcajete.description':
			'Pipeline completo de audio a insight que reemplaza transcripción imprecisa y semanas de codificación manual. Diarización de hablantes, transcripción, clasificación de temas, e informes integrados — todo expuesto a través de una capa de herramientas que los investigadores realmente usan.',
		'projects.production.molcajete.stat.0': 'horas de audio procesadas',
		'projects.production.molcajete.stat.1': 'tiempo de entrega por proyecto',

		'projects.production.adapta.tagline':
			'Pipeline de preprocesamiento de datos e infraestructura de fine-tuning de LLMs para análisis político en español mexicano.',
		'projects.production.adapta.description':
			'LLMs especializados, fruto de un pipeline reproducible de fine-tuning y evaluación. Construido para la comparación empírica de modelos base y prompts.',
		'projects.production.adapta.stat.0': 'métricas de evaluación',
		'projects.production.adapta.stat.1': 'ejecuciones de entrenamiento',

		'projects.production.nopalero.tagline':
			'Sistema automatizado de selección de participantes para reclutamiento cualitativo.',
		'projects.production.nopalero.description':
			'Pipeline automatizado de admisión que reemplaza horas de captura manual de datos por proyecto. Combina OCR, detección de fraude y clasificación socioeconómica — para que los analistas se enfoquen en las decisiones, no en el papeleo.',
		'projects.production.nopalero.stat.0': 'verificaciones de validación',
		'projects.production.nopalero.stat.1': 'entrada manual de datos',

		'projects.openSource.judex.summary':
			'Biblioteca Python reducida para extraer datos de casos del Supremo Tribunal Federal de Brasil (STF).',

		'projects.intro.heading': 'Trabajos seleccionados',
		'projects.section.production': 'En producción',
		'projects.section.openSource': 'Código abierto',
		'projects.cta.heading': '¿Tienes un problema que no encaja en una plantilla?',
		'projects.cta.lede': 'La mayoría del trabajo de arriba empezó con alguien diciendo exactamente eso.',
		'projects.cta.action': 'Iniciar una conversación',

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

		'about.label': 'Sobre mí',
		'about.subtitle':
			'Psicólogo de formación, ahora científico de datos. Aporto la atención clínica al mundo de la IA y la tecnología.',
		'about.bio.p1':
			'Antes de escribir código, trabajé como psicólogo clínico y psicoanalista en Brasilia, Brasil. Ese trabajo me enseñó a lidiar con la complejidad y a hacer mejores preguntas, en lugar de apresurarme a soluciones inmediatas.',
		'about.bio.p2':
			'Hoy construyo sistemas de IA y realizo investigación en la intersección entre la tecnología y las humanidades. Esta experiencia interdisciplinaria me mostró cómo la optimización, cuando se aplica con cuidado en contextos humanísticos, puede ayudar a los sistemas a cumplir mejor su propósito.',
		'about.bio.p3':
			'En Simulacro Tech reúno todo esto a través de una variedad de soluciones técnicas, incluyendo sistemas RAG, investigación de métodos mixtos y estrategia de datos — todas construidas con el mismo cuidado que llevaba a la práctica clínica.',

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

		'eyebrow.position': 'Una posición',
		'eyebrow.work': 'Trabajos que he entregado',
		'eyebrow.approach': 'Un método',
		'eyebrow.elsewhere': 'Sobre mí',
		'eyebrow.note': 'Una nota',
		'eyebrow.next': 'Siguiente',

		'projects.h2.production': 'Construido. En producción. En uso.',
		'projects.h2.openSource': 'Herramientas, dejadas en público.',

		'form.error.label': 'Error',
	},
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)['en'];
