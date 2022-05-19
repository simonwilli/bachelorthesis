export const questions = [
  {
    categoryName: 'Funktionalität',
    weight: 0.3,
    ref: 'architecture',
    questions: [{
      question: 'Was ist der Einsatzzweck der Applikation? Welche Kritikalität hat die Applikation für das Business?',
      type: 'likert',
      properties: {
        left: 'Prototyp',
        right: 'Businesskritisch',
      },
    }],
  },
  {
    categoryName: 'Performance',
    weight: 0.09,
    ref: 'architecture',
    questions: [
      {
        question: 'Benötigst du eine schnelle Antwortzeit oder eine bessere Skalierbarkeit',
        type: 'likert',
        properties: {
          left: 'Schnelle Antwortzeit',
          right: 'Skalierbarkeit',
        },
      }, {
        question: 'Bevorzugst du für deine Applikation eine einfache Architketur oder eine besser Skalierbarkeit',
        type: 'likert',
        properties: {
          left: 'Einfache Architektur',
          right: 'Skalierbarkeit',
        },
      },
    ],
  },
  {
    categoryName: 'Zuverlässigkeit',
    weight: 0.1,
    ref: 'architecture',
    questions: [
      {
        question: 'Bist du für eine höhere Zuverlässigkeit bereit eine komplexere Konfigruation in Kauf zunehmen ',
        type: 'likert',
        properties: {
          left: 'Einfache Konfiguration',
          right: 'Erhöhte Zuverlässigkeit',
        },
      },
    ],
  }, {
    categoryName: 'Sicherheit',
    weight: 0.1,
    ref: 'architecture',
    questions: [
      {
        question: 'Ist dir eine bessere Performance wichtiger anstatt einer höheren Sicherheit? ',
        type: 'likert',
        properties: {
          left: 'Sicherheit',
          right: 'Performance',
        },
      },
    ],
  }, {
    categoryName: 'Maintainability',
    weight: 0.24,
    ref: 'architecture',
    questions: [
      {
        question: 'Bist du bereit für eine erhöhte Wartbarkeit dich um ein Schnittstellenmanagement zu bemühen?',
        type: 'likert',
        properties: {
          left: 'Kein Schnittstellenmanagment',
          right: 'Erhöhte Wartbarkeit',
        },
      },
      {
        question: 'Bevorzugst du tiefe Initialkosten dafür höhere Wartungskosten oder hohe Initialkosten dafür tiefere Wartungskosten?',
        type: 'likert',
        properties: {
          left: 'Tiefe Initialkosten, höhere Wartungskosten',
          right: 'Hohe Initialkosten, tiefere Wartungskosten',
        },
      }, {
        question: 'Bevorzugst du eine einfachere Testbarkeit oder benötigst du eine grössere Flexibilität in den Programmiersprachen?',
        type: 'likert',
        properties: {
          left: 'Testbarkeit',
          right: 'Flexibilität',
        },
      },
    ],
  }, {
    categoryName: 'Rahmenbedinungen',
    weight: 0.17,
    ref: 'architecture',
    questions: [
      {
        question: 'Einfache Architektur vs Entwicklungsgeschwindigkeit',
        type: 'likert',
        properties: {
          left: 'Einfache Architektur ',
          right: 'Geschwindigkeit',
        },
      },
      {
        question: 'Wie schätzt du den Stand der DevOps-Kultur Adaption ein? ',
        type: 'likert',
        properties: {
          left: 'Klassische Kultur',
          right: 'DevOps Kultur',
        },
      }, {
        question: 'Wie gross ist das Projektteam für diese Applikation',
        type: 'likert',
        properties: {
          left: 'Klein',
          right: 'Gross',
          values: ['1', '1-2', '3-4', '5-6', '7-8', '8-9'],
        },
      },
    ],
  },
  {
    categoryName: 'Cloud',
    weight: 1,
    ref: 'cloud',
    questions: [{
      question: 'Wurde bereits eine Cloud Strategie festgelegt?',
      resultText: 'Cloud Strategie',
      type: 'bool',
    }, {
      question: 'Wurde die Cloudnutzung durch die Compliance Abteilung bereits freigegen ?',
      resultText: 'Cloud Compliance',
      type: 'bool',
    }, {
      question: 'Sind die Mitarbeiter bereits genügent für die Nutzung der Cloud geschult worden ?',
      resultText: 'Cloud Mitarbeiter',
      type: 'bool',
    }, {
      question: 'Möchtest du eine klare Kostenübersicht oder lieber eine endlose Skalierbarkeit?',
      resultText: 'Cloud Kosten',
      type: 'likert',
      properties: {
        left: 'Klare Kostenübersicht',
        right: 'Skalierbarkeit',
      },
    }, {
      question: 'Wie lange wird die Applikation betrieben (in Jahren)?',
      resultText: 'Cloud Laufzeit',
      type: 'likert',
      properties: {
        left: 'Lang',
        right: 'Kurz',
        values: ['>7', '6-7', '4-6', '2-4', '1-2', '<1'],
      },
    }],
  },
];

export const categoryNames = questions.map((category) => category.categoryName);
