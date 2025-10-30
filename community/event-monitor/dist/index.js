class a {
  constructor() {
    this.events = [], this.maxEvents = 1e3, this.listeners = /* @__PURE__ */ new Set();
  }
  addEvent(e, t, o) {
    const s = {
      id: `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now(),
      type: e,
      category: t,
      data: o
    };
    this.events.unshift(s), this.events.length > this.maxEvents && (this.events = this.events.slice(0, this.maxEvents)), this.notifyListeners();
  }
  getEvents() {
    return [...this.events];
  }
  clear() {
    this.events = [], this.notifyListeners();
  }
  subscribe(e) {
    return this.listeners.add(e), () => this.listeners.delete(e);
  }
  notifyListeners() {
    this.listeners.forEach((e) => e([...this.events]));
  }
  setMaxEvents(e) {
    this.maxEvents = e, this.events.length > this.maxEvents && (this.events = this.events.slice(0, this.maxEvents), this.notifyListeners());
  }
}
const i = new a(), r = {
  id: "com.bigmind.event-monitor",
  name: "Event Monitor",
  version: "1.0.0",
  description: "Capture et affiche tous les événements système pour le debug",
  author: "BigMind Team",
  main: "event-monitor-plugin.js",
  permissions: []
};
async function h(n) {
  [
    // Node events
    { hook: "mindmap.nodeCreated", category: "nodes" },
    { hook: "mindmap.nodeUpdated", category: "nodes" },
    { hook: "mindmap.nodeDeleted", category: "nodes" },
    { hook: "mindmap.nodeSelected", category: "nodes" },
    { hook: "mindmap.nodeStyleChanged", category: "nodes" },
    // File events
    { hook: "file.created", category: "files" },
    { hook: "file.opened", category: "files" },
    { hook: "file.closed", category: "files" },
    { hook: "file.activated", category: "files" },
    { hook: "file.sheetChanged", category: "files" },
    // Viewport events
    { hook: "viewport.changed", category: "viewport" },
    // Color events
    { hook: "palette.changed", category: "colors" },
    { hook: "colors.applied", category: "colors" },
    { hook: "theme.changed", category: "colors" },
    // Settings events
    { hook: "settings.changed", category: "settings" },
    // Canvas events
    { hook: "canvas.optionChanged", category: "canvas" },
    // Tag events
    { hook: "tag.created", category: "tags" },
    { hook: "tag.deleted", category: "tags" },
    { hook: "tag.visibilityChanged", category: "tags" },
    { hook: "tag.nodeTagged", category: "tags" },
    { hook: "tag.nodeUntagged", category: "tags" }
  ].forEach(({ hook: t, category: o }) => {
    n.hooks.registerAction(t, async (s) => {
      i.addEvent(t, o, s);
    });
  });
}
async function c() {
  i.clear();
}
export {
  h as activate,
  c as deactivate,
  i as eventMonitorStore,
  r as manifest
};
