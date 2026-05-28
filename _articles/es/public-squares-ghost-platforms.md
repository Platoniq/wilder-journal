---
layout: article
volume-uid: wilder-journal-2
category: learnings
published: true
date: 2026-05-27T12:29:00.000+02:00
date-updated: 2026-05-27T12:29:00.000+02:00
article-order: 20
uid: Public-Squares-Ghost-Platforms
title: Plazas públicas, andenes fantasma y el aroma de la democracia digital
description: Cada plaza pública tiene su propio ambiente, su propia mezcla de
  olores, sonidos y ritmos.
author: Nadia Nadessan & Olivier Schulbaum
author_uids:
  - nadia-nadesan
  - olivier-schulbaum
cover:
  path: /media/articles/heroes/captura-de-pantalla-2026-05-27-a-las-12.27.27.png
  mobile: /media/articles/mobile/captura-de-pantalla-2026-05-27-a-las-12.27.27.png
  thumbnail: /media/articles/thumbnails/captura-de-pantalla-2026-05-27-a-las-12.27.27.png
  alt: Inspirado en la obra de Elise Racine
  credits: Inspirado en la obra de Elise Racine
  caption: Inspirado en la obra de Elise Racine
related_article_uids:
  - Against-Administrative-Obscurantism
  - consejo-ciudadano-congreso
stickers:
  layout: layout-none
  sticker_one_animation: animation-none
  sticker_two_animation: animation-none
call_to_action: cta-contact
image:
  path: /media/articles/social/captura-de-pantalla-2026-05-27-a-las-12.27.27.png
---
Cada plaza pública tiene su propio ambiente, su propia mezcla de olores, sonidos y ritmos. Algunas «plazas» huelen a café y a humo de cigarrillo a las siete de la mañana, cuando los trabajadores municipales, los dueños de las cafeterías y los vecinos de toda la vida intercambian chismes antes de que empiece el día. Otras desprenden el aroma de la comida frita, la sal marina, la piedra mojada tras la lluvia de verano o el pan que llega de las panaderías cercanas. En ciertos lugares, en el aire persisten rastros de burocracia: tinta de impresora, archivos en papel, oficinas municipales sobrecalentadas, el zumbido de las luces fluorescentes. En otros, la plaza se llena de la energía de la protesta y la celebración: tambores, pintura en spray, fuegos artificiales, sudor, música, niños corriendo entre manifestaciones y puestos de mercado.

Los urbanistas rara vez hablan de estas dimensiones sensoriales de la infraestructura, pero cualquiera que haya vivido en diferentes ciudades, o haya pasado por diferentes crisis, las comprende instintivamente. Los espacios públicos nunca son neutrales. Acumulan hábitos, tensiones, rituales y formas de convivencia. Algunas plazas invitan a conversaciones prolongadas y a la imaginación colectiva. Otras comunican en silencio que la gente debe seguir adelante, permanecer en silencio o dejar las decisiones en manos de los expertos. Algunas plazas se perciben como de propiedad colectiva. Otras se perciben como vigiladas.

**Las infraestructuras democráticas digitales no son una excepción.**

Las plataformas como Decidim también tienen su propio «olor», en sentido figurado. Heredan culturas políticas, ritmos administrativos, inquietudes institucionales y supuestos sobre a quién va dirigida la participación. Sus interfaces pueden parecer limpias y universales, pero bajo los botones y los ensamblajes se esconden genealogías urbanas invisibles: el municipalismo barcelonés, el federalismo brasileño, las culturas de planificación suizas, las historias activistas, las tradiciones burocráticas e incluso las actitudes regionales hacia el conflicto y el consenso.

Esto quedó sorprendentemente claro en dos conversaciones muy diferentes en el DecidimFest de este año. Una procedía de Brasil, donde Leonardo Mitchalski y el ecosistema Brasil Participativo están construyendo algo audaz: una infraestructura democrática pública capaz de extenderse a miles de municipios. La otra surgió de Suiza, donde Lars Kaiser reflexiona sobre una plataforma Decidim que estuvo técnicamente lista a los pocos días de que un catastrófico deslizamiento de tierra destruyera la localidad de Blatten, pero que nunca llegó a cobrar vida política.

### **Brasil: Allanando el camino hacia los bienes comunes digitales**

Leonardo describe su misión en términos sencillos: la infraestructura está ahí para «facilitar la vida a los demás». Leonardo habla de la infraestructura casi como un ingeniero de carreteras habla de pavimentar vías: el objetivo es facilitar el desplazamiento de los demás. En Brasil, esto significa simplificar la implementación de Decidim de tal manera que los municipios ya no necesiten un ejército de ingenieros especializados solo para ponerse en marcha. El equipo condensa lo que solía ser una enredada «sopa de letras» de bases de datos, dependencias y configuraciones en implementaciones que se realizan prácticamente con un solo clic. La ambición política que se esconde tras esta simplificación técnica es enorme.

