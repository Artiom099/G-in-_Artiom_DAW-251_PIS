/* ============================================================
   NEXUS GEAR - BAZA DE DATE PRODUSE
   ============================================================
   PENTRU A ADAUGA UN PRODUS NOU:
   1. Pune poza in folderul "images/products/" (ex: mouse-2.jpg)
   2. Copiaza un obiect de mai jos si modifica datele
   3. Asigura-te ca "categorie" e una din:
      "mouse", "tastatura", "casti", "gamepad", "scaune", "mese", "monitoare"
   4. Salveaza fisierul - GATA!
   ============================================================ */

const PRODUSE = [
  {
    id: 1,
    nume: "Pulsar Tenz Joint Edition",
    categorie: "mouse",
    pret: 2490,
    pretVechi: 2990,
    imagine: "images/products/mouse-1.jpg",
    descriere: "Pulsar X2-H eS „Tenz” Edition este un mouse ultra-ușor de gaming, cu senzor de înaltă precizie și design ergonomic roșu, optimizat pentru performanță maximă în eSports.",
    detalii: "Mouse-ul Pulsar X2-H eS „Tenz” Edition îmbină viteza extremă și precizia chirurgicală într-un design ultra-ușor, fiind unealta ideală pentru gamerii care caută performanță de top fără compromisuri.",
    specs: {
      "Senzor": "HERO 2",
      "DPI": "100 - 32000",
      "Butoane": "5 programabile",
      "Greutate": "60g",
      "Conexiune": "LIGHTSPEED Wireless",
      "Baterie": "95 ore"
    },
    stoc: true,
    nou: true
  },
  {
    id: 2,
    nume: "MCHOSE A7X Ultra",
    categorie: "mouse",
    pret: 1890,
    pretVechi: 2290,
    imagine: "images/products/mouse-2.jpg",
    descriere: "Mouse-ul de gaming ultra-ușor MCHOSE AX7 Pro Max impresionează prin structura sa perforată tip fagure din aliaj de magneziu, oferind agilitate extremă și o rată de polling de 8K pentru performanță de nivel competițional.",
    detalii: "Design ergonomic roșu vibrant, optimizat pentru control maxim și precizie în mișcările rapide.",
    specs: {
      "Senzor": "Focus Pro 30K",
      "DPI": "100 - 30000",
      "Butoane": "5 programabile",
      "Greutate": "63g",
      "Conexiune": "HyperSpeed Wireless",
      "Baterie": "90 ore"
    },
    stoc: true,
    nou: true
  },
  {
    id: 3,
    nume: "WLmouse Strider",
    categorie: "mouse",
    pret: 2790,
    pretVechi: null,
    imagine: "images/products/mouse-3.jpg",
    descriere: "Mouse de gaming ultra-ușor realizat din aliaj de magneziu, cu un design scheletizat spectaculos pentru agilitate maximă.",
    detalii: "Ediție specială cu detalii artistice unice și tehnologie wireless de ultimă oră, optimizată pentru control și viteză.",
    specs: {
      "Senzor": "Focus Pro 30K",
      "DPI": "100 - 30000",
      "Butoane": "Pana la 19 (placi schimbabile)",
      "Iluminare": "Razer Chroma RGB",
      "Greutate": "134g",
      "Conexiune": "HyperSpeed Wireless + BT"
    },
    stoc: true,
    nou: false
  },
  {
    id: 4,
    nume: "LAMZU MAYA X",
    categorie: "mouse",
    pret: 2190,
    pretVechi: 2590,
    imagine: "images/products/mouse-4.jpg",
    descriere: "Mouse wireless ultra-ușor, optimizat pentru viteză extremă cu o rată de polling impresionantă de 8K.",
    detalii: "Design ergonomic și bază perforată cu structură tip fagure, oferind un control precis și o agilitate superioară în jocuri.",
    specs: {
      "Senzor": "Darkfield 8000 DPI",
      "Switch-uri": "Silent",
      "Butoane": "7 programabile",
      "Greutate": "141g",
      "Conexiune": "Bolt USB + BT",
      "Baterie": "70 zile USB-C"
    },
    stoc: true,
    nou: false
  },
  {
    id: 5,
    nume: "ATK Blazing Sky Ghost Ultimate",
    categorie: "mouse",
    pret: 1890,
    pretVechi: null,
    imagine: "images/products/mouse-5.jpg",
    descriere: "Mouse de gaming ultra-ușor construit din aliaj de magneziu, oferind o structură incredibil de rezistentă la o greutate minimă.",
    detalii: "Design spectaculos cu finisaj roșu marmorat și șasiu perforat, optimizat pentru viteză de reacție și precizie absolută.",
    specs: {
      "Design": "Vertical 57°",
      "DPI": "400 - 40000",
      "Butoane": "6 programabile",
      "Greutate": "135g",
      "Conexiune": "Wireless + USB-C + BT",
      "Baterie": "180 ore"
    },
    stoc: true,
    nou: true
  },
  {
    id: 6,
    nume: "VGN Dragonfly F1 Pro",
    categorie: "mouse",
    pret: 1290,
    pretVechi: 1790,
    imagine: "images/products/mouse-6.jpg",
    descriere: "Mouse wireless ultra-ușor cu un design minimalist și ergonomic, echipat cu un senzor de înaltă precizie pentru performanță constantă.",
    detalii: "Construcție robustă la o greutate redusă, fiind ideal pentru sesiuni lungi de gaming și mișcări rapide pe orice suprafață.",
    specs: {
      "Dimensiuni": "100 x 65 x 34 mm",
      "DPI": "200 - 8000",
      "Conexiune": "BT + Bolt USB",
      "Baterie": "70 zile",
      "Greutate": "99g",
      "Compatibilitate": "Win / Mac / Linux / iPad"
    },
    stoc: true,
    nou: false
  },
  {
    id: 7,
    nume: "LTC Nimbleback NB831",
    categorie: "tastatura",
    pret: 2290,
    pretVechi: 3499,
    imagine: "images/products/keyboard-1.jpg",
    descriere: "Tastatura mecanica wireless TKL cu switch-uri GX Brown si iluminare LIGHTSYNC RGB.",
    detalii: "Oferă o experiență de tastare premium și conectivitate versatilă, fiind ideală atât pentru productivitate, cât și pentru gaming intens.",
    specs: {
      "Format": "TKL (87 taste)",
      "Switch-uri": "GX Brown tactile",
      "Keycaps": "PBT double-shot",
      "Conexiune": "LIGHTSPEED + USB-C + BT",
      "Baterie": "50 ore",
      "Iluminare": "LIGHTSYNC RGB per-key"
    },
    stoc: true,
    nou: true
  },
  {
    id: 8,
    nume: "Dark Project ALU87 Bushido",
    categorie: "tastatura",
    pret: 1199,
    pretVechi: 2299,
    imagine: "images/products/keyboard-2.jpg",
    descriere: "Tastatură mecanică TKL cu un design artistic inspirat din cultura japoneză, evidențiat prin taste personalizate și ilustrații tematice pe bara de spațiu.",
    detalii: "Construcție robustă și iluminare discretă, oferind un echilibru perfect între estetică deosebită și o experiență de tastare precisă.",
    specs: {
      "Format": "TKL (87 taste)",
      "Switch-uri": "Razer Analog Optical Gen-2",
      "Frame": "Aluminiu",
      "Keycaps": "PBT double-shot",
      "Iluminare": "Razer Chroma RGB",
      "Cablu": "USB-C detasabil"
    },
    stoc: true,
    nou: true
  },
  {
    id: 9,
    nume: "Dark Project ALU81A Terra Nova",
    categorie: "tastatura",
    pret: 2490,
    pretVechi: null,
    imagine: "images/products/keyboard-3.jpg",
    descriere: "Dispune de iluminare RGB customizabilă și o construcție solidă, oferind o experiență de tastare silențioasă și fluidă pentru entuziaști.",
    detalii: "Tastatură mecanică premium cu layout compact de 75%, remarcându-se prin tastele personalizate cu tematică astronomică și inscripții laterale elegante.",
    specs: {
      "Format": "60% (61 taste)",
      "Switch-uri": "Cherry MX Red / Brown / Blue",
      "Keycaps": "PBT double-shot seamless",
      "Conexiune": "USB-C detasabil",
      "Mount": "Hot-swap 5-pin",
      "Iluminare": "RGB per-key"
    },
    stoc: true,
    nou: true
  },
  {
    id: 10,
    nume: "Dark Project ALU81A Terra Nova White",
    categorie: "tastatura",
    pret: 2590,
    pretVechi: 3490,
    imagine: "images/products/keyboard-4.jpg",
    descriere: "Tastatură mecanică premium cu layout compact de 75% și carcasă albă, decorată cu ilustrații astronomice detaliate pe taste.",
    detalii: "Include iluminare RGB spectaculoasă și o construcție durabilă, oferind o experiență de tastare precisă și un design vizual unic.",
    specs: {
      "Format": "Full-size (104 taste)",
      "Switch-uri": "Corsair OPX optic",
      "Polling rate": "4000Hz AXON",
      "Rotita": "iCUE Control Wheel",
      "Iluminare": "RGB per-key + 44 zone",
      "Suport": "Palm-rest magnetic"
    },
    stoc: true,
    nou: false
  },
  {
    id: 11,
    nume: "MCHOSE G75 Pro",
    categorie: "tastatura",
    pret: 1390,
    pretVechi: null,
    imagine: "images/products/keyboard-5.jpg",
    descriere: "Tastatură mecanică wireless cu layout compact de 75%, oferind un design estetic în nuanțe de alb și bleu pentru un birou organizat.",
    detalii: "Dispune de conectivitate versatilă și taste durabile, fiind soluția ideală pentru utilizatorii care caută confort și performanță într-un format redus.",
    specs: {
      "Format": "Full-size (104 taste)",
      "Switch-uri": "Scissor Perfect Stroke",
      "Keycaps": "ABS spherically-dished",
      "Iluminare": "Smart Backlight alb",
      "Conexiune": "Bolt USB + BT",
      "Baterie": "10 zile / 5 luni fara lumina"
    },
    stoc: true,
    nou: false
  },
  {
    id: 12,
    nume: "Lemokey L4",
    categorie: "tastatura",
    pret: 3490,
    pretVechi: 3990,
    imagine: "images/products/keyboard-6.jpg",
    descriere: "Tastatură mecanică TKL premium cu o carcasă solidă din aluminiu și design retro, oferind o estetică clasică și rafinată.",
    detalii: "Dispune de switch-uri de înaltă calitate și taste PBT durabile, asigurând o experiență de tastare silențioasă și un feedback tactil superior.",
    specs: {
      "Format": "65% (67 taste)",
      "Mount": "Gasket cu foam",
      "Switch-uri": "Hot-swap 5-pin",
      "Keycaps": "PBT OSA profile",
      "Stabilizatori": "Screw-in pre-lubricated",
      "Iluminare": "RGB south-facing"
    },
    stoc: true,
    nou: true
  },
  {
    id: 13,
    nume: "VGN VXE Siren V1",
    categorie: "casti",
    pret: 1190,
    pretVechi: 1890,
    imagine: "images/products/headset-1.jpg",
    descriere: "Căști de gaming ultra-ușoare cu un design ergonomic alb și accente verzi, oferind confort sporit pentru sesiuni lungi de utilizare.",
    detalii: "Dispun de conectivitate wireless stabilă și latență redusă, asigurând o experiență audio clară și imersivă în jocuri.",
    specs: {
      "Drivere": "40mm Neodymium",
      "ANC": "Activ hibrid",
      "Conexiune": "2.4GHz + BT 5.0",
      "Baterie": "Dual-battery hot-swap",
      "Microfon": "ClearCast Gen 2 retractabil",
      "Compatibilitate": "PC, PS5, Switch, Mobile"
    },
    stoc: true,
    nou: true
  },
  {
    id: 14,
    nume: "Turtle Beach Atlas Air",
    categorie: "casti",
    pret: 2990,
    pretVechi: 3990,
    imagine: "images/products/headset-2.jpg",
    descriere: "Căști de gaming wireless cu design open-back și o bandă de susținere din plasă suspendată, oferind o audiție naturală și un confort termic excelent.",
    detalii: "Dispun de drivere de înaltă fidelitate și o construcție ultra-ușoară, fiind proiectate pentru o experiență sonoră spațioasă și sesiuni de gaming prelungite.",
    specs: {
      "Drivere": "30mm Carbon Fiber",
      "ANC": "Adaptiv 8 microfoane",
      "Conexiune": "BT 5.2 LDAC",
      "Baterie": "30 ore (cu ANC)",
      "Codec": "LDAC, AAC, SBC",
      "Greutate": "250g"
    },
    stoc: true,
    nou: true
  },
  {
    id: 15,
    nume: "Baseus AeQur GH02",
    categorie: "casti",
    pret: 2690,
    pretVechi: null,
    imagine: "images/products/headset-3.jpg",
    descriere: "Căști de gaming wireless cu un design minimalist și modern, dotate cu iluminare LED discretă și microfon detașabil pentru versatilitate.",
    detalii: "Oferă o conexiune stabilă cu latență redusă și pernițe respirabile, asigurând o experiență audio echilibrată și confort pe tot parcursul zilei.",
    specs: {
      "Drivere": "53mm angulare",
      "Frecventa": "10Hz - 21kHz",
      "Microfon": "Detasabil DSP",
      "Conexiune": "USB + 3.5mm",
      "Greutate": "320g",
      "Pernite": "Memory foam piele PU"
    },
    stoc: true,
    nou: false
  },
  {
    id: 16,
    nume: "VZR Model One",
    categorie: "casti",
    pret: 4490,
    pretVechi: null,
    imagine: "images/products/headset-4.jpg",
    descriere: "Casti audiofile open-back cu drivere dinamice 38mm pentru audio referinta.",
    detalii: "Oferă o claritate audio de nivel profesional și un confort premium datorită pernițelor groase, fiind ideale pentru cei care caută fidelitate acustică fără compromisuri.",
    specs: {
      "Tip": "Open-back dinamic",
      "Drivere": "38mm Aluminium voice coil",
      "Impedanta": "300 Ohm",
      "Frecventa": "8Hz - 41.5kHz",
      "Cablu": "Detasabil 1.8m + 3m",
      "Greutate": "260g"
    },
    stoc: true,
    nou: true
  },
  {
    id: 17,
    nume: "Master & Dynamic MG20",
    categorie: "casti",
    pret: 3599,
    pretVechi: 4999,
    imagine: "images/products/headset-5.jpg",
    descriere: "Căști de gaming wireless de lux, realizate în colaborare cu Bugatti, folosind materiale premium precum magneziu, piele de miel și Alcantara pentru un confort de neegalat.",
    detalii: "Dispun de drivere din beriliu de 50 mm și sunet surround 7.1, oferind o scenă acustică bogată și o performanță audio demnă de un super-sportiv.",
    specs: {
      "Drivere": "40mm PRO-G",
      "Greutate": "278g",
      "Conexiune": "LIGHTSPEED 2.4GHz",
      "Baterie": "29 ore",
      "Microfon": "Blue VO!CE detasabil",
      "Iluminare": "LIGHTSYNC RGB dual"
    },
    stoc: true,
    nou: false
  },
  {
    id: 18,
    nume: "ATK Neptune N9 Ultra",
    categorie: "casti",
    pret: 1399,
    pretVechi: 2299,
    imagine: "images/products/headset-6.jpg",
    descriere: "Căști de gaming wireless cu un design elegant alb și accente metalice roz, oferind o estetică modernă și o construcție ușoară pentru confort maxim.",
    detalii: "Dispun de conectivitate dual-mode și tehnologie de transmisie cu latență ultra-scăzută, asigurând o comunicare clară și un avantaj competitiv în orice joc.",
    specs: {
      "Drivere": "40mm TriForce",
      "Sunet": "7.1 THX Spatial Audio",
      "Microfon": "HyperClear Cardioid",
      "Conexiune": "USB-A",
      "Iluminare": "Razer Chroma RGB",
      "Greutate": "285g"
    },
    stoc: true,
    nou: false
  },
  {
    id: 19,
    nume: "Sony DualSense",
    categorie: "gamepad",
    pret: 1390,
    pretVechi: 1690,
    imagine: "images/products/gamepad-1.jpg",
    descriere: "Controller wireless de ultimă generație pentru PlayStation 5, echipat cu feedback haptic imersiv și triggere adaptive care opun rezistență în funcție de acțiunile din joc.",
    detalii: "Design ergonomic alb-negru cu un touchpad central integrat și un microfon încorporat, oferind o experiență de control intuitivă și interactivă.",
    specs: {
      "Compatibilitate": "Xbox Series X|S, PC, Mobile",
      "Conexiune": "Xbox Wireless + BT",
      "Baterie": "2x AA / 40 ore",
      "Vibratii": "Impulse Triggers",
      "D-pad": "Hibrid",
      "Audio": "Jack 3.5mm"
    },
    stoc: true,
    nou: false
  },
  {
    id: 20,
    nume: "Sony Dualshock 4",
    categorie: "gamepad",
    pret: 890,
    pretVechi: 1099,
    imagine: "images/products/gamepad-2.jpg",
    descriere: "Controller wireless de ultimă generație pentru PlayStation 5, echipat cu feedback haptic imersiv și triggere adaptive care opun rezistență în funcție de acțiunile din joc.",
    detalii: "Design ergonomic alb-negru cu un touchpad central integrat și un microfon încorporat, oferind o experiență de control intuitivă și interactivă.",
    specs: {
      "Compatibilitate": "PS5, PC, Mac",
      "Conexiune": "USB-C + BT 5.1",
      "Baterie": "1560mAh / 12 ore",
      "Feedback": "Haptic + Adaptive Triggers",
      "Microfon": "Integrat",
      "Touchpad": "Da"
    },
    stoc: true,
    nou: true
  },
  {
    id: 21,
    nume: "Microsoft Xbox Wireless Controller",
    categorie: "gamepad",
    pret: 1299,
    pretVechi: 1699,
    imagine: "images/products/gamepad-3.jpg",
    descriere: "Controller premium pro cu palete spate, stick-uri si D-pad-uri interschimbabile.",
    detalii: "Xbox Elite Series 2 este controllerul premium pentru gamerii competitivi. Vine cu 4 palete spate magnetice, 3 seturi de stick-uri si 2 D-pad-uri interschimbabile, plus baterie reincarcabila integrata.",
    specs: {
      "Compatibilitate": "Xbox Series X|S, Xbox One, PC",
      "Conexiune": "Xbox Wireless + BT + USB-C",
      "Baterie": "40 ore reincarcabila",
      "Palete": "4 magnetice",
      "Stick-uri": "Tensiune ajustabila",
      "Carcasa": "Inclusa"
    },
    stoc: true,
    nou: false
  },
  {
    id: 22,
    nume: "Xtrike Me GP-51",
    categorie: "gamepad",
    pret: 1590,
    pretVechi: null,
    imagine: "images/products/gamepad-4.jpg",
    descriere: "Controller wireless versatil, cu un design inspirat de estetica modernă a consolelor de nouă generație, echipat cu touchpad central și funcție turbo pentru un avantaj competitiv.",
    detalii: "Compatibil cu multiple platforme, acesta oferă o ergonomie excelentă și feedback prin vibrații, fiind o soluție accesibilă și eficientă pentru sesiuni variate de gaming.",
    specs: {
      "Compatibilitate": "Nintendo Switch / PC",
      "Conexiune": "Bluetooth + USB-C",
      "Baterie": "40 ore",
      "Vibratii": "HD Rumble",
      "Senzori": "Accelerometru + Giroscop",
      "NFC": "Da (amiibo)"
    },
    stoc: true,
    nou: false
  },
  {
    id: 23,
    nume: "Gamesir Super Nova",
    categorie: "gamepad",
    pret: 1299,
    pretVechi: 1499,
    imagine: "images/products/gamepad-5.jpg",
    descriere: "Controller wireless multi-platformă cu un finisaj albastru metalizat elegant, echipat cu senzori Hall Effect pentru a preveni drift-ul stick-urilor",
    detalii: "Dispune de o stație de încărcare dedicată și iluminare RGB subtilă, oferind performanță ridicată și durabilitate pentru jucătorii pe PC, Switch sau mobil.",
    specs: {
      "Compatibilitate": "Xbox Series X|S, Xbox One, PC",
      "Conexiune": "USB-C cablat 3m",
      "Butoane": "4 multi-function + 2 remappable",
      "Trigger": "Hair Trigger Mode",
      "Iluminare": "Razer Chroma RGB",
      "Audio": "Jack 3.5mm"
    },
    stoc: true,
    nou: true
  },
  {
    id: 24,
    nume: "PDP Victrix Pro BFG",
    categorie: "gamepad",
    pret: 2199,
    pretVechi: 3090,
    imagine: "images/products/gamepad-6.jpg",
    descriere: "Controller wireless de înaltă performanță, proiectat pentru gaming competitiv, cu un design modular care permite inversarea stick-urilor și a D-pad-ului pentru o personalizare totală.",
    detalii: "Dispune de butoane posterioare configurabile, triggere cu cursă ajustabilă și compatibilitate extinsă (PS5, PS4, PC), oferind precizie maximă și viteză de reacție în turnee.",
    specs: {
      "Compatibilitate": "Switch, PC, Mac, Android, iOS",
      "Conexiune": "BT + USB-C",
      "Baterie": "1000mAh / 20 ore",
      "Butoane spate": "2 programabile",
      "Vibratii": "Duale",
      "App": "8BitDo Ultimate Software"
    },
    stoc: true,
    nou: false
  },
  {
    id: 25,
    nume: "Cougar Speeder One",
    categorie: "scaune",
    pret: 7999,
    pretVechi: 8999,
    imagine: "images/products/chair-1.jpg",
    descriere: "Scaun gaming premium cu suport lombar L-ADAPT integrat si tapiterie NEO Hybrid Leatherette.",
    detalii: "Scaun ergonomic de gaming cu un design avansat, dotat cu o plasă elastică respirabilă (elastomer) pentru a asigura o ventilație optimă și suport pe parcursul sesiunilor lungi.",
    specs: {
      "Material": "NEO Hybrid Leatherette",
      "Greutate suportata": "130 kg (Regular)",
      "Inclinare": "85° - 165°",
      "Brate": "4D ajustabile",
      "Lombar": "L-ADAPT integrat",
      "Garantie": "5 ani"
    },
    stoc: true,
    nou: true
  },
  {
    id: 26,
    nume: "VITESSE Big and Tall Gaming Chair",
    categorie: "scaune",
    pret: 10990,
    pretVechi: null,
    imagine: "images/products/chair-2.jpg",
    descriere: "Scaun ergonomic premium pentru birou cu Pixelated Support si Backfit ergonomic personalizat.",
    detalii: "Dispune de multiple opțiuni de reglaj pentru spătar, tetieră și cotiere, oferind o postură corectă și un confort personalizat, adaptat nevoilor utilizatorului.",
    specs: {
      "Material": "Balance Fabric",
      "Greutate suportata": "136 kg",
      "Inclinare": "Tilt continuu",
      "Brate": "Reglabile inaltime + latime",
      "Lombar": "Backfit ergonomic",
      "Garantie": "12 ani"
    },
    stoc: true,
    nou: false
  },
  {
    id: 27,
    nume: "Eureka Ergonomic",
    categorie: "scaune",
    pret: 9990,
    pretVechi: 1199,
    imagine: "images/products/chair-3.jpg",
    descriere: "Scaun gaming racing-style cu cadru din aluminiu, perna lombara si tetiera memory foam.",
    detalii: "Scaun de gaming ergonomic cu un design futuristic, echipat cu un spătar din plasă (mesh) ce include un sistem de suport lombar auto-adaptiv pentru o susținere optimă a coloanei.",
    specs: {
      "Material": "Piele EPU",
      "Greutate suportata": "125 kg",
      "Inclinare": "90° - 135°",
      "Brate": "4D ajustabile",
      "Cadru": "Aluminiu",
      "Garantie": "3 ani"
    },
    stoc: true,
    nou: false
  },
  {
    id: 28,
    nume: "Cougar Terminator",
    categorie: "scaune",
    pret: 14990,
    pretVechi: 18490,
    imagine: "images/products/chair-4.jpg",
    descriere: "Scaun gaming premium cu design Star Wars Edition, piele PU si suport lombar 4D integrat.",
    detalii: "Dispune de o tetieră reglabilă și accente roșii dinamice, oferind un echilibru între estetica de gaming și funcționalitatea unui scaun de birou de înaltă performanță.",
    specs: {
      "Material": "Hybrid Leather",
      "Greutate suportata": "150 kg",
      "Inclinare": "90° - 135°",
      "Brate": "4D ajustabile",
      "Lombar": "4D integrat",
      "Garantie": "2 ani"
    },
    stoc: true,
    nou: true
  },
  {
    id: 29,
    nume: "Xallking X5S",
    categorie: "scaune",
    pret: 12490,
    pretVechi: null,
    imagine: "images/products/chair-5.jpg",
    descriere: "Scaun gaming cu sistem lombar 6D dinamic care urmareste pozitia spatelui.",
    detalii: "Razer Iskur V2 introduce sistemul revolutionar Lumbar Support 6D care se adapteaza dinamic miscarii spatelui. Tapiterie EPU Synthetic Leather si spuma cu densitate ridicata.",
    specs: {
      "Material": "EPU Synthetic Leather",
      "Greutate suportata": "135 kg",
      "Inclinare": "152°",
      "Brate": "4D",
      "Lombar": "6D dinamic",
      "Garantie": "3 ani"
    },
    stoc: true,
    nou: true
  },
  {
    id: 30,
    nume: "Xstrike",
    categorie: "scaune",
    pret: 6490,
    pretVechi: 7290,
    imagine: "images/products/chair-6.jpg",
    descriere: "Scaun gaming entry-level cu tapiterie PU, mecanism rocker si brate 3D ajustabile.",
    detalii: "Dispune de o tapițerie din piele sintetică premium Hyper-Dură și o structură din polimer ranforsat, oferind o stabilitate excepțională și un confort de lungă durată pentru cei mai exigenți utilizatori.",
    specs: {
      "Material": "Piele PU",
      "Greutate suportata": "150 kg",
      "Inclinare": "180°",
      "Brate": "3D ajustabile",
      "Cadru": "Metal",
      "Garantie": "5 ani"
    },
    stoc: true,
    nou: false
  },
  {
    id: 31,
    nume: "Thermaltake ToughDesk 500L",
    categorie: "mese",
    pret: 8990,
    pretVechi: 11990,
    imagine: "images/products/desk-1.jpg",
    descriere: "Birou gaming reglabil pe inaltime motorizat cu suprafata otel si management cabluri magnetic.",
    detalii: "Thermaltake ToughDesk 500L este flagship-ul birourilor gaming. Reglare motorizata pe inaltime (65-125cm), suprafata din otel cu finisaj nano-coating si sistem complet de management cabluri magnetic.",
    specs: {
      "Dimensiuni": "175 x 80 x 65-125 cm",
      "Suprafata": "Otel nano-coated",
      "Cadru": "Otel motorizat",
      "Reglare": "Electrica 4 memorii",
      "Capacitate": "100 kg",
      "Cabluri": "Magnetic Cable Management"
    },
    stoc: true,
    nou: true
  },
  {
    id: 32,
    nume: "Huuger L Shaped",
    categorie: "mese",
    pret: 13490,
    pretVechi: 15999,
    imagine: "images/products/desk-2.jpg",
    descriere: "Masa gaming XL 160x82cm cu suprafata mousepad textil si reglare inaltime mecanica.",
    detalii: "Huuger L Shaped este una dintre cele mai populare mese gaming. Suprafata completa mousepad textil rezistent la apa, reglare mecanica pe inaltime si suport casti plus suport pahar inclus.",
    specs: {
      "Dimensiuni": "160 x 82 x 71-83 cm",
      "Suprafata": "Mousepad textil waterproof",
      "Cadru": "Otel reglabil",
      "Iluminare": "Optional RGB",
      "Suport casti": "Da",
      "Suport pahar": "Da"
    },
    stoc: true,
    nou: false
  },
  {
    id: 33,
    nume: "Rolanstar",
    categorie: "mese",
    pret: 17990,
    pretVechi: null,
    imagine: "images/products/desk-3.jpg",
    descriere: "Masa gaming modulara cu sistem de slot-uri pentru accesorii si reglare electrica pe inaltime.",
    detalii: "Rolanstar este conceputa pentru creatorii de continut. Sistem unic de slot-uri T pentru accesorii (suport monitor, pad, suport mic) si reglare electrica silentioasa.",
    specs: {
      "Dimensiuni": "183 x 80 x 65-125 cm",
      "Suprafata": "Bambus / Metal",
      "Reglare": "Electrica dual-motor",
      "Sistem": "Slot-uri modulare T",
      "Capacitate": "125 kg",
      "Memorii": "4 pozitii"
    },
    stoc: true,
    nou: true
  },
  {
    id: 34,
    nume: "Twisted Minds Warrior",
    categorie: "mese",
    pret: 5290,
    pretVechi: 6690,
    imagine: "images/products/desk-4.jpg",
    descriere: "Masa gaming reglabila mecanic cu suport monitor inclus si management cabluri.",
    detalii: "Twisted Minds Warrior ofera o solutie gaming accesibila si functionala. Reglare mecanica pe inaltime, suport monitor inclus, suport casti retractabil si tava sertarata pentru accesorii.",
    specs: {
      "Dimensiuni": "140 x 80 x 66-86 cm",
      "Suprafata": "Melamina",
      "Reglare": "Mecanica",
      "Suport monitor": "Inclus",
      "Suport casti": "Retractabil",
      "Garantie": "10 ani"
    },
    stoc: true,
    nou: false
  },
  {
    id: 35,
    nume: "ViewSonic VX2758A-2K-PRO-3",
    categorie: "monitoare",
    pret: 5990,
    pretVechi: 6990,
    imagine: "images/products/monitor-1.jpg",
    descriere: "Monitor curbat 49\" Dual QHD OLED 240Hz cu 0.03ms si HDR True Black 400.",
    detalii: "ViewSonic VX2758A-2K-PRO-3 este monitorul gaming definitiv pentru entuziasti. Panel OLED curbat 1800R cu rezolutie Dual QHD 5120x1440, 240Hz si timp raspuns 0.03ms GtG.",
    specs: {
      "Diagonala": "49\" curbat 1800R",
      "Rezolutie": "5120 x 1440 Dual QHD",
      "Refresh rate": "240 Hz",
      "Timp raspuns": "0.03ms GtG",
      "Panel": "OLED HDR True Black 400",
      "Porturi": "DP 1.4, 2x HDMI 2.1, USB-C"
    },
    stoc: true,
    nou: true
  },
  {
    id: 36,
    nume: "Samsung Odyssey OLED G8",
    categorie: "monitoare",
    pret: 13990,
    pretVechi: 15990,
    imagine: "images/products/monitor-2.jpg",
    descriere: "Monitor gaming 27\" 4K Nano IPS 144Hz cu HDMI 2.1 si G-Sync Compatible.",
    detalii: "Samsung Odyssey OLED G8 ofera experienta 4K gaming completa. Panel Nano IPS cu acoperire DCI-P3 98%, HDMI 2.1 pentru consolele next-gen si suport G-Sync + FreeSync Premium Pro.",
    specs: {
      "Diagonala": "27\"",
      "Rezolutie": "3840 x 2160 4K UHD",
      "Refresh rate": "144 Hz (160 OC)",
      "Timp raspuns": "1ms GtG",
      "Panel": "Nano IPS HDR600",
      "Porturi": "2x HDMI 2.1, DP 1.4, USB"
    },
    stoc: true,
    nou: true
  },
  {
    id: 37,
    nume: "Samsung Odyssey OLED G9",
    categorie: "monitoare",
    pret: 15490,
    pretVechi: null,
    imagine: "images/products/monitor-3.jpg",
    descriere: "Monitor gaming 27\" QHD IPS 240Hz G-Sync cu Reflex Latency Analyzer.",
    detalii: "Samsung Odyssey OLED G9 este alegerea pro-gamerilor competitivi. Panel IPS Fast 240Hz, G-Sync hardware, Reflex Latency Analyzer pentru masurarea latentei system-end.",
    specs: {
      "Diagonala": "27\"",
      "Rezolutie": "2560 x 1440 QHD",
      "Refresh rate": "240 Hz",
      "Timp raspuns": "1ms GtG",
      "Panel": "IPS Fast G-Sync HDR400",
      "Porturi": "DP 1.4, HDMI 2.0, USB 3.0"
    },
    stoc: true,
    nou: false
  },
  {
    id: 38,
    nume: "Acer Predator",
    categorie: "monitoare",
    pret: 7990,
    pretVechi: 9999,
    imagine: "images/products/monitor-4.jpg",
    descriere: "Monitor curbat 34\" UltraWide QD-OLED 165Hz cu HDR True Black 400 si FreeSync Premium Pro.",
    detalii: "Acer Predator aduce tehnologia QD-OLED in zona pretului accesibil. Curbura 1800R, rezolutie WQHD UltraWide, 165Hz si timp raspuns 0.1ms pentru gaming imersiv perfect.",
    specs: {
      "Diagonala": "34\" curbat 1800R",
      "Rezolutie": "3440 x 1440 WQHD",
      "Refresh rate": "165 Hz",
      "Timp raspuns": "0.1ms GtG",
      "Panel": "QD-OLED HDR True Black 400",
      "Porturi": "DP 1.4, 2x HDMI 2.0, USB Hub"
    },
    stoc: true,
    nou: true
  },
  {
    id: 39,
    nume: "Samsung Odyssey G5",
    categorie: "monitoare",
    pret: 4990,
    pretVechi: 5990,
    imagine: "images/products/monitor-5.jpg",
    descriere: "Monitor gaming 27\" Full HD IPS 165Hz cu HDRi si difuzoare treVolo 2.5W.",
    detalii: "Samsung Odyssey G5 ofera un raport pret-performanta excelent. Panel IPS 165Hz cu tehnologia HDRi pentru contrast superior si difuzoare treVolo cu sunet 3D imersiv.",
    specs: {
      "Diagonala": "27\"",
      "Rezolutie": "1920 x 1080 FHD",
      "Refresh rate": "165 Hz",
      "Timp raspuns": "1ms MPRT",
      "Panel": "IPS HDRi",
      "Difuzoare": "2x 2.5W treVolo"
    },
    stoc: true,
    nou: false
  },
  {
    id: 40,
    nume: "MSI Curved Gaming",
    categorie: "monitoare",
    pret: 9990,
    pretVechi: 1190,
    imagine: "images/products/monitor-6.jpg",
    descriere: "Monitor gaming 27\" QHD Rapid IPS 170Hz cu Quantum Dot si HDR400.",
    detalii: "MSI Curved Gaming imbina tehnologia Quantum Dot cu un panel Rapid IPS de 170Hz. Acoperire 97% DCI-P3, USB-C cu Power Delivery 15W si suport KVM integrat.",
    specs: {
      "Diagonala": "27\"",
      "Rezolutie": "2560 x 1440 QHD",
      "Refresh rate": "170 Hz",
      "Timp raspuns": "1ms GtG",
      "Panel": "Rapid IPS Quantum Dot HDR400",
      "Porturi": "DP 1.4, 2x HDMI 2.0b, USB-C 15W"
    },
    stoc: true,
    nou: true
  }
];
