/**
 * Applies core es/pt translations for homepage, seo, trading, tools, and common locales.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const LOCALES_DIR = join(process.cwd(), 'src', 'locales')
const LOCALES = ['es', 'pt']

function deepMerge(target, patch) {
  for (const [key, value] of Object.entries(patch)) {
    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      if (!target[key] || typeof target[key] !== 'object') target[key] = {}
      deepMerge(target[key], value)
    } else {
      target[key] = value
    }
  }
  return target
}

function applyPatch(locale, file, patch) {
  const filePath = join(LOCALES_DIR, locale, file)
  const data = JSON.parse(readFileSync(filePath, 'utf8'))
  deepMerge(data, patch)
  writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`)
  console.log(`  ✓ ${locale}/${file}`)
}

const PATCHES = {
  es: {
    homepage: {
      banner: {
        title: 'Su camino hacia el trading rentable comienza aquí',
        description:
          'WINPROFX es un bróker de reconocimiento global que ofrece spreads ajustados, retiros ultrarrápidos, más de 300 instrumentos negociables y ejecución a nanosegundos al alcance de su mano.',
        badge: 'Invierta con el mejor bróker Forex 2026',
        stats: {
          evolving: { title: 'Evolucionando', description: 'en el mercado' },
          awards: { count: 40, suffix: '+', description: 'Premios' },
          countries: { count: 105, suffix: '+', description: 'Países atendidos' },
          instruments: { count: 300, suffix: '+', description: 'Instrumentos de trading' },
        },
      },
      tradingStarts: {
        title: 'Su camino hacia el <br /> trading comienza aquí con nosotros',
        steps: {
          openAccount: {
            title: 'Abra una cuenta',
            description: 'Haga clic en el botón de arriba y siga unos sencillos pasos.',
          },
          makeDeposit: {
            title: 'Realice un depósito',
            description: 'Consejo: los depósitos y retiros en USDT son los más rápidos.',
          },
          startTrading: {
            title: 'Comience a operar',
            description: 'Todo profesional empezó desde cero; comience a operar ahora.',
          },
        },
      },
      benefitsTrading: {
        title: 'Beneficios de operar con nosotros',
        description:
          'Descubra un trading fluido donde la transparencia y la tecnología avanzada se unen para impulsar su éxito financiero.',
        items: {
          withdrawals: {
            meta: 'Retiro cripto en',
            title: '30 minutos',
            description: 'Disfrute de flexibilidad financiera con nuestra garantía de retiro en 30 minutos.',
          },
          tradeDaily: {
            meta: 'Opere a diario',
            title: 'Gane recompensas',
            description: 'Operaciones diarias, victorias diarias: impulse su éxito en cada movimiento del mercado.',
          },
          clientSupport: {
            meta: 'Premiado',
            title: 'Atención al cliente',
            description: '¡Ofrecemos un servicio de excelencia incomparable!',
          },
          negativeBalance: {
            meta: 'Protección contra',
            title: 'saldo negativo',
            description: 'Opere con confianza gracias a la protección integrada contra saldo negativo.',
          },
        },
      },
      platform: {
        meta: 'PLATAFORMA DE TRADING',
        title: 'Descargue MT5 para móvil',
        description:
          'WINPROFX ha expandido con éxito su presencia en todo el mundo. MT5 ya está disponible en Android e iPhone, un paso más hacia el éxito. Descargue MT5 ahora y acceda a oportunidades de trading ilimitadas.',
      },
      whatTrade: {
        title: '¿Qué puede operar?',
        description:
          'Descubra un trading fluido donde la transparencia y la tecnología avanzada se unen para impulsar su éxito financiero.',
        items: {
          crypto: {
            title: 'Crypto',
            description:
              'Las criptomonedas, también conocidas como monedas digitales, son instrumentos de inversión de rápido crecimiento y',
          },
          metals: {
            title: 'Metales',
            description:
              'El trading al contado de metales ocupa un lugar especial para todo trader. Los metales han atraído a operadores de',
          },
          commodities: {
            title: 'Materias primas',
            description:
              'Invertir en materias primas puede ofrecer diversificación y cobertura frente a',
          },
          forex: {
            title: 'Forex',
            description:
              'Forex, o mercado de divisas, es un mercado global donde se negocian las monedas del mundo. Amplia',
          },
          indices: {
            title: 'Índices',
            description:
              'Los índices miden el rendimiento del precio de un grupo de acciones en una bolsa.',
          },
          oil: {
            title: 'Petróleo',
            description:
              'Los futuros energéticos son contratos para comprar o vender combustibles fósiles o productos relacionados a una fecha y precio determinados.',
          },
        },
        imageAlt: 'Trading de {{market}} con WINPROFX',
      },
      about: {
        meta: 'SOBRE WINPROFX',
        heading:
          "<strong class='font-normal text-white'>En WINPROFX ofrecemos una plataforma de trading en línea segura </strong> que impulsa la sostenibilidad mediante experiencia, conocimiento del mercado y alianzas de confianza.",
        features: {
          platform: 'La mejor plataforma para todo tipo de traders: principiantes, intermedios o profesionales.',
          orderManagement: 'Herramientas avanzadas de gestión de órdenes.',
          indicators: 'Más indicadores técnicos nativos.',
          customize: 'Configure y personalice fácilmente su entorno de trading',
        },
      },
      award: {
        title: 'WINPROFX: bróker con excelencia galardonada',
        description:
          'La industria global del forex ha reconocido los logros de WINPROFX, otorgándonos los máximos galardones por nuestros productos y servicios excepcionales.',
        items: {
          bestForexBroker2025: 'Mejor bróker Forex 2025',
          globalForexBroker2025: 'Bróker Forex global del año 2025',
          topStpBroker2025: 'Mejor bróker STP 2025',
          bestDepositWithdrawal2024: 'Mejor bróker en depósitos y retiros 2024',
        },
      },
      news: {
        title: 'Noticias e insights',
        description:
          'Manténgase informado con nuestras actualizaciones de mercado y análisis de expertos para tomar decisiones financieras fundamentadas.',
        paymentFlow: {
          title: 'Flujo de fondos sin fricciones: depósitos ágiles y retiros fluidos',
          description:
            'Disfrute de agilidad financiera con procesos de depósito y retiro sencillos, rápidos y convenientes.',
        },
        blog: {
          tradeToWin: {
            title: 'Trade to WIN',
            description: 'Opere más y gane premios GARANTIZADOS. Cuanto más opere, mejor será el premio.',
            promotionDates: 'Fechas de la promoción: 1 de enero de 2026 al 31 de mayo de 2026',
          },
          technicalAnalysis: {
            title: 'Herramienta gratuita de análisis técnico',
            description:
              'Identifique patrones gráficos, analice las condiciones del mercado y supervise los mercados las 24 horas con un solo clic.',
            poweredBy: 'Con tecnología de',
          },
          learnMore: 'Más información',
        },
      },
      demoCta: {
        title: 'Domine el trading: desarrolle sus habilidades con la experiencia demo de WINPROFX',
        description:
          'Inicie su camino con una cuenta demo MT5 gratuita de 21 días. Descubra el potencial de nuestra plataforma galardonada de estrategias Forex sin riesgo: regístrese ahora y explore el trading de precisión.',
        button: 'Probar demo de la plataforma MT5',
      },
    },
    seo: {
      home: {
        title: 'Sitio web oficial de WINPROFX | Servicios de trading Forex y CFD',
        description:
          'WINPROFX es una marca de trading forex y CFD que ofrece acceso a plataformas, servicios de cuenta, herramientas para socios y soporte relacionado con el trading.',
        keywords:
          'WINPROFX, trading forex, trading CFD, MetaTrader 5, sitio web oficial WINPROFX, verificación de empresa, trust center',
        pageName: 'Sitio web oficial de WINPROFX',
      },
      forex: {
        title: 'Trading Forex | WINPROFX',
        description:
          'Explore información del mercado forex y servicios de trading en WINPROFX, incluido acceso a plataformas, tipos de cuenta y detalles de riesgo importantes.',
        keywords:
          'Plataforma de trading Forex, soluciones de mercado Forex, servicios de trading Forex, herramientas de trading Forex, trading Forex online, estrategias de trading Forex, trading Forex para principiantes, trading Forex avanzado, servicios Forex WINPROFX',
      },
      indices: {
        title: 'Trading de índices | WINPROFX',
        description:
          'Explore el trading de CFD sobre índices en WINPROFX con acceso a MT5, opciones de cuenta e información de riesgo importante.',
      },
      crypto: {
        title: 'Trading de CFD sobre cripto | WINPROFX',
        description:
          'Explore el trading de CFD sobre criptomonedas en WINPROFX con acceso a MT5, opciones de cuenta e información de riesgo importante.',
      },
      metals: {
        title: 'Trading de oro y metales | WINPROFX',
        description:
          'Opere CFD sobre oro y metales en WINPROFX con acceso a MT5, opciones de cuenta e información de riesgo importante.',
      },
      commodities: {
        title: 'Trading de materias primas | WINPROFX',
        description:
          'Explore el trading de CFD sobre materias primas en WINPROFX con acceso a MT5, opciones de cuenta e información de riesgo importante.',
      },
      oil: {
        title: 'Trading de petróleo | WINPROFX',
        description:
          'Explore el trading de CFD sobre petróleo y crudo en WINPROFX con acceso a MT5, opciones de cuenta e información de riesgo importante.',
      },
      winPromotion: {
        title: 'Promoción Win | WINPROFX',
        description:
          'Participe en la promoción exclusiva Win de WINPROFX. Opere más y obtenga más recompensas con nuestro programa por niveles para traders activos.',
      },
      tradeToWin: {
        title: 'Trade to Win | WINPROFX',
        description:
          'Alcance volúmenes de trading específicos en 30 días y desbloquee recompensas exclusivas de Apple: Power Bank, AirPods, Apple Watch, iPad e iPhone.',
      },
      introducingBroker: {
        title: 'Introducing Broker | WINPROFX',
        description:
          'Conozca el programa de socios de WINPROFX, las herramientas para introducing brokers, el acceso al portal de socios y los servicios de soporte relacionados.',
      },
      platform: {
        title: 'Plataforma de trading MT5 | WINPROFX',
        description:
          'Conozca el acceso a la plataforma de trading de WINPROFX, herramientas para clientes, servicios de cuenta y funciones de soporte relacionadas con el trading.',
      },
      accounts: {
        title: 'Cuentas de trading | WINPROFX',
        description:
          'Explore información sobre cuentas de trading de WINPROFX, opciones de acceso, servicios relacionados con la plataforma y detalles de riesgo importantes.',
      },
      aboutUs: {
        title: 'Sobre nosotros | WINPROFX',
        description:
          'Conozca WINPROFX, referente en trading forex, con plataformas avanzadas y soporte integral para traders de todo el mundo. ¡Haga clic para saber más!',
      },
      about: {
        title: 'Sobre WINPROFX',
        description:
          'Conozca WINPROFX, sus servicios de trading forex y CFD, sitios web oficiales, portal de clientes, portal de socios y advertencia de riesgo.',
      },
      blog: {
        title: 'Blog | Noticias e insights | WINPROFX',
        description:
          'Manténgase informado con las últimas noticias financieras en WINPROFX. Nuestro blog ofrece actualizaciones oportunas y análisis experto sobre forex, cripto, metales y más.',
      },
      analytics: {
        title: 'Analítica | WINPROFX',
        description:
          'Optimice su trading con las herramientas analíticas de WINPROFX. Use noticias en tiempo real, calendarios económicos y señales esenciales de Trading Central.',
      },
      economicCalendar: {
        title: 'Calendario económico | WINPROFX',
        description:
          'Manténgase al día con el calendario económico de WINPROFX. Siga eventos clave como anuncios de PIB y cambios de tipos de interés para mejorar su estrategia.',
      },
      currencyCalculator: {
        title: 'Calculadora de divisas | WINPROFX',
        description:
          'Agilice sus cálculos de trading con la calculadora de divisas de WINPROFX. Gestione operaciones y comprenda costes como margen y valor de pip. ¡Calcule ahora!',
      },
      currencyConverter: {
        title: 'Conversor de divisas | WINPROFX',
        description:
          'Convierta divisas al instante con el conversor preciso y en tiempo real de WINPROFX. Calcule tipos de cambio para todas las monedas con facilidad.',
      },
      policy: {
        title: 'Política de privacidad | WINPROFX',
        description:
          'Lea la política de privacidad de WINPROFX para entender cómo se recopila, utiliza, protege y gestiona la información en los sitios y portales de WINPROFX.',
      },
      terms: {
        title: 'Términos y condiciones | WINPROFX',
        description:
          'Lea los términos y condiciones de WINPROFX sobre uso del sitio web, responsabilidades del cliente, servicios de trading y condiciones legales importantes.',
      },
      amlPolicy: {
        title: 'Política AML | WINPROFX',
        description:
          'Lea la política AML de WINPROFX sobre prevención de blanqueo de capitales, verificación, cumplimiento normativo e información relacionada.',
      },
      depositWithdraw: {
        title: 'Política de depósitos y retiros | WINPROFX',
        description:
          'Conozca la política de depósitos y retiros de WINPROFX para transacciones seguras. Consulte procedimientos y condiciones para gestionar sus fondos con eficiencia.',
      },
      restrictedCountries: {
        title: 'Países restringidos | WINPROFX',
        description:
          'Consulte la lista de países restringidos para operar con WINPROFX por restricciones regulatorias y legales. ¡Haga clic para ver los detalles completos!',
      },
      riskDisclosure: {
        title: 'Divulgación de riesgos | WINPROFX',
        description:
          'Explore los riesgos del trading Forex con la divulgación detallada de WINPROFX. Comprenda la volatilidad del mercado y las medidas de seguridad clave.',
      },
      riskWarning: {
        title: 'Advertencia de riesgo | WINPROFX',
        description:
          'Advertencia de riesgo importante para usuarios que operan forex, CFD y productos financieros relacionados a través de los sitios y portales de WINPROFX.',
      },
      contact: {
        title: 'Contacto WINPROFX',
        description:
          'Contacte con WINPROFX a través de canales oficiales de soporte y verifique el sitio web oficial, el portal de clientes, el portal de socios y los dominios regionales.',
      },
      companyProfile: {
        title: 'Perfil de la empresa | WINPROFX',
        description:
          'Consulte el perfil oficial de WINPROFX, incluidos dominios oficiales, portal de clientes, portal de socios, servicios de trading, contacto y advertencia de riesgo.',
      },
      companyRegistration: {
        title: 'Registro de la empresa | WINPROFX',
        description:
          'Consulte la información de registro de WINPROFX, incluidos los datos de constitución de Winprofx Ltd., dominios oficiales, documentos legales y advertencia de riesgo.',
      },
      legalEntityInformation: {
        title: 'Información de la entidad legal | WINPROFX',
        description:
          'Conozca la información de la entidad legal de WINPROFX, incluidos datos de constitución de Winprofx Ltd., agente registrado, domicilio social y dominios oficiales.',
      },
      regulatoryInformation: {
        title: 'Información regulatoria | WINPROFX',
        description:
          'Consulte la información regulatoria y legal de WINPROFX, incluida la constitución en Santa Lucía, licencia profesional de Dubái, alcance de la licencia y advertencia de riesgo.',
      },
      dubaiProfessionalLicense: {
        title: 'Licencia profesional de Dubái | WINPROFX',
        description:
          'Consulte la información de la licencia profesional de Dubái de WINPROFX LTD - DUBAI BRANCH - REP. OFFICE, incluido número, actividad, estado, fechas y nota de verificación.',
      },
      uaeRepresentativeOffice: {
        title: 'Oficina representativa en EAU | WINPROFX',
        description:
          'Conozca la oficina representativa de WINPROFX en EAU, la licencia profesional de Dubái, el dominio oficial en EAU e información de verificación.',
      },
      withdrawalTransparency: {
        title: 'Transparencia en retiros | WINPROFX',
        description:
          'Conozca el procesamiento de retiros de WINPROFX, requisitos de revisión, plazos previstos, proceso de escalación e información de verificación de cuenta.',
      },
      complaintsAndDisputeResolution: {
        title: 'Quejas y resolución de disputas | WINPROFX',
        description:
          'Conozca cómo WINPROFX gestiona quejas de clientes, escalaciones de soporte, revisiones de disputas e inquietudes relacionadas con la cuenta.',
      },
      clientFundSecurity: {
        title: 'Seguridad de fondos del cliente | WINPROFX',
        description:
          'Conozca la gestión de fondos de clientes de WINPROFX, verificación de pagos, seguridad de la cuenta e información relacionada con el riesgo.',
      },
      supportAndEscalation: {
        title: 'Soporte y escalación | WINPROFX',
        description:
          'Encuentre información oficial de soporte y escalación de WINPROFX para consultas sobre cuenta, retiros, KYC, depósitos y socios.',
      },
      companyStatistics: {
        title: 'Estadísticas de la empresa | WINPROFX',
        description:
          'Consulte estadísticas operativas de WINPROFX, información de plataforma, métricas de soporte y actualizaciones de transparencia.',
      },
      officialDomains: {
        title: 'Dominios oficiales de WINPROFX',
        description:
          'Verifique los dominios oficiales de WINPROFX, incluidos winprofx.com, winprofx.com, winprofx.ae, el portal de clientes y el portal de socios.',
      },
      legalDocuments: {
        title: 'Documentos legales | WINPROFX',
        description:
          'Acceda a documentos legales de WINPROFX, incluida información de constitución, detalles de la licencia de Dubái, advertencia de riesgo, términos, privacidad y páginas de confianza.',
      },
      verifyWinprofx: {
        title: 'Verificar WINPROFX',
        description:
          'Verifique los sitios web y portales oficiales de WINPROFX antes de iniciar sesión, registrarse, depositar fondos o compartir información personal.',
      },
      trustCenter: {
        title: 'Centro de confianza WINPROFX | Información oficial, legal y de verificación',
        description:
          'Verifique la información oficial de WINPROFX, datos de la entidad legal, oficina representativa en Dubái, dominios oficiales, transparencia en retiros, quejas y divulgaciones de riesgo.',
      },
      isWinprofxLegit: {
        title: '¿Es WINPROFX legítimo? | Guía oficial de verificación WINPROFX',
        description:
          'Consulte la información oficial de WINPROFX, datos de la entidad legal, oficina representativa en Dubái, dominios oficiales, aclaración regulatoria y advertencias de riesgo.',
      },
      winprofxReview: {
        title: 'Reseña WINPROFX | Resumen oficial del bróker e información de verificación',
        description:
          'Lea un resumen oficial de WINPROFX, incluidos servicios de trading, información de la entidad legal, dominios oficiales, retiros, quejas y advertencia de riesgo.',
      },
      winprofxWithdrawalProcess: {
        title: 'Proceso de retiro WINPROFX | Guía oficial',
        description:
          'Conozca el proceso oficial de retiro de WINPROFX, requisitos KYC, plazos de procesamiento y pasos de escalación.',
      },
      winprofxLicenseVerification: {
        title: 'Verificación de licencia WINPROFX | Información oficial',
        description:
          'Verifique el registro de la empresa WINPROFX, la licencia profesional de Dubái y la información oficial sobre el alcance regulatorio.',
      },
      winprofxComplaints: {
        title: 'Quejas WINPROFX | Proceso oficial de quejas',
        description:
          'Conozca cómo presentar quejas a WINPROFX, la información requerida, etapas de revisión y opciones de escalación.',
      },
      winprofxFakeWebsiteWarning: {
        title: 'Advertencia sobre sitios falsos WINPROFX | Seguridad de dominios oficiales',
        description:
          'Aprenda a identificar sitios falsos de WINPROFX, verificar dominios oficiales y proteger las credenciales de su cuenta.',
      },
      winprofxOfficialLogin: {
        title: 'Inicio de sesión oficial WINPROFX | Verifique antes de acceder',
        description:
          'Use únicamente dominios y portales oficiales de WINPROFX antes de iniciar sesión. Verifique las URL y proteja las credenciales de su cuenta.',
      },
      winprofxDepositWithdrawalMethods: {
        title: 'Métodos de depósito y retiro WINPROFX | Información oficial',
        description:
          'Consulte los métodos oficiales de depósito y retiro de WINPROFX, requisitos KYC, notas de procesamiento y orientación de seguridad.',
      },
      learnIndex: {
        title: 'Centro de aprendizaje WINPROFX | Formación en Forex y CFD',
        description:
          'Artículos educativos sobre trading forex, CFD, MT5, apalancamiento, gestión de riesgos y verificación de brókers. No constituye asesoramiento de inversión.',
      },
    },
    trading: {
      aboutUs: {
        meta: 'SOBRE NOSOTROS',
        h1: 'Sobre WINPROFX',
        values: {
          advancedTechnology: {
            title: 'Tecnología avanzada',
            des: 'Impulsamos la innovación tecnológica para ofrecer ejecución ultrarrápida y una experiencia de trading fluida.',
          },
          clientCentric: {
            title: 'Enfoque centrado en el cliente',
            des: 'Su éxito es nuestra prioridad. Dotamos a los traders de recursos, liquidez y soporte para prosperar.',
          },
          integrity: {
            title: 'Integridad inquebrantable',
            des: 'La confianza es fundamental. Operamos con transparencia radical y estrictos estándares éticos en cada transacción.',
          },
          globalNetwork: {
            title: 'Red global',
            des: 'Únase a un ecosistema dinámico de profesionales donde el conocimiento colectivo y el rendimiento individual impulsan el éxito mutuo.',
          },
        },
        bannerTitle: 'Excelencia pionera: redefiniendo los estándares de trading en WINPROFX',
        bannerDes:
          'Bienvenido a WINPROFX: una marca de trading forex y CFD que ofrece acceso a MT5, múltiples servicios de cuenta y soporte al cliente. Verifique la información oficial en winprofx.com antes de operar o depositar.',
        companyInfoTitle: 'Información de la empresa',
        legalName: 'Nombre legal:',
        legalNameValue: 'WINPROFX Limited',
        tradingName: 'Nombre comercial:',
        tradingNameValue: 'WINPROFX',
        primaryWebsite: 'Sitio web principal:',
        regulation: 'Regulación:',
        regulationValue:
          'Financial Services Commission of the Republic of Mauritius (Investment Dealer license)',
        support: 'Soporte:',
        standardTitle: 'El estándar WINPROFX',
        standardDes: 'Una base construida sobre transparencia, innovación y ejecución sin concesiones.',
        featuredIn: 'Como aparece en',
        faqTitle: 'Su guía para un trading fluido',
        faqDes:
          'Encuentre las respuestas que necesita en nuestras preguntas frecuentes. Desde la apertura de cuenta hasta estrategias de trading, resuelva consultas habituales y disfrute de un recorrido fluido con WINPROFX.',
        valueKeys: ['advancedTechnology', 'clientCentric', 'integrity', 'globalNetwork'],
        faqs: {
          whatIsWinprofx: {
            title: '¿Qué es WINPROFX?',
            body: '<p>WINPROFX mantiene altos estándares en sus servicios, reconociendo el papel clave de la calidad tanto para la empresa como para sus clientes. Creemos en un pensamiento versátil y un conjunto unificado de principios empresariales que sustentan nuestro compromiso con servicios forex diversos. Nos adaptamos a las condiciones cambiantes del mercado y atendemos las necesidades de nuestra clientela. WINPROFX se distingue por varias razones:</p><ul><li><span><span>Regulación global: </span> WINPROFX publica información de registro, entidad legal y alcance regulatorio en su Trust Center oficial.</span></li><li><span><span>Acceso a MT5:</span> WINPROFX proporciona MetaTrader 5 para trading en escritorio y móvil con tipos de orden estándar y herramientas gráficas.</span></li><li><span><span>Procesamiento de retiros:</span> Las solicitudes de retiro se gestionan según las políticas publicadas y los requisitos de verificación de WINPROFX.</span></li><li><span><span>Instrumentos negociables: </span> WINPROFX ofrece acceso a múltiples categorías de mercado forex y CFD a través de MT5.</span></li><li><span><span>Spreads:</span> Los spreads varían según el instrumento y las condiciones del mercado. Consulte los tipos de cuenta para información publicada cuando esté disponible.</span></li></ul>',
          },
          howToStart: {
            title: '¿Cómo empiezo a operar con WINPROFX?',
            body: '<div class="flex flex-col mb-4"><strong class="text-white font-semibold mb-2 text-lg">Cree una cuenta:</strong><p>Visite el sitio web oficial de WINPROFX en <a href="https://winprofx.com" class="text-white underline" target="_blank" rel="noopener noreferrer">winprofx.com</a> o <a href="https://my.winprofx.com/register" class="text-white underline" target="_blank" rel="noopener noreferrer">regístrese aquí</a>.</p><p>Busque la opción «Registrarse» o «Abrir una cuenta».</p><p>Proporcione la información requerida, incluidos datos personales y de contacto.</p><p>Acepte los términos y condiciones.</p></div><div class="flex flex-col mb-4"><strong class="text-white font-semibold mb-2 text-lg">Verificación (KYC):</strong><p>Complete el proceso de verificación de identidad enviando los documentos exigidos para cumplir los requisitos regulatorios.</p></div><div class="flex flex-col mb-4"><strong class="text-white font-semibold mb-2 text-lg">Deposite fondos:</strong><p>Inicie sesión en su cuenta recién creada.</p><p>Acceda a la sección de depósitos o financiación.</p><p>Elija su método de pago preferido y deposite fondos en su cuenta de trading.</p></div><div class="flex flex-col mb-4"><strong class="text-white font-semibold mb-2 text-lg">Seleccione una plataforma de trading:</strong><p>Elija entre las plataformas disponibles: MetaTrader 5 (MT5).</p><p>Descargue e instale la plataforma de trading.</p></div><div class="flex flex-col mb-4"><strong class="text-white font-semibold mb-2 text-lg">Inicie sesión en la plataforma:</strong><p>Abra la plataforma de trading.</p><p>Introduzca sus credenciales para acceder.</p><p>Si tiene dificultades, el soporte al cliente de WINPROFX puede ayudarle. <a href="/contact" class="text-white underline">Contáctenos</a></p></div>',
          },
          instruments: {
            title: '¿Qué instrumentos financieros puedo operar con WINPROFX?',
            body: '<p>Categorías habituales de instrumentos financieros a los que los traders pueden acceder en WINPROFX: </p><ul><li><span><span>Forex (divisas): </span>Pares de monedas como EUR/USD, GBP/JPY, USD/JPY, etc.</span></li><li><span><span>Índices:</span>Referentes que representan el rendimiento de un grupo de acciones en una bolsa, como S&P500, US30, etc.</span></li><li><span><span>Materias primas:</span>Como petróleo, productos agrícolas, etc.</span></li><li><span><span>Metales preciosos:</span>Activos como oro, plata, platino, paladio, etc.</span></li><li><span><span>Criptomonedas:</span>Monedas digitales como Bitcoin, Ethereum, Litecoin, etc.</span></li></ul>',
          },
          depositWithdraw: {
            title: '¿Cómo puedo depositar y retirar fondos en WINPROFX?',
            body: '<p>Para la comodidad de los clientes, WINPROFX ofrece opciones de depósito y retiro a través de nuestra red de socios bancarios y cripto. Puede contactar con nuestro equipo de atención al cliente para recibir asistencia adicional.</p>',
          },
          platforms: {
            title: '¿Qué plataformas de trading admite WINPROFX?',
            body: '<p>WINPROFX admite las siguientes plataformas de trading:</p><ul><li><span><span>MetaTrader 5 (MT5):</span>La plataforma estándar del sector para escritorio y móvil en forex, índices, cripto, metales, materias primas y petróleo.</span></li><li><span><span>Web Trading:</span>Trading en navegador disponible en trade.winprofx.com para acceso rápido sin instalación.</span></li><li><span><span>Cuentas demo:</span>Practique el trading sin riesgo antes de operar en real.</span></li></ul><p>Más información en nuestra <a href="/platform" class="text-white underline">página de plataforma</a> o <a href="/contact" class="text-white underline">contacte con soporte</a> para recibir ayuda.</p>',
          },
          support: {
            title: '¿Cómo puedo contactar con el soporte al cliente de WINPROFX?',
            body: '<p>El soporte al cliente de WINPROFX está disponible 24/7 a través de los siguientes canales:</p><ul><li><span><span>Teléfono:</span> <a href="tel:+97144471894" class="text-white underline">+971 4 447 1894</a></span></li><li><span><span>Correo electrónico:</span> <a href="mailto:support@winprofx.com" class="text-white underline">support@winprofx.com</a></span></li><li><span><span>WhatsApp:</span> <a href="https://wa.me/97144471894" class="text-white underline" target="_blank" rel="noopener noreferrer">+971 4 447 1894</a></span></li><li><span><span>Chat en vivo:</span> Disponible en este sitio web mediante el widget de chat</span></li></ul><p>Visite nuestra <a href="/contact" class="text-white underline">página de contacto</a> para más detalles. Sitio web oficial: <a href="https://winprofx.com" class="text-white underline" target="_blank" rel="noopener noreferrer">winprofx.com</a>.</p>',
          },
        },
        faqKeys: ['whatIsWinprofx', 'howToStart', 'instruments', 'depositWithdraw', 'platforms', 'support'],
      },
      contact: {
        meta: 'Atención al cliente',
        h1: 'Contacto WINPROFX',
        sections: {
          getInTouch: 'Póngase en contacto',
          contactChannels: 'Canales de contacto',
          businessHours: 'Horario de atención',
          contactRiskLegal: 'Contacto, riesgo y nota legal',
        },
        labels: {
          supportEmail: 'Correo de soporte',
          phone: 'Teléfono',
          whatsapp: 'WhatsApp',
          officialWebsite: 'Sitio web oficial',
          clientPortal: 'Portal de clientes',
          partnerPortal: 'Portal de socios',
        },
        introP1:
          'WINPROFX ofrece atención al cliente para consultas sobre cuenta, plataforma de trading, depósitos, retiros y preguntas generales. Nuestro sitio web oficial principal es',
        introP2Start: 'Para acceder a su cuenta y operar, use el',
        introP2ClientPortal: 'portal de clientes en my.winprofx.com',
        introP2Middle: '. Los socios deben usar',
        introP2PartnerPortal: 'partner.winprofx.com',
        customerSupport: 'Atención al cliente:',
        customerSupportHours: 'Disponible 24 horas al día, 7 días a la semana',
        officeHours: 'Horario de oficina (EAU):',
        officeHoursValue: 'Lunes a viernes, 09:00 – 18:00 (GST)',
        riskLegalP1Start: 'Antes de operar, lea nuestra',
        riskWarningLink: 'Advertencia de riesgo',
        riskLegalP1Middle: 'y consulte nuestros',
        legalDocumentsLink: 'Documentos legales',
        riskLegalP1End:
          'El trading de forex y CFD implica un riesgo significativo y puede no ser adecuado para todos los inversores.',
        officialDomainsNote:
          'Verifique siempre que se encuentra en un dominio oficial de WINPROFX antes de iniciar sesión o depositar. Consulte',
        officialDomainsLink: 'Dominios oficiales',
        officialDomainsEnd: 'para ver la lista completa.',
      },
      blog: {
        meta: 'BLOG',
        h1: 'Blog',
        pageMeta: 'Blog',
        pageTitle: 'Blog WINPROFX',
        categories: {
          all: 'Todos',
          forex: 'Forex',
          indices: 'Índices',
          crypto: 'Crypto',
          oil: 'Petróleo',
          metals: 'Metales',
          commodities: 'Materias primas',
        },
        posts: {
          overview: {
            title:
              'Resumen de trading Forex, índices, cripto, metales, materias primas y petróleo con WINPROFX',
            des: '',
          },
          indices: {
            title: 'Trading de índices con WINPROFX',
            des: 'A la hora de operar índices, contar con la plataforma adecuada puede marcar una diferencia significativa en su éxito.',
          },
          forex: {
            title: 'Trading Forex con WINPROFX',
            des: 'En el dinámico mundo del trading Forex, encontrar la plataforma adecuada puede marcar una gran diferencia en su éxito.',
          },
          crypto: { title: 'Trading de CFD sobre cripto con WINPROFX', des: '' },
          commodities: { title: 'Trading de materias primas con WINPROFX', des: '' },
          metals: { title: 'Trading de oro y metales con WINPROFX', des: '' },
        },
        postKeys: ['overview', 'indices', 'forex', 'crypto', 'commodities', 'metals', 'overview'],
        details: {
          meta: 'Resumen',
          title: 'Resumen de trading Forex y CFD con WINPROFX',
          des: 'WINPROFX ofrece acceso a mercados forex y CFD a través de MetaTrader 5. Este resumen explica el acceso a la plataforma, servicios de cuenta e información oficial de la empresa y riesgos antes de operar.',
          sections: {
            markets: {
              title: '¿Qué mercados ofrece WINPROFX?',
              des: 'WINPROFX ofrece acceso a forex, índices, CFD sobre cripto, metales, materias primas y petróleo a través de MT5. La disponibilidad de instrumentos puede variar según el tipo de cuenta y la región.',
            },
            mt5: {
              title: 'Acceso a la plataforma MT5',
              des: 'Los clientes pueden acceder a MetaTrader 5 en escritorio y móvil. La plataforma incluye herramientas gráficas, tipos de orden y funciones de gestión de cuenta. Pueden estar disponibles cuentas demo para practicar.',
            },
            verify: {
              title: 'Verifique WINPROFX antes de operar',
              des: 'Confirme siempre que se encuentra en un dominio oficial de WINPROFX antes de iniciar sesión o depositar. Revise el registro de la empresa, el alcance regulatorio y las advertencias de riesgo en el Trust Center de WINPROFX en winprofx.com.',
            },
            risk: {
              title: 'Advertencia de riesgo',
              des: 'El trading de forex y CFD implica un riesgo significativo y puede no ser adecuado para todos los inversores. Las pérdidas pueden superar los depósitos al usar apalancamiento. Lea la advertencia de riesgo completa en el sitio oficial de WINPROFX antes de operar.',
            },
          },
          sectionKeys: ['markets', 'mt5', 'verify', 'risk'],
        },
      },
      accounts: {
        featureComparison: {
          title: 'Comparación de características',
          standard: 'STANDARD',
          pro: 'PRO',
          ecn: 'ECN',
          rows: {
            minimumDeposit: 'Depósito mínimo',
            spread: 'Spread',
            commission: 'Comisión',
            maximumLeverage: 'Apalancamiento máximo',
            instruments: 'Instrumentos',
            minimumLotSize: 'Tamaño mínimo de lote',
            maximumLotSize: 'Tamaño máximo de lote',
            marginCall: 'Margin call',
            stopOut: 'Stop out',
            orderExecution: 'Ejecución de órdenes',
            swapFree: 'Sin swap',
          },
          values: {
            spreadStandard: 'Desde 0,2 pips',
            spreadPro: 'Desde 0,1 pips',
            spreadEcn: 'Desde 0 pips',
            commissionEcn: 'Hasta 3,50 USD por lado y por lote',
            orderExecution: 'Mercado',
            swapFree: 'Disponible',
          },
          instrumentKeys: ['forex', 'metal', 'crypto', 'energies', 'indices'],
        },
      },
      introducingBroker: {
        calculator: {
          title: '¿Cuánto puede ganar? Calcule su beneficio',
          clients: 'Clientes',
          rewards: 'Recompensas',
          perLot: 'Por lote',
          ctaTitle: 'Conviértase en socio de WINPROFX y empiece a ganar hoy',
          steps: {
            apply: 'Solicite convertirse en <span>Introducing Broker </span>',
            share: 'Atraiga clientes compartiendo su <span>enlace de referido</span>',
            earn: 'Reciba <span>pagos diarios de comisiones</span>',
          },
          description:
            'Esta calculadora avanzada de comisiones estima las ganancias según el número de clientes de los Introducing Brokers y su volumen de trading en lotes, reflejando con precisión las comisiones obtenidas.',
          partnerDes:
            'Emprenda un camino rentable como socio de WINPROFX y comience a generar ingresos hoy. Únase a nuestra red dinámica, aproveche oportunidades de recompensa y avance hacia el éxito financiero.',
          stepKeys: ['apply', 'share', 'earn'],
        },
      },
    },
    tools: {
      analytics: {
        meta: 'ANALÍTICA',
        h1: 'Herramientas analíticas potentes para decisiones de trading más inteligentes',
        faqTitle: 'Preguntas frecuentes',
        newsBlog: {
          eventTracker: {
            meta: 'Seguimiento de eventos',
            title: 'Siga los eventos económicos clave con el calendario económico',
            des: 'Manténgase al día de eventos económicos y publicaciones de datos clave para mejorar su estrategia de trading en WINPROFX.',
          },
          marketNews: {
            meta: 'Noticias del mercado',
            title: 'Noticias del mercado en tiempo real de WINPROFX',
            des: 'Manténgase al día con noticias de mercado y las últimas actualizaciones del equipo de FXStreet News en tiempo real. Acceda a estos datos útiles desde la app WINPROFX Trade o su Área Personal WINPROFX.',
          },
        },
        smartSignals: {
          meta: 'Señales inteligentes',
          title: 'Señales inteligentes',
          des: 'Obtenga insights accionables de Trading Central para respaldar sus decisiones de trading.',
        },
        faqs: {
          marketPredictions: {
            title: '¿Qué herramientas de nuestra plataforma ofrecen las mejores predicciones de mercado?',
            body: 'Utilice el calendario económico para seguir eventos y publicaciones de datos importantes. Manténgase al día con noticias en tiempo real a través de FXStreet News y obtenga insights de Trading Central WebTV.',
          },
          tradingPatterns: {
            title: '¿Qué herramientas de nuestro sitio web son mejores para analizar patrones de trading?',
            body: 'WINPROFX ofrece una combinación de herramientas de análisis fundamental y técnico para ayudarle a prever movimientos de precios y analizar patrones. Las herramientas son gratuitas y accesibles, permitiéndole planificar operaciones con confianza.',
          },
          freeSignals: {
            title: '¿Dónde puedo acceder a señales de trading gratuitas en el sitio web de WINPROFX?',
            body: 'Puede acceder a señales gratuitas de Trading Central en su Área Personal y en la app WINPROFX Trade. Estas señales combinan diversos enfoques analíticos y son valiosas tanto para principiantes como para traders experimentados.',
          },
        },
        bannerMeta: 'Herramientas analíticas',
        bannerTitle: 'Herramientas analíticas potentes para decisiones de trading más inteligentes',
        bannerDes:
          'Para ayudarle a planificar operaciones con confianza, le damos acceso a las mejores herramientas analíticas fundamentales y técnicas.',
        smartSignalsTitle: 'Señales de trading estratégicas',
        smartSignalsDes:
          'Aproveche al máximo las señales de Trading Central para elaborar sus planes y técnicas de trading. Estas señales combinan diversas técnicas analíticas y están disponibles en la app WINPROFX Trade o en su Área Personal WINPROFX.',
        faqSubtitle:
          'Encuentre respuestas claras y concisas a las preguntas más habituales sobre trading, apertura de cuenta, depósitos, retiros y funciones de la plataforma.',
        faqKeys: ['marketPredictions', 'tradingPatterns', 'freeSignals'],
      },
      converterUi: {
        title: 'Convierta su divisa',
        account: 'Cuenta',
        accountPlaceholder: 'Introduzca su cuenta',
        convertedAmount: 'Importe convertido',
        convertedPlaceholder: 'Importe convertido',
        convertNow: 'Convertir ahora',
      },
      calculatorUi: {
        yourOrder: 'Su orden',
        accountType: 'Tipo de cuenta',
        selectAccountType: 'Seleccione el tipo de cuenta',
        standard: 'Standard',
        lotSizePlaceholder: 'Introduzca el tamaño del lote',
        disclaimer:
          'Aviso legal: La calculadora de trading se proporciona únicamente con fines ilustrativos. Los resultados son educativos y estimativos; no debe basarse en ellos para tomar decisiones de inversión. Los resultados en tiempo real solo pueden determinarse en el momento de la ejecución de la orden.',
        accountCurrency: 'Divisa de la cuenta',
        selectAccountCurrency: 'Seleccione la divisa de la cuenta',
        selectInstrument: 'Seleccione el instrumento',
        lot: 'Lote',
        leverage: 'Apalancamiento',
        selectLeverage: 'Seleccione el apalancamiento',
        calculateNow: 'Calcular ahora',
        results: 'Resultados',
        margin: 'Margen',
        spreadCost: 'Coste del spread',
        commission: 'Comisión',
        swapShot: 'Swap corto',
        swapLong: 'Swap largo',
        pipValue: 'Valor del pip',
        pro: 'Pro',
        ecn: 'ECN',
        disclaimerLabel: 'Aviso legal:',
        disclaimerBody:
          'La calculadora de trading se proporciona únicamente con fines ilustrativos. Los resultados son educativos y estimativos; no debe basarse en ellos para tomar decisiones de inversión. Los resultados en tiempo real solo pueden determinarse en el momento de la ejecución de la orden.',
      },
    },
    common: {
      buttons: {
        getStarted: 'Comenzar',
        learnMore: 'Más información',
        openAccount: 'Abrir cuenta',
        startTrading: 'Empezar a operar',
        downloadNow: 'Descargar ahora',
        viewPage: 'Ver página →',
        viewAllArticles: 'Ver todos los artículos →',
        readFullRiskWarning: 'Leer advertencia de riesgo completa',
      },
      labels: {
        home: 'Inicio',
        trustCenter: 'Centro de confianza',
        lastReviewed: 'Última revisión:',
        reviewedBy: 'Revisado por:',
        riskWarning: 'Advertencia de riesgo:',
        lastUpdated: 'Última actualización: {{date}}',
        authorReviewedBy: 'Autor: {{author}} · Revisado por: {{reviewer}}',
        faqTitle: 'Preguntas frecuentes',
        relatedTrustPages: 'Páginas de verificación relacionadas de WINPROFX',
        relatedPages: 'Páginas relacionadas de WINPROFX',
        moreArticles: 'Más artículos',
        whatsapp: 'WhatsApp',
      },
      risk: {
        short:
          'El trading de forex y CFD implica un riesgo significativo y puede no ser adecuado para todos los inversores. Los clientes deben comprender los riesgos antes de operar.',
        full: 'El trading de forex, CFD y productos financieros relacionados implica un riesgo significativo y puede no ser adecuado para todos los inversores. Puede perder parte o la totalidad de su capital invertido. El rendimiento pasado no garantiza resultados futuros. Los clientes deben comprender los riesgos antes de operar y buscar asesoramiento independiente si es necesario.',
      },
      errors: {
        title: 'Página no encontrada',
        seoTitle: 'Página no encontrada | WINPROFX',
        backHome: 'Volver al inicio',
      },
      download: {
        appStorePrefix: 'Descargar en',
        googlePlayPrefix: 'DISPONIBLE EN',
        windowsPrefix: 'Descargar para',
        windowsLabel: 'Windows',
        webTradingPrefix: 'Abrir en',
        webTradingLabel: 'WebTrading',
      },
      cta: {
        accountsTitle: '¿Está listo para empezar a operar?',
        accountsDes: '¡Opere con un bróker galardonado!',
        openLiveAccount: 'Abrir cuenta real',
      },
    },
  },
  pt: {
    homepage: {
      banner: {
        title: 'O seu caminho para um trading lucrativo começa aqui',
        description:
          'A WINPROFX é uma corretora de reconhecimento global que oferece spreads apertados, levantamentos ultrarrápidos, mais de 300 instrumentos negociáveis e execução em nanossegundos ao alcance da sua mão.',
        badge: 'Invista com a melhor corretora Forex 2026',
        stats: {
          evolving: { title: 'Evoluindo', description: 'no mercado' },
          awards: { count: 40, suffix: '+', description: 'Prémios' },
          countries: { count: 105, suffix: '+', description: 'Países atendidos' },
          instruments: { count: 300, suffix: '+', description: 'Instrumentos de trading' },
        },
      },
      tradingStarts: {
        title: 'A sua jornada de <br /> trading começa aqui connosco',
        steps: {
          openAccount: {
            title: 'Abra uma conta',
            description: 'Clique no botão acima e siga alguns passos simples.',
          },
          makeDeposit: {
            title: 'Faça um depósito',
            description: 'Dica: depósitos e levantamentos em USDT são os mais rápidos.',
          },
          startTrading: {
            title: 'Comece a negociar',
            description: 'Todo o profissional começou do zero — comece a negociar agora.',
          },
        },
      },
      benefitsTrading: {
        title: 'Benefícios de negociar connosco',
        description:
          'Descubra um trading fluido onde a transparência e a tecnologia avançada se unem para impulsionar o seu sucesso financeiro.',
        items: {
          withdrawals: {
            meta: 'Levantamento cripto em',
            title: '30 minutos',
            description: 'Desfrute de flexibilidade financeira com a nossa garantia de levantamento em 30 minutos.',
          },
          tradeDaily: {
            meta: 'Negocie diariamente',
            title: 'Ganhe recompensas',
            description: 'Operações diárias, vitórias diárias — impulsione o seu sucesso em cada movimento do mercado.',
          },
          clientSupport: {
            meta: 'Premiado',
            title: 'Apoio ao cliente',
            description: 'Prestamos um serviço de excelência incomparável!',
          },
          negativeBalance: {
            meta: 'Proteção contra',
            title: 'saldo negativo',
            description: 'Negocie com confiança graças à proteção integrada contra saldo negativo.',
          },
        },
      },
      platform: {
        meta: 'PLATAFORMA DE TRADING',
        title: 'Descarregue MT5 para mobile',
        description:
          'A WINPROFX expandiu com sucesso a sua presença em todo o mundo. O MT5 já está disponível em Android e iPhone, um passo mais perto do sucesso. Descarregue o MT5 agora e aceda a oportunidades de trading ilimitadas.',
      },
      whatTrade: {
        title: 'O que pode negociar?',
        description:
          'Descubra um trading fluido onde a transparência e a tecnologia avançada se unem para impulsionar o seu sucesso financeiro.',
        items: {
          crypto: {
            title: 'Crypto',
            description:
              'As criptomoedas, também conhecidas como moedas digitais, são instrumentos de investimento de rápido crescimento e',
          },
          metals: {
            title: 'Metais',
            description:
              'O trading spot de metais ocupa um lugar especial para todo o trader. Os metais atraíram operadores de',
          },
          commodities: {
            title: 'Commodities',
            description:
              'Investir em commodities pode oferecer diversificação e cobertura contra',
          },
          forex: {
            title: 'Forex',
            description:
              'Forex, ou mercado cambial, é um mercado global onde se negociam as moedas do mundo. Amplamente',
          },
          indices: {
            title: 'Índices',
            description:
              'Os índices medem o desempenho de preço de um grupo de ações numa bolsa.',
          },
          oil: {
            title: 'Petróleo',
            description:
              'Os futuros energéticos são contratos para comprar ou vender combustíveis fósseis ou produtos relacionados a uma data e preço determinados.',
          },
        },
        imageAlt: 'Trading de {{market}} com WINPROFX',
      },
      about: {
        meta: 'SOBRE A WINPROFX',
        heading:
          "<strong class='font-normal text-white'>Na WINPROFX oferecemos uma plataforma de trading online segura </strong> que promove a sustentabilidade através de experiência, conhecimento de mercado e parcerias de confiança.",
        features: {
          platform: 'A melhor plataforma para todo o tipo de traders: principiantes, intermédios ou profissionais.',
          orderManagement: 'Ferramentas avançadas de gestão de ordens.',
          indicators: 'Mais indicadores técnicos nativos.',
          customize: 'Configure e personalize facilmente o seu ambiente de trading',
        },
      },
      award: {
        title: 'WINPROFX: corretora com excelência premiada',
        description:
          'A indústria global do forex reconheceu as conquistas da WINPROFX, distinguiu-nos com os principais prémios pelos nossos produtos e serviços excecionais.',
        items: {
          bestForexBroker2025: 'Melhor corretora Forex 2025',
          globalForexBroker2025: 'Corretora Forex global do ano 2025',
          topStpBroker2025: 'Melhor corretora STP 2025',
          bestDepositWithdrawal2024: 'Melhor corretora em depósitos e levantamentos 2024',
        },
      },
      news: {
        title: 'Notícias e insights',
        description:
          'Mantenha-se informado com as nossas atualizações de mercado e análises de especialistas para tomar decisões financeiras fundamentadas.',
        paymentFlow: {
          title: 'Fluxo de fundos sem fricção: depósitos ágeis e levantamentos fluidos',
          description:
            'Desfrute de agilidade financeira com processos de depósito e levantamento simples, rápidos e convenientes.',
        },
        blog: {
          tradeToWin: {
            title: 'Trade to WIN',
            description: 'Negocie mais e ganhe prémios GARANTIDOS. Quanto mais negociar, melhor será o prémio.',
            promotionDates: 'Datas da promoção: 1 de janeiro de 2026 a 31 de maio de 2026',
          },
          technicalAnalysis: {
            title: 'Ferramenta gratuita de análise técnica',
            description:
              'Identifique padrões gráficos, analise as condições de mercado e monitorize os mercados 24 horas com um único clique.',
            poweredBy: 'Com tecnologia de',
          },
          learnMore: 'Saber mais',
        },
      },
      demoCta: {
        title: 'Domine o trading: desenvolva as suas competências com a experiência demo WINPROFX',
        description:
          'Inicie a sua jornada com uma conta demo MT5 gratuita de 21 dias. Descubra o potencial da nossa plataforma premiada de estratégias Forex sem risco — registe-se agora e explore o trading de precisão.',
        button: 'Experimentar demo da plataforma MT5',
      },
    },
    seo: {
      home: {
        title: 'Site oficial WINPROFX | Serviços de trading Forex e CFD',
        description:
          'A WINPROFX é uma marca de trading forex e CFD que oferece acesso a plataformas, serviços de conta, ferramentas para parceiros e apoio relacionado com trading.',
        keywords:
          'WINPROFX, trading forex, trading CFD, MetaTrader 5, site oficial WINPROFX, verificação de empresa, trust center',
        pageName: 'Site oficial WINPROFX',
      },
      forex: {
        title: 'Trading Forex | WINPROFX',
        description:
          'Explore informação do mercado forex e serviços de trading na WINPROFX, incluindo acesso a plataformas, tipos de conta e detalhes de risco importantes.',
        keywords:
          'Plataforma de trading Forex, soluções de mercado Forex, serviços de trading Forex, ferramentas de trading Forex, trading Forex online, estratégias de trading Forex, trading Forex para principiantes, trading Forex avançado, serviços Forex WINPROFX',
      },
      indices: {
        title: 'Trading de índices | WINPROFX',
        description:
          'Explore o trading de CFD sobre índices na WINPROFX com acesso a MT5, opções de conta e divulgações de risco importantes.',
      },
      crypto: {
        title: 'Trading de CFD sobre cripto | WINPROFX',
        description:
          'Explore o trading de CFD sobre criptomoedas na WINPROFX com acesso a MT5, opções de conta e divulgações de risco importantes.',
      },
      metals: {
        title: 'Trading de ouro e metais | WINPROFX',
        description:
          'Negocie CFD sobre ouro e metais na WINPROFX com acesso a MT5, opções de conta e divulgações de risco importantes.',
      },
      commodities: {
        title: 'Trading de commodities | WINPROFX',
        description:
          'Explore o trading de CFD sobre commodities na WINPROFX com acesso a MT5, opções de conta e divulgações de risco importantes.',
      },
      oil: {
        title: 'Trading de petróleo | WINPROFX',
        description:
          'Explore o trading de CFD sobre petróleo e crude na WINPROFX com acesso a MT5, opções de conta e divulgações de risco importantes.',
      },
      winPromotion: {
        title: 'Promoção Win | WINPROFX',
        description:
          'Participe na promoção exclusiva Win da WINPROFX. Negocie mais e obtenha mais recompensas com o nosso programa por níveis para traders ativos.',
      },
      tradeToWin: {
        title: 'Trade to Win | WINPROFX',
        description:
          'Alcance volumes de trading específicos em 30 dias e desbloqueie recompensas exclusivas Apple: Power Bank, AirPods, Apple Watch, iPad e iPhone.',
      },
      introducingBroker: {
        title: 'Introducing Broker | WINPROFX',
        description:
          'Conheça o programa de parceiros WINPROFX, ferramentas para introducing brokers, acesso ao portal de parceiros e serviços de apoio relacionados.',
      },
      platform: {
        title: 'Plataforma de trading MT5 | WINPROFX',
        description:
          'Saiba mais sobre o acesso à plataforma de trading WINPROFX, ferramentas para clientes, serviços de conta e funcionalidades de apoio relacionadas com trading.',
      },
      accounts: {
        title: 'Contas de trading | WINPROFX',
        description:
          'Explore informação sobre contas de trading WINPROFX, opções de acesso, serviços relacionados com a plataforma e detalhes de risco importantes.',
      },
      aboutUs: {
        title: 'Sobre nós | WINPROFX',
        description:
          'Conheça a WINPROFX, referência em trading forex, com plataformas avançadas e apoio abrangente para traders em todo o mundo. Clique para saber mais!',
      },
      about: {
        title: 'Sobre a WINPROFX',
        description:
          'Conheça a WINPROFX, os seus serviços de trading forex e CFD, sites oficiais, portal de clientes, portal de parceiros e aviso de risco.',
      },
      blog: {
        title: 'Blog | Notícias e insights | WINPROFX',
        description:
          'Mantenha-se informado com as últimas notícias financeiras na WINPROFX. O nosso blog oferece atualizações oportunas e análise especializada sobre forex, cripto, metais e mais.',
      },
      analytics: {
        title: 'Analítica | WINPROFX',
        description:
          'Otimize o seu trading com as ferramentas analíticas WINPROFX. Use notícias em tempo real, calendários económicos e sinais essenciais da Trading Central.',
      },
      economicCalendar: {
        title: 'Calendário económico | WINPROFX',
        description:
          'Mantenha-se atualizado com o calendário económico WINPROFX. Acompanhe eventos-chave como anúncios de PIB e alterações de taxas de juro para melhorar a sua estratégia.',
      },
      currencyCalculator: {
        title: 'Calculadora de moedas | WINPROFX',
        description:
          'Agilize os seus cálculos de trading com a calculadora de moedas WINPROFX. Gira operações e compreenda custos como margem e valor de pip. Calcule agora!',
      },
      currencyConverter: {
        title: 'Conversor de moedas | WINPROFX',
        description:
          'Converta moedas instantaneamente com o conversor preciso e em tempo real da WINPROFX. Calcule taxas de câmbio para todas as moedas com facilidade.',
      },
      policy: {
        title: 'Política de privacidade | WINPROFX',
        description:
          'Leia a política de privacidade WINPROFX para compreender como a informação é recolhida, utilizada, protegida e gerida nos sites e portais WINPROFX.',
      },
      terms: {
        title: 'Termos e condições | WINPROFX',
        description:
          'Leia os termos e condições WINPROFX sobre utilização do site, responsabilidades do cliente, serviços de trading e termos legais importantes.',
      },
      amlPolicy: {
        title: 'Política AML | WINPROFX',
        description:
          'Leia a política AML WINPROFX sobre prevenção de branqueamento de capitais, verificação, conformidade regulatória e informação relacionada.',
      },
      depositWithdraw: {
        title: 'Política de depósitos e levantamentos | WINPROFX',
        description:
          'Conheça a política de depósitos e levantamentos WINPROFX para transações seguras. Consulte procedimentos e condições para gerir os seus fundos com eficiência.',
      },
      restrictedCountries: {
        title: 'Países restritos | WINPROFX',
        description:
          'Consulte a lista de países restritos para negociar com WINPROFX por restrições regulatórias e legais. Clique para ver os detalhes completos!',
      },
      riskDisclosure: {
        title: 'Divulgação de riscos | WINPROFX',
        description:
          'Explore os riscos do trading Forex com a divulgação detalhada WINPROFX. Compreenda a volatilidade do mercado e medidas de segurança essenciais.',
      },
      riskWarning: {
        title: 'Aviso de risco | WINPROFX',
        description:
          'Aviso de risco importante para utilizadores que negociam forex, CFD e produtos financeiros relacionados através dos sites e portais WINPROFX.',
      },
      contact: {
        title: 'Contacto WINPROFX',
        description:
          'Contacte a WINPROFX através de canais oficiais de apoio e verifique o site oficial, portal de clientes, portal de parceiros e domínios regionais.',
      },
      companyProfile: {
        title: 'Perfil da empresa | WINPROFX',
        description:
          'Consulte o perfil oficial WINPROFX, incluindo domínios oficiais, portal de clientes, portal de parceiros, serviços de trading, contacto e aviso de risco.',
      },
      companyRegistration: {
        title: 'Registo da empresa | WINPROFX',
        description:
          'Consulte a informação de registo WINPROFX, incluindo dados de constituição da Winprofx Ltd., domínios oficiais, documentos legais e aviso de risco.',
      },
      legalEntityInformation: {
        title: 'Informação da entidade legal | WINPROFX',
        description:
          'Conheça a informação da entidade legal WINPROFX, incluindo dados de constituição da Winprofx Ltd., agente registado, sede social e domínios oficiais.',
      },
      regulatoryInformation: {
        title: 'Informação regulatória | WINPROFX',
        description:
          'Consulte a informação regulatória e legal WINPROFX, incluindo constituição em Santa Lúcia, licença profissional de Dubai, âmbito da licença e aviso de risco.',
      },
      dubaiProfessionalLicense: {
        title: 'Licença profissional de Dubai | WINPROFX',
        description:
          'Consulte a informação da licença profissional de Dubai da WINPROFX LTD - DUBAI BRANCH - REP. OFFICE, incluindo número, atividade, estado, datas e nota de verificação.',
      },
      uaeRepresentativeOffice: {
        title: 'Escritório representativo nos EAU | WINPROFX',
        description:
          'Conheça o escritório representativo WINPROFX nos EAU, a licença profissional de Dubai, o domínio oficial nos EAU e informação de verificação.',
      },
      withdrawalTransparency: {
        title: 'Transparência em levantamentos | WINPROFX',
        description:
          'Conheça o processamento de levantamentos WINPROFX, requisitos de revisão, prazos previstos, processo de escalamento e informação de verificação de conta.',
      },
      complaintsAndDisputeResolution: {
        title: 'Reclamações e resolução de disputas | WINPROFX',
        description:
          'Saiba como a WINPROFX trata reclamações de clientes, escalamentos de apoio, revisões de disputas e preocupações relacionadas com a conta.',
      },
      clientFundSecurity: {
        title: 'Segurança de fundos do cliente | WINPROFX',
        description:
          'Conheça a gestão de fundos de clientes WINPROFX, verificação de pagamentos, segurança da conta e informação relacionada com risco.',
      },
      supportAndEscalation: {
        title: 'Apoio e escalamento | WINPROFX',
        description:
          'Encontre informação oficial de apoio e escalamento WINPROFX para consultas sobre conta, levantamentos, KYC, depósitos e parceiros.',
      },
      companyStatistics: {
        title: 'Estatísticas da empresa | WINPROFX',
        description:
          'Consulte estatísticas operacionais WINPROFX, informação da plataforma, métricas de apoio e atualizações de transparência.',
      },
      officialDomains: {
        title: 'Domínios oficiais WINPROFX',
        description:
          'Verifique os domínios oficiais WINPROFX, incluindo winprofx.com, winprofx.com, winprofx.ae, o portal de clientes e o portal de parceiros.',
      },
      legalDocuments: {
        title: 'Documentos legais | WINPROFX',
        description:
          'Aceda a documentos legais WINPROFX, incluindo informação de constituição, detalhes da licença de Dubai, aviso de risco, termos, privacidade e páginas de confiança.',
      },
      verifyWinprofx: {
        title: 'Verificar WINPROFX',
        description:
          'Verifique os sites e portais oficiais WINPROFX antes de iniciar sessão, registar-se, depositar fundos ou partilhar informação pessoal.',
      },
      trustCenter: {
        title: 'Centro de confiança WINPROFX | Informação oficial, legal e de verificação',
        description:
          'Verifique a informação oficial WINPROFX, dados da entidade legal, escritório representativo em Dubai, domínios oficiais, transparência em levantamentos, reclamações e divulgações de risco.',
      },
      isWinprofxLegit: {
        title: 'A WINPROFX é legítima? | Guia oficial de verificação WINPROFX',
        description:
          'Consulte a informação oficial WINPROFX, dados da entidade legal, escritório representativo em Dubai, domínios oficiais, esclarecimento regulatório e avisos de risco.',
      },
      winprofxReview: {
        title: 'Análise WINPROFX | Visão geral oficial da corretora e informação de verificação',
        description:
          'Leia uma visão geral oficial da WINPROFX, incluindo serviços de trading, informação da entidade legal, domínios oficiais, levantamentos, reclamações e aviso de risco.',
      },
      winprofxWithdrawalProcess: {
        title: 'Processo de levantamento WINPROFX | Guia oficial',
        description:
          'Conheça o processo oficial de levantamento WINPROFX, requisitos KYC, prazos de processamento e passos de escalamento.',
      },
      winprofxLicenseVerification: {
        title: 'Verificação de licença WINPROFX | Informação oficial',
        description:
          'Verifique o registo da empresa WINPROFX, a licença profissional de Dubai e a informação oficial sobre o âmbito regulatório.',
      },
      winprofxComplaints: {
        title: 'Reclamações WINPROFX | Processo oficial de reclamações',
        description:
          'Saiba como apresentar reclamações à WINPROFX, a informação necessária, fases de revisão e opções de escalamento.',
      },
      winprofxFakeWebsiteWarning: {
        title: 'Aviso sobre sites falsos WINPROFX | Segurança de domínios oficiais',
        description:
          'Aprenda a identificar sites falsos WINPROFX, verificar domínios oficiais e proteger as credenciais da sua conta.',
      },
      winprofxOfficialLogin: {
        title: 'Início de sessão oficial WINPROFX | Verifique antes de aceder',
        description:
          'Use apenas domínios e portais oficiais WINPROFX antes de iniciar sessão. Verifique os URLs e proteja as credenciais da sua conta.',
      },
      winprofxDepositWithdrawalMethods: {
        title: 'Métodos de depósito e levantamento WINPROFX | Informação oficial',
        description:
          'Consulte os métodos oficiais de depósito e levantamento WINPROFX, requisitos KYC, notas de processamento e orientação de segurança.',
      },
      learnIndex: {
        title: 'Centro de aprendizagem WINPROFX | Formação em Forex e CFD',
        description:
          'Artigos educativos sobre trading forex, CFD, MT5, alavancagem, gestão de risco e verificação de corretoras. Não constitui aconselhamento de investimento.',
      },
    },
    trading: {
      aboutUs: {
        meta: 'SOBRE NÓS',
        h1: 'Sobre a WINPROFX',
        values: {
          advancedTechnology: {
            title: 'Tecnologia avançada',
            des: 'Impulsionamos a inovação tecnológica para oferecer execução ultrarrápida e uma experiência de trading fluida.',
          },
          clientCentric: {
            title: 'Foco no cliente',
            des: 'O seu sucesso é a nossa prioridade. Equipamos os traders com recursos, liquidez e apoio para prosperar.',
          },
          integrity: {
            title: 'Integridade inabalável',
            des: 'A confiança é fundamental. Operamos com transparência radical e rigorosos padrões éticos em cada transação.',
          },
          globalNetwork: {
            title: 'Rede global',
            des: 'Junte-se a um ecossistema dinâmico de profissionais onde o conhecimento coletivo e o desempenho individual impulsionam o sucesso mútuo.',
          },
        },
        bannerTitle: 'Excelência pioneira: redefinindo os padrões de trading na WINPROFX',
        bannerDes:
          'Bem-vindo à WINPROFX — uma marca de trading forex e CFD que oferece acesso a MT5, múltiplos serviços de conta e apoio ao cliente. Verifique a informação oficial em winprofx.com antes de negociar ou depositar.',
        companyInfoTitle: 'Informação da empresa',
        legalName: 'Nome legal:',
        legalNameValue: 'WINPROFX Limited',
        tradingName: 'Nome comercial:',
        tradingNameValue: 'WINPROFX',
        primaryWebsite: 'Site principal:',
        regulation: 'Regulação:',
        regulationValue:
          'Financial Services Commission of the Republic of Mauritius (Investment Dealer license)',
        support: 'Apoio:',
        standardTitle: 'O padrão WINPROFX',
        standardDes: 'Uma base construída sobre transparência, inovação e execução sem compromissos.',
        featuredIn: 'Como visto em',
        faqTitle: 'O seu guia para um trading fluido',
        faqDes:
          'Encontre as respostas de que precisa nas nossas perguntas frequentes. Desde abertura de conta até estratégias de trading, resolva dúvidas comuns e desfrute de uma jornada fluida com a WINPROFX.',
        valueKeys: ['advancedTechnology', 'clientCentric', 'integrity', 'globalNetwork'],
        faqs: {
          whatIsWinprofx: {
            title: 'O que é a WINPROFX?',
            body: '<p>A WINPROFX mantém elevados padrões nos seus serviços, reconhecendo o papel crucial da qualidade tanto para a empresa como para os seus clientes. Acreditamos num pensamento versátil e num conjunto unificado de princípios empresariais que sustentam o nosso compromisso com serviços forex diversificados. Adaptamo-nos às condições de mercado em evolução e atendemos às necessidades da nossa clientela. A WINPROFX distingue-se por várias razões:</p><ul><li><span><span>Regulação global: </span> A WINPROFX publica informação de registo, entidade legal e âmbito regulatório no seu Trust Center oficial.</span></li><li><span><span>Acesso a MT5:</span> A WINPROFX disponibiliza MetaTrader 5 para trading em desktop e mobile com tipos de ordem padrão e ferramentas gráficas.</span></li><li><span><span>Processamento de levantamentos:</span> Os pedidos de levantamento são tratados de acordo com as políticas publicadas e requisitos de verificação da WINPROFX.</span></li><li><span><span>Instrumentos negociáveis: </span> A WINPROFX oferece acesso a múltiplas categorias de mercado forex e CFD através do MT5.</span></li><li><span><span>Spreads:</span> Os spreads variam consoante o instrumento e as condições de mercado. Consulte os tipos de conta para informação publicada quando disponível.</span></li></ul>',
          },
          howToStart: {
            title: 'Como começo a negociar com a WINPROFX?',
            body: '<div class="flex flex-col mb-4"><strong class="text-white font-semibold mb-2 text-lg">Crie uma conta:</strong><p>Visite o site oficial WINPROFX em <a href="https://winprofx.com" class="text-white underline" target="_blank" rel="noopener noreferrer">winprofx.com</a> ou <a href="https://my.winprofx.com/register" class="text-white underline" target="_blank" rel="noopener noreferrer">registe-se aqui</a>.</p><p>Procure a opção «Registar» ou «Abrir uma conta».</p><p>Forneça a informação necessária, incluindo dados pessoais e de contacto.</p><p>Aceite os termos e condições.</p></div><div class="flex flex-col mb-4"><strong class="text-white font-semibold mb-2 text-lg">Verificação (KYC):</strong><p>Complete o processo de verificação de identidade enviando os documentos exigidos para cumprir os requisitos regulatórios.</p></div><div class="flex flex-col mb-4"><strong class="text-white font-semibold mb-2 text-lg">Deposite fundos:</strong><p>Inicie sessão na sua conta recém-criada.</p><p>Aceda à secção de depósitos ou financiamento.</p><p>Escolha o seu método de pagamento preferido e deposite fundos na sua conta de trading.</p></div><div class="flex flex-col mb-4"><strong class="text-white font-semibold mb-2 text-lg">Selecione uma plataforma de trading:</strong><p>Escolha entre as plataformas disponíveis — MetaTrader 5 (MT5).</p><p>Descarregue e instale a plataforma de trading.</p></div><div class="flex flex-col mb-4"><strong class="text-white font-semibold mb-2 text-lg">Inicie sessão na plataforma:</strong><p>Abra a plataforma de trading.</p><p>Introduza as suas credenciais para aceder.</p><p>Se tiver dificuldades, o apoio ao cliente WINPROFX pode ajudá-lo. <a href="/contact" class="text-white underline">Contacte-nos</a></p></div>',
          },
          instruments: {
            title: 'Que instrumentos financeiros posso negociar com a WINPROFX?',
            body: '<p>Categorias habituais de instrumentos financeiros a que os traders podem aceder na WINPROFX: </p><ul><li><span><span>Forex (câmbio): </span>Pares de moedas como EUR/USD, GBP/JPY, USD/JPY, etc.</span></li><li><span><span>Índices:</span>Referências que representam o desempenho de um grupo de ações numa bolsa, como S&P500, US30, etc.</span></li><li><span><span>Commodities:</span>Como petróleo, produtos agrícolas, etc.</span></li><li><span><span>Metais preciosos:</span>Ativos como ouro, prata, platina, paládio, etc.</span></li><li><span><span>Criptomoedas:</span>Moedas digitais como Bitcoin, Ethereum, Litecoin, etc.</span></li></ul>',
          },
          depositWithdraw: {
            title: 'Como posso depositar e levantar fundos na WINPROFX?',
            body: '<p>Para a conveniência dos clientes, a WINPROFX oferece opções de depósito e levantamento através da nossa rede de parceiros bancários e cripto. Pode contactar a nossa equipa de apoio ao cliente para assistência adicional.</p>',
          },
          platforms: {
            title: 'Que plataformas de trading a WINPROFX suporta?',
            body: '<p>A WINPROFX suporta as seguintes plataformas de trading:</p><ul><li><span><span>MetaTrader 5 (MT5):</span>A plataforma padrão do setor para desktop e mobile em forex, índices, cripto, metais, commodities e petróleo.</span></li><li><span><span>Web Trading:</span>Trading no browser disponível em trade.winprofx.com para acesso rápido sem instalação.</span></li><li><span><span>Contas demo:</span>Pratique trading sem risco antes de operar em real.</span></li></ul><p>Mais informação na nossa <a href="/platform" class="text-white underline">página de plataforma</a> ou <a href="/contact" class="text-white underline">contacte o apoio</a> para assistência.</p>',
          },
          support: {
            title: 'Como posso contactar o apoio ao cliente WINPROFX?',
            body: '<p>O apoio ao cliente WINPROFX está disponível 24/7 através dos seguintes canais:</p><ul><li><span><span>Telefone:</span> <a href="tel:+97144471894" class="text-white underline">+971 4 447 1894</a></span></li><li><span><span>E-mail:</span> <a href="mailto:support@winprofx.com" class="text-white underline">support@winprofx.com</a></span></li><li><span><span>WhatsApp:</span> <a href="https://wa.me/97144471894" class="text-white underline" target="_blank" rel="noopener noreferrer">+971 4 447 1894</a></span></li><li><span><span>Chat ao vivo:</span> Disponível neste site através do widget de chat</span></li></ul><p>Visite a nossa <a href="/contact" class="text-white underline">página de contacto</a> para mais detalhes. Site oficial: <a href="https://winprofx.com" class="text-white underline" target="_blank" rel="noopener noreferrer">winprofx.com</a>.</p>',
          },
        },
        faqKeys: ['whatIsWinprofx', 'howToStart', 'instruments', 'depositWithdraw', 'platforms', 'support'],
      },
      contact: {
        meta: 'Apoio ao cliente',
        h1: 'Contacto WINPROFX',
        sections: {
          getInTouch: 'Entre em contacto',
          contactChannels: 'Canais de contacto',
          businessHours: 'Horário de atendimento',
          contactRiskLegal: 'Contacto, risco e nota legal',
        },
        labels: {
          supportEmail: 'E-mail de apoio',
          phone: 'Telefone',
          whatsapp: 'WhatsApp',
          officialWebsite: 'Site oficial',
          clientPortal: 'Portal de clientes',
          partnerPortal: 'Portal de parceiros',
        },
        introP1:
          'A WINPROFX oferece apoio ao cliente para consultas sobre conta, plataforma de trading, depósitos, levantamentos e questões gerais. O nosso site oficial principal é',
        introP2Start: 'Para aceder à sua conta e negociar, use o',
        introP2ClientPortal: 'portal de clientes em my.winprofx.com',
        introP2Middle: '. Os parceiros devem usar',
        introP2PartnerPortal: 'partner.winprofx.com',
        customerSupport: 'Apoio ao cliente:',
        customerSupportHours: 'Disponível 24 horas por dia, 7 dias por semana',
        officeHours: 'Horário de escritório (EAU):',
        officeHoursValue: 'Segunda a sexta, 09:00 – 18:00 (GST)',
        riskLegalP1Start: 'Antes de negociar, leia o nosso',
        riskWarningLink: 'Aviso de risco',
        riskLegalP1Middle: 'e consulte os nossos',
        legalDocumentsLink: 'Documentos legais',
        riskLegalP1End:
          'O trading de forex e CFD envolve risco significativo e pode não ser adequado para todos os investidores.',
        officialDomainsNote:
          'Verifique sempre que se encontra num domínio oficial WINPROFX antes de iniciar sessão ou depositar. Consulte',
        officialDomainsLink: 'Domínios oficiais',
        officialDomainsEnd: 'para ver a lista completa.',
      },
      blog: {
        meta: 'BLOG',
        h1: 'Blog',
        pageMeta: 'Blog',
        pageTitle: 'Blog WINPROFX',
        categories: {
          all: 'Todos',
          forex: 'Forex',
          indices: 'Índices',
          crypto: 'Crypto',
          oil: 'Petróleo',
          metals: 'Metais',
          commodities: 'Commodities',
        },
        posts: {
          overview: {
            title:
              'Visão geral de trading Forex, índices, cripto, metais, commodities e petróleo com WINPROFX',
            des: '',
          },
          indices: {
            title: 'Trading de índices com WINPROFX',
            des: 'Ao negociar índices, contar com a plataforma certa pode fazer uma diferença significativa no seu sucesso.',
          },
          forex: {
            title: 'Trading Forex com WINPROFX',
            des: 'No dinâmico mundo do trading Forex, encontrar a plataforma certa pode fazer uma grande diferença no seu sucesso.',
          },
          crypto: { title: 'Trading de CFD sobre cripto com WINPROFX', des: '' },
          commodities: { title: 'Trading de commodities com WINPROFX', des: '' },
          metals: { title: 'Trading de ouro e metais com WINPROFX', des: '' },
        },
        postKeys: ['overview', 'indices', 'forex', 'crypto', 'commodities', 'metals', 'overview'],
        details: {
          meta: 'Visão geral',
          title: 'Visão geral de trading Forex e CFD com WINPROFX',
          des: 'A WINPROFX oferece acesso a mercados forex e CFD através do MetaTrader 5. Esta visão geral explica o acesso à plataforma, serviços de conta e informação oficial da empresa e riscos antes de negociar.',
          sections: {
            markets: {
              title: 'Que mercados a WINPROFX oferece?',
              des: 'A WINPROFX oferece acesso a forex, índices, CFD sobre cripto, metais, commodities e petróleo através do MT5. A disponibilidade de instrumentos pode variar consoante o tipo de conta e a região.',
            },
            mt5: {
              title: 'Acesso à plataforma MT5',
              des: 'Os clientes podem aceder ao MetaTrader 5 em desktop e mobile. A plataforma inclui ferramentas gráficas, tipos de ordem e funcionalidades de gestão de conta. Podem estar disponíveis contas demo para praticar.',
            },
            verify: {
              title: 'Verifique a WINPROFX antes de negociar',
              des: 'Confirme sempre que se encontra num domínio oficial WINPROFX antes de iniciar sessão ou depositar. Revise o registo da empresa, o âmbito regulatório e os avisos de risco no Trust Center WINPROFX em winprofx.com.',
            },
            risk: {
              title: 'Aviso de risco',
              des: 'O trading de forex e CFD envolve risco significativo e pode não ser adequado para todos os investidores. As perdas podem exceder os depósitos ao usar alavancagem. Leia o aviso de risco completo no site oficial WINPROFX antes de negociar.',
            },
          },
          sectionKeys: ['markets', 'mt5', 'verify', 'risk'],
        },
      },
      accounts: {
        featureComparison: {
          title: 'Comparação de funcionalidades',
          standard: 'STANDARD',
          pro: 'PRO',
          ecn: 'ECN',
          rows: {
            minimumDeposit: 'Depósito mínimo',
            spread: 'Spread',
            commission: 'Comissão',
            maximumLeverage: 'Alavancagem máxima',
            instruments: 'Instrumentos',
            minimumLotSize: 'Tamanho mínimo de lote',
            maximumLotSize: 'Tamanho máximo de lote',
            marginCall: 'Margin call',
            stopOut: 'Stop out',
            orderExecution: 'Execução de ordens',
            swapFree: 'Sem swap',
          },
          values: {
            spreadStandard: 'A partir de 0,2 pips',
            spreadPro: 'A partir de 0,1 pips',
            spreadEcn: 'A partir de 0 pips',
            commissionEcn: 'Até 3,50 USD por lado e por lote',
            orderExecution: 'Mercado',
            swapFree: 'Disponível',
          },
          instrumentKeys: ['forex', 'metal', 'crypto', 'energies', 'indices'],
        },
      },
      introducingBroker: {
        calculator: {
          title: 'Quanto pode ganhar? Calcule o seu lucro',
          clients: 'Clientes',
          rewards: 'Recompensas',
          perLot: 'Por lote',
          ctaTitle: 'Torne-se parceiro WINPROFX e comece a ganhar hoje',
          steps: {
            apply: 'Candidate-se a <span>Introducing Broker </span>',
            share: 'Atraia clientes partilhando o seu <span>link de referência</span>',
            earn: 'Receba <span>pagamentos diários de comissões</span>',
          },
          description:
            'Esta calculadora avançada de comissões estima os ganhos com base no número de clientes dos Introducing Brokers e no seu volume de trading em lotes, refletindo com precisão as comissões obtidas.',
          partnerDes:
            'Embarque num caminho rentável como parceiro WINPROFX e comece a gerar rendimentos hoje. Junte-se à nossa rede dinâmica, aproveite oportunidades de recompensa e avance em direção ao sucesso financeiro.',
          stepKeys: ['apply', 'share', 'earn'],
        },
      },
    },
    tools: {
      analytics: {
        meta: 'ANALÍTICA',
        h1: 'Ferramentas analíticas potentes para decisões de trading mais inteligentes',
        faqTitle: 'Perguntas frequentes',
        newsBlog: {
          eventTracker: {
            meta: 'Rastreador de eventos',
            title: 'Acompanhe eventos económicos-chave com o calendário económico',
            des: 'Mantenha-se atualizado sobre eventos económicos e publicações de dados essenciais para melhorar a sua estratégia de trading na WINPROFX.',
          },
          marketNews: {
            meta: 'Notícias de mercado',
            title: 'Notícias de mercado em tempo real da WINPROFX',
            des: 'Mantenha-se atualizado com notícias de mercado e as últimas atualizações da equipa FXStreet News em tempo real. Aceda a estes dados úteis na app WINPROFX Trade ou na sua Área Pessoal WINPROFX.',
          },
        },
        smartSignals: {
          meta: 'Sinais inteligentes',
          title: 'Sinais inteligentes',
          des: 'Obtenha insights acionáveis da Trading Central para apoiar as suas decisões de trading.',
        },
        faqs: {
          marketPredictions: {
            title: 'Que ferramentas da nossa plataforma oferecem as melhores previsões de mercado?',
            body: 'Utilize o calendário económico para acompanhar eventos e publicações de dados importantes. Mantenha-se atualizado com notícias em tempo real através da FXStreet News e obtenha insights da Trading Central WebTV.',
          },
          tradingPatterns: {
            title: 'Que ferramentas do nosso site são melhores para analisar padrões de trading?',
            body: 'A WINPROFX oferece uma combinação de ferramentas de análise fundamental e técnica para ajudá-lo a prever movimentos de preço e analisar padrões. As ferramentas são gratuitas e acessíveis, permitindo-lhe planear operações com confiança.',
          },
          freeSignals: {
            title: 'Onde posso aceder a sinais de trading gratuitos no site WINPROFX?',
            body: 'Pode aceder a sinais gratuitos da Trading Central na sua Área Pessoal e na app WINPROFX Trade. Estes sinais combinam diversas abordagens analíticas e são valiosos tanto para principiantes como para traders experientes.',
          },
        },
        bannerMeta: 'Ferramentas analíticas',
        bannerTitle: 'Ferramentas analíticas potentes para decisões de trading mais inteligentes',
        bannerDes:
          'Para ajudá-lo a planear operações com confiança, damos-lhe acesso às melhores ferramentas analíticas fundamentais e técnicas.',
        smartSignalsTitle: 'Sinais de trading estratégicos',
        smartSignalsDes:
          'Aproveite ao máximo os sinais da Trading Central para elaborar os seus planos e técnicas de trading. Estes sinais combinam diversas técnicas analíticas e estão disponíveis na app WINPROFX Trade ou na sua Área Pessoal WINPROFX.',
        faqSubtitle:
          'Encontre respostas claras e concisas às perguntas mais comuns sobre trading, abertura de conta, depósitos, levantamentos e funcionalidades da plataforma.',
        faqKeys: ['marketPredictions', 'tradingPatterns', 'freeSignals'],
      },
      converterUi: {
        title: 'Converta a sua moeda',
        account: 'Conta',
        accountPlaceholder: 'Introduza a sua conta',
        convertedAmount: 'Montante convertido',
        convertedPlaceholder: 'Montante convertido',
        convertNow: 'Converter agora',
      },
      calculatorUi: {
        yourOrder: 'A sua ordem',
        accountType: 'Tipo de conta',
        selectAccountType: 'Selecione o tipo de conta',
        standard: 'Standard',
        lotSizePlaceholder: 'Introduza o tamanho do lote',
        disclaimer:
          'Aviso legal: A calculadora de trading é fornecida apenas para fins ilustrativos. Os resultados são educativos e estimativos; não deve basear-se neles para tomar decisões de investimento. Os resultados em tempo real só podem ser determinados no momento da execução da ordem.',
        accountCurrency: 'Moeda da conta',
        selectAccountCurrency: 'Selecione a moeda da conta',
        selectInstrument: 'Selecione o instrumento',
        lot: 'Lote',
        leverage: 'Alavancagem',
        selectLeverage: 'Selecione a alavancagem',
        calculateNow: 'Calcular agora',
        results: 'Resultados',
        margin: 'Margem',
        spreadCost: 'Custo do spread',
        commission: 'Comissão',
        swapShot: 'Swap curto',
        swapLong: 'Swap longo',
        pipValue: 'Valor do pip',
        pro: 'Pro',
        ecn: 'ECN',
        disclaimerLabel: 'Aviso legal:',
        disclaimerBody:
          'A calculadora de trading é fornecida apenas para fins ilustrativos. Os resultados são educativos e estimativos; não deve basear-se neles para tomar decisões de investimento. Os resultados em tempo real só podem ser determinados no momento da execução da ordem.',
      },
    },
    common: {
      buttons: {
        getStarted: 'Começar',
        learnMore: 'Saber mais',
        openAccount: 'Abrir conta',
        startTrading: 'Começar a negociar',
        downloadNow: 'Descarregar agora',
        viewPage: 'Ver página →',
        viewAllArticles: 'Ver todos os artigos →',
        readFullRiskWarning: 'Ler aviso de risco completo',
      },
      labels: {
        home: 'Início',
        trustCenter: 'Centro de confiança',
        lastReviewed: 'Última revisão:',
        reviewedBy: 'Revisto por:',
        riskWarning: 'Aviso de risco:',
        lastUpdated: 'Última atualização: {{date}}',
        authorReviewedBy: 'Autor: {{author}} · Revisto por: {{reviewer}}',
        faqTitle: 'Perguntas frequentes',
        relatedTrustPages: 'Páginas de verificação relacionadas WINPROFX',
        relatedPages: 'Páginas relacionadas WINPROFX',
        moreArticles: 'Mais artigos',
        whatsapp: 'WhatsApp',
      },
      risk: {
        short:
          'O trading de forex e CFD envolve risco significativo e pode não ser adequado para todos os investidores. Os clientes devem compreender os riscos antes de negociar.',
        full: 'O trading de forex, CFD e produtos financeiros relacionados envolve risco significativo e pode não ser adequado para todos os investidores. Pode perder parte ou a totalidade do seu capital investido. O desempenho passado não garante resultados futuros. Os clientes devem compreender os riscos antes de negociar e procurar aconselhamento independente se necessário.',
      },
      errors: {
        title: 'Página não encontrada',
        seoTitle: 'Página não encontrada | WINPROFX',
        backHome: 'Voltar ao início',
      },
      download: {
        appStorePrefix: 'Descarregar na',
        googlePlayPrefix: 'DISPONÍVEL NA',
        windowsPrefix: 'Descarregar para',
        windowsLabel: 'Windows',
        webTradingPrefix: 'Abrir em',
        webTradingLabel: 'WebTrading',
      },
      cta: {
        accountsTitle: 'Está pronto para começar a negociar?',
        accountsDes: 'Negocie com uma corretora premiada!',
        openLiveAccount: 'Abrir conta real',
      },
    },
  },
}

const FILE_MAP = {
  homepage: 'homepage.json',
  seo: 'seo.json',
  trading: 'trading.json',
  tools: 'tools.json',
  common: 'common.json',
}

console.log('Applying es/pt core translations...\n')

for (const locale of LOCALES) {
  console.log(`Locale: ${locale}`)
  const localePatches = PATCHES[locale]
  for (const [key, file] of Object.entries(FILE_MAP)) {
    if (localePatches[key]) {
      applyPatch(locale, file, localePatches[key])
    }
  }
  console.log('')
}

console.log('Done.')