Porque cuando la infraestructura de participación es demasiado complicada, la propia democracia se distribuye de forma desigual. Las instituciones más ricas pueden permitirse equipos de expertos; los municipios más pobres, no. Algunas ciudades cuentan con espacios cívicos magníficamente mantenidos, mientras que otras heredan ruinas digitales abandonadas. La fricción técnica se convierte en exclusión política.

{% gallery { "simple": false, "images": [{"path":"/media/captura-de-pantalla-2026-05-27-a-las-12.58.12.png","alt":"Picture by Gloria Mendoza Better Images of AI / ","caption":"Picture by Gloria Mendoza Better Images of AI / CC BY 4.0 www.gloriamc.xyz","credits":"CC BY 4.0 www.gloriamc.xyz"}] } %}

### **De la «sopa de letras» a las implementaciones con un solo clic en Brasil**

La instalación de Decidim suele requerir una serie de pasos, como la configuración de Redis, Postgres y otros componentes que Leonardo denomina en broma «sopa de letras». La pila SaaS brasileña los condensa en un único comando que instala todas las dependencias de una sola vez, convirtiendo lo que antes era un proceso de varios pasos y propenso a errores en algo más accesible para los administradores y los nuevos colaboradores.  

Además, han creado una pequeña aplicación web que permite a un administrador del sistema poner en marcha una nueva instancia de Decidim para una ciudad o un estado a través de una interfaz de navegador. El flujo de trabajo es sencillo: descargar el proyecto, ejecutar un comando para instalar la aplicación web en Kubernetes, ejecutar otro comando para exponerla y, a continuación, configurar las organizaciones a través de una interfaz fácil de usar. Algunas personalizaciones aún deben ser realizadas manualmente por un administrador, pero se está trabajando para prellenar parte de esa configuración, de modo que los gobiernos locales puedan pasar de la «idea» a la «plataforma participativa en funcionamiento» mucho más rápidamente.  En este momento, once municipios están preparados para las pruebas beta, con el potencial de ampliarse a unos 5000 municipios y estados.

Este es exactamente el tipo de **accesibilidad** e **iteración** que aboga el «Safe(r) Spaces Playbook» de Platoniq: ocultar la complejidad innecesaria, documentar las decisiones tomadas con criterio y dejar margen para la adaptación a diferentes contextos, en lugar de dar por sentada una configuración perfecta. Reconoce que lo que funciona en Brasil puede no ser aplicable en todas partes, pero ofrece una plantilla con un enfoque definido que otros pueden estudiar, adaptar y ajustar.   

{% gallery { "simple": true, "images": [{"path":"/media/captura-de-pantalla-2026-05-27-a-las-12.58.25.png"}] } %}

La respuesta de Brasil no es solo software de código abierto, sino hospitalidad infraestructural. Su ecosistema, construido a través de una infraestructura de nube pública y una arquitectura Kubernetes portátil, intenta garantizar que las herramientas democráticas puedan viajar. Un municipio no debería depender de un único proveedor, consultora o experto técnico carismático. La infraestructura de participación debería comportarse más como un servicio público compartido que como un producto de lujo.

Se trata de una fascinante inversión de cómo muchos gobiernos siguen abordando la tecnología cívica. Por lo general, la participación digital llega como una interfaz pulida que se vende siguiendo la lógica de la contratación pública: una plataforma como producto. Pero el enfoque de Leonardo trata la infraestructura en sí misma como un bien común. Lo importante no es solo la plaza visible donde tiene lugar la participación, sino las tuberías ocultas que permiten que la plaza permanezca abierta, se mantenga y sea de propiedad colectiva. Y quizás ahí es donde la metáfora del olor vuelve a ser útil.

Algunas infraestructuras digitales desprenden un aire de exclusividad. Puertas cerradas. Costosos contratos de mantenimiento. Dependencia. Otras desprenden un aire experimental y precario: repositorios de GitHub abandonados, agotamiento de los activistas, agotamiento de los voluntarios. El proyecto brasileño desprende un aire diferente. Desprende un aire institucional, pero en un sentido sorprendentemente esperanzador: como un comedor social que intenta alimentar a mucha gente con recursos limitados, al tiempo que mantiene la receta abierta para que otros puedan adaptarla.

