/**
 * Multi-language Support for Commune Rurale de Bni Chegdale
 * Languages: Arabic (ar, official), French (fr), English (en)
 */

const translations = {
    fr: {
        // Navigation
        navHome: "Accueil",
        navAbout: "À propos",
        navServices: "Services",
        navHours: "Horaires",
        navAdmin: "Administration",
        navNews: "Actualités",
        navContact: "Contact",
        
        // Hero Section
        heroTitle: "Bienvenue à la Commune Rurale de Bni Chegdale",
        heroSubtitle: "Au service des citoyens pour un développement local durable",
        btnServices: "Nos Services",
        btnContact: "Nous Contacter",
        
        // Presentation Section
        presentationTitle: "Présentation de la Commune",
        presentationText: "La Commune rurale de Bni Chegdale est une collectivité territoriale située dans la province de Fquih Ben Salah, région de Béni Mellal-Khénifra, au Maroc. Selon le recensement de 2014, la commune compte 10 413 habitants répartis dans 2 355 ménages.",
        presentationText2: "Notre commune s'étend sur une altitude moyenne de 410 mètres et comprend plusieurs quartiers et villages : Al Khouloute, Khmis Bni Chegdale (centre administratif), Lamjarema, Oulad Ahmed et Ouled Salem. La commune bénéficie d'un climat méditerranéen caractérisé par des étés chauds et secs et des hivers doux et humides.",
        btnLearnMore: "En savoir plus",
        welcomeTitle: "Message de Bienvenue",
        welcomeGreeting: "Chers citoyens,",
        welcomeText: "Au nom du Conseil communal et de toute l'équipe administrative, je vous souhaite la bienvenue sur le site officiel de la Commune rurale de Bni Chegdale.",
        welcomeText2: "Ce site a été conçu pour faciliter votre accès aux informations et services communaux. Nous sommes à votre écoute et restons disponibles pour répondre à vos besoins.",
        welcomeClosing: "Ensemble, construisons l'avenir de notre commune.",
        
        // Services Section
        servicesTitle: "Accès Rapide aux Services",
        servicesSubtitle: "Trouvez rapidement les services dont vous avez besoin",
        serviceCivil: "État Civil",
        serviceCivilDesc: "Actes de naissance, mariage, décès et autres documents officiels",
        serviceUrban: "Urbanisme",
        serviceUrbanDesc: "Autorisations de construction et certificats d'urbanisme",
        serviceTaxes: "Impôts Locaux",
        serviceTaxesDesc: "Taxes communales et redevances diverses",
        serviceSocial: "Affaires Sociales",
        serviceSocialDesc: "Aide sociale et accompagnement des citoyens",
        btnLearnMoreService: "En savoir plus",
        
        // News Section
        newsTitle: "Actualités Récentes",
        newsSubtitle: "Restez informé des dernières nouvelles de la commune",
        newsImportant: "Important",
        newsProject: "Projet",
        newsAnnouncement: "Annonce",
        newsTitle1: "Nouveaux horaires d'ouverture",
        newsText1: "Les horaires de la commune ont été mis à jour pour mieux servir les citoyens.",
        newsTitle2: "Projets de développement",
        newsText2: "Découvrez les nouveaux projets de développement local en cours.",
        newsTitle3: "Réunion du conseil communal",
        newsText3: "Prochaine réunion du conseil communal prévue le mois prochain.",
        btnReadMore: "Lire la suite",
        btnAllNews: "Voir toutes les actualités",
        
        // Footer
        footerTitle: "Commune Rurale de Bni Chegdale",
        footerDescription: "Commune rurale située dans la province de Fquih Ben Salah, région de Béni Mellal-Khénifra. Population : 10 413 habitants (recensement 2014).",
        footerQuickLinks: "Liens Rapides",
        footerContact: "Contact",
        footerRights: "Tous droits réservés.",
        footerDesigned: "Conçu avec",
        footerFor: "pour les citoyens",
        
        // About Page
        aboutTitle: "À propos de la Commune",
        aboutSubtitle: "Découvrez notre histoire, notre mission et nos valeurs",
        aboutGeneralTitle: "Présentation Générale",
        aboutGeneralText: "La Commune rurale de Bni Chegdale est une collectivité territoriale située au Maroc, engagée dans le développement local et l'amélioration continue des services publics.",
        aboutGeneralText2: "Notre commune fait partie du système de décentralisation administrative marocain et joue un rôle essentiel dans la gestion des affaires locales, le développement économique et social, ainsi que la préservation de l'environnement.",
        aboutGeneralText3: "Nous œuvrons quotidiennement pour offrir des services administratifs de qualité, faciliter les démarches des citoyens et promouvoir le développement durable de notre territoire.",
        aboutGeoInfo: "Informations Géographiques",
        aboutLocation: "Localisation :",
        aboutLocationText: "Province de Fquih Ben Salah, Région Béni Mellal-Khénifra, Maroc",
        aboutPopulation: "Population :",
        aboutPopulationText: "10 413 habitants (recensement 2014)",
        aboutType: "Type :",
        aboutTypeText: "Commune rurale",
        aboutMissionTitle: "Mission et Rôles de la Commune",
        aboutMissionSubtitle: "Nos responsabilités et engagements envers les citoyens",
        aboutServiceAdmin: "Services Administratifs",
        aboutServiceAdminText: "Fournir des services administratifs efficaces et accessibles à tous les citoyens, en simplifiant les démarches et en réduisant les délais.",
        aboutDevLocal: "Développement Local",
        aboutDevLocalText: "Promouvoir le développement économique et social du territoire en soutenant les initiatives locales et en créant un environnement favorable aux investissements.",
        aboutProximity: "Proximité Citoyenne",
        aboutProximityText: "Maintenir une relation de proximité avec les citoyens, être à l'écoute de leurs besoins et améliorer continuellement la qualité de vie locale.",
        aboutTransparency: "Transparence",
        aboutTransparencyText: "Assurer la transparence dans la gestion des affaires publiques et l'information des citoyens sur les décisions et projets communaux.",
        aboutEnvironment: "Environnement",
        aboutEnvironmentText: "Protéger l'environnement et promouvoir le développement durable à travers des projets écologiques et des initiatives vertes.",
        aboutSolidarity: "Solidarité",
        aboutSolidarityText: "Renforcer la cohésion sociale et la solidarité entre les citoyens, en particulier envers les personnes vulnérables et les familles en difficulté.",
        aboutValuesTitle: "Nos Valeurs",
        aboutValuesSubtitle: "Les principes qui guident notre action quotidienne",
        aboutIntegrity: "Intégrité",
        aboutIntegrityText: "Agir avec honnêteté et éthique dans toutes nos actions.",
        aboutEfficiency: "Efficacité",
        aboutEfficiencyText: "Optimiser nos processus pour un service de qualité.",
        aboutAccessibility: "Accessibilité",
        aboutAccessibilityText: "Rendre nos services accessibles à tous les citoyens.",
        aboutInnovation: "Innovation",
        aboutInnovationText: "Adopter les meilleures pratiques et technologies.",
        
        // Services Page
        servicesPageTitle: "Services Communaux",
        servicesPageSubtitle: "Découvrez tous les services disponibles pour les citoyens",
        serviceCivilTitle: "État Civil",
        serviceCivilSubtitle: "Services d'état civil et documents officiels",
        serviceCivilAvailable: "Services Disponibles",
        serviceCivilDocs: "Documents Requis",
        serviceUrbanTitle: "Urbanisme",
        serviceUrbanSubtitle: "Autorisations et certificats d'urbanisme",
        serviceUrbanAvailable: "Services Disponibles",
        serviceUrbanDocs: "Documents Requis",
        serviceTaxesTitle: "Impôts Locaux",
        serviceTaxesSubtitle: "Taxes et redevances communales",
        serviceTaxesAvailable: "Services Disponibles",
        serviceTaxesDocs: "Documents Requis",
        serviceSocialTitle: "Affaires Sociales",
        serviceSocialSubtitle: "Aide sociale et accompagnement",
        serviceSocialAvailable: "Services Disponibles",
        serviceSocialDocs: "Documents Requis",
        
        // Hours Page
        hoursTitle: "Horaires d'Ouverture",
        hoursSubtitle: "Consultez les horaires de la commune et de ses services",
        hoursGeneral: "Horaires Généraux",
        hoursMonday: "Lundi",
        hoursTuesday: "Mardi",
        hoursWednesday: "Mercredi",
        hoursThursday: "Jeudi",
        hoursFriday: "Vendredi",
        hoursSaturday: "Samedi",
        hoursSunday: "Dimanche",
        hoursClosed: "Fermé",
        hoursByService: "Horaires par Service",
        
        // Administration Page
        adminTitle: "Administration",
        adminSubtitle: "Découvrez l'équipe administrative et le conseil communal",
        adminStructure: "Structure Administrative",
        adminCouncil: "Conseil Communal",
        adminTeam: "Équipe de Direction",
        
        // News Page
        newsPageTitle: "Actualités",
        newsPageSubtitle: "Restez informé des dernières nouvelles et événements",
        
        // Contact Page
        contactTitle: "Contactez-nous",
        contactSubtitle: "Nous sommes à votre écoute pour répondre à vos questions",
        contactAddress: "Adresse",
        contactPhone: "Téléphone",
        contactEmail: "Email",
        contactFormTitle: "Formulaire de Contact",
        contactName: "Nom complet",
        contactEmailField: "Email",
        contactPhoneField: "Téléphone",
        contactSubject: "Sujet",
        contactMessage: "Message",
        contactSend: "Envoyer le message",
        contactSuccess: "Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.",
        contactError: "Une erreur s'est produite. Veuillez réessayer plus tard.",
        contactByService: "Contact par Service",
        contactLocation: "Localisation",
        langName: "Français",
        geoPopulation: "Population",
        geoInhabitants: "habitants (2014)",
        geoHouseholds: "ménages",
        geoLocationTitle: "Localisation",
        geoAltitude: "Altitude moyenne :",
        geoProvince: "Province :",
        geoRegion: "Région :",
        geoDistanceTitle: "Distances",
        geoNeighborhoods: "Quartiers et Villages",
        geoAdminCenter: "Centre administratif",
        newsletterTitle: "Restez informé",
        newsletterSubtitle: "Recevez les dernières actualités de la commune directement par email",
        newsletterPlaceholder: "Votre adresse email",
        newsletterBtn: "S'abonner",
        newsletterPrivacy: "Nous respectons votre vie privée. Vous pouvez vous désabonner à tout moment.",
        noPosts: "Aucune publication pour le moment.",
        downloadPdf: "Télécharger le PDF",
        catImportant: "Important",
        catProject: "Projet",
        catAnnouncement: "Annonce",
        catNotice: "Avis",
        catEvent: "Événement",
        catInfo: "Information",
        pageTitle_home: "Commune Rurale de Bni Chegdale - Accueil",
        pageTitle_about: "À propos - Commune Rurale de Bni Chegdale",
        pageTitle_services: "Services - Commune Rurale de Bni Chegdale",
        pageTitle_hours: "Horaires - Commune Rurale de Bni Chegdale",
        pageTitle_admin: "Administration - Commune Rurale de Bni Chegdale",
        pageTitle_news: "Actualités - Commune Rurale de Bni Chegdale",
        pageTitle_contact: "Contact - Commune Rurale de Bni Chegdale",
        pageTitle_adminPanel: "Espace Admin - Commune Rurale de Bni Chegdale",
        hoursDay: "Jour",
        hoursSchedule: "Horaires",
        hoursStatus: "Statut",
        hoursOpen: "Ouvert",
        hoursHalfDay: "Demi-journée",
        hoursNoteLabel: "Note :",
        hoursNoteText: "La pause déjeuner se déroule généralement de 12:00 à 14:00. Certains services peuvent avoir des horaires spécifiques.",
        hoursByServiceDesc: "Horaires spécifiques pour chaque service communal",
        serviceFinance: "Finances",
        hoursReception: "Accueil Général",
        hoursSecretariat: "Secrétariat",
        hoursHolidaysTitle: "Jours Fériés et Fermetures Exceptionnelles",
        hoursHolidaysLead: "La commune est fermée les jours fériés suivants :",
        ctaNeedHelp: "Besoin d'aide ?",
        ctaNeedHelpDesc: "Notre équipe est à votre disposition pour répondre à toutes vos questions",
        ctaMoreInfo: "Besoin de plus d'informations ?",
        ctaMoreInfoDesc: "N'hésitez pas à nous contacter pour toute question concernant nos horaires",
        adminStructureDesc: "Organisation des services et départements",
        adminCouncilDesc: "Représentation démocratique des citoyens",
        adminTeamDesc: "Les responsables des différents services",
        contactSubjectSelect: "Sélectionnez un sujet",
        contactSubjectOther: "Autre",
        contactConsent: "J'accepte que mes données soient utilisées pour répondre à ma demande",
        contactErrName: "Veuillez entrer votre nom.",
        contactErrEmail: "Veuillez entrer une adresse email valide.",
        contactErrSubject: "Veuillez sélectionner un sujet.",
        contactErrMessage: "Veuillez entrer votre message.",
        contactErrConsent: "Vous devez accepter pour continuer.",
        footerTagline: "Au service des citoyens pour un développement local durable et une meilleure qualité de vie.",
        footerDesignedLine: "Conçu avec amour pour les citoyens",
        serviceTaxesTitleLong: "Impôts et Taxes Locales",
        serviceTaxesLead: "Gestion des impôts communaux et redevances",
        serviceTaxesInfo: "Informations",
        brandCommune: "Commune Rurale",
        brandSub: "Bni Chegdale"
    },
    
    ar: {
        // Navigation
        navHome: "الرئيسية",
        navAbout: "من نحن",
        navServices: "الخدمات",
        navHours: "أوقات العمل",
        navAdmin: "الإدارة",
        navNews: "الأخبار",
        navContact: "اتصل بنا",
        
        // Hero Section
        heroTitle: "مرحباً بكم في الجماعة القروية بني شكدال",
        heroSubtitle: "في خدمة المواطنين من أجل تنمية محلية مستدامة",
        btnServices: "خدماتنا",
        btnContact: "اتصل بنا",
        
        // Presentation Section
        presentationTitle: "تقديم الجماعة",
        presentationText: "الجماعة القروية بني شكدال هي جماعة ترابية تقع في إقليم الفقيه بن صالح، جهة بني ملال-خنيفرة، بالمغرب. حسب إحصاء 2014، تضم الجماعة 10,413 نسمة موزعين على 2,355 أسرة.",
        presentationText2: "تمتد جماعتنا على ارتفاع متوسط يبلغ 410 أمتار وتضم عدة أحياء وقرى: الخولوت، خميس بني شكدال (المركز الإداري)، لمجرمة، أولاد أحمد وأولاد سالم. تتمتع الجماعة بمناخ متوسطي يتميز بصيف حار وجاف وشتاء معتدل ورطب.",
        btnLearnMore: "اعرف المزيد",
        welcomeTitle: "رسالة ترحيب",
        welcomeGreeting: "أعزائي المواطنين،",
        welcomeText: "نيابة عن المجلس الجماعي وكل الفريق الإداري، أرحب بكم في الموقع الرسمي للجماعة القروية بني شكدال.",
        welcomeText2: "تم تصميم هذا الموقع لتسهيل وصولكم إلى المعلومات والخدمات الجماعية. نحن في خدمتكم ومتاحون للرد على احتياجاتكم.",
        welcomeClosing: "معاً، نبني مستقبل جماعتنا.",
        
        // Services Section
        servicesTitle: "الوصول السريع إلى الخدمات",
        servicesSubtitle: "ابحث بسرعة عن الخدمات التي تحتاجها",
        serviceCivil: "الحالة المدنية",
        serviceCivilDesc: "شهادات الميلاد والزواج والوفاة والوثائق الرسمية الأخرى",
        serviceUrban: "التخطيط العمراني",
        serviceUrbanDesc: "تراخيص البناء وشهادات التخطيط العمراني",
        serviceTaxes: "الضرائب المحلية",
        serviceTaxesDesc: "الضرائب الجماعية والرسوم المتنوعة",
        serviceSocial: "الشؤون الاجتماعية",
        serviceSocialDesc: "المساعدة الاجتماعية ومرافقة المواطنين",
        btnLearnMoreService: "اعرف المزيد",
        
        // News Section
        newsTitle: "آخر الأخبار",
        newsSubtitle: "ابق على اطلاع بآخر أخبار الجماعة",
        newsImportant: "مهم",
        newsProject: "مشروع",
        newsAnnouncement: "إعلان",
        newsTitle1: "أوقات عمل جديدة",
        newsText1: "تم تحديث أوقات عمل الجماعة لخدمة المواطنين بشكل أفضل.",
        newsTitle2: "مشاريع التنمية",
        newsText2: "اكتشف مشاريع التنمية المحلية الجديدة قيد التنفيذ.",
        newsTitle3: "اجتماع المجلس الجماعي",
        newsText3: "الاجتماع القادم للمجلس الجماعي مقرر الشهر القادم.",
        btnReadMore: "اقرأ المزيد",
        btnAllNews: "عرض جميع الأخبار",
        
        // Footer
        footerTitle: "الجماعة القروية بني شكدال",
        footerDescription: "جماعة قروية تقع في إقليم الفقيه بن صالح، جهة بني ملال-خنيفرة. عدد السكان: 10,413 نسمة (إحصاء 2014).",
        footerQuickLinks: "روابط سريعة",
        footerContact: "اتصل بنا",
        footerRights: "جميع الحقوق محفوظة.",
        footerDesigned: "صمم بـ",
        footerFor: "للمواطنين",
        
        // About Page
        aboutTitle: "حول الجماعة",
        aboutSubtitle: "اكتشف تاريخنا ومهمتنا وقيمنا",
        aboutGeneralTitle: "تقديم عام",
        aboutGeneralText: "الجماعة القروية بني شكدال هي جماعة ترابية تقع في المغرب، ملتزمة بالتنمية المحلية وتحسين الخدمات العامة بشكل مستمر.",
        aboutGeneralText2: "جماعتنا جزء من نظام اللامركزية الإدارية المغربية وتلعب دوراً أساسياً في إدارة الشؤون المحلية والتنمية الاقتصادية والاجتماعية، وكذلك الحفاظ على البيئة.",
        aboutGeneralText3: "نعمل يومياً لتقديم خدمات إدارية عالية الجودة، وتسهيل إجراءات المواطنين وتعزيز التنمية المستدامة لإقليمنا.",
        aboutGeoInfo: "المعلومات الجغرافية",
        aboutLocation: "الموقع :",
        aboutLocationText: "إقليم الفقيه بن صالح، جهة بني ملال-خنيفرة، المغرب",
        aboutPopulation: "عدد السكان :",
        aboutPopulationText: "10,413 نسمة (إحصاء 2014)",
        aboutType: "النوع :",
        aboutTypeText: "جماعة قروية",
        aboutMissionTitle: "مهمة وأدوار الجماعة",
        aboutMissionSubtitle: "مسؤولياتنا والتزاماتنا تجاه المواطنين",
        aboutServiceAdmin: "الخدمات الإدارية",
        aboutServiceAdminText: "تقديم خدمات إدارية فعالة ومتاحة لجميع المواطنين، وتبسيط الإجراءات وتقليل المدد.",
        aboutDevLocal: "التنمية المحلية",
        aboutDevLocalText: "تعزيز التنمية الاقتصادية والاجتماعية للإقليم من خلال دعم المبادرات المحلية وخلق بيئة مواتية للاستثمارات.",
        aboutProximity: "القرب من المواطن",
        aboutProximityText: "الحفاظ على علاقة قرب مع المواطنين، والاستماع إلى احتياجاتهم وتحسين جودة الحياة المحلية بشكل مستمر.",
        aboutTransparency: "الشفافية",
        aboutTransparencyText: "ضمان الشفافية في إدارة الشؤون العامة وإعلام المواطنين بالقرارات والمشاريع الجماعية.",
        aboutEnvironment: "البيئة",
        aboutEnvironmentText: "حماية البيئة وتعزيز التنمية المستدامة من خلال المشاريع البيئية والمبادرات الخضراء.",
        aboutSolidarity: "التضامن",
        aboutSolidarityText: "تعزيز التماسك الاجتماعي والتضامن بين المواطنين، خاصة تجاه الأشخاص الضعفاء والأسر المحتاجة.",
        aboutValuesTitle: "قيمنا",
        aboutValuesSubtitle: "المبادئ التي توجه عملنا اليومي",
        aboutIntegrity: "النزاهة",
        aboutIntegrityText: "التصرف بشرف وأخلاق في جميع أعمالنا.",
        aboutEfficiency: "الكفاءة",
        aboutEfficiencyText: "تحسين عملياتنا لتقديم خدمة عالية الجودة.",
        aboutAccessibility: "إمكانية الوصول",
        aboutAccessibilityText: "جعل خدماتنا متاحة لجميع المواطنين.",
        aboutInnovation: "الابتكار",
        aboutInnovationText: "اعتماد أفضل الممارسات والتقنيات.",
        
        // Services Page
        servicesPageTitle: "الخدمات الجماعية",
        servicesPageSubtitle: "اكتشف جميع الخدمات المتاحة للمواطنين",
        serviceCivilTitle: "الحالة المدنية",
        serviceCivilSubtitle: "خدمات الحالة المدنية والوثائق الرسمية",
        serviceCivilAvailable: "الخدمات المتاحة",
        serviceCivilDocs: "الوثائق المطلوبة",
        serviceUrbanTitle: "التخطيط العمراني",
        serviceUrbanSubtitle: "تراخيص وشهادات التخطيط العمراني",
        serviceUrbanAvailable: "الخدمات المتاحة",
        serviceUrbanDocs: "الوثائق المطلوبة",
        serviceTaxesTitle: "الضرائب المحلية",
        serviceTaxesSubtitle: "الضرائب والرسوم الجماعية",
        serviceTaxesAvailable: "الخدمات المتاحة",
        serviceTaxesDocs: "الوثائق المطلوبة",
        serviceSocialTitle: "الشؤون الاجتماعية",
        serviceSocialSubtitle: "المساعدة الاجتماعية والمرافقة",
        serviceSocialAvailable: "الخدمات المتاحة",
        serviceSocialDocs: "الوثائق المطلوبة",
        
        // Hours Page
        hoursTitle: "أوقات العمل",
        hoursSubtitle: "اطلع على أوقات عمل الجماعة وخدماتها",
        hoursGeneral: "الأوقات العامة",
        hoursMonday: "الإثنين",
        hoursTuesday: "الثلاثاء",
        hoursWednesday: "الأربعاء",
        hoursThursday: "الخميس",
        hoursFriday: "الجمعة",
        hoursSaturday: "السبت",
        hoursSunday: "الأحد",
        hoursClosed: "مغلق",
        hoursByService: "الأوقات حسب الخدمة",
        
        // Administration Page
        adminTitle: "الإدارة",
        adminSubtitle: "اكتشف الفريق الإداري والمجلس الجماعي",
        adminStructure: "الهيكل الإداري",
        adminCouncil: "المجلس الجماعي",
        adminTeam: "فريق الإدارة",
        
        // News Page
        newsPageTitle: "الأخبار",
        newsPageSubtitle: "ابق على اطلاع بآخر الأخبار والأحداث",
        
        // Contact Page
        contactTitle: "اتصل بنا",
        contactSubtitle: "نحن في خدمتكم للرد على استفساراتكم",
        contactAddress: "العنوان",
        contactPhone: "الهاتف",
        contactEmail: "البريد الإلكتروني",
        contactFormTitle: "نموذج الاتصال",
        contactName: "الاسم الكامل",
        contactEmailField: "البريد الإلكتروني",
        contactPhoneField: "الهاتف",
        contactSubject: "الموضوع",
        contactMessage: "الرسالة",
        contactSend: "إرسال الرسالة",
        contactSuccess: "تم إرسال رسالتك بنجاح! سنرد عليك في أقرب وقت ممكن.",
        contactError: "حدث خطأ. يرجى المحاولة مرة أخرى لاحقاً.",
        contactByService: "الاتصال حسب الخدمة",
        contactLocation: "الموقع",
        langName: "العربية",
        geoPopulation: "السكان",
        geoInhabitants: "نسمة (2014)",
        geoHouseholds: "أسرة",
        geoLocationTitle: "الموقع",
        geoAltitude: "الارتفاع المتوسط:",
        geoProvince: "الإقليم:",
        geoRegion: "الجهة:",
        geoDistanceTitle: "المسافات",
        geoNeighborhoods: "الأحياء والقرى",
        geoAdminCenter: "المركز الإداري",
        newsletterTitle: "ابق على اطلاع",
        newsletterSubtitle: "تلقَّ آخر أخبار الجماعة مباشرة عبر البريد الإلكتروني",
        newsletterPlaceholder: "بريدك الإلكتروني",
        newsletterBtn: "اشتراك",
        newsletterPrivacy: "نحترم خصوصيتك. يمكنك إلغاء الاشتراك في أي وقت.",
        noPosts: "لا توجد منشورات حالياً.",
        downloadPdf: "تحميل PDF",
        catImportant: "مهم",
        catProject: "مشروع",
        catAnnouncement: "إعلان",
        catNotice: "تنبيه",
        catEvent: "حدث",
        catInfo: "معلومة",
        pageTitle_home: "الجماعة القروية بني شكدال - الرئيسية",
        pageTitle_about: "من نحن - الجماعة القروية بني شكدال",
        pageTitle_services: "الخدمات - الجماعة القروية بني شكدال",
        pageTitle_hours: "أوقات العمل - الجماعة القروية بني شكدال",
        pageTitle_admin: "الإدارة - الجماعة القروية بني شكدال",
        pageTitle_news: "الأخبار - الجماعة القروية بني شكدال",
        pageTitle_contact: "اتصل بنا - الجماعة القروية بني شكدال",
        pageTitle_adminPanel: "لوحة الإدارة - الجماعة القروية بني شكدال",
        hoursDay: "اليوم",
        hoursSchedule: "الأوقات",
        hoursStatus: "الحالة",
        hoursOpen: "مفتوح",
        hoursHalfDay: "نصف يوم",
        hoursNoteLabel: "ملاحظة:",
        hoursNoteText: "استراحة الغداء عادة من 12:00 إلى 14:00. قد تختلف أوقات بعض المصالح.",
        hoursByServiceDesc: "أوقات خاصة بكل مصلحة جماعية",
        serviceFinance: "المالية",
        hoursReception: "الاستقبال العام",
        hoursSecretariat: "الكتابة العامة",
        hoursHolidaysTitle: "أيام العطل والأعياد",
        hoursHolidaysLead: "تغلق الجماعة في الأيام التالية:",
        ctaNeedHelp: "تحتاج مساعدة؟",
        ctaNeedHelpDesc: "فريقنا رهن إشارتكم للإجابة على جميع استفساراتكم",
        ctaMoreInfo: "تحتاج مزيداً من المعلومات؟",
        ctaMoreInfoDesc: "لا تترددوا في الاتصال بنا بخصوص أوقات العمل",
        adminStructureDesc: "تنظيم المصالح والأقسام",
        adminCouncilDesc: "تمثيل ديمقراطي للمواطنين",
        adminTeamDesc: "مسؤولو المصالح المختلفة",
        contactSubjectSelect: "اختر الموضوع",
        contactSubjectOther: "أخرى",
        contactConsent: "أوافق على استخدام بياناتي للرد على طلبي",
        contactErrName: "يرجى إدخال اسمكم.",
        contactErrEmail: "يرجى إدخال بريد إلكتروني صالح.",
        contactErrSubject: "يرجى اختيار الموضوع.",
        contactErrMessage: "يرجى إدخال الرسالة.",
        contactErrConsent: "يجب الموافقة للمتابعة.",
        footerTagline: "في خدمة المواطنين من أجل تنمية محلية مستدامة وجودة حياة أفضل.",
        footerDesignedLine: "صُمم بحب للمواطنين",
        serviceTaxesTitleLong: "الضرائب والرسوم المحلية",
        serviceTaxesLead: "إدارة الضرائب والرسوم الجماعية",
        serviceTaxesInfo: "معلومات",
        brandCommune: "الجماعة القروية",
        brandSub: "بني شكدال"
    },
    
    en: {
        // Navigation
        navHome: "Home",
        navAbout: "About",
        navServices: "Services",
        navHours: "Hours",
        navAdmin: "Administration",
        navNews: "News",
        navContact: "Contact",
        
        // Hero Section
        heroTitle: "Welcome to the Rural Commune of Bni Chegdale",
        heroSubtitle: "Serving citizens for sustainable local development",
        btnServices: "Our Services",
        btnContact: "Contact Us",
        
        // Presentation Section
        presentationTitle: "About the Commune",
        presentationText: "The Rural Commune of Bni Chegdale is a territorial community located in the province of Fquih Ben Salah, Béni Mellal-Khénifra region, Morocco. According to the 2014 census, the commune has 10,413 inhabitants distributed across 2,355 households.",
        presentationText2: "Our commune extends over an average altitude of 410 meters and includes several neighborhoods and villages: Al Khouloute, Khmis Bni Chegdale (administrative center), Lamjarema, Oulad Ahmed and Ouled Salem. The commune benefits from a Mediterranean climate characterized by hot, dry summers and mild, humid winters.",
        btnLearnMore: "Learn More",
        welcomeTitle: "Welcome Message",
        welcomeGreeting: "Dear citizens,",
        welcomeText: "On behalf of the Municipal Council and the entire administrative team, I welcome you to the official website of the Rural Commune of Bni Chegdale.",
        welcomeText2: "This website has been designed to facilitate your access to municipal information and services. We are at your service and remain available to respond to your needs.",
        welcomeClosing: "Together, let's build the future of our commune.",
        
        // Services Section
        servicesTitle: "Quick Access to Services",
        servicesSubtitle: "Quickly find the services you need",
        serviceCivil: "Civil Status",
        serviceCivilDesc: "Birth, marriage, death certificates and other official documents",
        serviceUrban: "Urban Planning",
        serviceUrbanDesc: "Building permits and urban planning certificates",
        serviceTaxes: "Local Taxes",
        serviceTaxesDesc: "Municipal taxes and various fees",
        serviceSocial: "Social Affairs",
        serviceSocialDesc: "Social assistance and citizen support",
        btnLearnMoreService: "Learn More",
        
        // News Section
        newsTitle: "Recent News",
        newsSubtitle: "Stay informed about the latest commune news",
        newsImportant: "Important",
        newsProject: "Project",
        newsAnnouncement: "Announcement",
        newsTitle1: "New opening hours",
        newsText1: "The commune's hours have been updated to better serve citizens.",
        newsTitle2: "Development projects",
        newsText2: "Discover the new local development projects underway.",
        newsTitle3: "Municipal council meeting",
        newsText3: "Next municipal council meeting scheduled for next month.",
        btnReadMore: "Read More",
        btnAllNews: "View All News",
        
        // Footer
        footerTitle: "Rural Commune of Bni Chegdale",
        footerDescription: "Rural commune located in the province of Fquih Ben Salah, Béni Mellal-Khénifra region. Population: 10,413 inhabitants (2014 census).",
        footerQuickLinks: "Quick Links",
        footerContact: "Contact",
        footerRights: "All rights reserved.",
        footerDesigned: "Designed with",
        footerFor: "for citizens",
        
        // About Page
        aboutTitle: "About the Commune",
        aboutSubtitle: "Discover our history, mission and values",
        aboutGeneralTitle: "General Presentation",
        aboutGeneralText: "The Rural Commune of Bni Chegdale is a territorial community located in Morocco, committed to local development and continuous improvement of public services.",
        aboutGeneralText2: "Our commune is part of the Moroccan administrative decentralization system and plays an essential role in managing local affairs, economic and social development, as well as environmental preservation.",
        aboutGeneralText3: "We work daily to provide quality administrative services, facilitate citizen procedures and promote sustainable development of our territory.",
        aboutGeoInfo: "Geographic Information",
        aboutLocation: "Location:",
        aboutLocationText: "Province of Fquih Ben Salah, Béni Mellal-Khénifra Region, Morocco",
        aboutPopulation: "Population:",
        aboutPopulationText: "10,413 inhabitants (2014 census)",
        aboutType: "Type:",
        aboutTypeText: "Rural commune",
        aboutMissionTitle: "Mission and Roles of the Commune",
        aboutMissionSubtitle: "Our responsibilities and commitments to citizens",
        aboutServiceAdmin: "Administrative Services",
        aboutServiceAdminText: "Provide effective and accessible administrative services to all citizens, simplifying procedures and reducing delays.",
        aboutDevLocal: "Local Development",
        aboutDevLocalText: "Promote economic and social development of the territory by supporting local initiatives and creating a favorable environment for investments.",
        aboutProximity: "Citizen Proximity",
        aboutProximityText: "Maintain a close relationship with citizens, listen to their needs and continuously improve local quality of life.",
        aboutTransparency: "Transparency",
        aboutTransparencyText: "Ensure transparency in public affairs management and inform citizens about municipal decisions and projects.",
        aboutEnvironment: "Environment",
        aboutEnvironmentText: "Protect the environment and promote sustainable development through ecological projects and green initiatives.",
        aboutSolidarity: "Solidarity",
        aboutSolidarityText: "Strengthen social cohesion and solidarity among citizens, especially towards vulnerable people and families in difficulty.",
        aboutValuesTitle: "Our Values",
        aboutValuesSubtitle: "The principles that guide our daily action",
        aboutIntegrity: "Integrity",
        aboutIntegrityText: "Act with honesty and ethics in all our actions.",
        aboutEfficiency: "Efficiency",
        aboutEfficiencyText: "Optimize our processes for quality service.",
        aboutAccessibility: "Accessibility",
        aboutAccessibilityText: "Make our services accessible to all citizens.",
        aboutInnovation: "Innovation",
        aboutInnovationText: "Adopt best practices and technologies.",
        
        // Services Page
        servicesPageTitle: "Municipal Services",
        servicesPageSubtitle: "Discover all services available to citizens",
        serviceCivilTitle: "Civil Status",
        serviceCivilSubtitle: "Civil status services and official documents",
        serviceCivilAvailable: "Available Services",
        serviceCivilDocs: "Required Documents",
        serviceUrbanTitle: "Urban Planning",
        serviceUrbanSubtitle: "Building permits and urban planning certificates",
        serviceUrbanAvailable: "Available Services",
        serviceUrbanDocs: "Required Documents",
        serviceTaxesTitle: "Local Taxes",
        serviceTaxesSubtitle: "Municipal taxes and fees",
        serviceTaxesAvailable: "Available Services",
        serviceTaxesDocs: "Required Documents",
        serviceSocialTitle: "Social Affairs",
        serviceSocialSubtitle: "Social assistance and support",
        serviceSocialAvailable: "Available Services",
        serviceSocialDocs: "Required Documents",
        
        // Hours Page
        hoursTitle: "Opening Hours",
        hoursSubtitle: "Check the commune and service hours",
        hoursGeneral: "General Hours",
        hoursMonday: "Monday",
        hoursTuesday: "Tuesday",
        hoursWednesday: "Wednesday",
        hoursThursday: "Thursday",
        hoursFriday: "Friday",
        hoursSaturday: "Saturday",
        hoursSunday: "Sunday",
        hoursClosed: "Closed",
        hoursByService: "Hours by Service",
        
        // Administration Page
        adminTitle: "Administration",
        adminSubtitle: "Discover the administrative team and municipal council",
        adminStructure: "Administrative Structure",
        adminCouncil: "Municipal Council",
        adminTeam: "Management Team",
        
        // News Page
        newsPageTitle: "News",
        newsPageSubtitle: "Stay informed about the latest news and events",
        
        // Contact Page
        contactTitle: "Contact Us",
        contactSubtitle: "We are here to answer your questions",
        contactAddress: "Address",
        contactPhone: "Phone",
        contactEmail: "Email",
        contactFormTitle: "Contact Form",
        contactName: "Full Name",
        contactEmailField: "Email",
        contactPhoneField: "Phone",
        contactSubject: "Subject",
        contactMessage: "Message",
        contactSend: "Send Message",
        contactSuccess: "Your message has been sent successfully! We will respond as soon as possible.",
        contactError: "An error occurred. Please try again later.",
        contactByService: "Contact by Service",
        contactLocation: "Location",
        langName: "English",
        geoPopulation: "Population",
        geoInhabitants: "inhabitants (2014)",
        geoHouseholds: "households",
        geoLocationTitle: "Location",
        geoAltitude: "Average altitude:",
        geoProvince: "Province:",
        geoRegion: "Region:",
        geoDistanceTitle: "Distances",
        geoNeighborhoods: "Neighborhoods and Villages",
        geoAdminCenter: "Administrative center",
        newsletterTitle: "Stay informed",
        newsletterSubtitle: "Receive the latest commune news directly by email",
        newsletterPlaceholder: "Your email address",
        newsletterBtn: "Subscribe",
        newsletterPrivacy: "We respect your privacy. You can unsubscribe at any time.",
        noPosts: "No posts yet.",
        downloadPdf: "Download PDF",
        catImportant: "Important",
        catProject: "Project",
        catAnnouncement: "Announcement",
        catNotice: "Notice",
        catEvent: "Event",
        catInfo: "Information",
        pageTitle_home: "Rural Commune of Bni Chegdale - Home",
        pageTitle_about: "About - Rural Commune of Bni Chegdale",
        pageTitle_services: "Services - Rural Commune of Bni Chegdale",
        pageTitle_hours: "Hours - Rural Commune of Bni Chegdale",
        pageTitle_admin: "Administration - Rural Commune of Bni Chegdale",
        pageTitle_news: "News - Rural Commune of Bni Chegdale",
        pageTitle_contact: "Contact - Rural Commune of Bni Chegdale",
        pageTitle_adminPanel: "Admin Panel - Rural Commune of Bni Chegdale",
        hoursDay: "Day",
        hoursSchedule: "Hours",
        hoursStatus: "Status",
        hoursOpen: "Open",
        hoursHalfDay: "Half day",
        hoursNoteLabel: "Note:",
        hoursNoteText: "Lunch break is usually from 12:00 to 14:00. Some services may have specific hours.",
        hoursByServiceDesc: "Specific hours for each municipal service",
        serviceFinance: "Finance",
        hoursReception: "General Reception",
        hoursSecretariat: "Secretariat",
        hoursHolidaysTitle: "Public Holidays and Exceptional Closures",
        hoursHolidaysLead: "The commune is closed on the following holidays:",
        ctaNeedHelp: "Need help?",
        ctaNeedHelpDesc: "Our team is available to answer all your questions",
        ctaMoreInfo: "Need more information?",
        ctaMoreInfoDesc: "Feel free to contact us with any questions about our hours",
        adminStructureDesc: "Organization of services and departments",
        adminCouncilDesc: "Democratic representation of citizens",
        adminTeamDesc: "Heads of the various services",
        contactSubjectSelect: "Select a subject",
        contactSubjectOther: "Other",
        contactConsent: "I agree that my data may be used to respond to my request",
        contactErrName: "Please enter your name.",
        contactErrEmail: "Please enter a valid email address.",
        contactErrSubject: "Please select a subject.",
        contactErrMessage: "Please enter your message.",
        contactErrConsent: "You must accept to continue.",
        footerTagline: "Serving citizens for sustainable local development and a better quality of life.",
        footerDesignedLine: "Designed with care for citizens",
        serviceTaxesTitleLong: "Local Taxes and Fees",
        serviceTaxesLead: "Management of municipal taxes and fees",
        serviceTaxesInfo: "Information",
        brandCommune: "Rural Commune",
        brandSub: "Bni Chegdale"
    }
};

