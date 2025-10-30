const a = /* @__PURE__ */ new Map();
function i(e) {
  a.set(e.id, e);
}
function o(e) {
  a.delete(e);
}
function t(e) {
  e.forEach((r) => i(r));
}
const s = [
  // Modèle: Taxonomie biologique
  {
    id: "biological-taxonomy",
    name: "Biological Taxonomy",
    description: "Hierarchical biological classification",
    isFavorite: !0,
    tags: [
      {
        id: "kingdom-1",
        label: "Animalia",
        parentIds: [],
        children: ["phylum-1", "phylum-2"],
        relations: [],
        color: "#ef4444"
      },
      {
        id: "phylum-1",
        label: "Chordata",
        parentIds: ["kingdom-1"],
        children: ["class-1", "class-2"],
        relations: [],
        color: "#f97316"
      },
      {
        id: "phylum-2",
        label: "Arthropoda",
        parentIds: ["kingdom-1"],
        children: ["class-3"],
        relations: [],
        color: "#f97316"
      },
      {
        id: "class-1",
        label: "Mammalia",
        parentIds: ["phylum-1"],
        children: [],
        relations: [],
        color: "#eab308"
      },
      {
        id: "class-2",
        label: "Aves",
        parentIds: ["phylum-1"],
        children: [],
        relations: [],
        color: "#eab308"
      },
      {
        id: "class-3",
        label: "Insecta",
        parentIds: ["phylum-2"],
        children: [],
        relations: [],
        color: "#eab308"
      }
    ],
    links: []
  },
  // Modèle: Architecture logicielle
  {
    id: "software-architecture",
    name: "Software Architecture",
    description: "Layered software architecture",
    isFavorite: !0,
    tags: [
      {
        id: "arch-1",
        label: "Application",
        parentIds: [],
        children: ["arch-2", "arch-3"],
        relations: [],
        color: "#3b82f6"
      },
      {
        id: "arch-2",
        label: "Presentation Layer",
        parentIds: ["arch-1"],
        children: ["arch-4"],
        relations: [],
        color: "#06b6d4"
      },
      {
        id: "arch-3",
        label: "Business Logic Layer",
        parentIds: ["arch-1"],
        children: ["arch-5"],
        relations: [],
        color: "#06b6d4"
      },
      {
        id: "arch-4",
        label: "Data Access Layer",
        parentIds: ["arch-2", "arch-3"],
        children: ["arch-6"],
        relations: [],
        color: "#8b5cf6"
      },
      {
        id: "arch-5",
        label: "Database",
        parentIds: ["arch-4"],
        children: [],
        relations: [],
        color: "#8b5cf6"
      },
      {
        id: "arch-6",
        label: "External Services",
        parentIds: ["arch-4"],
        children: [],
        relations: [],
        color: "#ec4899"
      }
    ],
    links: []
  },
  // Modèle: Processus de projet
  {
    id: "project-process",
    name: "Project Process",
    description: "Waterfall project phases",
    isFavorite: !1,
    tags: [
      {
        id: "phase-1",
        label: "Concept",
        parentIds: [],
        children: ["phase-2"],
        relations: [],
        color: "#22c55e"
      },
      {
        id: "phase-2",
        label: "Design",
        parentIds: ["phase-1"],
        children: ["phase-3"],
        relations: [],
        color: "#16a34a"
      },
      {
        id: "phase-3",
        label: "Development",
        parentIds: ["phase-2"],
        children: ["phase-4"],
        relations: [],
        color: "#15803d"
      },
      {
        id: "phase-4",
        label: "Testing",
        parentIds: ["phase-3"],
        children: ["phase-5"],
        relations: [],
        color: "#166534"
      },
      {
        id: "phase-5",
        label: "Deployment",
        parentIds: ["phase-4"],
        children: [],
        relations: [],
        color: "#14532d"
      }
    ],
    links: []
  }
], c = {
  id: "com.bigmind.dag-templates-collection",
  name: "DAG Templates Collection",
  version: "1.0.0",
  description: "3 templates DAG professionnels pour démarrer rapidement vos projets",
  /* eslint-disable max-len */
  longDescription: `Trois structures complètes et prêtes à l'emploi pour vous faire gagner du temps sur vos projets les plus courants. Chaque template inclut une hiérarchie de tags pré-configurée avec des couleurs harmonieuses et des relations logiques.

**Vos projets, instantanément structurés**

Que vous documentiez une taxonomie biologique, conceviez une architecture logicielle ou planifiez un projet en cascade, ces templates vous offrent une base solide pour construire vos cartes mentales. Plus besoin de recréer la même structure à chaque fois : appliquez le template et concentrez-vous sur le contenu.`,
  /* eslint-enable max-len */
  author: {
    name: "BigMind Team",
    email: "team@bigmind.com"
  },
  main: "dag-templates-collection-plugin.js",
  icon: "📋",
  logo: "/assets/plugin-logos/dag-templates-collection.svg",
  color: "#06B6D4",
  category: "productivity",
  tags: ["templates", "dag", "structures", "productivity"],
  license: "MIT",
  bigmindVersion: "1.0.0",
  // Classification
  source: "official",
  pricing: "free",
  featured: !0,
  autoActivate: !1,
  // User must enable manually
  // Marketing
  tagline: "Structures professionnelles prêtes à l'emploi",
  benefits: [
    "Biological Taxonomy : hiérarchie scientifique complète (Royaume → Phylum → Classe)",
    "Software Architecture : architecture en couches pour vos projets techniques",
    "Project Process : phases de projet en cascade (Waterfall)",
    "Templates favoris marqués pour accès rapide",
    "Couleurs harmonieuses pré-configurées",
    "Relations hiérarchiques déjà établies"
  ],
  useCases: [
    "Documentation scientifique : classifier des espèces avec Biological Taxonomy",
    "Conception logicielle : structurer votre code avec Software Architecture",
    "Gestion de projet : planifier les phases avec Project Process",
    "Apprentissage : comprendre des structures hiérarchiques complexes"
  ],
  // Features
  features: [
    {
      label: "Biological Taxonomy",
      description: "Classification hiérarchique biologique (Royaume → Phylum → Classe)",
      icon: "🧬"
    },
    {
      label: "Software Architecture",
      description: "Architecture logicielle en couches (Présentation → Logic → Data)",
      icon: "🏗️"
    },
    {
      label: "Project Process",
      description: "Phases de projet en cascade (Concept → Design → Dev → Test → Deploy)",
      icon: "📊"
    }
  ],
  // Changelog
  changelog: [
    {
      version: "1.0.0",
      date: "2025-01-28",
      changes: [
        {
          type: "added",
          description: 'Template "Biological Taxonomy" (favori)'
        },
        {
          type: "added",
          description: 'Template "Software Architecture" (favori)'
        },
        {
          type: "added",
          description: 'Template "Project Process"'
        }
      ]
    }
  ],
  // Hooks
  hooks: {
    listens: [],
    emits: []
  },
  // UI Contributions
  uiContributions: {
    commands: [],
    menus: [],
    panels: [],
    settings: !1
  },
  permissions: []
};
async function l(e) {
  t(s);
}
async function n() {
  s.forEach((e) => {
    o(e.id);
  });
}
export {
  l as activate,
  n as deactivate,
  c as manifest
};