Cuando se le pregunta por qué es importante este trabajo, Leonardo señala a los países en desarrollo, donde no hay «tantos ingenieros de software altamente cualificados» y donde los beneficios de herramientas fáciles de usar y bien documentadas pueden ser enormes para las instituciones y las comunidades. Para él, cada documento, cada automatización que hace que el mantenimiento sea menos una cuestión de pánico y más un análisis tranquilo de las causas fundamentales, forma parte de hacer que las infraestructuras de participación sean más **inclusivas.**

### **Sobrecarga, «buitres» y parálisis política**

Las plataformas como Decidim suelen imaginarse como navajas suizas democráticas: herramientas modulares que pueden desplegarse de forma diferente según la situación. Asambleas, propuestas, debates, mecanismos de rendición de cuentas: cada función promete adaptabilidad. En Blatten, Suiza, Lars Kaiser y su equipo se encontraron con el dilema contrario.

Cuando un enorme desprendimiento de rocas arrasó la localidad suiza en 2025, los residentes se vieron repentinamente dispersos por todo el valle. Las familias se trasladaron a pisos temporales, habitaciones libres y casas de familiares, mientras el país debatía si tenía sentido reconstruir la localidad.

El equipo de Lars configuró rápidamente una plataforma Decidim para ayudar a mantener conectada a la comunidad desplazada. En dos días, la infraestructura estaba lista. Los residentes la apoyaron. Los funcionarios mostraron interés. La plataforma estaba lista.

Sin embargo, nunca llegó a ponerse realmente en marcha.

{% gallery { "simple": false, "images": [{"path":"/media/captura-de-pantalla-2026-05-27-a-las-12.59.16.png","credits":"Michael Buholzer (AP/LaPresse)","alt":"Vista aérea del pueblo suizo de Blatten un día después de la enorme avalancha provocada por el desprendimiento del glaciar Birch","caption":"Vista aérea del pueblo suizo de Blatten un día después de la enorme avalancha provocada por el desprendimiento del glaciar Birch"}] } %}

Además de la solidaridad y las donaciones, la catástrofe atrajo a una avalancha de actores externos: estudios de planificación, arquitectos e inversores que llegaban con ofertas de «ayuda» que, a menudo, no eran más que propuestas para proyectos lucrativos. Una de las personas implicadas describió a estos actores como «buitres que se cebaban con la gente del valle», captando la sensación de que la afluencia de dinero y propuestas resultaba tan amenazante como solidaria.

Para los ayuntamientos locales, que ya se enfrentaban a la gestión de la logística de emergencia y a la incertidumbre a largo plazo, esto supuso una sobrecarga administrativa y una profunda desconfianza. Se elaboró un concepto para un lugar de encuentro online y offline, que incluía la plataforma Decidim, e incluso fue aprobado por el ayuntamiento del valle, pero su implementación «se empantanó en algún laberinto administrativo». Los residentes estaban preparados; la plataforma estaba lista, pero el enlace nunca se compartió oficialmente.

En el Valais, el mantenimiento del contacto social y la cohesión tras la catástrofe se consideró una cuestión «secundaria» y, por lo tanto, no se le dio prioridad ante la avalancha de tareas «urgentes», aunque, para una comunidad dispersa, la infraestructura relacional es una condición previa para cualquier debate significativo sobre la reconstrucción.

No porque el sistema fallara. No porque la gente rechazara participar. Sino porque la administración entró en un estado familiar para muchos territorios en crisis: la sobrecarga cognitiva. La logística de emergencia, las presiones de la reconstrucción, la atención de los medios, los inversores oportunistas, la incertidumbre política: todo ello colisionó simultáneamente.

Y en estas condiciones, mantener la conexión social pasó a clasificarse como «secundario». Opcional. De menor importancia. Pero cualquiera que haya vivido una catástrofe sabe que lo contrario es cierto.

**Tras un desastre, la cohesión social no es un adorno. Es infraestructura.**

Sin espacios donde las personas puedan mantenerse conectadas, discutir, llorar, recordar e imaginar juntos el futuro, la reconstrucción se convierte en algo puramente técnico. Se reconstruyen las carreteras. Vuelven las casas. Pero la plaza pública desaparece.

{% gallery { "simple": true, "images": [{"path":"/media/captura-de-pantalla-2026-05-27-a-las-12.59.45.png"}] } %}

### **Participación subversiva, en lugar de métodos «plug-and-play»**

