const e = {
  id: "com.bigmind.analytics",
  name: "Plugin Analytics",
  version: "1.0.0",
  description: "Analyse et collecte des statistiques sur vos mindmaps (exemple)",
  author: "BigMind Team",
  main: "analytics-plugin.js",
  permissions: [],
  hooks: {
    listens: ["mindmap.nodeCreated", "mindmap.nodeUpdated", "mindmap.nodeDeleted"],
    emits: []
  }
};
class a {
  constructor() {
    this.manifest = e, this.context = null, this.stats = {
      nodesCreated: 0,
      nodesUpdated: 0,
      nodesDeleted: 0
    };
  }
  async activate(t) {
    this.context = t;
    try {
      const s = await t.api.storage.get("analytics-stats");
      s && (this.stats = JSON.parse(s));
    } catch {
    }
    t.hooks.registerAction("mindmap.nodeCreated", async () => {
      this.stats.nodesCreated += 1, await this.saveStats();
    }), t.hooks.registerAction("mindmap.nodeUpdated", async () => {
      this.stats.nodesUpdated += 1, await this.saveStats();
    }), t.hooks.registerAction("mindmap.nodeDeleted", async () => {
      this.stats.nodesDeleted += 1, await this.saveStats();
    });
  }
  async saveStats() {
    if (this.context)
      try {
        await this.context.api.storage.set("analytics-stats", JSON.stringify(this.stats));
      } catch (t) {
        console.error("❌ Failed to save stats:", t);
      }
  }
  async deactivate() {
    this.context = null;
  }
}
const n = new a();
export {
  a as AnalyticsPlugin,
  n as default
};
