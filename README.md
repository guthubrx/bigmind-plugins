# 🧩 BigMind Plugins Repository

Official and community plugins for BigMind - the visual mind mapping and knowledge management tool.

## 📦 Structure

```
bigmind-plugins/
├── official/          # Official plugins maintained by BigMind team
│   └── hello-world/  # Example plugin
├── community/         # Community-contributed plugins
├── tools/            # Build and validation tools
└── .github/          # CI/CD workflows
```

## 🚀 Quick Start

### Install a Plugin

```bash
# Clone this repository
git clone https://github.com/guthubrx/bigmind-plugins.git

# Install a plugin in BigMind
# Copy the plugin folder to BigMind's plugins directory
```

### Create a Plugin

See [CONTRIBUTING.md](./CONTRIBUTING.md) for plugin development guidelines.

## 📋 Available Plugins

### Official Plugins

- **hello-world** - Example plugin demonstrating the plugin API

### Community Plugins

Coming soon! Contribute your plugin by opening a Pull Request.

## 🔧 Development

```bash
# Install dependencies
npm install

# Validate a plugin
npm run validate official/hello-world

# Build a plugin
npm run build official/hello-world
```

## 📖 Documentation

- [Plugin Development Guide](https://docs.bigmind.app/plugins)
- [API Reference](https://docs.bigmind.app/api)
- [Contributing Guidelines](./CONTRIBUTING.md)

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.

Individual plugins may have their own licenses.

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

## 🔗 Links

- [BigMind App](https://github.com/guthubrx/bigmind)
- [Documentation](https://docs.bigmind.app)
- [Plugin SDK](https://www.npmjs.com/package/@bigmind/plugin-sdk)
