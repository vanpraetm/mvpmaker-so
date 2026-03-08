export type VerticalData = {
  id: string;
  label: string;
  iconName: string;
  accentColor: string;
  accentColorHex: string;
  accentBg: string;
  accentBorder: string;
  buttonBg: string;
  buttonHover: string;
  tagline: string;
  headline: string;
  subheadline: string;
  painPoints: { title: string; description: string }[];
  features: { iconName: string; title: string; description: string }[];
  howItWorks: { step: number; title: string; description: string }[];
  faq: { q: string; a: string }[];
  roiLine: string;
  ctaText: string;
};

export const verticals: Record<string, VerticalData> = {
  kinesist: {
    id: "kinesist",
    label: "Kinesist",
    iconName: "Activity",
    accentColor: "text-teal-600",
    accentColorHex: "#0d9488",
    accentBg: "bg-teal-50",
    accentBorder: "border-teal-200",
    buttonBg: "bg-teal-600",
    buttonHover: "hover:bg-teal-700",
    tagline: "Voor kinesisten zonder secretariaat",
    headline:
      "Drie gemiste oproepen per dag.\nAidy neemt ze op via WhatsApp.",
    subheadline:
      "Je mist oproepen. Vergeet afspraken te bevestigen. Opvolging schiet erbij in. Aidy regelt dat via WhatsApp, terwijl jij behandelt.",
    painPoints: [
      {
        title: "Je telefoon gaat. Je handen zitten op een rug.",
        description:
          "Halverwege een mobilisatie belt iemand voor een afspraak. Je kan niet opnemen. Die pati\u00ebnt belt de praktijk verderop. Dat gebeurt elke week.",
      },
      {
        title:
          "Dinsdagmiddag 15u. Lege behandeltafel. Geen herinnering gestuurd.",
        description:
          "Een pati\u00ebnt vergeet z\u2019n afspraak. Jij staat in een lege behandelkamer. Je had een herinnering moeten sturen. Maar wanneer? Tussen twee sessies door is er geen tijd.",
      },
      {
        title: "Na de sessie wil je opvolgen. Na de sessie vergeet je het.",
        description:
          "Je wil weten of de oefeningen lukken. Of de pijn afneemt. Maar na acht pati\u00ebnten op een dag stuur je dat bericht niet meer.",
      },
    ],
    features: [
      {
        iconName: "MessageSquare",
        title:
          "Pati\u00ebnt stuurt 'Kan ik donderdag?' om 22u. Aidy antwoordt binnen 10 seconden.",
        description:
          "Aidy checkt je agenda en stelt een tijdslot voor. Geen telefoontje nodig. Geen app die ze eerst moeten downloaden.",
      },
      {
        iconName: "Clock",
        title:
          "E\u00e9n herinnering minder vergeten = \u00e9\u00e9n no-show minder.",
        description:
          "24 uur en 1 uur voor de afspraak krijgt je pati\u00ebnt een WhatsApp-bericht. Niet via SMS die niemand leest. Via WhatsApp, waar ze toch al zitten.",
      },
      {
        iconName: "Calendar",
        title: "De dag na de sessie: 'Hoe voelt het vandaag?'",
        description:
          "Aidy stuurt automatisch een check-in na de behandeling. Je pati\u00ebnt voelt zich gehoord. Jij weet hoe het gaat. Zonder er zelf aan te denken.",
      },
      {
        iconName: "Shield",
        title: "Pati\u00ebntdata blijft in Europa. Punt.",
        description:
          "Europese servers. Data-isolatie per pati\u00ebnt. Geen Amerikaans bedrijf dat meeleest. Je voldoet aan de GDPR zonder er iets voor te doen.",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Verbind je agenda",
        description:
          "Google Calendar of je praktijksoftware. Duurt twee minuten.",
      },
      {
        step: 2,
        title: "Deel je Aidy-nummer",
        description:
          "Pati\u00ebnten sturen een bericht. Aidy plant in op een vrij moment.",
      },
      {
        step: 3,
        title: "Aidy herinnert en volgt op",
        description:
          "Herinnering voor de afspraak, check-in na de sessie. Jij doet niks.",
      },
    ],
    faq: [
      {
        q: "Werkt Aidy met mijn praktijksoftware?",
        a: "Aidy koppelt met Google Calendar en de meeste online agenda's. Directe integratie met specifieke praktijksoftware (zoals Crossuite of Cally) staat op de roadmap.",
      },
      {
        q: "Kunnen patiënten echt afspraken boeken via WhatsApp?",
        a: "Ja. De patiënt stuurt een bericht, Aidy checkt je beschikbaarheid en stelt een tijdslot voor. De patiënt bevestigt, klaar. Geen app nodig.",
      },
      {
        q: "Wat als een patiënt buiten mijn werkuren een bericht stuurt?",
        a: "Aidy antwoordt 24/7. Als iemand om 22u een afspraak wil, krijgen ze direct een voorstel voor het eerstvolgende vrije moment.",
      },
      {
        q: "Hoe zit het met GDPR en patiëntgegevens?",
        a: "Alle data staat op Europese servers. Elke gebruiker heeft een volledig geïsoleerde omgeving. Geen data wordt gedeeld of gebruikt voor training.",
      },
      {
        q: "Wat kost Aidy?",
        a: "Je start gratis met pay-as-you-go credits. Het Pro-plan kost €9/maand en bevat alles wat een solo-praktijk nodig heeft.",
      },
    ],
    roiLine:
      "E\u00e9n no-show minder per maand = \u20ac40 terug. Aidy kost \u20ac9.",
    ctaText: "Start gratis in je praktijk",
  },
  huisarts: {
    id: "huisarts",
    label: "Huisarts",
    iconName: "Stethoscope",
    accentColor: "text-blue-600",
    accentColorHex: "#2563eb",
    accentBg: "bg-blue-50",
    accentBorder: "border-blue-200",
    buttonBg: "bg-blue-600",
    buttonHover: "hover:bg-blue-700",
    tagline: "Voor huisartsen zonder receptionist",
    headline:
      "Tussen twee consultaties:\n4 gemiste oproepen. Aidy beantwoordt ze.",
    subheadline:
      "Drie gemiste oproepen. Vier WhatsApp-berichten. Een doorverwijzing die nog moet. Aidy neemt de telefoon over via WhatsApp. Pati\u00ebnten krijgen antwoord. Jij consulteert.",
    painPoints: [
      {
        title: "De telefoon rinkelt tijdens je consultatie.",
        description:
          "Een pati\u00ebnt belt voor een herhaalvoorschrift. Een andere wil een afspraak verzetten. Ondertussen wacht er iemand in je spreekkamer.",
      },
      {
        title:
          "Dezelfde pati\u00ebnt belt, appt \u00e9n mailt. Drie keer dezelfde vraag.",
        description:
          "Drie keer hetzelfde verzoek, drie keer je aandacht. Nergens \u00e9\u00e9n overzicht. Alles verspreid over drie kanalen.",
      },
      {
        title: "Een praktijkassistent kost \u20ac2.500/maand.",
        description:
          "Een halftijdse secretaresse kost meer dan wat de meeste solo-praktijken aankunnen. Maar zelf de telefoon doen tussen consultaties is geen plan.",
      },
    ],
    features: [
      {
        iconName: "MessageSquare",
        title: "Pati\u00ebnten boeken via WhatsApp",
        description:
          "Afspraak maken, verzetten, herhaalvoorschrift aanvragen. Pati\u00ebnten sturen een bericht. Aidy regelt het. Jij ziet het in je agenda.",
      },
      {
        iconName: "Clock",
        title: "Automatische herinneringen, minder no-shows",
        description:
          "24 uur voor de afspraak krijgt de pati\u00ebnt een herinnering via WhatsApp. No-shows dalen. Je uren blijven gevuld.",
      },
      {
        iconName: "Shield",
        title:
          "Beroepsgeheim geldt ook digitaal. Aidy dwingt het technisch af.",
        description:
          "Europese servers. Data-isolatie per pati\u00ebnt. Geen data naar de VS. Je voldoet aan de GDPR en aan je deontologische code.",
      },
      {
        iconName: "Users",
        title: "Gebouwd voor groepspraktijken",
        description:
          "Drie artsen, twee dagen wachtdienst, wisselende beschikbaarheid. Aidy weet wie wanneer werkt en plant correct in.",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Koppel je agenda",
        description:
          "Verbind je praktijkagenda. Stel je consultatie-uren en wachtdiensten in. Duurt 5 minuten.",
      },
      {
        step: 2,
        title: "Deel je WhatsApp-nummer",
        description:
          "Pati\u00ebnten sturen een bericht zoals ze dat nu al doen. Aidy beantwoordt, plant in en bevestigt.",
      },
      {
        step: 3,
        title: "Jij ziet alles in je overzicht",
        description:
          "Afspraken, berichten, aanvragen. Alles gelogd. Niets valt weg.",
      },
    ],
    faq: [
      {
        q: "Werkt Aidy voor groepspraktijken met meerdere artsen?",
        a: "Ja. Elke arts krijgt een eigen bot. Aidy weet wie wanneer werkt en plant patiënten bij de juiste arts in.",
      },
      {
        q: "Kunnen patiënten herhaalvoorschriften aanvragen via Aidy?",
        a: "Ja. De patiënt stuurt een bericht, Aidy logt de aanvraag en stuurt je een melding. Jij keurt goed wanneer het je past.",
      },
      {
        q: "Wat als een patiënt dringende klachten meldt?",
        a: "Aidy is geen medisch hulpmiddel en stelt geen diagnoses. Bij urgente berichten krijg je direct een notificatie zodat je zelf kan beslissen.",
      },
      {
        q: "Is Aidy GDPR-compliant voor medische gegevens?",
        a: "Alle data staat op Europese servers met volledige isolatie per gebruiker. Er wordt geen data gedeeld of gebruikt voor AI-training.",
      },
      {
        q: "Wat kost Aidy voor een huisartsenpraktijk?",
        a: "Gratis starten met pay-as-you-go. Pro kost €9/maand per arts. Vergelijk dat met €2.500/maand voor een halftijdse receptionist.",
      },
    ],
    roiLine:
      "Een halftijdse receptionist: \u20ac2.500/maand. Aidy doet de telefoon voor \u20ac9.",
    ctaText: "Start gratis. Eerste pati\u00ebnt boekt vandaag.",
  },
  advocaat: {
    id: "advocaat",
    label: "Advocaat",
    iconName: "Scale",
    accentColor: "text-amber-700",
    accentColorHex: "#b45309",
    accentBg: "bg-amber-50",
    accentBorder: "border-amber-200",
    buttonBg: "bg-amber-700",
    buttonHover: "hover:bg-amber-800",
    tagline: "Voor advocaten zonder paralegal",
    headline:
      "Twee uur per dag die je niet factureert.\nBij \u20ac150/uur is dat \u20ac66.000 per jaar.",
    subheadline:
      "Conclusietermijnen bijhouden. Cli\u00ebnten terugbellen. Uren registreren. Werk dat niet op je tijdsregistratie staat. Aidy doet dat via WhatsApp of Telegram. Jij factureert.",
    painPoints: [
      {
        title: "Je werkt 10 uur, je factureert er 6.",
        description:
          "Conclusietermijnen nakijken. Rolzittingen in je agenda zetten. Een cli\u00ebnt terugbellen over de stand van zaken. Bij \u20ac150/uur laat je elke dag \u20ac600 liggen.",
      },
      {
        title:
          "Vijftien dossiers. E\u00e9n gemiste conclusietermijn.",
        description:
          "Dossier-Janssens heeft een conclusietermijn op donderdag. Dossier-Peeters wacht op stukken. De stagiair vraagt wanneer de rolzitting is. Dat in je hoofd bijhouden werkt tot het een keer niet werkt.",
      },
      {
        title:
          "Cli\u00ebntdata op een Amerikaanse server is een deontologische fout.",
        description:
          "De Orde van Vlaamse Balies is duidelijk: beroepsgeheim geldt ook digitaal. Cli\u00ebntgegevens op servers buiten Europa is een tuchtrechtelijk risico.",
      },
    ],
    features: [
      {
        iconName: "Calendar",
        title: "Conclusietermijnen en rolzittingen per dossier",
        description:
          "Aidy kent de termijnen van elk dossier. Drie dagen voor een conclusietermijn krijg je een bericht. De ochtend van een rolzitting ook.",
      },
      {
        iconName: "MessageSquare",
        title:
          "Cli\u00ebnt stuurt 'Meester, ik heb die factuur gevonden.' Aidy koppelt het aan het dossier.",
        description:
          "Berichten van cli\u00ebnten worden automatisch bij het juiste dossier gelogd. Jij hoeft niets te kopi\u00ebren.",
      },
      {
        iconName: "Shield",
        title: "Beroepsgeheim. Technisch afgedwongen.",
        description:
          "Europese hosting. Data-isolatie: jouw dossiers zijn onzichtbaar voor andere gebruikers, voor ons, voor iedereen. Geen training op jouw data.",
      },
      {
        iconName: "Clock",
        title:
          "Stuur 'Janssens, 45 min, conclusie'. Aidy logt het.",
        description:
          "Geen app openen. Geen formulier invullen. Eind van de maand exporteer je alles naar je factuur.",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Koppel je kalender en dossiers",
        description:
          "Voeg je actieve dossiers toe met conclusietermijnen en roldata. Duurt 10 minuten voor je hele kantoor.",
      },
      {
        step: 2,
        title: "Werk via chat",
        description:
          "Registreer uren, check termijnen, plan een overleg. Allemaal via een WhatsApp- of Telegram-bericht aan Aidy.",
      },
      {
        step: 3,
        title: "Cli\u00ebnten bereiken je via messenger",
        description:
          "Berichten van cli\u00ebnten worden automatisch gekoppeld aan hun dossier. Jij ziet per dossier alle communicatie op \u00e9\u00e9n plek.",
      },
    ],
    faq: [
      {
        q: "Kan Aidy conclusietermijnen automatisch ophalen?",
        a: "Je voert de termijnen eenmalig in per dossier. Aidy herinnert je drie dagen en één dag vooraf. Automatisch ophalen uit het Belgisch Staatsblad staat op de roadmap.",
      },
      {
        q: "Is het veilig om cliëntgegevens via WhatsApp te delen?",
        a: "Aidy verwerkt berichten op Europese servers met volledige data-isolatie. Geen data wordt gedeeld met derden of gebruikt voor training. Je voldoet aan de GDPR en deontologische code.",
      },
      {
        q: "Werkt Aidy voor een heel advocatenkantoor?",
        a: "Ja. Elke advocaat krijgt een eigen geïsoleerde bot. Dossiers en termijnen worden per advocaat beheerd.",
      },
      {
        q: "Kan ik mijn tijdsregistratie exporteren?",
        a: "Ja. Aidy logt uren per dossier. Eind van de maand exporteer je alles als CSV of koppel je het aan je facturatiesoftware.",
      },
      {
        q: "Wat kost Aidy?",
        a: "Gratis starten. Pro kost €9/maand. Vergelijk: één gemiste conclusietermijn kan je €10.000+ kosten.",
      },
    ],
    roiLine:
      "E\u00e9n gemiste conclusietermijn kan je \u20ac10.000+ kosten. Aidy herinnert je drie dagen vooraf. Voor \u20ac9/maand.",
    ctaText: "Start gratis. Eerste dossier in 2 minuten gekoppeld.",
  },
  "ceo-kmo": {
    id: "ceo-kmo",
    label: "CEO / KMO",
    iconName: "Building2",
    accentColor: "text-violet-600",
    accentColorHex: "#7c3aed",
    accentBg: "bg-violet-50",
    accentBorder: "border-violet-200",
    buttonBg: "bg-violet-600",
    buttonHover: "hover:bg-violet-700",
    tagline: "Voor zaakvoerders die alles zelf doen",
    headline:
      "Elke vraag van je team komt bij jou.\nAidy beantwoordt ze.",
    subheadline:
      "Je doet sales, HR, planning en admin zelf. Je boekhouder belt, je werknemer appt, je klant mailt. Aidy is je digitale rechterhand via WhatsApp. Voor \u20ac9/maand.",
    painPoints: [
      {
        title:
          "Maandag 8u. Zes meetings. Drie openstaande offertes. Een werknemer belt over vakantie.",
        description:
          "Je opent je agenda en ziet 6 meetings. Tussendoor moet je een offerte afwerken. Je boekhouder terugbellen. Een werknemer antwoorden. Je begint nergens aan en eindigt overal halverwege.",
      },
      {
        title: "Je bent het geheugen van je eigen bedrijf.",
        description:
          "Hoe zit dat contract? Wat is het nummer van het sociaal secretariaat? Wanneer is die deadline? Elke vraag komt bij jou. Niet omdat je team lui is. Niemand anders weet het.",
      },
      {
        title:
          "Een office manager kost \u20ac3.500/maand. Jij hebt die \u20ac3.500 niet.",
        description:
          "Je hebt dezelfde problemen als een CEO met 200 man. Agenda-chaos. Herhaalvragen. Opvolging die blijft liggen. Jij lost het op door tot 21u door te werken.",
      },
    ],
    features: [
      {
        iconName: "Calendar",
        title: "Elke ochtend om 7u30: je dag op je telefoon.",
        description:
          "Aidy stuurt je een WhatsApp met je meetings, deadlines en openstaande taken. Geen app openen. Gewoon een bericht.",
      },
      {
        iconName: "MessageSquare",
        title:
          "Werknemer vraagt 'Waar staat dat contract?' Aidy antwoordt. Jij merkt er niks van.",
        description:
          "Aidy kent je processen en antwoordt direct. Geen onderbreking voor jou. Je team krijgt het antwoord in seconden.",
      },
      {
        iconName: "Users",
        title: "Aidy zit in je teamgroep op WhatsApp.",
        description:
          "Helpt met planning, stuurt herinneringen, volgt afspraken op. Als iemand zegt 'ik doe dat morgen', checkt Aidy morgen of het gebeurd is.",
      },
      {
        iconName: "Shield",
        title: "Je data blijft in Europa. Punt.",
        description:
          "Europese servers, data-isolatie per gebruiker, GDPR-compliant. Geen Amerikaans bedrijf dat meeleest.",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Koppel je agenda en WhatsApp",
        description: "Duurt 5 minuten. Aidy leert je routines kennen.",
      },
      {
        step: 2,
        title: "Vertel Aidy hoe je bedrijf werkt",
        description:
          "Processen, contacten, vaste afspraken. E\u00e9nmalig. Aidy onthoudt het.",
      },
      {
        step: 3,
        title: "Vanaf dag 2: briefing, antwoorden, opvolging",
        description:
          "Je krijgt elke ochtend je briefing. Je team stelt vragen aan Aidy. Jij doet het werk dat omzet oplevert.",
      },
    ],
    faq: [
      {
        q: "Kan mijn team ook vragen stellen aan Aidy?",
        a: "Ja. Aidy kan in je WhatsApp-groep zitten en vragen van je team beantwoorden op basis van de processen en informatie die je hebt ingevoerd.",
      },
      {
        q: "Hoe weet Aidy hoe mijn bedrijf werkt?",
        a: "Je vertelt Aidy eenmalig je processen, contacten en vaste afspraken. Aidy onthoudt het en gebruikt het om vragen te beantwoorden en taken op te volgen.",
      },
      {
        q: "Vervangt Aidy een office manager?",
        a: "Aidy neemt het repetitieve werk over: herinneringen, herhaalvragen, dagelijkse briefings. Voor strategische beslissingen en menselijk contact blijf jij nodig.",
      },
      {
        q: "Is mijn bedrijfsdata veilig?",
        a: "Alle data op Europese servers, volledig geïsoleerd per gebruiker. Geen data wordt gedeeld met derden of gebruikt voor AI-training. GDPR-compliant.",
      },
      {
        q: "Wat kost Aidy voor een KMO?",
        a: "Gratis starten. Pro kost €9/maand per gebruiker. Vergelijk: een office manager kost €3.500/maand.",
      },
    ],
    roiLine:
      "E\u00e9n uur minder herhaalvragen per week. Bij \u20ac100/uur is dat \u20ac400/maand. Aidy kost \u20ac9.",
    ctaText: "Start gratis. Morgenochtend je eerste briefing.",
  },
};

export const verticalOrder = ["kinesist", "huisarts", "advocaat", "ceo-kmo"];
