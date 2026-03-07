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
    tagline: "Voor kinesisten met een eigen praktijk",
    headline: "Terwijl jij behandelt,\nboekt Aidy je volgende pati\u00ebnt.",
    subheadline:
      "Je hebt geen secretariaat. Tussen twee sessies door mis je oproepen, vergeet je afspraken te bevestigen, en schiet opvolging erbij in. Aidy regelt dat via WhatsApp \u2014 terwijl jij met je pati\u00ebnt bezig bent.",
    painPoints: [
      {
        title: "Je telefoon gaat. Je handen zitten op een rug.",
        description:
          "Halverwege een mobilisatie belt iemand voor een afspraak. Je kan niet opnemen. Die pati\u00ebnt belt de praktijk verderop. Dat gebeurt elke week.",
      },
      {
        title: "Een leeg half uur waar niemand voor betaalt.",
        description:
          "Een pati\u00ebnt vergeet z\u2019n afspraak. Jij staat in een lege behandelkamer. Geen herinnering gestuurd, want wanneer dan? Tussen twee sessies door heb je geen tijd om berichten te sturen.",
      },
      {
        title: "Na de sessie wil je opvolgen. Na de sessie vergeet je het.",
        description:
          "Je wil weten of de oefeningen lukken. Of de pijn afneemt. Maar na acht pati\u00ebnten op een dag stuur je dat bericht niet meer. Opvolging wordt een voornemen in plaats van een gewoonte.",
      },
    ],
    features: [
      {
        iconName: "MessageSquare",
        title: "Pati\u00ebnten boeken via WhatsApp. Ook om 22u.",
        description:
          "Een pati\u00ebnt stuurt \u2018Kan ik donderdag terecht?\u2019 Aidy checkt je agenda en stelt een tijdslot voor. Geen telefoontje nodig. Geen app die ze eerst moeten downloaden.",
      },
      {
        iconName: "Clock",
        title: "E\u00e9n herinnering minder vergeten = \u00e9\u00e9n no-show minder.",
        description:
          "24 uur \u00e9n 1 uur voor de afspraak krijgt je pati\u00ebnt een WhatsApp-bericht. Geen SMS die niemand leest. WhatsApp, waar ze toch al zitten.",
      },
      {
        iconName: "Calendar",
        title: "De dag na de sessie: \u2018Hoe voelt het vandaag?\u2019",
        description:
          "Aidy stuurt automatisch een check-in na de behandeling. Je pati\u00ebnt voelt zich gehoord. Jij weet hoe het gaat \u2014 zonder er zelf aan te moeten denken.",
      },
      {
        iconName: "Shield",
        title: "Pati\u00ebntdata blijft in Europa. Punt.",
        description:
          "Europese servers. Data-isolatie per pati\u00ebnt. Geen Amerikaans bedrijf dat meeleest. Je voldoet aan de GDPR zonder er iets voor te hoeven doen.",
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
          "Pati\u00ebnten sturen een bericht, Aidy plant in op een vrij moment.",
      },
      {
        step: 3,
        title: "Aidy herinnert en volgt op",
        description:
          "Herinnering voor de afspraak, check-in na de sessie. Jij doet niks.",
      },
    ],
    roiLine:
      "E\u00e9n gemiste afspraak minder per maand dekt de kosten. Bij \u20ac40 per sessie verdien je het viervoudig terug.",
    ctaText: "Probeer het 14 dagen in je praktijk",
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
    tagline: "Voor Belgische huisartsen",
    headline: "Jouw wachtzaal\nbelt niet meer.",
    subheadline:
      "Tussen twee consultaties door: 3 gemiste oproepen, 4 WhatsApp-berichten, een doorverwijzing die nog moet. Aidy neemt de telefoon over via WhatsApp. Pati\u00ebnten krijgen antwoord. Jij consulteert.",
    painPoints: [
      {
        title: "De telefoon rinkelt tijdens je consultatie.",
        description:
          "Een pati\u00ebnt belt voor een herhaalvoorschrift. Een andere wil een afspraak verzetten. Ondertussen wacht er iemand in je spreekkamer.",
      },
      {
        title: "Elk kanaal is een open deur.",
        description:
          "Dezelfde pati\u00ebnt belt, appt \u00e9n mailt. Drie keer hetzelfde verzoek, drie keer je aandacht. Nergens \u00e9\u00e9n overzicht.",
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
          "Afspraak maken, afspraak verzetten, herhaalvoorschrift aanvragen. Pati\u00ebnten sturen een bericht, Aidy regelt het. Jij ziet het in je agenda.",
      },
      {
        iconName: "Clock",
        title: "Automatische herinneringen, minder no-shows",
        description:
          "24 uur voor de afspraak krijgt de pati\u00ebnt een herinnering via WhatsApp. No-shows dalen. Je uren blijven gevuld.",
      },
      {
        iconName: "Shield",
        title: "GDPR en medisch beroepsgeheim",
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
          "Pati\u00ebnten sturen een bericht zoals ze dat nu al doen. Aidy beantwoordt, plant in, en bevestigt.",
      },
      {
        step: 3,
        title: "Jij ziet alles in je overzicht",
        description:
          "Afspraken, berichten, aanvragen. Alles gelogd. Niets valt weg.",
      },
    ],
    roiLine:
      "Een praktijkassistente kost \u20ac2.500/maand. Aidy kost \u20ac9. Doet dezelfde telefoon.",
    ctaText: "Probeer het gratis in je praktijk",
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
    tagline: "Voor advocaten die alleen of met een klein kantoor werken",
    headline: "Twee uur per dag aan administratie.\nDie tijd kun je factureren.",
    subheadline:
      "Een gemiddelde advocaat besteedt 30% van de werkdag aan conclusietermijnen bijhouden, cli\u00ebnten terugbellen en uren registreren. Tegen een uurtarief van \u20ac150 is dat \u20ac45.000 per jaar aan gemiste omzet. Aidy doet dat administratieve werk via WhatsApp of Telegram. Jij factureert.",
    painPoints: [
      {
        title: "Je werkt 10 uur, je factureert er 6.",
        description:
          "Conclusietermijnen nakijken, rolzittingen in je agenda zetten, een cli\u00ebnt terugbellen over de stand van zaken. Dat is werk. Maar het staat niet op je tijdsregistratie. Bij \u20ac150/uur laat je elke dag \u20ac600 liggen.",
      },
      {
        title: "Vijftien dossiers. E\u00e9n gemiste conclusietermijn.",
        description:
          "Je hebt dossier-Janssens met een conclusietermijn op donderdag, dossier-Peeters wacht op stukken van de tegenpartij, en de stagiair vraagt wanneer de rolzitting is. Dat in je hoofd bijhouden werkt tot het een keer niet werkt.",
      },
      {
        title: "Cli\u00ebntdata op een Amerikaanse server is een deontologische fout.",
        description:
          "De Orde van Vlaamse Balies is duidelijk: beroepsgeheim geldt ook digitaal. Cli\u00ebntgegevens op servers buiten Europa \u2014 dat is geen technisch detail, dat is een tuchtrechtelijk risico.",
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
        title: "Cli\u00ebnten appen je. Aidy koppelt het aan het dossier.",
        description:
          "Je cli\u00ebnt stuurt een WhatsApp: \u2018Meester, ik heb die factuur gevonden.\u2019 Aidy logt dat bericht bij het juiste cli\u00ebntendossier. Jij hoeft niets te kopi\u00ebren.",
      },
      {
        iconName: "Shield",
        title: "Beroepsgeheim. Technisch afgedwongen.",
        description:
          "Europese hosting. Data-isolatie: jouw dossiers zijn onzichtbaar voor andere gebruikers, voor ons, voor iedereen. Geen training op jouw data.",
      },
      {
        iconName: "Clock",
        title: "Tijdsregistratie in 5 seconden",
        description:
          "Stuur: \u2018Dossier Janssens, 45 min, conclusie nakijken.\u2019 Klaar. Geen app openen, geen formulier invullen. Eind van de maand exporteer je alles naar je factuur.",
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
    roiLine:
      "Een halftijdse secretaresse kost \u20ac1.500/maand. Aidy kost \u20ac9. En Aidy vergeet geen conclusietermijn.",
    ctaText: "Probeer Aidy 14 dagen gratis",
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
    tagline: "Voor zaakvoerders met 5 tot 25 werknemers",
    headline: "Je runt een bedrijf met 15 man.\nJe hebt geen stafchef. Nu wel.",
    subheadline:
      "Je doet sales, HR, planning en admin zelf. Je boekhouder belt, je werknemer appt, je klant mailt. Aidy is je digitale stafchef \u2014 via WhatsApp, voor \u20ac9/maand.",
    painPoints: [
      {
        title: "Maandag 8u. Je weet niet wat er vandaag moet gebeuren.",
        description:
          "Je opent je agenda en ziet 6 meetings. Tussendoor moet je een offerte afwerken, je boekhouder terugbellen en een werknemer antwoorden over vakantiedagen. Je begint nergens aan en eindigt overal halverwege.",
      },
      {
        title: "Je bent het geheugen van je eigen bedrijf.",
        description:
          "Hoe zit dat contract? Wat is het nummer van het sociaal secretariaat? Wanneer is die deadline? Elke vraag komt bij jou. Niet omdat je team lui is, maar omdat niemand anders het weet.",
      },
      {
        title: "Een office manager kost \u20ac3.500/maand. Jij hebt die \u20ac3.500 niet.",
        description:
          "Maar je hebt wel dezelfde problemen als een CEO met 200 man. Agenda-chaos, herhaalvragen, opvolging die blijft liggen. Het verschil: jij lost het op door tot 21u door te werken.",
      },
    ],
    features: [
      {
        iconName: "Calendar",
        title: "Elke ochtend om 7u30: je dag op je telefoon.",
        description:
          "Aidy stuurt je een WhatsApp met je meetings, deadlines en openstaande to-do\u2019s. Geen app openen, geen dashboard. Gewoon een bericht.",
      },
      {
        iconName: "MessageSquare",
        title: "Je werknemers appen Aidy in plaats van jou.",
        description:
          "Waar staat dat document? Wat is het wachtwoord van die tool? Hoe vraag ik verlof aan? Aidy kent je processen en antwoordt direct.",
      },
      {
        iconName: "Users",
        title: "Aidy zit in je teamgroep op WhatsApp.",
        description:
          "Helpt met planning, stuurt herinneringen, volgt afspraken op. Als iemand zegt \u2018ik doe dat morgen\u2019, checkt Aidy morgen of het gebeurd is.",
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
    roiLine:
      "\u20ac9/maand. Als Aidy je \u00e9\u00e9n uur per week bespaart, verdien je het 10x terug.",
    ctaText: "Probeer Aidy 14 dagen gratis",
  },
};

export const verticalOrder = ["kinesist", "huisarts", "advocaat", "ceo-kmo"];
