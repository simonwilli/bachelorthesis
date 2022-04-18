export const questions = [
  {
    categoryName: 'Functionality',
    weight: 0.1,
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
    weight: 0.1,
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
    weight: 0.1,
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
    weight: 0.1,
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
    weight: 0.3,
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
        },
      },
    ],
  },
];

export const categoryNames = questions.map((category) => category.categoryName);
