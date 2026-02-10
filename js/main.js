/* ============================================
   ZEBRAFISH THESIS - Interactive JavaScript
   ============================================ */

// ===== TRANSLATIONS =====
const translations = {
    en: {
        heroBadge: "PhD Thesis",
        heroLine1: "How do tiny fish",
        heroLine2: "decode danger",
        heroLine3: "using multiple senses?",
        heroSub: "An interactive journey through multisensory integration in the zebrafish brain",
        scrollPrompt: "Scroll to explore",
        sec1Label: "01 / The Challenge",
        sec1Title: "Life-or-death decisions in milliseconds",
        sec1Text1: 'Imagine you are a tiny fish larva, just 4 millimeters long. A shadow grows above you -- something is diving toward you. At the same time, you feel a shockwave rip through the water. You have less than 10 milliseconds to decide: flee or freeze?',
        sec1Text2: 'Animals constantly face these decisions. Their survival depends on combining information from different senses -- sight, hearing, touch -- to build a complete picture of the threat. This process is called <strong>multisensory integration</strong>.',
        sec1GameLabel: "Try to escape the looming predator!",
        sec1GameInstr: "Click anywhere before the shadow fills the screen",
        sec1GameStart: "Start",
        sec1GameCaption: 'This expanding dark circle is a "looming stimulus" -- it simulates a predator diving toward a fish. In this thesis, these stimuli were used to trigger escape responses in zebrafish larvae.',
        sec2Label: "02 / The Model",
        sec2Title: "Meet the zebrafish",
        sec2Text1: "The zebrafish (Danio rerio) is one of neuroscience's most powerful model organisms. These small freshwater fish from South Asia have a remarkable advantage: their larvae are completely transparent.",
        sec2Text2: "This transparency, combined with genetically encoded fluorescent proteins (GFP) that glow green when neurons fire, allows scientists to watch the entire brain think in real time -- something impossible in almost any other vertebrate.",
        sec2InterLabel: "Click the fish to reveal its brain",
        sec2Feat1T: "Transparent",
        sec2Feat1D: "Larvae are see-through, enabling live brain imaging without surgery",
        sec2Feat2T: "Fluorescent neurons",
        sec2Feat2D: "GCaMP6f proteins glow green when neurons fire, acting as a real-time activity sensor",
        sec2Feat3T: "Lightning-fast escapes",
        sec2Feat3D: "Escape responses begin in under 5 ms, among the fastest in the animal kingdom",
        sec2Feat4T: "70% shared genes",
        sec2Feat4D: "Zebrafish share ~70% of their genes with humans, making findings broadly relevant",
        sec2FigCap: "Advantages of the zebrafish model and its lifecycle. Adapted from Garg & Geurten, 2024 and D'Costa & Shepherd, 2009.",
        sec3Label: "03 / The Brain",
        sec3Title: "A tiny brain with big answers",
        sec3Text1: 'The zebrafish brain is only about 500 micrometers long, yet it contains all the fundamental regions found in human brains. One structure particularly fascinated us: the <strong>Tectum</strong>.',
        sec3Text2: "The Tectum (called Superior Colliculus in mammals) was historically considered a purely visual processing center. It receives direct input from the eyes and creates a map of the visual world. But we suspected it might do much more.",
        sec3InterLabel: "Hover over the brain regions to explore",
        brainTel: "Telencephalon",
        brainTec: "Tectum",
        brainCer: "Cerebellum",
        brainHind: "Hindbrain",
        brainFront: "Front",
        brainBack: "Back",
        sec4Label: "04 / The Discovery",
        sec4Title: "The Tectum hears danger",
        sec4Text1: 'Everyone assumed the Tectum was just for vision. Our first major discovery was that <strong>abrupt, danger-signaling sounds activate neurons deep inside the Tectum</strong>. This had never been clearly demonstrated before in zebrafish.',
        sec4Text2: "Using calcium imaging in live, transparent larvae, we watched neurons glow green as they responded to sudden sounds -- the kind that would signal a predator splashing into the water.",
        sec4InterLabel: "Toggle the stimuli to see how the Tectum responds",
        sec4BtnVis: "Vision",
        sec4BtnAud: "Sound",
        sec4BtnBoth: "Both",
        sec4Caption: "The deep layers of the Tectum respond to abrupt sounds. When combined with visual stimuli, the response is dramatically enhanced.",
        sec5Label: "05 / Stronger Together",
        sec5Title: "1 + 1 = 3",
        sec5Text1: 'Here is where it gets remarkable. When we presented visual and auditory danger signals simultaneously, the brain response was not simply the sum of each individual signal. <strong>The Tectum showed a dramatic multisensory enhancement</strong> -- significantly more neurons were recruited, and they responded more intensely.',
        sec5Text2: "This enhancement translated directly into behavior: zebrafish were significantly more likely to escape when they received both signals at once compared to either signal alone.",
        sec5InterLabel: "Mix the signals and watch the escape probability change",
        sec5SliderV: "Visual intensity",
        sec5SliderA: "Sound intensity",
        sec5Off: "Off",
        sec5Low: "Low",
        sec5High: "High",
        sec5ProbLabel: "Escape probability",
        sec5ProbCtx0: "No stimulus (baseline)",
        sec5ProbCtxV: "Visual only",
        sec5ProbCtxA: "Sound only",
        sec5ProbCtxM: "Combined audiovisual",
        sec5EnhText: "Multisensory enhancement!",
        sec5FigCap: "Escape probability for each combination of visual (contrast) and auditory (amplitude) stimuli. Combined stimuli consistently outperform either component alone, especially at low intensities.",
        sec6Label: "06 / A Beautiful Paradox",
        sec6Title: "The weaker the signals, the stronger the boost",
        sec6Text1: 'One of the most elegant principles of multisensory integration is called <strong>inverse effectiveness</strong>: when individual signals are weak and ambiguous, combining them produces the greatest proportional improvement.',
        sec6Text2: 'Think of it like this: in a quiet room, you can understand speech easily with just hearing. But in a noisy party, seeing the speaker\'s lips moving suddenly makes a huge difference. That is inverse effectiveness -- and we found it in the zebrafish Tectum.',
        sec6InterLabel: "Watch how the multisensory boost changes with stimulus strength",
        sec6Strong: "Strong signals",
        sec6Weak: "Weak signals",
        sec6Explanation: "When each signal alone is barely noticeable, combining them produces a disproportionately large improvement. This is exactly what we observed in both neural activity and escape behavior.",
        sec7Label: "07 / The Escape Menu",
        sec7Title: "Two ways to flee",
        sec7Text1: 'Zebrafish larvae do not just escape -- they <strong>choose how</strong>. We discovered that two distinct escape behaviors are differentially triggered by the type of sensory signal:',
        sec7SLCsub: "Short Latency C-start",
        sec7SLC1: "Triggered mostly by sudden sounds",
        sec7SLC2: "Ultra-fast: begins in ~5 ms",
        sec7SLC3: "Powered by the giant Mauthner neuron",
        sec7SLC4: "Explosive, stereotyped movement",
        sec7LLCsub: "Long Latency C-start",
        sec7LLC1: "Triggered mostly by visual looming",
        sec7LLC2: "Slower but still fast: ~20-30 ms",
        sec7LLC3: "Driven by smaller hindbrain neurons",
        sec7LLC4: "More flexible, adaptable movement",
        sec7Text2: "When both signals arrive together, the fish selects its escape type based on which signal is more salient. If the sound is louder, it performs a fast SLC. If the visual loom is more obvious, it opts for a flexible LLC. The brain is not just detecting danger -- it is choosing the best strategy for survival.",
        sec7GameLabel: "Reaction game: Guess the stimulus from the escape speed!",
        sec7GuessAudio: "Sound",
        sec7GuessVisual: "Visual",
        sec7GuessFast: "Fast",
        sec7GuessSlow: "Slower",
        sec7Fast: "Fast",
        sec7Flex: "Flexible",
        sec7GameStart: "Play",
        sec7FigCap: "Dimensionality reduction of kinematic features reveals two distinct clusters of escape behaviors: SLC (fast, sound-triggered) and LLC (flexible, vision-triggered). Data from 40 zebrafish larvae.",
        sec8Label: "08 / The Big Picture",
        sec8Title: "A new model for survival decisions",
        sec8Text1: "By linking brain activity to behavior, this thesis proposes a model for how the zebrafish brain transforms sensory signals into life-saving actions:",
        circEye: "Vision",
        circTec: "Tectum",
        circBadge: "Integration",
        circHind: "Hindbrain",
        circEsc: "Escape!",
        circEar: "Hearing",
        sec8FindTitle: "Key Findings",
        sec8Find1: "The Tectum is not just visual -- it robustly processes danger-signaling sounds, challenging decades of assumptions.",
        sec8Find2: "Combining sight and sound produces a multisensory enhancement in the Tectum, recruiting more neurons with stronger responses.",
        sec8Find3: "This enhancement follows inverse effectiveness: weak, ambiguous signals benefit the most from combination.",
        sec8Find4: "Tectal integration links directly to hindbrain motor circuits and predicts escape behavior.",
        sec8Find5: "Fish choose between fast (SLC) or flexible (LLC) escapes based on which sensory signal dominates -- a form of real-time survival strategy selection.",
        sec9Label: "09 / Why It Matters",
        sec9Title: "Beyond the fish tank",
        sec9Text1: "The Tectum of zebrafish is homologous to the Superior Colliculus in humans. The same multisensory integration principles discovered here operate in your brain right now, every time you combine what you see and hear to make sense of the world around you.",
        sec9Text2: "Understanding these circuits at a fundamental level -- neuron by neuron, in an intact living brain -- opens the door to understanding how sensory processing goes wrong in conditions like autism spectrum disorders, where multisensory integration is often altered.",
        sec9Text3: "This work also pioneered new methods: deep learning for animal tracking, semi-automatic neuron segmentation, and novel analysis pipelines -- tools now being used by other researchers in the lab to tackle new questions.",
        sec9M1T: "In vivo calcium imaging",
        sec9M1D: "Watching hundreds of neurons fire in real time in living larvae",
        sec9M2T: "Deep learning tracking",
        sec9M2D: "Training neural networks to track zebrafish pose at 437 fps",
        sec9M3T: "Brain atlas alignment",
        sec9M3D: "Mapping every neuron to a standardized brain reference",
        aboutTitle: "About this thesis",
        aboutText1: 'This PhD thesis was conducted at the <strong>SPIN Lab</strong> (Neural Processing and Integration Systems Lab), IFIBYNE (UBA/CONICET), Buenos Aires, Argentina, under the supervision of Dr. Violeta Medan.',
        aboutText2: "Part of this work was carried out in the laboratory of Dr. German Sumbre at the Ecole Normale Superieure (IBENS), Paris, France.",
        aboutAuthorLabel: "Author:",
        aboutAdvisorLabel: "Advisor:",
        aboutUniLabel: "University:",
        aboutYearLabel: "Year:",
        finText: "Thanks for exploring. The zebrafish escapes to swim another day.",
        // Brain info
        brainInfo_telencephalon_title: "Telencephalon (Forebrain)",
        brainInfo_telencephalon_text: "Contains the olfactory bulb and structures involved in memory and higher functions. Homologous to parts of the human cerebral cortex.",
        brainInfo_tectum_title: "Tectum (Optic Tectum)",
        brainInfo_tectum_text: "The star of this thesis! Traditionally considered purely visual, we discovered it also processes auditory danger signals and integrates them with vision. Homologous to the Superior Colliculus in mammals.",
        brainInfo_cerebellum_title: "Cerebellum",
        brainInfo_cerebellum_text: "Involved in motor coordination and timing. Helps fine-tune movements and maintain balance.",
        brainInfo_hindbrain_title: "Hindbrain (Rhombencephalon)",
        brainInfo_hindbrain_text: "Contains the Mauthner cells and other premotor neurons that execute escape behaviors. The command center for fast escape decisions.",
        // Tectum demo labels
        tectumVisual: "Visual response: superficial neuropil layers activate",
        tectumAudio: "Sound response: deep layers and periventricular neurons activate",
        tectumBoth: "Combined: dramatic multisensory enhancement across layers!",
        tectumNone: "Click a button to stimulate the Tectum",
        // Escape game
        escGameRound: "Round",
        escGameOf: "of",
        escGamePrompt: "Guess the stimulus from the reaction speed.",
        escGameLatency: "Latency",
        escGameCorrect: "Correct! That speed matches",
        escGameWrong: "Not quite. That speed is more typical of",
        escGameAudioStim: "sudden sound",
        escGameVisualStim: "visual looming",
        escGameDone: "You matched the zebrafish strategy!",
        escGameScore: "Score",
    },
    es: {
        heroBadge: "Tesis Doctoral",
        heroLine1: "Como peces diminutos",
        heroLine2: "descifran el peligro",
        heroLine3: "usando multiples sentidos?",
        heroSub: "Un recorrido interactivo por la integracion multisensorial en el cerebro del pez cebra",
        scrollPrompt: "Desplaza para explorar",
        sec1Label: "01 / El Desafio",
        sec1Title: "Decisiones de vida o muerte en milisegundos",
        sec1Text1: 'Imagina que sos una larva de pez, de solo 4 milimetros de largo. Una sombra crece sobre vos -- algo se zambulle hacia vos. Al mismo tiempo, sentis una onda de choque atravesar el agua. Tenes menos de 10 milisegundos para decidir: huir o quedarte quieto?',
        sec1Text2: 'Los animales enfrentan estas decisiones constantemente. Su supervivencia depende de combinar informacion de distintos sentidos -- vista, audicion, tacto -- para construir una imagen completa de la amenaza. Este proceso se llama <strong>integracion multisensorial</strong>.',
        sec1GameLabel: "Intenta escapar del depredador!",
        sec1GameInstr: "Hace click antes de que la sombra llene la pantalla",
        sec1GameStart: "Comenzar",
        sec1GameCaption: 'Este circulo oscuro que se expande es un "estimulo looming" -- simula un depredador zambulliendose hacia un pez. En esta tesis, estos estimulos fueron usados para evocar respuestas de escape en larvas de pez cebra.',
        sec2Label: "02 / El Modelo",
        sec2Title: "Conoce al pez cebra",
        sec2Text1: "El pez cebra (Danio rerio) es uno de los modelos animales mas poderosos de las neurociencias. Estos pequenos peces de agua dulce del sur de Asia tienen una ventaja extraordinaria: sus larvas son completamente transparentes.",
        sec2Text2: "Esta transparencia, combinada con proteinas fluorescentes codificadas geneticamente (GFP) que brillan en verde cuando las neuronas disparan, permite a los cientificos ver pensar a un cerebro completo en tiempo real -- algo imposible en casi cualquier otro vertebrado.",
        sec2InterLabel: "Hace click en el pez para revelar su cerebro",
        sec2Feat1T: "Transparente",
        sec2Feat1D: "Las larvas son translucidas, permitiendo adquirir imagenes del cerebro in vivo sin cirugia",
        sec2Feat2T: "Neuronas fluorescentes",
        sec2Feat2D: "Las proteinas GCaMP6f brillan en verde cuando las neuronas disparan, permitiendo ver su actividad en tiempo real",
        sec2Feat3T: "Escapes ultrarrapidos",
        sec2Feat3D: "Las respuestas de escape comienzan en menos de 5 ms, entre las mas rapidas del reino animal",
        sec2Feat4T: "70% de genes compartidos",
        sec2Feat4D: "Los zebrafish comparten ~70% de sus genes con los humanos, lo que hace que los hallazgos sean relevantes para nuestra especie",
        sec2FigCap: "Ventajas del modelo de pez cebra y su ciclo de vida. Adaptado de Garg & Geurten, 2024 y D'Costa & Shepherd, 2009.",
        sec3Label: "03 / El Cerebro",
        sec3Title: "Un cerebro diminuto con grandes respuestas",
        sec3Text1: 'El cerebro del pez cebra mide solo unos 500 micrometros de largo, pero contiene todas las regiones fundamentales presentes en el cerebro humano. Una estructura nos fascino particularmente: el <strong>Tectum</strong>.',
        sec3Text2: "El Tectum (llamado Coliculo Superior en mamiferos) fue historicamente considerado un centro de procesamiento exclusivamente visual. Recibe entradas directas de los ojos y crea un mapa del mundo visual. Pero sospechamos que podria hacer mucho mas.",
        sec3InterLabel: "Pasa el cursor sobre las regiones del cerebro para explorar",
        brainTel: "Telencefalo",
        brainTec: "Tectum",
        brainCer: "Cerebelo",
        brainHind: "Rombencefalo",
        brainFront: "Anterior",
        brainBack: "Posterior",
        sec4Label: "04 / El Descubrimiento",
        sec4Title: "El Tectum escucha el peligro",
        sec4Text1: 'Todos asumian que el Tectum era solo visual. Nuestro primer gran descubrimiento fue que <strong>los sonidos abruptos que senalizan peligro activan neuronas en las capas profundas del Tectum</strong>. Esto nunca habia sido demostrado claramente en pez cebra.',
        sec4Text2: "Usando imagenes de calcio in vivo en larvas transparentes, observamos neuronas brillar en verde al responder a sonidos subitos -- el tipo de senales que indicarian un depredador chapoteando en el agua.",
        sec4InterLabel: "Activa los estimulos para ver como responde el Tectum",
        sec4BtnVis: "Vision",
        sec4BtnAud: "Sonido",
        sec4BtnBoth: "Ambos",
        sec4Caption: "Las capas profundas del Tectum responden a sonidos abruptos. Combinadas con estimulos visuales, la respuesta se intensifica dramaticamente.",
        sec5Label: "05 / Mas fuertes juntos",
        sec5Title: "1 + 1 = 3",
        sec5Text1: 'Aca se pone realmente notable. Cuando presentamos senales visuales y auditivas de peligro simultaneamente, la respuesta cerebral no fue simplemente la suma de cada senal individual. <strong>El Tectum mostro una mejora multisensorial dramatica</strong> -- se reclutaron significativamente mas neuronas, y respondieron con mayor intensidad.',
        sec5Text2: "Esta mejora se tradujo directamente en el comportamiento: los peces cebra fueron significativamente mas propensos a escapar cuando recibian ambas senales a la vez, comparado con cualquiera de las senales por separado.",
        sec5InterLabel: "Combina las senales y observa como cambia la probabilidad de escape",
        sec5SliderV: "Intensidad visual",
        sec5SliderA: "Intensidad del sonido",
        sec5Off: "Apagado",
        sec5Low: "Bajo",
        sec5High: "Alto",
        sec5ProbLabel: "Probabilidad de escape",
        sec5ProbCtx0: "Sin estimulo (linea base)",
        sec5ProbCtxV: "Solo visual",
        sec5ProbCtxA: "Solo sonido",
        sec5ProbCtxM: "Audiovisual combinado",
        sec5EnhText: "Mejora multisensorial!",
        sec5FigCap: "Probabilidad de escape para cada combinacion de estimulos visuales (contraste) y auditivos (amplitud). Los estimulos combinados superan consistentemente a los componentes solos, especialmente a bajas intensidades.",
        sec6Label: "06 / Una Paradoja Elegante",
        sec6Title: "Cuanto mas debiles las senales, mayor la mejora",
        sec6Text1: 'Uno de los principios mas elegantes de la integracion multisensorial se llama <strong>efectividad inversa</strong>: cuando las senales individuales son debiles y ambiguas, combinarlas produce la mayor mejora proporcional.',
        sec6Text2: 'Pensalo asi: en una habitacion silenciosa, podes entender perfectamente una conversacion solo escuchando. Pero en una fiesta ruidosa, ver los labios del que habla de repente hace una diferencia enorme. Eso es efectividad inversa -- y la encontramos en el Tectum del pez cebra.',
        sec6InterLabel: "Observa como la mejora multisensorial cambia segun la fuerza del estimulo",
        sec6Strong: "Senales fuertes",
        sec6Weak: "Senales debiles",
        sec6Explanation: "Cuando cada senal sola es apenas perceptible, combinarlas produce una mejora desproporcionadamente grande. Esto es exactamente lo que observamos tanto en actividad neuronal como en comportamiento de escape.",
        sec7Label: "07 / El Menu de Escape",
        sec7Title: "Dos formas de huir",
        sec7Text1: 'Las larvas de pez cebra no solo escapan -- <strong>eligen como</strong>. Descubrimos que dos comportamientos de escape distintos son disparados diferencialmente segun el tipo de senal sensorial:',
        sec7SLCsub: "C-start de Latencia Corta",
        sec7SLC1: "Gatillado principalmente por sonidos subitos",
        sec7SLC2: "Ultra-rapido: comienza en ~5 ms",
        sec7SLC3: "Impulsado por la neurona gigante de Mauthner",
        sec7SLC4: "Movimiento explosivo y estereotipado",
        sec7LLCsub: "C-start de Latencia Larga",
        sec7LLC1: "Gatillado principalmente por looming visual",
        sec7LLC2: "Mas lento pero aun rapido: ~20-30 ms",
        sec7LLC3: "Impulsado por neuronas mas pequenas del rombencefalo",
        sec7LLC4: "Movimiento mas flexible y adaptable",
        sec7Text2: "Cuando ambas senales llegan juntas, el pez selecciona su tipo de escape basandose en cual senal es mas saliente. Si el sonido es mas fuerte, ejecuta un SLC rapido. Si el looming visual es mas obvio, opta por un LLC flexible. El cerebro no solo esta detectando peligro -- esta eligiendo la mejor estrategia de supervivencia.",
        sec7GameLabel: "Juego de reaccion: Adivina el estimulo por la velocidad de escape!",
        sec7GuessAudio: "Sonido",
        sec7GuessVisual: "Visual",
        sec7GuessFast: "Rapido",
        sec7GuessSlow: "Mas lento",
        sec7Fast: "Rapido",
        sec7Flex: "Flexible",
        sec7GameStart: "Jugar",
        sec7FigCap: "La reduccion de dimensionalidad de parametros cinematicos revela dos clusters distintos de comportamientos de escape: SLC (rapido, gatillado por sonido) y LLC (flexible, gatillado por vision). Datos de 40 larvas de pez cebra.",
        sec8Label: "08 / La Vision General",
        sec8Title: "Un nuevo modelo para las decisiones de supervivencia",
        sec8Text1: "Al vincular la actividad cerebral con el comportamiento, esta tesis propone un modelo de como el cerebro del pez cebra transforma las senales sensoriales en acciones que salvan vidas:",
        circEye: "Vision",
        circTec: "Tectum",
        circBadge: "Integracion",
        circHind: "Rombencefalo",
        circEsc: "Escape!",
        circEar: "Audicion",
        sec8FindTitle: "Hallazgos Principales",
        sec8Find1: "El Tectum no es solo visual -- procesa de manera robusta sonidos que senalizan peligro, desafiando decadas de suposiciones.",
        sec8Find2: "Combinar vista y sonido produce una mejora multisensorial en el Tectum, reclutando mas neuronas con respuestas mas intensas.",
        sec8Find3: "Esta mejora sigue el principio de efectividad inversa: las senales debiles y ambiguas se benefician mucho mas de la combinacion.",
        sec8Find4: "La integracion tectal se vincula directamente con circuitos motores del rombencefalo y predice el comportamiento de escape.",
        sec8Find5: "Los peces eligen entre escapes rapidos (SLC) o flexibles (LLC) segun la senal sensorial dominante -- una forma de seleccion de estrategia de supervivencia en tiempo real.",
        sec9Label: "09 / Por que importa",
        sec9Title: "Mas alla de la pecera",
        sec9Text1: "El Tectum del pez cebra es homologo al Coliculo Superior de los humanos. Los mismos principios de integracion multisensorial descubiertos aca operan en tu cerebro ahora mismo, cada vez que combinas lo que ves y escuchas para dar sentido al mundo que te rodea.",
        sec9Text2: "Entender estos circuitos a nivel fundamental -- neurona por neurona, en un cerebro vivo intacto -- abre la puerta a comprender como falla el procesamiento sensorial en condiciones como los trastornos del espectro autista, donde la integracion multisensorial suele estar alterada.",
        sec9Text3: "Este trabajo tambien desarrollo metodos novedosos: aprendizaje profundo para el seguimiento de animales, segmentacion semiautomatica de neuronas y pipelines de analisis originales -- herramientas que ahora estan siendo usadas por otros investigadores del laboratorio para abordar nuevas preguntas.",
        sec9M1T: "Imaging de calcio in vivo",
        sec9M1D: "Observar cientos de neuronas disparando en tiempo real en larvas vivas",
        sec9M2T: "Seguimiento con deep learning",
        sec9M2D: "Entrenar redes neuronales para seguir la postura del pez a 437 fps",
        sec9M3T: "Alineacion con atlas cerebral",
        sec9M3D: "Mapear cada neurona a una referencia cerebral estandarizada",
        aboutTitle: "Sobre esta tesis",
        aboutText1: 'Esta tesis doctoral fue realizada en el <strong>Laboratorio SPIN</strong> (Sistemas de Procesamiento e Integracion Neuronal), IFIBYNE (UBA/CONICET), Buenos Aires, Argentina, bajo la direccion de la Dra. Violeta Medan.',
        aboutText2: "Parte de este trabajo fue realizado en el laboratorio del Dr. German Sumbre en la Ecole Normale Superieure (IBENS), Paris, Francia.",
        aboutAuthorLabel: "Autor:",
        aboutAdvisorLabel: "Directora:",
        aboutUniLabel: "Universidad:",
        aboutYearLabel: "Anio:",
        finText: "Gracias por explorar. El pez cebra escapa para seguir nadando.",
        brainInfo_telencephalon_title: "Telencefalo (Cerebro anterior)",
        brainInfo_telencephalon_text: "Contiene el bulbo olfatorio y estructuras involucradas en la memoria y funciones superiores. Homologo a partes de la corteza cerebral humana.",
        brainInfo_tectum_title: "Tectum (Tectum Optico)",
        brainInfo_tectum_text: "La estrella de esta tesis! Tradicionalmente considerado solo visual, descubrimos que tambien procesa senales auditivas de peligro y las integra con la vision. Homologo al Coliculo Superior en mamiferos.",
        brainInfo_cerebellum_title: "Cerebelo",
        brainInfo_cerebellum_text: "Involucrado en la coordinacion y el timing de los movimientos. Ayuda a ajustar los movimientos y mantener el equilibrio.",
        brainInfo_hindbrain_title: "Rombencefalo (Cerebro posterior)",
        brainInfo_hindbrain_text: "Contiene las celulas Mauthner y otras neuronas premotoras que ejecutan los comportamientos de escape. El centro de comando para las decisiones rapidas de escape.",
        tectumVisual: "Respuesta visual: capas superficiales del neuropilo se activan",
        tectumAudio: "Respuesta auditiva: capas profundas y neuronas periventriculares se activan",
        tectumBoth: "Combinado: mejora multisensorial dramatica en todas las capas!",
        tectumNone: "Hace click en un boton para estimular el Tectum",
        escGameRound: "Ronda",
        escGameOf: "de",
        escGamePrompt: "Adivina el estimulo por la velocidad de reaccion.",
        escGameLatency: "Latencia",
        escGameCorrect: "Correcto! Esa velocidad coincide con",
        escGameWrong: "Casi. Esa velocidad es mas tipica de",
        escGameAudioStim: "sonido subito",
        escGameVisualStim: "looming visual",
        escGameDone: "Coincidiste con la estrategia del pez cebra!",
        escGameScore: "Puntaje",
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key] !== undefined) {
            if (el.tagName === 'text') {
                el.textContent = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });
    document.getElementById('lang-label').textContent = lang === 'en' ? 'ES' : 'EN';
    document.documentElement.lang = lang;
}

