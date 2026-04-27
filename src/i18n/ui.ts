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
		'footer.contact.heading': 'Contact',
		'footer.contact.location': 'London, UK / Brasília, Brazil',
		'footer.connect.heading': 'Connect',
		'footer.copyright': 'All rights reserved.',

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

		'projects.manifest.path': 'simulacro.tech / projects',
		'projects.manifest.lastUpdated': 'last updated · 2026',
		'projects.manifest.index': 'Index 001 — Selected Work',
		'projects.manifest.title.before': 'A working ',
		'projects.manifest.title.highlight': 'archive',
		'projects.manifest.title.after': ' of systems built for real teams.',
		'projects.manifest.lede':
			'Production AI infrastructure, open-source tools, and research at the intersection of NLP, ethics, and the humanities. Eight entries, grouped by purpose.',
		'projects.stats.production': 'Production systems',
		'projects.stats.openSource': 'Open source',
		'projects.stats.research': 'Research outputs',
		'projects.jump.production': '→ /production',
		'projects.jump.openSource': '→ /open-source',
		'projects.jump.research': '→ /research',

		'projects.production.eyebrow': '§ 01 — Production Systems',
		'projects.production.heading': 'Built for paying clients.',
		'projects.production.note':
			'Internal tools. Source private; metrics shared with permission.',
		'projects.production.meta.client': 'Client',
		'projects.production.meta.year': 'Year',
		'projects.production.meta.role': 'Role',
		'projects.production.role': 'Lead Engineer',

		'projects.production.molcajete.tagline':
			'AI-powered transcription and analysis pipeline for political focus group research in Mexican Spanish.',
		'projects.production.molcajete.description':
			'A full audio-to-insight pipeline replacing weeks of manual transcription and coding. Speaker diarization, transcription, theme/subtheme classification, and integrated reporting — all surfaced through a tooling layer that researchers actually use.',
		'projects.production.molcajete.stat.0': 'hours of audio processed',
		'projects.production.molcajete.stat.1': 'Mexican states covered',
		'projects.production.molcajete.stat.2': 'turnaround per project',

		'projects.production.adapta.tagline':
			'Seven-stage data pipeline and LLM fine-tuning infrastructure for Mexican Spanish political analysis.',
		'projects.production.adapta.description':
			'QLoRA fine-tuning workflow with reproducible training, evaluation, and registry. Built for empirical comparison of base models, prompts, and adapters across a curated benchmark of domain-specific tasks.',
		'projects.production.adapta.stat.0': 'evaluation metrics',
		'projects.production.adapta.stat.1': 'training runs',
		'projects.production.adapta.stat.2': 'GPU compute logged',
		'projects.production.adapta.stat.3': 'empirical findings',

		'projects.production.nopalero.tagline':
			'Automated participant screening system for qualitative recruitment.',
		'projects.production.nopalero.description':
			'Replaces hours of manual data entry per project with a validation engine that combines OCR, fraud detection, and socioeconomic classification. Designed so analysts spend their time on judgement, not transcription.',
		'projects.production.nopalero.stat.0': 'validation checks',
		'projects.production.nopalero.stat.1': 'document parsing',
		'projects.production.nopalero.stat.2': 'manual data entry',

		'projects.openSource.eyebrow': '§ 02 — Open Source',
		'projects.openSource.heading': 'Tools left in public.',
		'projects.openSource.intersect.summary':
			'Job board that uses NLP — embeddings, reranking, classical ML — to surface roles that actually match. Deployed as a Streamlit app.',
		'projects.openSource.judexMini.summary':
			'Python library for scraping case data from the Brazilian Supreme Court (STF). The trimmed-down successor to a larger legal-data toolkit.',
		'projects.openSource.crucible.summary':
			'Bulk evaluation harness for LLM apps — test models and prompts side-by-side and rank what works before shipping.',

		'projects.research.eyebrow': '§ 03 — Research & Honors',
		'projects.research.heading': 'Written, defended, awarded.',
		'projects.research.slop.title': 'What is AI slop?',
		'projects.research.slop.venue': 'MASc Dissertation · London Interdisciplinary School',
		'projects.research.slop.grade': 'Distinction',
		'projects.research.slop.summary':
			'Mixed-methods NLP investigation of AI-generated content. Combines topic modelling, sentiment analysis, and LLM-based classification to characterise a phenomenon the literature had not yet defined.',
		'projects.research.stereotype.title': 'Stereotype Detection in LLMs via Sparse Autoencoders',
		'projects.research.stereotype.venue': 'AI Safety Hackathon · Holistic AI × UCL AI Society',
		'projects.research.stereotype.grade': 'Winner',
		'projects.research.stereotype.summary':
			'Used sparse autoencoder features to surface latent stereotype representations inside large language models — interpretability as a route to AI safety.',

		'projects.cta.eyebrow': '— Fin —',
		'projects.cta.heading': "Have a problem that doesn't fit a template?",
		'projects.cta.lede': 'Most of the work above started as someone saying exactly that.',
		'projects.cta.action': 'Start a conversation',
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

		'home.hero.title.before': 'Tecnologia a serviço das ',
		'home.hero.title.highlight': 'pessoas',
		'home.hero.tagline':
			'Soluções de IA e dados fundamentadas na ética. Sistemas construídos com transparência, responsabilidade e foco no impacto humano.',
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
			'Uma combinação rara de psicologia clínica, formação filosófica e expertise técnica. Trazemos uma profundidade que perfis puramente técnicos não conseguem oferecer.',
		'home.why.clinical.title': 'Formação clínica',
		'home.why.clinical.description':
			'Anos de prática psicoterapêutica moldam como entendemos o impacto da tecnologia em pessoas reais, não apenas em usuários abstratos.',
		'home.why.philosophy.title': 'Rigor filosófico',
		'home.why.philosophy.description':
			'Ética não é uma reflexão posterior. Formação em filosofia significa fazer as perguntas difíceis antes de construir, não depois.',
		'home.why.technical.title': 'Profundidade técnica',
		'home.why.technical.description':
			'De pipelines de PLN à análise estatística, o trabalho técnico se baseia em metodologia de pesquisa.',

		'home.about.label': 'Sobre',
		'home.about.bio':
			'Fundada por Gustavo Costa, psicólogo de formação, hoje cientista de dados. Depois de anos na prática clínica, aplica essa mesma atenção à forma como construímos e implantamos sistemas de IA.',
		'home.about.cta': 'Ler bio completa',

		'home.contact.label': 'Contato',
		'home.contact.heading': 'Vamos conversar',
		'home.contact.subheading': 'Tem um projeto em mente? Adoraríamos saber mais.',

		'about.label': 'Sobre',
		'about.subtitle':
			'Psicólogo de formação, hoje cientista de dados. Trago atenção clínica ao mundo da IA e da tecnologia.',
		'about.bio.p1':
			'Antes de escrever código, trabalhei como psicólogo clínico e psicanalista em Brasília. Esse trabalho me ensinou a lidar com a complexidade e a fazer perguntas melhores, em vez de correr para soluções imediatas.',
		'about.bio.p2':
			'Hoje construo sistemas de IA e faço pesquisa na interseção entre tecnologia e humanidades. Essa experiência interdisciplinar me mostrou como a otimização, quando aplicada com cuidado em contextos humanísticos, pode ajudar sistemas a cumprirem melhor seu propósito.',
		'about.bio.p3':
			'Na Simulacro Tech, reúno tudo isso por meio de soluções técnicas diversas, incluindo sistemas RAG, pesquisa de métodos mistos e estratégia de dados — todas construídas com o mesmo cuidado que levava à prática clínica.',

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
		'footer.contact.heading': 'Contato',
		'footer.contact.location': 'Londres, Reino Unido / Brasília, Brasil',
		'footer.connect.heading': 'Conecte-se',
		'footer.copyright': 'Todos os direitos reservados.',

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

		'projects.manifest.path': 'simulacro.tech / projetos',
		'projects.manifest.lastUpdated': 'última atualização · 2026',
		'projects.manifest.index': 'Índice 001 — Trabalhos selecionados',
		'projects.manifest.title.before': 'Um ',
		'projects.manifest.title.highlight': 'arquivo',
		'projects.manifest.title.after': ' vivo de sistemas construídos para times reais.',
		'projects.manifest.lede':
			'Infraestrutura de IA em produção, ferramentas open source e pesquisa na interseção de PLN, ética e humanidades. Oito entradas, agrupadas por propósito.',
		'projects.stats.production': 'Sistemas em produção',
		'projects.stats.openSource': 'Open source',
		'projects.stats.research': 'Trabalhos de pesquisa',
		'projects.jump.production': '→ /produção',
		'projects.jump.openSource': '→ /open-source',
		'projects.jump.research': '→ /pesquisa',

		'projects.production.eyebrow': '§ 01 — Sistemas em produção',
		'projects.production.heading': 'Construído para clientes pagantes.',
		'projects.production.note':
			'Ferramentas internas. Código fechado; métricas compartilhadas com autorização.',
		'projects.production.meta.client': 'Cliente',
		'projects.production.meta.year': 'Ano',
		'projects.production.meta.role': 'Função',
		'projects.production.role': 'Engenheiro líder',

		'projects.production.molcajete.tagline':
			'Pipeline de transcrição e análise com IA para pesquisa qualitativa em grupos focais de política em espanhol mexicano.',
		'projects.production.molcajete.description':
			'Um pipeline completo de áudio a insight que substitui semanas de transcrição e codificação manual. Diarização de falantes, transcrição, classificação de temas e subtemas, e relatórios integrados — tudo entregue por uma camada de ferramentas que pesquisadores realmente usam.',
		'projects.production.molcajete.stat.0': 'horas de áudio processadas',
		'projects.production.molcajete.stat.1': 'estados mexicanos cobertos',
		'projects.production.molcajete.stat.2': 'tempo de entrega por projeto',

		'projects.production.adapta.tagline':
			'Pipeline de dados de sete estágios e infraestrutura de fine-tuning de LLMs para análise política em espanhol mexicano.',
		'projects.production.adapta.description':
			'Workflow de fine-tuning com QLoRA com treino, avaliação e registro reprodutíveis. Construído para a comparação empírica de modelos base, prompts e adapters em um benchmark curado de tarefas específicas do domínio.',
		'projects.production.adapta.stat.0': 'métricas de avaliação',
		'projects.production.adapta.stat.1': 'execuções de treino',
		'projects.production.adapta.stat.2': 'horas de GPU registradas',
		'projects.production.adapta.stat.3': 'achados empíricos',

		'projects.production.nopalero.tagline':
			'Sistema automatizado de triagem de participantes para recrutamento qualitativo.',
		'projects.production.nopalero.description':
			'Substitui horas de entrada manual de dados por projeto por um motor de validação que combina OCR, detecção de fraude e classificação socioeconômica. Desenhado para que analistas gastem tempo com julgamento, não com transcrição.',
		'projects.production.nopalero.stat.0': 'verificações de validação',
		'projects.production.nopalero.stat.1': 'leitura de documentos',
		'projects.production.nopalero.stat.2': 'entrada manual de dados',

		'projects.openSource.eyebrow': '§ 02 — Open Source',
		'projects.openSource.heading': 'Ferramentas deixadas em público.',
		'projects.openSource.intersect.summary':
			'Quadro de vagas que usa PLN — embeddings, reranking, ML clássico — para destacar oportunidades que de fato combinam. Implantado como app Streamlit.',
		'projects.openSource.judexMini.summary':
			'Biblioteca Python para coleta de dados de processos do Supremo Tribunal Federal (STF). Sucessora enxuta de um conjunto maior de ferramentas para dados jurídicos.',
		'projects.openSource.crucible.summary':
			'Banco de avaliação em massa para apps com LLM — teste modelos e prompts lado a lado e ranqueie o que funciona antes de subir para produção.',

		'projects.research.eyebrow': '§ 03 — Pesquisa e prêmios',
		'projects.research.heading': 'Escrito, defendido, premiado.',
		'projects.research.slop.title': 'What is AI slop?',
		'projects.research.slop.venue': 'Dissertação MASc · London Interdisciplinary School',
		'projects.research.slop.grade': 'Distinção',
		'projects.research.slop.summary':
			'Investigação por métodos mistos em PLN sobre conteúdo gerado por IA. Combina modelagem de tópicos, análise de sentimento e classificação por LLM para caracterizar um fenômeno que a literatura ainda não havia definido.',
		'projects.research.stereotype.title':
			'Stereotype Detection in LLMs via Sparse Autoencoders',
		'projects.research.stereotype.venue': 'AI Safety Hackathon · Holistic AI × UCL AI Society',
		'projects.research.stereotype.grade': 'Vencedor',
		'projects.research.stereotype.summary':
			'Usou características de sparse autoencoders para revelar representações latentes de estereótipos dentro de grandes modelos de linguagem — interpretabilidade como caminho para a segurança em IA.',

		'projects.cta.eyebrow': '— Fim —',
		'projects.cta.heading': 'Tem um problema que não cabe num modelo pronto?',
		'projects.cta.lede': 'A maior parte do trabalho acima começou com alguém dizendo exatamente isso.',
		'projects.cta.action': 'Iniciar uma conversa',
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

		'home.hero.title.before': 'Tecnología al servicio de las ',
		'home.hero.title.highlight': 'personas',
		'home.hero.tagline':
			'Soluciones de IA y datos basadas en la ética. Sistemas construidos con transparencia, responsabilidad y centrados en el impacto humano.',
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
			'Una combinación poco común de psicología clínica, formación filosófica y experiencia técnica. Aportamos una profundidad que los perfiles puramente técnicos no pueden igualar.',
		'home.why.clinical.title': 'Formación clínica',
		'home.why.clinical.description':
			'Años de práctica psicoterapéutica moldean cómo entendemos el impacto de la tecnología en personas reales, no solo en usuarios abstractos.',
		'home.why.philosophy.title': 'Rigor filosófico',
		'home.why.philosophy.description':
			'La ética no es una ocurrencia tardía. La formación en filosofía significa hacer las preguntas difíciles antes de construir, no después.',
		'home.why.technical.title': 'Profundidad técnica',
		'home.why.technical.description':
			'Desde pipelines de PLN hasta análisis estadístico, el trabajo técnico se basa en metodología de investigación.',

		'home.about.label': 'Sobre mí',
		'home.about.bio':
			'Fundada por Gustavo Costa, psicólogo de formación, ahora científico de datos. Tras años de práctica clínica, aplica esa misma atención a cómo construimos y desplegamos sistemas de IA.',
		'home.about.cta': 'Leer biografía completa',

		'home.contact.label': 'Contacto',
		'home.contact.heading': 'Hablemos',
		'home.contact.subheading': '¿Tienes un proyecto en mente? Nos encantaría saber más.',

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
		'footer.contact.heading': 'Contacto',
		'footer.contact.location': 'Londres, Reino Unido / Brasilia, Brasil',
		'footer.connect.heading': 'Conecta',
		'footer.copyright': 'Todos los derechos reservados.',

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

		'projects.manifest.path': 'simulacro.tech / proyectos',
		'projects.manifest.lastUpdated': 'última actualización · 2026',
		'projects.manifest.index': 'Índice 001 — Trabajos seleccionados',
		'projects.manifest.title.before': 'Un ',
		'projects.manifest.title.highlight': 'archivo',
		'projects.manifest.title.after': ' vivo de sistemas construidos para equipos reales.',
		'projects.manifest.lede':
			'Infraestructura de IA en producción, herramientas open source e investigación en la intersección entre PLN, ética y humanidades. Ocho entradas, agrupadas por propósito.',
		'projects.stats.production': 'Sistemas en producción',
		'projects.stats.openSource': 'Open source',
		'projects.stats.research': 'Trabajos de investigación',
		'projects.jump.production': '→ /producción',
		'projects.jump.openSource': '→ /open-source',
		'projects.jump.research': '→ /investigación',

		'projects.production.eyebrow': '§ 01 — Sistemas en producción',
		'projects.production.heading': 'Construido para clientes que pagan.',
		'projects.production.note':
			'Herramientas internas. Código privado; métricas compartidas con permiso.',
		'projects.production.meta.client': 'Cliente',
		'projects.production.meta.year': 'Año',
		'projects.production.meta.role': 'Rol',
		'projects.production.role': 'Ingeniero líder',

		'projects.production.molcajete.tagline':
			'Pipeline de transcripción y análisis con IA para investigación cualitativa en grupos focales de política en español mexicano.',
		'projects.production.molcajete.description':
			'Pipeline completo de audio a insight que reemplaza semanas de transcripción y codificación manual. Diarización de hablantes, transcripción, clasificación de temas y subtemas, e informes integrados — todo expuesto a través de una capa de herramientas que los investigadores realmente usan.',
		'projects.production.molcajete.stat.0': 'horas de audio procesadas',
		'projects.production.molcajete.stat.1': 'estados mexicanos cubiertos',
		'projects.production.molcajete.stat.2': 'tiempo de entrega por proyecto',

		'projects.production.adapta.tagline':
			'Pipeline de datos de siete etapas e infraestructura de fine-tuning de LLMs para análisis político en español mexicano.',
		'projects.production.adapta.description':
			'Flujo de fine-tuning con QLoRA con entrenamiento, evaluación y registro reproducibles. Construido para la comparación empírica de modelos base, prompts y adapters sobre un benchmark curado de tareas específicas del dominio.',
		'projects.production.adapta.stat.0': 'métricas de evaluación',
		'projects.production.adapta.stat.1': 'ejecuciones de entrenamiento',
		'projects.production.adapta.stat.2': 'horas de GPU registradas',
		'projects.production.adapta.stat.3': 'hallazgos empíricos',

		'projects.production.nopalero.tagline':
			'Sistema automatizado de selección de participantes para reclutamiento cualitativo.',
		'projects.production.nopalero.description':
			'Reemplaza horas de entrada manual de datos por proyecto con un motor de validación que combina OCR, detección de fraude y clasificación socioeconómica. Diseñado para que los analistas inviertan su tiempo en juicio, no en transcripción.',
		'projects.production.nopalero.stat.0': 'verificaciones de validación',
		'projects.production.nopalero.stat.1': 'lectura de documentos',
		'projects.production.nopalero.stat.2': 'entrada manual de datos',

		'projects.openSource.eyebrow': '§ 02 — Open Source',
		'projects.openSource.heading': 'Herramientas dejadas en público.',
		'projects.openSource.intersect.summary':
			'Bolsa de trabajo que usa PLN — embeddings, reranking, ML clásico — para destacar puestos que realmente encajan. Desplegada como app de Streamlit.',
		'projects.openSource.judexMini.summary':
			'Biblioteca Python para extraer datos de casos del Supremo Tribunal Federal de Brasil (STF). Sucesora reducida de un conjunto de herramientas legales más amplio.',
		'projects.openSource.crucible.summary':
			'Arnés de evaluación masiva para apps con LLM — prueba modelos y prompts lado a lado y rankea lo que funciona antes de desplegar.',

		'projects.research.eyebrow': '§ 03 — Investigación y honores',
		'projects.research.heading': 'Escrito, defendido, premiado.',
		'projects.research.slop.title': 'What is AI slop?',
		'projects.research.slop.venue': 'Tesis MASc · London Interdisciplinary School',
		'projects.research.slop.grade': 'Distinción',
		'projects.research.slop.summary':
			'Investigación de métodos mixtos en PLN sobre contenido generado por IA. Combina modelado de temas, análisis de sentimiento y clasificación con LLM para caracterizar un fenómeno que la literatura aún no había definido.',
		'projects.research.stereotype.title':
			'Stereotype Detection in LLMs via Sparse Autoencoders',
		'projects.research.stereotype.venue': 'AI Safety Hackathon · Holistic AI × UCL AI Society',
		'projects.research.stereotype.grade': 'Ganador',
		'projects.research.stereotype.summary':
			'Utilizó características de sparse autoencoders para revelar representaciones latentes de estereotipos dentro de grandes modelos de lenguaje — interpretabilidad como vía hacia la seguridad en IA.',

		'projects.cta.eyebrow': '— Fin —',
		'projects.cta.heading': '¿Tienes un problema que no encaja en una plantilla?',
		'projects.cta.lede': 'La mayoría del trabajo de arriba empezó con alguien diciendo exactamente eso.',
		'projects.cta.action': 'Iniciar una conversación',
	},
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)['en'];