const DEFAULT_LANG = 'ar';
const LANG_LABELS = { ar: 'العربية', fr: 'Français', en: 'English' };

function getTranslation(lang, key) {
    const dict = translations[lang] || translations[DEFAULT_LANG];
    return dict[key] || translations[DEFAULT_LANG][key] || translations.fr[key] || key;
}

// Language Manager Class
class LanguageManager {
    constructor() {
        const saved = localStorage.getItem('selectedLanguage');
        this.currentLang = translations[saved] ? saved : DEFAULT_LANG;
        this.init();
    }
    
    init() {
        this.setLanguage(this.currentLang);
        this.createLanguageSwitcher();
    }
    
    setLanguage(lang) {
        if (!translations[lang]) {
            lang = DEFAULT_LANG;
        }
        
        this.currentLang = lang;
        localStorage.setItem('selectedLanguage', lang);
        
        document.documentElement.lang = lang;
        
        if (lang === 'ar') {
            document.documentElement.dir = 'rtl';
            document.body.classList.add('rtl');
        } else {
            document.documentElement.dir = 'ltr';
            document.body.classList.remove('rtl');
        }
        
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            const text = getTranslation(lang, key);
            if (!text || text === key) return;

            if (element.tagName === 'INPUT' && (element.type === 'submit' || element.type === 'button')) {
                element.value = text;
            } else if (element.tagName === 'OPTION') {
                element.textContent = text;
            } else if (element.hasAttribute('data-translate-placeholder') || (element.hasAttribute('placeholder') && element.tagName === 'INPUT')) {
                element.placeholder = text;
            } else if (element.tagName === 'LABEL' && element.querySelector('.text-danger')) {
                const star = element.querySelector('.text-danger').outerHTML;
                element.innerHTML = text + ' ' + star;
            } else if (element.classList.contains('alert') && element.querySelector('[data-translate]')) {
                return;
            } else {
                element.textContent = text;
            }
        });
        
        const pageId = document.body.getAttribute('data-page');
        if (pageId) {
            const titleKey = 'pageTitle_' + pageId;
            const titleEl = document.querySelector('title');
            const pageTitle = getTranslation(lang, titleKey);
            if (titleEl && pageTitle && pageTitle !== titleKey) {
                titleEl.textContent = pageTitle;
            }
        }
        
        this.updateLanguageSwitcherUI();
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    }
    
    updateLanguageSwitcherUI() {
        const switcher = document.getElementById('languageSwitcher');
        if (!switcher) return;

        switcher.querySelectorAll('[data-lang]').forEach(item => {
            item.classList.toggle('active', item.getAttribute('data-lang') === this.currentLang);
        });

        const langNameSpan = switcher.querySelector('[data-translate="langName"]');
        if (langNameSpan) {
            langNameSpan.textContent = LANG_LABELS[this.currentLang];
        }

        const menu = switcher.querySelector('.dropdown-menu');
        if (menu) {
            menu.classList.toggle('dropdown-menu-end', this.currentLang !== 'ar');
            menu.classList.toggle('dropdown-menu-start', this.currentLang === 'ar');
        }
    }
    
    createLanguageSwitcher() {
        if (document.getElementById('languageSwitcher')) {
            this.updateLanguageSwitcherUI();
            return;
        }
        
        const navbarNav = document.querySelector('.navbar-nav');
        if (!navbarNav) return;
        
        const langSwitcher = document.createElement('li');
        langSwitcher.className = 'nav-item dropdown';
        langSwitcher.id = 'languageSwitcher';
        
        langSwitcher.innerHTML = `
            <a class="nav-link dropdown-toggle" href="#" id="languageDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-globe me-1"></i><span data-translate="langName">${LANG_LABELS[this.currentLang]}</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdown">
                <li>
                    <a class="dropdown-item ${this.currentLang === 'ar' ? 'active' : ''}" href="#" data-lang="ar">
                        <span class="me-2">🇲🇦</span>العربية <small class="text-muted">(رسمي)</small>
                    </a>
                </li>
                <li>
                    <a class="dropdown-item ${this.currentLang === 'fr' ? 'active' : ''}" href="#" data-lang="fr">
                        <span class="me-2">🇫🇷</span>Français
                    </a>
                </li>
                <li>
                    <a class="dropdown-item ${this.currentLang === 'en' ? 'active' : ''}" href="#" data-lang="en">
                        <span class="me-2">🇬🇧</span>English
                    </a>
                </li>
            </ul>
        `;
        
        navbarNav.appendChild(langSwitcher);
        
        langSwitcher.querySelectorAll('[data-lang]').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                this.setLanguage(e.currentTarget.getAttribute('data-lang'));
            });
        });
    }
    
    getCurrentLanguage() {
        return this.currentLang;
    }
    
    translate(key) {
        return getTranslation(this.currentLang, key);
    }
}

window.getTranslation = getTranslation;
window.translations = translations;

// Initialize language manager when DOM is ready
let languageManager;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        languageManager = new LanguageManager();
    });
} else {
    languageManager = new LanguageManager();
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LanguageManager;
}

