import type { en } from './en';

export const pt = {
  'nav.menu': "Menu",
  'nav.skip': "Pular para o conteúdo",
  'meta.home.title': 'Simulacro Tech – Consultoria interdisciplinar em dados e IA',
  'meta.home.description':
  	'Consultoria em dados e IA fundamentada na ética. Tecnologia construída a serviço das pessoas, e não o contrário.',
  'meta.about.title': 'Sobre – Simulacro Tech',
  'meta.about.description':
  	'Consultoria em dados e IA fundamentada na ética. Tecnologia construída a serviço das pessoas, e não o contrário.',
  'meta.projects.title': 'Projetos · Simulacro Tech',
  'meta.projects.description':
  	'Trabalhos selecionados em infraestrutura de IA, PLN e pesquisa aplicada.',

  'nav.home': 'Início',
  'nav.about': 'Sobre',
  'nav.projects': 'Projetos',
  'nav.contact': 'Contato',

  'home.hero.title': "Tecnologia a serviço das pessoas.",
  'home.hero.tagline':
  	"Sistemas de IA, ferramentas de pesquisa e pipelines de dados pensados para quem os utiliza.",
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
  	"Transcrição de áudio, leitura de documentos, web scraping e validação. Pipelines integrados transformam o trabalho manual com dados em um processo reproduzível.",

  'home.why.label': 'Abordagem',
  'home.why.heading': "Como trabalhamos",
  'home.why.intro':
  	"Nosso trabalho reúne experiência em psicologia clínica, filosofia da ciência e engenharia de software.",
  'home.why.clinical.title': 'Formação clínica',
  'home.why.clinical.description':
  	'Anos de prática psicoterapêutica moldam como entendemos o impacto da tecnologia em pessoas de carne e osso.',
  'home.why.philosophy.title': 'Rigor filosófico',
  'home.why.philosophy.description':
  	"Examinamos o que um sistema deve realizar, quem ele afeta e como seus resultados podem ser verificados.",
  'home.why.technical.title': 'Profundidade técnica',
  'home.why.technical.description':
  	'De pipelines de PLN à análise estatística – trabalho técnico com rigor acadêmico.',

  'home.projects.label': 'Trabalho selecionado',
  'home.projects.heading': 'Projetos recentes',
  'home.projects.intro':
  	'Sistemas em produção, ferramentas de pesquisa, implementações ponta a ponta.',
  'home.projects.cta': 'Ver todos os projetos',

  'projects.production.molcajete.tagline':
  	'Pipeline de transcrição e análise com IA para pesquisa política qualitativa.',
  'projects.production.molcajete.description':
  	'Pipeline completo, do áudio bruto ao insight final, no lugar de transcrição cheia de erros e horas de anotação por projeto. Diarização de falantes, transcrição, classificação de temas e relatórios integrados – tudo numa camada de ferramentas que pesquisadores realmente usam.',
  'projects.production.molcajete.stat.0': 'horas de áudio processadas',
  'projects.production.molcajete.stat.1': 'tempo de entrega por projeto',

  'projects.production.adapta.tagline':
  	'Infraestrutura de fine-tuning de LLMs e pipeline de pré-processamento de dados para análise política em espanhol mexicano.',
  'projects.production.adapta.description':
  	'Modelos LLM especializados, fruto de um pipeline reprodutível de fine-tuning e avaliação. Permite a comparação empírica de modelos base e prompts.',
  'projects.production.adapta.stat.0': 'métricas de avaliação',
  'projects.production.adapta.stat.1': 'execuções de treino',

  'projects.production.nopalero.tagline':
  	'Sistema automatizado de triagem de participantes para recrutamento qualitativo.',
  'projects.production.nopalero.description':
  	'Pipeline automatizado de triagem que substitui horas de digitação manual por projeto. Combina OCR, detecção de fraude e classificação socioeconômica – para que os analistas foquem nas decisões, não no trabalho burocrático.',
  'projects.production.nopalero.stat.0': 'verificações de validação',
  'projects.production.nopalero.stat.1': 'entrada manual de dados',

  'projects.production.azulejo.tagline':
  	'Transforma anotações soltas em um PowerPoint editável e com a identidade da marca, ao toque de um botão.',
  'projects.production.azulejo.description':
  	'O template da marca é codificado uma vez, e cada slide sai em conformidade por construção. O conteúdo vive em texto simples e os slides são regenerados a partir dele, versionáveis e reproduzíveis como código. O resultado é um .pptx padrão que qualquer um pode editar, sem plataforma no meio.',
  'projects.production.azulejo.stat.0': 'templates de layout',
  'projects.production.azulejo.stat.1': 'para reconstruir 50 slides',

  'projects.openSource.judex.tagline':
  	'Scraper de processos do Supremo Tribunal Federal (STF).',
  'projects.openSource.judex.description':
  	'CLI em Python baseada em Typer, com três etapas cache-first – coleta, download e extração. Suporta execuções massivamente paralelas com rotação de proxy e alimenta um warehouse DuckDB. Vários backends de OCR, incluindo Tesseract auto-hospedado no fly.io para inferência de baixo custo.',
  'projects.openSource.judex.stat.0': 'varredura anual de HC',
  'projects.openSource.judex.stat.1': 'vazão de PDFs',
  'projects.openSource.judex.stat.2': 'vazão de processos',
  'projects.openSource.judex.stat.3': 'backends de OCR',

  'projects.openSource.zelador.tagline':
  	'CLI para um agente de IA organizar uma biblioteca Zotero.',
  'projects.openSource.zelador.description':
  	'Verifica etiquetas, metadados e pastas; enriquece metadados com Crossref e arXiv; comprime PDFs. Implementa um ciclo de validação com backups e write-ahead logs – o que torna seguro deixar um agente de IA mexer no banco de dados.',

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

  'about.subtitle':
  	'Psicólogo de formação, hoje cientista de dados. A mesma escuta clínica, agora aplicada à IA e à tecnologia.',
  'about.bio.p1':
  	'Antes de escrever código, trabalhei como psicólogo clínico e psicanalista em Brasília. Esse trabalho me ensinou a sustentar a complexidade e formular perguntas melhores, em vez de pular para soluções imediatas.',
  'about.bio.p2':
  	'Hoje construo sistemas de IA e faço pesquisa na interseção entre tecnologia e humanidades. A experiência interdisciplinar me mostrou: a otimização, aplicada com cuidado em contextos humanísticos, ajuda sistemas a cumprir melhor seu propósito.',
  'about.bio.p3':
  	'Na Simulacro Tech, junto tudo isso em soluções técnicas variadas – sistemas RAG, pesquisa de métodos mistos, estratégia de dados – todas construídas com a mesma atenção da prática clínica.',

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
} as const satisfies Record<keyof typeof en, string>;
