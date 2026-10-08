const characterSelect = document.getElementById("character");
const goalSelect = document.getElementById("goal");
const difficultySelect = document.getElementById("difficulty");
const generatePlanButton = document.getElementById("generatePlan");
const planResult = document.getElementById("planResult");

const strategies = {
  Zetterburn: {
    xp: "Tu dois focuser sur les rushes rapides, engager les fights en zone ouverte et sortir les bonus d'xp à l'attaque directe.",
    resources: "Priorise les routes avec des cartes courtes et des collisions favorables pour maximiser ton gain de ressources sans prendre de risques",
    rank: "Le bon plan est d'entrer dans les matches au bon timing, avec pression constante et fin de route agressive.",
    practice: "Travaille les conversions, les schimmies et les récupérations après chaque attaque pour garder un rythme élevé."
  },
  Orcane: {
    xp: "Cherche les maps plus longues, contrôle la zone et sécurise tes bonus pendant les phases de tempo moyen.",
    resources: "Suis un rythme plus stable, sans rush prématuré, pour éviter les pertes et garder un farming régulier.",
    rank: "Le plan idéal est de jouer au contrôle, d'anticiper les échanges et de convertir la pression en gains sûrs.",
    practice: "Exerce-toi sur les défenses, les mouvements de zone et la gestion de la distance pour monter en fiabilité."
  },
  Kragg: {
    xp: "Concentre-toi sur les routes plus sûres avec des engagements contrôlés et des conversions en fin de map.",
    resources: "Choisis des chemins plus protecteurs, avec moins de risques de mort, et maximise tes échanges en sécurité.",
    rank: "Joue en supériorité de stabilité, garde ton tempo et profite des erreurs de l'adversaire pour sécuriser la progression.",
    practice: "Travaille la patience, le timing d'attaque et l'anticipation pour convertir tes avantages en fin de run."
  },
  Forsburn: {
    xp: "Mixe pression et mobilité pour exploiter les espaces larges, puis termine les loops sur des routes rapides.",
    resources: "Utilise un style plus adaptable, en gardant des déplacements qui évitent les erreurs coûteuses.",
    rank: "Le gain vient du tempo, des conversions rapides et d'une exécution propre en fin d'échange.",
    practice: "Perfectionne les chaînes et les resets pour améliorer la fluidité de tes actions et ton timing."
  },
  Wrastor: {
    xp: "Joue sur la mobilité et la création d'espace, avec le bon timing pour convertir les openings en exploit.",
    resources: "Concentre-toi sur le contrôle de la zone, puis converti tes avantages en gains stables et répétables.",
    rank: "Le meilleur plan est d'exploiter l'initiative, d'agir en tempo et de finir les échanges proprement.",
    practice: "Travailler les mouvements de repli, les combos et la reprise d'initiative est la meilleure progression."
  }
};

const difficultyNotes = {
  low: "Reste sur des routes sûres, minimises les risques et privilégie le gain régulier.",
  mid: "Balance entre vitesse et sécurité pour maintenir un bon ratio d'efficacité.