Lars Kaiser tiene experiencia en ordenación del territorio en Suiza, donde la participación suele estar vinculada a la legislación urbanística y a las transformaciones urbanas, más que a grandes debates constitucionales. Describe la misión de UrbanEquip como la «democratización del desarrollo urbano», centrándose en proyectos que sean divertidos y capaces de tener un impacto real en quienes dan forma a las ciudades y pueblos. Esa mezcla de diversión, ingresos y efecto estructural encaja mal en un contexto de catástrofe, donde las administraciones eliminan instintivamente cualquier cosa que parezca experimental o emocional.

Lo que Lars Kaiser entiende, quizá debido a su trabajo en juegos urbanos y participación basada en conflictos, es que los espacios democráticos no pueden diseñarse en torno a fantasías de colaboración permanente. Las ciudades están llenas de incentivos contradictorios. Residentes, promotores, políticos, inversores, urbanistas: rara vez quieren lo mismo. Fingir lo contrario da lugar a rituales de participación estériles que se derrumban ante la presión real.

Visto así, el fantasma de la plataforma de Blatten resulta profundamente revelador.

El problema nunca fue la falta de tecnología. La infraestructura existía. La cuestión más profunda era que el ecosistema institucional circundante ya no disponía del ancho de banda emocional necesario para albergar el propio espacio democrático. La plaza se había construido, pero nadie podía mantenerla viva social ni políticamente.

Esto también pone de manifiesto que la cohesión social no es una preocupación secundaria o «secundaria» tras una catástrofe. Para las comunidades dispersas, mantener la conexión, la confianza y el debate colectivo forma parte de la infraestructura esencial de la recuperación, tan importante como la vivienda, la logística o la ingeniería.

Y esta puede ser una de las cuestiones centrales para el futuro de la democracia digital.

No si las plataformas pueden escalar técnicamente. No si las interfaces tienen un aspecto moderno. Ni siquiera si aumentan las tasas de participación.

Sino si las sociedades saben cómo tratar las infraestructuras democráticas como infraestructuras esenciales; especialmente en momentos de urgencia.

Porque las plazas públicas son algo extraño. A menudo, su valor solo se hace evidente cuando desaparecen.

Uno se da cuenta de ello tras inundaciones, apagones, desplazamientos, colapsos políticos o aislamientos forzados. De repente, lo que importaba nunca fue solo el pavimento o los bancos en sí, sino la posibilidad de encontrarse con otros una y otra vez más allá de las diferencias. De ver el conflicto antes de que se endurezca y se convierta en abstracción. De mantener un cierto ritmo compartido de vida colectiva.

Las infraestructuras democráticas digitales están empezando a heredar este papel.

Algunas se parecerán a gigantescos sistemas de transporte federal, como el ecosistema brasileño. Otras pueden seguir siendo refugios temporales frágiles, como la plataforma no realizada en Blatten. Algunas olerán a burocracia; otras, a activismo; otras, a comedores de ayuda mutua montados durante emergencias.

Ambas experiencias ponen de relieve cómo se perciben políticamente las plataformas de participación. **En contextos altamente frágiles inundados de consultores, inversores y actores externos, Decidim corre el riesgo de ser visto como una oferta de servicios más, a menos que esté claramente arraigado en el valor público, la confianza local y el compromiso democrático a largo plazo.**

Pero quizás la lección más importante de ambas historias es esta:

Las plataformas no son simplemente herramientas que utilizamos para organizar la democracia. Son lugares.

Y, como todos los lugares, requieren mantenimiento, no solo de servidores e interfaces, sino también de confianza, atención, conflicto, memoria y presencia colectiva.

En DecidimFest, este trabajo se situó en la intersección entre el código, el cuidado y la política. Nos recuerda que los espacios digitales más seguros no surgen únicamente de las políticas de moderación o las directrices comunitarias, sino de cada decisión que facilita que el próximo ayuntamiento, el próximo estudiante o el próximo funcionario se incorpore, aprenda y mantenga los bienes comunes digitales de los que dependemos.

*Este artículo forma parte del Proyecto INSPIRE, una iniciativa de investigación de Horizonte Europa que explora la inclusión interseccional, la participación democrática y las infraestructuras participativas en los espacios digitales y físicos. Los lectores interesados en el contexto de investigación más amplio pueden consultar el informe [Exploring the Intersection of E-Democracy Platforms, Urban Development Models, and Political Cultures (junio de 2025)](https://www.inspiredemocracy.eu/_files/ugd/a49cde_afb9ec9dba0e420cb86219ea7cec2b38.pdf), que ofrece una base conceptual para entender las plataformas de participación digital como infraestructuras cívicas moldeadas por las culturas políticas, los ensamblajes urbanos y las lógicas espaciales.*

*__*

Imagen de portada inspirada en la obra de Elise Racine