// ===== PARTICLE BACKGROUND =====
function initParticles() {
    const canvas = document.getElementById('particles-bg');
    const ctx = canvas.getContext('2d');
    let particles = [];
    const COUNT = 60;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < COUNT; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 2 + 0.5,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            alpha: Math.random() * 0.4 + 0.1
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(0, 255, 65, ${0.06 * (1 - dist / 150)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        // Draw particles
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 255, 65, ${p.alpha})`;
            ctx.fill();
            // Glow
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 255, 65, ${p.alpha * 0.15})`;
            ctx.fill();

            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        });
        requestAnimationFrame(draw);
    }
    draw();
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ===== PROGRESS BAR =====
function initProgressBar() {
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        document.getElementById('progress-fill').style.width = progress + '%';
    });
}

// ===== LOOMING GAME =====
function initLoomingGame() {
    const canvas = document.getElementById('looming-canvas');
    const ctx = canvas.getContext('2d');
    const startBtn = document.getElementById('looming-start');
    const resultDiv = document.getElementById('looming-result');
    const instrDiv = document.getElementById('looming-instructions');
    let running = false;
    let radius = 0;
    let startTime = 0;
    let maxRadius;
    let animId;

    function resizeCanvas() {
        const rect = canvas.parentElement.getBoundingClientRect();
        const size = Math.min(rect.width, 350);
        canvas.width = size;
        canvas.height = size;
        maxRadius = size * 0.55;
    }
    resizeCanvas();

    function drawFrame() {
        if (!running) return;
        ctx.fillStyle = '#e8ece8';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // Looming circle - accelerating expansion
        const elapsed = (Date.now() - startTime) / 1000;
        const lv = 0.7; // l/v parameter
        const duration = 2.2;
        const progress = Math.min(elapsed / (lv * duration), 1);
        // Accelerating expansion (simulating real looming)
        radius = maxRadius * Math.pow(progress, 2.5);
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(20, 20, 30, ${0.3 + progress * 0.7})`;
        ctx.fill();
        if (radius >= maxRadius) {
            running = false;
            resultDiv.textContent = currentLang === 'en'
                ? "Too slow! The predator caught you. 45% of zebrafish escape a loom like this."
                : "Muy lento! El depredador te atrapo. El 45% de los peces cebra escapan de un loom como este.";
            resultDiv.style.color = '#ff6644';
            startBtn.style.display = 'inline-block';
            return;
        }
        animId = requestAnimationFrame(drawFrame);
    }

    startBtn.addEventListener('click', () => {
        resizeCanvas();
        running = true;
        radius = 0;
        startTime = Date.now();
        resultDiv.textContent = '';
        startBtn.style.display = 'none';
        instrDiv.style.display = 'block';
        drawFrame();
    });

    canvas.addEventListener('click', () => {
        if (!running) return;
        running = false;
        cancelAnimationFrame(animId);
        const reactionTime = Date.now() - startTime;
        ctx.fillStyle = '#e8ece8';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        const fishTime = currentLang === 'en'
            ? `You escaped in ${reactionTime} ms. A zebrafish escapes in 5-30 ms -- about ${Math.round(reactionTime / 7)}x faster than you!`
            : `Escapaste en ${reactionTime} ms. Un pez cebra escapa en 5-30 ms -- unas ${Math.round(reactionTime / 7)}x mas rapido que vos!`;
        resultDiv.textContent = fishTime;
        resultDiv.style.color = '#00ff41';
        startBtn.style.display = 'inline-block';
    });
}

// ===== FISH REVEAL (Interactive transparent fish) =====
function initFishReveal() {
    const canvas = document.getElementById('fish-canvas');
    const ctx = canvas.getContext('2d');
    let revealed = false;
    let revealProgress = 0;

    function resizeCanvas() {
        const rect = canvas.parentElement.getBoundingClientRect();
        canvas.width = Math.min(rect.width, 500);
        canvas.height = canvas.width / 2;
    }
    resizeCanvas();
    window.addEventListener('resize', () => { resizeCanvas(); drawFish(); });

    function drawFish() {
        const w = canvas.width, h = canvas.height;
        ctx.clearRect(0, 0, w, h);
        const cx = w / 2, cy = h / 2;
        const fishLen = w * 0.7;
        const fishH = h * 0.35;

        // Body outline
        ctx.beginPath();
        ctx.ellipse(cx, cy, fishLen / 2, fishH, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 255, 65, ${0.3 + revealProgress * 0.2})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Tail
        ctx.beginPath();
        ctx.moveTo(cx + fishLen / 2 - 10, cy);
        ctx.lineTo(cx + fishLen / 2 + 30, cy - fishH * 0.8);
        ctx.lineTo(cx + fishLen / 2 + 30, cy + fishH * 0.8);
        ctx.closePath();
        ctx.strokeStyle = `rgba(0, 255, 65, ${0.3 + revealProgress * 0.2})`;
        ctx.stroke();

        // Eye
        ctx.beginPath();
        ctx.arc(cx - fishLen * 0.28, cy - fishH * 0.15, fishH * 0.18, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 220, 200, 0.4)`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(cx - fishLen * 0.28, cy - fishH * 0.15, fishH * 0.08, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(30, 30, 40, 0.7)`;
        ctx.fill();

        if (revealProgress > 0) {
            const alpha = revealProgress;
            const brainX = cx - fishLen * 0.12;
            const brainY = cy;
            const brainW = fishLen * 0.36;
            const brainH = fishH * 0.75;

            const drawLobe = (lx, ly, lw, lh, tilt, fill, stroke) => {
                ctx.save();
                ctx.translate(lx, ly);
                ctx.rotate(tilt);
                ctx.beginPath();
                ctx.moveTo(-lw * 0.5, 0);
                ctx.bezierCurveTo(-lw * 0.45, -lh * 0.6, lw * 0.1, -lh * 0.65, lw * 0.5, 0);
                ctx.bezierCurveTo(lw * 0.1, lh * 0.65, -lw * 0.45, lh * 0.6, -lw * 0.5, 0);
                ctx.closePath();
                ctx.fillStyle = fill;
                ctx.fill();
                if (stroke) {
                    ctx.strokeStyle = stroke;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
                ctx.restore();
            };

            // Brain outline
            ctx.beginPath();
            ctx.moveTo(brainX - brainW * 0.58, brainY);
            ctx.bezierCurveTo(brainX - brainW * 0.35, brainY - brainH * 0.7, brainX + brainW * 0.35, brainY - brainH * 0.7, brainX + brainW * 0.6, brainY);
            ctx.bezierCurveTo(brainX + brainW * 0.35, brainY + brainH * 0.7, brainX - brainW * 0.35, brainY + brainH * 0.7, brainX - brainW * 0.58, brainY);
            ctx.closePath();
            ctx.strokeStyle = `rgba(0, 255, 65, ${0.25 + alpha * 0.25})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();

            // Telencephalon
            drawLobe(brainX - brainW * 0.28, brainY, brainW * 0.32, brainH * 0.45, -0.08,
                `rgba(0, 255, 65, ${alpha * 0.16})`, `rgba(0, 255, 65, ${alpha * 0.2})`);

            // Tectum lobes
            drawLobe(brainX + brainW * 0.02, brainY - brainH * 0.18, brainW * 0.34, brainH * 0.5, 0.06,
                `rgba(0, 255, 65, ${alpha * 0.5})`, `rgba(0, 255, 65, ${alpha * 0.6})`);
            drawLobe(brainX + brainW * 0.02, brainY + brainH * 0.18, brainW * 0.34, brainH * 0.5, -0.06,
                `rgba(0, 255, 65, ${alpha * 0.5})`, `rgba(0, 255, 65, ${alpha * 0.6})`);

            // Cerebellum
            drawLobe(brainX + brainW * 0.28, brainY, brainW * 0.22, brainH * 0.32, 0.05,
                `rgba(0, 220, 60, ${alpha * 0.25})`, `rgba(0, 220, 60, ${alpha * 0.3})`);

            // Hindbrain
            drawLobe(brainX + brainW * 0.45, brainY, brainW * 0.26, brainH * 0.28, 0.0,
                `rgba(0, 180, 55, ${alpha * 0.18})`, `rgba(0, 180, 55, ${alpha * 0.22})`);

            // Global glow
            const grad = ctx.createRadialGradient(brainX, brainY, 0, brainX, brainY, brainW * 0.9);
            grad.addColorStop(0, `rgba(0, 255, 65, ${alpha * 0.2})`);
            grad.addColorStop(1, 'rgba(0, 255, 65, 0)');
            ctx.fillStyle = grad;
            ctx.fillRect(brainX - brainW, brainY - brainW, brainW * 2, brainW * 2);

            // Neuron sparkles
            if (revealProgress > 0.5) {
                for (let i = 0; i < 10; i++) {
                    const angle = (Date.now() / 1000 + i * 0.7) * 1.4;
                    const nx = brainX + Math.cos(angle) * brainW * 0.35;
                    const ny = brainY + Math.sin(angle) * brainH * 0.35;
                    const sparkle = (Math.sin(Date.now() / 180 + i * 1.7) + 1) / 2;
                    ctx.beginPath();
                    ctx.arc(nx, ny, 1.5 + sparkle * 2, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(0, 255, 65, ${sparkle * alpha * 0.8})`;
                    ctx.fill();
                }
            }

            // Label
            ctx.font = '11px monospace';
            ctx.fillStyle = `rgba(0, 255, 65, ${alpha})`;
            ctx.textAlign = 'center';
            ctx.fillText('Tectum', brainX + brainW * 0.05, brainY - brainH * 0.85);
        }
    }

    function animate() {
        drawFish();
        if (revealed && revealProgress < 1) {
            revealProgress = Math.min(revealProgress + 0.03, 1);
        }
        requestAnimationFrame(animate);
    }
    animate();

    canvas.addEventListener('click', () => {
        revealed = !revealed;
        if (!revealed) {
            const fadeOut = setInterval(() => {
                revealProgress -= 0.05;
                if (revealProgress <= 0) {
                    revealProgress = 0;
                    clearInterval(fadeOut);
                }
            }, 16);
        }
    });
}

// ===== BRAIN EXPLORER =====
function initBrainExplorer() {
    const infoTitle = document.getElementById('brain-info-title');
    const infoText = document.getElementById('brain-info-text');
    const regions = document.querySelectorAll('.brain-region');

    regions.forEach(region => {
        region.addEventListener('mouseenter', () => {
            const r = region.getAttribute('data-region');
            const t = translations[currentLang];
            infoTitle.textContent = t[`brainInfo_${r}_title`] || r;
            infoText.textContent = t[`brainInfo_${r}_text`] || '';
        });
        region.addEventListener('mouseleave', () => {
            infoTitle.textContent = '';
            infoText.textContent = '';
        });
    });
}

// ===== TECTUM DEMO =====
function initTectumDemo() {
    const canvas = document.getElementById('tectum-canvas');
    const ctx = canvas.getContext('2d');
    const label = document.getElementById('tectum-response-label');
    let activeMode = 'none'; // none, visual, audio, both

    function resizeCanvas() {
        const rect = canvas.parentElement.getBoundingClientRect();
        canvas.width = Math.min(rect.width, 600);
        canvas.height = canvas.width / 2;
    }
    resizeCanvas();
    window.addEventListener('resize', () => { resizeCanvas(); });

    const neurons = [];
    for (let i = 0; i < 120; i++) {
        const y = 0.1 + Math.random() * 0.8;
        neurons.push({
            x: 0.15 + Math.random() * 0.7,
            y,
            r: 2 + Math.random() * 2,
            depth: y, // 0=superficial, 1=deep
            phase: Math.random() * Math.PI * 2,
            baseAlpha: 0.1,
            targetAlpha: 0.1,
            currentAlpha: 0.1
        });
    }

    function updateNeurons() {
        neurons.forEach(n => {
            if (activeMode === 'none') {
                n.targetAlpha = 0.1;
            } else if (activeMode === 'visual') {
                // Visual: superficial layers active
                n.targetAlpha = n.depth < 0.45 ? 0.4 + Math.random() * 0.4 : 0.1;
            } else if (activeMode === 'audio') {
                // Audio: deep layers active
                n.targetAlpha = n.depth > 0.55 ? 0.4 + Math.random() * 0.4 : 0.1;
            } else if (activeMode === 'both') {
                // Both: all layers, much stronger
                n.targetAlpha = 0.5 + Math.random() * 0.5;
            }
        });
    }

    function draw() {
        const w = canvas.width, h = canvas.height;
        ctx.fillStyle = '#060e08';
        ctx.fillRect(0, 0, w, h);

        // Draw tectum outline and layers
        const tx = w * 0.5, ty = h * 0.5;
        const tw = w * 0.36, th = h * 0.5;

        const outline = new Path2D();
        outline.moveTo(tx - tw * 0.6, ty);
        outline.bezierCurveTo(tx - tw * 0.35, ty - th * 0.75, tx + tw * 0.35, ty - th * 0.75, tx + tw * 0.6, ty);
        outline.bezierCurveTo(tx + tw * 0.35, ty + th * 0.75, tx - tw * 0.35, ty + th * 0.75, tx - tw * 0.6, ty);
        outline.closePath();
        ctx.strokeStyle = 'rgba(0, 255, 65, 0.18)';
        ctx.lineWidth = 1.2;
        ctx.stroke(outline);

        // No internal layer labels to keep the demo clean

        // Draw neurons within tectum
        ctx.save();
        ctx.clip(outline);
        const t = Date.now() / 1000;
        neurons.forEach(n => {
            n.currentAlpha += (n.targetAlpha - n.currentAlpha) * 0.08;
            const flicker = (Math.sin(t * 3 + n.phase) + 1) / 2 * 0.3;
            const a = n.currentAlpha + (n.currentAlpha > 0.2 ? flicker : 0);
            const nx = tx + (n.x - 0.5) * tw * 2;
            const ny = ty + (n.y - 0.5) * th * 2;

            // Glow
            if (a > 0.25) {
                ctx.beginPath();
                ctx.arc(nx, ny, n.r * 4, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 255, 65, ${a * 0.2})`;
                ctx.fill();
            }
            ctx.beginPath();
            ctx.arc(nx, ny, n.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 255, 65, ${a})`;
            ctx.fill();
        });
        ctx.restore();

        requestAnimationFrame(draw);
    }
    draw();

    function setMode(mode) {
        activeMode = mode;
        updateNeurons();
        const t = translations[currentLang];
        const labelMap = { none: t.tectumNone, visual: t.tectumVisual, audio: t.tectumAudio, both: t.tectumBoth };
        label.textContent = labelMap[mode];
        // Update button states
        document.getElementById('toggle-visual').setAttribute('data-active', mode === 'visual');
        document.getElementById('toggle-audio').setAttribute('data-active', mode === 'audio');
        document.getElementById('toggle-both').setAttribute('data-active', mode === 'both');
    }

    document.getElementById('toggle-visual').addEventListener('click', () => setMode(activeMode === 'visual' ? 'none' : 'visual'));
    document.getElementById('toggle-audio').addEventListener('click', () => setMode(activeMode === 'audio' ? 'none' : 'audio'));
    document.getElementById('toggle-both').addEventListener('click', () => setMode(activeMode === 'both' ? 'none' : 'both'));

    setMode('none');
}

// ===== MULTISENSORY MIXER =====
function initMixer() {
    const sliderV = document.getElementById('slider-visual');
    const sliderA = document.getElementById('slider-audio');
    const barFill = document.getElementById('prob-bar-fill');
    const barValue = document.getElementById('prob-bar-value');
    const barContext = document.getElementById('prob-bar-context');
    const enhancement = document.getElementById('mixer-enhancement');
    const enhText = document.getElementById('enhancement-text');

    // Probability data from thesis (Figure 25, COMP experiment, N=40 larvae)
    // probData[audio_level][visual_level], levels: 0=off, 1=low(min), 2=high(max)
    const probData = [
        [7, 10, 45],   // audio off:  ctrl, V_min, V_max
        [15, 33, 50],  // audio low:  A_min, V_min+A_min, V_max+A_min
        [70, 60, 75],  // audio high: A_max, V_min+A_max, V_max+A_max
    ];

    function update() {
        const v = parseInt(sliderV.value);
        const a = parseInt(sliderA.value);
        const prob = probData[a][v];
        const t = translations[currentLang];

        barFill.style.width = prob + '%';
        barValue.textContent = prob + '%';

        // Color based on whether it's multisensory
        if (v > 0 && a > 0) {
            barFill.style.background = 'linear-gradient(90deg, #00cc33, #00ff41, #39ff73)';
            barFill.style.boxShadow = '0 0 20px rgba(0, 255, 65, 0.5)';
            barContext.textContent = t.sec5ProbCtxM;
            // Calculate enhancement
            const maxUni = Math.max(probData[a][0], probData[0][v]);
            if (prob > maxUni) {
                const enhPct = Math.round(((prob - maxUni) / maxUni) * 100);
                enhancement.classList.remove('hidden');
                enhText.textContent = `+${enhPct}% ${t.sec5EnhText}`;
            } else {
                enhancement.classList.add('hidden');
            }
        } else if (v > 0) {
            barFill.style.background = 'linear-gradient(90deg, #994400, #cc6600)';
            barFill.style.boxShadow = '0 0 10px rgba(204, 102, 0, 0.3)';
            barContext.textContent = t.sec5ProbCtxV;
            enhancement.classList.add('hidden');
        } else if (a > 0) {
            barFill.style.background = 'linear-gradient(90deg, #003399, #0066cc)';
            barFill.style.boxShadow = '0 0 10px rgba(0, 102, 204, 0.3)';
            barContext.textContent = t.sec5ProbCtxA;
            enhancement.classList.add('hidden');
        } else {
            barFill.style.background = 'linear-gradient(90deg, #333, #555)';
            barFill.style.boxShadow = 'none';
            barContext.textContent = t.sec5ProbCtx0;
            enhancement.classList.add('hidden');
        }
    }

    sliderV.addEventListener('input', update);
    sliderA.addEventListener('input', update);
    update();
}

// ===== C-START ANIMATIONS =====
function initEscapeAnimations() {
    // SLC animation
    const slcDiv = document.getElementById('slc-anim');
    const slcCanvas = document.createElement('canvas');
    slcDiv.appendChild(slcCanvas);
    slcCanvas.style.width = '100%';
    slcCanvas.style.height = '100%';

    // LLC animation
    const llcDiv = document.getElementById('llc-anim');
    const llcCanvas = document.createElement('canvas');
    llcDiv.appendChild(llcCanvas);
    llcCanvas.style.width = '100%';
    llcCanvas.style.height = '100%';

    function resizeAnimCanvases() {
        [slcCanvas, llcCanvas].forEach(c => {
            const rect = c.parentElement.getBoundingClientRect();
            c.width = rect.width;
            c.height = rect.height;
        });
    }
    resizeAnimCanvases();
    window.addEventListener('resize', resizeAnimCanvases);

    function drawCStart(ctx, w, h, progress, isSLC) {
        ctx.fillStyle = '#060e08';
        ctx.fillRect(0, 0, w, h);

        const cx = w * 0.3;
        const cy = h * 0.5;
        const len = Math.min(w * 0.15, 30);

        // Number of segments
        const segments = 8;
        const segLen = len / segments * 2;
        const p = progress % 1;

        // Calculate C-bend angle
        let maxAngle = isSLC ? Math.PI * 0.8 : Math.PI * 0.5;
        let bendSpeed = isSLC ? 8 : 4;
        let angle = maxAngle * Math.sin(p * bendSpeed) * Math.exp(-p * 3);

        const headX = cx + p * w * 0.5;
        let x = headX;
        let y = cy;
        let dir = Math.PI;

        ctx.beginPath();
        ctx.moveTo(x, y);
        for (let i = 0; i < segments; i++) {
            let segAngle = angle * (i / segments);
            dir += segAngle / segments;
            x += Math.cos(dir) * segLen;
            y += Math.sin(dir) * segLen;
            ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(0, 255, 65, 0.8)`;
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Head dot
        ctx.beginPath();
        ctx.arc(headX, cy, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 255, 65, 0.9)';
        ctx.fill();

        // Label
        ctx.font = '10px monospace';
        ctx.fillStyle = 'rgba(0, 255, 65, 0.5)';
        ctx.textAlign = 'right';
        ctx.fillText(isSLC ? '~5 ms' : '~25 ms', w - 8, h - 8);
    }

    let startTime = Date.now();
    function animate() {
        const t = (Date.now() - startTime) / 1000;
        const slcCtx = slcCanvas.getContext('2d');
        const llcCtx = llcCanvas.getContext('2d');

        drawCStart(slcCtx, slcCanvas.width, slcCanvas.height, (t * 0.6) % 1, true);
        drawCStart(llcCtx, llcCanvas.width, llcCanvas.height, (t * 0.35) % 1, false);
        requestAnimationFrame(animate);
    }
    animate();
}

// ===== ESCAPE GAME =====
function initEscapeGame() {
    const canvas = document.getElementById('escape-game-canvas');
    const ctx = canvas.getContext('2d');
    const startBtn = document.getElementById('escape-game-start');
    const btnSLC = document.getElementById('escape-btn-slc');
    const btnLLC = document.getElementById('escape-btn-llc');
    const scoreDiv = document.getElementById('escape-game-score');
    const feedbackDiv = document.getElementById('escape-game-feedback');

    let round = 0;
    let score = 0;
    const totalRounds = 8;
    let currentStim = null; // 'visual' or 'audio'
    let currentLatency = null;
    let waitingForAnswer = false;
    let stimStartTime = 0;

    function resizeCanvas() {
        const rect = canvas.parentElement.getBoundingClientRect();
        canvas.width = Math.min(rect.width, 500);
        canvas.height = canvas.width / 2;
    }
    resizeCanvas();

    function randn() {
        let u = 0, v = 0;
        while (u === 0) u = Math.random();
        while (v === 0) v = Math.random();
        return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    }

    function sampleLatency(stim) {
        const mean = stim === 'audio' ? 8 : 26;
        const sd = stim === 'audio' ? 2.2 : 5.5;
        let value = mean + randn() * sd;
        value = Math.max(4, Math.min(40, value));
        return Math.round(value);
    }

    function drawRunnerFish(x, y, scale, phase) {
        const bodyLen = 22 * scale;
        const bodyH = 6 * scale;
        ctx.save();
        ctx.translate(x, y);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(-bodyLen * 0.3, -bodyH, -bodyLen, 0);
        ctx.quadraticCurveTo(-bodyLen * 0.3, bodyH, 0, 0);
        ctx.strokeStyle = 'rgba(0, 255, 65, 0.9)';
        ctx.lineWidth = 2.2;
        ctx.stroke();

        // Tail
        const tailWave = Math.sin(phase * 8) * 2 * scale;
        ctx.beginPath();
        ctx.moveTo(-bodyLen, 0);
        ctx.lineTo(-bodyLen - 8 * scale, -5 * scale + tailWave);
        ctx.lineTo(-bodyLen - 8 * scale, 5 * scale + tailWave);
        ctx.closePath();
        ctx.fillStyle = 'rgba(0, 255, 65, 0.6)';
        ctx.fill();

        // Eye
        ctx.beginPath();
        ctx.arc(2 * scale, -bodyH * 0.2, 1.4 * scale, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(200, 255, 220, 0.8)';
        ctx.fill();

        ctx.restore();
    }

    function showStimulus() {
        if (round >= totalRounds) {
            endGame();
            return;
        }
        currentStim = Math.random() < 0.5 ? 'audio' : 'visual';
        currentLatency = sampleLatency(currentStim);
        waitingForAnswer = true;
        stimStartTime = Date.now();
        btnSLC.disabled = false;
        btnLLC.disabled = false;
        feedbackDiv.textContent = '';
        const t = translations[currentLang];
        scoreDiv.textContent = `${t.escGameRound} ${round + 1} ${t.escGameOf} ${totalRounds} • ${t.escGamePrompt}`;
        animateStimulus();
    }

    function animateStimulus() {
        if (!waitingForAnswer) return;
        const w = canvas.width, h = canvas.height;
        ctx.fillStyle = '#080e08';
        ctx.fillRect(0, 0, w, h);
        const elapsed = (Date.now() - stimStartTime) / 1000;

        const t = translations[currentLang];
        const duration = 1.1;
        const speedFactor = Math.min(Math.max(40 / currentLatency, 0.85), 2.4);
        const progress = Math.min(elapsed / duration, 1);
        const x = Math.min(w * 0.15 + progress * w * 0.7 * speedFactor, w * 0.88);
        const y = h * 0.6 + Math.sin(elapsed * 6) * 6;

        // Subtle speed trails
        ctx.strokeStyle = 'rgba(0, 255, 65, 0.08)';
        for (let i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.moveTo(w * 0.1, y + i * 4 - 8);
            ctx.lineTo(x - 10 - i * 6, y + i * 4 - 8);
            ctx.stroke();
        }

        drawRunnerFish(x, y, 1.1, elapsed);

        ctx.font = 'bold 14px monospace';
        ctx.fillStyle = '#00ff41';
        ctx.textAlign = 'center';
        ctx.fillText(`${t.escGameLatency}: ${currentLatency} ms`, w / 2, 22);

        requestAnimationFrame(animateStimulus);
    }

    function handleAnswer(choice) {
        if (!waitingForAnswer) return;
        waitingForAnswer = false;
        btnSLC.disabled = true;
        btnLLC.disabled = true;
        const t = translations[currentLang];

        const correct = currentStim === choice;
        const stimLabel = currentStim === 'audio' ? t.escGameAudioStim : t.escGameVisualStim;

        if (correct) {
            score++;
            feedbackDiv.textContent = `${t.escGameCorrect} ${stimLabel}.`;
            feedbackDiv.style.color = '#00ff41';
        } else {
            feedbackDiv.textContent = `${t.escGameWrong} ${stimLabel}.`;
            feedbackDiv.style.color = '#ff6644';
        }

        round++;
        setTimeout(showStimulus, 1800);
    }

    function endGame() {
        const t = translations[currentLang];
        const w = canvas.width, h = canvas.height;
        ctx.fillStyle = '#080e08';
        ctx.fillRect(0, 0, w, h);
        ctx.font = 'bold 18px sans-serif';
        ctx.fillStyle = '#00ff41';
        ctx.textAlign = 'center';
        ctx.fillText(`${t.escGameScore}: ${score}/${totalRounds}`, w / 2, h / 2);
        scoreDiv.textContent = t.escGameDone;
        feedbackDiv.textContent = '';
        startBtn.style.display = 'inline-block';
        startBtn.textContent = translations[currentLang].sec7GameStart;
    }

    btnSLC.addEventListener('click', () => handleAnswer('audio'));
    btnLLC.addEventListener('click', () => handleAnswer('visual'));

    startBtn.addEventListener('click', () => {
        resizeCanvas();
        round = 0;
        score = 0;
        startBtn.style.display = 'none';
        feedbackDiv.textContent = '';
        showStimulus();
    });
}

// ===== FIN FISH ANIMATION =====
function initFinFish() {
    const canvas = document.getElementById('fin-fish-canvas');
    const ctx = canvas.getContext('2d');

    function resize() {
        const rect = canvas.parentElement.getBoundingClientRect();
        canvas.width = Math.min(rect.width, 300);
        canvas.height = 120;
    }
    resize();

    function draw() {
        const w = canvas.width, h = canvas.height;
        ctx.clearRect(0, 0, w, h);
        const t = Date.now() / 1000;

        // Swimming fish
        const speed = 30;
        const fx = ((t * speed) % (w + 60)) - 30;
        const fy = h / 2 + Math.sin(t * 0.8) * 6;
        const segments = 10;
        const segLen = 4;

        ctx.beginPath();
        let x = fx, y = fy;
        ctx.moveTo(x, y);
        for (let i = 0; i < segments; i++) {
            const wave = Math.sin(t * 4 + i * 0.6) * (i * 1.5);
            x -= segLen;
            y = fy + wave;
            ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(0, 255, 65, 0.6)`;
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Head
        ctx.beginPath();
        ctx.arc(fx, fy, 4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 255, 65, 0.7)';
        ctx.fill();

        // Green glow trail
        for (let i = 0; i < 5; i++) {
            const trailX = fx - 8 * (i + 1) + Math.sin(t * 2 + i) * 3;
            const trailY = fy + Math.cos(t * 3 + i * 1.5) * 3;
            ctx.beginPath();
            ctx.arc(trailX, trailY, 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 255, 65, ${0.3 - i * 0.05})`;
            ctx.fill();
        }

        requestAnimationFrame(draw);
    }
    draw();
}

// ===== CIRCUIT ANIMATION =====
function initCircuitAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const nodes = entry.target.querySelectorAll('.circuit-node');
                nodes.forEach((node, i) => {
                    setTimeout(() => {
                        node.style.opacity = '1';
                        node.style.transform = 'scale(1)';
                    }, i * 200);
                });
                const arrows = entry.target.querySelectorAll('.circuit-arrow');
                arrows.forEach((arrow, i) => {
                    setTimeout(() => {
                        arrow.style.opacity = '1';
                    }, i * 200 + 100);
                });
            }
        });
    }, { threshold: 0.3 });

    const diagram = document.getElementById('circuit-diagram');
    if (diagram) {
        diagram.querySelectorAll('.circuit-node').forEach(n => {
            n.style.opacity = '0';
            n.style.transform = 'scale(0.8)';
            n.style.transition = 'all 0.5s ease';
        });
        diagram.querySelectorAll('.circuit-arrow').forEach(a => {
            a.style.opacity = '0';
            a.style.transition = 'opacity 0.5s ease';
        });
        observer.observe(diagram);
    }
}

// ===== INVERSE EFFECTIVENESS ANIMATION =====
function initInverseAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate bars growing
                entry.target.querySelectorAll('.inv-bar').forEach(bar => {
                    const h = bar.style.getPropertyValue('--bar-h');
                    bar.style.height = '0%';
                    setTimeout(() => { bar.style.height = h; }, 300);
                });
            }
        });
    }, { threshold: 0.3 });

    const container = document.getElementById('inverse-demo');
    if (container) observer.observe(container);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    setLanguage('en');
    initParticles();
    initScrollReveal();
    initProgressBar();
    initLoomingGame();
    initFishReveal();
    initBrainExplorer();
    initTectumDemo();
    initMixer();
    initEscapeAnimations();
    initEscapeGame();
    initFinFish();
    initCircuitAnimation();
    initInverseAnimation();

    // Language toggle
    document.getElementById('lang-toggle').addEventListener('click', () => {
        setLanguage(currentLang === 'en' ? 'es' : 'en');
        // Refresh dynamic labels
        const t = translations[currentLang];
        document.getElementById('tectum-response-label').textContent = t.tectumNone;
    });
});
