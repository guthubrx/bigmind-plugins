# 🧩 Cartae Plugins Repository

Official and community plugins for Cartae - the visual mind mapping and knowledge management tool.

## 📦 Structure

```
cartae-plugins/
├── official/          # Official plugins maintained by Cartae team
│   └── hello-world/  # Example plugin
├── community/         # Community-contributed plugins
├── tools/            # Build and validation tools
└── .github/          # CI/CD workflows
```

## 🚀 Quick Start

### Install a Plugin

```bash
# Clone this repository
git clone https://github.com/guthubrx/cartae-plugins.git

# Install a plugin in Cartae
# Copy the plugin folder to Cartae's plugins directory
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

- [Plugin Development Guide](https://docs.cartae.app/plugins)
- [API Reference](https://docs.cartae.app/api)
- [Contributing Guidelines](./CONTRIBUTING.md)

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.

Individual plugins may have their own licenses.

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

## 🔗 Links

- [Cartae App](https://github.com/guthubrx/cartae)
- [Documentation](https://docs.cartae.app)
- [Plugin SDK](https://www.npmjs.com/package/@cartae/plugin-sdk)
