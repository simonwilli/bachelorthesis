export const questions = [
  {
    categoryName: 'Functionality',
    weight: 0.2,
    ref: 'architecture',
    questions: [{
      question: 'Was ist der Einsatzzweck der Applikation? Welche Kritikalität hat die Applikation für das Business?',
      type: 'likert',
      properties: {
        left: 'Proof of Concept',
        right: 'Business Critical',
      },
    }],
  },
  {
    categoryName: 'Performance',
    weight: 0.1,
    ref: 'architecture',
    questions: [
      {
        question: 'Benötigst du eine schnelle Antwortzeit oder Skalierbarkeit',
        type: 'likert',
        properties: {
          left: 'Kurze Latenz',
          right: 'Skalierbarkeit',
        },
      }, {
        question: 'This is the question text',
        type: 'likert',
        properties: {
          left: 'Einfache Architektur',
          right: 'Skalierbarkeit',
        },
      },
    ],
  },
  {
    categoryName: 'Reliability',
    weight: 0.13,
    ref: 'architecture',
    questions: [
      {
        question: 'Bist du für eine höhere Zuverlässigkeit bereit eine schwierigere Konfigruation in Kauf zunehmen ',
        type: 'likert',
        properties: {
          left: 'einfache Konfiguration',
          right: 'Reliability',
        },
      },
    ],
  }, {
    categoryName: 'Security',
    weight: 0.08,
    ref: 'architecture',
    questions: [
      {
        question: 'Performance vs Sicherheit ',
        type: 'likert',
        properties: {
          left: 'Performance',
          right: 'Sicherheit',
        },
      },
    ],
  }, {
    categoryName: 'Maintainability',
    weight: 0.28,
    ref: 'architecture',
    questions: [
      {
        question: 'Kein Schnittstellenmanagement vs Erhöhte Wartbarkeit',
        type: 'likert',
        properties: {
          left: 'Kein Schnittstellenmanagment',
          right: 'Erhöhte Wartbarkeit',
        },
      },
      {
        question: 'Tiefe Initialkosten, höhere Wartungskosten vs Hohe Initialkosten, tiefere Wartungskosten',
        type: 'likert',
        properties: {
          left: 'Tiefe Initialkosten, höhere Wartungskosten',
          right: 'Hohe Initialkosten, tiefere Wartungskosten',
        },
      }, {
        question: 'Testbarkeit vs Flexibilität',
        type: 'likert',
        properties: {
          left: 'Testbarkeit',
          right: 'Flexibilität',
        },
      },
    ],
  }, {
    categoryName: 'Kultur',
    weight: 0.23,
    ref: 'architecture',
    questions: [
      {
        question: 'Einfache Architektur vs Entwicklungsgeschwindigkeit',
        type: 'likert',
        properties: {
          left: 'Einfache Architektur ',
          right: 'Entwicklungsgeschwindigkeit',
        },
      },
      {
        question: 'Klassische Kultur vs DevOps Kultur',
        type: 'likert',
        properties: {
          left: 'Klassische Kultur',
          right: 'DevOps Kultur',
        },
      }, {
        question: 'Projektgrösse',
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
      question: 'Cloud Strategie ?',
      resultText: 'Cloud Strategie',
      type: 'bool',
    }, {
      question: 'Cloud Compliance ?',
      resultText: 'Cloud Compliance',
      type: 'bool',
    }, {
      question: 'Cloud Mitarbeiter ?',
      resultText: 'Cloud Mitarbeiter',
      type: 'bool',
    }, {
      question: 'Kostenübersicht vs skalierbarkeit ?',
      resultText: 'Cloud Kosten',
      type: 'likert',
      properties: {
        left: 'Klein',
        right: 'Gross',
      },
    }, {
      question: 'Laufzeit ?',
      resultText: 'Cloud Laufzeit',
      type: 'likert',
      properties: {
        left: 'Klein',
        right: 'Gross',
      },
    }],
  },
];

export const categoryNames = questions.map((category) => category.categoryName);
