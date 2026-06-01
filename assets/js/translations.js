/**
 * Multilingual support — FR / EN / ES
 * Strategy: save language to localStorage, reload page.
 * data-typed-items is updated BEFORE main.js initialises Typed.js.
 */
(function () {
  'use strict';

  /* ── Translations ── */
  var T = {
    fr: {
      'nav.home': 'Accueil', 'nav.about': 'Profil', 'nav.resume': 'Parcours',
      'nav.skills': 'Compétences', 'nav.portfolio': 'Portfolio', 'nav.contact': 'Contact',
      'nav.btn': 'Mon Profil',

      'hero.greeting': 'Bonjour, je suis Charles BEZON',
      'hero.typed': 'Ingénieur en Génie Civil,Ingénieur Géomètre-Topographe,Géomaticien,Spécialiste SIG,Développeur Web Mapping',

      'about.subtitle': 'Mon Profil', 'about.title': 'À Propos de Moi',
      'about.desc': 'Audacieux et polyvalent, passionné par la géomatique, les SIG et les nouvelles technologies appliquées aux Grands Projets.',
      'about.role': 'Ingénieur Génie Civil', 'about.specialty': 'Spécialité Géomètre-Topographe',
      'about.stat1': 'Stages & Projets', 'about.stat2': '2 ans Prépa + 3 ans Ing.',
      'about.btn.download': 'Télécharger CV', 'about.btn.contact': 'Me Contacter',
      'about.who': 'Qui suis-je ?',
      'about.who.title': 'Transformer les Données en Solutions Géospatiales',
      'about.bio1': "Audacieux et polyvalent, j'aime apprendre de nouvelles choses et relever des défis complexes. Pluridisciplinaire et ouvert d'esprit, j'écoute les autres tout en restant ferme dans mes décisions.",
      'about.bio2': "Leader naturel, je m'engage à atteindre des objectifs ambitieux avec détermination et adaptabilité. Ma formation d'ingénieur en génie civil géomètre-topographe à l'ESTP/INP-HB m'a permis d'allier rigueur technique et vision globale des projets.",
      'about.lbl.degree': 'Diplôme', 'about.lbl.location': 'Localisation',
      'about.lbl.email': 'Email', 'about.lbl.phone': 'Téléphone', 'about.lbl.avail': 'Disponibilité',
      'about.val.avail': "En poste | À l'écoute du marché",
      'about.skills.tag': 'Logiciels Clés', 'about.skills.title': 'Maîtrise Technique',

      'resume.subtitle': 'Parcours', 'resume.title': 'Mon Parcours',
      'resume.desc': "Formations, expériences professionnelles et certifications qui constituent mon profil d'ingénieur géomètre-topographe spécialisé en géomatique et SIG.",
      'resume.exp.badge': 'Expérience', 'resume.exp.title': 'Expériences Professionnelles',
      'resume.exp.desc': "Des missions sur des projets d'envergure nationale, alliant géomatique, SIG, topographie et développement.",
      'resume.current': 'Actuel', 'resume.exp1.title': 'Ingénieur Études',
      'resume.exp1.desc': "Équipe TPM (Travaux Préparatoires Modifiés) – Ligne 1 du Métro d'Abidjan. Cartographie et numérisation des réseaux concessionnaires dans le cadre de la gestion des interfaces chantier.",
      'resume.exp2.title': "Travail de Fin d'Études",
      'resume.exp2.desc': "Étude et Intégration de SIG pour la gestion des interfaces dans les projets d'infrastructures : Cas de la Ligne 1 du Métro d'Abidjan. Mise en place de Web Mapping pour la cartographie de réseaux et le suivi de chantiers.",
      'resume.exp3.title': 'Stage de Production',
      'resume.exp3.desc': "Projet PSDL Tengrela : diagnostic territorial.<br>Projet E-Commune Agnibilekrou : correction de plans de lotissement communaux et conception de cartes de quartiers.",
      'resume.exp4.title': "Stage d'Immersion",
      'resume.exp4.desc': "Acquisition de terre et compensation des cultures par la mine Perseus : traitement de données géospatiales par Python, conception automatique de cartes avec l'outil Atlas de QGIS.",
      'resume.edu.badge': 'Formation', 'resume.edu.title': 'Formation Académique',
      'resume.edu.desc': 'Un parcours rigoureux en classes préparatoires puis en cycle ingénieur, complété par des certifications professionnelles.',
      'resume.edu1.level': 'Ingénieur', 'resume.edu1.title': 'Cycle Ingénieur Génie Civil',
      'resume.edu1.desc': 'Parcours académique comprenant un tronc commun puis une spécialisation en Géomètre-Topographe, SIG et géomatique.',
      'resume.edu2.title': "Projet de Fin d'Études",
      'resume.edu2.desc': "Élaboration et Conception par CAO/DAO de l'Extension de la voie menant à l'INP-HB Nord.",
      'resume.edu3.level': 'Certification', 'resume.edu3.title': "Certificat d'Anglais",
      'resume.edu4.level': 'Prépa', 'resume.edu4.desc': "Formation scientifique intensive en mathématiques, physique et sciences de l'ingénieur.",
      'resume.edu5.level': 'Baccalauréat',

      'skills.subtitle': 'Compétences', 'skills.title': 'Mes Compétences',
      'skills.desc': 'Un ensemble de compétences techniques et humaines développées tout au long de ma formation et de mes expériences professionnelles.',
      'skills.sig.title': 'Logiciels SIG', 'skills.cao.title': 'CAO / DAO',
      'skills.prog.title': 'Programmation', 'skills.office.title': 'Outils Bureautiques',
      'skills.langs.title': 'Langues',
      'skills.langs.fr': 'Français – Natif', 'skills.langs.en': 'Anglais – Niveau B1 (elAo)', 'skills.langs.es': 'Espagnol – Notions',
      'skills.soft.title': 'Compétences Pratiques',
      'skills.soft.1': 'Leadership', 'skills.soft.2': 'Gestion de projet', 'skills.soft.3': 'Communication',
      'skills.soft.4': 'Travail en équipe', 'skills.soft.5': 'Rédaction',
      'skills.topo.title': 'Matériel Topographique',
      'skills.topo.1': 'Station Totale', 'skills.topo.2': 'GPS Différentiel', 'skills.topo.3': 'Niveau de Chantier',
      'skills.interests.title': "Centres d'Intérêts",
      'skills.interests.1': 'Géomatique & SIG', 'skills.interests.2': 'Théâtre & Art oratoire',
      'skills.interests.3': 'Musique', 'skills.interests.4': 'Natation',

      'portfolio.title': 'Mes Projets',
      'portfolio.desc': "Projets de Web Mapping et SIG réalisés au sein de SICMA – Bouygues Travaux Publics, dans le cadre de la Ligne 1 du Métro d'Abidjan.",
      'portfolio.p1.title': 'Plateforme SIG de Gestion des Interfaces',
      'portfolio.p1.desc': "Application web de cartographie interactive pour la gestion des interfaces chantier de la Ligne 1 du Métro d'Abidjan, avec un système de droits multi-niveaux.",
      'portfolio.p2.title': 'Module Cartographique de Suivi des Chantiers',
      'portfolio.p2.desc': "Refonte de l'interface de suivi des chantiers pour intégration iframe dans un logiciel métier, avec popup statistiques Power BI par chantier.",

      'contact.subtitle': 'Contact', 'contact.title': 'Me Contacter',
      'contact.desc': "Vous avez une opportunité, un projet ou simplement envie d'échanger ? Je suis disponible et ouvert à toute discussion.",
      'contact.location': 'Localisation', 'contact.phone': 'Téléphone', 'contact.email': 'Email',
      'form.name': 'Votre nom', 'form.email': 'Votre email', 'form.subject': 'Sujet',
      'form.message': 'Votre message', 'form.loading': 'Envoi en cours...',
      'form.sent': 'Votre message a été envoyé. Merci !', 'form.submit': 'Envoyer le Message',

      'footer.about': "Ingénieur Génie Civil Géomètre-Topographe, spécialisé en SIG et Géomatique. Passionné par les technologies géospatiales et leur application dans les projets d'infrastructures.",
      'footer.nav': 'Navigation', 'footer.domains': 'Domaines',
      'footer.domain.1': 'SIG & Géomatique', 'footer.domain.3': 'Programmation',
      'footer.domain.4': 'Topographie', 'footer.domain.5': 'Langues',
      'footer.contact': 'Contact', 'footer.tel': 'Tél :', 'footer.email.label': 'Email :',
      'footer.rights': '– Tous droits réservés',
    },

    en: {
      'nav.home': 'Home', 'nav.about': 'Profile', 'nav.resume': 'Career',
      'nav.skills': 'Skills', 'nav.portfolio': 'Portfolio', 'nav.contact': 'Contact',
      'nav.btn': 'My Profile',

      'hero.greeting': 'Hello, I am Charles BEZON',
      'hero.typed': 'Civil Engineering Graduate,Land Surveyor Engineer,Geomatician,GIS Specialist,Web Mapping Developer',

      'about.subtitle': 'My Profile', 'about.title': 'About Me',
      'about.desc': 'Bold and versatile, passionate about geomatics, GIS and new technologies applied to large-scale projects.',
      'about.role': 'Civil Engineering Graduate', 'about.specialty': 'Land Surveying Specialty',
      'about.stat1': 'Internships & Projects', 'about.stat2': '2 yrs Prep + 3 yrs Eng.',
      'about.btn.download': 'Download CV', 'about.btn.contact': 'Contact Me',
      'about.who': 'Who am I?',
      'about.who.title': 'Turning Data into Geospatial Solutions',
      'about.bio1': 'Bold and versatile, I enjoy learning new things and tackling complex challenges. Multidisciplinary and open-minded, I listen to others while remaining firm in my decisions.',
      'about.bio2': 'A natural leader, I am committed to achieving ambitious goals with determination and adaptability. My training as a civil engineer and land surveyor at ESTP/INP-HB has allowed me to combine technical rigor with a global vision of projects.',
      'about.lbl.degree': 'Degree', 'about.lbl.location': 'Location',
      'about.lbl.email': 'Email', 'about.lbl.phone': 'Phone', 'about.lbl.avail': 'Availability',
      'about.val.avail': 'Employed | Open to opportunities',
      'about.skills.tag': 'Key Software', 'about.skills.title': 'Technical Proficiency',

      'resume.subtitle': 'Career', 'resume.title': 'My Career',
      'resume.desc': 'Training, professional experience and certifications that make up my profile as a land surveyor engineer specialised in geomatics and GIS.',
      'resume.exp.badge': 'Experience', 'resume.exp.title': 'Professional Experience',
      'resume.exp.desc': 'Assignments on national-scale projects combining geomatics, GIS, surveying and development.',
      'resume.current': 'Current', 'resume.exp1.title': 'Studies Engineer',
      'resume.exp1.desc': 'TPM team (Modified Preparatory Works) – Abidjan Metro Line 1. Mapping and digitising concessionaire networks as part of construction interface management.',
      'resume.exp2.title': 'Final Year Project',
      'resume.exp2.desc': 'Study and Integration of GIS for interface management in infrastructure projects: Case of Abidjan Metro Line 1. Implementation of Web Mapping for network mapping and construction monitoring.',
      'resume.exp3.title': 'Production Internship',
      'resume.exp3.desc': 'PSDL Tengrela Project: territorial diagnosis.<br>E-Commune Agnibilekrou Project: correction of communal subdivision plans and design of neighbourhood maps.',
      'resume.exp4.title': 'Immersion Internship',
      'resume.exp4.desc': 'Land acquisition and crop compensation for the Perseus mine: geospatial data processing with Python, automatic map design using QGIS Atlas tool.',
      'resume.edu.badge': 'Education', 'resume.edu.title': 'Academic Background',
      'resume.edu.desc': 'A rigorous path through preparatory classes then an engineering cycle, complemented by professional certifications.',
      'resume.edu1.level': 'Engineer', 'resume.edu1.title': 'Civil Engineering Cycle',
      'resume.edu1.desc': 'Academic path including a common core followed by a specialisation in Land Surveying, GIS and geomatics.',
      'resume.edu2.title': 'Final Year Project',
      'resume.edu2.desc': 'Design and development using CAD of the road extension leading to INP-HB North.',
      'resume.edu3.level': 'Certification', 'resume.edu3.title': 'English Certificate',
      'resume.edu4.level': 'Prep School', 'resume.edu4.desc': 'Intensive scientific training in mathematics, physics and engineering sciences.',
      'resume.edu5.level': 'High School Diploma',

      'skills.subtitle': 'Skills', 'skills.title': 'My Skills',
      'skills.desc': 'A set of technical and human skills developed throughout my training and professional experience.',
      'skills.sig.title': 'GIS Software', 'skills.cao.title': 'CAD / Design',
      'skills.prog.title': 'Programming', 'skills.office.title': 'Office Tools',
      'skills.langs.title': 'Languages',
      'skills.langs.fr': 'French – Native', 'skills.langs.en': 'English – B1 Level (elAo)', 'skills.langs.es': 'Spanish – Basic',
      'skills.soft.title': 'Soft Skills',
      'skills.soft.1': 'Leadership', 'skills.soft.2': 'Project Management', 'skills.soft.3': 'Communication',
      'skills.soft.4': 'Teamwork', 'skills.soft.5': 'Writing',
      'skills.topo.title': 'Survey Equipment',
      'skills.topo.1': 'Total Station', 'skills.topo.2': 'Differential GPS', 'skills.topo.3': 'Construction Level',
      'skills.interests.title': 'Interests',
      'skills.interests.1': 'Geomatics & GIS', 'skills.interests.2': 'Theatre & Public Speaking',
      'skills.interests.3': 'Music', 'skills.interests.4': 'Swimming',

      'portfolio.title': 'My Projects',
      'portfolio.desc': 'Web Mapping and GIS projects carried out within SICMA – Bouygues Travaux Publics, as part of the Abidjan Metro Line 1.',
      'portfolio.p1.title': 'GIS Platform for Interface Management',
      'portfolio.p1.desc': 'Interactive web mapping application for managing construction interfaces on Abidjan Metro Line 1, with a multi-level access rights system.',
      'portfolio.p2.title': 'Construction Monitoring Mapping Module',
      'portfolio.p2.desc': 'Redesign of the construction monitoring interface for iframe integration in business software, with Power BI statistics popups per site.',

      'contact.subtitle': 'Contact', 'contact.title': 'Contact Me',
      'contact.desc': 'Do you have an opportunity, a project or simply want to chat? I am available and open to any discussion.',
      'contact.location': 'Location', 'contact.phone': 'Phone', 'contact.email': 'Email',
      'form.name': 'Your name', 'form.email': 'Your email', 'form.subject': 'Subject',
      'form.message': 'Your message', 'form.loading': 'Sending...',
      'form.sent': 'Your message has been sent. Thank you!', 'form.submit': 'Send Message',

      'footer.about': 'Civil Engineering Graduate specialised in GIS and Geomatics. Passionate about geospatial technologies and their application in infrastructure projects.',
      'footer.nav': 'Navigation', 'footer.domains': 'Domains',
      'footer.domain.1': 'GIS & Geomatics', 'footer.domain.3': 'Programming',
      'footer.domain.4': 'Surveying', 'footer.domain.5': 'Languages',
      'footer.contact': 'Contact', 'footer.tel': 'Tel:', 'footer.email.label': 'Email:',
      'footer.rights': '– All rights reserved',
    },

    es: {
      'nav.home': 'Inicio', 'nav.about': 'Perfil', 'nav.resume': 'Trayectoria',
      'nav.skills': 'Competencias', 'nav.portfolio': 'Portfolio', 'nav.contact': 'Contacto',
      'nav.btn': 'Mi Perfil',

      'hero.greeting': 'Hola, soy Charles BEZON',
      'hero.typed': 'Ingeniero en Ingeniería Civil,Ingeniero Geómetra-Topógrafo,Geomático,Especialista SIG,Desarrollador Web Mapping',

      'about.subtitle': 'Mi Perfil', 'about.title': 'Sobre Mí',
      'about.desc': 'Audaz y versátil, apasionado por la geomática, los SIG y las nuevas tecnologías aplicadas a grandes proyectos.',
      'about.role': 'Ingeniero en Ingeniería Civil', 'about.specialty': 'Especialidad Geómetra-Topógrafo',
      'about.stat1': 'Prácticas & Proyectos', 'about.stat2': '2 años Prep + 3 años Ing.',
      'about.btn.download': 'Descargar CV', 'about.btn.contact': 'Contáctame',
      'about.who': '¿Quién soy?',
      'about.who.title': 'Transformar Datos en Soluciones Geoespaciales',
      'about.bio1': 'Audaz y versátil, me gusta aprender cosas nuevas y afrontar desafíos complejos. Multidisciplinario y de mente abierta, escucho a los demás manteniéndome firme en mis decisiones.',
      'about.bio2': 'Líder natural, me comprometo a alcanzar objetivos ambiciosos con determinación y adaptabilidad. Mi formación como ingeniero civil topógrafo en ESTP/INP-HB me ha permitido combinar el rigor técnico con una visión global de los proyectos.',
      'about.lbl.degree': 'Título', 'about.lbl.location': 'Ubicación',
      'about.lbl.email': 'Email', 'about.lbl.phone': 'Teléfono', 'about.lbl.avail': 'Disponibilidad',
      'about.val.avail': 'Empleado | Abierto a oportunidades',
      'about.skills.tag': 'Software Clave', 'about.skills.title': 'Dominio Técnico',

      'resume.subtitle': 'Trayectoria', 'resume.title': 'Mi Trayectoria',
      'resume.desc': 'Formación, experiencias profesionales y certificaciones que constituyen mi perfil de ingeniero geómetra-topógrafo especializado en geomática y SIG.',
      'resume.exp.badge': 'Experiencia', 'resume.exp.title': 'Experiencia Profesional',
      'resume.exp.desc': 'Misiones en proyectos de envergadura nacional, combinando geomática, SIG, topografía y desarrollo.',
      'resume.current': 'Actual', 'resume.exp1.title': 'Ingeniero de Estudios',
      'resume.exp1.desc': 'Equipo TPM (Trabajos Preparatorios Modificados) – Línea 1 del Metro de Abidján. Cartografía y digitalización de redes concesionarias en el marco de la gestión de interfaces de obra.',
      'resume.exp2.title': 'Trabajo de Fin de Estudios',
      'resume.exp2.desc': 'Estudio e Integración de SIG para la gestión de interfaces en proyectos de infraestructuras: Caso de la Línea 1 del Metro de Abidján. Implementación de Web Mapping para la cartografía de redes y el seguimiento de obras.',
      'resume.exp3.title': 'Práctica de Producción',
      'resume.exp3.desc': 'Proyecto PSDL Tengrela: diagnóstico territorial.<br>Proyecto E-Commune Agnibilekrou: corrección de planes de parcelación comunales y diseño de mapas de barrios.',
      'resume.exp4.title': 'Práctica de Inmersión',
      'resume.exp4.desc': 'Adquisición de tierras y compensación de cultivos por la mina Perseus: procesamiento de datos geoespaciales con Python, diseño automático de mapas con la herramienta Atlas de QGIS.',
      'resume.edu.badge': 'Formación', 'resume.edu.title': 'Formación Académica',
      'resume.edu.desc': 'Un riguroso recorrido por las clases preparatorias y el ciclo de ingeniería, complementado con certificaciones profesionales.',
      'resume.edu1.level': 'Ingeniero', 'resume.edu1.title': 'Ciclo de Ingeniería Civil',
      'resume.edu1.desc': 'Itinerario académico con un tronco común seguido de especialización en Geómetra-Topógrafo, SIG y geomática.',
      'resume.edu2.title': 'Proyecto de Fin de Estudios',
      'resume.edu2.desc': 'Elaboración y Diseño por CAO/DAO de la extensión de la vía hacia el INP-HB Norte.',
      'resume.edu3.level': 'Certificación', 'resume.edu3.title': 'Certificado de Inglés',
      'resume.edu4.level': 'Preparatoria', 'resume.edu4.desc': 'Formación científica intensiva en matemáticas, física y ciencias de la ingeniería.',
      'resume.edu5.level': 'Bachillerato',

      'skills.subtitle': 'Competencias', 'skills.title': 'Mis Competencias',
      'skills.desc': 'Un conjunto de competencias técnicas y humanas desarrolladas a lo largo de mi formación y experiencias profesionales.',
      'skills.sig.title': 'Software SIG', 'skills.cao.title': 'CAD / Diseño',
      'skills.prog.title': 'Programación', 'skills.office.title': 'Herramientas Ofimáticas',
      'skills.langs.title': 'Idiomas',
      'skills.langs.fr': 'Francés – Nativo', 'skills.langs.en': 'Inglés – Nivel B1 (elAo)', 'skills.langs.es': 'Español – Nociones',
      'skills.soft.title': 'Habilidades Blandas',
      'skills.soft.1': 'Liderazgo', 'skills.soft.2': 'Gestión de proyectos', 'skills.soft.3': 'Comunicación',
      'skills.soft.4': 'Trabajo en equipo', 'skills.soft.5': 'Redacción',
      'skills.topo.title': 'Equipamiento Topográfico',
      'skills.topo.1': 'Estación Total', 'skills.topo.2': 'GPS Diferencial', 'skills.topo.3': 'Nivel de Obra',
      'skills.interests.title': 'Intereses',
      'skills.interests.1': 'Geomática & SIG', 'skills.interests.2': 'Teatro & Arte Oratorio',
      'skills.interests.3': 'Música', 'skills.interests.4': 'Natación',

      'portfolio.title': 'Mis Proyectos',
      'portfolio.desc': 'Proyectos de Web Mapping y SIG realizados dentro de SICMA – Bouygues Travaux Publics, en el marco de la Línea 1 del Metro de Abidján.',
      'portfolio.p1.title': 'Plataforma SIG de Gestión de Interfaces',
      'portfolio.p1.desc': 'Aplicación web de cartografía interactiva para la gestión de interfaces de obra de la Línea 1 del Metro de Abidján, con un sistema de derechos multinivel.',
      'portfolio.p2.title': 'Módulo Cartográfico de Seguimiento de Obras',
      'portfolio.p2.desc': 'Rediseño de la interfaz de seguimiento de obras para integración iframe en software de gestión, con estadísticas Power BI por obra.',

      'contact.subtitle': 'Contacto', 'contact.title': 'Contáctame',
      'contact.desc': '¿Tienes una oportunidad, un proyecto o simplemente quieres conversar? Estoy disponible y abierto a cualquier conversación.',
      'contact.location': 'Ubicación', 'contact.phone': 'Teléfono', 'contact.email': 'Email',
      'form.name': 'Tu nombre', 'form.email': 'Tu correo', 'form.subject': 'Asunto',
      'form.message': 'Tu mensaje', 'form.loading': 'Enviando...',
      'form.sent': '¡Tu mensaje fue enviado. ¡Gracias!', 'form.submit': 'Enviar Mensaje',

      'footer.about': 'Ingeniero Civil Geómetra-Topógrafo, especializado en SIG y Geomática. Apasionado por las tecnologías geoespaciales y su aplicación en proyectos de infraestructura.',
      'footer.nav': 'Navegación', 'footer.domains': 'Áreas',
      'footer.domain.1': 'SIG & Geomática', 'footer.domain.3': 'Programación',
      'footer.domain.4': 'Topografía', 'footer.domain.5': 'Idiomas',
      'footer.contact': 'Contacto', 'footer.tel': 'Tel:', 'footer.email.label': 'Email:',
      'footer.rights': '– Todos los derechos reservados',
    }
  };

  /* ── Apply translations to DOM ── */
  function applyLang(lang) {
    var t = T[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = t[el.getAttribute('data-i18n')];
      if (v !== undefined) el.textContent = v;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var v = t[el.getAttribute('data-i18n-html')];
      if (v !== undefined) el.innerHTML = v;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var v = t[el.getAttribute('data-i18n-placeholder')];
      if (v !== undefined) el.placeholder = v;
    });

    document.documentElement.lang = lang;
  }

  /* ── Read saved language ── */
  var _lang = 'fr';
  try { _lang = localStorage.getItem('cv_lang') || 'fr'; } catch (e) {}
  if (!T[_lang]) _lang = 'fr';

  /* ── Update data-typed-items BEFORE main.js initialises Typed ── */
  if (_lang !== 'fr') {
    var _typedEl = document.querySelector('.typed');
    if (_typedEl) _typedEl.setAttribute('data-typed-items', T[_lang]['hero.typed']);
  }

  /* ── Apply all text translations immediately (DOM is parsed at this point) ── */
  applyLang(_lang);

  /* ── Wire up the dropdown (DOM is already available) ── */
  var _sel = document.getElementById('lang-select');
  if (_sel) {
    _sel.value = _lang;
    _sel.addEventListener('change', function () {
      try { localStorage.setItem('cv_lang', this.value); } catch (e) {}
      location.reload();
    });
  }

})();
