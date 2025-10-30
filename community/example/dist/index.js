const n = {
  id: "com.bigmind.example",
  name: "Plugin Exemple",
  version: "1.0.0",
  description: "Un plugin d'exemple pour démontrer les fonctionnalités du système",
  author: "BigMind Team",
  main: "example-plugin.js",
  permissions: [],
  hooks: {
    listens: ["mindmap.nodeCreated"],
    emits: []
  }
};
class t {
  constructor() {
    this.manifest = n, this.context = null;
  }
  async activate(e) {
    this.context = e, e.hooks.registerAction("mindmap.nodeCreated", async (s) => {
    });
  }
  async deactivate() {
    this.context = null;
  }
}
const a = new t();
export {
  t as ExamplePlugin,
  a as default
};
