const characterSelect = document.getElementById("character");
const goalSelect = document.getElementById("goal");
const difficultySelect = document.getElementById("difficulty");
const generatePlanButton = document.getElementById("generatePlan");
const planResult = document.getElementById("planResult");

const strategies = {
  Zetterburn: {
    xp: "Tu dois viser les rushes rapides, pousser la pression en zone ouverte et convertir les bonus XP avant la fin du run.",
    resources: "Choisis une route courte avec des engagements décisifs pour maximiser l'efficacité de tes ressources sans trop de risque.",
    rank: "Le bon plan est d'entrer en pression à bonne cadence, de garder le tempo et d'attaquer la fin de route agressivement.",
    practice: "Travaille les conversions, les schimmies et les reprises après pression pour garder un rythme de jeu élevé."
  },
  Orcane: {
    xp: "Planifie un tempo moyen, contrôle la zone et sécurise tes bonus pendant les phases de fight plus stables.",
    resources: "Priorise les routes fiables avec peu de variations de profondeur pour un farming régulier et sûr.",
    rank: "Le meilleur plan est de jouer une pression contrôlée, d'anticiper les échanges et de convertir la stabilité en gains.",
    practice: "Exerce-toi sur les défenses, les mouvements latéraux et les reprises de distance pour monter en fiabilité."
  },
  Kragg: {
    xp: "Focalise-toi sur des routes plus sûres, avec des engagements mesurés et des conversions au bon moment.",
    resources: "Privilégie les chemins protecteurs, moins de risques de mort et une gestion forte de la zone.",
    rank: "Joue en supériorité de stabilité, garde ton tempo et profite des erreurs adverses pour sécuriser la progression.",
    practice: "Travaille la patience, le timing d'attaque et la lecture de la distance pour maximiser ta pression."
  },
  Forsburn: {
    xp: "Mélange mobilité et pression pour exploiter les espaces larges, puis finis les loops sur des routes rapides.",
    resources: "Utilise un schéma adaptable et garde des déplacements qui limitent les erreurs coûteuses.