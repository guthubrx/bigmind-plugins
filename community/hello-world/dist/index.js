async function c(o) {
  var e, l;
  console.log("👋 [Hello World] Plugin activated!"), (e = o.commands) == null || e.register("hello.world", () => {
    console.log("Hello from BigMind plugin system!"), console.log("🎉 Your plugin is working correctly.");
  }), (l = o.events) == null || l.on("mindmap.nodeCreated", (n) => {
    console.log("📝 [Hello World] A new node was created:", n);
  });
}
async function i() {
  console.log("👋 [Hello World] Plugin deactivated");
}
export {
  c as activate,
  i as deactivate
};
